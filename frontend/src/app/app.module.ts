import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DatosEventosComponent } from './datos-eventos/datos-eventos.component';
import { NuevoeventoComponent } from './nuevoevento/nuevoevento';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { DatosUsuariosComponent } from './datos-usuarios/datos-usuarios.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DatosEventosComponent,
    NuevoeventoComponent,
    ModificarComponent,
    NuevousuarioComponent,
    ModificarUsuarioComponent,
    DatosUsuariosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
