import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-informacion-consumidor-final',
  templateUrl: './ruta-informacion-consumidor-final.component.html',
  styleUrls: ['./ruta-informacion-consumidor-final.component.scss']
})
export class RutaInformacionConsumidorFinalComponent implements OnInit {

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
}
