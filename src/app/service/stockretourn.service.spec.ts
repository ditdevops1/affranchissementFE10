import { TestBed } from '@angular/core/testing';

import { StockretournService } from './stockretourn.service';

describe('StockretournService', () => {
  let service: StockretournService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockretournService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
