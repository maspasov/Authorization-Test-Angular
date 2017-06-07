import { TestBed, inject } from '@angular/core/testing';

import { EFhselService } from './e-fhsel.service';

describe('EFhselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EFhselService]
    });
  });

  it('should be created', inject([EFhselService], (service: EFhselService) => {
    expect(service).toBeTruthy();
  }));
});
