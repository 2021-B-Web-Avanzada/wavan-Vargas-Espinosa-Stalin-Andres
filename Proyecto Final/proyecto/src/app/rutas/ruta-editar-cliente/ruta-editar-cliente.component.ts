import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-cliente',
  templateUrl: './ruta-editar-cliente.component.html',
  styleUrls: ['./ruta-editar-cliente.component.scss']
})
export class RutaEditarClienteComponent implements OnInit {

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
