import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../filmes.service';
import { FilmeSingleToShow, MovieVideos, Providers } from '../interfaces/Filmes';
import { Location } from '@angular/common';
import { SnackMessageComponent } from '../snack-message/snack-message.component';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent {

  filme?: FilmeSingleToShow
  videos?: MovieVideos[]
  providers?: Providers[]

  ngOnInit(): void {
    this.getFilme()
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

        this.filmesService.getSingleProviders('/movie/', id).subscribe((val3: Providers[]) => {
          this.providers = val3
          console.log(this.providers)
        })

      } else {
        this.location.back()
        this.snackMessage.openSnackBar('Filme não encontrado')
      }


    })
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
