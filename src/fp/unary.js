import isType from './isType';
/**
 * 一元化。把一个函数变成一元函数，以清除多元函数带来的参数不明的问题。
 *
 * ```
 * // 每个函数都有自己的arguments，一般根据arguments的长度，定义这是几元函数
 * // 如下是一个二元函数
 * function add(a, b) { return a + b; }
 * // 把一个多元函数变成一个一元函数
 * // parseInt(s, radix?);
 * const parseInt10Radix = unary(parseInt);
 * console.log(['1', '2', '3'].map(parseInt)) // [1, NaN, NaN]
 * console.log(['1', '2', '3'].map(parseInt10Radix)) // [1, 2, 3]
 * ```
 * @param {*} fn 受控函数
 * @return {Function} 一个一元函数
 */
export default function unary(fn) {
  if (!isType(fn, 'Function')) {
    throw new Error('`fn` must be a Function');
  }
  return function invoker(parameter) {
    return fn(parameter);
  };
}
