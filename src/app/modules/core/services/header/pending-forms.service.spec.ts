import { TestBed } from '@angular/core/testing';

import { PendingFormsService } from './pending-forms.service';

describe('PendingFormsService', () => {
  let service: PendingFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
