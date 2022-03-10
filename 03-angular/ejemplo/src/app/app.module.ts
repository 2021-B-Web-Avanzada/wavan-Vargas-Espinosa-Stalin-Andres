import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaHostComponent } from './rutas/ruta-host/ruta-host.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { AuthService } from './servicios/auth/auth-services';
import { EstaLogueadoGuard } from './servicios/auth/esta-logueado.guard';
import { EsAdministradorGuard } from './servicios/auth/es-administrador.guard';
import { BannerImagenesModule } from './componentes/banner-imagenes/banner-imagenes.module';


@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaNotFoundComponent,
    RutaForbiddenComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaHostComponent,
    RutaAppComponent,
    RutaPostComponent
  ],
  imports: [

    BrowserModule,
    //
    AppRoutingModule,
    BannerImagenesModule
  ],
  //servicios
  providers: [
    AuthService,
    EstaLogueadoGuard,
    EsAdministradorGuard
  ],
  //componenete principal
  bootstrap: [AppComponent]
})
export class AppModule { }
