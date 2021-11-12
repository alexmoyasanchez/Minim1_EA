import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nuevoevento',
  templateUrl: './nuevoevento.component.html',
  styleUrls: ['./nuevoevento.component.css']
})
export class NuevoeventoComponent implements OnInit {

  eventoForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private usuarioService : UsuarioService, private eventoService: EventoService, private router: Router) { }

  ngOnInit(): void {
    this.eventoForm = this.formBuilder.group({
      nombreEvento: ['', [Validators.required, Validators.nullValidator]],
      fecha: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]],
      nombre: ['', [Validators.required, Validators.nullValidator]],
      telefono: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.eventoForm.controls;
  }

  addevento(): void{
    
    const nombreEvento = this.eventoForm.value.nombreEvento;
    const fecha = this.eventoForm.value.fecha;
    const descripcion = this.eventoForm.value.descripcion;
    const nombre = this.eventoForm.value.nombre;
    const telefono = this.eventoForm.value.telefono;


    const usuario = {'nombre': nombre , 'telefono':telefono };
    const evento = {'nombreEvento': nombreEvento, 'fecha': fecha, 'descripcion': descripcion, 'usuario': usuario};
    console.log("Añadir usuario");
    
    this.eventoService.addEvento(evento).subscribe(data =>{
    })
    this.usuarioService.addUsuario(usuario).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
