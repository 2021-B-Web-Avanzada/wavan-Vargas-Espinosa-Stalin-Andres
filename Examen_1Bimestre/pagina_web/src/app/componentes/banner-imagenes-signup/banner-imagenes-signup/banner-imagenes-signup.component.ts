import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes-signup',
  templateUrl: './banner-imagenes-signup.component.html',
  styleUrls: ['./banner-imagenes-signup.component.scss']
})
export class BannerImagenesSignupComponent implements OnInit {
  urlImagen2 = 'https://www.codecademy.com/webpack/4d1f9782b0f3c8516e4bbee474e4152e.png'
  urlimagen1 = 'https://www.codecademy.com/webpack/4d1f9782b0f3c8516e4bbee474e4152e.png'
  constructor() { }

  ngOnInit(): void {
  }

}
