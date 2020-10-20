# ngx-cookie  [![CI](https://github.com/salemdar/ngx-cookie/workflows/CI/badge.svg)](https://github.com/salemdar/ngx-cookie/actions?query=workflow%3ACI) [![npm version](https://img.shields.io/npm/v/ngx-cookie.svg)](https://www.npmjs.com/package/ngx-cookie) [![Downloads](http://img.shields.io/npm/dm/ngx-cookie.svg)](https://npmjs.org/package/ngx-cookie)


> Implementation of Angular 1.x $cookies service to Angular

## Table of contents:
- [Get Started](#get-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Server Side Rendering](#ssr)
  - [Examples](#examples)
- [CookieService](#cookieservice)
  - [get()](#get)
  - [getObject()](#getobject)
  - [getAll()](#getall)
  - [put()](#put)
  - [putObject()](#putobject)
  - [remove()](#remove)
  - [removeAll()](#removeall)
- [Options](#options)

## <a name="get-started"></a> Get Started

### <a name="installation"></a> Installation

You can install this package locally with npm.

```bash
# To get the latest stable version and update package.json file:
yarn add ngx-cookie
# or
# npm install ngx-cookie --save
```

### <a name="usage"></a> Usage

`CookieModule` should be registered in the `AppModule` with `forRoot()` static method and with `forChild()` in the child modules.
These methods accept `CookieOptions` objects as well. Leave it blank for the defaults.

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CookieModule } from 'ngx-cookie';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, CookieModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

```typescript
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'my-very-cool-app',
    template: '<h1>My Angular App with Cookies</h1>'
})

export class AppComponent { 
  constructor(private cookieService: CookieService){}
  
  getCookie(key: string){
    return this.cookieService.get(key);
  }
}
```

### <a name="ssr"></a> Server Side Rendering

`ngx-cookie` supports usage during Server Side Rendering (SSR / Angular Universal). Getting Server Side Rendering itself set up the first time can be tricky and is outside the scope of this guide. Here, we'll assume that you've got a working SSR setup similar to the [Angular Universal Starter project](https://github.com/angular/universal-starter), and you're just trying to get `ngx-cookie` working with SSR.

Note: during normal, client side usage, `ngx-cookie` manipulates the client cookies attached to the `document` object. During SSR, `ngx-cookie` will manipulate cookies in http request or response headers._

#### Setup

Install `ngx-cookie-backend` library:
```shell script
yarn add ngx-cookie-backend
# or
# npm install ngx-cookie-backend --save
```

Then edit `app.server.module.ts` and add `CookieBackendModule.forRoot()` to imports:

```typescript
/* app.server.module.ts */

import { CookieBackendModule } from 'ngx-cookie-backend';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    CookieBackendModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
```
Next, we need to make providers for the `'REQUEST'` and `'RESPONSE'` objects created by the expressjs server during SSR. To do this, edit `server.ts` to create providers for `'REQUEST'` AND `'RESPONSE'`.

```typescript
/* server.ts */
// All regular routes use the Universal engine
server.get('*', (req, res) => {
  res.render(indexHtml, {
    req,
    res,
    providers: [
      {provide: APP_BASE_HREF, useValue: req.baseUrl},
      {provide: REQUEST, useValue: req},
      {provide: RESPONSE, useValue: res}
    ]
  });
});
```

And that's it! all your application's calls to `CookieService` should now work properly during SSR!

### <a name="examples"></a> Examples

Normal usage example is under `projects/test-app`

SSR usage example is under `projects/backend-test-app`


## <a name="cookieservice"></a> CookieService

There are 7 methods available in the `CookieService` (6 standard methods from **Angular 1** and 1 extra `removeAll()` method for convenience)

### <a name="get"></a> get()
Returns the value of given cookie key.

```typescript
/**
 * @param {string} key Id to use for lookup.
 * @returns {string} Raw cookie value.
 */
get(key: string): string;
```

### <a name="getobject"></a> getObject()
Returns the deserialized value of given cookie key.

```typescript
/**
 * @param {string} key Id to use for lookup.
 * @returns {Object} Deserialized cookie value.
 */
getObject(key: string): Object;
```

### <a name="getall"></a> getAll()
Returns a key value object with all the cookies.

```typescript
/**
 * @returns {Object} All cookies
 */
getAll(): any;
```

### <a name="put"></a> put()
Sets a value for given cookie key.

```typescript
/**
 * @param {string} key Id for the `value`.
 * @param {string} value Raw value to be stored.
 * @param {CookieOptions} options (Optional) Options object.
 */
put(key: string, value: string, options?: CookieOptions): void;
```

### <a name="putobject"></a> putObject()
Serializes and sets a value for given cookie key.

```typescript
/**
 * @param {string} key Id for the `value`.
 * @param {Object} value Value to be stored.
 * @param {CookieOptions} options (Optional) Options object.
 */
putObject(key: string, value: Object, options?: CookieOptions): void;
```

### <a name="remove"></a> remove()
Remove given cookie.

```typescript
/**
 * @param {string} key Id of the key-value pair to delete.
 * @param {CookieOptions} options (Optional) Options object.
 */
remove(key: string, options?: CookieOptions): void;
```

### <a name="removeall"></a> removeAll()
Remove all cookies.

```typescript
/**
 */
removeAll(): void;
```

## <a name="options"></a> Options

Options object should be a type of `CookieOptions` interface. The object may have following properties:

- **path** - {string} - The cookie will be available only for this path and its sub-paths. By default, this is the URL that appears in your `<base>` tag.
- **domain** - {string} - The cookie will be available only for this domain and its sub-domains. For security reasons the user agent will not accept the cookie if the current domain is not a sub-domain of this domain or equal to it.
- **expires** - {string|Date} - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT" or a Date object indicating the exact date/time this cookie will expire.
- **secure** - {boolean} - If `true`, then the cookie will only be available through a secured connection.
- **sameSite** - {"Lax"|"Strict"|"None"} - Designates cookie for first party (Lax|Strict) or third party contexts.
- **httpOnly** - {boolean} - If `true`, then the cookie will be set with the `HttpOnly` flag, and will only be accessible from the remote server. Helps to prevent against XSS attacks.
- **storeUnencoded** - {boolean} - If `true`, then the cookie value will not be encoded and will be stored as provided. 
