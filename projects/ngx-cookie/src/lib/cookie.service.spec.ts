import { TestBed } from '@angular/core/testing';
import { CookieDict, CookieOptions } from './cookie.model';
import { CookieModule } from './cookie.module';

import { CookieService } from './cookie.service';

describe('NgxCookieService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.withOptions()
      ]
    });
    service = TestBed.inject(CookieService);
  });

  afterEach(() => {
    service.removeAll();
  });

  it('should be created', () => {
    expect(CookieService).toBeDefined();
    expect(service).toBeDefined();
    expect(service instanceof CookieService).toBeTruthy();
  });

  it('should return undefined a non-existent cookie', () => {
    const key = 'nonExistentCookieKey';
    expect(service.get(key)).toBeUndefined();
    expect(service.getObject(key)).toBeUndefined();
  });

  it('should check properly if the key exists or not', () => {
    const key = 'nonExistentCookieKey';
    expect(service.hasKey(key)).toBeFalse();
    service.put(key, 'testCookieValue');
    expect(service.hasKey(key)).toBeTrue();
  });

  it('should set and get a simple cookie', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    service.put(key, value);
    expect(service.get(key)).toBe(value);
  });

  it('should get as string with getObject if  cannot deserialize', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    service.put(key, value);
    expect(() => service.getObject(key)).toThrowError(SyntaxError);
  });

  it('should get empty cookie', () => {
    const key = 'testCookieKey';
    const value = '';
    service.put(key, value);
    expect(service.getObject(key)).toEqual({});
  });

  it('should edit a simple cookie', () => {
    const key = 'testCookieKey';
    const oldValue = 'testCookieValue';
    const newValue = 'testCookieValueNew';
    service.put(key, oldValue);
    expect(service.get(key)).toBe(oldValue);
    service.put(key, newValue);
    expect(service.get(key)).toBe(newValue);
  });

  it('should remove a cookie', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    service.put(key, value);
    expect(service.get(key)).toBe(value);
    service.remove(key);
    expect(service.get(key)).toBeUndefined();
  });

  it('should set and get an object cookie', () => {
    const key = 'testCookieKey';
    const value = {key1: 'value1', key2: 'value2'};
    service.putObject(key, value);
    expect(service.getObject(key)).toEqual(value);
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
    const result: CookieDict = {};
    simpleCookies.forEach(c => {
      result[c.key] = c.value;
      service.put(c.key, c.value);
    });
    objectCookies.forEach(c => {
      result[c.key] = JSON.stringify(c.value);
      service.putObject(c.key, c.value);
    });
    expect(service.getAll()).toEqual(result);
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
      service.put(c.key, c.value);
    });
    objectCookies.forEach(c => {
      service.putObject(c.key, c.value);
    });
    service.removeAll();
    expect(service.getAll()).toEqual({});
  });

  it('should remove all cookies when passing options', () => {
    const optionCookies = {
      path: '/',
      domain: 'localhost',
      expires: new Date(),
      secure: false
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
      service.put(c.key, c.value, c.option);
    });
    objectCookies.forEach(c => {
      service.putObject(c.key, c.value, c.option);
    });
    service.removeAll(optionCookies);
    expect(service.getAll()).toEqual({});
  });

  it('should return undefined for nonexisting cookies', () => {
    expect(service.get('nonexistingCookie')).toBeUndefined();
    expect(service.getObject('nonexistingCookie')).toBeUndefined();
  });

  it('should change the settings', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue';
    const opts: CookieOptions = {
      expires: new Date('2030-07-19')
    };
    service.put(key, value, opts);
    expect(service.get(key)).toBe(value);
  });

  it('should store unencoded cookie values if requested', () => {
    const key = 'testCookieKey';
    const value = 'testCookieValue=unencoded';
    const opts: CookieOptions = {
      storeUnencoded: true
    };
    service.put(key, value, opts);
    expect(document.cookie).toBe(`${key}=${value}`);
    expect(service.get(key)).toBe(value);
  });

});
