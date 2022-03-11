import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map, Observable } from "rxjs"
import {ClienteInterface} from "./interfaces/cliente.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  // CREATE
  createCliente(categoriaID: string, cliente: ClienteInterface) {
    const url = environment.API_URL + '/lista_clientes';
    return this.http.post(url, cliente)
      .pipe(map( (data) =>
        data as ClienteInterface
      ));
  }

  // READ
  readAllClientes(categoriaID: string) {
    const url = environment.API_URL + '/lista_clientes';
    return this.http.get(url)
      .pipe(map( (data) =>
        data as ClienteInterface[]
      ));
  }

  readClienteByID(categoriaID: string, clienteID: string){
    const url = environment.API_URL + '/lista_clientes/' + clienteID;
    return this.http.get(url)
      .pipe(map( (data) =>
        data as ClienteInterface
      ));
  }

  // UPDATE
  updateClienteByID(categoriaID: string, clienteID: string, cliente: ClienteInterface) {
    const url = environment.API_URL + '/lista_clientes/' + clienteID;
    return this.http.patch(url, cliente)
      .pipe(map( (data) =>
        data as ClienteInterface
      ));
  }

  // DELETE
  deleteClienteByID(categoriaID: string, clienteID: string) {
    const url = environment.API_URL + '/lista_clientes/' + clienteID;
    return this.http.delete(url)
      .pipe(map( (data) =>
        data as ClienteInterface
      ));
  }

}
