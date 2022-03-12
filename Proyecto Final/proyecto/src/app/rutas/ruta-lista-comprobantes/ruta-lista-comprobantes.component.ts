import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service"
import { Router } from '@angular/router';
import {listacomprobantesA} from "../../modelo/listacomprobantes.interface";

@Component({
  selector: 'app-ruta-lista-comprobantes',
  templateUrl: './ruta-lista-comprobantes.component.html',
  styleUrls: ['./ruta-lista-comprobantes.component.scss']
})
export class RutaListaComprobantesComponent implements OnInit {
  comprobantes:listacomprobantesA[] = []
  constructor(

    private readonly router:Router,
    private readonly api:ApiService,

  ) { }

  ngOnInit(): void {
    this.api.obtenerTodosComprobantes().subscribe({
      next: (data)=>{ this.comprobantes = data
      },
      error: (error) => {
        console.log({error});
      }
    })
  }
  regresar(){
    this.router.navigate(['modulo_comprobante'])
  }
}
