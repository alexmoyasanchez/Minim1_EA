import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';
//import { debug } from 'console';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  eventoForm: FormGroup;
  evento: Evento;
  nombreEvento: String;
  constructor(private formBuilder: FormBuilder, private eventoService: EventoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombreEvento = this.route.snapshot.paramMap.get('nombreEvento');
    this.eventoService.getEvento(this.nombreEvento).subscribe(data =>{
      this.evento = data;
      this.eventoForm = this.formBuilder.group({
        nombreEvento: [this.evento.nombreEvento, [Validators.required, Validators.nullValidator]],
        fecha: [this.evento.fecha, [Validators.required, Validators.nullValidator]],
        descripcion: [this.evento.descripcion, [Validators.required, Validators.nullValidator]],
        nombre: ['', [Validators.required, Validators.nullValidator]],
        telefono: ['', [Validators.required, Validators.nullValidator]]
      });
    })
  }

  get formControls(){
    return this.eventoForm.controls;
  }

  atras(){

    this.router.navigateByUrl('/principal');
  }

  modificarevento(){
    if(this.eventoForm.invalid){
      return;
    }
    
    const nombreEvento = this.eventoForm.value.nombreEvento;
    const fecha = this.eventoForm.value.fecha;
    const descripcion = this.eventoForm.value.descripcion;
    const nombre = this.eventoForm.value.nombre;
    const telefono = this.eventoForm.value.telefono;

    const usuario = {'nombre': nombre , 'telefono':telefono };
    const eventomodificado = {'nombreEvento': nombreEvento, 'fecha': fecha, 'descripcion': descripcion, 'usuario': usuario};
    this.eventoService.modificarEvento(eventomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }


}
