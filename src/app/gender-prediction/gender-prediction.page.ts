import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gender-prediction',
  templateUrl: './gender-prediction.page.html',
  styleUrls: ['./gender-prediction.page.scss'],
})
export class GenderPredictionPage implements OnInit {
  public genero: string = '';
  public printGender: string = '';
  public img: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public getGenero(): void {
    this.api.getGender(this.genero).subscribe((data) => {
      if (data.gender === 'male') {
        this.printGender = 'Masculino';
        this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mars-male-symbol-pseudo-3D-blue.svg/600px-Mars-male-symbol-pseudo-3D-blue.svg.png';
      } else if (data.gender === 'female') {
        this.printGender = 'Femenino';
        // eslint-disable-next-line max-len
        this.img = 'https://cdn-icons-png.flaticon.com/512/949/949854.png?w=740&t=st=1687710015~exp=1687710615~hmac=ff0db710a7203c0fb4e3f1c24aa1cda39796e7998d5d60f9e32b56fb7fba0cc5';
      } else {
        this.printGender = 'Datos inválidos en la API';
      }
      console.log(this.printGender);
    });
  }
}
