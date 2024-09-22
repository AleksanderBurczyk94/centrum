import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageConsentComponent } from './image-consent.component';

describe('ImageConsentComponent', () => {
  let component: ImageConsentComponent;
  let fixture: ComponentFixture<ImageConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageConsentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
