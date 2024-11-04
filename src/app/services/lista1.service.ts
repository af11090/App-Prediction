import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Lista1Service {
  private url = 'http://localhost:3000/api/registros';
  constructor(private http: HttpClient) {}
  // Actualizar(categoria:CategoriaModel,idcategoria:number){
  //   return this.http.put(this.url+'/'+ idcategoria,categoria);
  // }

  Borrar(id_registro:number){
    return this.http.delete(this.url+'/'+ id_registro);
  }
}
