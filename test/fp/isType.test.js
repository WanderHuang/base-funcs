import isType from '../../src/fp/isType';

test('isType', () => {

  const types = {
    obj: 'Object',
    func: 'Function',
    bool: 'Boolean',
    str: 'String',
    und: 'Undefined',
    null: 'Null',
  }
  const obj = {};
  const func = () => {};
  let undef;
  const nul = null;

  expect(isType(obj, types.obj)).toBe(true);
  expect(isType(func, types.obj)).toBe(false);
  expect(isType(func, types.func)).toBe(true);
  expect(isType(undef, types.und)).toBe(true);
  expect(isType(nul, types.null)).toBe(true);
});