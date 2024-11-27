import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCarouselComponent } from './person-carousel.component';

describe('PersonCarouselComponent', () => {
  let component: PersonCarouselComponent;
  let fixture: ComponentFixture<PersonCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
