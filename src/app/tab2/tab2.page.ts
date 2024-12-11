import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import * as moment from 'moment';

type CustomSegmentValue = 'día' | 'semana' | 'mes' | 'año';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  totalPacientes: number = 0;
  promedioHmg: number = 0;
  minHmg: number = 0;
  maxHmg: number = 0;

  filtroTiempo: CustomSegmentValue = 'día';
  tendenciaAnemiaChart: any;
  tendenciaGeneroChart: any;

  constructor(private http: HttpClient) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.http.get<any[]>('http://localhost:3000/api/registros').subscribe({
      next: (data) => {
        console.log('Datos obtenidos', data);
        // const datosLimpios = data
        //   .filter(item => item.hmg !== null && item.hmg !== undefined && item.sexo) // Filtrar datos nulos e incluir sexo
        //   .map(item => ({
        //     ...item,
        //     fecha: moment(item.fecha).isValid() ? moment(item.fecha).toDate() : null,
        //     hmg: parseFloat(item.hmg) // Asegurar que hmg sea un número
        //   }))
        //   .filter(item => item.fecha !== null && !isNaN(item.hmg)); // Filtrar fechas no válidas
        this.totalPacientes = data.length;
        //console.log('Datos limpios', this.totalPacientes, datosLimpios);
        this.calcularHmg(data);
        this.crearTendenciaAnemiaChart(data);
        this.crearTendenciaGeneroChart(data);
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      }
    });
  }

  // calcularHmg(data: any[]) {
  //   if (data.length === 0) return;

  //   const hmgValues = data.map(p => p.hmg).filter(value => !isNaN(value));
  //   this.promedioHmg = hmgValues.reduce((a, b) => a + b, 0) / hmgValues.length;
  //   this.minHmg = Math.min(...hmgValues);
  //   this.maxHmg = Math.max(...hmgValues);
  // }
  calcularHmg(data: any[]) {
    if (data.length === 0) return;

    const pacientes = data.reduce((acc, item) => {
      if (!acc[item.id_paciente]) {
        acc[item.id_paciente] = parseFloat(item.Hmg);
      }
      return acc;
    }, {});
    console.log('Pacientes', pacientes);

    const hmgValues = Object.values(pacientes).filter((value): value is number => !isNaN(value as number));

    this.promedioHmg = hmgValues.reduce((a, b) => a + b, 0) / hmgValues.length;
    this.minHmg = Math.min(...hmgValues);
    this.maxHmg = Math.max(...hmgValues);
  }

  crearTendenciaAnemiaChart(data: any[]) {
    let fechas = data.map(p => p.Fecha);
    console.log('Fechas', fechas);
    let hmgValues = data.map(p => p.Hmg);
    console.log('Hmg', hmgValues);

    const agrupadoPorTiempo = this.agruparPorTiempo(fechas, hmgValues, this.filtroTiempo);
    console.log('Agrupado por tiempo', agrupadoPorTiempo);

    const labels = agrupadoPorTiempo.map(entry => entry.label);
    console.log('Labels', labels);
    const valores = agrupadoPorTiempo.map(entry => entry.value);
    console .log('Valores', valores);

    if (this.tendenciaAnemiaChart) {
      this.tendenciaAnemiaChart.destroy();
    }

    this.tendenciaAnemiaChart = new Chart('tendenciaAnemiaChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Tendencia de Hemoglobina',
          data: valores,
          borderColor: '#3cba9f',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tiempo'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Nivel de Hemoglobina'
            }
          }
        }
      }
    });
  }


  crearTendenciaGeneroChart(data: any[]) {
    const masculinoData = data.filter(p => p.sexo === 'M');
    const femeninoData = data.filter(p => p.sexo === 'F');

    const fechasMasculino = masculinoData.map(p => p.fecha);
    const hmgMasculino = masculinoData.map(p => p.hmg);
    const fechasFemenino = femeninoData.map(p => p.fecha);
    const hmgFemenino = femeninoData.map(p => p.hmg);

    const agrupadoMasculino = this.agruparPorTiempo(fechasMasculino, hmgMasculino, this.filtroTiempo);
    const agrupadoFemenino = this.agruparPorTiempo(fechasFemenino, hmgFemenino, this.filtroTiempo);

    const labels = agrupadoMasculino.map(entry => entry.label);

    if (this.tendenciaGeneroChart) {
      this.tendenciaGeneroChart.destroy();
    }

    this.tendenciaGeneroChart = new Chart('tendenciaGeneroChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'HMG Masculino',
            data: agrupadoMasculino.map(entry => entry.value),
            borderColor: '#36a2eb',
            fill: false
          },
          {
            label: 'HMG Femenino',
            data: agrupadoFemenino.map(entry => entry.value),
            borderColor: '#ff6384',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tiempo'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Nivel de Hemoglobina'
            }
          }
        }
      }
    });
  }

  agruparPorTiempo(fechas: Date[], valores: number[], filtro: CustomSegmentValue) {
    const formatoTiempo: { [key in CustomSegmentValue]: string } = {
      'día': 'YYYY-MM-DD',
      'semana': 'YYYY-[W]WW',
      'mes': 'YYYY-MM',
      'año': 'YYYY'
    };

    const agrupado: { [key: string]: { sum: number, count: number } } = {};
    console.log('Agrupado', agrupado);

    fechas.forEach((fecha, index) => {
      const label = moment(fecha).format(formatoTiempo[filtro]);
      if (!agrupado[label]) {
        agrupado[label] = { sum: 0, count: 0 };
      }
      agrupado[label].sum += valores[index];
      agrupado[label].count += 1;
    });

    return Object.keys(agrupado).map(label => ({
      label,
      value: agrupado[label].sum / agrupado[label].count
    }));
  }

  cambiarFiltro(filtro: any) {
    const filtroStr: string = String(filtro);
    if (['día', 'semana', 'mes', 'año'].includes(filtroStr)) {
      this.filtroTiempo = filtroStr as CustomSegmentValue;
      this.obtenerDatos();
    }
  }
}
