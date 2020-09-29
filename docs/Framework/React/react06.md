---
title: React 条件渲染和循环渲染
date: 2019-4-9
sidebar: 'auto'
tags:
 - react
 - class类
publish: true
---
## 条件渲染 和 循环渲染

- 条件渲染 通过判断来决定事件渲染(写三元表达式和if-else)

```jsx
import React from 'react';
import { render } from 'react-dom';
// 三元 &&
const A = 1
function My() {
    // return A ? (<div>这是div</div>) : '否'
    return A && <div>这是div</div>
}
// if else
function My1() {
    if (A) {
        return <div>这是div</div>
    }
}
render(<><My1></My1></>, window.root) //渲染函数组件和类组件
```

- 循环渲染

```jsx
import React from 'react';
import { render } from 'react-dom';

let carlist = [
    { name: '苹果', price: '300', },
    { name: '橘子', price: '300', },
    { name: '芒果', price: '300', },
    { name: '月饼', price: '300', },
    { name: '西瓜', price: '300', },
]
// 一般不要使用索引作为 key ，一般用 id 作为 key，为了 domdiff
function Car() {
    return carlist.map((item, index) => {
        return <div key={index}>
            <p>名称:{item.name}</p>
            <p>价格:{item.price}</p>
        </div>
    })
}
render(<><Car></Car></>, window.root) //渲染函数组件或类组件
```
