import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { EventoService } from '../services/evento.service';
import { UsuarioService } from '../services/usuario.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  eventos: Evento[];
  usuarios : Usuario[];

  constructor(private router: Router, private eventoService : EventoService, private usuarioService : UsuarioService) { }

  ngOnInit(): void {

    this.eventoService.getEventos().subscribe(data =>{
      this.eventos = data;
      console.log(this.eventos);
    })

    
  }
  

  nuevoEvento(){
    this.router.navigateByUrl('/nuevoevento');
  }


}
