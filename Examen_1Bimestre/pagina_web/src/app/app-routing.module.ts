import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent,
  },
  {
    path: '**',
    component: RutaNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
