import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Lista1Service {
  private url = 'https://backendjs-dee6d131d346.herokuapp.com/api/registros';
  constructor(private http: HttpClient) {}
  // Actualizar(categoria:CategoriaModel,idcategoria:number){
  //   return this.http.put(this.url+'/'+ idcategoria,categoria);
  // }

  Borrar(id_registro:number){
    return this.http.delete(this.url+'/'+ id_registro);
  }
}
