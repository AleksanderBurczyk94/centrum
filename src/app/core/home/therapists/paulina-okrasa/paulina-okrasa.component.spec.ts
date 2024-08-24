import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulinaOkrasaComponent } from './paulina-okrasa.component';

describe('PaulinaOkrasaComponent', () => {
  let component: PaulinaOkrasaComponent;
  let fixture: ComponentFixture<PaulinaOkrasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaulinaOkrasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaulinaOkrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
