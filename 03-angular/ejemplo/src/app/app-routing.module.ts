import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

const routes: Routes = [
  {
    path: 'Login',
    component: RutaLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
