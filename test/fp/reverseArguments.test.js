import reverseArguments from '../../src/fp/reverseArguments';
import pipe from '../../src/fp/pipe';
import partial from '../../src/fp/partial';

test('reverseArguments', () => {
  // 倒置操作顺序
  const calculator = (a, b) => Math.pow(a, 2) + Math.pow(b, 3);

  const reversed = reverseArguments(calculator);
  expect(calculator(2, 3)).toBe(31);
  expect(reversed(2, 3)).toBe(17);

  const double = a => Math.pow(a, 2);
  const triple = a => Math.pow(a, 3);

  const add = (a, b) => a + b;
  const add1 = partial(add, 1);

  const calc1 = pipe(double, add1, triple);

  const compose = reverseArguments(pipe);
  const calc2 = compose(double, add1, triple);
  const calc3 = compose(triple, add1, double);

  // (2 * 2 + 1) ^ 3 = 5 * 5 * 5 = 125
  expect(calc1(2)).toBe(125);

  // (2 * 2 * 2 + 1) ^ 2 = 9 * 9 = 81
  expect(calc2(2)).toBe(81);

  // calc3 效果等于 calc1
  expect(calc1(2)).toBe(calc3(2));

  // 异常测试
  expect(reverseArguments).toThrowError();
  expect(() => {
    reverseArguments();
  }).toThrow();
  expect(() => {
    reverseArguments(1);
  }).toThrow();
  expect(() => {
    reverseArguments([]);
  }).toThrow();
});
