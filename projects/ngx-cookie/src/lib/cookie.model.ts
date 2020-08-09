/**
 * @description
 *
 * Object containing default options to pass when setting cookies.
 *
 * The object may have following properties:
 *
 * - **path** - {string} - The cookie will be available only for this path and its
 *   sub-paths. By default, this is the URL that appears in your `<base>` tag.
 * - **domain** - {string} - The cookie will be available only for this domain and
 *   its sub-domains. For security reasons the user agent will not accept the cookie
 *   if the current domain is not a sub-domain of this domain or equal to it.
 * - **expires** - {string|Date} - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT"
 *   or a Date object indicating the exact date/time this cookie will expire.
 * - **secure** - {boolean} - If `true`, then the cookie will only be available through a
 *   secured connection.
 * - **httpOnly** - {boolean} - If `true`, then the cookie will be set with the `HttpOnly`
 *   flag, and will only be accessible from the remote server. Helps to prevent against
 *   XSS attacks.
 * - **sameSite** - {"Lax"|"Strict"|"None"} - Designates cookie for first party (Lax|Strict)
 *   or third party contexts.
 * - **storeUnencoded** - {boolean} - If `true`, then the cookie value will not be encoded and
 *   will be stored as provided.
 */
export interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: string | Date;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'lax' | 'strict' | 'none';
  storeUnencoded?: boolean;
}

export interface CookieDict {
  [key: string]: string;
}

export interface ICookieWriterService {
  readAllAsString(): string;
  write(name: string, value: string | undefined, options?: CookieOptions): void;
}

export interface ICookieService {
  hasKey(key: string): boolean;
  get(key: string): string;
  getObject(key: string): object | undefined;
  getAll(): object;
  put(key: string, value: string, options?: CookieOptions): void;
  putObject(key: string, value: object, options?: CookieOptions): void;
  remove(key: string, options?: CookieOptions): void;
  removeAll(options?: CookieOptions): void;
}
