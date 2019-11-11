import isType from './isType';

/**
 * 倒置一个函数的参数列表
 *
 * 通常我们用`fn.length`来表示函数参数的长度，它指称外部传入的`arguments`的长度。
 *
 * 倒置函数在组合函数能力的时候通常比较有用，比如
 * ```
 * // 得到一个compose函数
 * const compose = reverseArguments(pipe);
 * ```
 *
 * 使用方法:
 *
 * ```
 * function add(a, b) {
 *  return a + b;
 * }
 * const invoker = reverseArguments(add);
 * invoker(2, 1); // return 1 + 2;
 * ```
 * @param {Function} fn 需要被倒置的函数
 */
export default function reverseArguments(fn) {
  if (!isType(fn, 'Function')) {
    throw new Error('`fn` must be a Function');
  }
  return function invoker(...args) {
    return fn(...args.reverse());
  };
}
