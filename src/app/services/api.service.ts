import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisGender, ApisAge, ApisUniversidades, ApisTime } from '../interfaces/apis';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGender(param: string){
    return this.http.get<ApisGender>(`https://api.genderize.io/?name=${param}`);
  }

  getAge(param: string){
    return this.http.get<ApisAge>(`https://api.agify.io/?name=${param}`);
  }

  getUNI(param: string){
    return this.http.get<ApisUniversidades[]>(`http://universities.hipolabs.com/search?country=${param}`);
  }

  getTime(){
    // eslint-disable-next-line max-len
    return this.http.get<ApisTime>('https://api.open-meteo.com/v1/forecast?latitude=18.451251040721196&longitude=-69.66279301210558&current_weather=true');
  }
}