import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-lista-comprobantes',
  templateUrl: './ruta-lista-comprobantes.component.html',
  styleUrls: ['./ruta-lista-comprobantes.component.scss']
})
export class RutaListaComprobantesComponent implements OnInit {
  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['modulo_comprobante'])
  }
}
