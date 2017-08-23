import { Injectable } from '@angular/core';

import { CookieOptionsProvider } from './cookie-options-provider';
import { CookieOptions } from './cookie-options.model';
import { isBlank, isString, mergeOptions, safeDecodeURIComponent, safeJsonParse } from './utils';

declare interface Document {
  cookie: string;
}
declare const document: Document;

export interface ICookieService {
  get(key: string): string;
  getObject(key: string): Object;
  getAll(): Object;
  put(key: string, value: string, options?: CookieOptions): void;
  putObject(key: string, value: Object, options?: CookieOptions): void;
  remove(key: string, options?: CookieOptions): void;
  removeAll(options?: CookieOptions): void;
}

@Injectable()
export class CookieService implements ICookieService {

  protected options: CookieOptions;

  protected get cookieString(): string {
    return document.cookie || '';
  }

  protected set cookieString(val: string) {
    document.cookie = val;
  }

  constructor(private _optionsProvider: CookieOptionsProvider) {
    this.options = this._optionsProvider.options;
  }

  /**
   * @name CookieService#get
   *
   * @description
   * Returns the value of given cookie key.
   *
   * @param {string} key Id to use for lookup.
   * @returns {string} Raw cookie value.
   */
  get(key: string): string {
    return (<any>this._cookieReader())[key];
  }

  /**
   * @name CookieService#getObject
   *
   * @description
   * Returns the deserialized value of given cookie key.
   *
   * @param {string} key Id to use for lookup.
   * @returns {Object} Deserialized cookie value.
   */
  getObject(key: string): Object {
    let value = this.get(key);
    return value ? safeJsonParse(value) : value;
  }

  /**
   * @name CookieService#getAll
   *
   * @description
   * Returns a key value object with all the cookies.
   *
   * @returns {Object} All cookies
   */
  getAll(): Object {
    return <any>this._cookieReader();
  }

  /**
   * @name CookieService#put
   *
   * @description
   * Sets a value for given cookie key.
   *
   * @param {string} key Id for the `value`.
   * @param {string} value Raw value to be stored.
   * @param {CookieOptions} options (Optional) Options object.
   */
  put(key: string, value: string, options?: CookieOptions) {
    this._cookieWriter()(key, value, options);
  }

  /**
   * @name CookieService#putObject
   *
   * @description
   * Serializes and sets a value for given cookie key.
   *
   * @param {string} key Id for the `value`.
   * @param {Object} value Value to be stored.
   * @param {CookieOptions} options (Optional) Options object.
   */
  putObject(key: string, value: Object, options?: CookieOptions) {
    this.put(key, JSON.stringify(value), options);
  }

  /**
   * @name CookieService#remove
   *
   * @description
   * Remove given cookie.
   *
   * @param {string} key Id of the key-value pair to delete.
   * @param {CookieOptions} options (Optional) Options object.
   */
  remove(key: string, options?: CookieOptions): void {
    this._cookieWriter()(key, undefined, options);
  }

  /**
   * @name CookieService#removeAll
   *
   * @description
   * Remove all cookies.
   */
  removeAll(options?: CookieOptions): void {
    let cookies = this.getAll();
    Object.keys(cookies).forEach(key => {
      this.remove(key, options);
    });
  }

  private _cookieReader(): Object {
    let lastCookies = {};
    let lastCookieString = '';
    let cookieArray: string[], cookie: string, i: number, index: number, name: string;
    let currentCookieString = this.cookieString;
    if (currentCookieString !== lastCookieString) {
      lastCookieString = currentCookieString;
      cookieArray = lastCookieString.split('; ');
      lastCookies = {};
      for (i = 0; i < cookieArray.length; i++) {
        cookie = cookieArray[i];
        index = cookie.indexOf('=');
        if (index > 0) {  // ignore nameless cookies
          name = safeDecodeURIComponent(cookie.substring(0, index));
          // the first value that is seen for a cookie is the most
          // specific one.  values for the same cookie name that
          // follow are for less specific paths.
          if (isBlank((<any>lastCookies)[name])) {
            (<any>lastCookies)[name] = safeDecodeURIComponent(cookie.substring(index + 1));
          }
        }
      }
    }
    return lastCookies;
  }

  private _cookieWriter() {
    let that = this;

    return function (name: string, value: string, options?: CookieOptions) {
      that.cookieString = that._buildCookieString(name, value, options);
    };
  }

  private _buildCookieString(name: string, value: string, options?: CookieOptions): string {
    let opts: CookieOptions = mergeOptions(this.options, options);
    let expires: any = opts.expires;
    if (isBlank(value)) {
      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
      value = '';
    }
    if (isString(expires)) {
      expires = new Date(expires);
    }

    let str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    str += opts.path ? ';path=' + opts.path : '';
    str += opts.domain ? ';domain=' + opts.domain : '';
    str += expires ? ';expires=' + expires.toUTCString() : '';
    str += opts.secure ? ';secure' : '';

    // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
    // - 300 cookies
    // - 20 cookies per unique domain
    // - 4096 bytes per cookie
    let cookieLength = str.length + 1;
    if (cookieLength > 4096) {
      console.log(`Cookie \'${name}\' possibly not set or overflowed because it was too 
      large (${cookieLength} > 4096 bytes)!`);
    }
    return str;
  }

}
