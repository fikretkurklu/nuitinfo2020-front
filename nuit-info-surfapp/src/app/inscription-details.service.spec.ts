import { TestBed } from '@angular/core/testing';

import { InscriptionDetailsService } from './inscription-details.service';

describe('InscriptionDetailsService', () => {
  let service: InscriptionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriptionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
