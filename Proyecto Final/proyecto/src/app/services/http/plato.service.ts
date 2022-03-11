import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map, Observable } from "rxjs"
import {PlatoInterface} from "./interfaces/plato.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private http: HttpClient) { }

  // CREATE
  createPlato(categoriaID: string, plato: PlatoInterface) {
    const url = environment.API_URL + '/categoria/' + categoriaID + '/plato';
    return this.http.post(url, plato)
      .pipe(map( (data) =>
        data as PlatoInterface
      ));
  }

  // READ
  readAllPlatos(categoriaID: string) {
    const url = environment.API_URL + '/categoria/' + categoriaID + '/plato';
    return this.http.get(url)
      .pipe(map( (data) =>
        data as PlatoInterface[]
      ));
  }

  readPlatoByID(categoriaID: string, platoID: string){
    const url = environment.API_URL + '/categoria/' + categoriaID + '/plato/' + platoID;
    return this.http.get(url)
      .pipe(map( (data) =>
        data as PlatoInterface
      ));
  }

  // UPDATE
  updatePlatoByID(categoriaID: string, platoID: string, plato: PlatoInterface) {
    const url = environment.API_URL + '/categoria/' + categoriaID + '/plato/' + platoID;
    return this.http.patch(url, plato)
      .pipe(map( (data) =>
        data as PlatoInterface
      ));
  }

  // DELETE
  deletePlatoByID(categoriaID: string, platoID: string) {
    const url = environment.API_URL + '/categoria/' + categoriaID + '/plato/' + platoID;
    return this.http.delete(url)
      .pipe(map( (data) =>
        data as PlatoInterface
      ));
  }

}
