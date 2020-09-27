---
title: React 组件的写法
date: 2019-4-3
sidebar: 'auto'
tags:
 - react
publish: true
---

### 组件的文件命名

给组件起名字的时候，一定不要和原生的标签名一样，不然会报错
如果写的是一个组件，文件的后缀用 `.jsx`
如果写的是一个 `js` 文件，文件后缀用 `.js`

## App.js文件内容

```js
// 在组件中，react 核心库是用来解析生成虚拟DOM的，所以必须引入
import React from 'react'
// import 引入组件必须写在文件的最顶端（使用组件第二步共三步）
import Headers from './components/Header-box'
import Main from "./components/Main-box";
import Footer from './components/Footer'
/*
 1. 函数组件的基础
 function App() {
    // 函数里的返回值怎么写---用return
    return <div>你好</div>
}
 2. 基本布局
    <></> 这是一个占位符，它不会再页面上生成任何的标签，只起到一个包裹其他标签的作用
    在写组件的时候，如果有多个同级的标签，必须在同一个更标签里
 */
function App() {
    return (
        <>
            {/* 使用（使用组件第三步共三步） */}
            <Headers />
            <Main />
            <Footer />
        </>
    )
}
// 要用es6的模块
// import 是导入，被导入的组件一定要有导出
// export ： ex = exit  ； port = 端口/出口
export default App
```

## 组件本体

Header组件（其他两个同下） components/Header-box.jsx

```jsx
// 编写组件内容 （使用组件第一步共三步）
// 1，写组件，第一步 引入react
import React from 'react'
import './Head-box.css' // 引入css文件要写全名 加上.css
// 2. 写函数组件，-- es6 箭头函数
// export default 告诉引入的组件，这个组件里默认导出的就是这个函数
export default () => {
    return (
        <header className="header-box">
            <nav>
                <ul>
                    <li>首页</li>
                    <li>新闻</li>
                    <li>关于</li>
                </ul>
            </nav>
        </header>
    )
}
```
