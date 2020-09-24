---
title: React jsx文件
date: 2019-3-29
sidebar: 'auto'
tags:
 - react
 - jsx
publish: true
---

```js
const element = <div>123</div> // 保存jsx的变量就是一个 React element
// 这一步内部是调用了React.createElement()方法,so 要在开头引入 React
```

### 文件命名

给组件起名字的时候，一定不要和原生的标签名一样，不然会报错
如果写的是一个组件，文件的后缀用 `.jsx`
如果写的是一个 `js` 文件，文件后缀用 `.js`

## jsx的特点

1. 只能由一个根元素
2. `<></>` dom `{}`表示 `js`
3. `class` => `className` `class` 关键字 如果使用`class` 会报错 ：Warning: Invalid DOM property `class`. Did you mean `className`?
4. `for` => `htmlFor`  `for` 关键字 同`class`
5. `style` => 要写成对象形式 ，写成双大括号 {{}} 第一个{}：表示`js` ，第二个{}：表示`style`属性对象
6. `innerHtml` => `dangerouslySetInnerHTML` 防止 `xss` 攻击：`xss` 通过输入框，输入js脚本攻击后台

## 英文释义

- `Invalid` adj: 无效的

- `reslove` adj: 解决的

- `reject` adj: 未解决的
