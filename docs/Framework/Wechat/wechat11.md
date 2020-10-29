---
title: 小程序 npm依赖包的使用
date: 2019-5-2
sidebar: 'auto'
tags:
 - 微信小程序
publish: true
---

## 绑定事件的两种方法

- `bind:tap="事件名"`  有冒泡事件
- `catch:tap="事件名"` 默认阻止冒泡

## 自定义属性 `data-xxx`

```html
 <view data-postid_list="{{item.postId}}" bindtap="onGoTuDetail">

```

![console.log](https://s1.ax1x.com/2020/10/29/BG83dK.png)

`console.log`打印 `evevt`在结果里

![结果](https://s1.ax1x.com/2020/10/29/BG81Z6.png)

## 全局数据 `globalData`

```js
// App.js
App({
  onLaunch (options) {
    console.log('App onLaunch')
    // Do something initial when launch.
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 1, //设置全局数据
// globalData: {a:1}
})
```

```js
// pages/post/post.js
// 在页面中获取全局数据
    const text =getApp()
    console.log(text.globalData)
    let a =text.globalData
```

## 本地数据增删改查 `Storage`

- 设置数据
  - `wx.setStorage(Object object)`
    - `key`:本地缓存中指定的 `key`;
    - `data`:需要存储的内容。只支持原生类型、`Date`、及能够通过`JSON.stringify`序列化的对象.
  - 同步 `wx.setStorageSync(string key, any data)`
    - `string key`:本地缓存中指定的 `key`;
    - `any data`:需要存储的内容。只支持原生类型、`Date`、及能够通过`JSON.stringify`序列化的对象.

```js
    wx.setStorage({
        key:"key",
        data:"value"
    })
    // 同步版本
    wx.setStorageSync('key', 1)
```

- 修改数据：给相同的`key`再设置一个值（同步）

```js
    wx.setStorage({
        key:"key",
        data:1
    })
    wx.setStorage({
        key:"key",
        data:2
    })
    // 同步版本
    wx.setStorageSync('key', 1)
    wx.setStorageSync('key', 2)
```

- 获取数据
  - `wx.getStorage(key,callback)`
    - `key`:本地缓存中指定的 `key`
    - `callback`:接口调用成功的回调函数
  - 同步 `any wx.getStorageSync(string key)`
    - `string key`:本地缓存中指定的 `key`
    - `any data` `:key`对应的内容

```js
    wx.getStorage({
    key: 'key',
    success (res) {
        console.log(res.data)
    }
})
   //同步版本
    wx.getStorageSync('key')
```

- 清除一条数据
  - `wx.removeStorage({key:'key'})`
    - `key`:本地缓存中指定的 `key`
  - 同步 `wx.removeStorageSync( key)`
    - `key`:本地缓存中指定的 `key`

```js
wx.removeStorage({key: 'key'})
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res)
  }
})
// 同步
wx.removeStorageSync('key')
```

- 清除所有数据
  - `wx.clearStorage()`
  - 同步 `wx.clearStorageSync()`

```js
    wx.clearStorage()
    // 同步版本
    wx.clearStorageSync()
```
