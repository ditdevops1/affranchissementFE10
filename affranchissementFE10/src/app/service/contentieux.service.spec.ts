import { TestBed } from '@angular/core/testing';

import { ContentieuxService } from './contentieux.service';

describe('ContentieuxService', () => {
  let service: ContentieuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentieuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
