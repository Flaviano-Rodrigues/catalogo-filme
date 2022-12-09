import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneroSingleComponent } from './genero-single/genero-single.component';
import { HomeComponent } from './home/home.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pesquisar', component: SearchMovieComponent, title: 'Pesquisar' },
  { path: 'filme/:id', component: MovieSingleComponent, },
  { path: 'filmes/:id', component: MovieSingleComponent },
  { path: 'genero/:id', component: GeneroSingleComponent },
  { path: 'catalogo-filme', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
