---
title: JavaScript
date: 2018-12-21
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - JavaScript
publish: true
---
## 原始数据类型

## 引用数据类型

## 转数字的方法

1. Number()

```js
    console.log(Number('12'));
```

2. parseInt() 整数

```js
    let num = '12'
    let num2 = parseInt(num)
    console.log(num2);
```

3. parseFloat() 浮点数

```js
    let num = '12.0.5'
    let num2 = parseFloat(num)
    console.log(num2);
```

4. 隐式转换

```js
    let num = '12' / 1  //12
    let num = '12' * 1  //12
    let num = '12.01.1' / 1   //NaN
    let num = 'AB' / 1   //NaN
    console.log(num);
```

and

```js
    let age = '12'
    let atherage = +age
    console.log(atherage);
```

## 转字符串的方法

1. String()

```js
    console.log(String(12));
    console.log(String(true));
    console.log(String(null));
```

2. toString()

```js
    let num = 12
    let num2 = num.toString()
    console.log(typeof num2);
```

## 转布尔值

1. Boolean()

```js
    let age = 1
    let atherage = Boolean(age)
    console.log(atherage);
```

2. !!

```js
    let age = 1
    let atherage = !!age
    console.log(atherage);
```

## 模板字面量

```js
//保持格式一模一样
 let myMultiLineString = 'first line\nsecond line';
        let myMultiLineTemplateLiteral = ` first line
second line `;
        console.log(myMultiLineString); // first line // second line"
        console.log(myMultiLineTemplateLiteral); // first line // second line
```

## symbol

符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。

```JS
    let sym = Symbol();
    console.log(typeof sym);

    let sym1 = Symbol();
    let sym2 = Symbol();
    console.log(sym1 == sym2); //false  符号实例是唯一、不可变的
```

## 逻辑与 逻辑或
