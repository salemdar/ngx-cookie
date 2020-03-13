import { DOCUMENT } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CookieOptions } from './cookie-options.model';
import { COOKIE_OPTIONS, CookieOptionsProvider } from './cookie-options.provider';
import { cookieServiceFactory } from './cookie.factory';
import { CookieService } from './cookie.service';


@NgModule({
  providers: [CookieOptionsProvider]
})
export class CookieModule {
  /**
   * Use this method in your root module to provide the CookieService
   */
  static forRoot(options: CookieOptions = {}): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: CookieService, useFactory: cookieServiceFactory, deps: [DOCUMENT, CookieOptionsProvider]}
      ]
    };
  }

  /**
   * Use this method in your other (non root) modules to import the directive/pipe
   */
  static forChild(options: CookieOptions = {}): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: CookieService, useFactory: cookieServiceFactory, deps: [DOCUMENT, CookieOptionsProvider]}
      ]
    };
  }
}
