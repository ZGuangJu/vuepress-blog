---
title: export 区别
date: 2019-01-18
sidebar: 'auto'
categories:
 - 小知识
tags:
 - export区别
publish: true
---
## module.exports与exports，export与export default之间的关系和区别

首先我们要明白一个前提，`CommonJS`模块规范和`ES6`模块规范完全是两种不同的概念。

1. 语法
   - `module.exports`和`exports`是属于 `CommonJS` 模块规范;
   - `export`和`export default`是属于`ES6`语法。
2. 导出和引入
   - `module.exports`和`exports`导出模块，用`require`引入模块。
   - `export`和`export default`导出模块，`import`导入模块。
3. 总结一些用法上的区别：

```js
// module.exports和exports的用法是后面加一个等号，再接具体的导出
module.exports=...
exports=...
```

```js
// export和export default的用法是后面直接接具体的导出，没有等号.
export default ...
export ...
```

## module.exports与exports

`Node`应用由模块组成，采用`CommonJS`模块规范。

根据这个规范，每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

`CommonJS`规范规定，每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的`module.exports`属性。

1. 使用`module.exports`导出模块：

通过`module.exports`输出变量x和函数`addX`。

```js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```

2. 使用`require`引入模块

`require`方法用于加载(引入)模块。

```js
var example = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

为了方便，`Node`为每个模块提供一个`exports`变量，指向`module.exports`。这等同在每个模块头部，有一行这样的命令。

```js
var exports = module.exports;
```

于是我们可以直接在 `exports` 对象上添加方法，表示对外输出的接口，如同在`module.exports`上添加一样,可以直接在`exports`对象上添加相关的方法。

- 优先使用 `module.exports`

注意，因为 `Node` 模块是通过 `module.exports` 导出的，如果直接将`exports`变量指向一个值，就切断了`exports`与`module.exports`的联系，导致意外发生：

```js
// a.js
exports = function a() {};
// b.js
const a = require('./a.js') // a 是一个空对象
```

## export与export default

不同于`CommonJS`，`ES6`使用 `export` 和 `import` 来导出、导入模块

- `export`

通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要，使用`export default`命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。

```js
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};
```

需要特别注意的是，`export`命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

```js
// 写法一
export var m = 1;
// 写法二
var m = 1;
export {m};
// 写法三
var n = 1;
export {n as m};
```

`export`使用：

```js
//demo1.js
export const str = 'hello world'  //变量
export function fuunc(a){ //函数
    return a+1
}
```

对应的导入方式：

```js
//demo2.js
import { str, func } from 'demo' //也可以分开写两次，导入的时候带花括号
```

- `export default`

`export default`命令，为模块指定默认输出。

```js
// export-default.js
export default function () {
  console.log('foo');
}
```

`export default`使用：

```js
//demo1.js
export default const str = 'hello world'
```

对应的导入方式：

```js
//demo2.js
import str from 'demo1' //导入的时候没有花括号
```

### export default 和 export 区别

1. `export`与`export default`均可用于导出常量、函数、文件、模块等
2. 你可以在其它文件或模块中通过`import` `+` (常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
3. 在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个
4. 通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要

```js
// 1. export
//a.js
export const str = "blablabla~";
export function log(sth) {
  return sth;
}
对应的导入方式：
//b.js
import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号

// 2. export default
//a.js
const str = "blablabla~";
export default str;
对应的导入方式：

//b.js
import str from 'a'; //导入的时候没有花括号
```

**使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名**

```js
//a.js
let sex = "boy";
export default sex（sex不能加大括号）
//原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
// 其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。
```

```js
// b.js
// 本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import any from "./a.js"
import any12 from "./a.js"
console.log(any,any12)   // boy,boy
```
