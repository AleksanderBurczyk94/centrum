import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteContainerComponent } from './white-container.component';

describe('WhiteContainerComponent', () => {
  let component: WhiteContainerComponent;
  let fixture: ComponentFixture<WhiteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhiteContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
