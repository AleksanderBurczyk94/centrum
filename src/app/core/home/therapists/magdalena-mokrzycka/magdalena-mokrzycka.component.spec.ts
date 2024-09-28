import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagdalenaMokrzyckaComponent } from './magdalena-mokrzycka.component';

describe('MagdalenaMokrzyckaComponent', () => {
  let component: MagdalenaMokrzyckaComponent;
  let fixture: ComponentFixture<MagdalenaMokrzyckaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagdalenaMokrzyckaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagdalenaMokrzyckaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
