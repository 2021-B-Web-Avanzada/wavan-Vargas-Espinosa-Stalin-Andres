import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../../services/api/api.service'
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {platoA} from "../../modelo/plato.interface";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ruta-nuevo-plato',
  templateUrl: './ruta-nuevo-plato.component.html',
  styleUrls: ['./ruta-nuevo-plato.component.scss']
})
export class RutaNuevoPlatoComponent implements OnInit {

  nuevoForm = new FormGroup({
    // idgenero: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    categoria:new FormControl(''),

  });
  constructor(

    private readonly router:Router,
    private readonly api:ApiService,

  ) { }

  ngOnInit(): void {
  }

  crearPlato(form:platoA){
    this.api.crearPlato(form).subscribe({
      next:(data)=>{
        //this.alertas.showSuccess('Cine creado correctamente','Bien!');
        console.log(data)
      }
    })

  }
  regresar(){
    this.router.navigate(['categorias'])
  }
  categorias(){
    this.router.navigate(['categorias'])
  }
  alert(){
    alert("Producto registrado exitosamente")
  }
}
