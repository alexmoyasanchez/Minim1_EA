import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from '../models/evento'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }
  
  //obtenir tots els grups
  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(environment.apiURL + "/eventos");
  }

  //obtenir un grup
  getEvento(id: String): Observable<Evento>{
    return this.http.get<Evento>(environment.apiURL + "/eventos/" + id);
  }

  //afegir un grup
  addEvento(nuevoevento: Evento): Observable<any>{
    return this.http.post(environment.apiURL + '/eventos/new', nuevoevento);
  }

  //modificar un grup
  modificarEvento(eventomodificado: Evento, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/eventos/update/" + id, eventomodificado);
  }

  //elminar un grup
  eliminarEvento(id: String): Observable<any>{
    return this.http.delete<Evento>(environment.apiURL + "/eventos/"+ id);
    //return this.http.delete(this.apiURL+'/delete'+`/${id}`);
  }
}
