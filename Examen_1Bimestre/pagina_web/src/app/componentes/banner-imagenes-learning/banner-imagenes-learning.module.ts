import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerImagenesLearningComponent } from './banner-imagenes-learning/banner-imagenes-learning.component';



@NgModule({
  declarations: [
    BannerImagenesLearningComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BannerImagenesLearningComponent
  ]
})
export class BannerImagenesLearningModule { }
