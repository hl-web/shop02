import { TestBed, async, inject } from '@angular/core/testing';

import { SaveinfoGuard } from './saveinfo.guard';

describe('SaveinfoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveinfoGuard]
    });
  });

  it('should ...', inject([SaveinfoGuard], (guard: SaveinfoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
