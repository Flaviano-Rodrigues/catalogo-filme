import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { FilmeSingleInArray, FilmeSingleToShow, PageFilmes } from './interfaces/Filmes';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  // https://developers.themoviedb.org/3/movies/get-movie-lists
  // https://material.angular.io/components/toolbar/examples

  private key: string = 'api_key=506fadb0256c13349acc05dabebf9604&language=pt-br&region=BR'
  private url: string = 'https://api.themoviedb.org/3'


  getPage(route: string, page: number): Observable<FilmeSingleInArray[]> {
    return this.http.get<PageFilmes>(`${this.url}${route}?${this.key}&page=${page}`).pipe(
      map(val => val.results),
      catchError(this.handleError<FilmeSingleInArray[]>([]))

    )
  }

  getSingle(route: string, id: number): Observable<FilmeSingleToShow> {
    return this.http.get<FilmeSingleToShow>(`${this.url}${route}${id}?${this.key}`).pipe(
      catchError(this.handleError<FilmeSingleToShow>({} as FilmeSingleToShow))
    )
  }

  private handleError<T>(result?: T) {
    return (): Observable<T> => {

      //Retornando com base na interface que está vindo.
      return of(result as T);
    };

  }


  constructor(
    private http: HttpClient,
  ) { }

}
