export interface Paciente {
  id_paciente?: number;
  DNI: string;
  Nombres: string;
  Apellidos: string;
  Sexo: string;
  Estado: number;
  id_doctor: number;
}