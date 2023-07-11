import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  apiKey = '803b02659024401697637d296f6d64e9';
  noticias?: any[];
  pais:String = 'Pais';
  
  constructor(private http: HttpClient) {}

  
  countries:any[] = [
    { name: 'Argentina', code: 'ar' },
    { name: 'Brasil', code: 'br' },
    { name: 'Canadá', code: 'ca' },
    { name: 'China', code: 'cn' },
    { name: 'Colombia', code: 'co' },
    { name: 'Francia', code: 'fr' },
    { name: 'Alemania', code: 'de' },
    { name: 'India', code: 'in' },
    { name: 'Italia', code: 'it' },
    { name: 'Japón', code: 'jp' },
    { name: 'México', code: 'mx' },
    { name: 'Rusia', code: 'ru' },
    { name: 'España', code: 'es' },
    { name: 'Reino Unido', code: 'gb' },
    { name: 'Estados Unidos', code: 'us' },
  ];
  
  ngOnInit(){
    this.getNews('us');
  }

  getNews(coun:any) {
    const apiUrl = 'https://newsapi.org/v2/top-headlines';
    const country = coun; // Cambia el país según tus necesidades
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`
    };  
    const params = {
      country: country
    };
    this.http.get(apiUrl, { headers, params }).subscribe(
      (data: any) => {
        this.noticias = data.articles;
        console.log(this.noticias); // Haz lo que necesites con los datos de las noticias
      },
      (error) => {
        console.error('Error al obtener noticias:', error);
      }
    );
  }
}


