import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologicalConsultationsComponent } from './psychological-consultations.component';

describe('PsychologicalConsultationsComponent', () => {
  let component: PsychologicalConsultationsComponent;
  let fixture: ComponentFixture<PsychologicalConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsychologicalConsultationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychologicalConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
