import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { CookieOptions, ICookieWriterService } from './cookie.model';
import { buildCookieString } from './utils';

@Injectable()
export class CookieWriterService implements ICookieWriterService {

  constructor(@Inject(DOCUMENT) private document: any) {}

  readAllAsString(): string {
    return this.document.cookie || '';
  }

  write(name: string, value: string | undefined, options?: CookieOptions): void {
    this.document.cookie = buildCookieString(name, value, options);
  }

}
