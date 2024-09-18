import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarolinaOkrasaStaszakComponent } from './karolina-okrasa-staszak.component';

describe('KarolinaOkrasaStaszakComponent', () => {
  let component: KarolinaOkrasaStaszakComponent;
  let fixture: ComponentFixture<KarolinaOkrasaStaszakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KarolinaOkrasaStaszakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarolinaOkrasaStaszakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
