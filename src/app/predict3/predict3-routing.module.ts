import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Predict3Page } from './predict3.page';

const routes: Routes = [
  {
    path: '',
    component: Predict3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Predict3PageRoutingModule {}
