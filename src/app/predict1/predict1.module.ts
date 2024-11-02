import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Predict1PageRoutingModule } from './predict1-routing.module';

import { Predict1Page } from './predict1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Predict1PageRoutingModule
  ],
  declarations: [Predict1Page]
})
export class Predict1PageModule {}
