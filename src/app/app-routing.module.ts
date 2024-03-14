import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'toolbox',
    loadChildren: () => import('./toolbox/toolbox.module').then( m => m.ToolboxPageModule)
  },
  {
    path: 'gender-prediction',
    loadChildren: () => import('./gender-prediction/gender-prediction.module').then( m => m.GenderPredictionPageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'universities',
    loadChildren: () => import('./universities/universities.module').then( m => m.UniversitiesPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'word-press-news',
    loadChildren: () => import('./word-press-news/word-press-news.module').then( m => m.WordPressNewsPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./contratame/contratame.module').then( m => m.ContratamePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
