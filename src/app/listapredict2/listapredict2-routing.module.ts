import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listapredict2Page } from './listapredict2.page';

const routes: Routes = [
  {
    path: '',
    component: Listapredict2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listapredict2PageRoutingModule {}
