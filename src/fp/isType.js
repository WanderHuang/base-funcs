/**
 * 基于`Object.prototype.toString`来判定一个source是否是特定的type
 * ```
 * const types = {
 *  obj: 'Object',
 *  func: 'Function'
 * }
 * const obj = {};
 * const func = () => {}
 * isType(obj, types.obj) // true
 * isType(func, types.obj) // false
 * isType(func, types.func) // true
 * ```
 * @param {*} source 源
 * @param {String} type 目标类型
 * @return {Boolean} 是否为目标类型
 */
export default function isType(source, type) {
  return Object.prototype.toString.call(source, type) === `[object ${type}]`;
}
