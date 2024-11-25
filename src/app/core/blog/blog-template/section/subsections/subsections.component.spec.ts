import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionsComponent } from './subsections.component';

describe('SubsectionsComponent', () => {
  let component: SubsectionsComponent;
  let fixture: ComponentFixture<SubsectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
