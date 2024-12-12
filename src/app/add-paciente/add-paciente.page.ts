import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../services/paciente.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.page.html',
  styleUrls: ['./add-paciente.page.scss'],
})
export class AddPacientePage implements OnInit {
  @Input() paciente: any;  // Variable de entrada para el paciente
  pacienteForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    this.pacienteForm = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      sexo: ['', Validators.required],
      estado: [1, Validators.required]
    });
  }

  ngOnInit() {
    if (this.paciente) {
        this.isEditMode = true;
        console.log('Paciente recibido para edición:', this.paciente);
        this.pacienteForm.patchValue({
            dni: this.paciente.DNI,
            nombres: this.paciente.Nombres,
            apellidos: this.paciente.Apellidos,
            sexo: this.paciente.Sexo,
            estado: this.paciente.Estado.toString()
        });
        console.log('Estado después de patchValue:', this.pacienteForm.value.estado); // Esto debe mostrar 1
    }
  }

  async onSubmit() {
    if (this.pacienteForm.valid) {
      // Convertimos el estado a número y ensamblamos los datos del paciente
      const pacienteData = { 
        ...this.pacienteForm.value, 
        estado: +this.pacienteForm.value.estado  // Convierte `estado` a número para la base de datos
      };
      console.log('Datos del paciente antes de enviar:', pacienteData);
  
      // Recupera el id_doctor del localStorage para asegurarse de que se incluye
      const id_doctor = localStorage.getItem('id_doctor');
      if (id_doctor) {
        pacienteData.id_doctor = +id_doctor;  // Convierte `id_doctor` a número
      } else {
        // Muestra un mensaje de error si `id_doctor` no está en el localStorage
        const alert = await this.alertCtrl.create({
          header: "Error",
          message: "No se ha podido obtener el ID del doctor. Intente iniciar sesión nuevamente.",
          buttons: ['Aceptar']
        });
        await alert.present();
        return;  // Detiene el registro si no hay `id_doctor`
      }
  
      if (this.isEditMode && this.paciente.id_paciente !== undefined) {
        // Llamada al servicio para actualizar el paciente
        this.pacienteService.updatePaciente(this.paciente.id_paciente, pacienteData).subscribe({
          next: async () => {
            const alert = await this.alertCtrl.create({
              header: 'Éxito',
              message: 'Paciente actualizado exitosamente',
              buttons: ['OK']
            });
            await alert.present();
            this.dismiss(true);  // Cierra el modal y envía señal de éxito
          },
          error: async (error) => {
            console.error('Error al actualizar el paciente:', error); 
            const alert = await this.alertCtrl.create({
              header: 'Error',
              message: 'Hubo un problema al actualizar el paciente',
              buttons: ['OK']
            });
            await alert.present();
          }
        });
      } else {
        // Llamada al servicio para registrar un nuevo paciente
        this.pacienteService.addPaciente(pacienteData).subscribe({
          next: async () => {
            const alert = await this.alertCtrl.create({
              header: 'Éxito',
              message: 'Paciente registrado exitosamente',
              buttons: ['OK']
            });
            await alert.present();
            this.dismiss(true);  // Cierra el modal y envía señal de éxito
          },
          error: async (error) => {
            console.error('Error al registrar el paciente:', error); 
            const alert = await this.alertCtrl.create({
              header: 'Error',
              message: 'Hubo un problema al registrar el paciente',
              buttons: ['OK']
            });
            await alert.present();
          }
        });
      }
    } else {
      // Mensaje de validación si el formulario no es válido
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor complete todos los campos correctamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  dismiss(success: boolean = false) {
    this.modalCtrl.dismiss(success);
  }
}