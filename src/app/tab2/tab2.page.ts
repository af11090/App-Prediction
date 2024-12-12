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
  filtroGenero: string = 'todos'; // Agregar esta propiedad
  tendenciaAnemiaChart: any;
  tendenciaGeneroChart: any;
  prediccionesChart: any;
  chartAnemia: any;
  chartTipo: any;
  chartSeveridad: any;
  meses: { valor: string, texto: string }[] = [];
  mesSeleccionado: string = '';

  constructor(private http: HttpClient) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    const fechaActual = moment();
    this.mesSeleccionado = `${fechaActual.year()}-${String(fechaActual.month() + 1).padStart(2, '0')}`;
    this.generarMeses();
    this.obtenerDatos();
    this.obtenerPrediccionesPorTipo();
    this.obtenerEstadisticas();
  }

  generarMeses() {
    const mesesTexto = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    // Generar opciones para el año actual y el siguiente
    const añoActual = moment().year();
    const meses = [];
    
    for (let año = añoActual; año <= añoActual + 1; año++) {
      for (let mes = 0; mes < 12; mes++) {
        meses.push({
          valor: `${año}-${String(mes + 1).padStart(2, '0')}`,
          texto: `${mesesTexto[mes]} ${año}`
        });
      }
    }
    
    this.meses = meses;
  }

  obtenerDatos() {
    this.http.get<any[]>('https://backendjs-dee6d131d346.herokuapp.com/api/registros').subscribe({
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

  obtenerPrediccionesPorTipo() {
    this.http.get<any[]>('https://backendjs-dee6d131d346.herokuapp.com/api/predicciones-tipo').subscribe({
      next: (data) => {
        console.log('Datos de predicciones:', data);
        this.crearGraficoPredicciones(data);
      },
      error: (error) => {
        console.error('Error al obtener predicciones:', error);
      }
    });
  }

  obtenerEstadisticas() {
    this.http.get<any>('https://backendjs-dee6d131d346.herokuapp.com/api/estadisticas-tipo').subscribe({
      next: (data) => {
        this.crearGraficoAnemia(data.anemia);
        this.crearGraficoTipo(data.tipo);
        this.crearGraficoSeveridad(data.severidad);
      },
      error: (error) => console.error('Error:', error)
    });
  }

  calcularHmg(data: any[]) {
    if (data.length === 0) return;

    const hmgValues = data
      .filter(item => item.Hmg !== null)
      .map(item => parseFloat(item.Hmg))
      .filter(value => !isNaN(value));

    if (hmgValues.length > 0) {
      this.promedioHmg = hmgValues.reduce((a, b) => a + b, 0) / hmgValues.length;
      this.minHmg = Math.min(...hmgValues);
      this.maxHmg = Math.max(...hmgValues);
    } else {
      this.promedioHmg = 0;
      this.minHmg = 0;
      this.maxHmg = 0;
    }
  }

  crearTendenciaAnemiaChart(data: any[]) {
    // Filtrar por género y mes seleccionado
    let datosFiltrados = data.filter(registro => {
      if (!registro.Fecha) return false;
      
      const fechaRegistro = moment(registro.Fecha);
      const [year, month] = this.mesSeleccionado.split('-');
      
      return fechaRegistro.isValid() && 
             fechaRegistro.year() === parseInt(year) && 
             (fechaRegistro.month() + 1) === parseInt(month);
    });

    if (this.filtroGenero !== 'todos') {
      datosFiltrados = datosFiltrados.filter(p => p.Sexo === this.filtroGenero);
    }

    // Ordenar por fecha
    datosFiltrados.sort((a, b) => moment(a.Fecha).diff(moment(b.Fecha)));

    // Mapear datos para el gráfico
    const fechas = datosFiltrados.map(p => moment(p.Fecha).format('DD/MM/YYYY'));
    const hmgValues = datosFiltrados.map(p => parseFloat(p.Hmg || 0));

    console.log('Datos filtrados:', {
      mesSeleccionado: this.mesSeleccionado,
      totalRegistros: datosFiltrados.length,
      fechas,
      hmgValues
    });

    if (this.tendenciaAnemiaChart) {
      this.tendenciaAnemiaChart.destroy();
    }

    this.tendenciaAnemiaChart = new Chart('tendenciaAnemiaChart', {
      type: 'line',
      data: {
        labels: fechas,
        datasets: [{
          label: 'Nivel de Hemoglobina',
          data: hmgValues,
          borderColor: '#3cba9f',
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Nivel de Hemoglobina (g/dL)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Fecha'
            }
          }
        },
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          }
        }
      }
    });
  }

  crearTendenciaGeneroChart(data: any[]) {
    // Filtrar por Sexo (no sexo) y asegurarse que Hmg existe
    const masculinoData = data.filter(p => p.Sexo === 'M' && p.Hmg !== null);
    const femeninoData = data.filter(p => p.Sexo === 'F' && p.Hmg !== null);

    // Usar id_registro como referencia temporal
    const masculinoAgrupado = this.agruparPorTiempo(
      masculinoData.map(p => p.id_registro),
      masculinoData.map(p => parseFloat(p.Hmg || 0)),
      this.filtroTiempo
    );

    const femeninoAgrupado = this.agruparPorTiempo(
      femeninoData.map(p => p.id_registro),
      femeninoData.map(p => parseFloat(p.Hmg || 0)),
      this.filtroTiempo
    );

    // Obtener todas las etiquetas únicas
    const todasLasEtiquetas = [...new Set([
      ...masculinoAgrupado.map(m => m.label),
      ...femeninoAgrupado.map(f => f.label)
    ])].sort();

    if (this.tendenciaGeneroChart) {
      this.tendenciaGeneroChart.destroy();
    }

    this.tendenciaGeneroChart = new Chart('tendenciaGeneroChart', {
      type: 'line',
      data: {
        labels: todasLasEtiquetas,
        datasets: [
          {
            label: 'HMG Masculino',
            data: todasLasEtiquetas.map(label => {
              const punto = masculinoAgrupado.find(m => m.label === label);
              return punto ? punto.value : null;
            }),
            borderColor: '#36a2eb',
            fill: false
          },
          {
            label: 'HMG Femenino',
            data: todasLasEtiquetas.map(label => {
              const punto = femeninoAgrupado.find(f => f.label === label);
              return punto ? punto.value : null;
            }),
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
              text: 'Registro'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Nivel de Hemoglobina (g/dL)'
            }
          }
        }
      }
    });
  }

  crearGraficoPredicciones(data: any[]) {
    const tipos = ['Antropométrica', 'Hemograma', 'Completa'];
    const resultados = ['Si tiene anemia', 'No tiene anemia'];
    
    const datasets = resultados.map(resultado => {
      return {
        label: resultado,
        data: tipos.map((_, index) => {
          const filtrado = data.filter(d => 
            d.tipo_prediccion === (index + 1) && 
            d.Resultado === resultado
          );
          return filtrado.length > 0 ? filtrado[0].cantidad : 0;
        }),
        backgroundColor: resultado === 'Si tiene anemia' ? '#ff6384' : '#36a2eb'
      };
    });

    if (this.prediccionesChart) {
      this.prediccionesChart.destroy();
    }

    this.prediccionesChart = new Chart('prediccionesChart', {
      type: 'bar',
      data: {
        labels: tipos,
        datasets: datasets
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
            title: {
              display: true,
              text: 'Número de Predicciones'
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Predicciones por Tipo'
          }
        }
      }
    });
  }

  crearGraficoAnemia(datos: any) {
    if (this.chartAnemia) this.chartAnemia.destroy();
    
    this.chartAnemia = new Chart('chartAnemia', {
      type: 'bar',
      data: {
        labels: ['Peso', 'Altura', 'Hemoglobina'],
        datasets: [{
          label: 'Promedios',
          data: [datos.promedio_peso, datos.promedio_altura, datos.promedio_hmg],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Estadísticas de Predicción Antropométrica'
          }
        }
      }
    });
  }

  crearGraficoTipo(datos: any) {
    if (this.chartTipo) this.chartTipo.destroy();
    
    this.chartTipo = new Chart('chartTipo', {
      type: 'bar',
      data: {
        labels: ['Peso', 'Altura', 'Hmg', 'RBC', 'MCV'],
        datasets: [{
          label: 'Promedios',
          data: [
            datos.promedio_peso,
            datos.promedio_altura,
            datos.promedio_hmg,
            datos.promedio_rbc,
            datos.promedio_mcv
          ],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Estadísticas de Predicción por Hemograma'
          }
        }
      }
    });
  }

  crearGraficoSeveridad(datos: any) {
    if (this.chartSeveridad) this.chartSeveridad.destroy();
    
    this.chartSeveridad = new Chart('chartSeveridad', {
      type: 'bar',
      data: {
        labels: ['Peso', 'Altura', 'Hmg', 'PCV', 'TLC'],
        datasets: [{
          label: 'Promedios',
          data: [
            datos.promedio_peso,
            datos.promedio_altura,
            datos.promedio_hmg,
            datos.promedio_pcv,
            datos.promedio_tlc
          ],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Estadísticas de Predicción Completa'
          }
        }
      }
    });
  }

  agruparPorTiempo(fechas: Date[], valores: number[], filtro: CustomSegmentValue) {
    const agrupado: { [key: string]: { sum: number, count: number } } = {};
    
    fechas.forEach((fecha, index) => {
      let key = moment(fecha).startOf(this.mapearFiltro(filtro)).format('YYYY-MM-DD');
      
      if (!agrupado[key]) {
        agrupado[key] = { sum: 0, count: 0 };
      }
      agrupado[key].sum += valores[index];
      agrupado[key].count += 1;
    });

    return Object.entries(agrupado)
      .map(([fecha, datos]) => ({
        label: fecha,
        value: datos.sum / datos.count
      }))
      .sort((a, b) => moment(a.label).diff(moment(b.label)));
  }

  mapearFiltro(filtro: CustomSegmentValue): moment.unitOfTime.StartOf {
    switch (filtro) {
      case 'día': return 'day';
      case 'semana': return 'week';
      case 'mes': return 'month';
      case 'año': return 'year';
      default: return 'day';
    }
  }

  cambiarFiltro(filtro: any) {
    const filtroStr: string = String(filtro);
    if (['día', 'semana', 'mes', 'año'].includes(filtroStr)) {
      this.filtroTiempo = filtroStr as CustomSegmentValue;
      this.obtenerDatos();
    }
  }

  cambiarGenero(evento: any) {
    this.filtroGenero = evento.detail.value;
    this.obtenerDatos();
  }

  cambiarMes(evento: any) {
    this.mesSeleccionado = evento.detail.value;
    this.obtenerDatos();
  }
}
