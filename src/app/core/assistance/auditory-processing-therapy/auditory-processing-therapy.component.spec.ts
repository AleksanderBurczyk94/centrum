import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoryProcessingTherapyComponent } from './auditory-processing-therapy.component';

describe('AuditoryProcessingTherapyComponent', () => {
  let component: AuditoryProcessingTherapyComponent;
  let fixture: ComponentFixture<AuditoryProcessingTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditoryProcessingTherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoryProcessingTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
