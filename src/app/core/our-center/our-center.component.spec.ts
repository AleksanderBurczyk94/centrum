import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCenterComponent } from './our-center.component';

describe('OurCenterComponent', () => {
  let component: OurCenterComponent;
  let fixture: ComponentFixture<OurCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurCenterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
