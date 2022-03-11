import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service"
import { Router } from '@angular/router';
import {listaplatosA} from "../../modelo/listaplatos.interface";

@Component({
  selector: 'app-ruta-categorias',
  templateUrl: './ruta-categorias.component.html',
  styleUrls: ['./ruta-categorias.component.scss']
})
export class RutaCategoriasComponent implements OnInit {

  platos:listaplatosA[] = []

  constructor(
    private readonly api:ApiService,
    private readonly router:Router,

  ) { }

  ngOnInit(): void {
    this.api.obtenerTodosPlatos().subscribe({
      next: (data)=>{ this.platos = data
    },
      error: (error) => {
        console.log({error});
      }
    })
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
