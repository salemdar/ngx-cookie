import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { CookieOptionsProvider, CookieService } from 'ngx-cookie';


@Injectable()
export class CookieBackendService extends CookieService {

  constructor(@Inject(REQUEST) private request: any,
              @Inject(RESPONSE) private response: any,
              @Inject(DOCUMENT) private doc: any,
              optionsProvider: CookieOptionsProvider) {
    super(doc, optionsProvider);
  }

  protected get cookieString(): string {
    return this.request.cookie || '';
  }

  protected set cookieString(val: string) {
    this.request.cookie = val;
    this.response.cookie = val;
  }
}
