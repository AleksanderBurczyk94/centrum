import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionTherapyComponent } from './vision-therapy.component';

describe('VisionTherapyComponent', () => {
  let component: VisionTherapyComponent;
  let fixture: ComponentFixture<VisionTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisionTherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
