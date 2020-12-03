import { TestBed } from '@angular/core/testing';

import { LoginIdentifiantService } from './login-identifiant.service';

describe('LoginIdentifiantService', () => {
  let service: LoginIdentifiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginIdentifiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
