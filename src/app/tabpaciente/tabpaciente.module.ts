import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabpacientePageRoutingModule } from './tabpaciente-routing.module';
import { TabpacientePage } from './tabpaciente.page';
import { AddPacientePageModule } from '../add-paciente/add-paciente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TabpacientePageRoutingModule,
    AddPacientePageModule
  ],
  declarations: [TabpacientePage]
})
export class TabpacientePageModule {}