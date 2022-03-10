import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {pelicula} from "../../interfaces/pelicula.interface";
//import {AlertasService} from "../../servicios/alertas/alertas.service"
import {ApiService} from '../../servicios/api/api.service'
import {ActivatedRoute, Router} from "@angular/router";
import {cine} from "../../interfaces/cine.interface";
@Component({
  selector: 'app-ruta-nueva-pelicula',
  templateUrl: './ruta-nueva-pelicula.component.html',
  styleUrls: ['./ruta-nueva-pelicula.component.scss']
})
export class RutaNuevaPeliculaComponent implements OnInit {

  nuevoForm = new FormGroup({
    id: new FormControl({
      value: this.activerouter.snapshot.paramMap.get('id'),
      disabled: false
    }),
    nombrePelicula: new FormControl(''),
    Categoria: new FormControl(''),
    Esta_en_Cartelera:new FormControl(''),
    restriccion:new FormControl(''),
    fecha_estreno: new FormControl(''),

  });

  constructor(
    private readonly api:ApiService,
    private readonly router:Router,
   // private readonly alertas:AlertasService,
    private readonly activerouter:ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  crearPelicula(form:pelicula){
    let id = this.activerouter.snapshot.paramMap.get('id');
    this.api.crearPelicula(form).subscribe({
      next:(data)=>{
      //  this.alertas.showSuccess('Artista añadido correctamente','Bien!');
        console.log(data)
      }
    })

  }
  salir(){
    let idgenero = this.activerouter.snapshot.paramMap.get('id');
    this.router.navigate(['ruta-lista-peliculas',5]);
  }



}
