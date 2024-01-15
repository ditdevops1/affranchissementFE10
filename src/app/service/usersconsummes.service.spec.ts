import { TestBed } from '@angular/core/testing';

import { UsersconsummesService } from './usersconsummes.service';

describe('UsersconsummesService', () => {
  let service: UsersconsummesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersconsummesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
