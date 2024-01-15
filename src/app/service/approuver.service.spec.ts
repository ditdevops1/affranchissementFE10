import { TestBed } from '@angular/core/testing';

import { ApprouverService } from './approuver.service';

describe('ApprouverService', () => {
  let service: ApprouverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprouverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
