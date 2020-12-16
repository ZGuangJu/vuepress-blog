---
title: JS 常用数据操作方法
date: 2019-12-21
sidebar: 'auto'
categories:
- 前端基础
tags:
- JavaScript
publish: true
# 打赏
showSponsor: true
---
## 数字

## 字符串

- 反转字符串

```js

```

## 数组

- 数组去重合并

```js
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}
var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));
```

- 合并合并两个数组

```js
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables);
// ['parsnip', 'potato', 'celery', 'beetroot']
```

## 对象

- 像数组一样使用对象

```js
var obj = {
    length: 0,

    addElem: function addElem (elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```
