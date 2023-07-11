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
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(){
      this.getNews();
    }
  
    getNews() {
      const apiUrl = 'https://newsapi.org/v2/top-headlines';
      const country = 'us'; // Cambia el país según tus necesidades
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
