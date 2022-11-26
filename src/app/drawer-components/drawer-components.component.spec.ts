import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerComponentsComponent } from './drawer-components.component';

describe('DrawerComponentsComponent', () => {
  let component: DrawerComponentsComponent;
  let fixture: ComponentFixture<DrawerComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
