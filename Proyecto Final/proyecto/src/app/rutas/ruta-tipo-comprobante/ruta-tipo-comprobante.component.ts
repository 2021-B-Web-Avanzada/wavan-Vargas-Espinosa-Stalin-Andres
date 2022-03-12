import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-tipo-comprobante',
  templateUrl: './ruta-tipo-comprobante.component.html',
  styleUrls: ['./ruta-tipo-comprobante.component.scss']
})
export class RutaTipoComprobanteComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
factura(){
    let valor = 'factura'
this.router.navigate(['informacion_factura',valor])
  }
  consumidor(){
    let valor = 'consumidor final'
this.router.navigate(['consumidor_final', valor])
  }
  salir(){
    this.router.navigate(['modulo_comprobante'])
  }




}
