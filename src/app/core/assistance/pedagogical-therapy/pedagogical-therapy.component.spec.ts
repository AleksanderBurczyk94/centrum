import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogicalTherapyComponent } from './pedagogical-therapy.component';

describe('PedagogicalTherapyComponent', () => {
  let component: PedagogicalTherapyComponent;
  let fixture: ComponentFixture<PedagogicalTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedagogicalTherapyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PedagogicalTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
