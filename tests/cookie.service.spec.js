import { TestBed, getTestBed } from '@angular/core/testing';
import { CookieService, CookieModule } from '../index';
describe('CookieService', function () {
    var injector;
    var cookieService;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                CookieModule.forRoot()
            ]
        });
        injector = getTestBed();
        cookieService = injector.get(CookieService);
    });
    afterEach(function () {
        cookieService.removeAll();
        injector = undefined;
        cookieService = undefined;
    });
    it('is defined', function () {
        expect(CookieService).toBeDefined();
        expect(cookieService).toBeDefined();
        expect(cookieService instanceof CookieService).toBeTruthy();
    });
    it('should return undefined a non-existent cookie', function () {
        var key = 'nonExistentCookieKey';
        expect(cookieService.get(key)).toBeUndefined();
    });
    it('should set and get a simple cookie', function () {
        var key = 'testCookieKey';
        var value = 'testCookieValue';
        cookieService.put(key, value);
        expect(cookieService.get(key)).toBe(value);
    });
    it('should get as string with getObject if  cannot deserialize', function () {
        var key = 'testCookieKey';
        var value = 'testCookieValue';
        cookieService.put(key, value);
        expect(cookieService.getObject(key)).toBe(value);
    });
    it('should get empty cookie', function () {
        var key = 'testCookieKey';
        var value = '';
        cookieService.put(key, value);
        expect(cookieService.getObject(key)).toBe(value);
    });
    it('should edit a simple cookie', function () {
        var key = 'testCookieKey';
        var oldValue = 'testCookieValue';
        var newValue = 'testCookieValueNew';
        cookieService.put(key, oldValue);
        expect(cookieService.get(key)).toBe(oldValue);
        cookieService.put(key, newValue);
        expect(cookieService.get(key)).toBe(newValue);
    });
    it('should remove a cookie', function () {
        var key = 'testCookieKey';
        var value = 'testCookieValue';
        cookieService.put(key, value);
        expect(cookieService.get(key)).toBe(value);
        cookieService.remove(key);
        expect(cookieService.get(key)).toBeUndefined();
    });
    it('should set and get an object cookie', function () {
        var key = 'testCookieKey';
        var value = { key1: 'value1', key2: 'value2' };
        cookieService.putObject(key, value);
        expect(cookieService.getObject(key)).toEqual(value);
    });
    it('should set and get multiple cookies', function () {
        var simpleCookies = [
            { key: 'key1', value: 'value1' }, { key: 'key2', value: 'value2' },
            { key: 'key3', value: 'value3' }
        ];
        var objectCookies = [
            { key: 'keyO1', value: { keyO1_1: 'valueO1_1', keyO1_2: 'valueO1_2' } },
            { key: 'keyO2', value: { keyO2_1: 'valueO2_1', keyO2_2: 'valueO2_2' } },
            { key: 'keyO3', value: { keyO3_1: 'valueO3_1', keyO3_2: 'valueO3_2' } }
        ];
        var result = {};
        simpleCookies.forEach(function (c) {
            result[c.key] = c.value;
            cookieService.put(c.key, c.value);
        });
        objectCookies.forEach(function (c) {
            result[c.key] = JSON.stringify(c.value);
            cookieService.putObject(c.key, c.value);
        });
        expect(cookieService.getAll()).toEqual(result);
    });
    it('should remove all cookies', function () {
        var simpleCookies = [
            { key: 'key1', value: 'value1' }, { key: 'key2', value: 'value2' },
            { key: 'key3', value: 'value3' }
        ];
        var objectCookies = [
            { key: 'keyO1', value: { keyO1_1: 'valueO1_1', keyO1_2: 'valueO1_2' } },
            { key: 'keyO2', value: { keyO2_1: 'valueO2_1', keyO2_2: 'valueO2_2' } },
            { key: 'keyO3', value: { keyO3_1: 'valueO3_1', keyO3_2: 'valueO3_2' } }
        ];
        simpleCookies.forEach(function (c) {
            cookieService.put(c.key, c.value);
        });
        objectCookies.forEach(function (c) {
            cookieService.putObject(c.key, c.value);
        });
        cookieService.removeAll();
        expect(cookieService.getAll()).toEqual({});
    });
    it('should return undefined for nonexisting cookies', function () {
        expect(cookieService.get('nonexistingCookie')).toBeUndefined();
    });
    it('should change the settings', function () {
        var key = 'testCookieKey';
        var value = 'testCookieValue';
        var opts = {
            expires: new Date('2030-07-19')
        };
        cookieService.put(key, value, opts);
        expect(cookieService.get(key)).toBe(value);
    });
});
