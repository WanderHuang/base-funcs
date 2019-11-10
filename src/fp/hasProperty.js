import isType from './isType';

/**
 * 判定一个对象`source`是否存在对应的属性`property`
 * ```
 * const obj = {name: 'wander', age: 25}
 *
 * hasProperty(obj, 'name'); // true
 * hasProperty(obj, 'sex'); // false
 * ```
 * @param {Object} source 源对象
 * @param {String} property 属性名称
 * @return {Boolean} 是否存在该属性
 */
export default function hasProperty(source, property) {
  if (!isType(source, 'Object')) return false;

  return Object.prototype.hasOwnProperty.call(source, property);
}
