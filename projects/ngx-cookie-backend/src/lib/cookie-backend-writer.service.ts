import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { CookieOptions as ExpressCookieOptions, Request, Response } from 'express';
import { CookieOptions, ICookieWriterService, isEmpty, isNil, isString } from 'ngx-cookie';

const COOKIE_SEPARATOR = ';';

@Injectable()
export class CookieBackendWriterService implements ICookieWriterService {
  constructor(@Optional() @Inject(REQUEST) private request: Request,
              @Optional() @Inject(RESPONSE) private response: Response) {}

  readAllAsString(): string {
    const requestHeadersCookies = this.request?.headers?.cookie;
    const cookiesFromRequest: string[] = requestHeadersCookies ? requestHeadersCookies.split(COOKIE_SEPARATOR) : [];
    const addedCookies: string[] = this.getNormalizedResponseCookies();
    const allCookies = this.latestUniqueCookieValues(cookiesFromRequest, addedCookies);
    return allCookies.join(COOKIE_SEPARATOR);
  }

  write(name: string, value: string | undefined, options?: CookieOptions): void {
    if (!isNil(this.response)) {
      this.response.cookie(name, value, this.getOptions(options));
    }
  }

  private getOptions(options?: CookieOptions): ExpressCookieOptions {
    if (isEmpty(options)) {
      return {};
    }
    const opts = {...options};
    if (!isEmpty(options.expires)) {
      opts.expires = this.getExpires(options.expires);
    }
    return opts as ExpressCookieOptions;
  }

  private getExpires(expires?: string | Date): Date | undefined {
    return isString(expires) ? new Date(expires as string) : (expires as Date);
  }

  private getNormalizedResponseCookies(): string[] {
    const responseCookies = (this.response?.getHeader('Set-Cookie') as string | string[]) ?? '';
    const addedCookies: string[] = Array.isArray(responseCookies) ? responseCookies : [responseCookies];
    return addedCookies.flatMap(cookieEntry => cookieEntry.split(COOKIE_SEPARATOR));
  }

  private latestUniqueCookieValues(oldCookies: string[], newerCookies: string[]): string[] {
    const cookiesMap = new Map<string, string>();
    const oldAndNewCookies: string[] = [...oldCookies, ...newerCookies];
    oldAndNewCookies
      .filter(value => !isEmpty(value))
      .map(cookie => cookie.split('='))
      .forEach(([key, value]) => cookiesMap.set(key.trim(), value));
    const result: string[] = [];
    cookiesMap.forEach((value, key) => result.push(`${key}=${value}`));
    return result;
  }
}
