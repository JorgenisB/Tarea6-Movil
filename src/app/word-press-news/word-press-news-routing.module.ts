import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordPressNewsPage } from './word-press-news.page';

const routes: Routes = [
  {
    path: '',
    component: WordPressNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordPressNewsPageRoutingModule {}
