import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service"
import {ActivatedRoute, Router} from "@angular/router"
import {listaPeliculas} from "../../interfaces/listapeliculas.interface"
import {cine} from "../../interfaces/cine.interface";



@Component({
  selector: 'app-ruta-lista-peliculas',
  templateUrl: './ruta-lista-peliculas.component.html',
  styleUrls: ['./ruta-lista-peliculas.component.scss']
})
export class RutaListaPeliculasComponent implements OnInit {

  peliculas:listaPeliculas[]=[];
  info_cine: cine[]=[];


  constructor(
    private route:ActivatedRoute,
    private readonly api:ApiService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    // @ts-ignore

    let id = 5
    console.log( id + 'variable');




    this.api.obtenerCinexId(id).subscribe({
      next:(datos)=>{

        console.log(datos)
      }
    })

    this.api.obtenerPeliculasxId(5).subscribe({

      next:(data)=>{

        this.peliculas = data
        console.log(data)
      }
    })


  }
  editarPelicula(id:number){
    this.router.navigate(['ruta-editar-peliculas', id]);
    console.log(id)
  }

  nuevaPelicula(id:number){
    this.router.navigate(['ruta-nueva-pelicula', id]);
  }
  salir(){
    let idgenero = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['ruta-editar-cines',5]);
  }


}
