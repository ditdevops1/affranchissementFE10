import { TestBed } from '@angular/core/testing';

import { ServicethemeService } from './servicetheme.service';

describe('ServicethemeService', () => {
  let service: ServicethemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicethemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
