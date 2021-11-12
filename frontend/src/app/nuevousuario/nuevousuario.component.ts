import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.nullValidator]],
      telefono: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.usuarioForm.controls;
  }

  addusuario(): void{
    if(this.usuarioForm.invalid){
      return;
    }
    const nombre = this.usuarioForm.value.nombre;
    const telefono = this.usuarioForm.value.telefono;

    const usuario = {'nombre': nombre, 'telefono': telefono};
    this.usuarioService.addUsuario(usuario).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
