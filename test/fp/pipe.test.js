import pipe from '../../src/fp/pipe';
import partial from '../../src/fp/partial';

test('pipe', () => {
  const add = ({a, b}) => (a + b);
  const mul = (base, num) => (num * base);
  const double = partial(mul, 2);
  const triple = partial(mul, 3);

  const pipeFunction = pipe(add, double);
  expect(pipeFunction({a: 1, b: 2})).toBe(6);

  expect(pipe(add, double, triple)({a: 4, b: 7})).toBe(66);

});