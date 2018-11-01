import { Inject, Injectable } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

import { CookieService } from './cookie.service';
import { CookieOptionsProvider } from './cookie-options-provider';

@Injectable()
export class CookieBackendService extends CookieService {

  constructor(@Inject(REQUEST) private request: any,
              @Inject(RESPONSE) private response: any,
              _optionsProvider: CookieOptionsProvider) {
    super(_optionsProvider);
  }

  protected get cookieString(): string {
    return this.request.headers.cookie || '';
  }

  protected set cookieString(val: string) {
    this.request.headers.cookie = val;
    this.response.headers.cookie = val;
  }
}
