import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs';

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=8771c3af5561cf81f655020b572d5f48`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix_carousel';

  options: OwlOptions = {
    autoplay: true,
    loop:true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed:700,
    items: 1

  }

  movies?:any;

  constructor(private http:HttpClient){ }

  ngOnInit(){
    this.http
      .get(URL)
      .pipe( map((res:any) => res['results']))
      .subscribe((moveis) => (this.movies = moveis));
  }
}


