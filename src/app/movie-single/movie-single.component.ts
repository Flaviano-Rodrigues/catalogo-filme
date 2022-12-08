import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../filmes.service';
import { FilmeSingleInArray, FilmeSingleToShow, MovieVideos, Providers, } from '../interfaces/Filmes';
import { Location } from '@angular/common';
import { SnackMessageComponent } from '../snack-message/snack-message.component';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent {

  filme!: FilmeSingleToShow
  videos!: MovieVideos[]
  providers!: Providers
  recommendations?: FilmeSingleInArray[]
  panelOpenState = false;

  ngOnInit(): void {
    this.getFilme()
  }

  changeMovie(): void {
    this.location.onUrlChange(() => {
      this.snack('Carregando...')
      window.location.reload()
    })
  }

  getFilme(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.filmesService.getSingle('/movie/', id).subscribe((val: FilmeSingleToShow) => {

      if (val.id !== undefined) {
        document.title = `${val.title}`
        this.filme = val

        this.filmesService.getSingleVideos('/videos', id).subscribe((val2: MovieVideos[]) => {
          this.videos = val2
        })

        this.filmesService.getSingleProviders('/movie/', id).subscribe((val3: Providers) => {
          this.providers = this.byPriority(val3)
        })

        this.filmesService.getSingleRecommendations('/movie/', id, 1).subscribe((val4: FilmeSingleInArray[]) => {
          this.recommendations = val4
        })

      } else {
        this.location.back()
        this.snackMessage.openSnackBar('Filme não encontrado')
      }


    })
  }

  private byPriority(val: Providers) {

    if (val !== undefined) {
      if (val.buy !== undefined) val.buy = val.buy.reverse()
      if (val.flatrate !== undefined) val.flatrate = val.flatrate.reverse()
      if (val.rent !== undefined) val.rent = val.rent.reverse()
    }

    return val
  }

  snack(message: string): void {
    this.snackMessage.openSnackBar(message)
  }

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute,
    private location: Location,
    private snackMessage: SnackMessageComponent,
  ) { }
}
