import reduceProps from '../../src/fp/reduceProps';

test('reduceProps ', () => {
  const person = {
    name: 'wander',
    age: 25,
  }
  const querystring = reduceProps(person, (acc, key, value) => `${acc}${key}=${value}&`, '?')
  expect(querystring).toEqual('?name=wander&age=25&');
  const formData = reduceProps(person, (acc, key, value) => {
    acc.append(key, value);
    return acc;
  }, new FormData());
  expect(formData).toBeInstanceOf(FormData);
  if (formData instanceof FormData) {
    expect(formData.get('name')).toEqual('wander');
    expect(formData.get('age')).toEqual('25');
  }
});
