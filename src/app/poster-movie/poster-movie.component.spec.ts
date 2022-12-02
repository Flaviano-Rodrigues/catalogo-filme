import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterMovieComponent } from './poster-movie.component';

describe('PosterMovieComponent', () => {
  let component: PosterMovieComponent;
  let fixture: ComponentFixture<PosterMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
