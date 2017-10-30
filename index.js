import { NgModule } from '@angular/core';
import { COOKIE_OPTIONS, CookieOptionsProvider } from './src/cookie-options-provider';
import { CookieService } from './src/cookie.service';
import { cookieServiceFactory } from './src/cookie.factory';
export * from './src/cookie.service';
export * from './src/cookie-backend.service';
export * from './src/cookie-options-provider';
export * from './src/cookie.factory';
export * from './src/utils';
var CookieModule = /** @class */ (function () {
    function CookieModule() {
    }
    /**
     * Use this method in your root module to provide the CookieService
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    /**
       * Use this method in your root module to provide the CookieService
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    CookieModule.forRoot = /**
       * Use this method in your root module to provide the CookieService
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule,
            providers: [
                { provide: COOKIE_OPTIONS, useValue: options },
                { provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider] }
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    /**
       * Use this method in your other (non root) modules to import the directive/pipe
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    CookieModule.forChild = /**
       * Use this method in your other (non root) modules to import the directive/pipe
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule,
            providers: [
                { provide: COOKIE_OPTIONS, useValue: options },
                { provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider] }
            ]
        };
    };
    return CookieModule;
}());
export { CookieModule };
