import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceScopeComponent } from './assistance-scope.component';

describe('AssistanceScopeComponent', () => {
  let component: AssistanceScopeComponent;
  let fixture: ComponentFixture<AssistanceScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssistanceScopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssistanceScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
