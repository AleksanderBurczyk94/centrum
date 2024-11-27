import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBlogComponent } from './banner-blog.component';

describe('BlogBannerComponent', () => {
  let component: BannerBlogComponent;
  let fixture: ComponentFixture<BannerBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerBlogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
