import isFunction from '../../src/fp/isFunction';

test('isFunction ', () => {
  expect(isFunction('')).toBeFalsy();
  expect(isFunction(1)).toBeFalsy();
  expect(isFunction(null)).toBeFalsy();
  expect(isFunction(undefined)).toBeFalsy();
  expect(isFunction([])).toBeFalsy();
  expect(isFunction({})).toBeFalsy();
  expect(isFunction(() => {})).toBeTruthy();
});
