---
title: JavaScript
date: 2019-12-21
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - JavaScript
publish: true
---

[javascript详解](https://wangdoc.com/javascript/)

[阮一峰javascript](https://javascript.ruanyifeng.com/)

关注公众号，送新版`JavaScrit`高级程序设计（第四版）

## javascript历史

:::details javascript历史
JavaScript 是面向 Web 的编程语言，获得了所有网页浏览器的支持，是目前使用最广泛的脚本编程语言之一，也是网页设计和 Web 应用必须掌握的基本工具。 JavaScript 历史 1995 年 2 月，Netscape 公司发布 Netscape Navigator 2 浏览器，并在这个浏览器中免费提供了一个开发工具——LiveScript。由于当时 Java 比较流行，Netscape 便把 LiveScript 改名为 JavaScript，这也是最初的 JavaScript 1.0 版本。

由于 JavaScript 1.0 很受欢迎，Netscape 在 Netscape Navigator 3 中又发布了 JavaScript 1.1 版本。不久，微软在 Internet Explorer 3 中也加入了脚本编程功能。为了避免与 Netscape 的 JavaScript 产生纠纷，微软特意将其命名为 JScript。

1997 年，欧洲计算机制造商协会（ECMA）以 JavaScript 1.1 为基础制订了脚本语言标准——ECMA-262，并命名为 ECMAScript。

1998 年，国际标准化组织和国际电工委员会（ISO/IEC）采用了 ECMAScript 标准（即 ISO/IEC-16262）。自此，浏览器厂商就以 ECMAScript 作为各自 JavaScript 实现的规范标准。JavaScript 正式从各自为政走向了规范统一。 ECMAScript 起源 1997 年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了脚本语言的实现标准，并将这种语言命名为 ECMAScript。这个版本就是 ECMAScript 1.0 版。

之所以不叫 JavaScript，主要有以下两个原因： 商标限制。Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法使用 JavaScript 这个名字，而且 JavaScript 己经被 Netscape 公司注册为商标。 体现公益性。该标准的制订者是 ECMA 组织，而不是 Netscape 公司，这样有利于确保规范的开放性和中立性。

简单概括，ECMAScript 是 JavaScript 语言的规范标准，JavaScript 是 ECMAScript 的一种实现。注意，这两个词在一般语境中是可以互换的。 EECMAScript 版本 1998 年 6 月，ECMAScript 2.0 版发布。

1999 年 12 月，ECMAScript 3.0 版发布，并成为 JavaScript 的通用标准，获得广泛支持。

2007 年 10 月，ECMAScript 4.0 版草案发布，对 3.0 版做了大幅升级。由于 4.0 版的目标过于激进，各方对于是否通过这个标准产生了严重分歧。

2008 年 7月，ECMA 中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分发布为 ECMAScript 3.1。不久，ECMAScript 3.1 改名为 ECMAScript 5。

2009 年 12 月，ECMAScript 5.0 版正式发布。

2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。

2013 年 12 月，ECMAScript 6 版草案发布。

2015 年 6 月，ECMAScript 6 发布正式版本，并更名为 ECMAScript 2015 。Mozilla 在这个标准的基础上推出了 JavaScript 2.0。

从此以后，JavaScript 开始以年份命名，新版本将按照 “ECMAScript+年份” 的形式发布。目前最新 版本为 ECMAScript 2018，于 2018 年 7 月正式发布。 浏览器支持 目前 5 大主流浏览器都支持 ECMAScript 5，具体说明如下： Opera 11.60+ IE 9+ Firefox 4+ Safari 5.1+ Chrome 13+
:::

## javascript 输出

- `document.write` 文档写入
`document` 文档 `write` 写入

- `console.log` 控制台输出

```js
console.log('hello world');
```

- `alert` 弹窗输出内容 有一个确定按钮(弹出的值都是字符串)

```js
alert('hello world');
alert(12)
```

- `confirm`(不常用) 确认弹窗 有确认和取消按钮 点击确认按钮会返回 `true` 点击取消按钮会返回 `fasle`.

```js
if (confirm('我是好人')) {
  alert('是的 你是个好人');
} else {
  alert('不是 你不是好人');
}
```

- `prompt`(不常用) 显示可提示用户进行输入的对话框

```js
var name = prompt('请输入姓名');
if (name == 'lilei') {
  alert('输入正确');
} else {
  console.log('输入错误，请重新输入');
}
```

## javascript 的数据类型

- 基本数据类型(原始数据类型/值类型)
  - `number` :字符串
  - `string` :数字
  - `boolean` :布尔
  - `null` :空
  - `undefined` :未定义
  - `symbol` :符号
  - `BigInt` : 任意大的整数

- 引用数据类型
  - `object` : 对象
    - 普通对象(`{}`、`new Array`)
    - 数组对象(`[]`、`new Object`)
    - 正则对象
    - 日期对象(`new Date`)
    - `Math`数学函数对象
    - ...(细分)
  - `function` :方法

## 数据类型检测方法(4种)

- `typeof` 检测数据类型的逻辑运算符
- `instanceof` 检测是否为某个类的实例
- `constructor` 检测构造函数
- `Object.prototype.toString.call` 检测数据类型的
检测数据类型方法库
- `typeof [value]` 返回当前值的数据类型 `"数据类型"`/ `"number"` / `"boolean"`(字符串)
  - 返回的结果都是字符串
  - 局限性
    - `typeof` 不能细分对象类型（检测普通对象和数组对象都是`object`）
    - `typeof null => "object"`
所有的值在内存中都是按照二进制存储的，`null`的存储值就是`000`（和`object`的值一样）

## Number

```js
 1  2  2.2
//  声明一个数字
 var str  = 12
```

数字类型`Number`包含: 正数、负数、浮点数(小数)、`0` `Infinity`(无穷大)`-Infinity` `NaN`; `js` 只有一种数字类型。

- `NaN` 表示不是一个有效数字,`NaN`和任何值都不相等`NaN =!NaN`（但属于`Number`类型)

### 转数字的方法

把其他数据类型转换为数字的方法

转数字的方法有三种：`Number([value])` `Parseint([vaule])` `Parsefloat([valvue])`

- 强转换（隐式转换/基于底层机制转换）`Nubmber([value])`
  - 隐式转换都是基于`Number([value])`
    - `isNaN('12px')`先把其他类型值转为数字，再检测；
    - 数学运算: `- * /`(`+`不行，会拼接成字符串) ；`'12px' - 13`
    - `字符串==数字`: 两个等于号比较也会把其他值转换为数字 。`'12px'==12`
- 弱转换（基于额外的方法转换）`parseInt([value])` / `parseFloat([value])`
:::warning
`isNaN(值)` 只是检测这个值是否为有效数字 不是有效数字返回`true` 是返回`false`
:::

- `parseInt` 处理的值是字符串，从字符串的左侧开始查找有效数字字符（遇到非有效数字字符串则停止查找）`=>` 如果处理的值不是字符串，需要先转换为字符串然后再开始查找接口。
- `Number` 直接调用浏览器最底层的数据类型检测机制来完成

1. 字符串转数字 一旦字符串出现非有效数字 结果是`NaN` 只有都是有效数字结果才能转换为具体的数字，空字符串转换为`0`

2. `null`转数字,结果是`0`

```js
 console.log(Number(null)) //0
```

3. `boolean` : `true`=> `1` 、`false`=>`0`

```js
 console.log(Number(true)) // 1
 console.log(Number(false)) // 0
```

4. `symbol`不能转数字，否则会报错
5. `function`函数和`undefind`转数字，结果是`NaN`
6. `Object`对象转数字 先把对象转成字符串(用内置方法`toString()`)，再把字符串转成数字
    - 普通对象 `{name:lili}`
    - 数组对象 `[12]`
    - 其他对象  都是`NaN`

```js
    parseInt('') //NaN
    Number('') //0
    isNaN('') //false (先把''转为数字(隐式 Number) isNaN
    parseInt(null) // NaN
    Number(null) //NaN
    isNaN(null) //true
    parseInt('12px') // 12
    Number('12px') //NaN
    isNaN('12px') //ture
    parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null) //'2.6Number'
    isNaN(Number(!!Number(parseInt('0.8')))) //false
    typeof !parseInt(null) + !isNaN(null) //"booleantrue"
```

### 方法

1. `Number(value)`
语法：

```js
    var a = new Number('123');
    var a1 = 123;// a 和 a1 值相等，类型不等，所以不是全等
    console.log(a === a1);//false
    console.log(a); // Number {123}
    console.log(a1);//123
    console.log('typeof', typeof a); //typeof object
    console.log('typeof', typeof a1); //typeof number
    var b = Number('123');
    var b1 = 123; // b 和 b1 等价
    console.log(b); //123
    console.log(b1); // 123
    console.log(b === b1);// true
    console.log('typeof', typeof b); //typeof number
    console.log('typeof', typeof b1); //typeof number
```

描述

- 如果参数无法被转换为数字，则返回 `NaN`。
- 在非构造器上下文中 (如：没有 `new` 操作符)`，Number` 能被用来执行类型转换

```js
// 参数中只要能够有非数字的其他符号，就转为NaN,可以转小数
    console.log(Number('124564>'));//NaN
    console.log(Number('12+45'));//NaN
    Number('123')     // 123
    Number('12.3456465')    // 12.3456465
    Number('12.00')   // 12
    Number('123e-1')  // 12.3
    Number('')        // 0
    Number(null)      // 0
    Number('0x11')    // 17
    Number('0b11')    // 3
    Number('0o11')    // 9
    Number('foo')     // NaN
    Number('100a')    // NaN
    Number('-Infinity') //-Infinity
```

2. `parseInt(string, radix)`
转换为一个整数 或 `NaN`（`radix` 小于 2 或大于 36 ，或第一个非空格字符不能转换为数字则返回`NaN`）

   - `string`被解析的值。参数不是字符串，将其转为字符串(使用 `ToString`抽象操作)。字符串开头的空白符将会被忽略
   - `radix` (可选)从 `2` 到 `36`，表示字符串的基数。如 `16` 表示被解析值是十六进制数。注意，`10`不是默认值！

```js
    console.log(parseInt('-12')); //-12
    console.log(parseInt('+12')); //12(+12)
    console.log(parseInt('0.12'));// 0
    console.log(parseInt('f12')); //NaN
    console.log(parseInt('1k2')); //1
    console.log(parseInt(null));// NaN
    console.log(parseInt(undefined)); //NaN
    console.log(parseInt({ a: 123 })); //NaN
    console.log(parseInt(true));// NaN
    console.log(parseInt(false));// NaN
```

描述：
`parseInt`函数将其第一个参数转换为一个字符串，对该字符串(从左到右)进行解析，然后返回一个整数或 `NaN`
:::warning 注意
字符串首位是`+ -`，可以识别，其他字符不能，会停止解析，并返回之前解析完成的值
:::

3. `parseFloat(string)`
函数解析一个参数（必要时先转换为字符串）并返回一个浮点数(小数)，如果给定值不能被转换成数值，则会返回 `NaN`。

```js
    let num = '12.1.5'
    let num2 = parseFloat(num)
    console.log(num2); //12.1
    // num 是12.0.5就会返回12 ，因为12.0 会省略最后的0
```

```js
//下面的例子都返回3.14
    parseFloat(3.14);
    parseFloat('3.14');
    parseFloat('  3.14  ');
    parseFloat('314e-2');
    parseFloat('0.0314E+2');
    parseFloat('3.14some non-digit characters');
    parseFloat({ toString: function() { return "3.14" } });
```

:::warning 注意
在解析中遇到了`+`、`-` 、`0-9`、`.`、科学记数法中的指数（`e 或 E`）以外的字符，会忽略该字符以及之后的所有字符，返回已经解析到的浮点数;第二个小数点出现也会使解析停止（在这之前的字符都会被解析）;参数首位和末位的空白符会被忽略;如果参数字符串的第一个字符不能被解析成为数字,则 `parseFloat` 返回 `NaN`
`parseFloat`是个全局函数,不属于任何对象。
:::

- 隐式转换数字

```js
    let num = '12' / 1  //12
    let num = '12' * 1  //12
    let num = '12.01.1' / 1   //NaN
    let num = 'AB' / 1   //NaN
    console.log(num);
```

`and`

```js
//单独使用 + 号时，两个变量相加则不会转
    let age = '12'
    let atherage = +age
    console.log(atherage);
```

## String

 字符串

- 创建

```js
  var str  = 'hello'
  //通过构造函数创建
  var str = new String('hello')
```

- 字符串的属性
  长度 length
  创建字符串的构造函数  constructor
  指向函数的原型      prototype
- 字符串的方法  charAt()和 charCodeAt()
- charAt(数字)  表示截取字符串中的一个的哪个索引

```js
var str  = 'hello'
str.charAt(0)
str[0]
```

- concat 拼接 把两个字符串拼在一起

```js
 var str  = 'hello'
 var str2= 'world'
 var str3  = str.concat(str2)
```

- slice/substr/substring 截取字符串的多个
两个参数 第一个参数表示从哪截取 第二个参数表示截取到哪个索引 (包前不包后)
如果只传一个参数 表示从当前索引截取到末尾

```js
 var  str = 'hello'
 var  str1  = str.slice(0,2) //he
 var  str1  = str.slice(2) //llo
 var str2  = str.substr(0,2)
```

- indexOf 和 lastIndexOf 或者字符串的索引
  indexof   该字符第一次出现的索引
  lastIndexOf 该字符最后一次出现的索引
  如果检测不到索引 则返回-1 (该字符串没有此字符)

```js
var str = 'hello'
console.log(str.indexOf('l')) //2
console.log(str.lastIndexOf('l')) //3
var n= '李先生'
console.log(n.indexOf('王'))
```

- trim() 字符串去除前后的空格

```js
var n = '李小姐 '
var res = n.trim()
console.log(res)
```

- 字符转换大小写 toUpperCase 转大写  toLowerCase 转小写

```js
var a = 'english'
var l = a.toUpperCase() // 'ENGLISH'
var m = l.toLowerCase() //'english'
console.log(l,m)
```

字符串类型 `String` 字符串可以是引号中的任意文本 单引号或者双引号

```js
 'hello world' "hello world"
```

### 转字符串的方法

1. `String()`

```js
    console.log(String(12));
    console.log(String(true));
    console.log(String(null));
```

2. `toString()`

```js
    let num = 12
    let num2 = num.toString()
    console.log(typeof num2);
```

## Boolean

布尔类型 `Boolean` 只有两个值 `true` `false`

```js
  true  false
```

- 转布尔值

1. `Boolean()`

```js
    let age = 1
    let atherage = Boolean(age)
    console.log(atherage);
```

2. `!!`

```js
    let age = 1
    let atherage = !!age
    //第一个！ !age 用 Boolean 将 1 转为了false
    //第二个！把false转为true （1转boolean本来就是true）
    console.log(atherage);
```

## null

空值

## undefined

未定义

```js
     var a;
   console.log(a) //undefind
```

## Symbol

表示独一无二的值
符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。

```js
    let b = Symbol('b')
   let c = Symbol('b')
  console.log(b==c) //false
```

```js
    let sym = Symbol();
    console.log(typeof sym);

    let sym1 = Symbol();
    let sym2 = Symbol();
    console.log(sym1 == sym2); //false  符号实例是唯一、不可变的
```

## BigInt

`BigInt` 是一种内置对象，它提供了一种方法来表示大于`253 - 1` 的整数。这原本是 `Javascript`中可以用 `Number` 表示的最大数字。`BigInt` 可以表示任意大的整数。

## Object

- 对象 `Object` 是以大括号`{}`表示 对象里面放的是键值对（key:value ）每一项还是以逗号分割 `key`(键名)和`value`(键值)以：分割
  - 数组`Array`  存放很多东西的集合; 数组的定义 `[]`中括号表示数组，每一项以逗号分割

```js
   // 字面量定义
   [] 空数组
   var students = ['学生1','学生2','学生3' ]
    var goods =['牙膏'，'牙刷'，'苹果','洗衣机']
```

```js
    //数组[数字] 表示数组的第几项  js的计数是从0开始算的
     var students = new Array()
     students[0] ='学生1'
     students[1] ='学生2'
```

## Function

- 函数 `Function` 执行具体功能的代码块
函数 也是一种数据类型 引用类型 Fuction
作用：函数是由事件驱动或者主动调用时可重复执行的代码块

```js
 //函数基本写法
 /**
  * funtion
  * funname 函数名(英文)
  * (a,b) 用来放形参 和实参一一对应
  * {}  函数执行的内容
 */
 function  funname () {}
 // 函数执行、调用
 funname()
```

- 函数的参数 调用函数时你可以给函数传递值 这些值被称为参数  可以传多个  这些参数以逗号分割

 ```js
 funname(1,2,3)  //实参(实际传递的参数)
 ```

- 函数需要接受这些参数 来进行一些js逻辑处理 函数接受的参数和传递的参数要一一对应 (形参)

 ```js
 funciton funname(a,b){ //形参 用来接受实际参数
}
 ```

- 带有返回值的函数 通过return就可以实现 并把返回值给到调用它的地方 函数调用 = 返回值  函数如果碰到return 后面的语句不在执行 都是无效代码

```js
funciton a(){
   return 1
  }
a() // a执行的结果就是1
```

## let const

### var

```js
// 局部变量和全局变量
var  c = 1  //全部变量
function a(){
    var money = 100  //局部变量  外部无法访问
    console.log(money,'局部变量')
    dd = 1 // 全局变量
}
a()
console.log('变量',c,dd)
```

### var let 的区别

1. 局部作用域里，`var` 是函数作用域，`let`是块作用域
2. `var` 可以多次声明一个变量名，`let`不可以重复声明
3. `let`不会再作用域里被提升，`var`会提升
4. 再全局作用域中，`let`声明的变量不会成为`window`的属性，`var`声明的是`window`的属性

### const

和`let`基本相同，但是声明时必须同时赋值

## prompt

```js
// 这里讲解prompt
// 用一个变量来存放我输入的内容
var name  =  prompt('请输入姓名')
if(name ==10){
   alert('输入正确1')
}else{
 alert('输入错误1')
}
if(name>=10){
 alert('输入正确2')
}else{
 alert('输入错误3')
}
if(name == 'lilei'){
   alert('输入正确3')
}else{
  console.log('输入错误3，请重新输入')
}
// 如果输入的值 大于等于10显示输入正确
// 如果输入的值等于10 显示输入正确

// if(prompt('请输入姓名')){
//   console.log(true)
// }else{
//  console.log(false)
// }
```

## 模板字面量

```js
//保持格式一模一样
    let myMultiLineString = 'first line\nsecond line';
    let myMultiLineTemplateLiteral = ` first line
second line `;// 换行也不影响
    console.log(myMultiLineString); // first line // second line"
    console.log(myMultiLineTemplateLiteral); // first line // second line
```

## 逻辑与 逻辑或

- 与 `&&`
- 或 `||`

## 语句

- 条件语句
条件语句 `if` `else if` 后面括号跟的值返回的是一定是 `true` 或者 `false` `if` 可以独立使用 `if` `else if` 只要有一个条件成立就不在继续往下走了

```js
if (条件js) {
  //条件成立
}
if (条件js) {
  //条件成立
} else {
  // 条件不成立
}
// if \ else if \ else 只要有一个条件成立就不在继续执行
var c = 9;
if (c > 9) {
  alert('第一个条件');
} else if (c > 7) {
  alert('第二个条件');
} else if (c > 8) {
  alert('第三个条件');
} else {
  alert('第四个条件');
}
```

- 三元表达式
`if else`的简化版
语法：条件？条件成立的执行语句:条件不成立的执行语句

```js
 var age = 19
 age>=18?document.write('成年'):document.write('未成年')
 var  money = 200
 // 函数里面如果有三元 return需要在语句的最前面
 function str(){
    return money>100?'买的起':'买不起'
 }
 str()
```

- 条件判断语句`switch case`

```js
  // 基本写法
  switch(条件){
    case  条件对比:
      // 如果条件成立走这里
     break
     default:
       //如果条件全都不成立走这里
  }
```

- for 循环
批量处理数据

```js
for(初始化条件;终止(退出)条件；最终条件)
++自增运算符 每次会自动加1
for(var i=0;i<10;i++){
  //执行语句
  console.log(i) //0 1
}
```

## = 、 == 和 === 的区别

```js
// 一个等号表示赋值
// 两个等号表示比较等号左右两边的值是否相等
// 三个等号表示两个值全等（包括数据类型也相同）
```

## 其他
