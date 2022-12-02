import { Component, Input } from '@angular/core';
import { FilmeSingleInArray } from '../interfaces/Filmes';


@Component({
  selector: 'app-poster-movie',
  templateUrl: './poster-movie.component.html',
  styleUrls: ['./poster-movie.component.scss']
})
export class PosterMovieComponent {
  @Input() info!: FilmeSingleInArray
}
