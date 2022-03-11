import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {filter, map, Observable} from 'rxjs';
import{listaplatosA} from '../../modelo/listaplatos.interface';
import { environment } from 'src/environments/environment';
import{platoA} from '../../modelo/plato.interface';



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

}

