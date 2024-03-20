import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeOfAssistanceComponent } from './scope-of-assistance.component';

describe('ScopeOfAssistanceComponent', () => {
  let component: ScopeOfAssistanceComponent;
  let fixture: ComponentFixture<ScopeOfAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopeOfAssistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopeOfAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
