import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {cine} from "../../interfaces/cine.interface";
//import {AlertasService} from "../../servicios/mensajes_Informativos/mensajes_Informativos.service"
import {ApiService} from '../../servicios/api/api.service'
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-nuevo-cine',
  templateUrl: './ruta-nuevo-cine.component.html',
  styleUrls: ['./ruta-nuevo-cine.component.scss']
})
export class RutaNuevoCineComponent implements OnInit {

  nuevoForm = new FormGroup({
    // idgenero: new FormControl(''),
    nombre_cine: new FormControl(''),
    Direccion: new FormControl(''),
    administrador: new FormControl(''),
    telefonoContacto:new FormControl(''),
    hora_Apertura:new FormControl(''),
  });


  constructor(
    private readonly api:ApiService,
    private readonly router:Router,
    //private readonly alertas:AlertasService
  ) { }

  ngOnInit(): void {
  }

  postForm(form:cine){
    this.api.crearCine(form).subscribe({
      next:(data)=>{
        //this.alertas.showSuccess('Cine creado correctamente','Bien!');
        console.log(data)
      }
    })

  }

  salir(){
    this.router.navigate(['ruta-lista-cines']);
  }

}
