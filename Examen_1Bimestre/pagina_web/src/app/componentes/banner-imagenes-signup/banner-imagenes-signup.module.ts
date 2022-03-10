import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerImagenesSignupComponent } from './banner-imagenes-signup/banner-imagenes-signup.component';



@NgModule({
  declarations: [
    BannerImagenesSignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BannerImagenesSignupComponent
  ]
})
export class BannerImagenesSignupModule { }
