import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';

import { CookieOptions } from './cookie.model';
import { COOKIE_OPTIONS } from './tokens';
import { mergeOptions } from './utils';

@Injectable()
export class CookieOptionsProvider {

  readonly options: CookieOptions;
  private readonly defaultOptions: CookieOptions;

  constructor(@Inject(COOKIE_OPTIONS) options: CookieOptions = {},
              private injector: Injector) {
    this.defaultOptions = {
      path: this.injector.get(APP_BASE_HREF, '/'),
      domain: undefined,
      expires: undefined,
      secure: false,
      httpOnly: false
    };
    this.options = mergeOptions(this.defaultOptions, options);
  }

}
