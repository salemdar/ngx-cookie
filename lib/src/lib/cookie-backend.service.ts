import { Inject, Injectable } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

import { CookieService } from './cookie.service';
import { CookieOptionsProvider } from './cookie-options-provider';
import { CookieOptions } from './cookie-options.model';

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

  put(key: string, value: string, options: CookieOptions = {}) {
    this.getAll()[key] = value;

    this.request.headers.cookie = Object.keys(this.getAll()).map(key => {
      return `${key}=${this.get(key)}`;
    }).join('; ');

    this.response.cookie(key, value, options);
  }
}
