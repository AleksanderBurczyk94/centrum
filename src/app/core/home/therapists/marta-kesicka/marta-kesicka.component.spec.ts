import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartaKesickaComponent } from './marta-kesicka.component';

describe('MartaKsiesickaComponent', () => {
  let component: MartaKesickaComponent;
  let fixture: ComponentFixture<MartaKesickaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MartaKesickaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MartaKesickaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
