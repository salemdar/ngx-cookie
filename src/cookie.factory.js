import { CookieService } from './cookie.service';
export function cookieServiceFactory(cookieOptionsProvider) {
    return new CookieService(cookieOptionsProvider);
}
