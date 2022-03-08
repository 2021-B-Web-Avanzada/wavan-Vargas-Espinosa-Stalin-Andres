import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerImagenesModuloComponent } from './componentes/banner-imagenes-modulo/banner-imagenes-modulo/banner-imagenes-modulo.component';
import { RutaCategoriasComponent } from './rutas/ruta-categorias/ruta-categorias.component';
import { RutaEditarClienteComponent } from './rutas/ruta-editar-cliente/ruta-editar-cliente.component';
import { RutaEditarPlatoComponent } from './rutas/ruta-editar-plato/ruta-editar-plato.component';
import { RutaListaClientesComponent } from './rutas/ruta-lista-clientes/ruta-lista-clientes.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaModulosComponent } from './rutas/ruta-modulos/ruta-modulos.component';
import { RutaNuevoClienteComponent } from './rutas/ruta-nuevo-cliente/ruta-nuevo-cliente.component';
import { RutaNuevoPlatoComponent } from './rutas/ruta-nuevo-plato/ruta-nuevo-plato.component';

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
  },
  {
    path: 'nuevo_plato',
    component: RutaNuevoPlatoComponent
  },
  {
    path: 'editar_plato',
    component: RutaEditarPlatoComponent
  },
  {
    path: 'lista_clientes',
    component: RutaListaClientesComponent
  },
  {
    path: 'nuevo_cliente',
    component: RutaNuevoClienteComponent
  },
  {
    path: 'editar_cliente',
    component: RutaEditarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
