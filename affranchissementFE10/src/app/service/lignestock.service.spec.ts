import { TestBed } from '@angular/core/testing';

import { LignestockService } from './lignestock.service';

describe('LignestockService', () => {
  let service: LignestockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignestockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
