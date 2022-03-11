import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerImagenesModuloModule } from './componentes/banner-imagenes-modulo/banner-imagenes-modulo.module';
import { BannerImagenesModule } from './componentes/banner-imagenes/banner-imagenes.module';
import { BannerImagenesComponent } from './componentes/banner-imagenes/banner-imagenes/banner-imagenes.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaModulosComponent } from './rutas/ruta-modulos/ruta-modulos.component';
import { RutaCategoriasComponent } from './rutas/ruta-categorias/ruta-categorias.component';
import { RutaNuevoPlatoComponent } from './rutas/ruta-nuevo-plato/ruta-nuevo-plato.component';
import { RutaEditarPlatoComponent } from './rutas/ruta-editar-plato/ruta-editar-plato.component';
import { RutaListaClientesComponent } from './rutas/ruta-lista-clientes/ruta-lista-clientes.component';
import { RutaNuevoClienteComponent } from './rutas/ruta-nuevo-cliente/ruta-nuevo-cliente.component';
import { RutaEditarClienteComponent } from './rutas/ruta-editar-cliente/ruta-editar-cliente.component';
import { RutaModuloComprobanteComponent } from './rutas/ruta-modulo-comprobante/ruta-modulo-comprobante.component';
import { RutaListaComprobantesComponent } from './rutas/ruta-lista-comprobantes/ruta-lista-comprobantes.component';
import { RutaTipoComprobanteComponent } from './rutas/ruta-tipo-comprobante/ruta-tipo-comprobante.component';
import { RutaInformacionFacturaComponent } from './rutas/ruta-informacion-factura/ruta-informacion-factura.component';
import { RutaInformacionConsumidorFinalComponent } from './rutas/ruta-informacion-consumidor-final/ruta-informacion-consumidor-final.component';
import { RutaFacturaFinalComponent } from './rutas/ruta-factura-final/ruta-factura-final.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaModulosComponent,
    RutaCategoriasComponent,
    RutaNuevoPlatoComponent,
    RutaEditarPlatoComponent,
    RutaListaClientesComponent,
    RutaNuevoClienteComponent,
    RutaEditarClienteComponent,
    RutaModuloComprobanteComponent,
    RutaListaComprobantesComponent,
    RutaTipoComprobanteComponent,
    RutaInformacionFacturaComponent,
    RutaInformacionConsumidorFinalComponent,
    RutaFacturaFinalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    BannerImagenesModuloModule,
    FormsModule,
    ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
