import { NgModule, ModuleWithProviders } from '@angular/core';

import { COOKIE_OPTIONS, CookieOptionsProvider } from './src/cookie-options-provider';
import { CookieService } from './src/cookie.service';
import { CookieOptions } from './src/cookie-options.model';
import { cookieServiceFactory } from './src/cookie.factory';

export * from "./src/cookie.service";
export * from "./src/cookie-backend.service";
export * from "./src/cookie-options.model";

@NgModule({
  providers: [CookieOptionsProvider]
})
export class CookieModule {
  /**
   * Use this method in your root module to provide the CookieService
   * @param {CookieOptions} options
   * @returns {ModuleWithProviders}
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
   * @param {CookieOptions} options
   * @returns {ModuleWithProviders}
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
