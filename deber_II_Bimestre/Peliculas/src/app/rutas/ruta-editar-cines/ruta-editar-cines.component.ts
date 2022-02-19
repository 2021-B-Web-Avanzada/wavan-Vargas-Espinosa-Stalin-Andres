import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ApiService} from '../../servicios/api/api.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {cine} from "../../interfaces/cine.interface";
//import {AlertasService} from "../../servicios/alertas/alertas.service"


@Component({
  selector: 'app-ruta-editar-cines',
  templateUrl: './ruta-editar-cines.component.html',
  styleUrls: ['./ruta-editar-cines.component.scss']
})
export class RutaEditarCinesComponent implements OnInit {

  informacionCine: cine[]=[];


  editFormulario= new FormGroup({
      id: new FormControl(''),
      nombre_cine: new FormControl(''),
      Direccion: new FormControl(''),
      administrador: new FormControl(''),
      TelefonoContacto:new FormControl(''),
      hora_Apertura:new FormControl(''),
    }

  );

  constructor(
    private readonly activerouter:ActivatedRoute,
    private readonly router:Router,
    private readonly api:ApiService,
    //private  readonly alertas:AlertasService
  ) { }


  ngOnInit(): void {
    let id_cine = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerCinexId(id_cine)
      .subscribe({
        next:(data)=>{
          this.informacionCine = data
          this.editFormulario.setValue({
            'id': this.informacionCine[0].id,
            'nombre_cine': this.informacionCine[0].nombre_cine,
            'Direccion':this.informacionCine[0].Direccion,
            'administrador': this.informacionCine[0].administrador,
            'TelefonoContacto':this.informacionCine[0].TelefonoContacto,
            'hora_Apertura':this.informacionCine[0].hora_Apertura
          })
          //console.log(this.editarForm.value)
        }
      })
    console.log(id_cine)
  }

  actualizarCine(form:cine,id?:any){
    console.log(id +  "este es el id" )
    this.api.actualizarCine(form, id).subscribe({
      next: (data)=>{
        //his.alertas.showSuccess('Datos actualizados','Bien!');
        console.log(data)
      }
    })
    console.log(form)
  }

  eliminarCine(id_cine:any){
    let datos:cine = this.editFormulario.value;
    this.api.borrarCine(datos,id_cine).subscribe({
      next:(data)=>{
       // this.alertas.showSuccess('Género eliminado','Bien!');
        this.router.navigate(['ruta-lista-cines']);
        console.log(data)
      }
    })
  }

  salir(){
    this.router.navigate(['ruta-lista-cines']);
  }
  VerListaPeliculas(id:number){
    console.log(id + ' envia')
    this.router.navigate(['ruta-lista-peliculas',id]);

  }

}
