import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Toolbox', url: '/toolbox', icon: 'build' },
    { title: 'Gender Prediction', url: '/gender-prediction', icon: 'transgender' },
    { title: 'Age Person', url: '/age', icon: 'calendar' },
    { title: 'Universities', url: '/universities', icon: 'business' },
    { title: 'Weather', url: '/weather', icon: 'thunderstorm' },
    { title: 'WordPress News', url: 'word-press-news', icon: 'newspaper' },
    { title: 'Acerca de', url: '/contratame', icon: 'information-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
