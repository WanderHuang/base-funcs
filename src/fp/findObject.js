import isEqual from './isEqual';
import isObject from './isObject';
const isArray = Array.isArray;

/**
 * 工具函数。从一个对象数组中找到相似(存在key，且value与给定值相等)对象。
 * @param {Array} source 对象数组。
 * @param {Object} looklike {key, value}描述想要的key以及其对应的值
 * @returns {Object|Array} 发现的对象，未发现则返回{}(设置了all的话，会返回所有item的数组)
 */
export default function findObject(source, looklike, all = false) {
  if (!isArray(source)) {
    throw new Error('source should be an Array');
  }

  if (!isObject(looklike)) {
    throw new Error('target should look like a Object with {key, value}');
  }

  const { key, value } = looklike;

  const foundItem = key
    ? source.find(item =>
        isObject(item) ? item[key] && isEqual(item[key], value) : false
      ) || {}
    : {};

  return all ? source.filter(item => isEqual(value, item[key])) : foundItem;
}
