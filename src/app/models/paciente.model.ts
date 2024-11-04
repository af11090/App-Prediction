<<<<<<< HEAD
export interface Paciente {
  id_paciente?: number;
  DNI: string;
  Nombres: string;
  Apellidos: string;
  Sexo: string;
  Estado: number;
  id_doctor: number;
}
=======
import { DoctorModel } from '../models/doctor.model';
export interface PacienteModel {
  id_paciente: number;
	DNI:  string;
	Nombres: string;
	Apellidos: string;
	Sexo : string;
	Estado: number;
	iddoctor:DoctorModel;
}
>>>>>>> 8e44b41296a1a40e6de31951c6ebab698eac6cc8
