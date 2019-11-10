import hasProperty from '../../src/fp/hasProperty';

test('hasProperty', () => {
  const source = {
    name: 'wander',
    age: 25,
    sex: 'male',
  };
  expect(hasProperty(source, 'name')).toBe(true);
  expect(hasProperty(source, 'device')).toBe(false);
  expect(hasProperty(source, 'age')).toBe(true);
});