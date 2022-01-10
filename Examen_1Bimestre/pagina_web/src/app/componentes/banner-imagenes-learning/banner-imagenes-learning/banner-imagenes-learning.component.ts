import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes-learning',
  templateUrl: './banner-imagenes-learning.component.html',
  styleUrls: ['./banner-imagenes-learning.component.scss']
})
export class BannerImagenesLearningComponent implements OnInit {
urlImagen = 'https://www.codecademy.com/webpack/6ec4b420dc8670b142697aef15790edc.png'


  constructor() { }



  ngOnInit(): void {
  }

  mostrarImagen(id: any) {
  if (id==1){
    this.urlImagen='https://www.codecademy.com/webpack/6ec4b420dc8670b142697aef15790edc.png'
  }
  if (id==2){
    this.urlImagen='https://www.codecademy.com/webpack/d7fb2d9aab738d7ec848ef1920a50951.png'
  }
    if (id==3){
      this.urlImagen=  'https://www.codecademy.com/webpack/8ddaec73d2674208e3a14e3aa7eea320.png'
    }
    if (id==4){
      this.urlImagen= 'https://www.codecademy.com/webpack/2f52a0b420a8a953daf682f777b3dd45.png'
    }
    if (id==5){
      this.urlImagen = 'https://www.codecademy.com/webpack/a918a444f1caf181a3fa7f8af8f0cf78.png'
    }

  }
}
