import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulinaOkrasaBurczykComponent } from './paulina-okrasa-burczyk.component';

describe('PaulinaOkrasaBurczykComponent', () => {
  let component: PaulinaOkrasaBurczykComponent;
  let fixture: ComponentFixture<PaulinaOkrasaBurczykComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaulinaOkrasaBurczykComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaulinaOkrasaBurczykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
