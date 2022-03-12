import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from '../../services/api/api.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {platoA} from "../../modelo/plato.interface";
//import {AlertasService} from "../../servicios/alertas/alertas.service"

@Component({
  selector: 'app-ruta-editar-plato',
  templateUrl: './ruta-editar-plato.component.html',
  styleUrls: ['./ruta-editar-plato.component.scss']
})
export class RutaEditarPlatoComponent implements OnInit {
  informacionplato: platoA[]=[];

  editarForm = new FormGroup({
    id_plato: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    categoria:new FormControl(''),

  });
  constructor(

    private readonly activerouter:ActivatedRoute,
    private readonly router:Router,
    private readonly api:ApiService,

  ) { }

  ngOnInit(): void {

    let id_plato = this.activerouter.snapshot.paramMap.get('id_plato');

    this.api.obtenerPlatoXId(id_plato)
      .subscribe({
        next:(data)=>{
          this.informacionplato = data
          this.editarForm.setValue({
            'id_plato': this.informacionplato[0].id_plato,
            'nombre': this.informacionplato[0].nombre,
            'descripcion':this.informacionplato[0].descripcion,
            'precio': this.informacionplato[0].precio ,
            'categoria':this.informacionplato[0].categoria,

          })
          //console.log(this.editarForm.value)
        }
      })

  }

  actualizarPlato(form:platoA,id_plato?:any){
    console.log(id_plato + " gfdcx")

    this.api.actualizarPlato(form, id_plato).subscribe({
      next: (data)=>{
        //his.alertas.showSuccess('Datos actualizados','Bien!');
        console.log(data)
      }
    })
    this.categorias()
  }

  eliminarPlato(id_plato:any){
    console.log(id_plato+ "gfdcxzgfdsxcfdsx " )
    let datos:platoA = this.editarForm.value;
    this.api.eliminarPlato(datos,id_plato).subscribe({
      next:(data)=>{
        alert("El producto a sido eliminado con exito")
        // this.alertas.showSuccess('Género eliminado','Bien!');
        this.router.navigate(['categorias']);
        console.log(data)
      }
    })
  }
regresar(){
    this.router.navigate(['categorias'])
}
categorias(){
    alert("La informacion del plato a sido actualizado con exito ")
    this.router.navigate(['categorias'])
}
alert(){

}
}
