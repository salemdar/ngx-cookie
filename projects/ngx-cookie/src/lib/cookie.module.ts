import { DOCUMENT } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CookieWriterService } from './cookie-writer.service';

import { CookieOptions } from './cookie.model';
import { CookieOptionsProvider } from './cookie-options.provider';
import { cookieServiceFactory } from './cookie.factory';
import { CookieService } from './cookie.service';
import { COOKIE_OPTIONS, COOKIE_WRITER } from './tokens';


@NgModule({
  providers: [CookieOptionsProvider]
})
export class CookieModule {
  /**
   * Use this method in your root module to provide the CookieService
   */
  static forRoot(options: CookieOptions = {}): ModuleWithProviders<CookieModule> {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: COOKIE_WRITER, useClass: CookieWriterService},
        {provide: CookieService, useFactory: cookieServiceFactory, deps: [DOCUMENT, CookieOptionsProvider, COOKIE_WRITER]}
      ]
    };
  }

  /**
   * Use this method in your other (non root) modules to import the directive/pipe
   */
  static forChild(options: CookieOptions = {}): ModuleWithProviders<CookieModule> {
    return CookieModule.forRoot(options);
  }
}
