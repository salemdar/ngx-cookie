import { isEmpty, isNil, isPresent, isString } from './utils';

describe('NgxCookie Utils', () => {

  it('should test isNil', () => {
    expect(isNil(undefined)).toBeTrue();
    expect(isNil(null)).toBeTrue();
    expect(isNil(true)).toBeFalse();
    expect(isNil(false)).toBeFalse();
    expect(isNil({})).toBeFalse();
    expect(isNil([])).toBeFalse();
    expect(isNil(42)).toBeFalse();
    expect(isNil(0)).toBeFalse();
    expect(isNil('hello')).toBeFalse();
    expect(isNil('')).toBeFalse();
  });

  it('should test isPresent', () => {
    expect(isPresent(undefined)).toBeFalse();
    expect(isPresent(null)).toBeFalse();
    expect(isPresent(true)).toBeTrue();
    expect(isPresent(false)).toBeTrue();
    expect(isPresent({})).toBeTrue();
    expect(isPresent([])).toBeTrue();
    expect(isPresent(42)).toBeTrue();
    expect(isPresent(0)).toBeTrue();
    expect(isPresent('hello')).toBeTrue();
    expect(isPresent('')).toBeTrue();
  });

  it('should test isString', () => {
    expect(isString('hello')).toBeTrue();
    expect(isString('')).toBeTrue();
    expect(isString(undefined)).toBeFalse();
    expect(isString(null)).toBeFalse();
    expect(isString(true)).toBeFalse();
    expect(isString(false)).toBeFalse();
    expect(isString(42)).toBeFalse();
    expect(isString({})).toBeFalse();
    expect(isString([])).toBeFalse();
  });

  it('should test isEmpty', () => {
    expect(isEmpty(undefined)).toBeTrue();
    expect(isEmpty(null)).toBeTrue();
    expect(isEmpty({})).toBeTrue();
    expect(isEmpty([])).toBeTrue();
    expect(isEmpty('')).toBeTrue();
    expect(isEmpty({a: 0})).toBeFalse();
    expect(isEmpty([42])).toBeFalse();
    expect(isEmpty('hello')).toBeFalse();
    expect(isEmpty(42)).toBeFalse();
  });

});
