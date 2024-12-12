import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listapredict2PageRoutingModule } from './listapredict2-routing.module';

import { Listapredict2Page } from './listapredict2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listapredict2PageRoutingModule
  ],
  declarations: [Listapredict2Page]
})
export class Listapredict2PageModule {}
