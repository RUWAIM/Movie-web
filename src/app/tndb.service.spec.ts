import { TestBed } from '@angular/core/testing';

import { TndbService } from './tndb.service';

describe('TndbService', () => {
  let service: TndbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TndbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
