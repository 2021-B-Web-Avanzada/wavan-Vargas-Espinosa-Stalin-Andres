import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-lista-clientes',
  templateUrl: './ruta-lista-clientes.component.html',
  styleUrls: ['./ruta-lista-clientes.component.scss']
})
export class RutaListaClientesComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
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
