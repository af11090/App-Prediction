
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

 // // Funciones de validación personalizadas
export function dniValidator(control: AbstractControl): ValidationErrors | null {
  const dniPattern = /^\d{8}$/;
  return dniPattern.test(control.value) ? null : { invalidDni: true };
}

export function nombreApellidoValidator(control: AbstractControl): ValidationErrors | null {
  const nombrePattern = /^[a-zA-Z\s]+$/;
  return nombrePattern.test(control.value) ? null : { invalidNombre: true };
}
// Rango de validación según la edad
const rangoEdad = {
  6: { peso_min: 5, peso_max: 10.5, altura_min: 50, altura_max: 72.5 },
  7: { peso_min: 5.3, peso_max: 11.1, altura_min: 60.2, altura_max: 74.3 },
  8: { peso_min: 5.6, peso_max: 11.5, altura_min: 61.8, altura_max: 76 },
  9: { peso_min: 5.8, peso_max: 12, altura_min: 63, altura_max: 77.2 },
  10: { peso_min: 5.9, peso_max: 12.4, altura_min: 64, altura_max: 79 },
  11: { peso_min: 6.1, peso_max: 12.7, altura_min: 65, altura_max: 80.3 },
  12: { peso_min: 6.3, peso_max: 13.1, altura_min: 65.1, altura_max: 81.8 },
  13: { peso_min: 6.5, peso_max: 13.5, altura_min: 67.2, altura_max: 83 },
  14: { peso_min: 6.6, peso_max: 13.8, altura_min: 68.1, altura_max: 84.5 },
  15: { peso_min: 6.7, peso_max: 14.1, altura_min: 69.2, altura_max: 85.8 },
  16: { peso_min: 6.9, peso_max: 14.5, altura_min: 70.1, altura_max: 87 },
  17: { peso_min: 7.1, peso_max: 14.8, altura_min: 71, altura_max: 88 },
  18: { peso_min: 7.2, peso_max: 15.1, altura_min: 72, altura_max: 89.2 },
  19: { peso_min: 7.4, peso_max: 15.4, altura_min: 73, altura_max: 90.5 },
  20: { peso_min: 7.5, peso_max: 15.7, altura_min: 73.8, altura_max: 91.8 },
  21: { peso_min: 7.6, peso_max: 16, altura_min: 74.5, altura_max: 93 },
  22: { peso_min: 7.8, peso_max: 16.4, altura_min: 75, altura_max: 94 },
  23: { peso_min: 7.9, peso_max: 16.7, altura_min: 76, altura_max: 95 },
  24: { peso_min: 8.1, peso_max: 17, altura_min: 76.9, altura_max: 96 },
  25: { peso_min: 8.1, peso_max: 17.2, altura_min: 77, altura_max: 95.4 },
  26: { peso_min: 8.2, peso_max: 17.4, altura_min: 78.4, altura_max: 97.5 },
  27: { peso_min: 8.3, peso_max: 18, altura_min: 78, altura_max: 98.7 },
  28: { peso_min: 8.4, peso_max: 18.2, altura_min: 79, altura_max: 99 },
  29: { peso_min: 8.9, peso_max: 18.8, altura_min: 79.2, altura_max: 100.2 },
  30: { peso_min: 8.9, peso_max: 19, altura_min: 80, altura_max: 101 },
  31: { peso_min: 9, peso_max: 19.2, altura_min: 80.6, altura_max: 102 },
  32: { peso_min: 9.1, peso_max: 19.3, altura_min: 81.5, altura_max: 103 },
  33: { peso_min: 9.2, peso_max: 20, altura_min: 82, altura_max: 104 },
  34: { peso_min: 9.5, peso_max: 20.2, altura_min: 82.7, altura_max: 105 },
  35: { peso_min: 9.8, peso_max: 20.7, altura_min: 83, altura_max: 105.8 },
  36: { peso_min: 9.9, peso_max: 21, altura_min: 83.9, altura_max: 106.3 },
  37: { peso_min: 9.9, peso_max: 21.1, altura_min: 84, altura_max: 107.5 },
  38: { peso_min: 9.9, peso_max: 21.7, altura_min: 84.9, altura_max: 108 },
  39: { peso_min: 10, peso_max: 22, altura_min: 85, altura_max: 109 },
  40: { peso_min: 10, peso_max: 22.4, altura_min: 86, altura_max: 110 },
  41: { peso_min: 10.1, peso_max: 22.8, altura_min: 86.5, altura_max: 110.6 },
  42: { peso_min: 10.4, peso_max: 23, altura_min: 87, altura_max: 111 },
  43: { peso_min: 10.7, peso_max: 23.4, altura_min: 87.7, altura_max: 112 },
  44: { peso_min: 10.8, peso_max: 23.8, altura_min: 88, altura_max: 113 },
  45: { peso_min: 10.9, peso_max: 24.1, altura_min: 88.8, altura_max: 113.7 },
  46: { peso_min: 10.9, peso_max: 24.5, altura_min: 89, altura_max: 114 },
  47: { peso_min: 10.9, peso_max: 24.9, altura_min: 89.4, altura_max: 115 },
  48: { peso_min: 11, peso_max: 25.1, altura_min: 90, altura_max: 115.8 },
  49: { peso_min: 11, peso_max: 25.5, altura_min: 90.4, altura_max: 116.3 },
  50: { peso_min: 11.1, peso_max: 26, altura_min: 91, altura_max: 117 },
  51: { peso_min: 11.2, peso_max: 26.4, altura_min: 91.4, altura_max: 118 },
  52: { peso_min: 11.4, peso_max: 26.8, altura_min: 91.9, altura_max: 118.7 },
  53: { peso_min: 11.5, peso_max: 27, altura_min: 92, altura_max: 119 },
  54: { peso_min: 11.6, peso_max: 27.4, altura_min: 92.6, altura_max: 120 },
  55: { peso_min: 11.7, peso_max: 27.8, altura_min: 93, altura_max: 120.5 },
  56: { peso_min: 11.8, peso_max: 28.1, altura_min: 93.4, altura_max: 121 },
  57: { peso_min: 11.9, peso_max: 28.5, altura_min: 94, altura_max: 122 },
  58: { peso_min: 12.1, peso_max: 28.8, altura_min: 94.4, altura_max: 122.7 },
  59: { peso_min: 12.4, peso_max: 29.3, altura_min: 95, altura_max: 123.8 },
  60: { peso_min: 12.6, peso_max: 29.9, altura_min: 95.4, altura_max: 124.3 }
};
// Validador personalizado que necesita acceso al formulario
function rangoValidatorFactory(field: 'peso' | 'altura') {
  return (control: AbstractControl): ValidationErrors | null => {
    const form = control.parent as FormGroup;
    if (!form) return null;
    const edadControl = form.get('edad');
    const edad = edadControl?.value as number;

    if (rangoEdad.hasOwnProperty(edad)) {
      const { peso_min, peso_max, altura_min, altura_max } = rangoEdad[edad as keyof typeof rangoEdad];
      const value = control.value;

      if (field === 'peso' && (value < peso_min || value > peso_max)) {
        return { pesoOutOfRange: true, peso_min, peso_max };
      }
      if (field === 'altura' && (value < altura_min || value > altura_max)) {
        return { alturaOutOfRange: true, altura_min, altura_max };
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-predict1',
  templateUrl: './predict1.page.html',
  styleUrls: ['./predict1.page.scss'],
})
export class Predict1Page implements OnInit {
  anemiaForm: FormGroup;
  resultado: string | undefined;
  isNoAnemiaAlertOpen = false;
  isRegistroExitosoAlertOpen = false;
  isWhatsAppAlertOpen = false;
  prediccion: string | undefined;
  pacienteId: number | undefined;
  constructor(private fb: FormBuilder,private http: HttpClient,private alertController: AlertController,private loadingController: LoadingController,
    private toastController: ToastController,private navCtrl: NavController) {
      this.anemiaForm = this.fb.group({
        dni: ['', [Validators.required, dniValidator]],
        nombre_apellido: ['', [Validators.required, nombreApellidoValidator]],
        edad: ['', [Validators.required, Validators.min(6), Validators.max(60)]],
        peso: ['', [Validators.required, rangoValidatorFactory('peso')]],
        altura: ['', [Validators.required, rangoValidatorFactory('altura')]],
        sexo: ['', Validators.required],
        hmg: ['', [Validators.required, Validators.min(5), Validators.max(18.5)]],
      });
    }
    async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message,
      spinner: 'circles',
    });
    await loading.present();
    return loading;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  onRegresar() {
    this.navCtrl.navigateBack('/prediccion/tabs/tab1');
  }
  onDniSearch() {
    const dni = this.anemiaForm.get('dni')?.value;
    if (dni) {
      this.http.get(`http://localhost:3000/api/pacientesdni/${dni}`).subscribe({
        next: (data: any) => {
          if (data) {
            console.log(data);
            const nombreApellido = `${data.Nombres} ${data.Apellidos}`;
            this.anemiaForm.patchValue({
              nombre_apellido: nombreApellido,
              sexo: data.Sexo,
            });
            this.pacienteId = data.id_paciente;
          }
        },
        error: (err) => {
          this.presentToast('Error al obtener datos por DNI');
        }
      });
    }
  }
  ngOnInit() {
  }
  async presentResultAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<ion-icon name="checkmark-circle-outline"></ion-icon> ${message}`,
      buttons: ['OK'],
      cssClass: 'result-alert'
    });

    await alert.present();
    // Esperar al menos 1 segundo antes de permitir cerrar la alerta
    setTimeout(() => {
      alert.buttons = ['OK'];
    }, 1000);
  }
  // async presentValidationErrors() {
  //   const alert = await this.alertController.create({
  //     header: 'Errores de Validación',
  //     message: 'Por favor, corrige los errores en el formulario.',
  //     buttons: ['Aceptar'],
  //   });
  //   await alert.present();
  // }
  presentValidationErrors() {
    for (const control in this.anemiaForm.controls) {
      if (this.anemiaForm.controls[control].invalid) {
        const errors = this.anemiaForm.controls[control].errors;
        console.log(`Error en el campo ${control}:`, errors);
      }
    }
    this.presentToast('Por favor, complete todos los campos requeridos correctamente.');
  }
  onSubmit() {
    if (this.anemiaForm.valid) {
      const input_data = [
        this.anemiaForm.value.edad,
        this.anemiaForm.value.peso,
        this.anemiaForm.value.altura,
        this.anemiaForm.value.sexo === 'M' ? 1 : 0,
        this.anemiaForm.value.hmg
      ];
      const payload = { input_data };
      // const usuarioId = localStorage.getItem('usuario_id');

      // if (!usuarioId) {
      //   this.presentToast('Error: No se pudo identificar al usuario.');
      //   return;
      // }

      // const input_data2 = {
      //   dni: this.anemiaForm.value.dni,
      //   nombre_apellido: this.anemiaForm.value.nombre_apellido,
      //   edad: this.anemiaForm.value.edad,
      //   peso: this.anemiaForm.value.peso,
      //   altura: this.anemiaForm.value.altura,
      //   sexo: this.anemiaForm.value.sexo === 'M' ? 'M' : 'F',
      //   hmg: this.anemiaForm.value.hmg,
      //   fecha: new Date().toISOString().split('T')[0],
      //   hora: new Date().toTimeString().split(' ')[0],
      //   tipo_prediccion: 1,
      //   resultado: this.prediccion || '',
      //   paciente_id: 1
      // };

      this.presentLoading('Procesando predicción...').then(loading => {
        this.http.post('http://localhost:5000/predict/modelo1', payload).pipe(
          switchMap((response: any) => {
            this.prediccion = response.prediccion;
            this.presentToast('Predicción completada');
            loading.dismiss();
            // Recuperar los datos del doctor desde localStorage
            // const doctorData = JSON.parse(localStorage.getItem('doctorData') || '{}');
            // const nombreDoctor = doctorData.nombreDoctor || '';

            // Prompt para mensaje de WhatsApp
            // const prompt = `
            //   DNI: ${input_data2.dni}
            //   Nombre y Apellido: ${input_data2.nombre_apellido}
            //   Edad: ${input_data2.edad}
            //   Peso: ${input_data2.peso}
            //   Altura: ${input_data2.altura}
            //   Sexo: ${input_data2.sexo}
            //   HMG: ${input_data2.hmg}
            //   Fecha: ${input_data2.fecha}
            //   Hora: ${input_data2.hora}
            //   Tipo de Predicción: ${input_data2.tipo_prediccion}
            //   Resultado: ${input_data2.resultado}
            //   Nombre del Doctor: ${nombreDoctor}
            // `;

            return new Observable<void>((observer) => {
              this.alertController.create({
                header: 'Enviar a WhatsApp',
                message: '¿Deseas enviar esta información a WhatsApp?',
                inputs: [{ name: 'numero', type: 'text', placeholder: 'Ingrese su número de WhatsApp' }],
                buttons: [
                  { text: 'Solo Predecir', role: 'cancel', handler: () => {
                      // Guardar el registro cuando se selecciona "Solo Predecir"
                      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
                      const input_data2 = {
                        Edad: this.anemiaForm.value.edad,
                        Peso: this.anemiaForm.value.peso,
                        Altura: this.anemiaForm.value.altura,
                        Hmg: this.anemiaForm.value.hmg,
                        Fecha: new Date().toISOString().split('T')[0],
                        Hora: new Date().toTimeString().split(' ')[0],
                        Tipo_prediccion: 1,
                        Estado:1,
                        Resultado: this.prediccion || '',
                        id_paciente:this.pacienteId
                      };
                    this.http.post('http://localhost:3000/api/registros', input_data2, { headers }).subscribe({
                      complete: () => {
                        this.presentToast('Registro completado');
                        this.anemiaForm.reset(); // Limpia los campos del formulario después de que los datos se hayan guardado
                        observer.complete();
                      },
                      // complete: () => observer.complete(),
                      error: (err) => observer.error(err)
                    });
                  }},
                  { text: 'Enviar', handler: (data) => {
                      // this.presentLoading('Enviando a WhatsApp...').then(loading => {
                      //   //contrucción de la solicitud para la imagen
                      //   // Determinar el género
                      //   const genero = this.anemiaForm.value.sexo === 'M' ? 'male' : 'female';
                      //   console.log(genero);
                      //   // Calcular la edad en años o meses
                      //   const edadMeses = this.anemiaForm.value.edad;
                      //   let rango = 'months';
                      //   let age = edadMeses;
                      //   let descriptor = 'baby';

                      //   if (edadMeses >= 24) {
                      //     age = Math.floor(edadMeses / 12); // Convertir a años sin decimales
                      //     rango = 'years';
                      //     descriptor = genero === 'female' ? 'girl' : 'boy';
                      //   }

                      //   // Determinar la expresión
                      //   const expression = this.prediccion && this.prediccion.toLowerCase() === 'no tiene anemia' ? 'happy' : 'sad';

                      //   // Determinar los signos
                      //   let signos = 'happy';
                      //   if (this.prediccion && this.prediccion.toLowerCase() !== 'no tiene anemia') {
                      //     signos = this.prediccion.toLowerCase();
                      //   }

                      //   // Determinar la complexión
                      //   const complexion = this.prediccion && this.prediccion.toLowerCase() === 'no tiene anemia' ? 'happy' : 'pale';

                      //   // Determinar el fondo
                      //   const background = this.prediccion && this.prediccion.toLowerCase() === 'no tiene anemia' ? 'cheerful' : 'nostalgic';

                      //   // Construir el prompt
                      //   const prompt2 = `
                      //   A hyper-realistic photograph of a ${age}-${rango}-old ${descriptor} ${genero} with a ${expression} expression on his ${complexion} face, reflecting signs of ${signos}. The background is ${background}, and the details are in high resolution. The ${descriptor} ${genero} is wearing clothes.
                      //   `;

                      //   // Mostrar el prompt en la consola
                      //   console.log(prompt2);
                      //   const chatGptRequest = this.http.post('https://www.piscina.software/3000/api/chatgpt', { prompt });
                      //   const imageRequest = this.http.post('https://www.piscina.software/3000/api/generar-imagen', { prompt2 });
                      //   forkJoin([chatGptRequest, imageRequest]).pipe(
                      //     switchMap(([chatGptResponse, imageResponse]: [any, any]) => {
                      //       const chatGptMessage = chatGptResponse.completion;
                      //       const imageUrl = imageResponse.imageUrl;
                      //       const payloadWhatsApp = {
                      //         phone: '51'+ data.numero,
                      //         message: chatGptMessage,
                      //         mediaUrl: imageUrl,
                      //       };

                      //       return this.http.post('https://www.piscina.software/3002/send', payloadWhatsApp, { responseType: 'text' });
                      //     })
                      //   ).subscribe({
                      //     next: (response) => {
                      //       this.presentToast('Mensaje enviado a WhatsApp');
                      //       loading.dismiss();
                      //       observer.next();
                      //       observer.complete();
                      //     },
                      //     error: (err) => {
                      //       this.presentToast('Error al enviar a WhatsApp');
                      //       loading.dismiss();
                      //       observer.error(err);
                      //     }
                      //   });
                      // });
                    }
                  }
                ]
              }).then(alert => alert.present());
            });
          }),
          // switchMap(() => {
          //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          //   const input_data2 = {
          //     dni: this.anemiaForm.value.dni,
          //     nombre_apellido: this.anemiaForm.value.nombre_apellido,
          //     edad: this.anemiaForm.value.edad,
          //     peso: this.anemiaForm.value.peso,
          //     altura: this.anemiaForm.value.altura,
          //     sexo: this.anemiaForm.value.sexo === 'M' ? 'M' : 'F',
          //     hmg: this.anemiaForm.value.hmg,
          //     fecha: new Date().toISOString().split('T')[0],
          //     hora: new Date().toTimeString().split(' ')[0],
          //     tipo_prediccion: 1,
          //     resultado: this.prediccion || '',
          //     usuario_id: usuarioId
          //   };
          //   return this.http.post('https://www.piscina.software/3000/api/registro', input_data2, { headers });
          // })
        ).subscribe({
          complete: () => {
            this.presentToast(`Resultado de la predicción: ${this.prediccion}`);
          },
          error: (err) => {
            this.presentToast('Error en la solicitud');
          }
        });
      });
    } else {
      this.presentValidationErrors();
    }
  }

}
