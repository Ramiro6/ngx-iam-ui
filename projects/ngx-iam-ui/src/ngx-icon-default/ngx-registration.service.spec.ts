import { TestBed } from '@angular/core/testing';

import { NgxRegistrationService } from './ngx-registration.service';

describe('NgxRegistrationService', () => {
  let service: NgxRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
