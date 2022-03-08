import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-nuevo-cliente',
  templateUrl: './ruta-nuevo-cliente.component.html',
  styleUrls: ['./ruta-nuevo-cliente.component.scss']
})
export class RutaNuevoClienteComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['modulos'])
  }
  lista_clientes(){
    this.router.navigate(['lista_clientes'])
  }
}
