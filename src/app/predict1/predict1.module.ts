import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Predict1PageRoutingModule } from './predict1-routing.module';

import { Predict1Page } from './predict1.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Predict1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Predict1Page]
})
export class Predict1PageModule {}
