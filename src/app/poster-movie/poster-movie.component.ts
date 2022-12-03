import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilmeSingleInArray } from '../interfaces/Filmes';


@Component({
  selector: 'app-poster-movie',
  templateUrl: './poster-movie.component.html',
  styleUrls: ['./poster-movie.component.scss']
})
export class PosterMovieComponent {
  @Input() info!: FilmeSingleInArray
  route: string = 'filme'

  getRoute() {
    let inAction = this.location.path().split('/')[1]
    return inAction === 'filme' ? 'filmes' : 'filme'

  }

  ngOnInit(): void {
    this.route = this.getRoute()
  }

  constructor(
    private location: Location
  ) { }
}
