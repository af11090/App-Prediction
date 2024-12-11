import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictionsPage } from './predictions.page';

const routes: Routes = [
  {
    path: '',
    component: PredictionsPage
  },  {
    path: 'anemia',
    loadChildren: () => import('./anemia/anemia.module').then( m => m.AnemiaPageModule)
  },
  {
    path: 'tipo-anemia',
    loadChildren: () => import('./tipo-anemia/tipo-anemia.module').then( m => m.TipoAnemiaPageModule)
  },
  {
    path: 'severidad',
    loadChildren: () => import('./severidad/severidad.module').then( m => m.SeveridadPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictionsPageRoutingModule {}
