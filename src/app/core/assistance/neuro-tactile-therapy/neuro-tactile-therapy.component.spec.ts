import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuroTactileTherapyComponent } from './neuro-tactile-therapy.component';

describe('NeuroTactileTherapyComponent', () => {
  let component: NeuroTactileTherapyComponent;
  let fixture: ComponentFixture<NeuroTactileTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeuroTactileTherapyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeuroTactileTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
