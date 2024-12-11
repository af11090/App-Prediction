import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAnemiaPageRoutingModule } from './tipo-anemia-routing.module';

import { TipoAnemiaPage } from './tipo-anemia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAnemiaPageRoutingModule
  ],
  declarations: [TipoAnemiaPage]
})
export class TipoAnemiaPageModule {}
