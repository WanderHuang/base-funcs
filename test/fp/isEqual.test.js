import isEqual from '../../src/fp/isEqual';

test('isEqual', () => {
  expect(isEqual('1', '1')).toBe(true);
  expect(isEqual(2, 2)).toBe(true);
  expect(isEqual([3], [3])).toBe(false);
  expect(isEqual(null, undefined)).toBe(false);
  expect(isEqual({name: 'wander'}, {name: 'wander'})).toBe(false);

  const person = {name: 'wander'};
  const copy = person; // 引用复制
  expect(isEqual(person, copy)).toBe(true);
});