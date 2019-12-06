import chain from '../../src/fp/chain';
import identity from '../../src/fp/identity';

test('chain', () => {
  const add = (a, b) => a + b;
  const mult = (a, b) => a * b;

  const sink = chain(add, mult);
  expect(sink).toHaveProperty('subscribe');
  expect(sink).toHaveProperty('add');
  expect(sink).toHaveProperty('mult');
  expect(sink.add(1, 2)).toHaveProperty('subscribe');
  expect(sink.add(1, 2)).toHaveProperty('add');
  expect(sink.add(1, 2)).toHaveProperty('mult');
  expect(sink.mult(1, 2)).toHaveProperty('subscribe');
  expect(sink.mult(1, 2)).toHaveProperty('add');
  expect(sink.mult(1, 2)).toHaveProperty('mult');

  // chain
  const level = 5;
  const res = sink
    .add(1, 2) // 1 + 2 = 3
    .mult(3) // 3 * 3 = 9
    .subscribe(res => res + level) // 9 + 5 = 14
    .add(8) // 14 + 8 = 22
    .mult(2) // 22 * 2 = 44
    .subscribe(identity, true);

  expect(res).toBe(44);
});
