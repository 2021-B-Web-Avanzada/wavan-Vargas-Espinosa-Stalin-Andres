import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../../services/api/api.service'
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {clienteA} from "../../modelo/cliente.interface";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ruta-informacion-factura',
  templateUrl: './ruta-informacion-factura.component.html',
  styleUrls: ['./ruta-informacion-factura.component.scss']
})
export class RutaInformacionFacturaComponent implements OnInit {
  informacionCliente: clienteA[]=[];

  buscarForm = new FormGroup({
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    direccion: new FormControl(''),
    ciudad: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(


    private readonly router:Router,
    private readonly api:ApiService,

  ) { }

  ngOnInit(): void {
  }
  buscarClienteXCedula(cedula?:any){
    console.log(cedula)
    this.api.obtenerClienteXCedula(cedula)
      .subscribe({
        next:(data)=>{
          this.informacionCliente = data
          this.buscarForm.setValue({
            'cedula': this.informacionCliente[0].cedula,
            'nombre': this.informacionCliente[0].nombre,
            'direccion': this.informacionCliente[0].direccion,
            'ciudad':this.informacionCliente[0].ciudad,
            'telefono': this.informacionCliente[0].telefono ,
            'email':this.informacionCliente[0].email,

          })
          //console.log(this.editarForm.value)
        }
      })
  }
  regresar(){
    this.router.navigate(['tipo_comprobante'])
  }
  continuar(cedula?:any){
    this.router.navigate(['factura_final',cedula])
  }
  buscar(){

  }
}
