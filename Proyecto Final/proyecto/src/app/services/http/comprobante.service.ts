import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map, Observable } from "rxjs"
import {ComprobanteInterface} from "./interfaces/comprobante.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  constructor(private http: HttpClient) { }

  // CREATE
  createComprobante(categoriaID: string, comprobante: ComprobanteInterface) {
    const url = environment.API_URL + '/comprobante';
    return this.http.post(url, comprobante)
      .pipe(map( (data) =>
        data as ComprobanteInterface
      ));
  }

  // READ
  readAllComprobantes(categoriaID: string) {
    const url = environment.API_URL + '/comprobante';
    return this.http.get(url)
      .pipe(map( (data) =>
        data as ComprobanteInterface[]
      ));
  }

  readComprobanteByID(categoriaID: string, comprobanteID: string){
    const url = environment.API_URL + '/comprobante/' + comprobanteID;
    return this.http.get(url)
      .pipe(map( (data) =>
        data as ComprobanteInterface
      ));
  }

  // UPDATE
  updateComprobanteByID(categoriaID: string, comprobanteID: string, comprobante: ComprobanteInterface) {
    const url = environment.API_URL + '/comprobante/' + comprobanteID;
    return this.http.patch(url, comprobante)
      .pipe(map( (data) =>
        data as ComprobanteInterface
      ));
  }

  // DELETE
  deleteComprobanteByID(categoriaID: string, comprobanteID: string) {
    const url = environment.API_URL + '/comprobante/' + comprobanteID;
    return this.http.delete(url)
      .pipe(map( (data) =>
        data as ComprobanteInterface
      ));
  }

}
