
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';
import { Lista1Model } from '../models/lista1.model';
import { Lista1Service } from './../services/lista1.service';
@Component({
  selector: 'app-listpredict3',
  templateUrl: './listapredict3.page.html',
  styleUrls: ['./listapredict3.page.scss'],
})
export class Listapredict3Page implements OnInit {
  registros:Lista1Model[] | undefined;
  datos: any[] = [];
  filteredDatos: any[] = [];
  paginatedDatos: any[] = [];
  searchTerm: string = '';
  selectedDate: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private http: HttpClient,private service:Lista1Service,
    private alertCtrl:AlertController,private toastController: ToastController) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    // this.http.get<any[]>('https://backendjs-dee6d131d346.herokuapp.com/api/registros2/1').subscribe({
    //   next: (data) => {
    //     this.datos = data.map(item => ({
    //       ...item,
    //       Fecha: new Date(item.Fecha).toLocaleDateString(),
    //       Resultado: item.Resultado.includes('Si tiene anemia') ? 'Sí' : 'No'
    //     }));
    //     this.filteredDatos = this.datos;
    //     this.totalPages = Math.ceil(this.filteredDatos.length / this.itemsPerPage);
    //     this.updatePaginatedDatos();
    //     console.log('Datos recibidos:', this.datos);
    //     // const requests = data.map(item => {
    //     //   return this.http.get<any>(`https://backendjs-dee6d131d346.herokuapp.com/api/pacientesid/${item.id_paciente}`).pipe(
    //     //     map(paciente => ({
    //     //       ...item,
    //     //       dni: paciente?.dni || 'N/A', // Agrega el DNI del paciente o 'N/A' si no está definido
    //     //       Fecha: new Date(item.Fecha).toLocaleDateString(),
    //     //       Resultado: item.Resultado ? (item.Resultado.includes('Si tiene anemia') ? 'Sí' : 'No') : 'No disponible'
    //     //     }))
    //     //   );
    //     // });

    //   },
    //   error: (error) => {
    //     console.error('Error al obtener los datos', error);
    //   }
    // });
    this.http.get<any[]>('https://backendjs-dee6d131d346.herokuapp.com/api/registros2/3').subscribe({
      next: (data) => {
        const requests = data.map(item =>
          this.http.get<any>(`https://backendjs-dee6d131d346.herokuapp.com/api/pacientes/${item.id_paciente}`).pipe(
            map(paciente => ({
              ...item,
              DNI: paciente?.DNI || 'N/A', // Agrega el DNI del paciente o 'N/A' si no está definido
              Nombres: paciente ? `${paciente.Nombres} ${paciente.Apellidos}` : 'N/A',
              Fecha: new Date(item.Fecha).toLocaleDateString(),
              Resultado: this.extraerResultado(item.Resultado)
            }))
          )
        );

        forkJoin(requests).subscribe({
          next: (results) => {
            this.datos = results;
            this.filteredDatos = this.datos;
            this.totalPages = Math.ceil(this.filteredDatos.length / this.itemsPerPage);
            this.updatePaginatedDatos();
            console.log('Datos recibidos:', this.datos);
          },
          error: (error) => {
            console.error('Error al obtener los datos', error);
          }
        });
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      }
    });
  }
  extraerResultado(Resultado: string): string {
    if (Resultado.includes('Grave')) {
      return 'Grave';
    } else if (Resultado.includes('Moderada')) {
      return 'Moderada';
    } else if (Resultado.includes('Leve')) {
      return 'Leve';
    } else if (Resultado.includes('No tiene anemia')) {
      return 'NA';
    } else {
      return '-';
    }
  }
  filterDatos() {
    this.filteredDatos = this.datos.filter(dato => {
      const matchesSearchTerm = Object.values(dato).some(val =>
        String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      const matchesDate = this.selectedDate ? new Date(dato.fecha).toLocaleDateString() === new Date(this.selectedDate).toLocaleDateString() : true;
      return matchesSearchTerm && matchesDate;
    });
    this.totalPages = Math.ceil(this.filteredDatos.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePaginatedDatos();
  }

  updatePaginatedDatos() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDatos = this.filteredDatos.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedDatos();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedDatos();
    }
  }
  eliminar(id_registro:number){
    this.alertCtrl.create({
      header:'Eliminar',
      message:'¿Está seguro de eliminar?'+id_registro,
      buttons:[{
          text:'Si',
          handler:()=>{
            this.service.Borrar(id_registro).subscribe(()=>{
              // this.registros=this.registros!.filter(std=>std.id_registro !== id_registro);
              this.presentToast('Registro eliminado');
              this.obtenerDatos();
            });
          }
        },
        {
          text:'NO'
        }]
    }).then(alert=>alert.present());
  }
  presentToast(message: string) {
    this.toastController.create({
      message: message,
      duration: 2000
    }).then(toast => toast.present());
  }
}
