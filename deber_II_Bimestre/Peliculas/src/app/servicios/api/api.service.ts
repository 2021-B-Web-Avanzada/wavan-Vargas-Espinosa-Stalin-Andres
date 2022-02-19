import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {filter, map, Observable} from 'rxjs';
import {listaCines} from '../../interfaces/listacines.interface';
import {environment} from '../../../environments/environment';
import{cine} from '../../interfaces/cine.interface';
import{listaPeliculas} from '../../interfaces/listapeliculas.interface';
import{pelicula} from '../../interfaces/pelicula.interface'

@Injectable({
  providedIn: 'any'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  obtenerTodosCines():Observable<listaCines[]>{
    const url = environment.urlBackEnd + 'obtenerCines/'
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listaCines[]

        )
      );

  }

  obtenerCinexId(id?:any):Observable<cine[]>{
    const url = environment.urlBackEnd + 'cinexId/' + id;
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as cine[]
        )
      );

  }

  actualizarCine(form:cine, id?:any):Observable<any>{
    const url = environment.urlBackEnd + 'actualizarCine/' + id
    return this.http
      .put(url,form,{responseType: 'text'});
  }

  borrarCine(form:cine, id?:any):Observable<any>{
    const url = environment.urlBackEnd +'borrarCine/'+id
    return this.http
      .delete(url,{responseType: 'text'})

  }

  crearCine(form:cine):Observable<any>{
    const url = environment.urlBackEnd +'crearCine/'
    return this.http
      .post(url,form,{responseType: 'text'})
  }

  obtenerTodasPeliculas():Observable<listaPeliculas[]>{
    const url = environment.urlBackEnd_Peliculas + 'obtenerPeliculas'
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listaPeliculas[]
        )
      );

  }

  actualizarPelicula(form:pelicula, id:any): Observable<any>{
    const url = environment.urlBackEnd+'actualizarPelicula/'+id
    return this.http
      .put(url,form,{responseType: 'text'});
  }

  crearPelicula(form:pelicula):Observable<any>{
    const url = environment.urlBackEnd_Peliculas+'crearPelicula/'
    return this.http
      .post(url,form,{responseType: 'text'})
  }

  obtenerPeliculasxId(id:any):Observable<listaPeliculas[]>{
    const url = environment.urlBackEnd_Peliculas+'obtenerPeliculasxCine/'+id
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listaPeliculas[]
        )

      )

  }

  borrarPelicula(form:pelicula, id:any):Observable<any>{
    const url = environment.urlBackEnd_Peliculas+'borrarPelicula/'+id
    return this.http
      .delete(url,{responseType: 'text'})
  }

}


