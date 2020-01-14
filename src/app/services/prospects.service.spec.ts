import { TestBed } from '@angular/core/testing';

import { ProspectsService } from './prospects.service';

describe('ProspectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProspectsService = TestBed.get(ProspectsService);
    expect(service).toBeTruthy();
  });
});
