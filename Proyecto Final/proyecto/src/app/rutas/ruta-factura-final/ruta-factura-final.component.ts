import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from '../../services/api/api.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {platoA} from "../../modelo/plato.interface";
import {clienteA} from "../../modelo/cliente.interface";
import {comprobanteA} from "../../modelo/comprobante.interface"
//import {AlertasService} from "../../servicios/alertas/alertas.service"

@Component({
  selector: 'app-ruta-factura-final',
  templateUrl: './ruta-factura-final.component.html',
  styleUrls: ['./ruta-factura-final.component.scss']
})
export class RutaFacturaFinalComponent implements OnInit {
  informacionCliente: clienteA[]=[];





  buscarForm = new FormGroup({
    fecha: new FormControl(''),
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),

  });
  listarForm = new FormGroup({
    id_comprobante: new FormControl('2'),
    id_plato: new FormControl('4'),
    id_cliente: new FormControl ('1'),
    fecha:new FormControl ('2022/03/11'),
   subtotal: new FormControl(''),
    total: new FormControl(''),
    estado_comprobante: new FormControl('pagado'),
    tipo_comprobante : new FormControl('Factura'),
    detalle: new FormControl('Sin novedad'),
    descuento : new FormControl(''),



  });

  constructor(
    private readonly activerouter:ActivatedRoute,
    private readonly router:Router,
    private readonly api:ApiService,


  ) { }

  ngOnInit(): void {
    let cedula = this.activerouter.snapshot.paramMap.get('cedula');
    this.api.obtenerClienteXCedula(cedula)
    {
      console.log(cedula)
      this.api.obtenerClienteXCedula(cedula)
        .subscribe({
          next:(data)=>{
            this.informacionCliente = data
            this.buscarForm.setValue({
              'fecha': new Date().toLocaleDateString(),
              'cedula': this.informacionCliente[0].cedula,
              'nombre': this.informacionCliente[0].nombre,
              'telefono':this.informacionCliente[0].telefono,
              'direccion': this.informacionCliente[0].direccion ,


            })
            //console.log(this.editarForm.value)
          }
        })
    }
  }
  crearComprobante(){
    alert(" el comprobante ha sido registrado exitosamente")


  }
  listaComprobantes(){
    this.router.navigate(['lista_comprobantes'])
  }

}
