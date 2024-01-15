import { TestBed } from '@angular/core/testing';

import { LignestockretournService } from './lignestockretourn.service';

describe('LignestockretournService', () => {
  let service: LignestockretournService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignestockretournService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
