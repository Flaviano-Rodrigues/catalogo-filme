import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { FilmeSingle, PopularFilmes } from './interfaces/Filmes';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  // https://developers.themoviedb.org/3/movies/get-movie-lists
  // https://material.angular.io/components/toolbar/examples


  private url: string = 'https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=pt-br&page=1'

  //Estou esperando um Observable do tipo filmeSingle. porém o que eu recebo é um do tipo PopularFilmes.
  //Eu retiro oq preciso que é filmeSingle[] do PopularFilmes e retorno um Observable do tipo filmeSingle[]
  getPopular(): Observable<FilmeSingle[]> {
    return this.http.get<PopularFilmes>(this.url).pipe(
      //o map retorna antes de enviar o valor.
      map(val => val.results),
      catchError(this.handleError())
    )

  }

  private handleError(): any { }

  constructor(
    private http: HttpClient,
  ) { }

}
