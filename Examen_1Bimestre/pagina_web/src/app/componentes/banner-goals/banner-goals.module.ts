import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerGoalsComponent } from './banner-goals/banner-goals.component';



@NgModule({
  declarations: [
    BannerGoalsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerGoalsComponent
  ]
})
export class BannerGoalsModule { }
