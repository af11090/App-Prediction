import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listapredict1Page } from './listapredict1.page';

const routes: Routes = [
  {
    path: '',
    component: Listapredict1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listapredict1PageRoutingModule {}
