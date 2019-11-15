import unary from '../../src/fp/unary';
import isType from '../../src/fp/isType';

test('unary', () => {
  
  // 一元
  function secondary(a, b) {
    return a + (isType(b, undefined) || 10);
  }
  expect(secondary.length).toBe(2);
  expect(unary(secondary).length).toBe(1);

  // 功能
  const list = ['1', '2', '3'];
  expect(parseInt.length).toBe(2);
  expect(list.map(parseInt)).toStrictEqual([1, NaN, NaN]);
  expect(list.map(unary(parseInt))).toStrictEqual([1, 2, 3]);
})
