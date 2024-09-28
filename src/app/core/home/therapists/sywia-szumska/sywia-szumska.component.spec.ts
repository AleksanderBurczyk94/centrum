import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SywiaSzumskaComponent } from './sywia-szumska.component';

describe('SywiaSzumskaComponent', () => {
  let component: SywiaSzumskaComponent;
  let fixture: ComponentFixture<SywiaSzumskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SywiaSzumskaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SywiaSzumskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
