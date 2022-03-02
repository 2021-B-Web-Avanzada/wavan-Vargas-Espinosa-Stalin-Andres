import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerImagenesModuloModule } from './componentes/banner-imagenes-modulo/banner-imagenes-modulo.module';
import { BannerImagenesModule } from './componentes/banner-imagenes/banner-imagenes.module';
import { BannerImagenesComponent } from './componentes/banner-imagenes/banner-imagenes/banner-imagenes.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaModulosComponent } from './rutas/ruta-modulos/ruta-modulos.component';


@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaModulosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    BannerImagenesModuloModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
