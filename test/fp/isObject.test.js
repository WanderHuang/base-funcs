import isObject from '../../src/fp/isObject';

test('isObject ', () => {
  expect(isObject('')).toBeFalsy();
  expect(isObject(1)).toBeFalsy();
  expect(isObject(null)).toBeFalsy();
  expect(isObject(undefined)).toBeFalsy();
  expect(isObject([])).toBeFalsy();
  expect(isObject({})).toBeTruthy();
  expect(isObject(() => {})).toBeFalsy();
  expect(isObject({ name: 'wander' })).toBeTruthy();
});
