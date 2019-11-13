import compose from '../../src/fp/compose';
import partial from '../../src/fp/partial';

test('compose', () => {
  const add2 = p => partial((a, b) => a + b, 2)(p);
  const mult3 = p => partial((a, b) => a * b, 3)(p);

  // (2 + 2) * 3 = 12
  const fn1 = compose(mult3, add2);
  expect(fn1(2)).toBe(12);

  // (2 * 3) + 2 = 8
  const fn2 = compose(add2, mult3);
  expect(fn2(2)).toBe(8);

  // error
  expect(() => compose(1, 2, 3)).toThrowError();
  expect(() => compose(add2, mult3, 0)).toThrow();
  expect(() => compose(add2, mult3, 0)).toThrowError();
});
