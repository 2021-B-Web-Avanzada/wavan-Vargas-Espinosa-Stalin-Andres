import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerImagenesModule } from './componentes/banner-imagenes/banner-imagenes.module';
import { BannerImagenesComponent } from './componentes/banner-imagenes/banner-imagenes/banner-imagenes.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';


@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
