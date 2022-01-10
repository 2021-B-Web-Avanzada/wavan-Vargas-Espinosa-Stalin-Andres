import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerImagenesPersonasComponent } from './banner-imagenes-personas/banner-imagenes-personas.component';



@NgModule({
  declarations: [
    BannerImagenesPersonasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerImagenesPersonasComponent
  ]
})
export class BannerImagenesPersonasModule { }
