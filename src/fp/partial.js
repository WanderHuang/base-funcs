import isType from './isType';

/**
 * 偏置函数。利用`闭包`为fn偏置args，使得函数参数的设置和函数调用可以分开。
 * ```
 * const add = (a, b) => a + b;
 * const add8 = partial(add, 8);
 * add8(10) // 18
 * ```
 * @param {Function} fn 需要被偏置的函数
 * @param  {...any} args 预置参数
 * @return {Function} 被偏置后的函数
 */
export default function partial(fn, ...args) {
  if (!isType(fn, 'Function'))
    throw new Error('partial needs a fn as the first parameter');
  return function invoker(...anotherArgs) {
    return fn(...args, ...anotherArgs);
  };
}
