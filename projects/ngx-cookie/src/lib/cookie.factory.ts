import { CookieOptionsProvider } from './cookie-options.provider';
import { ICookieWriterService } from './cookie.model';
import { CookieService } from './cookie.service';

export function cookieServiceFactory(document: Document,
                                     cookieOptionsProvider: CookieOptionsProvider,
                                     cookieWriterService: ICookieWriterService): CookieService {
  return new CookieService(document, cookieOptionsProvider, cookieWriterService);
}
