import { InjectionToken } from '@angular/core';

import { CookieOptions, ICookieWriterService } from './cookie.model';

export const COOKIE_OPTIONS = new InjectionToken<CookieOptions>('COOKIE_OPTIONS');
export const COOKIE_WRITER = new InjectionToken<ICookieWriterService>('COOKIE_WRITER');
