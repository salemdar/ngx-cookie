import { Inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { CookieOptions } from './cookie-options.model';
import { mergeOptions } from './utils';

export const COOKIE_OPTIONS = new InjectionToken<CookieOptions>('COOKIE_OPTIONS');

/** @private */
@Injectable()
export class CookieOptionsProvider {

  private defaultOptions: CookieOptions;
  private _options: CookieOptions;

  constructor(@Inject(COOKIE_OPTIONS) options: CookieOptions = {},
              private _injector: Injector) {
    this.defaultOptions = {
      path: this._injector.get(APP_BASE_HREF, '/'),
      domain: null,
      expires: null,
      secure: false,
      httpOnly: false
    };
    this._options = mergeOptions(this.defaultOptions, options);
  }

  get options(): CookieOptions {
    return this._options;
  }
}
