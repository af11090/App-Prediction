import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  formRegistro: FormGroup;
  segment: string = 'login';
  errorMessage: string = '';  // Añadir la propiedad errorMessage
  @Input() doctor: any;

  constructor(
<<<<<<< HEAD
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public alertController: AlertController,
=======
    private router:Router,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private navCtrl:NavController,
    public alertController:AlertController,
>>>>>>> 8e44b41296a1a40e6de31951c6ebab698eac6cc8
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

<<<<<<< HEAD
  ngOnInit() {}
=======

  ngOnInit() {
  }
>>>>>>> 8e44b41296a1a40e6de31951c6ebab698eac6cc8

  async iniciar() {
    let dni = this.formLogin.value.dni;
    let password = this.formLogin.value.password;
  
    this.authService.verificarLogin(dni, password).subscribe({
      next: async (response: any) => {
<<<<<<< HEAD
        if (response.login && response.data) {
          // Guardar el ID del doctor y el objeto del doctor en AuthService
          localStorage.setItem('id_doctor', response.data.id_doctor.toString());
          this.authService.setDoctorData(response.data); // Guarda los datos en el servicio
  
          // Redirigir a la vista principal
          this.navCtrl.navigateRoot('tabs/tabs/tab1');
=======
        if (response.login) {
          console.log('Redirigir a la vista de home');
          this.navCtrl.navigateRoot('tabs/tabs/tab1');

>>>>>>> 8e44b41296a1a40e6de31951c6ebab698eac6cc8
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
        const alert = await this.alertController.create({
          header: "Error",
          message: 'Hubo un problema con la autenticación. Inténtalo de nuevo.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    });
  }

  async registrar() {
    const doctor = this.formRegistro.value;

    this.authService.crearDoctor(doctor).subscribe({
      next: async (response: any) => {
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
        this.errorMessage = 'Hubo un problema con el registro. Inténtalo de nuevo.';
        const alert = await this.alertController.create({
          header: "Error",
          message: this.errorMessage,
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    });
  }
}