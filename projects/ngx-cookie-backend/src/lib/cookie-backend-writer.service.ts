import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { CookieOptions as ExpressCookieOptions, Request, Response } from 'express';
import { buildCookieString, CookieOptions, ICookieWriterService, isEmpty, isNil, isString } from 'ngx-cookie';


@Injectable()
export class CookieBackendWriterService implements ICookieWriterService {

  constructor(@Optional() @Inject(REQUEST) private request: Request,
              @Optional() @Inject(RESPONSE) private response: Response) {}

  readAllAsString(): string {
    return this.request?.headers?.cookie || '';
  }

  write(name: string, value: string | undefined, options?: CookieOptions): void {
    if (!isNil(this.request)) {
      this.request.cookies = buildCookieString(name, value, options);
    }
    if (!isNil(this.response)) {
      this.response.cookie(name, value, this.getOptions(options));
    }
  }

  private getOptions(options?: CookieOptions): ExpressCookieOptions {
    if (isEmpty(options)) {
      return {};
    }
    return {
      expires: this.getExpires(options?.expires),
      httpOnly: options?.httpOnly,
      path: options?.path,
      domain: options?.domain,
      secure: options?.secure,
      sameSite: options?.sameSite
    };
  }

  private getExpires(expires?: string | Date): Date | undefined {
    if (isEmpty(expires)) {
      return undefined;
    }
    return isString(expires) ? new Date(expires) : expires as Date;
  }

}
