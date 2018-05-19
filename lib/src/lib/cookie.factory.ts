import { CookieService } from './cookie.service';
import { CookieOptionsProvider } from './cookie-options-provider';

export function cookieServiceFactory(cookieOptionsProvider: CookieOptionsProvider): CookieService {
  return new CookieService(cookieOptionsProvider);
}
