import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs"
import { environment } from "../../../environments/environment";
import {CategoriaInterface} from "./interfaces/categoria.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  // CREATE
  createCategoria(categoria: CategoriaInterface) {
    const url = environment.API_URL + '/categoria';
    return this.http.post(url, categoria)
      .pipe(map((data) =>
        data as CategoriaInterface
      ));
  }

  // READ
  readAllCategorias() {
    const url = environment.API_URL + '/categoria';
    return this.http.get(url)
      .pipe(map((data) =>
        data as CategoriaInterface[]
      ));
  }

  readCategoriaByID(categoriaID: string) {
    const url = environment.API_URL + '/categoria/' + categoriaID;
    return this.http.get(url)
      .pipe(map((data) =>
        data as CategoriaInterface
      ));
  }

  // UPDATE
  updateCategoriaByID(categoriaID: string, categoria: CategoriaInterface) {
    const url = environment.API_URL + '/categoria/' + categoriaID;
    return this.http.patch(url, categoria)
      .pipe(map((data) =>
        data as CategoriaInterface
      ));
  }

  // DELETE
  deleteCategoriaByID(categoriaID: string) {
    const url = environment.API_URL + '/categoria/' + categoriaID;
    return this.http.delete(url)
      .pipe(map((data) =>
        data as CategoriaInterface
      ));
  }

}
