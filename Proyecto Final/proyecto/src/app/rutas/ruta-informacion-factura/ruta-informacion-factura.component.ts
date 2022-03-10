import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-informacion-factura',
  templateUrl: './ruta-informacion-factura.component.html',
  styleUrls: ['./ruta-informacion-factura.component.scss']
})
export class RutaInformacionFacturaComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['tipo_comprobante'])
  }
  continuar(){
    this.router.navigate(['factura_final'])
  }
  buscar(){

  }
}
