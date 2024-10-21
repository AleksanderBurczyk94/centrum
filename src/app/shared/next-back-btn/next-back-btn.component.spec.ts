import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBackBtnComponent } from './next-back-btn.component';

describe('NextBtnComponent', () => {
  let component: NextBackBtnComponent;
  let fixture: ComponentFixture<NextBackBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextBackBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextBackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
