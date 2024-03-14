import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenderPredictionPage } from './gender-prediction.page';

const routes: Routes = [
  {
    path: '',
    component: GenderPredictionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenderPredictionPageRoutingModule {}
