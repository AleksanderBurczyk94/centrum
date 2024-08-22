import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenOpinionComponent } from './written-opinion.component';

describe('WrittenOpinionComponent', () => {
  let component: WrittenOpinionComponent;
  let fixture: ComponentFixture<WrittenOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrittenOpinionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrittenOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
