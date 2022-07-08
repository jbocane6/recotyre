import { TestBed } from '@angular/core/testing';

import { FinalManagerService } from './final-manager.service';

describe('FinalManagerService', () => {
  let service: FinalManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
