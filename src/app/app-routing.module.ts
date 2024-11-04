import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'predict1',
    loadChildren: () => import('./predict1/predict1.module').then( m => m.Predict1PageModule)
  },
  {
    path: 'predict2',
    loadChildren: () => import('./predict2/predict2.module').then( m => m.Predict2PageModule)
  },
  {
    path: 'predict3',
    loadChildren: () => import('./predict3/predict3.module').then( m => m.Predict3PageModule)
  },
  {
    path: 'listapredict1',
    loadChildren: () => import('./listapredict1/listapredict1.module').then( m => m.Listapredict1PageModule)
  },
  {
    path: 'listapredict2',
    loadChildren: () => import('./listapredict2/listapredict2.module').then( m => m.Listapredict2PageModule)
  },
  {
    path: 'listapredict3',
    loadChildren: () => import('./listapredict3/listapredict3.module').then( m => m.Listapredict3PageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
