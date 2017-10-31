var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';
var CookieBackendService = /** @class */ (function (_super) {
    __extends(CookieBackendService, _super);
    function CookieBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CookieBackendService.prototype, "cookieString", {
        get: function () {
            return global.Zone.current.get('req').headers.cookie || '';
        },
        set: function (val) {
            global.Zone.current.get('req').headers.cookie = val;
            global.Zone.current.get('res').headers.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    return CookieBackendService;
}(CookieService));
export { CookieBackendService };
