---
title: 手写Array数组方法
date: 2018-12-21
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - JavaScript
publish: true
---

- 手写map方法

```js
    Array.prototype.mymap = function (cb) {
        let newArr = []
        for (let i = 0; i < this.length; i++) {
            newArr.push(cb(this[i], i))
        }
        return newArr
    }
```

- 手写filter

```js
Array.prototype.myfilter = function (cb) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (cd(this[i], i)) {
            newArr.push(this[i])
        }
    }
    return newArr
}
```
