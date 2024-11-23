import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnanyLekarzComponent } from './znany-lekarz.component';

describe('ZnanyLekarzComponent', () => {
  let component: ZnanyLekarzComponent;
  let fixture: ComponentFixture<ZnanyLekarzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZnanyLekarzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZnanyLekarzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
