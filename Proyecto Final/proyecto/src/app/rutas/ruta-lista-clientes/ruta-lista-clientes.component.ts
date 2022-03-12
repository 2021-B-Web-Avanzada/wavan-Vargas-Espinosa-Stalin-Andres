import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service"
import { Router } from '@angular/router';
import {listaclientesA} from "../../modelo/listaclientes.interface";

@Component({
  selector: 'app-ruta-lista-clientes',
  templateUrl: './ruta-lista-clientes.component.html',
  styleUrls: ['./ruta-lista-clientes.component.scss']
})
export class RutaListaClientesComponent implements OnInit {

  clientes:listaclientesA[] = []
  constructor(
    private readonly api:ApiService,
    private readonly router:Router,

  ) { }

  ngOnInit(): void {
    this.api.obtenerTodosClientes().subscribe({
      next: (data)=>{ this.clientes = data
      },
      error: (error) => {
        console.log({error});
      }
    })
  }



  regresar(){
    this.router.navigate(['modulos'])
  }
  anadir(){
  this.router.navigate(['nuevo_cliente'])
  }
  editar(){
  this.router.navigate(['editar_cliente'])
  }
  borrar(){

  }


}
