import { TestBed } from '@angular/core/testing';

import { NgxIamUiService } from './ngx-iam-ui.service';

describe('NgxIamUiService', () => {
  let service: NgxIamUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIamUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
