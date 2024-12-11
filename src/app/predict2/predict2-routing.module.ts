import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Predict2Page } from './predict2.page';

const routes: Routes = [
  {
    path: '',
    component: Predict2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Predict2PageRoutingModule {}
