import { DoctorModel } from '../models/doctor.model';
export interface PacienteModel {
  id_paciente: number;
	DNI:  string;
	Nombres: string;
	Apellidos: string;
	Sexo : string;
	Estado: number;
	id_doctor:DoctorModel;
}
