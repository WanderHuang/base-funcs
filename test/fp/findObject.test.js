import findObject from '../../src/fp/findObject';

test('findObject', () => {
  expect(findObject).toHaveLength(2);
  expect(() => findObject()).toThrow();
  expect(() => findObject(1)).toThrow();
  expect(() => findObject([])).toThrow();
  expect(() => findObject([], 1)).toThrow();
  expect(() => findObject([], {})).not.toThrow();
  expect(() => findObject([], [])).toThrow();

  const arr = [
    { name: 'wander1', age: 10 },
    { name: 'wander2', age: 20 },
    { name: 'wander1', age: 30 },
    { name: 'wander2', age: 40 }
  ];

  expect(findObject(arr, {})).toStrictEqual({});
  expect(findObject(arr, { key: 'a' })).toStrictEqual({});
  expect(findObject(arr, { key: 'a', value: 1 })).toStrictEqual({});
  expect(findObject(arr, { key: '1', a: 1 })).toStrictEqual({});
  expect(findObject(arr, { key: 'wander', b: [] })).toStrictEqual({});
  expect(findObject(arr, { key: 'name', v: undefined })).toStrictEqual({});
  expect(findObject(arr, { key: 'name', value: undefined })).toStrictEqual({});
  expect(findObject(arr, { key: 'name', value: 1 })).toStrictEqual({});
  expect(findObject(arr, { key: 'name', value: 'age' })).toStrictEqual({});
  expect(findObject(arr, { key: 'name', value: 'wander1' })).toStrictEqual({
    name: 'wander1',
    age: 10
  });
  expect(
    findObject(arr, { key: 'name', value: 'wander1' }, true)
  ).toStrictEqual([
    { name: 'wander1', age: 10 },
    { name: 'wander1', age: 30 }
  ]);
});
