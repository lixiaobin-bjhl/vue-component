/**
 * @file 月份选择
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

export default function getMonthOption () {
  var length = 13
  var result = []
  while (length--) {
    if (length) {
      result.unshift(length)
    }
  }
  return result
}
