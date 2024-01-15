import { TestBed } from '@angular/core/testing';

import { LignecontentieuxService } from './lignecontentieux.service';

describe('LignecontentieuxService', () => {
  let service: LignecontentieuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignecontentieuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
