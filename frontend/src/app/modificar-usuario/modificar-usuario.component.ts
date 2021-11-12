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
        id: [this.usuario.idUser, [Validators.required, Validators.nullValidator]],
        username: [this.usuario.username, [Validators.required, Validators.nullValidator]],
        password: [this.usuario.password, [Validators.required, Validators.nullValidator]],
        email: [this.usuario.email, [Validators.required, Validators.nullValidator]],
        grupo: [this.usuario.grupo, [Validators.required, Validators.nullValidator]]
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
    const id = this.usuarioForm.value.id;
    const username = this.usuarioForm.value.username;
    const password = this.usuarioForm.value.password;
    const email = this.usuarioForm.value.email;
    const grupo = this.usuarioForm.value.grupo;


    const usuariomodificado = {'idUser': id, 'username': username, 'password': password, 'email': email, 'grupo': grupo};
    this.usuarioService.modificarUsuario(usuariomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  deleteUsuario(){
    const id = this.usuarioForm.value.id;
    console.log(id);
    this.usuarioService.eliminarUsuario(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}
