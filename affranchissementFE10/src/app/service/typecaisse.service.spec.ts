import { TestBed } from '@angular/core/testing';

import { TypecaisseService } from './typecaisse.service';

describe('TypecaisseService', () => {
  let service: TypecaisseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecaisseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
