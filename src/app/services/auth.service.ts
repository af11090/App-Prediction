import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorModel } from '../models/doctor.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private doctorData: DoctorModel | null = null;
  private loggedIn = new BehaviorSubject<boolean>(this.checkLoginStatus());
  url = "https://backendjs-dee6d131d346.herokuapp.com/api/login";
  url2 = "https://backendjs-dee6d131d346.herokuapp.com/api/doctores";
  constructor(
    private http: HttpClient
  ) { }

  public verificarLogin(dni: string, password: string): Observable<any> {
    return this.http.post(this.url, { dni, password }).pipe(
      tap((response: any) => {
        if (response && response.doctor) {
          this.doctorData = response.doctor;
          localStorage.setItem('doctorData', JSON.stringify(response.doctor));
          localStorage.setItem('loggedIn', 'true');
          this.loggedIn.next(true);
        }
      })
    );
  }

  public crearDoctor(doctor:DoctorModel){
    return this.http.post(this.url2, doctor);
  }


  // Agrega esta función para almacenar los datos del doctor
  public setDoctorData(doctor: DoctorModel) {
    this.doctorData = doctor;
    localStorage.setItem('doctorData', JSON.stringify(doctor)); // Guardar en localStorage
  }

  public getDoctorData(): DoctorModel | null {
    if (!this.doctorData) {
      const doctorDataString = localStorage.getItem('doctorData');
      if (doctorDataString) {
        this.doctorData = JSON.parse(doctorDataString);
      }
    }
    return this.doctorData;
  }

  // Función para verificar si el usuario está logueado
  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private checkLoginStatus(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  // Función de logout
  public logout() {
    this.doctorData = null;
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('id_doctor');
    localStorage.removeItem('doctorData');
  }

}
