import { Injectable } from '@angular/core';

import { CookieService } from './cookie.service';

@Injectable()
export class CookieBackendService extends CookieService {
  protected get cookieString(): string {
    return (<any>global).Zone.current.get('req').headers.cookie || '';
  }

  protected set cookieString(val: string) {
    (<any>global).Zone.current.get('req').headers.cookie = val;
    (<any>global).Zone.current.get('res').headers.cookie = val;
  }
}
