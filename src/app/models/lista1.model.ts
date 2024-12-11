import { PacienteModel } from '../models/paciente.model';
export interface Lista1Model {
  id_registro: number;
	Peso: number;
	Edad: number;
	Altura: number;
	Hmg: number;
	RBC: number;
	MCH: number;
	TLC: number;
	MCHC: number;
	RDW: number;
	PCV: number;
	Fecha: string;
	Hora: string;
	Tipo_prediccion:number
	Resultado: string;
	MCV: number;
	Estado: number;
	id_paciente: PacienteModel;
}
