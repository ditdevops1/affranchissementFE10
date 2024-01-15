import { TestBed } from '@angular/core/testing';

import { ApprouverstockretournService } from './approuverstockretourn.service';

describe('ApprouverstockretournService', () => {
  let service: ApprouverstockretournService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprouverstockretournService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
