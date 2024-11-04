import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PacienteModel } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  url = "http://localhost:3000/api/pacientes";

  constructor(private http: HttpClient) { }

  getAllPacientes() {
    return this.http.get<PacienteModel[]>(`${this.url}`);
  }

  addPaciente(paciente: PacienteModel) {
    return this.http.post(this.url, paciente);
  }

  updatePaciente(id: number, paciente: PacienteModel) {
    return this.http.put<PacienteModel>(`${this.url}/${id}`, paciente);
  }

  deletePaciente(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
