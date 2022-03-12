import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../../services/api/api.service'
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {clienteA} from "../../modelo/cliente.interface";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ruta-nuevo-cliente',
  templateUrl: './ruta-nuevo-cliente.component.html',
  styleUrls: ['./ruta-nuevo-cliente.component.scss']
})
export class RutaNuevoClienteComponent implements OnInit {

  nuevoForm = new FormGroup({
    // idgenero: new FormControl(''),
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    direccion: new FormControl(''),
    ciudad:new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    fecha_nacimiento: new FormControl(''),

   // id_cliente

  });
  constructor(

    private readonly router:Router,
    private readonly api:ApiService,
  ) { }

  ngOnInit(): void {
  }
  crearCliente(form:clienteA){
    this.api.crearCliente(form).subscribe({
      next:(data)=>{
        //this.alertas.showSuccess('Cine creado correctamente','Bien!');
        console.log(data)
      }
    })
    alert(" el cliente ha sido registrado exitosamente")
    this.lista_clientes()

  }
  regresar(){
    this.router.navigate(['modulos'])
  }
  lista_clientes(){
    this.router.navigate(['lista_clientes'])
  }
}
