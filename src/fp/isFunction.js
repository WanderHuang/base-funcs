import reverseArguments from './reverseArguments';
import partial from './partial';
import isType from './isType';

/**
 * 是否是一个函数
 * ```
 * isFunction(1) === false;
 * isFunction(() => {}) === true;
 * ```
 *
 * @param {*} fn 受检测对象
 * @return {Boolean} 是否是函数
 */
export default function isFunction(fn) {
  const invoker = partial(reverseArguments(isType), 'Function');
  return invoker(fn);
}
