import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {

  public nombre: string = '';
  public age: any;
  public img: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getAge(){
    this.api.getAge(this.nombre).subscribe((data) => {
      if(data.age == null){
        this.age = 'Nombre invalido en la API';
      }else{
        this.age = data.age;
        if(this.age <= 17){
          this.img = 'https://cdn-icons-png.flaticon.com/512/3576/3576969.png';
        }else if(this.age <= 45){
          // eslint-disable-next-line max-len
          this.img = 'https://dragonball.guru/wp-content/uploads/2021/03/toppng.com-mystic-gohan-dragon-ball-z-gohan-1021x2859-1-e1617011806816-400x400.png';
        }else {
          this.img = 'https://munitiltil.cl/wp-content/uploads/2021/10/adulto-mayor-2-1024x595.png';
        }
      }
    });
  }
}