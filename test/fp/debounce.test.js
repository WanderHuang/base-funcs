import debounce from '../../src/fp/debounce';

describe('debounce test', () => {
  test('if no context', () => {
    jest.useFakeTimers();

    const invoker = jest.fn();
    const debouncedFn = debounce(invoker, 300);
    debouncedFn(1, 2); // 不会被调用
    setTimeout(() => debouncedFn(3, 4), 200); // 500ms后被调用
    setTimeout(() => debouncedFn(5, 6), 500); // 500ms后被调用

    expect(invoker).not.toBeCalled();

    jest.runAllTimers();

    expect(invoker).toBeCalled();
    expect(invoker).toBeCalledWith(3, 4);
    expect(invoker).toBeCalledWith(5, 6);
    expect(invoker).toBeCalledTimes(2);

    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(5);
  });

  test('with context', function() {
    let i = 0;
    let name = null;
    const obj = {
      name: 'wander',
      getName() {
        i += 1;
        name = this.name;
        return this.name;
      }
    };

    expect(obj.getName()).toBe('wander');

    const obj2 = {
      name: 'global',
      getName: obj.getName
    };
    expect(obj2.getName()).toBe('global');

    expect(i).toBe(2);

    obj.debouncedGetName = debounce(obj.getName);
    const { debouncedGetName } = obj;

    obj.debouncedGetName();
    obj.debouncedGetName();
    obj.debouncedGetName();

    setTimeout(() => obj.debouncedGetName(), 400);

    obj.debouncedGetName();
    obj.debouncedGetName();
    obj.debouncedGetName();

    setTimeout(() => obj.debouncedGetName(), 200);

    jest.runAllTimers();

    expect(i).toBe(4);
    expect(name).toBe('wander');
  });
});
