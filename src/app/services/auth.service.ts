import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorModel } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000/api/login";
  url2 = "http://localhost:3000/api/doctores";
  constructor(
    private http: HttpClient
  ) { }

  public verificarLogin(dni:string, password:string){
    return this.http.post(this.url, {dni, password});
  }

  public crearDoctor(doctor:DoctorModel){
    return this.http.post(this.url2, doctor);
  }


}
