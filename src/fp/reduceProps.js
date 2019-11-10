import isType from './isType';
import hasProperty from './hasProperty';
import partial from './partial';

/**
 * 迭代一个对象的所有可读属性，返回`iterator`的最后值。在生成form表单或querystring时用处比较多。
 * ```
 * // 遍历生成`key=value;`
 * const person = {name: 'wander', age: 25};
 * const mapKeyValues = reduceProps(person, (prev, key, value) => `${prev}${key}=${value};`)
 * console.log(mapKeyValues) // name=wander;age=25;
 * ```
 * @param {Object} source 需要遍历的对象
 * @param {Function} iterator 迭代器。arguments(acc, key, value)
 * @param {*} [initValue] 初始化数据
 * @return {*} 迭代器累计值
 */
export default function reduceProps(source, iterator, initValue) {
  if (!isType(source, 'Object')) {
    throw new Error('`source` must be an Object!');
  }
  if (!isType(iterator, 'Function')) {
    throw new Error('`iterator` must be a Function');
  }

  const hasKey = partial(hasProperty, source);

  return Object.keys(source)
    .filter(hasKey)
    .reduce((acc, key) => iterator(acc, key, source[key]), initValue);
}
