import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaEditarCinesComponent } from './rutas/ruta-editar-cines/ruta-editar-cines.component';
import { RutaEditarPeliculasComponent } from './rutas/ruta-editar-peliculas/ruta-editar-peliculas.component';
import { RutaListaCinesComponent } from './rutas/ruta-lista-cines/ruta-lista-cines.component';
import { RutaListaPeliculasComponent } from './rutas/ruta-lista-peliculas/ruta-lista-peliculas.component';
import { RutaNuevaPeliculaComponent } from './rutas/ruta-nueva-pelicula/ruta-nueva-pelicula.component';
import { RutaNuevoCineComponent } from './rutas/ruta-nuevo-cine/ruta-nuevo-cine.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/ruta-lista-cines',
    pathMatch: 'full'
  },
  {
    path:'ruta-lista-cines',
    component: RutaListaCinesComponent
  },

  {
    path:'ruta-editar-cines/:id',
    component: RutaEditarCinesComponent
  },
  {
    path:'ruta-nuevo-cine',
    component:RutaNuevoCineComponent
  },
  {
    path:'ruta-lista-peliculas/:id_pelicula',
    component: RutaListaPeliculasComponent
  },
  {
    path: 'ruta-editar-peliculas/:id_pelicula',
    component: RutaEditarPeliculasComponent
  },
  {
    path: 'ruta-nueva-pelicula/:id_pelicula',
    component: RutaNuevaPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
