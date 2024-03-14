import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { ApisUniversidades } from '../interfaces/apis';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.page.html',
  styleUrls: ['./universities.page.scss'],
})
export class UniversitiesPage implements OnInit {

  public pais: string = '';
  public universidades: ApisUniversidades[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getUniversidades(){
    this.api.getUNI(this.pais).subscribe((data) => {
      this.universidades = data;
    });
  }
}