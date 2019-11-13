import pipe from './pipe';
import reverseArguments from './reverseArguments';

/**
 * 组合一组函数：从最右边的函数开始依次调用执行
 * 在组合函数操作时有用
 * ```
 * // 先加后乘
 * compose(mult, add);
 * // 先乘后加
 * compose(add, mult);
 * ```
 * @param  {...any} fns 组合函数
 * @return {Function} 组合函数
 */
export default function compose(...fns) {
  const reversed = reverseArguments(pipe);
  return reversed(...fns);
}
