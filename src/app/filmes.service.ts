import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Comentario, FilmeSingleInArray, FilmeSingleToShow, MovieVideos, PageFilmes, Providers } from './interfaces/Filmes';


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

  getSingleVideos(route: string, id: number): Observable<MovieVideos[]> {
    return this.http.get<{ results: MovieVideos[] }>(`${this.url}/movie/${id}${route}?${this.key}`).pipe(
      map(val => val.results),
      catchError(this.handleError<MovieVideos[]>({} as MovieVideos[]))
    )
  }


  //Vai retornar vazio se o filme ainda estiver nos cinemas.
  getSingleProviders(route: string, id: number): Observable<Providers> {
    return this.http.get<{ results: { BR: Providers } }>(`${this.url}${route}${id}/watch/providers?${this.key}`).pipe(
      map(val => val.results.BR),
      catchError(this.handleError<Providers>({} as Providers))
    )
  }

  getSingleRecommendations(route: string, id: number, page: number): Observable<FilmeSingleInArray[]> {
    return this.http.get<PageFilmes>(`${this.url}${route}${id}/recommendations?${this.key}&page=${page}`).pipe(
      map(val => val.results),
      catchError(this.handleError<FilmeSingleInArray[]>({} as FilmeSingleInArray[]))
    )
  }

  getSingleComments(route: string, id: number, page: number): Observable<Comentario[]> {
    return this.http.get<{ results: Comentario[] }>(`${this.url}${route}${id}/reviews?${this.key}&page=${page}`).pipe(
      map(val => val.results),
      catchError(this.handleError<Comentario[]>({} as Comentario[]))
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
