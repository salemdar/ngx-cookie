(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-cookie"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngx-cookie"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CookieService = /** @class */ (function () {
    function CookieService(_optionsProvider) {
        this._optionsProvider = _optionsProvider;
        this.options = this._optionsProvider.options;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    CookieService.prototype.get = function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    CookieService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* safeJsonParse */])(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    CookieService.prototype.getAll = function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.put = function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.remove = function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    CookieService.prototype.removeAll = function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* safeDecodeURIComponent */])(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isBlank */])(lastCookies[name])) {
                        lastCookies[name] = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* safeDecodeURIComponent */])(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var opts = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* mergeOptions */])(this.options, options);
        var expires = opts.expires;
        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isBlank */])(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* isString */])(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too \n      large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    CookieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__["b" /* CookieOptionsProvider */]])
    ], CookieService);
    return CookieService;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COOKIE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CookieOptionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var COOKIE_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('COOKIE_OPTIONS');
/** @private */
var CookieOptionsProvider = /** @class */ (function () {
    function CookieOptionsProvider(options, _injector) {
        if (options === void 0) { options = {}; }
        this._injector = _injector;
        this.defaultOptions = {
            path: this._injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"], '/'),
            domain: null,
            expires: null,
            secure: false,
        };
        this._options = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* mergeOptions */])(this.defaultOptions, options);
    }
    Object.defineProperty(CookieOptionsProvider.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    CookieOptionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(COOKIE_OPTIONS)),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], CookieOptionsProvider);
    return CookieOptionsProvider;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBlank;
/* harmony export (immutable) */ __webpack_exports__["b"] = isPresent;
/* harmony export (immutable) */ __webpack_exports__["c"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeOptions;
/* harmony export (immutable) */ __webpack_exports__["e"] = safeDecodeURIComponent;
/* harmony export (immutable) */ __webpack_exports__["f"] = safeJsonParse;
function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isString(obj) {
    return typeof obj === 'string';
}
function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
    };
}
function safeDecodeURIComponent(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
}
function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return str;
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cookieServiceFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookie_service__ = __webpack_require__(1);

function cookieServiceFactory(cookieOptionsProvider) {
    return new __WEBPACK_IMPORTED_MODULE_0__cookie_service__["a" /* CookieService */](cookieOptionsProvider);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieModule", function() { return CookieModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieBackendService", function() { return __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "COOKIE_OPTIONS", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieOptionsProvider", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cookieServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "safeDecodeURIComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "safeJsonParse", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["f"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CookieModule = /** @class */ (function () {
    function CookieModule() {
    }
    CookieModule_1 = CookieModule;
    /**
     * Use this method in your root module to provide the CookieService
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forChild = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    CookieModule = CookieModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]]
        })
    ], CookieModule);
    return CookieModule;
    var CookieModule_1;
}());



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_service__ = __webpack_require__(1);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
    CookieBackendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CookieBackendService);
    return CookieBackendService;
}(__WEBPACK_IMPORTED_MODULE_1__cookie_service__["a" /* CookieService */]));


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmOTdhMjJiMzhhYzA0YzFmYzdkOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUtb3B0aW9ucy1wcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZS5mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL3NyYy9jb29raWUtYmFja2VuZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJD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O0NBQUE7QUE5QndCOzs7Ozs7O0FDakJ6QiwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJDO0FBRU07QUFHakQ7SUFBMEMsd0NBQWE7SUFBdkQ7O0lBU0EsQ0FBQztJQVJDLHNCQUFjLDhDQUFZO2FBQTFCO1lBQ0UsTUFBTSxDQUFPLE1BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNwRSxDQUFDO2FBRUQsVUFBMkIsR0FBVztZQUM5QixNQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDckQsTUFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzdELENBQUM7OztPQUxBO0lBSFUsb0JBQW9CO1FBRGhDLGlFQUFVLEVBQUU7T0FDQSxvQkFBb0IsQ0FTaEM7SUFBRCwyQkFBQztDQUFBLENBVHlDLHNFQUFhLEdBU3REO0FBVGdDOzs7Ozs7OztBQ0xqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJuZ3gtY29va2llLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2NvbW1vblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtY29va2llXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmd4LWNvb2tpZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmOTdhMjJiMzhhYzA0YzFmYzdkOCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29raWVPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IGlzQmxhbmssIGlzU3RyaW5nLCBtZXJnZU9wdGlvbnMsIHNhZmVEZWNvZGVVUklDb21wb25lbnQsIHNhZmVKc29uUGFyc2UgfSBmcm9tICcuL3V0aWxzJztcblxuZGVjbGFyZSBpbnRlcmZhY2UgRG9jdW1lbnQge1xuICBjb29raWU6IHN0cmluZztcbn1cbmRlY2xhcmUgY29uc3QgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb29raWVTZXJ2aWNlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nO1xuICBnZXRPYmplY3Qoa2V5OiBzdHJpbmcpOiBPYmplY3Q7XG4gIGdldEFsbCgpOiBPYmplY3Q7XG4gIHB1dChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkO1xuICBwdXRPYmplY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBPYmplY3QsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZDtcbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQ7XG4gIHJlbW92ZUFsbCgpOiB2b2lkO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSBpbXBsZW1lbnRzIElDb29raWVTZXJ2aWNlIHtcblxuICBwcm90ZWN0ZWQgb3B0aW9uczogQ29va2llT3B0aW9ucztcblxuICBwcm90ZWN0ZWQgZ2V0IGNvb2tpZVN0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgfHwgJyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGNvb2tpZVN0cmluZyh2YWw6IHN0cmluZykge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IHZhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29wdGlvbnNQcm92aWRlcjogQ29va2llT3B0aW9uc1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5fb3B0aW9uc1Byb3ZpZGVyLm9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgdG8gdXNlIGZvciBsb29rdXAuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFJhdyBjb29raWUgdmFsdWUuXG4gICAqL1xuICBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAoPGFueT50aGlzLl9jb29raWVSZWFkZXIoKSlba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldE9iamVjdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyB0aGUgZGVzZXJpYWxpemVkIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgdG8gdXNlIGZvciBsb29rdXAuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IERlc2VyaWFsaXplZCBjb29raWUgdmFsdWUuXG4gICAqL1xuICBnZXRPYmplY3Qoa2V5OiBzdHJpbmcpOiBPYmplY3Qge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIHZhbHVlID8gc2FmZUpzb25QYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldEFsbFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyBhIGtleSB2YWx1ZSBvYmplY3Qgd2l0aCBhbGwgdGhlIGNvb2tpZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEFsbCBjb29raWVzXG4gICAqL1xuICBnZXRBbGwoKTogT2JqZWN0IHtcbiAgICByZXR1cm4gPGFueT50aGlzLl9jb29raWVSZWFkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3B1dFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2V0cyBhIHZhbHVlIGZvciBnaXZlbiBjb29raWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIGZvciB0aGUgYHZhbHVlYC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFJhdyB2YWx1ZSB0byBiZSBzdG9yZWQuXG4gICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgKi9cbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgIHRoaXMuX2Nvb2tpZVdyaXRlcigpKGtleSwgdmFsdWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcHV0T2JqZWN0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZXJpYWxpemVzIGFuZCBzZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgZm9yIHRoZSBgdmFsdWVgLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVmFsdWUgdG8gYmUgc3RvcmVkLlxuICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnMgKE9wdGlvbmFsKSBPcHRpb25zIG9iamVjdC5cbiAgICovXG4gIHB1dE9iamVjdChrZXk6IHN0cmluZywgdmFsdWU6IE9iamVjdCwgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpIHtcbiAgICB0aGlzLnB1dChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNyZW1vdmVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlbW92ZSBnaXZlbiBjb29raWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgb2YgdGhlIGtleS12YWx1ZSBwYWlyIHRvIGRlbGV0ZS5cbiAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fY29va2llV3JpdGVyKCkoa2V5LCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcmVtb3ZlQWxsXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmUgYWxsIGNvb2tpZXMuXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgbGV0IGNvb2tpZXMgPSB0aGlzLmdldEFsbCgpO1xuICAgIE9iamVjdC5rZXlzKGNvb2tpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jb29raWVSZWFkZXIoKTogT2JqZWN0IHtcbiAgICBsZXQgbGFzdENvb2tpZXMgPSB7fTtcbiAgICBsZXQgbGFzdENvb2tpZVN0cmluZyA9ICcnO1xuICAgIGxldCBjb29raWVBcnJheTogc3RyaW5nW10sIGNvb2tpZTogc3RyaW5nLCBpOiBudW1iZXIsIGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZztcbiAgICBsZXQgY3VycmVudENvb2tpZVN0cmluZyA9IHRoaXMuY29va2llU3RyaW5nO1xuICAgIGlmIChjdXJyZW50Q29va2llU3RyaW5nICE9PSBsYXN0Q29va2llU3RyaW5nKSB7XG4gICAgICBsYXN0Q29va2llU3RyaW5nID0gY3VycmVudENvb2tpZVN0cmluZztcbiAgICAgIGNvb2tpZUFycmF5ID0gbGFzdENvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcbiAgICAgIGxhc3RDb29raWVzID0ge307XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29va2llID0gY29va2llQXJyYXlbaV07XG4gICAgICAgIGluZGV4ID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkgeyAgLy8gaWdub3JlIG5hbWVsZXNzIGNvb2tpZXNcbiAgICAgICAgICBuYW1lID0gc2FmZURlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKDAsIGluZGV4KSk7XG4gICAgICAgICAgLy8gdGhlIGZpcnN0IHZhbHVlIHRoYXQgaXMgc2VlbiBmb3IgYSBjb29raWUgaXMgdGhlIG1vc3RcbiAgICAgICAgICAvLyBzcGVjaWZpYyBvbmUuICB2YWx1ZXMgZm9yIHRoZSBzYW1lIGNvb2tpZSBuYW1lIHRoYXRcbiAgICAgICAgICAvLyBmb2xsb3cgYXJlIGZvciBsZXNzIHNwZWNpZmljIHBhdGhzLlxuICAgICAgICAgIGlmIChpc0JsYW5rKCg8YW55Pmxhc3RDb29raWVzKVtuYW1lXSkpIHtcbiAgICAgICAgICAgICg8YW55Pmxhc3RDb29raWVzKVtuYW1lXSA9IHNhZmVEZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhpbmRleCArIDEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxhc3RDb29raWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29va2llV3JpdGVyKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgICAgdGhhdC5jb29raWVTdHJpbmcgPSB0aGF0Ll9idWlsZENvb2tpZVN0cmluZyhuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkQ29va2llU3RyaW5nKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGxldCBvcHRzOiBDb29raWVPcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgbGV0IGV4cGlyZXM6IGFueSA9IG9wdHMuZXhwaXJlcztcbiAgICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgIGV4cGlyZXMgPSAnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnO1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKGV4cGlyZXMpKSB7XG4gICAgICBleHBpcmVzID0gbmV3IERhdGUoZXhwaXJlcyk7XG4gICAgfVxuXG4gICAgbGV0IHN0ciA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgc3RyICs9IG9wdHMucGF0aCA/ICc7cGF0aD0nICsgb3B0cy5wYXRoIDogJyc7XG4gICAgc3RyICs9IG9wdHMuZG9tYWluID8gJztkb21haW49JyArIG9wdHMuZG9tYWluIDogJyc7XG4gICAgc3RyICs9IGV4cGlyZXMgPyAnO2V4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuICAgIHN0ciArPSBvcHRzLnNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnO1xuXG4gICAgLy8gcGVyIGh0dHA6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzIxMDkudHh0IGJyb3dzZXIgbXVzdCBhbGxvdyBhdCBtaW5pbXVtOlxuICAgIC8vIC0gMzAwIGNvb2tpZXNcbiAgICAvLyAtIDIwIGNvb2tpZXMgcGVyIHVuaXF1ZSBkb21haW5cbiAgICAvLyAtIDQwOTYgYnl0ZXMgcGVyIGNvb2tpZVxuICAgIGxldCBjb29raWVMZW5ndGggPSBzdHIubGVuZ3RoICsgMTtcbiAgICBpZiAoY29va2llTGVuZ3RoID4gNDA5Nikge1xuICAgICAgY29uc29sZS5sb2coYENvb2tpZSBcXCcke25hbWV9XFwnIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gXG4gICAgICBsYXJnZSAoJHtjb29raWVMZW5ndGh9ID4gNDA5NiBieXRlcykhYCk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29va2llLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IG1lcmdlT3B0aW9ucyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQ09PS0lFX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NPT0tJRV9PUFRJT05TJyk7XG5cbi8qKiBAcHJpdmF0ZSAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZU9wdGlvbnNQcm92aWRlciB7XG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IENvb2tpZU9wdGlvbnM7XG4gIHByaXZhdGUgX29wdGlvbnM6IENvb2tpZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChDT09LSUVfT1BUSU9OUykgb3B0aW9uczogQ29va2llT3B0aW9ucyA9IHt9LCBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcGF0aDogdGhpcy5faW5qZWN0b3IuZ2V0KEFQUF9CQVNFX0hSRUYsICcvJyksXG4gICAgICBkb21haW46IG51bGwsXG4gICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuX29wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBDb29raWVPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29va2llLW9wdGlvbnMtcHJvdmlkZXIudHMiLCJpbXBvcnQgeyBDb29raWVPcHRpb25zIH0gZnJvbSAnLi9jb29raWUtb3B0aW9ucy5tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByZXNlbnQob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajogYW55KTogb2JqIGlzIHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvbGRPcHRpb25zOiBDb29raWVPcHRpb25zLCBuZXdPcHRpb25zPzogQ29va2llT3B0aW9ucyk6IENvb2tpZU9wdGlvbnMge1xuICBpZiAoIW5ld09wdGlvbnMpIHtcbiAgICByZXR1cm4gb2xkT3B0aW9ucztcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGg6IGlzUHJlc2VudChuZXdPcHRpb25zLnBhdGgpID8gbmV3T3B0aW9ucy5wYXRoIDogb2xkT3B0aW9ucy5wYXRoLFxuICAgIGRvbWFpbjogaXNQcmVzZW50KG5ld09wdGlvbnMuZG9tYWluKSA/IG5ld09wdGlvbnMuZG9tYWluIDogb2xkT3B0aW9ucy5kb21haW4sXG4gICAgZXhwaXJlczogaXNQcmVzZW50KG5ld09wdGlvbnMuZXhwaXJlcykgPyBuZXdPcHRpb25zLmV4cGlyZXMgOiBvbGRPcHRpb25zLmV4cGlyZXMsXG4gICAgc2VjdXJlOiBpc1ByZXNlbnQobmV3T3B0aW9ucy5zZWN1cmUpID8gbmV3T3B0aW9ucy5zZWN1cmUgOiBvbGRPcHRpb25zLnNlY3VyZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVEZWNvZGVVUklDb21wb25lbnQoc3RyOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlSnNvblBhcnNlKHN0cjogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3V0aWxzLnRzIiwiaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vY29va2llLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29va2llT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9jb29raWUtb3B0aW9ucy1wcm92aWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb29raWVTZXJ2aWNlRmFjdG9yeShjb29raWVPcHRpb25zUHJvdmlkZXI6IENvb2tpZU9wdGlvbnNQcm92aWRlcik6IENvb2tpZVNlcnZpY2Uge1xuICByZXR1cm4gbmV3IENvb2tpZVNlcnZpY2UoY29va2llT3B0aW9uc1Byb3ZpZGVyKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2Nvb2tpZS5mYWN0b3J5LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ09PS0lFX09QVElPTlMsIENvb2tpZU9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vc3JjL2Nvb2tpZS1vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuL3NyYy9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVPcHRpb25zIH0gZnJvbSAnLi9zcmMvY29va2llLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgY29va2llU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NyYy9jb29raWUuZmFjdG9yeSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2Nvb2tpZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2Nvb2tpZS1iYWNrZW5kLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29va2llLW9wdGlvbnMubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29va2llLW9wdGlvbnMtcHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29va2llLmZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvdXRpbHMnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIENvb2tpZU1vZHVsZSB7XG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciByb290IG1vZHVsZSB0byBwcm92aWRlIHRoZSBDb29raWVTZXJ2aWNlXG4gICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IENvb2tpZU9wdGlvbnMgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29va2llTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBDT09LSUVfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnN9LFxuICAgICAgICB7cHJvdmlkZTogQ29va2llU2VydmljZSwgdXNlRmFjdG9yeTogY29va2llU2VydmljZUZhY3RvcnksIGRlcHM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcbiAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtNb2R1bGVXaXRoUHJvdmlkZXJzfVxuICAgKi9cbiAgc3RhdGljIGZvckNoaWxkKG9wdGlvbnM6IENvb2tpZU9wdGlvbnMgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29va2llTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBDT09LSUVfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnN9LFxuICAgICAgICB7cHJvdmlkZTogQ29va2llU2VydmljZSwgdXNlRmFjdG9yeTogY29va2llU2VydmljZUZhY3RvcnksIGRlcHM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29raWVCYWNrZW5kU2VydmljZSBleHRlbmRzIENvb2tpZVNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZ2V0IGNvb2tpZVN0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAoPGFueT5nbG9iYWwpLlpvbmUuY3VycmVudC5nZXQoJ3JlcScpLmhlYWRlcnMuY29va2llIHx8ICcnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBjb29raWVTdHJpbmcodmFsOiBzdHJpbmcpIHtcbiAgICAoPGFueT5nbG9iYWwpLlpvbmUuY3VycmVudC5nZXQoJ3JlcScpLmhlYWRlcnMuY29va2llID0gdmFsO1xuICAgICg8YW55Pmdsb2JhbCkuWm9uZS5jdXJyZW50LmdldCgncmVzJykuaGVhZGVycy5jb29raWUgPSB2YWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2Nvb2tpZS1iYWNrZW5kLnNlcnZpY2UudHMiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XG59IGNhdGNoKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcblx0XHRnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==