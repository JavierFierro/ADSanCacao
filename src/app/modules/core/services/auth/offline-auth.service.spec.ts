import { TestBed } from '@angular/core/testing';

import { OfflineAuthService } from './offline-auth.service';

describe('OfflineAuthService', () => {
  let service: OfflineAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
