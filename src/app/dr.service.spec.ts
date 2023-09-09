import { TestBed } from '@angular/core/testing';

import { DrService } from './dr.service';

describe('DrService', () => {
  let service: DrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
