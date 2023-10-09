import { Component } from '@angular/core'
import { FilmesService } from '../filmes.service'
import { FilmeSingleInArray } from '../interfaces/Filmes'

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent {

  input!: HTMLInputElement
  filmes: FilmeSingleInArray[] = []

  slug(str: string): string {
    return str.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }

  makeSearch(input: HTMLInputElement): void {
    this.FilmeService.search('/movie', this.slug(input.value), 1).subscribe((val) => {
      this.filmes = val
    })
    input.value = ''
  }

  constructor (
    private FilmeService: FilmesService
  ) { }

}
