import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordPressNewsPageRoutingModule } from './word-press-news-routing.module';

import { WordPressNewsPage } from './word-press-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordPressNewsPageRoutingModule
  ],
  declarations: [WordPressNewsPage]
})
export class WordPressNewsPageModule {}
