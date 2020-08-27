import { TestBed } from '@angular/core/testing';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { COOKIE_WRITER, ICookieWriterService } from 'ngx-cookie';
import { CookieBackendModule } from 'ngx-cookie-backend';

describe('CookieBackendWriterService', () => {
  let service: ICookieWriterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieBackendModule.forRoot()
      ],
      providers: [{provide: REQUEST, useValue: {}}, {provide: RESPONSE, useValue: {}}]
    });
    service = TestBed.inject(COOKIE_WRITER);
  });

  afterEach(() => {
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
