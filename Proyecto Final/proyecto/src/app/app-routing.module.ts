import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
