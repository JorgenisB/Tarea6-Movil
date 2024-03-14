import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-word-press-news',
  templateUrl: './word-press-news.page.html',
  styleUrls: ['./word-press-news.page.scss'],
})
export class WordPressNewsPage implements OnInit {

  public logoUrl: string = '';
  public news: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWordPressLogo();
    this.getLatestNews();
  }

  getWordPressLogo() {
    const url = 'https://time.com/wp-json/wp/v2'; // Cambiar la URL al endpoint correcto

    this.http.get<any>(url).subscribe((data: any) => {
      if (data && data.site_icon && data.site_icon) {
        this.logoUrl = data.site_icon;
      }
    });
  }

  getLatestNews() {
    const url = 'https://time.com/wp-json/wp/v2/posts?per_page=3'; // Cambiar la URL al endpoint correcto

    this.http.get<any[]>(url).subscribe((data: any[]) => {
      this.news = data;
    });
  }

}
