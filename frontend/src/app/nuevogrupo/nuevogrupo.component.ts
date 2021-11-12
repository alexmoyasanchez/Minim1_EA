import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nuevogrupo',
  templateUrl: './nuevogrupo.component.html',
  styleUrls: ['./nuevogrupo.component.css']
})
export class NuevogrupoComponent implements OnInit {

  grupoinvestigacionForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private usuarioService : UsuarioService, private grupoService: GrupoinvestigacionService, private router: Router) { }

  ngOnInit(): void {
    this.grupoinvestigacionForm = this.formBuilder.group({
      nombregrupo: ['', [Validators.required, Validators.nullValidator]],
      id: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]],
      responsable: ['', [Validators.required, Validators.nullValidator]],
      url: ['', [Validators.required, Validators.nullValidator]],
      idUser: ['', [Validators.required, Validators.nullValidator]],
      username: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.grupoinvestigacionForm.controls;
  }

  addgrupo(): void{
    if(this.grupoinvestigacionForm.invalid){
      return;
    }
    const nombregrupo = this.grupoinvestigacionForm.value.nombregrupo;
    const id = this.grupoinvestigacionForm.value.id;
    const descripcion = this.grupoinvestigacionForm.value.descripcion;
    const responsable = this.grupoinvestigacionForm.value.responsable;
    const url = this.grupoinvestigacionForm.value.url;
    const idUser = this.grupoinvestigacionForm.value.idUser;
    const username = this.grupoinvestigacionForm.value.username;
    const password = this.grupoinvestigacionForm.value.password;
    const email = this.grupoinvestigacionForm.value.email;
    const grupo = this.grupoinvestigacionForm.value.grupo;

    console.log(url);

    const usuario = {'idUser': idUser , 'username':username , 'password': password, 'email': email, 'grupo' : grupo};
    const grupoinvestigacion = {'nombregrupo': nombregrupo, 'id': id, 'descripcion': descripcion, 'responsable': responsable, 'url': url, 'usuarios': usuario};
    console.log("Añadir usuario");
    this.usuarioService.addUsuario(usuario).subscribe(data =>{
    })
    this.grupoService.addGrupo(grupoinvestigacion).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
