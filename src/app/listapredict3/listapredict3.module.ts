import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listapredict3PageRoutingModule } from './listapredict3-routing.module';

import { Listapredict3Page } from './listapredict3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listapredict3PageRoutingModule
  ],
  declarations: [Listapredict3Page]
})
export class Listapredict3PageModule {}
