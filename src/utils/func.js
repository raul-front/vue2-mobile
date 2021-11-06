/*
 * @Descripttion: 公共方法
 * @Author: pujianguo
 * @Date: 2021-11-06 01:05:56
 */

/**
 * 深拷贝数据
 * @param {Object} data 要拷贝的原数据
 * @return {Object} 拷贝后的数据
 */
export const copy = data => {
  return JSON.parse(JSON.stringify(data))
}

/**
 * 将const中的数据转化为下拉框选择时可用的数组
 * @param {Object} obj  const中的数据
 * @param {Object|null} firstItem 下拉框第一项，如：{value: '', label: '请选择xxx'}
 * @param {String} type key的数据类型
 * @return {Array} 转换后的数据
 */
export const constDataToArray = (obj, firstItem = null, type = 'string') => {
  const arr = []
  if (type === 'string') {
    Object.keys(obj).forEach((k) => {
      if (k !== 'default') {
        arr.push({ value: Number[k], label: obj[k] })
      }
    })
  } else if (type === 'number') {
    Object.keys(obj).forEach((k) => {
      if (k !== 'default') {
        arr.push({ value: k, label: obj[k] })
      }
    })
  } else if (type === 'boolean') {
    Object.keys(obj).forEach((k) => {
      if (k !== 'default') {
        arr.push({ value: k === 'true', label: obj[k] })
      }
    })
  }
  if (firstItem) {
    arr.unshift(firstItem)
  }
  return arr
}

export default {
  copy,
  constDataToArray,
}
