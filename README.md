# ngx-cookie  [![Build Status](https://travis-ci.org/salemdar/ngx-cookie.svg?branch=master)](https://travis-ci.org/salemdar/ngx-cookie) [![npm version](https://img.shields.io/npm/v/ngx-cookie.svg)](https://www.npmjs.com/package/ngx-cookie) [![Downloads](http://img.shields.io/npm/dm/ngx-cookie.svg)](https://npmjs.org/package/ngx-cookie)

> Implementation of Angular 1.x $cookies service to Angular. Successor of [angular2-cookie](https://github.com/salemdar/angular2-cookie)

## Table of contents:
- [Get Started](#get-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [AngularUniversal](#universal)
  - [Examples](#examples)
    - [angular-quickstart](#quickstart)
    - [angular-seed](#seed)
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
npm install ngx-cookie --save
# or
# yarn add ngx-cookie
```

After installing the library, it should be included in the SystemJS configurations.

```javascript
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 * Taken from: https://github.com/angular/quickstart/blob/master/systemjs.config.js
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'ngx-cookie':                 'npm:ngx-cookie/bundles/ngx-cookie.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
```

### <a name="usage"></a> Usage

`CookieModule` should be registered in the `AppModule` with `forRoot()` static method and with `forChild()` in the child modules.
These methods accepts `CookieOptions` objects as well. Leave it blank for the defaults.

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
    template: '<h1>My Angular2 App with Cookies</h1>'
})

export class AppComponent { 
  constructor(private _cookieService:CookieService){}
  
  getCookie(key: string){
    return this._cookieService.get(key);
  }
}
```


### <a name="examples"></a> Examples

Here you can find some usage examples with popular boilerplate libraries.

#### <a name="quickstart"></a> Angular2-quickstart

A boilerplate provided by Angular team.
_(Link: [https://github.com/angular/quickstart](https://github.com/angular/quickstart))_

Just edit the `systemjs.config.js` file and add the `ngx-cookie` there.

```typescript
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'ngx-cookie':                 'npm:ngx-cookie/bundles/ngx-cookie.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
```

#### <a name="seed"></a> Angular2-seed

A popular seed project.
_(Link: [https://github.com/mgechev/angular2-seed](https://github.com/mgechev/angular2-seed))_

Add the following settings to the (constructor of) `ProjectConfig` class (path: `./tools/config/project.config.ts`).

```typescript
let additionalPackages: ExtendPackages[] = [{
  name: 'ngx-cookie',
  // Path to the package's bundle
  path: 'node_modules/ngx-cookie/bundles/ngx-cookie.umd.js'
}];

this.addPackagesBundles(additionalPackages);
```

Do not forget to inject the `CookieModule` in the module `AppModule` and `SharedModule`.


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
- **httpOnly** - {boolean} - If `true`, then the cookie will be set with the `HttpOnly` flag, and will only be accessible from the remote server. Helps to prevent against XSS attacks.
- **storeUnencoded** - {boolean} - If `true`, then the cookie value will not be encoded and will be stored as provided. 

