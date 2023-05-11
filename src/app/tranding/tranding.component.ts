import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs';

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=8771c3af5561cf81f655020b572d5f48`;

@Component({
  selector: 'app-tranding',
  templateUrl: './tranding.component.html',
  styleUrls: ['./tranding.component.css']
})
export class TrandingComponent {
  URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=4b815193042fcd3ed50f225830019e95`;
  popular = `https://api.themoviedb.org/3/movie/popular?api_key=4b815193042fcd3ed50f225830019e95`;
  upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=8771c3af5561cf81f655020b572d5f48`;
  imgUrl="https://image.tmdb.org/t/p/w500"
  cont = `https://api.themoviedb.org/3/movie/popular?api_key=8771c3af5561cf81f655020b572d5f48`;
  movies: any;
  poplar:any;
  upcomng:any;
  count:any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get(this.URL)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => (this.movies = moveis));
      this.http
      .get(this.popular)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => {this.poplar = moveis
      });
      this.http
      .get(this.upcoming)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => {
        this.upcomng = moveis
        console.log(this.upcomng);

      });
      this.http
      .get(this.cont)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => {
        this.count = moveis
        console.log(this.count);

      });
}
}
