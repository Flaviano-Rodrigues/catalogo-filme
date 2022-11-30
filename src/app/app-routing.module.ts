import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneroSingleComponent } from './genero-single/genero-single.component';
import { HomeComponent } from './home/home.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'pesquisar', component: SearchMovieComponent },
  { path: 'filme/:id', component: MovieSingleComponent },
  { path: 'genero/:id', component: GeneroSingleComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
