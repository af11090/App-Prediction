import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup;
  formRegistro : FormGroup;
  errorMessage: string = '';
  segment: string = 'login';
  @Input() doctor: any;

  constructor(
    private router:Router,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private navCtrl:NavController,
    public alertController:AlertController, 
  ) {
    this.formLogin = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
    this.formRegistro = this.formBuilder.group({
      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      DNI: ['', [Validators.required, Validators.minLength(8)]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Correo: ['', [Validators.required, Validators.email]],
      Sexo: ['', Validators.required]
    });
  }

  
  ngOnInit() {
  }

  async iniciar() {
    let dni = this.formLogin.value.dni;
    let password = this.formLogin.value.password;

    const verificarCredencialesObserver = {
      next: async (response: any) => {
        if (response.login) {
          console.log('Redirigir a la vista de home');
          this.navCtrl.navigateRoot('home');

        } else {
          const alert = await this.alertController.create({
            header: "Error",
            message: 'Credenciales incorrectas',
            buttons: ['Aceptar']
          });
          await alert.present();
        }
      },
      error: async (err: any) => {
        console.error('Error al autenticar:', err);
        const alert = await this.alertController.create({
          header: "Error",
          message: 'Hubo un problema con la autenticación. Inténtalo de nuevo.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    };

    this.authService.verificarLogin(dni, password).subscribe(verificarCredencialesObserver);
  }

  async registrar() {
    console.log('Formulario enviado');
    const doctor = this.formRegistro.value;
    console.log(doctor);

    const crearDoctorObserver = {
      next: async (response: any) => {
        console.log('Doctor creado:', response);
        //this.navCtrl.navigateRoot('');
        const alert = await this.alertController.create({
          header: "Éxito",
          message: 'Registro exitoso',
          buttons: ['Aceptar']
        });
        await alert.present();
        this.segment = 'login';
      },
      error: async (err: any) => {
        console.error('Error al crear doctor:', err);
        const alert = await this.alertController.create({
          header: "Error",
          message: 'Hubo un problema con el registro. Inténtalo de nuevo.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    };

    this.authService.crearDoctor(doctor).subscribe(crearDoctorObserver);
  }
}
