import { CookieOptionsProvider } from './cookie-options.provider';
import { CookieService } from './cookie.service';

export function cookieServiceFactory(document: Document, cookieOptionsProvider: CookieOptionsProvider): CookieService {
  return new CookieService(document, cookieOptionsProvider);
}
