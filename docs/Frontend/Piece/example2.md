---
title: vue 公共方法
date: 2020-05-15
sidebar: 'auto'
categories:
 - 小知识
tags:
 - 公共方法
publish: true
# 打赏
showSponsor: true
---

## 公共方法挂载方式

### 方式一 直接`install`

- 公共方法 `common.js`

```js
// common.js
export default {
  install(Vue) {
    Vue.prototype.filterParams = function (obj) {
      let paramsObj = {};
      for (let i in obj) {
        // 保留非空串（''）参数
        if (obj[i] !== "" ) {
          paramsObj[i] = obj[i];
        }
      }
      // 过滤空参数并转为字符串
      // return JSON.stringify(paramsObj);
      // 过滤空参数返回obj对象
      return paramsObj;
    }
  }
}
```

- 使用

```js
// 不用引入，直接使用 this.filterParams()
  let params = this.filterParams({
    // 搜索后数据显示的首页条数
    current: 0,
    size: 10,
    // 搜索的参数
    keyword: this.screenForm.superviseName,
    orderTypeValue: this.screenForm.businessType,
    superviseStatus: this.screenForm.workOrderStatus,
  });
```

### 方式二 通过`main.js`注册

- 公共方法 `common.js`

```js
// common.js
export default {
    test(){
        return "test"
    },
}

```

- 注册到`main.js`

挂载(注册)在`main.js`

```js
// main.js
import utils from './common/util/utils.js'
Vue.prototype.$utils = utils
```

- 使用

在任意页面中使用

```js
let text = this.$utils.test()
```

### 方式三 各页面引入

```js
// common.js
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}
```

```js
let uniqueArr = arr => {
   return Array.from(new Set(arr))
}
export { uniqueArr }
```

- 页面引入 使用

```vue
// DemoPage.vue
<script>
import { uniqueArr } from '@/utils/utils'; // A.引用其中某几个方法
//const utils = require('@/utils/utils'); // B.全部引用
export default {
  methods:{
    // A
    let relativePath = uniqueArr([1,11,1,2]);
    // B
    // let relativePath = utils.uniqueArr([1,11,1,2]);
  }
}
</script>
```

## 过滤并去除空参数

```js
// common.js
export default {
  install(Vue) {
    Vue.prototype.filterParams = function (obj) {
      let paramsObj = {};
      for (let i in obj) {
        // 保留非空串（''）参数
        if (obj[i] !== "" ) {
          paramsObj[i] = obj[i];
        }
      }
      // 过滤空参数并转为字符串
      // return JSON.stringify(paramsObj);
      // 过滤空参数返回obj对象
      return paramsObj;
    }

    // 未知
    Vue.prototype.getArrDifferent = function (a, b) {
      const arr = [...a, ...b];
      const newArr = arr.filter(item => {
        return !(a.includes(item) && b.includes(item));
      });
      return newArr;
    }
  }
}
```

## 日期格式化(年月日时分秒)

```js
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'undefined' || time === null || time === 'null') {
    return ''
  } else if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note : getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
```

## 日期格式化(年月日时分秒毫秒)

```js
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTimeMs(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}.{b}'
  let date
  if (typeof time === 'undefined' || time === null || time === 'null') {
    return ''
  } else if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    b: date.getMilliseconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|b|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note : getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10 && result !== '{b}') {
      value = '0' + value
    } else if (result === '{b}') {
      if (value < 10) {
        value = '00' + value
      } else if (value > 9 && value < 100) {
        value = '0' + value
      }
    }
    return value || 0
  })
  return time_str
}
```

## 日期格式化(月日时分)

```js
export function parseTimeYRSF(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{m}-{d} {h}:{i}'
  let date
  if (typeof time === 'undefined' || time === null || time === 'null') {
    return ''
  } else if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes()
  }
  const time_str = format.replace(/{(m|d|h|i)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note : getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10 && result !== '{b}') {
      value = '0' + value
    } else if (result === '{b}') {
      if (value < 10) {
        value = '00' + value
      } else if (value > 9 && value < 100) {
        value = '0' + value
      }
    }
    return value || 0
  })
  return time_str
}
```

## 深拷贝

```js
/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
```

## 数组删除重复项

```js
/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

```

## 未分类

```js
/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"')
    .replace(/\+/g, ' ') +
    '"}'
  )
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }
  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

// 替换邮箱字符
export function regEmail(email) {
  if (String(email).indexOf('@') > 0) {
    const str = email.split('@')
    let _s = ''
    if (str[0].length > 3) {
      for (var i = 0; i < str[0].length - 3; i++) {
        _s += '*'
      }
    }
    var new_email = str[0].substr(0, 3) + _s + '@' + str[1]
  }
  return new_email
}

// 替换手机字符
export function regMobile(mobile) {
  if (mobile.length > 7) {
    var new_mobile = mobile.substr(0, 3) + '****' + mobile.substr(7)
  }
  return new_mobile
}

// 下载文件
export function downloadFile(obj, name, suffix) {
  const url = window.URL.createObjectURL(new Blob([obj]))
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  const fileName = parseTime(new Date()) + '-' + name + '.' + suffix
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

import request from '@/utils/request'
// 下载文件
export function downloadFilePdf(obj, name) {
  request({
    url: obj,
    method: 'get',
    responseType: 'blob' // 约定是二进制流
  }).then(res => {
    const url = window.URL.createObjectURL(new Blob([res]))
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', name)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })

}
// 无日期的文件下载
// 下载文件
export function noDatedownloadFile(obj, name, suffix) {
  const url = window.URL.createObjectURL(new Blob([obj]))
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  const fileName = name + '.' + suffix
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 工单进度判断
 * @param {(Object|string|number)} cutoffTime 工单截止时间
 * @param {(string|number)} warningTime 工单警告时间
 0 超时
 1 正常
 2 预警
 */
// export function time(cutoffTime, warningTime, callback) {
//   let timer
//   timer = setInterval(function(callback) {
//     if (new Date() < new Date(warningTime)) {
//       console.log('正常')
//       callback(1)
//     } else if ((new Date(cutoffTime) > new Date()) && (new Date() > new Date(warningTime))) {
//       console.log('预警')
//       callback(2)
//     } else if (new Date() > new Date(cutoffTime)) {
//       console.log('超时')
//       callback(0)
//       clearInterval(timer)
//     }
//   }, 1000)
// }

export function caseProgress(cutoffTime, warningTime) {
  // let timer, status
  if (cutoffTime && warningTime) {
    // time(cutoffTime, warningTime, function(a) {
    //   console.log(a)
    // })
    if (new Date() < new Date(warningTime)) {
      return 1
    } else if ((new Date(cutoffTime) > new Date()) && (new Date() > new Date(warningTime))) {
      return 2
    } else if (+new Date() === cutoffTime) {
      return 2
    } else if (new Date() > new Date(cutoffTime)) {
      return 0
    }
  } else {
    // status = 1
    return 1
  }
  // return status
}

```
