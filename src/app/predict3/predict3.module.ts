import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Predict3PageRoutingModule } from './predict3-routing.module';

import { Predict3Page } from './predict3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Predict3PageRoutingModule
  ],
  declarations: [Predict3Page]
})
export class Predict3PageModule {}
