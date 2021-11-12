import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';
//import { debug } from 'console';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: Usuario;
  id: String;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(this.id).subscribe(data =>{
      this.usuario = data;
      this.usuarioForm = this.formBuilder.group({
        nombre: [this.usuario.nombre, [Validators.required, Validators.nullValidator]],
        telefono: [this.usuario.telefono, [Validators.required, Validators.nullValidator]]
      });
    })
  }

  get formControls(){
    return this.usuarioForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificarUsuario(){
    if(this.usuarioForm.invalid){
      return;
    }
    const nombre = this.usuarioForm.value.nombre;
    const telefono = this.usuarioForm.value.telefono;


    const usuariomodificado = {'nombre': nombre, 'telefono': telefono};
    this.usuarioService.modificarUsuario(usuariomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }


}
