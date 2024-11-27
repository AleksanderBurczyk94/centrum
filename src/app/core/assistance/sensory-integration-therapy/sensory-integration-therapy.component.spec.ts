import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoryIntegrationTherapyComponent } from './sensory-integration-therapy.component';

describe('SensoryIntegrationTherapyComponent', () => {
  let component: SensoryIntegrationTherapyComponent;
  let fixture: ComponentFixture<SensoryIntegrationTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensoryIntegrationTherapyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SensoryIntegrationTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
