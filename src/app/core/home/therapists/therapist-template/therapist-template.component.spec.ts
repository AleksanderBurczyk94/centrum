import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistTemplateComponent } from './therapist-template.component';

describe('TherapistTemplateComponent', () => {
  let component: TherapistTemplateComponent;
  let fixture: ComponentFixture<TherapistTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapistTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TherapistTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
