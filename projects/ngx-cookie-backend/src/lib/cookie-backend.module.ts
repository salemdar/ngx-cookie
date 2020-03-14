import { DOCUMENT } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { COOKIE_OPTIONS, CookieModule, CookieOptions, CookieOptionsProvider, cookieServiceFactory } from 'ngx-cookie';
import { CookieBackendService } from './cookie-backend.service';


@NgModule({
  imports: [CookieModule],
  providers: [CookieOptionsProvider]
})
export class CookieBackendModule {
  /**
   * Use this method in your root module to provide the CookieService
   */
  static forRoot(options: CookieOptions = {}): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: CookieBackendService, useFactory: cookieServiceFactory, deps: [DOCUMENT, CookieOptionsProvider]}
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
        {provide: CookieBackendService, useFactory: cookieServiceFactory, deps: [DOCUMENT, CookieOptionsProvider]}
      ]
    };
  }
}
