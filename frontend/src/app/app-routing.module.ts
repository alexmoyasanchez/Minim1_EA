import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarComponent } from './modificar/modificar.component';
import { NuevoeventoComponent } from './nuevoevento/nuevoevento';
import { PrincipalComponent } from './principal/principal.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { DetalleComponent } from './detalle/detalle.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'nuevoevento', component: NuevoeventoComponent},
  { path: 'nuevousuario', component: NuevousuarioComponent},
  { path: ':id', component: ModificarComponent},
  { path: 'modificarusuario/:id', component: ModificarUsuarioComponent},
  { path: 'detalle/:id', component : DetalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
