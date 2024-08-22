import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiDiagnosisDescriptionComponent } from './si-diagnosis-description.component';

describe('SiDiagnosisDescriptionComponent', () => {
  let component: SiDiagnosisDescriptionComponent;
  let fixture: ComponentFixture<SiDiagnosisDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiDiagnosisDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiDiagnosisDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
