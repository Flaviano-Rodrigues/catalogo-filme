import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../filmes.service';
import { FilmeSingleToShow } from '../interfaces/Filmes';
import { Location } from '@angular/common';
import { SnackMessageComponent } from '../snack-message/snack-message.component';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent {

  filme?: FilmeSingleToShow

  ngOnInit(): void {
    this.getFilme()
  }

  getFilme(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.filmesService.getSingle('/movie/', id).subscribe(val => {

      if (val.id !== undefined) {
        this.filme = val
        document.title = `${val.title}`
      } else {
        this.location.back()
        this.snackMessage.openSnackBar('Filme não encontrado')

      }


    })
  }

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute,
    private location: Location,
    private snackMessage: SnackMessageComponent,
  ) { }
}
