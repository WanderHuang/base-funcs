import isFunction from './isFunction';
/**
 * Tag: 一个简单的防抖实现。高级防抖还要考虑：返回值、头尾抖动等
 * 防抖(去抖)函数。最直接的例子就是鼠标滚动，一次滚动会触发多次回调函数，但是可能我们只会关心滚动最后的那一次回调，那么中间那次就不需要了。
 * ```
 * // 使用方法
 * const scrollCallback = (x, y) => console.log(x, y);
 * const debouncedCallback = debounce(scrollCallback, 300);
 * // 调用
 * debouncedCallback(1, 2); // 不会被调用
 * setTimeout(() => debouncedCallback(3, 4), 200); // 500ms后被调用
 * setTimeout(() => debouncedCallback(5, 6), 500); // 500ms后被调用
 * ```
 * @param {Function} fn 需要防抖的函数
 * @param {Number} ms 防抖区间
 * @returns {Function} 防抖函数
 */
export default function debounce(fn, ms = 300) {
  if (!isFunction(fn)) {
    throw new Error('debounce needs a Function as parameter');
  }
  let timer = null;
  return function invoker(...params) {
    // 检查是否存在定时器，存在则更新
    if (timer) {
      clearTimeout(timer);
    }

    const context = this;

    timer = setTimeout(() => {
      clearTimeout(timer);
      fn.call(context, ...params);
    }, ms);
  };
}
