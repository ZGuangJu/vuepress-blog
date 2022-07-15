---
title: Axios vue项目实践（全流程）
date: 2022-06-30
sidebar: 'auto'
tags:
 - 前端基础
 - Axios
publish: true
# 打赏
showSponsor: true
---

## 主文件

1. 根文件 `request.js`

```js
// src/api/request.js
// 引入定义的全局配置 如 超时时间
import Config from '@/settings'
// 引入 token 验证文件
// 每次请求都要带着token，通过auth文件的方法存入、获取、移除token
import {
  getToken, setToken
} from '@/utils/auth'
// 引入 axios
import axios from 'axios'
// 引入 router
// import router from '@/router/index'
// 引入 Element UI ,错误提示框可以使用 Element UI 的组件
import {
  MessageBox,
  Notification
} from 'element-ui'
// 引入 vuex 文件
import store from '../store'

// 创建axios实例
const service = axios.create({
  /*
   * vue.config.js的proxy生效的话，baseURL需要是'/'
   */
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.
  baseURL: process.env.VUE_APP_BASE_WARNING, //VUE_APP_BASE_WARNING = '/api/supervise-admin-server/'
  timeout: Config.timeout // 请求超时时间
  // transformResponse: [function(data) {
  //   // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  //   // 用的不多
  //   return data
  // }]
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    // config 是请求的异步对象
    if (getToken()) {
      // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['Authorization'] = getToken()
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 返回的响应数据里有 authorization token 就讲token存入 sessionStorage中
    if (response.headers.hasOwnProperty('authorization')) {
      setToken(response.headers.authorization)
    }
    // 判断是否在主页面
    if (response.headers.homepage) {
      window.location.href = response.headers.homepage
    }
    // 报code为 200 到 300 间的错误 直接提示给用户
    const code = response.status
    if (code < 200 || code > 300) {
      Notification.error({
        title: response.message
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    let code = 0
    try {
      // code = error.response.data.status
      code = error.response.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 5000
        })
        return Promise.reject(error)
      }
    }
    if (code) {
      // 登录超时（401）的时候让让用户重新登录
      // 401
      if (code === 401) {
        if (!sessionStorage.getItem('netWorkFlag')) {
          MessageBox.confirm(
            '登录状态已过期，您可以继续留在该页面，或者重新登录',
            '系统提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
          ).then(() => {
            // 调用 vuex 中的方法
            store.dispatch('LogOut').then(() => {
              // 长时间不动页面时，超时会卡在当前页面不刷新
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          }).catch(() => {
            sessionStorage.removeItem('netWorkFlag')
          })
          sessionStorage.setItem('netWorkFlag', true)
        }
      } else {
        // const errorMsg = error.response.data.message
        const errorMsg = error.response.statusText ? error.response.statusText : error.response.data.statusText
        if (errorMsg !== undefined) {
          Notification.error({
            title: '错误',
            message: errorMsg,
            duration: 5000
          })
        }
      }
    } else {
      Notification.error({
        title: '接口请求失败',
        duration: 5000
      })
    }
    return Promise.reject(error)
  }
)
export default service

```

2. 具体接口的文件

```js
// src/api/warning/index.js
import request from '@/utils/request'

// 获取预警列表
export function getList(params) {
  return request({
    url: '/warning',
    // url: 'http://10.17.55.61:28330/mock/77/warning',
    method: 'get',
    params
  })
}

// 添加预警信息
export function addWarning(data) {
  return request({
    url: '/warning',
    method: 'post',
    data
  })
}
// 修改预警信息
export function editWarning(data) {
  return request({
    url: '/warning',
    method: 'put',
    data
  })
}
// 删除预警信息
export function deleteWarning(params) {
  return request({
    url: '/warning',
    method: 'delete',
    params
  })
}

// 获取单条预警信息 warningId
export function getWarning(params) {
  return request({
    url: '/warning/getWarning',
    method: 'get',
    params
  })
}
// 禁用启用 预警信息
export function editWarningStatus(params) {
  return request({
    url: '/warning/updateStatus',
    method: 'put',
    params
  })
}
```

## 其他文件

1. `settings.js`

整个系统的公共配置文件

```js
// src/settings.js
module.exports = {
  /**
   * @description 网站标题
   */
  title: '表单系统',
  /**
   * @description 是否显示 tagsView
   */
  tagsView: false,
  /**
   * @description 固定头部
   */
  fixedHeader: true,
  /**
   * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,
  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天s
   */
  passCookieExpires: 1,
  /**
   * @description 是否只保持一个子菜单的展开
   */
  uniqueOpened: true,
  /**
   * @description token key
   */
  TokenKey: 'MunicipalSocialGovernance',
  /**
   * @description 请求超时时间，毫秒（默认2分钟）
   */
  timeout: 1200000,
  /**
   * @description 是否显示logo
   */
  sidebarLogo: true,
  /**
   * 是否显示设置的底部信息
   */
  showFooter: true,
  /**
   * 底部文字，支持html语法
   */
  footerTxt: '© 2017-' + new Date().getFullYear() + ' 版权所有 XX信息技术有限公司',
  /**
   * 备案号
   */
  caseNumber: '',
  /**
   * websocket请求接口
   */
  websocketUrl: process.env.VUE_APP_WS_API
}

```

2. `auth.js`

`token`写入、获取、移除的公共方法

```js
// src/utils/auth.js
import Config from '@/settings'

const TokenKey = Config.TokenKey

export function getToken() {
  let token = sessionStorage.getItem(TokenKey)
  if (token) {

    return token
  }
  token = localStorage.getItem(TokenKey)
  if (token) {
    sessionStorage.setItem(TokenKey, token)
  } else {
    window.location.href = '/ua'
  }
  return token
}

export function setToken(token) {
  sessionStorage.setItem(TokenKey, token)
  if (localStorage.getItem('rememberMe')) {
    localStorage.setItem(TokenKey, token)
  }
}

export function removeToken() {
  sessionStorage.removeItem("USER")

  localStorage.removeItem(TokenKey)
  sessionStorage.removeItem(TokenKey)
}

```
