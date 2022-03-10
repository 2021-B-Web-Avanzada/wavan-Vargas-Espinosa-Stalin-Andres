import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-categorias',
  templateUrl: './ruta-categorias.component.html',
  styleUrls: ['./ruta-categorias.component.scss']
})
export class RutaCategoriasComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
  anadir(){
  this.router.navigate(['nuevo_plato'])
  }
  editar(){
  this.router.navigate(['editar_plato'])
  }
  borrar(){

  }
  regresar(){
  this.router.navigate(['modulos'])
  }

}
