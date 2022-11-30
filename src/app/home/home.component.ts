import { Component } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { FilmeSingleInArray } from '../interfaces/Filmes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  homeContent: {
    beforeTitle: string,
    title: string,
    afterTitle: string,
    content: FilmeSingleInArray[],
    limit: number
  }[] = []

  ngOnInit(): void {

    document.title = 'Filmes'

    this.filmesService.getPage('/movie/now_playing', 1).subscribe(val => {
      this.homeContent.splice(0, 0, {
        beforeTitle: '',
        title: 'Nos',
        afterTitle: 'Cinemas',
        content: val,
        limit: 7
      })
    })

    this.filmesService.getPage('/movie/popular', 1).subscribe(val => {
      this.homeContent.splice(1, 0, {
        beforeTitle: '',
        title: 'Mais',
        afterTitle: 'Populares',
        content: val,
        limit: 14
      })
    })

    this.filmesService.getPage('/movie/top_rated', 1).subscribe(val => {
      this.homeContent.splice(2, 0, {
        beforeTitle: '',
        title: 'Quem',
        afterTitle: 'viu, gostou',
        content: val,
        limit: 7
      })
    })

    this.filmesService.getPage('/movie/upcoming', 1).subscribe(val => {
      this.homeContent.splice(3, 0, {
        beforeTitle: '',
        title: 'Em',
        afterTitle: 'Breve',
        content: val,
        limit: 7
      })
    })

  }


  constructor(
    private filmesService: FilmesService
  ) { }

}
