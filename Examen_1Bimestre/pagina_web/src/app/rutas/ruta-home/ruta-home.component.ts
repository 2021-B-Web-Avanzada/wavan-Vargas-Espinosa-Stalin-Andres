import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss']
})
export class RutaHomeComponent implements OnInit {
  urlImagen = 'https://www.codecademy.com/webpack/7f8fd6dd32aa8afc918a5cf6a9fe2933.svg'
  constructor() { }

  ngOnInit(): void {
  }

}
