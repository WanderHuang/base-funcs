import isEqual from './isEqual';

/**
 * 实现`同步`管道操作，按顺序执行fns。管道的初始值应该为单参数，因为每个函数只会返回一个结果。
 * ```
 * const add = (a, b) => a + b
 * const double = partial((base, num) => base * num, 2);
 * const addAndDouble = pipe(add, double);
 * addAndDouble(1, 2) // 6
 * ```
 * @param  {...any} fns 管道操作符
 * @return {*} 管道最后输出
 */
export default function pipe(...fns) {
  // invoker 应该是单参数，确保pipe管道中只接受一个参数
  return function invoker(params) {
    return fns.reduce((prev, curr) => curr(prev), params);
  };
}
