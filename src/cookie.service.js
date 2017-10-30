import { Injectable } from '@angular/core';
import { CookieOptionsProvider } from './cookie-options-provider';
import { isBlank, isString, mergeOptions, safeDecodeURIComponent, safeJsonParse } from './utils';
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
    /**
       * @name CookieService#get
       *
       * @description
       * Returns the value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {string} Raw cookie value.
       */
    CookieService.prototype.get = /**
       * @name CookieService#get
       *
       * @description
       * Returns the value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {string} Raw cookie value.
       */
    function (key) {
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
    /**
       * @name CookieService#getObject
       *
       * @description
       * Returns the deserialized value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {Object} Deserialized cookie value.
       */
    CookieService.prototype.getObject = /**
       * @name CookieService#getObject
       *
       * @description
       * Returns the deserialized value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {Object} Deserialized cookie value.
       */
    function (key) {
        var value = this.get(key);
        return value ? safeJsonParse(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    /**
       * @name CookieService#getAll
       *
       * @description
       * Returns a key value object with all the cookies.
       *
       * @returns {Object} All cookies
       */
    CookieService.prototype.getAll = /**
       * @name CookieService#getAll
       *
       * @description
       * Returns a key value object with all the cookies.
       *
       * @returns {Object} All cookies
       */
    function () {
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
    CookieService.prototype.put = /**
       * @name CookieService#put
       *
       * @description
       * Sets a value for given cookie key.
       *
       * @param {string} key Id for the `value`.
       * @param {string} value Raw value to be stored.
       * @param {CookieOptions} options (Optional) Options object.
       */
    function (key, value, options) {
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
    CookieService.prototype.putObject = /**
       * @name CookieService#putObject
       *
       * @description
       * Serializes and sets a value for given cookie key.
       *
       * @param {string} key Id for the `value`.
       * @param {Object} value Value to be stored.
       * @param {CookieOptions} options (Optional) Options object.
       */
    function (key, value, options) {
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
    /**
       * @name CookieService#remove
       *
       * @description
       * Remove given cookie.
       *
       * @param {string} key Id of the key-value pair to delete.
       * @param {CookieOptions} options (Optional) Options object.
       */
    CookieService.prototype.remove = /**
       * @name CookieService#remove
       *
       * @description
       * Remove given cookie.
       *
       * @param {string} key Id of the key-value pair to delete.
       * @param {CookieOptions} options (Optional) Options object.
       */
    function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    /**
       * @name CookieService#removeAll
       *
       * @description
       * Remove all cookies.
       */
    CookieService.prototype.removeAll = /**
       * @name CookieService#removeAll
       *
       * @description
       * Remove all cookies.
       */
    function () {
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
                    // ignore nameless cookies
                    name = safeDecodeURIComponent(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (isBlank(lastCookies[name])) {
                        lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1));
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
        var opts = mergeOptions(this.options, options);
        var expires = opts.expires;
        if (isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (isString(expires)) {
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
    return CookieService;
}());
export { CookieService };
