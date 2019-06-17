import { TestBed } from '@angular/core/testing';

import { PawnService } from './pawn.service';

describe('PawnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PawnService = TestBed.get(PawnService);
    expect(service).toBeTruthy();
  });
});
