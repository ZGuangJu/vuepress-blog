---
title: React React-router与React-router-dom的区别
date: 2019-04-09
sidebar: 'auto'
tags:
 - react
 - React-router-dom
 - React-router
publish: true
---
## `React-router`与`React-router-dom`的区别

### 1、API对比

- React-router：提供了router的核心api。如Router、Route、Switch等，但没有提供有关dom操作进行路由跳转的ap；

- React-router-dom：提供了BrowserRouter、Route、Link等api，可以通过dom操作触发事件控制路由。

### 2、功能对比

- React-router：实现了路由的核心功能

- React-router-dom：基于React-router，加入了一些在浏览器运行下的一些功能，

- 例如：

> Link组件会渲染一个a标签，
>
> - BrowserRouter使用 HTML5 提供的 history > API可以保证你的 UI 界面和 URL 保持同步，
>
> - HashRouter使用 URL 的 hash 部分保证你的 > UI 界面和 URL 保持同步

### 3、写法对比

- React-router不能通过操作dom控制路由，此时还需引入React-router-dom

```js
import {Switch, Route, Router} from 'react-router';
import {HashHistory, Link} from 'react-router-dom';
```

- React-router-dom在React-router的基础上扩展了可操作dom的api

```js
import {Swtich, Route, Router, HashHistory, Link} from 'react-router-dom';
```

### 4、路由跳转对比

- React-router:
router4.0以上版本用this.props.history.push('/path')实现跳转；

router3.0以上版本用this.props.router.push('/path')实现跳转

- React-router-dom：直接用this.props.history.push('/path')就可以实现跳转

### 总结

在使用React的大多数情况下，我们会想要通过操作dom来控制路由，例如点击一个按钮完成跳转，这种时候使用React-router-dom就比较方便。

　安装也很简单：

```js
npm install   react-router-dom --save
```

从react-router-dom中package.json的依赖就可以看出：react-router-dom是依赖react-router的，所以我们使用npm安装react-router-dom的时候，不需要npm安装react-router。

```js
//react-router-dom的依赖
"dependencies": {
    "history": "^4.7.2",
    "invariant": "^2.2.2",
    "loose-envify": "^1.3.1",
    "prop-types": "^15.5.4",
    "react-router": "^4.2.0",
    "warning": "^3.0.0"
  }
```
