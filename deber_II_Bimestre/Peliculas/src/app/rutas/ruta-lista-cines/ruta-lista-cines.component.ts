import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service";
import {Router} from "@angular/router";
import {listaCines} from "../../interfaces/listacines.interface";


@Component({
  selector: 'app-ruta-lista-cines',
  templateUrl: './ruta-lista-cines.component.html',
  styleUrls: ['./ruta-lista-cines.component.scss']
})
export class RutaListaCinesComponent implements OnInit {

  cines:listaCines[] = [];

  constructor(
    private readonly api:ApiService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.api
      .obtenerTodosCines()
      .subscribe({
        next: (data) =>{
          this.cines = data
          console.log(data);
        },
        error:(error) =>{
          console.error({error});
        }
      })
  }

  editarCine(id:number){
    this.router.navigate(['ruta-editar-cines',id])
    console.log(id)
  }

  nuevoCine(){
    this.router.navigate(['ruta-nuevo-cine'])
  }

}
