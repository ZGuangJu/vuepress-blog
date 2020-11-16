---
title: 小程序 PS
date: 2019-05-02
sidebar: 'auto'
tags:
 - 微信小程序
publish: true
---

## 绑定事件的两种方法

- `bind:tap="事件名"`  会有冒泡事件
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

- 修改数据：给相同的`key`再设置一个值

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

## 外部样式类

1. 在组件的`js`文件中定义

```js
//components/index.js
Component({
  //1.定义外部样式类
  externalClasses: ['my-class','you-class'],
  // 组件的属性列表
  properties: {
    title:String
  },
})
```

2. 在组件`wxml`文件中给最外层的标签里定义`class = 'my-class you-class'`

```html
<!--components/index.wxml-->
<view class="container my-class you-class" >
    <!-- 组件内容 -->
    <view class="title">
        {{title}}
    </view>
</view>
```

3. 在引用组件的页面里定义`you-class="plana"`、`my-class="planb"`

```html
<!-- pages/index.wxml -->
    <Index you-class="plana" title="123"/>
    <Index my-class="planb" title="abc"/>
<!-- Index为组件名 -->
```

```css
/* pages/index.wxml */
.planb{
  border: solid blue 1rpx;
}
.plana{
  border: solid red 1rpx;
}
```

## 组件自定义属性

1. 在引用组件的页面里定义`title="123"`，`title`属性名，`"123"`属性值

```html
<!-- pages/index.wxml -->
    <Index  title="123"/>
    <Index  title="abc"/>
<!-- Index为组件名 -->
```

2. 在组件的`js`文件中定义`properties`，和属性类型

```js
//components/index.js
Component({
 // 组件的属性列表
  properties: {
    title:String
  },
})
```

3. 在组件`wxml`文件中使用`{{title}}`

```html
<!--components/index.wxml-->
<view class="container my-class you-class" >
    <!-- 组件内容 -->
    <view class="title">
        {{title}}
    </view>
</view>
```

## 多媒体

- `wx.createInnerAudioContext` (音乐)
  - `play()`
  - `stop()`
  - ···
- `wx.getBackgroundAudioManager` (背景音乐)
  - `play()`
  - `stop()`
  - ···

## wx.stopPullDownRefresh()

- 下拉刷新数据
    1. 在页面`json`文件中添加`"enablePullDownRefresh":true`
    2. `onPullDownRefresh`钩子中定义`wx.stopPullDownRefresh()`方法
- 页面标题静态
在页面的`json`中添加 `"navigationBarTitleText": "光与影",`

## wx.setNavigationBarTitle()

- 页面标题 动态加载
在需要加载的页面的`onReady` 钩子中定义`wx.setNavigationBarTitle({title:"new title"})`

## `wx.showNavigationBarLoading()`

- 上拉触底时更新数据的动态效果(显示)

## `wx.hideNavigationBarLoading()`

- 上拉触底时更新数据的动态效果(停止)

## 组件传值

组件的js文件中的定义

```js
 properties: {
    detail: {
      type: Object
    }
  },
```

## 组件的自定义事件

(通过子组件调用父组件中的事件)

1. 组件定义自定义事件

```js
<view data-id="{{detail.postId}}" bind:tap= "onTap" class="post_container">
```

```js
methods: {
    onTap(event) {
        var postid = event.currentTarget.dataset.id //获取数据（id），并传递给父页面
        this.triggerEvent('posttap', postid) //传递id给父页面
    },
}
```

2. 在引用组件的页面中使用自定义事件名绑定

```js
  <post bind:posttap="onGoToDetail" detail="{{item}}"></post>
```

```js
 onGoToDetail(event) {
    //  接收event中的 detail （id）
    var postid = event.detail
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?postid=' + postid
    })
  },
```

## 组件自定义属性 并传值

```js
data: {
    movieList: [], //电影列表数据
  },
```

```js
   <movieone  class="movie-bottom" moviecell="{{item}}"></movieone>
```

## 网络请求

- `wx.request`
