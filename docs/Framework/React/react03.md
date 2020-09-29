---
title: React jsx介绍
date: 2019-3-29
sidebar: 'auto'
tags:
 - react
 - jsx
publish: true
---
:::tip jsx是什么
jsx就是 js + xml(html) ,虚拟DOM ,其实就是一个Object,就是描述 react的dom 长什么样
:::

## jsx 是怎样创建 DOM 的

```js
let dom = <div className='a' c='1'>jsx<span>是什么</span></div>
// 保存jsx的变量就是一个 React element
// 这一步内部是调用了React.createElement()方法,so 要在开头引入 React
```

React内部实际操作

```js
 let dom = /*#__PURE__*/React.createElement("div", {
     className: "a",
    c: "1"
});
```

`jsx`其实是一种语法糖(简化的代码一般称为语法糖)
  通过`babel`自动调用`React`.`createElement()`;`createElement()`方法有三个参数：{`type`, `props`, `children`}

## index.js文件内容

```js
import React from 'react';
// 通过 React 调用createElement()方法,用来创建虚拟DOM
import ReactDOM from 'react-dom';
// 通过 ReactDOM 来 render(渲染) jsx 元素
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
console.log(serviceWorker);
/*
上行代码的解释：（es6模块）
  * ：代表的是serviceWorker.js(一个对象), 这个文件中向外暴露所有的模块
  as ：重命名  别名
 这句话的意思是它将文件（serviceWorker.js）中的所有需要暴露出来的模块都挂载到自身上（此时的serviceWorker是一个对象），然后可以通过serviceWorker.unregister();用点的方式把方法都拿出来
*/
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

## jsx 基本语义(语法规则)

1. 只能有一个根元素
2. `<></>`表示`dom` ；`{}`表示`js`。
3. `class` => `className` `class` 关键字 如果使用`class` 会报错 ：`Warning: Invalid DOM property 'class'. Did you mean 'className'?`
4. `for` => `htmlFor`  `for` 关键字 同`class`
5. `style` => 要写成对象形式 ，写成双大括号 {{}} 第一个{}：表示`js` ，第二个{}：表示`style`属性对象
6. `innerHtml` => `dangerouslySetInnerHTML` 防止 `xss` 攻击：`xss` 通过输入框，输入js脚本攻击后台(千万不要相信用户输入的内容输入的内容转成字符串)

```jsx
let dom = (<div><label htmlFor="user"
    style={{ color: `red` }}>
    我是jsx</label><input id="user" placeholder="输入姓名"></input><p dangerouslySetInnerHTML={{ __html: inm }}></p><button onClick={}></button></div>)
```

- `__html`是使用`dangerouslySetInnerHTML`的固定写法

7. 注释的使用

```jsx
{
/*
多行注释
*/
}
{
// 单行注释
}
```

8. 事件
命名规则:用驼峰命名法

```jsx
let dom = <div><button onClick={() => alert('open')}>打开</button></div>
```

9. `{}`:里面必须有返回值(比如单独在{}里写js代码时)

```js
<div>{}</div>
```

10. jsx语法

```xml
<React.Fragment>
    <div></div>
</React.Fragment>
<!--
React.Fragment是文档碎片的意思，占位，但不显示 同级元素不想用标签包裹的时候，可以用<></>去包裹

上下两种方式是等价的 简写方式
-->
<>
<div></div>
</>
```

## 英文释义

- `Invalid` adj: 无效的

- `reslove` adj: 解决的

- `reject` adj: 未解决的
