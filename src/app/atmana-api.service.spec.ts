import { TestBed } from '@angular/core/testing';

import { AtmanaApiService } from './atmana-api.service';

describe('AtmanaApiService', () => {
  let service: AtmanaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmanaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
