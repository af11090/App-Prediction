import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Predict1Page } from './predict1.page';

const routes: Routes = [
  {
    path: '',
    component: Predict1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Predict1PageRoutingModule {}
