import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {
  urlLogo = 'https://getlogovector.com/wp-content/uploads/2020/11/codecademy-logo-vector.png'
  urlBuscar= 'https://cdn.sstatic.net/Sites/es/img/apple-touch-icon.png?v=7739871010e6'
  urlmarketing= 'https://www.codecademy.com/webpack/bd870120b390f25da8a6b059020cd183.jpeg'
  ngOnInit(): void {
  }

}
