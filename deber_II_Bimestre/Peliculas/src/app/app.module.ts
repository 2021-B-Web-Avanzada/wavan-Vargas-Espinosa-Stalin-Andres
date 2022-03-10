import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaListaPeliculasComponent } from './rutas/ruta-lista-peliculas/ruta-lista-peliculas.component';
import { RutaListaCinesComponent } from './rutas/ruta-lista-cines/ruta-lista-cines.component';
import { RutaEditarPeliculasComponent } from './rutas/ruta-editar-peliculas/ruta-editar-peliculas.component';
import { RutaEditarCinesComponent } from './rutas/ruta-editar-cines/ruta-editar-cines.component';
import { RutaNuevaPeliculaComponent } from './rutas/ruta-nueva-pelicula/ruta-nueva-pelicula.component';
import { RutaNuevoCineComponent } from './rutas/ruta-nuevo-cine/ruta-nuevo-cine.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = []; // sets up routes constant where you define your routes
@NgModule({

  declarations: [
    AppComponent,
    RutaListaPeliculasComponent,
    RutaListaCinesComponent,
    RutaEditarPeliculasComponent,
    RutaEditarCinesComponent,
    RutaNuevaPeliculaComponent,
    RutaNuevoCineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
