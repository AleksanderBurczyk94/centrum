import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistConsultationsComponent } from './specialist-consultations.component';

describe('SpecialistConsultationsComponent', () => {
  let component: SpecialistConsultationsComponent;
  let fixture: ComponentFixture<SpecialistConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialistConsultationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
