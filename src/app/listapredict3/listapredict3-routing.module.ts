import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listapredict3Page } from './listapredict3.page';

const routes: Routes = [
  {
    path: '',
    component: Listapredict3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listapredict3PageRoutingModule {}
