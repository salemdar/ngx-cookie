import {Injectable, Optional} from '@angular/core';

import {CookieOptions} from './base-cookie-options';
import {CookieOptionsArgs} from './cookie-options-args.model';

@Injectable()
export class CookieService implements ICookieService {
  protected get cookieString(): string {
    return document.cookie || '';
  }

  protected set cookieString(val: string) {
    document.cookie = val;
  }

  constructor(@Optional() private _defaultOptions?: CookieOptions) {}

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
    return value ? JSON.parse(value) : value;
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
   * @param {CookieOptionsArgs} options (Optional) Options object.
   */
  put(key: string, value: string, options?: CookieOptionsArgs) {
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
   * @param {CookieOptionsArgs} options (Optional) Options object.
   */
  putObject(key: string, value: Object, options?: CookieOptionsArgs) {
    this.put(key, JSON.stringify(value), options);
  }

  /**
   * @name CookieService#remove
   *
   * @description
   * Remove given cookie.
   *
   * @param {string} key Id of the key-value pair to delete.
   * @param {CookieOptionsArgs} options (Optional) Options object.
   */
  remove(key: string, options?: CookieOptionsArgs): void {
    this._cookieWriter()(key, undefined, options);
  }

  /**
   * @name CookieService#removeAll
   *
   * @description
   * Remove all cookies.
   */
  removeAll(): void {
    let cookies = this.getAll();
    Object.keys(cookies).forEach(key => {
      this.remove(key);
    });
  }

  private _cookieReader(): Object {
    let lastCookies = {};
    let lastCookieString = '';
    let that = this;

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
          name = that._safeDecodeURIComponent(cookie.substring(0, index));
          // the first value that is seen for a cookie is the most
          // specific one.  values for the same cookie name that
          // follow are for less specific paths.
          if (this.isBlank((<any>lastCookies)[name])) {
            (<any>lastCookies)[name] = that._safeDecodeURIComponent(cookie.substring(index + 1));
          }
        }
      }
    }
    return lastCookies;
  }

  private _cookieWriter() {
    let that = this;

    return function(name: string, value: string, options?: CookieOptionsArgs) {
      that.cookieString = that._buildCookieString(name, value, options);
    };
  }

  private _safeDecodeURIComponent(str: string) {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }

  private _buildCookieString(name: string, value: string, options?: CookieOptionsArgs): string {
    let cookiePath = '/';
    let path: string, expires: any;
    let defaultOpts =
        this._defaultOptions || new CookieOptions(<CookieOptionsArgs>{path: cookiePath});
    let opts: CookieOptions = this._mergeOptions(defaultOpts, options);
    expires = opts.expires;
    if (this.isBlank(value)) {
      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
      value = '';
    }
    if (this.isString(expires)) {
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

  private _mergeOptions(defaultOpts: CookieOptions, providedOpts?: CookieOptionsArgs):
      CookieOptions {
    let newOpts = defaultOpts;
    if (this.isPresent(providedOpts)) {
      return newOpts.merge(new CookieOptions(providedOpts));
    }
    return newOpts;
  }

  private isBlank(obj: any): boolean {
    return obj === undefined || obj === null;
  }

  private isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }

  private isString(obj: any): obj is string {
    return typeof obj === 'string';
  }
}

export interface ICookieService {
  get(key: string): string;
  getObject(key: string): Object;
  getAll(): Object;
  put(key: string, value: string, options?: CookieOptionsArgs): void;
  putObject(key: string, value: Object, options?: CookieOptionsArgs): void;
  remove(key: string, options?: CookieOptionsArgs): void;
  removeAll(): void;
}
