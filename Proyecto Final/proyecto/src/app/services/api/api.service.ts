import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {filter, map, Observable} from 'rxjs';
import{listaplatosA} from '../../modelo/listaplatos.interface';
import{listaclientesA} from '../../modelo/listaclientes.interface';
import{listacomprobantesA} from '../../modelo/listacomprobantes.interface';
import { environment } from 'src/environments/environment';
import{platoA} from '../../modelo/plato.interface';
import{clienteA} from '../../modelo/cliente.interface';
import{comprobanteA} from '../../modelo/comprobante.interface';



@Injectable({
  providedIn: 'any'
})
export class ApiService{

  constructor(
    private readonly http: HttpClient
  ) { }

  obtenerTodosPlatos():Observable<listaplatosA[]>{
    const url = environment.urlAPI + 'obtenerPlatos'
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listaplatosA[]
        )
      );

  }
  crearPlato(form:platoA):Observable<any>{
    const url = environment.urlAPI +'crearPlato/'
    return this.http
      .post(url,form,{responseType: 'text'})
  }
  //crear y mostrar clientes
  obtenerTodosClientes():Observable<listaclientesA[]>{
    const url = environment.urlAPI + 'obtenerClientes'
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listaclientesA[]
        )
      );

  }
  crearCliente(form:clienteA):Observable<any>{
    const url = environment.urlAPI +'crearCliente/'
    return this.http
      .post(url,form,{responseType: 'text'})
  }

  //crear comprobante
  crearComprobante(form:comprobanteA):Observable<any>{
    const url = environment.urlAPI +'crearComprobante/'
    return this.http
      .post(url,form,{responseType: 'text'})
  }
  // obtener todos los comprobantes
  obtenerTodosComprobantes():Observable<listacomprobantesA[]>{
    const url = environment.urlAPI + 'obtenerComprobantes'
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listacomprobantesA[]
        )
      );

  }



  actualizarPlato(form:platoA, id_plato?:any):Observable<any>{
    const url = environment.urlAPI + 'actualizarPlato/' + id_plato
    return this.http
      .put(url,form,{responseType: 'text'});
  }

  obtenerPlatoXId(id_plato?:any):Observable<platoA[]>{
    const url = environment.urlAPI + 'platoXid/' + id_plato;
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as platoA[]
        )
      );

  }
  eliminarPlato(form:platoA, id_plato?:any):Observable<any>{
    const url = environment.urlAPI +'eliminarPlato/:'+id_plato
    return this.http
      .delete(url,{responseType: 'text'})

  }

  obtenerClienteXCedula(cedula?:any):Observable<clienteA[]>{
    const url = environment.urlAPI + 'clienteXCedula/' + cedula;
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as clienteA[]
        )
      );

  }
}

