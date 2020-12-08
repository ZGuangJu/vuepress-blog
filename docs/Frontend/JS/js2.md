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
目录:

[[toc]]

## JS 中的数据类型

 | 分类                         | 类型        | 类型细分     | 说明                          |
 | :--------------------------- | :---------- | :----------- | :---------------------------- |
 | 基本(原始)数据类型/值类型    |             |              |                               |
 |                              | `Number`    |              | 数字                          |
 |                              | `String`    |              | 字符串                        |
 |                              | `Boolean`   |              | 布尔                          |
 |                              | `Symbol`    |              | 符号                          |
 |                              | `BigInt`    |              | 任意大的整数(ES2015)          |
 |                              | `···`       |              |                               |
 | 引用数据类型                 |             |              |                               |
 |                              | `Object`    | `Object`     | 普通对象 (`{}`、`new Object`) |
 |                              | --          | `Array`      | 数组对象 (`[]`、`new Array`)  |
 |                              | --          | `RegExp`     | 正则对象                      |
 |                              | --          | `Date`       | 日期对象                      |
 |                              | --          | `Math`       | 数学函数对象                  |
 |                              | --          | `Error`      | 错误（特殊对象）              |
 |                              | --          | `···` (细分) |                               |
 |                              | `Function`  | --           | 方法 (严格讲也是`Object`)     |
 | 特殊类型(有时也算作基本类型) |             |              |                               |
 |                              | `Undefined` | --           | 未定义                        |
 |                              | `Null`      | --           | 空                            |
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

```js
    console.log(typeof (1)); //'number'
    console.log(typeof 1); //'number' ---不用括号也可以
    console.log(typeof '1'); //'string'
    console.log(typeof 'abc'); //'string'
    console.log(typeof true); //'boolean'
    console.log(typeof false); //'boolean'
    console.log(typeof undefined); //'undefined'
    console.log(typeof null); //'object'
    console.log(typeof function () { });  //'function'
    console.log(typeof BigInt); //'function'
    console.log(typeof BigInt(900754740991)); //'bigint'
```

所有的值在内存中都是按照二进制存储的，`null`的存储值就是`000`（和`object`的值一样）,所以说用typeof检测数据类型不太准确。

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

- `Object.prototype.toString.call(value)` 检测数据类型**最准确**的方式

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

- 数字的属性
  - `Number.prototype`

## Number 方法

### Number 的对象方法

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

2. `Number.isNaN(value)`
`Number.isNaN()` 方法确定传递的值是否为 `NaN`，并且检查其类型是否为 `Number`。它是原来的全局`isNaN()` 的更稳妥的版本。

```js
```

3. `Number.isInteger(value)` (ES6新增)
    - 要判断此参数是否为整数

返回一个`boolean`值，用于辨别一个数值是否保存为整数。(有时候，小数位的`0` 可能 会让人误以为数值是一个浮点值)(`isSafeInteger()`)

```js
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger("10");      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
```

```js
console.log( Number.isInteger( 1)); // true
console.log( Number.isInteger( 1.00)); // true 注意
console.log( Number.isInteger( 1.01)); // false

```

:::warning
`parseInt`和`parseFloat` 、`isNaN()`也是js的全局内置对象

`JavaScript`能够准确表示的整数范围在`-2^53`到`2^53`之间（不含两个端点），超过这个范围，无法精确表示这个整数
:::

4. `Number.parseInt(string, radix)`
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

 \* 字符串首位是`+ -`，可以识别，其他字符不能，会停止解析，并返回之前解析完成的值

5. `parseFloat(string)`
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

### Number 的原型方法

1. `Number.prototype.toFixed(digits)`
   - `digits`: 小数点后数字的个数； `0` 到 `20` （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 `0`。

返回改变后的新值，返回包含指定小数点位数的数值字符串。表示取`n`位小数，不够的话自动补`0`(四舍五入的特点可以用于处理货币，使用时请注意各浏览器兼容问题)

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

2. `numObj.toString([radix])`
   - `radix`: 指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 `radix` 参数，则默认值为 `10`。
`toString()` 方法返回指定 `Number` 对象的字符串表示形式。返回一个表示该数值对象的字符串。覆盖了 `Object.prototype.toString()` 方法。

```js
var count = 10;
console.log(count.toString());    // 输出 '10'
console.log((17).toString());     // 输出 '17'
console.log((17.2).toString());   // 输出 '17.2'
var x = 6;
console.log(x.toString(2));       // 输出 '110'
console.log((254).toString(16));  // 输出 'fe'
console.log((-10).toString(2));   // 输出 '-1010'
console.log((-0xff).toString(2)); // 输出 '-11111111'
```

3. `Number.prototype.valueOf()`
`valueOf()` 方法返回一个被 `Number` 对象包装的原始值。 返回该数值对象的原始值。覆盖了 `Object.prototype.valueOf()` 方法。

```js
var numObj = new Number(10);
console.log(typeof numObj); // object
var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

\* 该方法通常是由 `JavaScript` 引擎在内部隐式调用的，而不是由用户在代码中显式调用的。

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

3. `Number(value)` 直接调用浏览器最底层的数据类型检测机制来完成

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
  - `length`(`String.prototype.length`): 返回了字符串的长度。
  - `constructor`(`String.prototype.constructor`): 创建字符串的构造函数
  - `prototype` 指向函数的原型

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

## String 方法

### String 的对象方法

1. `String(value)`

将`value`转换为字符串

```js
    console.log(String(1)); //'1'
    console.log(String(12.15)); //'12.15'
    console.log(String('聚')); //'聚'
    console.log(String(false)); //'false'
    console.log(String(true)); //'true'
    console.log(String({ a: 1, b: 2 })); //'[object Object]'
    console.log(String(undefined)); //'undefined'
    console.log(String(null)); //'null'
    console.log(String(function () { }));  //'function () { }'
    console.log(String([1, 2, 3, 4])); //'1,2,3,4'
    console.log(String(BigInt(900754740991))); //'900754740991'
```

2. `String.fromCharCode()` (静态)

通过一串 `Unicode` 创建字符串,该方法返回一个字符串，而不是一个  `String` 对象。

```js
String.fromCharCode(65, 66, 67);   // 返回 "ABC"
String.fromCharCode(0x2014);       // 返回 "—"
String.fromCharCode(0x12014);      // 也是返回 "—"; 数字 1 被剔除并忽略
String.fromCharCode(8212);         // 也是返回 "—"; 8212 是 0x2014 的十进制表示
```

3. `String.fromCodePoint()` (实验性)

通过一串 “码点” 创建字符串

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

4. `String.raw(callSite, ...substitutions)`(实验性)

```js
String.raw(callSite, ...substitutions)
//或
String.raw `templateString`
```

是一个模板字符串的标签函数

- 参数
  - `callSite`:一个模板字符串的`调用点对象`。类似`{ raw: ['foo', 'bar', 'baz'] }`。
  - `...substitutions`:任意个可选的参数，表示任意个内插表达式对应的值。
  - `templateString`:模板字符串，可包含占位符`${...}`。

### String 的原型方法

都是基于原型的方法,如:`String.prototype.charAt()`

1. `String.prototype.charAt(index)` 不改变原字符串，返回一个新字符串

从一个字符串中返回指定的字符。就是获取字符串的某个字符(截取字符串)

- 参数
  - `index`:索引,字符串中的每个字符对应字符串的索引(`index`),一个介于`0`和字符串长度减`1`之间的整数。 (`0~length-1`)。如果没有提供索引，`charAt()` 将使用`0`,如果`index`超出原字符串索引值，将返回一个空字符串。

```js
var str  = 'hello'
str.charAt(0)
str[0]
return 'cat'.charAt(1); // returns "a"
return 'cat'[1]; // returns "a"
var anyString = "Brave new world";
var end = anyString.charAt(0)
var end2 = anyString.charAt(20)
console.log(anyString); //"Brave new world"
console.log(end); // 'B'
console.log(end2); //''
```

2. `String.prototype.concat(str1,str2, [...strN])` 有返回值,不改变原字符串，返回一个新字符串

拼接,把两个字符串拼在一起，返回一个新的字符串，包含参数所提供的连接字符串。

- 参数
  - `str1,str2 ,[...strN]`:需要连接到 `str` 的字符串。

```js
var str = 'hello'
var str1 = 'world'
var str2 = '!'
var str3 = str.concat(str1, str2)
console.log(str) //'hello'
console.log(str1) //'world'
console.log(str2) //'!'
console.log(str3) //'helloworld!'
let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"
"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```

强烈建议使用赋值操作符（`+`, `+=`）代替 `concat()` 方法。

3. `String.prototype.includes(searchString[, position])`(ES6)不改变原字符，返回`boolean`值

用于判断一个字符串是否包含在另一个字符串中，根据情况返回 `true` 或 `false`。

- 参数
  - `searchString`:要在此字符串中搜索的字符串。
  - `position`(可选):从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 `0`。

```js
'Blue Whale'.includes('blue'); //  false 区分大小写
 var str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));       // true
console.log(str.includes('Tobe'));       // false 注意空格
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('to be', 1));    // true
console.log(str.includes('TO BE'));       // false
```

兼容补丁

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

:::warning 注
`includes()` 方法是区分大小写的
:::

4. `String.prototype.endsWith(searchString[, length])`(ES6)不改变原字符，返回`boolean`值

用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`。

- 参数
  - `searchString`:要搜索的子字符串。
  - `length`(可选):作为 `String` 的长度。默认值为 `String.length`。(不理解，要测试)

```js
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false

var str = "To be, or not to be, that is the question.";

alert( str.endsWith("question.") );  // true
alert( str.endsWith("to be") );      // false
alert( str.endsWith("to be", 19) );  // true
```

兼容补丁

```js
if (!String.prototype.endsWith) {
 String.prototype.endsWith = function(search, this_len) {
  if (this_len === undefined || this_len > this.length) {
   this_len = this.length;
  }
  return this.substring(this_len - search.length, this_len) === search;
 };
}
```

:::warning 注
`endsWith()` 方法是区分大小写的,大小写敏感
:::

5. `String.prototype.indexOf(searchValue [, fromIndex])` 不改原字符，有返回值--索引值

返回值是调用它的 `String` 对象中**第一次**出现的指定值的索引，从 `fromIndex`处进行搜索。如果未找到该值，则返回 `-1`。(字符串中的字符被从左向右索引。第一个字符的索引（`index`）是 `0`，变量名为 `stringName` 的字符串的最后一个字符的索引是 `stringName.length - 1` )。

- 参数
  - `searchValue`:要被查找的字符串值。
  - `fromIndex` (可选):数字表示开始查找的位置。可以是任意整数，默认值为`0`。

:::details 参数详情

- `searchValue`:要被查找的字符串值。

如果没有提供确切地提供字符串，`searchValue` 会被强制设置为 `"undefined"`， 然后在当前字符串中查找这个值。
举个例子：`'undefined'.indexOf()` 将会返回`0`，因为 `undefined` 在位置0处被找到，但是 `'undefine'.indexOf()` 将会返回 `-1` ，因为字符串 `'undefined'` 未被找到。

- `fromIndex` (可选):数字表示开始查找的位置。可以是任意整数，默认值为`0`。

如果 `fromIndex` 的值小于 `0`，或者大于 `str.length`，那么查找分别从 `0` 和`str.length` 开始。（译者注：  `fromIndex` 的值小于 `0`，等同于为空情况； `fromIndex` 的值大于或等于 `str.length` ，那么结果会直接返回 `-1` 。）
:::

:::details 返回值
查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 -1。

若被查找的字符串 `searchValue` 是一个空字符串，将会产生“奇怪”的结果。如果 `fromIndex` 值为空，或者 `fromIndex` 值小于被查找的字符串的长度，返回值和以下的 `fromIndex` 值一样：

```js
'hello world'.indexOf('') // 返回 0
'hello world'.indexOf('', 0) // 返回 0
'hello world'.indexOf('', 3) // 返回 3
'hello world'.indexOf('', 8) // 返回 8
```

另外，如果 fromIndex 值大于等于字符串的长度，将会直接返回字符串的长度（str.length）：

```js
'hello world'.indexOf('', 11) // 返回 11
'hello world'.indexOf('', 13) // 返回 11
'hello world'.indexOf('', 22) // 返回 11
```

:::

```js
"Blue Whale".indexOf("Blue")       // 返回 0
"Blue Whale".indexOf("Blute")      // 返回 -1
"Blue Whale".indexOf("Whale", 0)   // 返回 5
"Blue Whale".indexOf("Whale", 5)   // 返回 5
"Blue Whale".indexOf("", -1)       // 返回 0
"Blue Whale".indexOf("", 9)        // 返回 9
"Blue Whale".indexOf("", 10)       // 返回 10
"Blue Whale".indexOf("", 11)       // 返回 10
//使用indexOf() 和 lastIndexOf()
var anyString = "Brave new world";
console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));// logs 8
console.log("The index of the first w from the end is " + anyString.lastIndexOf("w"));// logs 10
console.log("The index of 'new' from the beginning is " + anyString.indexOf("new")); // logs 6
console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));// logs 6
```

:::warning 注
`indexOf` 方法是区分大小写的。例如，下面的表达式将返回 `-1`：

```js
"Blue Whale".indexOf("blue")      // 返回 -1
```

- 注意 `0` 并不会被当成 `true` ，`-1` 不会被当成 `false` 。所以当检测某个字符串是否存在于另一个字符串中时，可使用下面的方法：

```js
'Blue Whale'.indexOf('Blue') !== -1    // true
'Blue Whale'.indexOf('Bloe') !== -1    // false
~('Blue Whale'.indexOf('Bloe'))        // 0, 这是一种错误用法
```

[(MDN详情](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf>)
:::

6. `String.prototype.lastIndexOf(searchValue[, fromIndex])`不改原字符，有返回值--索引值

返回调用`String`对象的指定值最后一次出现的索引，在一个字符串中的指定位置 `fromIndex`处从后向前搜索。如果没找到这个特定值则返回`-1` 。

- 参数
  - `searchValue`:一个字符串，表示被查找的值。如果searchValue是空字符串，则返回`fromIndex`。
  - `fromIndex`(可选):待匹配字符串`searchValue`的开头一位字符从 `String`的第`fromIndex`位开始向左回向查找。`fromIndex`默认值是 `+Infinity`。如果 `fromIndex >= str.length` ，则会搜索整个字符串。如果 `fromIndex < 0` ，则等同于 `fromIndex == 0`。

```js
'canal'.lastIndexOf('a');     // returns 3 （没有指明fromIndex则从末尾l处开始反向检索到的第一个a出现在l的后面，即index为3的位置）
'canal'.lastIndexOf('a', 2);  // returns 1（指明fromIndex为2则从n处反向向回检索到其后面就是a，即index为1的位置）
'canal'.lastIndexOf('a', 0);  // returns -1(指明fromIndex为0则从c处向左回向检索a发现没有，故返回-1)
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0（指明fromIndex为-5则视同0，从c处向左回向查找发现自己就是，故返回0）
'canal'.lastIndexOf('c', 0);  // returns 0（指明fromIndex为0则从c处向左回向查找c发现自己就是，故返回自己的索引0）
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2
```

:::warning
`lastIndexOf` 方法区分大小写。例如，下面的表达式返回 `-1`：

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

:::
7. `String.prototype.match(regexp)` 有返回值

检索返回一个字符串匹配正则表达式的结果。

- 参数
  - `regexp`:一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 `RegExp`,如果你没有给出任何参数并直接使用`match()` 方法 ，你将会得到一 个包含空字符串的 `Array ：[""]` 。

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
// expected output: Array ["T", "I"]
```

8. `String.prototype.padEnd(targetLength [, padString])` 有返回值

用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充

- 参数
  - `targetLength`:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
  - `padString`(可选):填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 `" "`（`U+0020`）。

- 返回值:在原字符串末尾填充指定的填充字符串直到目标长度所形成的新字符串

```js
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```

9. `String.prototype.padStart(targetLength [, padString])` 有返回值

用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。(正和padEnd相反)

- 参数
  - `targetLength`:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
  - `padString`(可选):填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 `" "`（`U+0020`）。

- 返回值:在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串。

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

10. `String.prototype.repeat(count)`

返回指定重复次数的由元素组成的字符串对象。

- 参数
  - `count`:介于 `0` 和 `+Infinity` 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。

- 返回值: 包含指定字符串的指定数量副本的新字符串。

```js
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity --重复计数必须为正且小于无穷大
({toString : () => "abc", repeat : String.prototype.repeat}).repeat(2)
//"abcabc",repeat是一个通用方法,也就是它的调用者可以不是一个字符串对象.
```

11. `String.prototype.replace(regexp|substr, newSubStr|function)`

返回一个由替换值（`replacement`）替换部分或所有的模式（`pattern`）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果`pattern`是字符串，则仅替换第一个匹配项。

**原字符串不会改变。**

- 参数
  - `regexp (pattern)`:一个`RegExp` 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
  - `substr (pattern)`:一个将被 `newSubStr` 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。
  - `newSubStr (replacement)`:用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数。
  - `function (replacement)`:一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的指定一个函数作为参数。

- 返回值:一个部分或全部匹配由替代模式所取代的新的字符串。

替换字符串可以插入特殊变量名：[MDN详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

12. `String.prototype.search(regexp)`

`search()` 方法执行正则表达式和 `String` 对象之间的一个搜索匹配。

- 参数
  - `regexp`:一个正则表达式（`regular expression`）对象; 如果传入一个非正则表达式对象 `regexp`，则会使用 `new RegExp(regexp)` 隐式地将其转换为正则表达式对象。

- 返回值:如果匹配成功，则 `search()` 返回正则表达式在字符串中首次匹配项的索引;否则，返回 `-1`。

```js
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation
```

13. `String.prototype.slice(beginIndex[, endIndex])`

`slice()` 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

- 参数
  - `beginIndex`:从该索引（以 `0` 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 `strLength + beginIndex` 看待，这里的`strLength` 是字符串的长度（例如， 如果 `beginIndex` 是 `-3` 则看作是：`strLength - 3`）
  - `endIndex`(可选):在该索引（以 `0` 为基数）处结束提取字符串。如果省略该参数，`slice()` 会一直提取到字符串末尾。如果该参数为负数，则被看作是 `strLength + endIndex`，这里的 `strLength` 就是字符串的长度(例如，如果 `endIndex` 是 `-3`，则是, `strLength - 3`)。

- 返回值: 返回一个从原字符串中提取出来的新字符串

- `slice()` 提取的新字符串包括`beginIndex`但不包括 `endIndex`(包前不包后)

下面例子使用 `slice()` 创建了一个新字符串。

```js
var str1 = 'The morning is upon us.', // str1 的长度 length 是 23。
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2); // 输出：he morn
console.log(str3); // 输出：morning is upon u
console.log(str4); // 输出：is upon us.
console.log(str5); // 输出：""
```

下面的例子在使用`slice()` 时传入了负值作为索引。

```js
var str = 'The morning is upon us.';
str.slice(-3);     // 返回 'us.'
str.slice(-3, -1); // 返回 'us'
str.slice(0, -1);  // 返回 'The morning is upon us'
```

14. `String.prototype.split([separator[, limit]])`

`split()` 方法使用指定的分隔符字符串将一个`String`对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

- 参数
  - `separator`指定表示每个拆分应发生的点的字符串。`separator` 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。
  - `limit`一个整数，限定返回的分割片段数量。当提供此参数时，`split` 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

- 返回值:返回源字符串以分隔符出现位置分隔而成的一个`Array`

例

```js
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log("The array has " + arrayOfStrings.length + " elements: ");

  for (var i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + " / ");
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var space = " ";
var comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
//输出
//The original string is: "Oh brave new world that has such people in it."
//The separator is: " "
//The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it. /

//The original string is: "Oh brave new world that has such people in it."
//The separator is: "undefined"
//The array has 1 elements: Oh brave new world that has such people in it. /

//The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
//The separator is: ","
//The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
```

:::details 更多

- 移出字符串中的空格

下例中，`split()` 方法会查找`0` 或多个空白符接着的分号，再接着 `0` 或多个空白符”模式的字符串，找到后，就将空白符从字符串中移除，`nameList` 是 `split` 的返回数组。

```js
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

var re = /\s*(?:;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);
```

上例输出两行，第一行输出原始字符串，第二行输出结果数组。

```js
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

- 限制返回值中分割元素数量

下例中，`split`查找字符串中的 `0` 或多个空格，并返回找到的前 `3` 个分割元素（`splits`）。

```js
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits); //["Hello", "World.", "How"]
```

- 使用一个数组来作为分隔符

```js
const myString = 'this|is|a|Test';
const splits = myString.split(['|']);

console.log(splits); //["this", "is", "a", "Test"]

const myString = 'ca,bc,a,bca,bca,bc';

const splits = myString.split(['a','b']);
// myString.split(['a','b']) is same as myString.split(String(['a','b']))

console.log(splits);  //["c", "c,", "c", "c", "c"]
```

- 用split()来颠倒字符串顺序

```js
const str = 'asdfghjkl';
const strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split()返回一个数组，可以在该数组上应用reverse()和join()
```

:::
15. `String.prototype.startsWith(searchString[, position])` 有返回值

`startsWith()` 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 `true` 或 `false`。

- 参数
  - `searchString`:要搜索的子字符串。
  - `position` (可选):在 `str` 中搜索 `searchString` 的开始位置，默认值为 `0`。

- 返回值:如果在字符串的开头找到了给定的字符则返回`true`；否则返回`false`。

```js
var str = "To be, or not to be, that is the question.";

alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true
```

16. `String.prototype.substring(indexStart,[indexEnd])`
`substring()` 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。`substring` 提取从 `indexStart` 到 `indexEnd`（不包括）之间的字符。

- 参数
  - `indexStart`:需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。
  - `indexEnd`:可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

:::details 参数详解
`substring` 提取从 `indexStart` 到 `indexEnd`（不包括）之间的字符。特别地：

- 如果 `indexStart` 等于 `indexEnd`，`substring` 返回一个空字符串。
- 如果省略 `indexEnd`，`substring` 提取字符一直到字符串末尾。
- 如果任一参数小于 `0` 或为 `NaN`，则被当作 `0`。
- 如果任一参数大于`stringName.length`，则被当作 `stringName.length`。
- 如果 `indexStart` 大于 `indexEnd`，则 `substring` 的执行效果就像两个参数调换了一样。见下面的例子。
:::

- 返回值:包含给定字符串的指定部分的新字符串。

```js
var anyString = "Mozilla";
// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));
// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));
// 输出 ""
console.log(anyString.substring(4,4));
// 输出 "Mozill"
console.log(anyString.substring(0,6));
// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

17. `String.prototype.toLocaleLowerCase()`
`toLocaleLowerCase()`方法根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。

```js
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale)
str.toLocaleLowerCase([locale, locale, ...])
```

- 参数
  - `locale` (可选):参数 `locale` 指明要转换成小写格式的特定语言区域。 如果以一个数组 `Array`形式给出多个`locales`,  最合适的地区将被选出来应用（参见`best available locale`）。默认的`locale`是主机环境的当前区域(`locale`)设置。(一般不用参数)
- 返回值:根据任何特定于语言环境的案例映射规则将被调用字串转换成小写格式的一个新字符串。

:::details 详解
`toLocaleLowerCase()` 方法返回根据任意区域语言大小写映射集而转换成小写格式的字符串。`toLocaleLowerCase()` 并不会影响字符串原本的值。在大多数情况下，该方法和调用 `toLowerCase()`的结果相同，但是在某些区域环境中，比如土耳其语，它的大小写映射并不遵循在`Unicode`中的默认的大小写映射，因此会有一个不同的结果。
:::

```js
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
```

18. `String.prototype.toLocaleUpperCase()` 转大写
`toLocaleUpperCase()` 方法根据本地主机语言环境把字符串转换为大写格式，并返回转换后的字符串。

```js
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale)
str.toLocaleUpperCase([locale, locale, ...])
```

- 参数
  - `locale` (可选):参数 `locale` 指明要转换成大写格式的特定语言区域。 如果以一个数组 `Array`形式给出多个`locales`,  最合适的地区将被选出来应用（参见`best available locale`）。默认的`locale`是主机环境的当前区域(`locale`)设置。(一般不用参数)
- 返回值:根据任何特定于语言环境的案例映射规则将被调用字串转换成大写格式的一个新字符串。

19. `String.prototype.toLowerCase()`

`toLowerCase` 会将调用该方法的字符串值转为小写形式，并返回。`toLowerCase` 不会影响字符串本身的值。

- 参数
  - 无参数

- 返回值:一个新的字符串，表示转换为小写的调用字符串。

```js
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans

​console.log( "ALPHABET".toLowerCase() );
// "alphabet"
```

20. `String.prototype.toString()`

`toString()` 方法返回指定对象的字符串形式。字符串实例化为字符串对象后，用本方法转为基本字符串。

- 参数
  - 无参数
- 返回值:一个表示调用对象的字符串。

`String` 对象覆盖了`Object` 对象的 `toString`方法；并没有继承 `Object.toString()`。对于 `String` 对象，`toString` 方法返回该对象的字符串形式，和 `String.prototype.valueOf()` 方法返回值一样。

```js
    var x = new String("Hello world");
    // 以上是实例化为字符串对象了
    console.log(x); //String {"Hello world"}0: "H"1: "e"2: "l"3: "l"4: "o"5: " "6: "w"7: "o"8: "r"9: "l"10: "d"length: 11__proto__: String[[PrimitiveValue]]: "Hello world"
    console.log(x.toString()); // test.html:53 Hello world
```

(明天继续·······)

1. `String.prototype.trimStart()` 有返回值

从字符串的开头(左侧)删除空格。`trimLeft()` 是此方法的别名。

返回值是一个新字符串，表示从其开头（左端）除去空格的调用字符串。`trimStart()` / `trimLeft()` 方法移除原字符串左端的连续空白符并返回一个新字符串，并不会直接修改原字符串本身。

- 别名
`trimLeft()`
为了与 `String.prototype.padStart` 等函数保持一致，标准方法名称为`trimStart`。 但是，出于 `Web` 兼容性原因，`trimLeft` 仍然是 `trimStart` 的别名

```js
var str = "   foo  ";
console.log(str.length); // 8
str = str.trimStart()    // 等同于 str = str.trimLeft();
console.log(str.length); // 5
console.log(str);        // "foo  "
```

1. `slice/substr/substring(index,value)` 截取字符串的多个
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

## 常用内置对象

1. `parseInt(string, radix)`
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

2. `parseFloat(string)`
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

3. `eval(string)`
`eval()` 函数会将传入的字符串当做 `JavaScript` 代码进行执行。

```js
console.log(eval('2 + 2')); // expected output: 4

console.log(eval(new String('2 + 2')));// 2 + 2

console.log(eval('2 + 2') === eval('4'));//  true
```

## 总结

- `String`和`Array`都有的方法
  - `toString()`转字符
  - `concat()`拼接
  - `splice()`替换 删除
