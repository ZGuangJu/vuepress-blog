---
title: 小程序 介绍和使用
date: 2019-4-23
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - 前端框架
 - 微信小程序
publish: true
sticky: 6
---
## 学习主要内容

1. 组件化
2. 模块
3. 各种渲染方式，显示隐藏，循环渲染
4. 路由 路由传参
5. 生命周期
6. 数据存储 微信中（全局数据，本地存储）
7. 如何在小程序里使用第三方包插件
8. 组件，页面，全局入口
9. 组件通信

## 目录结构

```s
├── app.js
├── app.json
├── app.wxss
├── pages
│   │── index
│   │   ├── index.wxml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.wxss
│   └── logs
│       ├── logs.wxml
│       └── logs.js
└── utils
```

小程序包含一个描述整体程序的 `app` 和多个描述各自页面的 `page`。
一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下

|    文件    | 必须  |      作用      |
| :--------: | :---: | :------------: |
|  `app.js`  |  是   |   小程序逻辑   |
| `app.json` |  是   | 小程序公共配置 |
| `app.json` |  否   | 小程序公共样式 |

### 小程序的三大组成部分

- `App` 方法用来注册全局入口
- `Pages` 方法用来注册页面
- `component` 方法用来注册组件--公共模板

### app 入口

- App方法构造入口全局的组件
- 在整个小程序里只能有一个App实例
- 配置全局数据
- 路由拦截

#### pages 页面

一个小程序页面由四个文件组成，分别是：

| 文件类型 | 必需 | 作用       |
| :------- | :--- | :--------- |
| js       | 是   | 页面逻辑   |
| wxml     | 是   | 页面结构   |
| json     | 否   | 页面配置   |
| wxss     | 否   | 页面样式表 |

- page方法构造页面组件
- 使用组件需要在json文件中的：

### 全局配置

未指定 `entryPagePath` 时，数组的第一项代表小程序的初始页面（首页）。

```js
 "usingComponents": {
        "组件名": "../../components/swiper/swiper"
    },
```

获取组件传过来的参数，需要点detail才能拿到具体的值

## 组件

- component方法构造组件

### 组件通信

- 接收父组件传过来的值用 properties
- 传递给父组件数据使用 this.triggerEvent('事件名','数据')

- 声明组件必须在组件的json文件中配置：

```js
  "component": true,"
```

### 内置的指令

1. wx:for
遍历渲染

- 默认在当前作用域里产生index和item

```js
 wx:for-index="" //给index别名
 wx:for-item="" //给item别名
```

2. wx:if
 渲染与销毁（v-if）

- wx:elif
- wx:else

4. wx:hidden
显示与隐藏（v-show）

## 事件系统

### 绑定事件（bind）

-

### 绑定自定义事件（bind:eventName）

-

### 触发自定义事件triggerEvent('eventName',params）

-

### 禁止冒泡：catch:eventName

-

### 互斥绑定：mut-bind:eventName

-

## 模板和引入方式

### template & inculode

1. template 加name 取名
2. template 必须加is 我们要使用哪个模板，data属性用来传参
3. import 标签，用来加载外部 wxml 文件的 template
4. include标签 加载外部的wxml文件，除了template标签里面的内容，其他内容会全部引入进来
