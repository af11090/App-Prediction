import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  nombreDoctor: string = '';
  apellidosDoctor: string = '';
  sexo: string = '1';

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  ngOnInit() {
    const doctor = this.authService.getDoctorData();
    console.log('Datos del doctor logeado:', doctor);
    if (doctor) {
      this.nombreDoctor = doctor.Nombres;
      this.apellidosDoctor = doctor.Apellidos;
      this.sexo = doctor.Sexo;
      
    } else {
      console.warn('No se encontraron datos del doctor');
    }
  }

  Salir() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/');
  }

  getImagenDoctorPerfil(): string {
    return this.sexo === '2' ? 'assets/doctora.png' : 'assets/doctor.png';
  }

}