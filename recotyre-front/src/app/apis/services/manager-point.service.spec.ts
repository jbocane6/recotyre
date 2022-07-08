import { TestBed } from '@angular/core/testing';

import { ManagerPointService } from './manager-point.service';

describe('ManagerPointService', () => {
  let service: ManagerPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
