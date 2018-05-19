import { NgModule, ModuleWithProviders } from '@angular/core';

import { CookieOptionsProvider, COOKIE_OPTIONS } from './cookie-options-provider';
import { CookieService } from './cookie.service';
import { CookieOptions } from './cookie-options.model';
import { cookieServiceFactory } from './cookie.factory';

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
        {provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider]}
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
        {provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider]}
      ]
    };
  }
}
