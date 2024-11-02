import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeveridadPageRoutingModule } from './severidad-routing.module';

import { SeveridadPage } from './severidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeveridadPageRoutingModule
  ],
  declarations: [SeveridadPage]
})
export class SeveridadPageModule {}
