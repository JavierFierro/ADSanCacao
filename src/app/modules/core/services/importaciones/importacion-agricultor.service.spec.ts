import { TestBed } from '@angular/core/testing';

import { ImportacionAgricultorService } from './importacion-agricultor.service';

describe('ImportacionAgricultorService', () => {
  let service: ImportacionAgricultorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportacionAgricultorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
