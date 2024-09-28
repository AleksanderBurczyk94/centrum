import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgataMagdzickaBanachComponent } from './agata-magdzicka-banach.component';

describe('AgataMagdzickaBanachComponent', () => {
  let component: AgataMagdzickaBanachComponent;
  let fixture: ComponentFixture<AgataMagdzickaBanachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgataMagdzickaBanachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgataMagdzickaBanachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
