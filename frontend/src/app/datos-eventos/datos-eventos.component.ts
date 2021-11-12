import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-datos-eventos',
  templateUrl: './datos-eventos.component.html',
  styleUrls: ['./datos-eventos.component.css']
})
export class DatosEventosComponent implements OnInit {

  @Input()
  evento: Evento;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modificar(){
    this.router.navigate(['/' + this.evento.nombreEvento]);
  }

  
  

}
