import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorsProtectionComponent } from './minors-protection.component';

describe('MinorsProtectionComponent', () => {
  let component: MinorsProtectionComponent;
  let fixture: ComponentFixture<MinorsProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinorsProtectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MinorsProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
