import isType from './isType';
import isEqual from './isEqual';
import partial from './partial';
import reverseArguments from './reverseArguments';
import isFunction from './isFunction';

/**
 * 链条。把入参放置到链条上，提供一个内置操作符，subscribe(fn, false)。
 * ```
 * function subscribe(fn, finish) {
 *  // 如果 `finish` === true, 则终止链式调用
 *  // subscribe可以用来在链条中调整result值
 * }
 * ```
 *
 * 1. 如果没有对链条子函数传入参数，则默认对应源函数收到一个参数，为上一次的result
 * 2. 如果链条子函数传入了参数，则result为源函数最后一个参数
 *
 * ```
 * const add = (a, b) => a + b;
 * const mult = (a, b) => a * b;
 *
 * const infinity = chain(add, mult);
 * infinity.add(1, 2).mult(3).subscribe(console.log);
 * // 原生add函数的参数列表为1, 2, undefined;
 * // 原生mult函数参数列表为3, 3;
 * // result = 3
 * ```
 * @param  {...any} fns 链条函数
 * @return {Object} `chain` 链条对象
 */
export default function chain(...fns) {
  let result = undefined;
  let executor = {
    subscribe(fn, finish) {
      result = fn(result);
      return finish ? result : executor;
    }
  };

  executor = fns
    .filter(isFunction)
    .map(function(fn) {
      return {
        name: fn.name,
        invoker: function invoker(...params) {
          result = fn(...params, result);
          return executor;
        }
      };
    })
    .reduce(function(prev, { name, invoker }) {
      if (!isEqual(name, 'subscribe')) {
        prev[name] = invoker;
      }
      return prev;
    }, executor);

  return executor;
}
