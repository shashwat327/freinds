import { TestBed } from '@angular/core/testing';

import { FeedbckService } from './feedbck.service';

describe('FeedbckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbckService = TestBed.get(FeedbckService);
    expect(service).toBeTruthy();
  });
});
