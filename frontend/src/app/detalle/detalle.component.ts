import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { EventoService } from '../services/evento.service';
import { UsuarioService } from '../services/usuario.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  eventos: Evento[];
  usuarios : Usuario[];

  constructor(private router: Router, private eventoService : EventoService, private usuarioService : UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuarios().subscribe(data =>{
        this.usuarios = data;
        console.log(this.usuarios);
  })

}

}
