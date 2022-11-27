import { Component } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { FilmeSingle, PopularFilmes } from '../interfaces/Filmes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  populares: FilmeSingle[] = []

  ngOnInit(): void {
    this.filmesService.getPopular().subscribe((val) => {
      this.populares = val
    })
  }


  constructor(
    private filmesService: FilmesService
  ) { }

}
