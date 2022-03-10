import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-plato',
  templateUrl: './ruta-editar-plato.component.html',
  styleUrls: ['./ruta-editar-plato.component.scss']
})
export class RutaEditarPlatoComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
regresar(){
    this.router.navigate(['categorias'])
}
categorias(){
    this.router.navigate(['categorias'])
}
}
