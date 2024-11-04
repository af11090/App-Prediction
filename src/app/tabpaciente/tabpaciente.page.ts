import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../services/paciente.service';
import { AlertController, ModalController } from '@ionic/angular';
import { AddPacientePage } from '../add-paciente/add-paciente.page'; 
import { PacienteModel } from '../models/paciente.model';

@Component({
  selector: 'app-tabpaciente',
  templateUrl: './tabpaciente.page.html',
  styleUrls: ['./tabpaciente.page.scss'],
})
export class TabpacientePage implements OnInit {
  patients: PacienteModel[] = [];
  filteredPatients: PacienteModel[] = [];
  searchTerm: string = '';

  constructor(
    private pacienteService: PacienteService,
    private alertController: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.pacienteService.getAllPacientes().subscribe((data: PacienteModel[]) => {
      this.patients = data;
      this.filteredPatients = [...this.patients]; // Inicializa filteredPatients
      console.log('Pacientes cargados:', this.patients);
    });
  }

  async openAddPacienteModal() {
    const modal = await this.modalCtrl.create({
      component: AddPacientePage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.loadPatients();  // Refresca la lista de pacientes
      }
    });

    return await modal.present();
  }

  async editPatient(paciente: PacienteModel) {
    if (paciente.id_paciente !== undefined) {
        const modal = await this.modalCtrl.create({
            component: AddPacientePage,
            componentProps: { paciente }  // Pasar datos del paciente al modal
        });

        modal.onDidDismiss().then((result) => {
            if (result.data) {
                this.loadPatients();
            }
        });

        return await modal.present();
    } else {
        console.error('El ID del paciente es undefined.');
    }
  }

  searchPatients() {
    const term = this.searchTerm.toLowerCase();
    this.filteredPatients = this.patients.filter((paciente: PacienteModel) =>
      paciente.Nombres.toLowerCase().includes(term) || paciente.DNI.includes(term)
    );
  }

  deletePatient(id: number | undefined) {
    if (id !== undefined) {
      this.pacienteService.deletePaciente(id).subscribe(() => {
        this.loadPatients();
      });
    } else {
      console.error('El ID del paciente es undefined.');
    }
  }
}
