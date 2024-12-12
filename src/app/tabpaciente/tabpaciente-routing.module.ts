import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabpacientePage } from './tabpaciente.page';

const routes: Routes = [
  {
    path: '',
    component: TabpacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabpacientePageRoutingModule {}
