import { Inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { CookieOptions } from './cookie-options.model';
import { mergeOptions } from './utils';

export const COOKIE_OPTIONS = new InjectionToken<CookieOptions>('COOKIE_OPTIONS');

@Injectable()
export class CookieOptionsProvider {

  readonly options: CookieOptions;
  private readonly defaultOptions: CookieOptions;

  constructor(@Inject(COOKIE_OPTIONS) options: CookieOptions = {},
              private injector: Injector) {
    this.defaultOptions = {
      path: this.injector.get(APP_BASE_HREF, '/'),
      domain: null,
      expires: null,
      secure: false,
      httpOnly: false
    };
    this.options = mergeOptions(this.defaultOptions, options);
  }

}
