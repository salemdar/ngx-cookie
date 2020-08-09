import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { CookieOptionsProvider } from './cookie-options.provider';

import { CookieDict, CookieOptions, ICookieService, ICookieWriterService } from './cookie.model';
import { COOKIE_WRITER } from './tokens';
import { isNil, isPresent, mergeOptions, parseCookieString } from './utils';

@Injectable()
export class CookieService implements ICookieService {

  protected options: CookieOptions;

  constructor(@Inject(DOCUMENT) private document: any,
              private optionsProvider: CookieOptionsProvider,
              @Inject(COOKIE_WRITER) private cookieWriterService: ICookieWriterService) {
    this.options = this.optionsProvider.options;
  }

  /**
   * @description
   * Returns if the given cookie key exists or not.
   *
   * @param key Id to use for lookup.
   * @returns true if key exists, otherwise false.
   */
  hasKey(key: string): boolean {
    const value = this.get(key);
    return isPresent(value);
  }

  /**
   * @description
   * Returns the value of given cookie key.
   *
   * @param key Id to use for lookup.
   * @returns Raw cookie value.
   */
  get(key: string): string {
    return this.getAll()?.[key];
  }

  /**
   * @description
   * Returns the deserialized value of given cookie key.
   *
   * @param key Id to use for lookup.
   * @returns Deserialized cookie value.
   */
  getObject(key: string): object | undefined {
    const value = this.get(key);
    if (isNil(value)) {
      return undefined;
    } else if (value === '') {
      return {};
    }
    return JSON.parse(value);
  }

  /**
   * @description
   * Returns a key value object with all the cookies.
   *
   * @returns All cookies
   */
  getAll(): CookieDict {
    const cookieString = this.cookieWriterService.readAllAsString();
    return parseCookieString(cookieString);
  }

  /**
   * @description
   * Sets a value for given cookie key.
   *
   * @param key Id for the `value`.
   * @param value Raw value to be stored.
   * @param options (Optional) Options object.
   */
  put(key: string, value: string | undefined, options?: CookieOptions): void {
    const opts = mergeOptions(this.options, options);
    this.cookieWriterService.write(key, value, opts);
  }

  /**
   * @description
   * Serializes and sets a value for given cookie key.
   *
   * @param key Id for the `value`.
   * @param value Value to be stored.
   * @param options (Optional) Options object.
   */
  putObject(key: string, value: object, options?: CookieOptions): void {
    this.put(key, JSON.stringify(value), options);
  }

  /**
   * @description
   * Remove given cookie.
   *
   * @param key Id of the key-value pair to delete.
   * @param options (Optional) Options object.
   */
  remove(key: string, options?: CookieOptions): void {
    this.put(key, undefined, options);
  }

  /**
   * @description
   * Remove all cookies.
   */
  removeAll(options?: CookieOptions): void {
    const cookies = this.getAll();
    Object.keys(cookies).forEach(key => this.remove(key, options));
  }

}
