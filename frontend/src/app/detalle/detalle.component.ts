import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';
import { UsuarioService } from '../services/usuario.service';
import { GrupoInvestigacion } from '../models/grupoinvestigacion';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  grupos: GrupoInvestigacion[];
  usuarios : Usuario[];

  constructor(private router: Router, private grupoService : GrupoinvestigacionService, private usuarioService : UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuarioByGrupo().subscribe(data =>{
        this.usuarios = data;
        console.log(this.usuarios);
  })

}

}
