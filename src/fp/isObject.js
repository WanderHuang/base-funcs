import reverseArguments from './reverseArguments';
import partial from './partial';
import isType from './isType';

/**
 * 是否是一个对象
 * ```
 * isObject(1) === false;
 * isObject(() => {}) === false;
 * isObject([]) === false;
 * isObject({}) === true;
 * ```
 *
 * @param {*} src 受检测对象
 * @return {Boolean} 是否是对象
 */
export default function isObject(src) {
  const invoker = partial(reverseArguments(isType), 'Object');
  return invoker(src);
}
