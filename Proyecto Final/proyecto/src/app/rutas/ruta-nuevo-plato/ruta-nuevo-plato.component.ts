import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-nuevo-plato',
  templateUrl: './ruta-nuevo-plato.component.html',
  styleUrls: ['./ruta-nuevo-plato.component.scss']
})
export class RutaNuevoPlatoComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['modulos'])
  }
  categorias(){
    this.router.navigate(['categorias'])
  }
}
