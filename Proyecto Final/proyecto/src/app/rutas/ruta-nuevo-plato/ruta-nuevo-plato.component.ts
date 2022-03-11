import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlatoInterface} from "../../services/http/interfaces/plato.interface";

@Component({
  selector: 'app-ruta-nuevo-plato',
  templateUrl: './ruta-nuevo-plato.component.html',
  styleUrls: ['./ruta-nuevo-plato.component.scss']
})
export class RutaNuevoPlatoComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['modulos'])
  }
  categorias(){
    this.router.navigate(['categorias'])
  }
  createPlato() {
    if (this.formPlato) {
      // Get values from Form
      const plato: PlatoInterface = {
        nombre: this.formPlato.get('nombre')?.value,
        marca: this.formPlato.get('marca')?.value,
        unidad: this.formPlato.get('unidad')?.value,
        fechaAdquisicion: this.formPlato.get('fechaAdquisicion')?.value,
        precio: this.formPlato.get('precio')?.value,
        categoriaID: this.categoriaID,
      }
      // Create Store
      this.platoService.createPlato(this.categoriaID, plato)
        .subscribe({
          next: (data) => {
            alert('Registro creado!');
            const url = ['/categoria', this.categoriaID, 'plato'];
            this.router.navigate(url);
          },
          error: (error) => {
            alert(error);
          }
        });
    }
  }
}
