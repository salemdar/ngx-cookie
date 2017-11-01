import { CookieOptions } from './cookie-options.model';

export function isBlank(obj: any): boolean {
  return obj === undefined || obj === null;
}

export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isString(obj: any): obj is string {
  return typeof obj === 'string';
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
    storeUnencoded: isPresent(newOptions.storeUnencoded) ? newOptions.storeUnencoded : oldOptions.storeUnencoded,
  };
}

export function safeDecodeURIComponent(str: string) {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}

export function safeJsonParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}
