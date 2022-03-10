import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, RouterEvent} from '@angular/router';
import {pelicula} from '../../interfaces/pelicula.interface'
import{ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Observable} from "rxjs";
//import {AlertasService} from "../../servicios/alertas/alertas.service"

@Component({
  selector: 'app-ruta-editar-peliculas',
  templateUrl: './ruta-editar-peliculas.component.html',
  styleUrls: ['./ruta-editar-peliculas.component.scss']
})
export class RutaEditarPeliculasComponent implements OnInit {

  constructor(
    private  readonly activerouter: ActivatedRoute,
    private  readonly router:Router,
    private readonly api:ApiService,
   // private  readonly alertas:AlertasService
  ) { }

  datospelicula:pelicula[] = [];
  formularioPelicula =  new FormGroup({
      id_pelicula: new  FormControl(''),
      id: new FormControl(''),
      nombrePelicula: new FormControl(''),
      Categoria: new FormControl(''),
      Esta_en_Cartelera: new FormControl(''),
      restriccion: new FormControl(''),
      fecha_estreno: new FormControl('')
    }

  )

  ngOnInit(): void {
    let id=5
    this.api.obtenerPeliculasxId(id).subscribe({
      next:(data)=>{
        this.datospelicula = data;

        this.formularioPelicula.setValue(
          {
            'id_pelicula': this.datospelicula[0].id_pelicula,
            'id': this.datospelicula[0].id,
            'nombrePelicula': this.datospelicula[0].nombrePelicula,
            'Categoria': this.datospelicula[0].Categoria,
            'Esta_en_Cartelera': this.datospelicula[0].Esta_en_Cartelera,
            'restriccion': this.datospelicula[0].restriccion,
            'fecha_estreno': this.datospelicula[0].fecha_estreno
          }
        );
        // console.log(this.editarFormArtista.value)
      }
    })

  }
  actualizarPelicula(form:pelicula, id:number){
    this.api.actualizarPelicula(form,id).subscribe({
      next:(data)=>{
        //this.alertas.showSuccess('Datos actualizados','Bien!');
        console.log(data)
      }
    })
    console.log(form)
  }

  borrarPelicula(id:number){
    let datos:pelicula = this.formularioPelicula.value
    this.api.borrarPelicula(datos, id).subscribe({
      next:(data)=>{
        //this.alertas.showSuccess('Artista eliminado','Bien!');
        this.router.navigate(['ruta-lista-artistas']);
        console.log(data)
      }
    })
  }
  salir(){
    //let idgenero = this.datosArtista[0].idgenero;
    this.router.navigate(['ruta-lista-peliculas', 5]);
  }


}
