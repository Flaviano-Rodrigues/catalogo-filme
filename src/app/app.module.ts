import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { DrawerComponentsComponent } from './drawer-components/drawer-components.component';
import { HomeComponent } from './home/home.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { SnackMessageComponent } from './snack-message/snack-message.component';
import { GeneroSingleComponent } from './genero-single/genero-single.component';
import { PosterMovieComponent } from './poster-movie/poster-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponentsComponent,
    HomeComponent,
    SearchMovieComponent,
    MovieSingleComponent,
    SnackMessageComponent,
    GeneroSingleComponent,
    PosterMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
