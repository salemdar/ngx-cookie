import { TestBed } from '@angular/core/testing';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { Request, Response } from 'express';
import { COOKIE_WRITER, ICookieWriterService, parseCookieString } from 'ngx-cookie';

import { CookieBackendModule } from './cookie-backend.module';

describe('CookieBackendWriterService', () => {
  let service: ICookieWriterService;
  let request: jasmine.SpyObj<Request>;
  let response: jasmine.SpyObj<Response>;

  beforeEach(() => {
    request = jasmine.createSpyObj('Request', ['get'], {headers: {}});
    response = jasmine.createSpyObj('Response', ['cookie', 'getHeader']);
    TestBed.configureTestingModule({
      imports: [
        CookieBackendModule.withOptions()
      ],
      providers: [
        {provide: REQUEST, useValue: request},
        {provide: RESPONSE, useValue: response}
      ]
    });
    service = TestBed.inject(COOKIE_WRITER);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return proper modules with deprecated methods', () => {
    const module = CookieBackendModule.withOptions({});
    expect(CookieBackendModule.forRoot()).toEqual(module);
    expect(CookieBackendModule.forChild()).toEqual(module);
  });

  it('should readAllAsString when empty', () => {
    const allAsString = service.readAllAsString();
    expect(allAsString).toEqual('');
    expect(response.getHeader).toHaveBeenCalledOnceWith('Set-Cookie');
  });

  it('should readAllAsString with request header', () => {
    const cookie = 'myKey1=myValue1;myKey2=myValue2';
    request.headers.cookie = cookie;
    const allAsString = service.readAllAsString();
    expect(allAsString).toEqual(cookie);
    expect(response.getHeader).toHaveBeenCalledOnceWith('Set-Cookie');
  });

  it('should parseCookieString with request header', () => {
    const cookie = 'myKey1=myValue1; myKey2=myValue2';
    request.headers.cookie = cookie;
    const allAsString = service.readAllAsString();
    const parsed = parseCookieString(allAsString)
    const expected = {
      'myKey1': 'myValue1',
      'myKey2': 'myValue2'
    };
    expect(parsed).toEqual(expected);
  });

  it('should readAllAsString with response header', () => {
    const cookie = 'myKey1=myValue1;myKey2=myValue2';
    response.getHeader.and.returnValue(cookie);
    const allAsString = service.readAllAsString();
    expect(allAsString).toEqual(cookie);
    expect(response.getHeader).toHaveBeenCalledOnceWith('Set-Cookie');
  });

  it('should readAllAsString with response header array', () => {
    const cookie = ['myKey1=myValue1;myKey2=myValue2', 'myKey3=myValue3;myKey4=myValue4'];
    response.getHeader.and.returnValue(cookie);
    const allAsString = service.readAllAsString();
    expect(allAsString).toEqual('myKey1=myValue1;myKey2=myValue2;myKey3=myValue3;myKey4=myValue4');
    expect(response.getHeader).toHaveBeenCalledOnceWith('Set-Cookie');
  });

  it('should write', () => {
    const name = 'myCookie';
    const value = 'myValue';
    service.write(name, value);
    expect(response.cookie as unknown).toHaveBeenCalledOnceWith(name, value, {});
  });

  it('should write with options', () => {
    const name = 'myCookie';
    const value = 'myValue';
    const options = {secure: true};
    service.write(name, value, options);
    expect(response.cookie as unknown).toHaveBeenCalledOnceWith(name, value, options);
  });

  it('should write with options expires as string', () => {
    const name = 'myCookie';
    const value = 'myValue';
    const expires = '2022-07-19T11:00:00.000Z';
    const options = {expires};
    service.write(name, value, options);
    expect(response.cookie as unknown).toHaveBeenCalledOnceWith(name, value, {...options, expires: new Date(expires)});
  });

  it('should write with expires option as date', () => {
    const name = 'myCookie';
    const value = 'myValue';
    const expires = '2022-07-19T11:00:00.000Z';
    const options = {expires: new Date(expires)};
    service.write(name, value, options);
    expect(response.cookie as unknown).toHaveBeenCalledOnceWith(name, value, options);
  });

});
