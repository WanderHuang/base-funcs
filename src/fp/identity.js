/**
 * 鉴别数据身份。返回其本身。
 * 这在过滤数据、简化判断的时候很有用
 * ```
 * [0, undefined, null, {}, [], 1, 'a'].filter(identity); // [{}, [], 1, 'a']
 * ```
 * @param {*} id 鉴别对象
 * @return {*} 返回鉴定对象本身
 */
export default function identity(id) {
  return id;
}
