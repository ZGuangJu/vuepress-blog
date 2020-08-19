---
title: 小程序 component（组件）
date: 2019-4-10
sidebar: 'auto'
tags:
 - 微信小程序
publish: true
---

## 组件的使用方法

### 一、 组件注册（定义）

1. 要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明（将 component 字段设为 true 可将这一组文件设为自定义组件）

```json
//component/swiper/swiper.json
{
  "component": true
}

```

2.在 wxml 文件中编写组件模板，在 wxss 文件中加入组件样式，它们的写法与页面的写法类似

**在组件wxss中不应使用ID选择器、属性选择器和标签名选择器。
```html
<!-- component/swiper/swiper.wxml 子组件的具体内容 -->
<view class="inner">
  这是子组件内容
</view>
```
### 二、 使用组件

1.使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径
```json
//  /pages/home/home.js  引用组件的页面
{
    "usingComponents": {
        "Swipe": "../../components/swipe/swipe"
    },
}
```
2.在页面的 wxml 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值
```html

<!-- pages/home/home.wxml  引用组件的页面 -->
<view>
  <Swipe></Swipe>
</view>
```


## 组件通信

- WXML 数据绑定：用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容数据（自基础库版本 2.0.9 开始，还可以在数据中包含函数）。具体在 组件模板和样式 章节中介绍。
- 事件：用于子组件向父组件传递数据，可以传递任意数据。
- **如果以上两种方式不足以满足需要，父组件还可以通过 this.selectComponent 方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法。

1. 父传子

### 父页面

- wxml中标签

```html
<!-- pages/home/home.wxml  引用组件的父页面 -->
<view class="container" style="padding:0px;margin:0px">
  <Swipe name="我是谁" list="{{list}}"></Swipe>
</view>
```
- 存放的数据

```js
// pages/home/home.js 父页面的数据
Page({
    data: {
        list: [{
            id: 1,
            src: 'https://tse4-mm.cn.bing.net/th/id/OIP.uc93Vd7y_wC7jKnepxuingHaGB?w=241&h=187&c=7&o=5&pid=1.7',
        }, {
            id: 2,
            src: 'https://tse3-mm.cn.bing.net/th/id/OIP.LR1EWcFdBaQdJoU7ZUDIDwHaGV?w=237&h=194&c=7&o=5&pid=1.7'
        }
        ]
    },
});
```
- 在页面的 json 文件中进行引用声明

```json
//  /pages/home/home.js  引用组件的页面
{
    "usingComponents": {
        "Swipe": "../../components/swipe/swipe"
    },
}
```
### 子组件

- wxml中的标签
```js
// component/swiper/swiper.js 子组件用来接收数据的
Component({
    properties: {
        list: {           // 属性名
            type: Array,  // 类型（必填），目前接受的类型包括：String, Number, Boolean,
            value: [],    // 属性初始值（可选），如果未指定则会根据类型选择一个 ""、[]、{}

            observer(newVal) {
            // 用来监听当前数据变化的，当数据发生变化，他就会执行等价于vue里的watch
                console.log(newVal);
            }
        }
    },
});
```
- 使用
```html
<!-- component/swiper/swiper.js 在子组件使用传递过来的数据 -->
<view>
  <swiper indicator-dots="{{true}}" autoplay="{{true}}">
    <swiper-item wx:for="{{list}}" wx:key="index">
      <image src="{{item}}" />
    </swiper-item>
  </swiper>
</view>
```
2. 子传父