import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyConsentComponent } from './therapy-consent.component';

describe('TherapyConsentComponent', () => {
  let component: TherapyConsentComponent;
  let fixture: ComponentFixture<TherapyConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapyConsentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapyConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
