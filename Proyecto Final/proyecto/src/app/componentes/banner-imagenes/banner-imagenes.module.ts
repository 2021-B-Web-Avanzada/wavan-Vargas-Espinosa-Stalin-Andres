import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerImagenesComponent } from './banner-imagenes/banner-imagenes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BannerImagenesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    BannerImagenesComponent
  ]
})
export class BannerImagenesModule { }
