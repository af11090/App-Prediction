import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  url = "http://localhost:3000/api/pacientes";

  constructor(private http: HttpClient) { }

  getAllPacientes() {
    return this.http.get<Paciente[]>(`${this.url}`);
  }

  addPaciente(paciente: Paciente) {
    return this.http.post(this.url, paciente);
  }

  updatePaciente(id: number, paciente: Paciente) {
    return this.http.put<Paciente>(`${this.url}/${id}`, paciente);
  }

  deletePaciente(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
