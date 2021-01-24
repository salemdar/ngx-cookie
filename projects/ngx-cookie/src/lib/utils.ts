import { CookieDict, CookieOptions } from './cookie.model';

// tslint:disable-next-line:no-any
export function isNil(obj: any): boolean {
  return obj === undefined || obj === null;
}

// tslint:disable-next-line:no-any
export function isPresent(obj: any): boolean {
  return !isNil(obj);
}

// tslint:disable-next-line:no-any
export function isString(obj: any): obj is string {
  return typeof obj === 'string';
}

// noinspection JSUnusedGlobalSymbols
// tslint:disable-next-line:no-any
export function isEmpty(value: any): boolean {
  if (isNil(value)) {
    return true;
  }
  if (value === {}) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value !== 'boolean' && !value) {
    return true;
  }
  // noinspection RedundantIfStatementJS
  if (Object.keys(value).length === 0 && value.constructor === Object) {
    return true;
  }
  return false;
}

export function mergeOptions(oldOptions: CookieOptions, newOptions?: CookieOptions): CookieOptions {
  if (!newOptions) {
    return oldOptions;
  }
  return {
    path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
    domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
    expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
    secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
    sameSite: isPresent(newOptions.sameSite) ? newOptions.sameSite : oldOptions.sameSite,
    httpOnly: isPresent(newOptions.httpOnly) ? newOptions.httpOnly : oldOptions.httpOnly,
    storeUnencoded: isPresent(newOptions.storeUnencoded) ? newOptions.storeUnencoded : oldOptions.storeUnencoded
  };
}

export function parseCookieString(currentCookieString: string): CookieDict {
  let lastCookies: CookieDict = {};
  let lastCookieString = '';
  let cookieArray: string[];
  let cookie: string;
  let i: number;
  let index: number;
  let name: string;
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
        if (isNil((lastCookies)[name])) {
          lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1));
        }
      }
    }
  }
  return lastCookies;
}

export function buildCookieString(name: string, value: string | undefined, options?: CookieOptions): string {
  let expires: string | Date | undefined = options?.expires;
  let val: string;
  if (isNil(value)) {
    expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
    val = '';
  } else {
    val = value as string;
  }
  if (isString(expires)) {
    expires = new Date(expires);
  }
  const cookieValue = options?.storeUnencoded ? value : encodeURIComponent(val);
  let str = encodeURIComponent(name) + '=' + cookieValue;
  str += options?.path ? ';path=' + options.path : '';
  str += options?.domain ? ';domain=' + options.domain : '';
  str += expires ? ';expires=' + expires.toUTCString() : '';
  str += options?.sameSite ? '; SameSite=' + options.sameSite : '';
  str += options?.secure ? ';secure' : '';
  str += options?.httpOnly ? '; HttpOnly' : '';

  // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
  // - 300 cookies
  // - 20 cookies per unique domain
  // - 4096 bytes per cookie
  const cookieLength = str.length + 1;
  if (cookieLength > 4096) {
    console.log('Cookie \'' + name + '\' possibly not set or overflowed because it was too large (' + cookieLength + ' > 4096 bytes)!');
  }
  return str;
}

export function safeDecodeURIComponent(str: string): string {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}
