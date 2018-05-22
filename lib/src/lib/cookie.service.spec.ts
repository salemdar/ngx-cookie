import { Injector } from '@angular/core';
import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { CookieOptionsProvider, COOKIE_OPTIONS } from './cookie-options-provider';
import { CookieService } from './cookie.service';
import { CookieOptions } from './cookie-options.model';
import { cookieServiceFactory } from './cookie.factory';
import { CookieModule } from '../public_api';

describe('CookieService', () => {
  let injector: Injector;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.forRoot()
      ]
    });
    injector = getTestBed();
    cookieService = injector.get(CookieService);
  });

  afterEach(() => {
    cookieService.removeAll();
    injector = undefined;
    cookieService = undefined;
  });

  it('is defined', () => {
    expect(CookieService).toBeDefined();
    expect(cookieService).toBeDefined();
    expect(cookieService instanceof CookieService).toBeTruthy();
  });

  it('should return undefined a non-existent cookie', () => {
    const key = 'nonExistentCookieKey';
    expect(cookieService.get(key)).toBeUndefined();
  });

  it('should set and get a simple cookie', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    cookieService.put(key, value);
    expect(cookieService.get(key)).toBe(value);
  });

  it('should get as string with getObject if  cannot deserialize', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    cookieService.put(key, value);
    expect(cookieService.getObject(key)).toBe(value);
  });

  it('should get empty cookie', () => {
    const key = 'testCookieKey';
    const value = '';
    cookieService.put(key, value);
    expect(cookieService.getObject(key)).toBe(value);
  });

  it('should edit a simple cookie', () => {
    const key = 'testCookieKey';
    const oldValue = 'testCookieValue';
    const newValue = 'testCookieValueNew';
    cookieService.put(key, oldValue);
    expect(cookieService.get(key)).toBe(oldValue);
    cookieService.put(key, newValue);
    expect(cookieService.get(key)).toBe(newValue);
  });

  it('should remove a cookie', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    cookieService.put(key, value);
    expect(cookieService.get(key)).toBe(value);
    cookieService.remove(key);
    expect(cookieService.get(key)).toBeUndefined();
  });

  it('should set and get an object cookie', () => {
    const key = 'testCookieKey';
    const value = {key1: 'value1', key2: 'value2'};
    cookieService.putObject(key, value);
    expect(cookieService.getObject(key)).toEqual(value);
  });

  it('should set and get multiple cookies', () => {
    const simpleCookies = [
      {key: 'key1', value: 'value1'}, {key: 'key2', value: 'value2'},
      {key: 'key3', value: 'value3'}
    ];
    const objectCookies = [
      {key: 'keyO1', value: {keyO1_1: 'valueO1_1', keyO1_2: 'valueO1_2'}},
      {key: 'keyO2', value: {keyO2_1: 'valueO2_1', keyO2_2: 'valueO2_2'}},
      {key: 'keyO3', value: {keyO3_1: 'valueO3_1', keyO3_2: 'valueO3_2'}}
    ];
    const result: any = {};
    simpleCookies.forEach(c => {
      result[c.key] = c.value;
      cookieService.put(c.key, c.value);
    });
    objectCookies.forEach(c => {
      result[c.key] = JSON.stringify(c.value);
      cookieService.putObject(c.key, c.value);
    });
    expect(cookieService.getAll()).toEqual(result);
  });

  it('should remove all cookies', () => {
    const simpleCookies = [
      {key: 'key1', value: 'value1'}, {key: 'key2', value: 'value2'},
      {key: 'key3', value: 'value3'}
    ];
    const objectCookies = [
      {key: 'keyO1', value: {keyO1_1: 'valueO1_1', keyO1_2: 'valueO1_2'}},
      {key: 'keyO2', value: {keyO2_1: 'valueO2_1', keyO2_2: 'valueO2_2'}},
      {key: 'keyO3', value: {keyO3_1: 'valueO3_1', keyO3_2: 'valueO3_2'}}
    ];
    simpleCookies.forEach(c => {
      cookieService.put(c.key, c.value);
    });
    objectCookies.forEach(c => {
      cookieService.putObject(c.key, c.value);
    });
    cookieService.removeAll();
    expect(cookieService.getAll()).toEqual({});
  });

  it('should remove all cookies when passing options', () => {
    const optionCookies = {
      path: '/',
      domain: 'localhost',
      expires: new Date(),
      secure: false,
    };
    const simpleCookies = [
      {key: 'key1', value: 'value1', option: optionCookies},
      {key: 'key2', value: 'value2', option: optionCookies},
      {key: 'key3', value: 'value3', option: optionCookies}
    ];
    const objectCookies = [
      {key: 'keyO1', value: {keyO1_1: 'valueO1_1', keyO1_2: 'valueO1_2'}, option: optionCookies},
      {key: 'keyO2', value: {keyO2_1: 'valueO2_1', keyO2_2: 'valueO2_2'}, option: optionCookies},
      {key: 'keyO3', value: {keyO3_1: 'valueO3_1', keyO3_2: 'valueO3_2'}, option: optionCookies}
    ];
    simpleCookies.forEach(c => {
      cookieService.put(c.key, c.value, c.option);
    });
    objectCookies.forEach(c => {
      cookieService.putObject(c.key, c.value, c.option);
    });
    cookieService.removeAll(optionCookies);
    expect(cookieService.getAll()).toEqual({});
  });

  it('should return undefined for nonexisting cookies', () => {
    expect(cookieService.get('nonexistingCookie')).toBeUndefined();
  });

  it('should change the settings', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    const opts: CookieOptions = {
      expires: new Date('2030-07-19')
    };
    cookieService.put(key, value, opts);
    expect(cookieService.get(key)).toBe(value);
  });

  it('should store unencoded cookie values if requested', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue=unencoded';
    const opts: CookieOptions = {
      storeUnencoded: true
    };
    cookieService.put(key, value, opts);
    expect(document.cookie).toBe(`${key}=${value}`);
    expect(cookieService.get(key)).toBe(value);
  });
});
