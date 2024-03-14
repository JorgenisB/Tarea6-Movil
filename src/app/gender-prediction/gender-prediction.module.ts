import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenderPredictionPageRoutingModule } from './gender-prediction-routing.module';

import { GenderPredictionPage } from './gender-prediction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenderPredictionPageRoutingModule
  ],
  declarations: [GenderPredictionPage]
})
export class GenderPredictionPageModule {}
