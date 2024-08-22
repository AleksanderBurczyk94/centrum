import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandTherapyComponent } from './hand-therapy.component';

describe('HandTherapyComponent', () => {
  let component: HandTherapyComponent;
  let fixture: ComponentFixture<HandTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandTherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
