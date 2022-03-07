import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerImagenesModuloComponent } from './componentes/banner-imagenes-modulo/banner-imagenes-modulo/banner-imagenes-modulo.component';
import { RutaCategoriasComponent } from './rutas/ruta-categorias/ruta-categorias.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaModulosComponent } from './rutas/ruta-modulos/ruta-modulos.component';

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:  'modulos',
    component: RutaModulosComponent,

  },
  {
    path: 'categorias',
    component: RutaCategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
