---
title: vue,echarts...(库/框架)
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

## vue

### 公共方法挂载方式

#### 方式一 直接`install`

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

#### 方式二 通过`main.js`注册

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

#### 方式三 各页面引入

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

### 过滤并去除空参数

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

    Vue.prototype.filterParams0 = function (obj) {
      let paramsObj = {};
      for (let i in obj) {
        // 保留非空串（''）和等0参数
        if (obj[i] !== "" ||obj[i] == 0) {
          paramsObj[i] = obj[i];
        }
      }
      return paramsObj;
    }

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

### 表格高度根据窗口变化自适应改变

```vue {7,}
<template >
  <el-table
    border
    stripe
    v-loading="loading"
    :data="tableData"
    :height="tableHeight"
    ref="superviseTable"
    style="width: 100%"
    @select="superviseTableSelect"
    @row-click="openDetail"
    :default-sort="{ prop: 'date', order: 'descending' }"
  >
  // ...
  </el-table>
</template>
<script>
export default {
  name:"page",
  data() {
    return {
      // 表格高初始默认
      tableHeight: 360,
      // 屏幕高
      screenHeight: null,
    }
  },
  watch: {
    // 监听屏幕高改变表格高度
    screenHeight: {
      handler: function (val) {
        this.tableHeight = val - 260;
      },
      immediate: true,
    },
  },
  mounted() {
    // 获取高度
    this.getScreenHeight();
  },
  methods: {
    // 获取屏幕高度方法
    getScreenHeight() {
      // 页面初始时获取屏幕高度
      this.screenHeight = document.body.clientHeight;
      // 屏幕尺寸变化就重新赋值
      window.onresize = () => {
        return (() => {
          this.screenHeight = document.body.clientHeight;
        })();
      };
    },
  },
}
</script>
```

### 二次封装的`element-ui` 组件

- 组件内容

```vue
// 分页组件
<template>
  <div :class="{'hidden': hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script>

import {scrollTo} from '/scroll-to.js'
export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    pageSize: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 60];
      },
    },
    layout: {
      type: String,
      default: "total, size, prev, next, jumper",
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      },
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", { page: this.currentPage, limit: val });
      // 回到顶部
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentChange(val) {
      this.$emit("pagination", { page: val, limit: this.pageSize });
      // 回到顶部
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
  },
};
</script>
<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container .hidden {
  display: none;
}
</style>
```

- 方法

```js
// scroll-to.js
export function scrollTo(to, duration, callback) {
  const start = position();
  const change = to - start;
  const increment = 20;
  let currentTime = 0;
  duration = (typeof duration === "undefined") ? 500 : duration;
  var animateScroll = function () {
    // increment the time
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    moveTo(val);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      if (callback && typeof callback === "function") {
        callback();
      }
    }
  };
  animateScroll();
}
```

- 使用

```vue
<template>
  <pagination v-show="" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize" @pagination='getList'>
  </pagination>
</template>
// getList 获取数据列表
<script>
export default {
  data() {
    return {
      // 分页 总条数
      total: 0,
      pageNum: 1,
      pageSize: 20,
    };
  },
  methods: {
    getSearchResult() {
      // params
      // 将分页拼接到 url 中传递给后台
      let page = "pageNum" + this.pageNum + "&pageSize" + this.pageSize;
      // 请求数据接口
      getsearchresult(params, page).then((res) => {
        console.log(res);
        // 后台数据返回的条数
        this.total = res.total;
      });
    },
  },
};
</script>
```

### common方法

:::details 公共方法

```js
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
import request from '@/utils/request'
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
    // Note: getDay() returns 0 on Sunday
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
    // Note: getDay() returns 0 on Sunday
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
    // Note: getDay() returns 0 on Sunday
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

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
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

使用

```vue
<template slot-scope="scope">
  <div>
    {{ parseTime(scope.row.startTime, "{y}-{m}-{d}") }}
  </div>
</template>
<script>
// 日期格式化方法
import { parseTime } from "@/utils/index";
export default {
 data() {
    return {
      parseTime,
    }
  }
}
</script>
```

:::

## `element-ui`

### `vue` 框架中用样式穿透修改`element`样式

:::warning 注意!

- vue中最好直接用`::v-deep`, 在`vue3`中其他的方式可能会失效！
:::

```css
// 表单边距
::v-deep .el-form-item {
  margin-bottom: 0;
}
```

- `element`的`table` 鼠标移入时变色(自定义颜色)

```css
// 固定列背景色
.el-table__fixed-body-wrapper tr.el-table__row td{
    background-color: #fff;
}
// 鼠标移入颜色
.el-table__fixed-body-wrapper tr.el-table__row td,.el-table__body tbody tr.el-table__row.hover-row >td{
    background-color: #fff;
}
```

- `element`的`table` 数据不满整页时显示样式，高度拉伸

```css
// 表格高度样式
::v-deep .el-table__body {
  height: 100%;
}
```

## echarts

### echarts 简单使用和自适应窗口大小

:::details

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            .box {
                width: 100vw;
                height: 100vh;
            }
            #container {
                width: 100%;
                height: 100%;
            }
        </style>
    </head>

    <body>
        <div class="box"><div id="container"></div></div>
    </body>
    <script src="./echarts.js"></script>
    <script>
        //初始化echarts实例
        var myEcharts = echarts.init(document.querySelector("#container"));
        console.log(myEcharts);
        //配置图表（柱形图）的相关数据
        var option = {
            //描述x轴,x轴描述衣物种类
            xAxis: {
                data: ["羊毛衫", "牛仔裤", "阔腿裤", "连衣裙", "羽绒服"],
                boundaryGap: false, //起点为哪 false为原点
                // type: 'category',
            },
            //描述y轴，表示销量
            yAxis: {},
            //title标题，描述柱形图
            title: {
                //标题内容
                text: "10月份销售量统计柱形图",
            },
            // series系列列表
            series: [
                {
                    //图表的类型 bar柱形 pie柄图 line折线图
                    type: "line",
                    //data定义数据
                    data: [20, 32, 10, 25, 45],
                    name: "销量",
                    //点的的颜色
                    itemStyle: {
                        color: "orange",
                    },
                    //附属信息
                    label: {
                        show: true,
                        formatter: [20, 32, 10, 25, 45],
                    },
                    //高亮的样式
                    emphasis: {
                        itemStyle: {
                            color: "red",
                        },
                        label: {
                            show: true,
                            formatter: "高亮的附属信息",
                        },
                    },
                    areaStyle: {}, //折点图变面级图
                    smooth: true, //将直线变为曲线，不加默认直线
                },
            ],
            // legend图例的说明，解释
            legend: {
                data: ["销量"],
            },
            grid: {
                //配置图表的定位
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true, //自适应对齐
            },
            tooltip: {
                type: true, //默认提示展示 不写也没事
                trigger: "axis",
                axisPointer: {
                    //坐标轴指示器配置项
                    type: "cross", //十字准星指示器   'line' 直线指示器
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },
            },
        };
        //使用刚指定的配置项和数据显示图表
        myEcharts.setOption(option);
    </script>
    <script>
      /*
      echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表
      绘制步骤:
        1.准备一个具备宽高的容器用来盛放图表
        2.初始化一个echarts实例 ->echarts.init(),这个方法需要传dom元素作为参数,dom元素是这个容器
        3.
        */
      // echarts 自适应窗口
      window.onresize = myEcharts.resize;
    </script>
</html>
```

当页面只有一个图表的时候直接用 `window.onresize = myChart.resize` 就可以了

- `resize` 用来改变图表尺寸，在容器大小发生改变时需要手动调用。

```js
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option={···};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;
```

但是如果一个页面有多个图表的时候就需要用到 addEventListener 了，不然页面上只有一个图表会根据浏览器的变化而自适应。

```js
var myChart = echarts.init(document.getElementById('main'));
var myChartA = echarts.init(document.getElementById('mainA'));
var myChartB = echarts.init(document.getElementById('mainB'));
// 指定图表的配置项和数据
var option={···};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChartA.setOption(option);
myChartB.setOption(option);

window.addEventListener("resize",function (){
    myChart.resize();
    myChartA.resize();
    myChartB.resize();
});
```

或者

```js
window.onresize = function(){
    myChart.resize();
    myChartA.resize();
    myChartB.resize();
```

:::

## HTML

### 将 html 标签转为字符串

```js
    function HTMLDOMtoString(HTMLDOM) {
        const div = document.createElement("div");
        div.appendChild(HTMLDOM);
        return div.innerHTML;
    }
```

### 获取 dom 标签的所有属性和属性值

```js
    var div = document.getElementsByTagName("div")[0]

    function HTMLDOMtoString(HTMLDOM) {
        const div = document.createElement("div");
        div.appendChild(HTMLDOM);
        let str = div.innerHTML;
        let num = str.indexOf(">");
        let arr = str.slice(1, num).split(" ").slice(1);
        return arr
    }

    console.log(HTMLDOMtoString(div));
```

## CSS

TODO

## JS

### 封装 事件绑定和取消事件绑定

```js
//事件绑定
function on(dom, eventType, fn) {
  if(dom.addEventListener) {
      dom.addEventListener(eventType, fn);
  } else {
      if(dom.attachEvent) {
          dom.attachEvent('on' + eventType, fn);
    }
  }
}
//取消事件绑定
function un(dom, eventType, fn) {
  if(dom.removeEventListener) {
      dom.removeEventListener(eventType, fn, false);
  } else {
      if(dom.detachEvent) {
          dom.detachEvent("on" + eventType, fn)
    }
  }

 }
```

兼容ie的事件绑定

```js
 var div1 = document.getElementById("div1")
        var div2 = document.getElementById("div2")
        function AddEvent(obj, val) {
            function fun(e) {
                console.log(val, "参数")
                if (obj.addEventListener) {
                    event.stopPropagation()
                    // event.preventDefault()
                } else if (obj.attachEvent) {
                    event.cancelBubble = true
                    // event.returnValue = false
                }
            }
            if (obj.addEventListener) {
                obj.addEventListener('click', fun)
            } else if (obj.attachEvent) {
                obj.attachEvent("onclick", fun)
            }
        }
        AddEvent(div1, "div1")
        AddEvent(div2, "div2")
```

### 封装2 处理js默认事件的代码

```js
/*
  跨浏览器的事件处理程序
  调用时候直接用domEvent.addEvent( , , );直接调用
  使用时候，先用addEvent添加事件，然后在handleFun里面直接写其他函数方法，如getEvent；
  addEventListener和attachEvent---都是dom2级事件处理程序
*/
var domEvent = {
  //element:dom对象，event:待处理的事件，handleFun:处理函数
  //事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等
  addEvent:function(element,event,handleFun){
    // addEventListener----应用于mozilla
    if(element.addEventListener){
      element.addEventListener(event,handleFun,false);
    }// attachEvent----应用于IE
    else if(element.attachEvent){
      element.attachEvent("on"+event,handleFun);
    }// 其他的选择dom0级事件处理程序
    else{
      // element.onclick===element["on"+event];
      element["on"+event] = handleFun;
    }
  },
  //事件名称，含“on”，比如“onclick”、“onmouseover”、“onkeydown”等
  removeEvent:function(element,event,handleFun){
    //removeEventListener----应用于mozilla
    if (element.removeEventListener) {
      element.removeEventListener(event,handleFun,false);
    }//detachEvent----应用于IE
    else if (element.detachEvent) {
      element.detachEvent("on"+event,handleFun);
    }//其他的选择dom0级事件处理程序
    else {
      element["on"+event] = null;
    }
  },
  //阻止事件冒泡
  stopPropagation:function(event){
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble = true;//IE阻止事件冒泡，true代表阻止
    }
  },
  //阻止事件默认行为
  preventDefault:function(event){
    if(event.preventDefault){
      event.preventDefault();
    }else{
      event.returnValue = false;//IE阻止事件冒泡，false代表阻止
    }
  },
  //获得事件元素
  //event.target--非IE
  //event.srcElement--IE
  getElement:function(event){
    return event.target || event.srcElement;
  },
  //获得事件
  getEvent:function(event){
    return event? event : window.event;
  },
  //获得事件类型
  getType:function(event){
    return event.type;
  }
};
```

### 过滤参数对象的空值

- 方法

```js
// trimQueryParams.js
export function trimQueryParams(queryParams) {
  if (typeof queryParams !== 'object') {
      return queryParams
  }
  for (let key of Object.keys(queryParams)) {
    if (queryParams[key] && typeof queryParams[key] === 'string') {
        queryParams[key] = queryParams[key].trim()
    }
    if (queryParams[key] && typeof queryParams[key] === 'object') {
        queryParams[key] = trimQueryParams(queryParams[key])
    }
  }
  return queryParams
}
```

- 使用

```js

import { trimQueryParams }  from  /-/trimQueryParams.js

trimQueryParams(objval)
```

### 获取页面每个加载过程

```js
  // 执行时一定是 loading
  console.log(document.readyState)
  // 当页面的readyState 状态发生改变时，readystatechange事件自动触发
  document.onreadystatechange = function () {
      console.log(document.readyState, "---63行")
  }
  // dom tree 加载完成时，DOMContentLoaded事件自动触发
  document.addEventListener("DOMContentLoaded", function () { console.log("doc tree加载完成", "---66行") })
  // 页面彻底加载完成 locd事件，window.onload 固定写法
  window.onload = function () {
      console.log("load 整个页面加载完成")
  }
  // 外部资源 load事件，图片加载完毕后触发
  document.querySelector("img").onload = function () {
      console.log("外部资源加载完成")
  }
```

### 模拟 DOMContentLoaded 事件的 readystatechange

```js
// 模拟 DOMContentLoaded/ jquery ready
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
}
```

### 模拟 load 事件的 readystatechange

```js
// 模拟 load 事件
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
}
```

### 在 DOMContentLoaded 之前

在 DOMContentLoaded 之前使用 readystatechange 作为事件处理程序以插入或修改DOM

```js
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});
```

### 自执行函数循环添加事件(鼠标移入移出)

```js
 var documentFragment = document.createDocumentFragment()
        var ul = document.createElement("ul")
        ul.style.cssText = "list-style ：none; padding:0;"
        documentFragment.appendChild(ul)
        var titleArr = ["首页", "视频", "音乐", "我的"]
        for (let i = 0; i < titleArr.length; i++) {
            var li = document.createElement("li")
            li.style.cssText = "display:inline-block;width:100px;height:35px;text-align :center;line-height:35px;background: blue;"
            li.innerHTML = titleArr[i]
            li.onmouseenter = (function (temp) {
                return function () {
                    temp.style.backgroundColor = "red"
                }
            })(li)
            li.onmouseleave = (function (temp) {
                return function () {
                    temp.style.backgroundColor = "blue"
                }
            })(li)
            ul.appendChild(li)
        }
        document.body.appendChild(documentFragment)
```

### 工厂模式应用(选择礼物并发送)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <meta http-equiv="refresh" content="5"> -->
    <title>Document</title>
    <style>
        html,
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        p,
        blockquote,
        pre,
        hr,
        figure,
        table,
        caption,
        th,
        td,
        img,
        form,
        fieldset,
        legend,
        input,
        button,
        textarea,
        menu {
            padding: 0;
            margin: 0;
        }

        .container {
            width: 800px;
            height: 300px;
            border: 1px solid blueviolet;
        }

        .c_giftList {
            width: 100%;
            height: 260px;
        }

        .c_giftMenu {
            width: 100%;
            height: 40px;
            border: 1px solid skyblue;
            line-height: 40px;
            position: relative;
        }

        .c_giftMenu .sendGift {
            width: 100px;
            height: 30px;
            font-style: 22px;
            text-align: center;
            line-height: 30px;
            letter-spacing: 5px;
            position: absolute;
            top: 5px;
            right: 5px;
        }

        .dome1 {
            width: 350px;
            height: 120px;
            border: 3px solid orange;
            display: inline-block;
            margin: 2px;
            text-align: center;
            line-height: 120px
        }

        .c_giftList #selectGift {
            border: 3px solid red;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="c_giftList">
            <!-- 通过后台获取 -->
        </div>
        <div class="c_giftMenu">
            <button class="sendGift">赠送</button>
        </div>
    </div>
    <script>
        var giftListDiv = document.querySelector(".c_giftList");
        var sendGiftBtn = document.querySelector(".sendGift");
        var selectedItem = "";//用户选中的礼物，用来保存类名
        var giftListArr = ["鲜花", "手机", "飞机", "火箭"]
        var giftClass_listArr = ["Flower", "Phone", "Plane", "Huojian"]
        //    选中
        for (let i = 0; i < giftListArr.length; i++) {
            var giftItemDiv = document.createElement("div");
            giftItemDiv.className = giftClass_listArr[i]
            giftItemDiv.innerHTML = giftListArr[i];
            giftItemDiv.classList.add("dome1")
            // 给每个礼物item都添加点击事件，点击时表示选中，再次点击表示取消
            giftItemDiv.onclick = function () {
                var giftListAll = document.querySelectorAll(".c_giftList div")

                for (let j = 0; j < giftListAll.length; j++) {
                    // 如果列表中 不是当前选中的礼物
                    if (giftListAll[j] != this) {
                        // 就清除id
                        giftListAll[j].id = null;
                    }
                }
                // 如果未选中，就选中
                if (this.id == "selectGift") {
                    this.id = null
                    selectedItem = null
                } else {
                    // 如果选中了，取消选中
                    this.id = "selectGift"
                    console.log(this.className.split(" ")[0])
                    selectedItem = this.className.split(" ")[0]
                    // console.log(selectedItem)
                }
            }
            giftListDiv.appendChild(giftItemDiv)

        }
        // 赠送按钮
        sendGiftBtn.onclick = function () {
            // var gift
            // if (selectedItem == "Flower") {
            //     gift = new Flower()
            // } else if (selectedItem == "Phone") {
            //     gift = new Phone()

            // } else if (selectedItem == "Plane") {
            //     gift = new Plane()
            // } else if (selectedItem == "Huojian") {
            //     gift = new Huojian()
            // } else {
            //     alert("选择正确礼物")
            // }

            //🔺🔺🔺 以上方式是普通方式，和下面的方式功能一致，但是，下面的工厂模式可以降低耦合度，可以将公共方法封装 🔺🔺🔺

            // 根据selectdItem 创建相应类型的对象，并执行其send方法
            var gift = giftFactory.createGift(selectedItem)
            gift.send()
        }


        // 创建礼物
        function Gift() { }
        Gift.prototype.send = function () {
            console.log("在页面送出礼物" + this.getGiftName())
        }
        function Flower() {
            var gname = "鲜花"
            this.getGiftName = function () {
                return gname;
            }
        }
        function Phone() {
            var gname = "手机"
            this.getGiftName = function () {
                return gname;
            }
        }
        function Plane() {
            var gname = "飞机"
            this.getGiftName = function () {
                return gname;
            }
        }
        function Huojian() {
            var gname = "火箭"
            this.getGiftName = function () {
                return gname;
            }
        }
        //    建立父子关系
        Flower.prototype = new Gift()
        Phone.prototype = new Gift()
        Plane.prototype = new Gift()
        Huojian.prototype = new Gift()
        // 建立礼物工厂模式
        var giftFactory = {
            createGift: function (selectedItem) {
                var gift;
                switch (selectedItem) {
                    case "Flower":
                        gift = new Flower()
                        break
                    case "Phone":
                        gift = new Phone()
                        break
                    case "Plane":
                        gift = new Plane()
                        break
                    case "Huojian":
                        gift = new Huojian()
                        break
                    default:
                        alert("选择正确的礼物")
                        break
                }
                return gift
            }
        }

    </script>
</body>

</html>
```

### js截取日期的年月日

```js
 function getYearMonth(date) {
    // 将日期以空格隔开，即['2020-06-13', '17:10:09']
    date = (date + "").split(/[ ]+/);
    let result = [];
    let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    // 用截取出来的年月日进行正则表达式匹配
    reg.exec(date[0]);
    result.push(RegExp.$1); //获取匹配到的第一个子匹配，即‘2020’
    result.push(RegExp.$2);
    result.push(RegExp.$3);
    result.push(RegExp.$4);
    return result;
}
console.log(getYearMonth("2020-06-13 17:10:09"));
```

或

```js
var dateStr = "2017-10-22";// 只能截取这种格式的字符
var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
console.log(dateStr.match(reg));
console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);
```

### 时间的格式化

```js
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
}
```

调用：

```js
var time1 = new Date().Format("yyyy-MM-dd");

var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss");
```

### 获取当前时\将时间戳转换为时间格式

```js
// 获取当前时间，可以存入数据库（除以1000 是为了存储时空间小，精确到秒即可）
  var timer = parseInt(new Date().getTime() / 1000);
  console.log(timer);
// 将数据库中的时间戳，转换为日期时间格式
  // 方法一
  function getTime(nS) {
      var date = new Date(parseInt(nS) * 1000);
      var year = date.getFullYear();
      var mon =
          date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1;
      // 将月份个位加 0
      var day = date.getDate();
      var hours = date.getHours();
      var minu = date.getMinutes();
      var sec =
          date.getSeconds().toString().length < 2
              ? "0" + date.getSeconds()
              : date.getSeconds();
      // 秒数 个位加 0

      return (
          year +
          "/" +
          mon +
          "/" +
          day +
          " " +
          hours +
          ":" +
          minu +
          ":" +
          sec
      );
  }
  console.log(getTime(timer));
  // 方法二
  function timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
          (date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s =
          date.getSeconds().toString().length < 2
              ? "0" + date.getSeconds()
              : date.getSeconds();
      console.log(s);
      return Y + M + D + h + m + s;
  }
  console.log(timestampToTime(timer));
```

### 透明遮罩(兼容IE8+)

请用原生js实现一个函数,给页面制定的任意一个元素添加一个透明遮罩(透明度可变,默认0.2),使这个区域点击无效,要求兼容IE8+及各主流浏览器,遮罩层效果如下图所示

:::details

```js
<style>
#target {
    width: 200px;
    height: 300px;
    margin: 40px;
    background-color: tomato;
}
</style>

<div id="target"></div>

<script>
function addMask(elem, opacity) {
    opacity = opacity || 0.2;

    var rect = elem.getBoundingClientRect();
    var style = getComputedStyle(elem, null);

    var mask = document.createElement('div');
    mask.style.position = 'absolute';
    var marginLeft = parseFloat(style.marginLeft);
    mask.style.left = (elem.offsetLeft - marginLeft) + 'px';
    var marginTop = parseFloat(style.marginTop);
    mask.style.top = (elem.offsetTop - marginTop) + 'px';
    mask.style.zIndex = 9999;
    mask.style.opacity = '' + opacity;
    mask.style.backgroundColor = '#000';

    mask.style.width = (parseFloat(style.marginLeft) +
        parseFloat(style.marginRight) + rect.width) + 'px';
    mask.style.height = (parseFloat(style.marginTop) +
        parseFloat(style.marginBottom) + rect.height) + 'px';

    elem.parentNode.appendChild(mask);
}

var target = document.getElementById('target');
addMask(target);

target.addEventListener('click', function () {
    console.log('click');
}, false);
</script>
```

:::

### 当天星期x

```js
var days = ['日','一','二','三','四','五','六'];
var date = new Date();

console.log('今天是星期' + days[date.getDay()]);
```

### 为每个postXXX方法增加拦截验证功能

现有一个Page类,其原型对象上有许多以post开头的方法(如postMsg);另有一拦截函数chekc,只返回ture或false.请设计一个函数,该函数应批量改造原Page的postXXX方法,在保留其原有功能的同时,为每个postXXX方法增加拦截验证功能,当chekc返回true时继续执行原postXXX方法,返回false时不再执行原postXXX方法

```js
function Page() {}

Page.prototype = {
  constructor: Page,

  postA: function (a) {
    console.log('a:' + a);
  },
  postB: function (b) {
    console.log('b:' + b);
  },
  postC: function (c) {
    console.log('c:' + c);
  },
  check: function () {
    return Math.random() > 0.5;
  }
}

function checkfy(obj) {
  for (var key in obj) {
    if (key.indexOf('post') === 0 && typeof obj[key] === 'function') {
      (function (key) {
        var fn = obj[key];
        obj[key] = function () {
          if (obj.check()) {
            fn.apply(obj, arguments);
          }
        };
      }(key));
    }
  }
} // end checkfy()

checkfy(Page.prototype);

var obj = new Page();

obj.postA('checkfy');
obj.postB('checkfy');
obj.postC('checkfy');
```

### 深拷贝函数

:::details

```js
    function deepClone(obj) {
        var _toString = Object.prototype.toString;

        // null, undefined, non-object, function
        if (!obj || typeof obj !== 'object') {
            return obj;
        }

        // DOM Node
        if (obj.nodeType && 'cloneNode' in obj) {
            return obj.cloneNode(true);
        }

        // Date
        if (_toString.call(obj) === '[object Date]') {
            return new Date(obj.getTime());
        }

        // RegExp
        if (_toString.call(obj) === '[object RegExp]') {
            var flags = [];
            if (obj.global) { flags.push('g'); }
            if (obj.multiline) { flags.push('m'); }
            if (obj.ignoreCase) { flags.push('i'); }

            return new RegExp(obj.source, flags.join(''));
        }

        var result = Array.isArray(obj) ? [] :
            obj.constructor ? new obj.constructor() : {};

        for (var key in obj ) {
            result[key] = deepClone(obj[key]);
        }

        return result;
    }

    function A() {
        this.a = a;
    }

    var a = {
        name: 'qiu',
        birth: new Date(),
        pattern: /qiu/gim,
        container: document.body,
        hobbys: ['book', new Date(), /aaa/gim, 111]
    };

    var c = new A();
    var b = deepClone(c);
    console.log(c.a === b.a);
    console.log(c, b);
```

:::

### 实时动态显示年终倒计时

:::details

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>test</title>
</head>
<body>
    <span id="target"></span>
<script type="text/javascript">
    // 为了简化。每月默认30天
    function getTimeString() {
        var start = new Date();
        var end = new Date(start.getFullYear() + 1, 0, 1);
        var elapse = Math.floor((end - start) / 1000);
        var seconds = elapse % 60 ;
        var minutes = Math.floor(elapse / 60) % 60;
        var hours = Math.floor(elapse / (60 * 60)) % 24;
        var days = Math.floor(elapse / (60 * 60 * 24)) % 30;
        var months = Math.floor(elapse / (60 * 60 * 24 * 30)) % 12;
        var years = Math.floor(elapse / (60 * 60 * 24 * 30 * 12));
        return start.getFullYear() + '年还剩' + years + '年' + months + '月' + days + '日'
            + hours + '小时' + minutes + '分' + seconds + '秒';
    }
    function domText(elem, text) {
        if (text == undefined) {
            if (elem.textContent) {
                return elem.textContent;
            } else if (elem.innerText) {
                return elem.innerText;
            }
        } else {
            if (elem.textContent) {
                elem.textContent = text;
            } else if (elem.innerText) {
                elem.innerText = text;
            } else {
                elem.innerHTML = text;
            }
        }
    }
    var target = document.getElementById('target');
    setInterval(function () {
        domText(target, getTimeString());
    }, 1000)
    </script>
  </body>
</html>
```

:::
