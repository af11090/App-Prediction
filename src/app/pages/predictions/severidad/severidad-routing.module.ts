import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeveridadPage } from './severidad.page';

const routes: Routes = [
  {
    path: '',
    component: SeveridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeveridadPageRoutingModule {}
