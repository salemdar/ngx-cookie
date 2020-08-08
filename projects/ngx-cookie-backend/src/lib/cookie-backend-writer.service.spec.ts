import { TestBed } from '@angular/core/testing';
import { CookieModule } from '../../../ngx-cookie/src/lib/cookie.module';
import { CookieService } from '../../../ngx-cookie/src/lib/cookie.service';

describe('CookieBackendWriterService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.forRoot()
      ]
    });
    service = TestBed.inject(CookieService);
  });

  afterEach(() => {
    service.removeAll();
  });

  it('should be true', () => {
    expect(true).toBeTruthy();
  });

});
