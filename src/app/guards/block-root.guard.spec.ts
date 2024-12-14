import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { blockRootGuard } from './block-root.guard';

describe('blockRootGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => blockRootGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
