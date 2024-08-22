import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurodevelopmentalReflexTherapyComponent } from './neurodevelopmental-reflex-therapy.component';

describe('NeurodevelopmentalReflexTherapyComponent', () => {
  let component: NeurodevelopmentalReflexTherapyComponent;
  let fixture: ComponentFixture<NeurodevelopmentalReflexTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeurodevelopmentalReflexTherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeurodevelopmentalReflexTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
