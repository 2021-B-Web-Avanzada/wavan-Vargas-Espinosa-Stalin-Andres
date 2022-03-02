import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerGoalsModule } from './componentes/banner-goals/banner-goals.module';
import { BannerImagenesLearningModule } from './componentes/banner-imagenes-learning/banner-imagenes-learning.module';
import { BannerImagenesPersonasModule } from './componentes/banner-imagenes-personas/banner-imagenes-personas.module';
import { BannerImagenesSignupModule } from './componentes/banner-imagenes-signup/banner-imagenes-signup.module';
import { BannerImagenesModule } from './componentes/banner-imagenes/banner-imagenes.module';
import { BannerImagenesComponent } from './componentes/banner-imagenes/banner-imagenes/banner-imagenes.component';
import { FooterModule } from './componentes/footer/footer.module';

import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    BannerGoalsModule,
    BannerImagenesLearningModule,
    BannerImagenesPersonasModule,
    BannerImagenesSignupModule,
    FooterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
