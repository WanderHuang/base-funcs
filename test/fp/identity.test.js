import identity from '../../src/fp/identity';

test('identity', () => {
  expect(identity(1)).toBe(1);
  expect(identity([])).toStrictEqual([]);

  expect([,,,0,1,2].filter(identity)).toStrictEqual([1, 2])
});
