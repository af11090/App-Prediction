import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listapredict1PageRoutingModule } from './listapredict1-routing.module';

import { Listapredict1Page } from './listapredict1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listapredict1PageRoutingModule
  ],
  declarations: [Listapredict1Page]
})
export class Listapredict1PageModule {}
