---
title: JS 数据类型(重要)
date: 2019-12-21
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - JavaScript
publish: true
---
## js 数据类型

 | 分类                         | 类型                | 类型细分     | 说明                          |
 | :--------------------------- | :------------------ | :----------- | :---------------------------- |
 | 基本(原始)数据类型/值类型    |                     |              |                               |
 |                              | [`Number`](#number) |              | 数字                          |
 |                              | [`String`](#string) |              | 字符串                        |
 |                              | `Boolean`           |              | 布尔                          |
 |                              | `Symbol`            |              | 符号                          |
 |                              | `BigInt`            |              | 任意大的整数(ES2015)          |
 |                              | `···`               |              |                               |
 | 引用数据类型                 |                     |              |                               |
 |                              | `Object`            | `Object`     | 普通对象 (`{}`、`new Object`) |
 |                              | --                  | `Array`      | 数组对象 (`[]`、`new Array`)  |
 |                              | --                  | `RegExp`     | 正则对象                      |
 |                              | --                  | `Date`       | 日期对象                      |
 |                              | --                  | `Math`       | 数学函数对象                  |
 |                              | --                  | `Error`      | 错误（特殊对象）              |
 |                              | --                  | `···` (细分) |                               |
 |                              | `Function`          |              | 方法 (严格讲也是`Object`)     |
 | 特殊类型(有时也算作基本类型) |                     |              |                               |
 |                              | `Undefined`         |              | 未定义                        |
 |                              | `Null`              |              | 空                            |
\* `Null`被`typeof`检测时会被当做`Object`，这是历史遗留问题.

## 数据类型检测方法(4种)

1. `typeof(value)` 检测数据类型的逻辑运算符
2. `instanceof` 判断一个对象是否是数据类型的实例
3. `constructor` 检测构造函数
4. `Object.prototype.toString.call(value)` 检测数据类型的
检测数据类型方法库

- `typeof value`或`typeof(value)` 返回当前值的数据类型 `String`/ `"number"` / `"boolean"`...
  - 返回的结果都是字符串
  - 局限性
    - `typeof` 不能细分对象类型（检测普通对象和数组对象都是`object`）
    - `typeof null => "object"`
所有的值在内存中都是按照二进制存储的，`null`的存储值就是`000`（和`object`的值一样）

- `[] instanceof Array` 判断一个对象是否是数据类型的**实例**

```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log('str' instanceof String);                // false
console.log(new Number(2) instanceof Number);        // true
console.log(new Boolean(true) instanceof Boolean );  // true
console.log(new String('str') instanceof String);    // true
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
// console.log(undefined instanceof Undefined); //Error
// console.log(null instanceof Null); //Error
```

不能用 `instanceof` 方法检测 `null` 和 `undefined`.

- `constructor` 通过原型判断类型

```js
console.log((2).constructor === Number);
console.log((true).constructor === Boolean);
console.log(('str').constructor === String);
console.log(([]).constructor === Array);
console.log((function() {}).constructor === Function);
console.log(({}).constructor === Object);
```

用`costructor`来判断类型看起来是完美的，但是如果我创建一个对象，更改它的原型，这种方式也变得不可靠了

```js
function Fn(){};
Fn.prototype=new Array();
var f=new Fn();
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true
```

- `Object.prototype.toString.call(value)` 检测数据类型最准确的方式

返回`[Object,String]`/`[Object,Number]`/`[Object,Object]`

```js
var a = Object.prototype.toString;
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

## Number

数字类型`Number`包含: 正数、负数、浮点数(小数)、`0` `Infinity`(无穷大)`-Infinity` `NaN`; `js` 只有一种数字类型。

- `NaN` 表示不是一个有效数字,`NaN`和任何值都不相等`NaN =!NaN`（但属于`Number`类型)
- `js`的数字采用`IEEE 754` 数值格式 (有计算不精确的缺陷)

```js
 1  2  2.2
//  声明一个数字
 var str  = 12
```

## Number 的方法

1. `Number(value)`
将其他数据转为数字。

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
    Number('123')    // 123
    Number('12.3456465')   // 12.3456465
    Number('12.34.56465')   // NaN
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

- 使用 `Number` 作为函数来转换 `Date` 对象为数字值

```js
var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
```

2. `parseInt(string, radix)`
转换为一个整数 或 `NaN`（`radix` 小于 2 或大于 36 ，或第一个非空格字符不能转换为数字则返回`NaN`）

   - `string`被解析的值。参数不是字符串，将其转为字符串(使用 `ToString`抽象操作)。字符串开头的空白符将会被忽略
   - `radix` (可选)从 `2` 到 `36`，表示字符串的基数。如 `16` 表示被解析值是十六进制数。注意，`10`不是默认值！

```js
    console.log(parseInt('-12')); //-12
    console.log(parseInt('+12')); //12(+12)
    console.log(parseInt('@12')); //NaN
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
在解析中遇到了`+`、`-` 、`0-9`、`.`、科学记数法中的指数（`e 或 E`）以外的字符，会忽略该字符以及之后的所有字符，返回已经解析到的浮点数;第二个小数点出现也会使解析停止（在这之前的字符都会被解析）;参数首位和末位的空白符会被忽略;如果参数字符串的第一个字符不能被解析成为数字,则 `parseFloat` 返回 `NaN`。

`parseFloat`、`parseInt`是个全局函数,不属于任何对象。
:::

4. `tofixed(n)`
返回改变后的新值，返回包含指定小数点位数的数值字符串。表示取`n`位小数，不够的话自动补`0`
(四舍五入的特点可以用于处理货币，使用时请注意各浏览器兼容问题)

```js
let num = 10.005;
console.log( num.toFixed( 2)); // "10.01"
console.log((1.23633).toFixed(9)) //1.236330000
console.log((1.23633).toFixed(2)) //1.24  注意会四舍五入
console.log((24).toFixed(2)) //24.00
// toPrecision 把数字改变为指针计数法
console.log(13.44443333.toPrecision(2)) //13
var num = new Number(10000);
num.toPrecision(4) // 1.000e+4
```

5. `isInteger()` (ES6新增)
返回一个booean值，用于辨别一个数值是否保存为整数。(有时候，小数位的 0 可能 会让人误以为数值是一个浮点值)(`isSafeInteger()`)

```js
console.log( Number.isInteger( 1)); // true
console.log( Number.isInteger( 1.00)); // true 注意
console.log( Number.isInteger( 1.01)); // false

```

### 转数字的方法

把其他数据类型转换为数字的方法

- 强转换（隐式转换/基于底层机制转换）`Nubmber([value])`
  - 隐式转换都是基于`Number([value])`
    - `isNaN('12px')`先把其他类型值转为数字，再检测；
    - 数学运算: `- * /`(`+`不行，会拼接成字符串) ；`'12px' - 13`
    - `字符串==数字`: 两个等于号比较也会把其他值转换为数字 。`'12px'==12`
- 弱转换（基于额外的方法转换）`parseInt([value])` / `parseFloat([value])`

:::warning
`isNaN(值)` 只是检测这个值是否为有效数字 不是有效数字返回`true` 是返回`false`
:::

1. `parseInt(data,2|8|16)`(内置函数): `data`:是要处理的数据，第二个参数是进制名，可以是`2、8、10、16`进制；
处理的值是字符串，从字符串的左侧开始查找有效数字字符（遇到非有效数字字符串则停止查找）`=>` 如果处理的值不是字符串，需要先转换为字符串然后再开始查找接口。

2. `parseFloat(value)`(内置函数):用以解析浮点数字符串，与`parseInt()`不同的地方是，`parseFloat()` 只应用于解析十进制数字

3. `Number` 直接调用浏览器最底层的数据类型检测机制来完成

> 1. 字符串转数字 一旦字符串出现非有效数字 结果是`NaN` 只有都是有效数字结果才能转换为具体的数字，空字符串转换为`0`
>
> 2. `null`转数字,结果是`0`
>
> ```js
>  console.log(Number(null)) //0
> ```
>
> 3. `boolean` : `true`=> `1` 、`false`=>`0`
>
> ```js
>  console.log(Number(true)) // 1
>  console.log(Number(false)) // 0
> ```
>
> 4. `symbol`不能转数字，否则会报错
> 5. `function`函数和`undefind`转数字，结果是`NaN`
> 6. `Object`对象转数字 先把对象转成字符串(用内置方法`toString()`)，再把字符串转成数字
>     - 普通对象 `{name:lili}`
>     - 数组对象 `[12]`
>     - 其他对象  都是`NaN`
>
> ```js
>     parseInt('') //NaN
>     Number('') //0
>     isNaN('') //false (先把''转为数字(隐式 Number) isNaN
>     parseInt(null) // NaN
>     Number(null) //NaN
>     isNaN(null) //true
>     parseInt('12px') // 12
>     Number('12px') //NaN
>     isNaN('12px') //ture
>     parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null) //'2.6Number'
>     isNaN(Number(!!Number(parseInt('0.8')))) //false
>     typeof !parseInt(null) + !isNaN(null) //"booleantrue"
>
>```
>
4. 隐式转换数字

```js
    + "42";   // 42
    + "010";  // 10
    + "0x10"; // 16
    let num = '12' / 1  //12
    let num = '12' * 1  //12
    let num = '12.01.1' / 1   //NaN
    let num = 'AB' / 1   //NaN
    console.log(num);
```

`and`
一元运算符 `+` 也可以把数字字符串转换成数值：

```js
//单独使用 + 号时，两个变量相加则不会转
    let age = '12'
    let atherage = +age
    console.log(atherage);
```

:::warning
不建议直接实例化 `Number` 对象。 在处理原始数值和引用数值时， `typeof` 和 `instacnceof` 操作符会返回不同的结果，

```js
let numberObject = new Number( 10);
let numberValue = 10;
console.log( typeof numberObject); // "object"
console.log( typeof numberValue); // "number"
console.log( numberObject instanceof Number); // true
console.log( numberValue instanceof Number); // false
```

:::

## String

- 创建

```js
  var str  = 'hello'
  //通过构造函数创建
  var str = new String('hello')
```

- 字符串的属性
  - `length`(`String.prototype.length`): 长度
  - `constructor`(`String.prototype.constructor`): 创建字符串的构造函数

`prototype` 指向函数的原型

```js
// length
let browserType = 'mozilla';
console.log(browserType.length)
console.log(browserType.constructor)
console.log(browserType.prototype)

```

- 长字符串
>
>- 用 `+` 运算符将多个字符串连接
>
>```js
>let longString = "This is a very long string which needs " +
>                 "to wrap across multiple lines because " +
>                 "otherwise my code is unreadable.";
>```
>
>- 反斜杠字符`\`，表示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。 如下所示：
>
>```js
>let longString = "This is a very long string which needs \
>to wrap across multiple lines because \
>otherwise my code is unreadable.";
>```
>
### 基本字符串和字符串对象的区别

- 基本字符串:字符串字面量 (通过单引号或双引号定义) 和 直接调用 `String` 方法(没有通过 `new` 生成字符串对象实例)的字符串都是基本字符串
- 字符串对象:通过 `new` 生成字符串对象实例
- 基本字符串需要调用一个字符串对象才有的方法或者查询值的时候,`JavaScript` 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

```js
var s_prim = "foo";
var s_obj = new String(s_prim);
console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"
```

## String 的方法

### String对象的方法

1. `String()`

2. `String.fromCharCode()`
通过一串 Unicode 创建字符串

```js
String.fromCharCode(65, 66, 67);   // 返回 "ABC"
String.fromCharCode(0x2014);       // 返回 "—"
String.fromCharCode(0x12014);      // 也是返回 "—"; 数字 1 被剔除并忽略
String.fromCharCode(8212);         // 也是返回 "—"; 8212 是 0x2014 的十进制表示
```

2. `String.fromCodePoint()`
通过一串 码点 创建字符串

```js
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
// String.fromCharCode() 方法不能单独获取在高代码点位上的字符
// 另一方面，下列的示例中，可以返回 4 字节，也可以返回 2 字节的字符
// (也就是说，它可以返回单独的字符，使用长度 2 代替 1!）
console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal
```

3. `String.raw()`(实验)
   是一个模板字符串的标签函数
   - `String.raw(callSite, ...substitutions)`
     - `callSite`:一个模板字符串的“调用点对象”。类似{ raw: ['foo', 'bar', 'baz'] }。
     - `...substitutions`:任意个可选的参数，表示任意个内插表达式对应的值。
     - `templateString`:模板字符串，可包含占位符（${...}）。

### `String.prototype` 原型上的方法

都是基于原型的方法`String.prototype.charAt()`

1. `charAt()`
获取字符串的某个字符(截取字符串)

语法：`charAt(index)`:`index`表示截取字符串中的哪个索引;字符串中的每个字符对应字符串的索引(`index`)

```js
var str  = 'hello'
str.charAt(0)
str[0]
return 'cat'.charAt(1); // returns "a"
return 'cat'[1]; // returns "a"
```

1. `charCodeAt()`

2. `concat()` 拼接 把两个字符串拼在一起

```js
 var str  = 'hello'
 var str2= 'world'
 var str3  = str.concat(str2)
```

5. `slice/substr/substring(index,value)` 截取字符串的多个
两个参数 第一个参数表示从哪截取 第二个参数表示截取到哪个索引 (包前不包后)
如果只传一个参数 表示从当前索引截取到末尾

```js
 var  str = 'hello'
 var  str1  = str.slice(0,2) //he
 var  str1  = str.slice(2) //llo
 var str2  = str.substr(0,2)
```

6. `indexOf` 和 `lastIndexOf` 或者字符串的索引
  `indexof`   该字符第一次出现的索引
  `lastIndexOf` 该字符最后一次出现的索引
  如果检测不到索引 则返回-1 (该字符串没有此字符)

```js
var str = 'hello'
console.log(str.indexOf('l')) //2
console.log(str.lastIndexOf('l')) //3
var n= '李先生'
console.log(n.indexOf('王'))
```

7. `trim()` 字符串去除前后的空格

```js
var n = '李小姐 '
var res = n.trim()
console.log(res)
```

8. 字符转换大小写 `toUpperCase` 转大写  `toLowerCase` 转小写

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

1. `toString()` 转为字符串

```js
    let num = 12
    let num2 = num.toString()
    console.log(typeof num2);
```

- 比较操作符(`>/</>=/<=`)

```js
var a = "a";
var b = "b";
if (a < b) // true
  print(a + " is less than " + b);
else if (a > b)
  print(a + " is greater than " + b);
else
  print(a + " and " + b + " are equal.");
```

### 转字符串的方法

- `String()`
String()在转为字符串是一种更加安全的做法，底层使用的是 `toString()` 方法，但针对 `null/undefined/symbols`，有特殊的处理：

```js
    String(thing)
    new String(thing)
    // thing 任何可以被转换成字符串的值。
    console.log(String(12));
    console.log(String(true));
    console.log(String(null));
```

- `toString()`

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

:::warning
只有 `undefind`,`null`,`0`,`NaN`,`''` 在转化成布尔值的时候会被转化成 `false`.
:::

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

- 所有对象都有的方法
  - `toLocaleString()`
  - `toString()`
  - `valueOf()`

### 普通对象

`Object` 是以大括号`{}`表示 对象里面放的是键值对（key:value ）每一项还是以逗号分割 `key`(键名)和`value`(键值)以：分割

### 数组对象

`Array` 内置对象，存储多个不同类型的数据的集合; 数组的定义 `[]`中括号表示数组，每一项以逗号分割

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

- 使用构造函数创建数组

```js
var ary = new Array(); //空数组
var ary1 = new Array(10); //确定长度为10的数组
var ary2 = new Array(0, 'zhangsan', true);
```

- 使用字面量创建数组

```js
var arry = [];
var arry = [1, 2, 3];
arry.length=7;
console.log(arry)

```

- 数组的访问 取值和赋值(通过索引)

```js

//取值
var ary = [1, 2, 3];
console.log(ary[1]);
console.log(arr[arr.length - 1])
//赋值
ary[1] = 4;
```

- `for` 循环遍历数组

```js
var ary = ['张三', '李四', '王五', '王六', '王7'];
for (var i = 0; i < ary.length; i++) {
  ary[i] = '一班的' + ary[i];
}
```

数组的长度 `length` 数组长度的添加 (默认值 `undefind`)
数组长度的减少 会删除多余的元素

#### 方法

- `Array` 方法总览
  - 创建数组的方法
    - `from()` --(es6)
    - `of()`  --(es6)
  - 检索数组的方法
    - `isArray()`
  - 检索数组内容的方法
    - `keys()` --(es6)
    - `values()` --(es6)
    - `entries()` --(es6)
  - 批量复制方法
    - `copyWithin()` --(es6)
  - 填充数组方法
    - `fill()` --(es6)
  - 栈方法(后进先出)
    - `push()`
    - `pop()`
  - 队列方法
    - `unshift()`
    - `shift()`
  - 排序方法
    - `reverse()`
    - `sort()`

##### 对象上方法

1. `Array.from()` 伪数组转真数组
    - `Array.from()`从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 可以通过以下方式来创建数组对象：
      - 伪数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）
      - 可迭代对象（可以获取对象中的元素,如`Map`和 `Set` 等）

```js
// 语法： Array.from(arrayLike[, mapFn[, thisArg]])

// 从 String 生成数组
Array.from('foo');  // [ "f", "o", "o" ]

// 从 Set 生成数组
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);  // [ "foo", "bar", "baz" ]

// 从类数组对象（arguments）生成数组
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);  // [ 1, 2, 3 ]
```

2. `Array.isArray()`

用于确定传递的值是否是一个 `Array`

```js
// 语法： Array.isArray(obj)
Array.isArray([1, 2, 3]);
// true
Array.isArray({foo: 123});
// false
Array.isArray("foobar");
// false
Array.isArray(undefined);
// false
```

3. `Array.of()`
根据一组参数来创建新的数组实例，支持任意的参数数量和类型。
用来判断某个变量是否是一个数组对象。

##### 原型上方法

1. `forEach()` 遍历数组

```js
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});
```

2. `map()`

3. `push` 添加元素到数组的末尾

```js
var newLength = fruits.push('Orange');
// newLength:3; fruits: ["Apple", "Banana", "Orange"]
```

4. `pop()` 删除数组的最后一项元素

```js
var last = fruits.pop(); // remove Orange (from the end)
// last: "Orange"; fruits: ["Apple", "Banana"];
```

5. `unshift` 往数组的最前面添加元素

```js
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];
```

6. `shift()` 删除数组的第一项

```js
var first = fruits.shift(); // remove Apple from the front
// first: "Apple"; fruits: ["Banana"];
```

7. `indexOf(查找第一次出现的索引)` 、`lastIndexOf(查找最后一次出现的索引)` 查找元素在数组中的位置 如果数组中不存在该元素返回-1

```js
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1
```

8. `splice(index,howmany,item1,item2...)` 替换 如果不进行删除操作 `howmamy` 参数给 `0`.
     - `index` 开始位置
     - `howmany` 替换多少项
     - `item1...` 替换成什么

```js
// 删除一个元素
var fruits = ["Strawberry", "Banana", "Mango"]
var removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Mango"]
```

```js
// 删除多个元素
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); // ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n);
// 这是删除项目的方法，n定义要删除的项目数
// 从下标为（pos）的位置，向前到数组的末尾。

console.log(vegetables); // ["Cabbage", "Carrot"] 原始数组已更改
console.log(removedItems); // ["Turnip", "Radish"]
```

```js
// 替换一个元素
var fruits = ["Strawberry", "Banana", "Mango"]
var removedItem = fruits.splice(pos, );
// ["Strawberry", "Mango"]
```

2. `join(符号)` 数组转字符串，字符串会以 join 里面的字符串进行连接 如果不传值会以，号进行连接 不改变原数组
3. `reverse()` 数组倒序
4. `concat` 合并数组 会把两个数组合并 不修改原数组
5. `slice(start,end)` 截取数组 从 `start` 位置截取到 `end` 位置（不包含结束位置） 如果 `start` 是负数 表示从后往前截取
6. `sort` 排序

```js
var b = [12, 3, 25, 20, 17];
// 从小到大排序  a-b 正序  b-a 倒序
b.sort(function (a, b) {
  return a - b;
});
```

11. `filter` 过滤 返回一个符合条件的新数组 不改变原数组 `splice`作删除和filter做删除的区别是`splice`会改变原数组
12. `map` 映射 映射出一个新数组
13. `every` 返回是一个布尔值，只要有一项条件不成立，就返回false
14. `some` 返回也是一个布尔值 只要有一项条件成立则返回true 否则返回`false`
15. `reduce` 收敛 `reduceRight`

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

- 函数需要接受这些参数 来进行一些`js`逻辑处理 函数接受的参数和传递的参数要一一对应 (形参)

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

## 总结

- 字符串和Array都有的方法
  - `toString()`转字符
  - `concat()`拼接
  - `splice()`替换 删除
