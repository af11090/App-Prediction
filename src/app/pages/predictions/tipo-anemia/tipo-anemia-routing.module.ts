import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAnemiaPage } from './tipo-anemia.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAnemiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAnemiaPageRoutingModule {}
