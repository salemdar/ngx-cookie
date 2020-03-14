import { TestBed } from '@angular/core/testing';

import { CookieBackendService } from './ngx-cookie-backend.service';

describe('NgxCookieBackendService', () => {
  let service: CookieBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
