import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroSingleComponent } from './genero-single.component';

describe('GeneroSingleComponent', () => {
  let component: GeneroSingleComponent;
  let fixture: ComponentFixture<GeneroSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneroSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
