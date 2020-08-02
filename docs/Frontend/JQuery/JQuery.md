# jQuery

:::tip 介绍
[jQuery的官网](http://jquery.com/)

jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。
:::

## jQ 版本问题

:::tip 版本
[官网下载地址](http://jquery.com/download/) ,[各版本集合](https://wwa.lanzous.com/i87sbf82jmb)

jQuery版本有很多，分为1.x 2.x 3.x

1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。

:::

- 大版本分类：

    1.x版本：能够兼容IE678浏览器
    2.x版本：不能兼容IE678浏览器
    3.x版本：不能兼容IE678浏览器，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）

- 关于压缩版和未压缩版：

    jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有颗阅读性。
    jquery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。

## jQ 使用方法
:::tip 使用
使用jQuery的三个步骤：

1.引入jQuery文件

2.入口函数

3.功能实现
:::

1. 在`script`标签中以 `CDN` 引入项目或页面

2. 在`script`标签中引入本地`jquery`文件
:::warning 注
引入和写jq代码要在两个`script`标签里

`script`引入标签在上面，写代码的`script`标签在下面
:::
## jQ 入口函数

:::warning 注
- 入口函数的目的：是为了拿到页面中的所有元素
- jQuery入口函数与js入口函数的对比：

JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。
:::

- jQ 原理

```js
//jQuery文件结构.
//其实是一个自执行函数.
   (function(){
  //   window.jQuery = window.$ = jQuery;
   }());
//a.引入一个js文件,是会执行这js文件中的代码的.
//console.log(num);//10
//b.jQuery文件是一个自执行函数,执行这个jQUERY文件中的代码,其实就是执行这个自执行函数.
//c.这个自执行文件就是给window对象添加一个jQuery属性和$属性.
//console.log(window);
//d.$其实和jQuery是等价的,是一个函数.

/*
$是一个函数
参数传递不同,效果也不一样.
如果参数传递的是一个匿名函数-入口函数
*/
  // $(function(){
  // });

  // 如果参数传递的是一个字符串-选择器/创建一个标签
  //$('#one');
  //$('<div>啦啦,我是一个div</div>');

  // 如果参数是一个dom对象,那他就会把dom对象转换成jQuery对象.
  //$(dom对象);

```


1. jq写法
```js


// 1. jq固定写法一
jQuery(document).ready(function () {
            alert('hello 1')
    //代码内容
        })

// 2. jq固定写法二
$(document).ready(function(){
    //代码内容
            alert('hello 2')
})

// 3. 简写一
jQuery(function(){
    //代码内容
            alert('hello 3')
})
// 4. 简写二
$(function(){
    //代码内容
            alert('hello 4')
})
```
2. 对比原生 `js` 的写法

```js

window.onload = function(ev){
    //代码内容
}
```
## jQ和原生的对比

1. 加载模式对比
```html
    <script src="./jquery-1.12.4.js"></script>
    <script>
        // 1. 通过原生的js入口函数可以拿到DOM元素
        window.onload = function (ev) {
            var img = document.getElementsByTagName('img')[0];
            console.log(img);
        // 2. 通过原生的js入口函数可以拿到DOM元素的宽高

            var width = window.getComputedStyle(img).width;
            console.log("onload", width);
        }
        // 1. 通过jquery 入口函数可以拿到DOM元素
        $(document).ready(function () {
            var $img = $('img')[0];
            console.log($img);
        // 2. 通过jquery 入口函数可以拿到DOM元素
            var $width = $img.width;
            console.log("ready", $width);

        })
   </script>
···
<body>
    <img src="https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg" alt="">
</body>
```
2. 多个入口函数时，是否覆盖


```html
    <script src="./jquery-1.12.4.js"></script>
    <script>
        // 1. 原生的js如果编写了多个入口函数，后面编写的会覆盖前面编写的
        window.onload = function (ev) {
            alert('hello 1')
        };
        window.onload = function (ev) {
            alert('hello 2')

        }
        // 2. jquery中编写多个入口函数，后面的不会覆盖前面的
        $(document).ready(function () {
            alert('hello 1')
        });
        $(document).ready(function () {
            alert('hello 2')
        })
    </script>
···
<body>
    <img src="https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg" alt="">
</body>
```

:::warning 区别：

- 元素`js`和`jquery`入口函数的加载模式不同
    1. 原生`js`会等到`DOM`元素加载完毕，并且图片也加载完毕才会执行。
    2. `jqurey`会等到`DOM`元素加载完毕，但不会等到图片也加载完毕就会执行。
- 多个入口函数时，是否会覆盖
    1. 原生的`js`如果编写了多个入口函数，后面编写的会覆盖前面编写的
    2. `jquery`中编写多个入口函数，后面的不会覆盖前面的
- jQuery 对象与 `DOM` 对象的区别（重点）

    1. `DOM`对象：使用`Javascript`中的方法获取页面中的元素返回的对象就是dom对象。

    2. `jQuery`对象：`jquery`对象就是使用`jquery`的方法获取页面中的元素返回的对象就是`jQuery`对象。

    3. `jQuery`对象其实就是`DOM`对象的包装集（包装了DOM对象的集合[伪数组]）

    4. `DOM`对象与`jQuery`对象的方法不能混用。
:::

## jQuery 冲突和自定义符号

`$` 符号的使用权，假设，引入两个库都用`$`符号，会用冲突，理论上是哪个后引入，哪个生效，因为后面的把前面的替换掉了
```js
    <script src="./test.js"> </script>
    <script src="./jquery-1.12.4.js"></script>
```

- 解决方法

1. 释放`$`的使用权
:::warning 注
释放操作必须在编写其他`jquery`代码之前写,释放以后就不能使用`$`符号了，改用`jQuery`
:::

```js
        // 释放$的使用权，
        jQuery.noConflict();
        // $符号改为 jQuery
        jQuery(function () {
            //代码内容
            alert('hello')
        })

```
2. 自定义一个符号

```js
    var nj = jQuery.noConflict();
        // $符号改为自定义符号nj
        nj(function () {
            //代码内容
            alert('hello')
        })
```

## jQ 核心函数

```js
  $();// 就代表调用 jQ 核心函数
```
- `jQuery` 的核心函数可以接收什么
可以接收：函数、字符串、字符串选择器、代码片段、`DOM`元素

```html
<script>
        // 1. 接收一个函数
        $(function () {
            ···
        });

        $(function () {
            alert("2")
            // 2. 接收一个字符串

            // 2.1 接收一个字符串选择器
            // 返回一个jQuery对象，对象中保存了找到的DOM元素
            //会把选择器找到的所有元素，包装到jq对象中返回给我们
            var $box1 = $('.box1')
            var $box2 = $('#box2')
            console.log($box1);
            console.log($box2);
            // 2.2 接收一个代码片段
            // 返回一个jQuery对象，对象中保存的创建的DOM元素
            // 把片段中的所有DOM元素创建出来，包装成jq对象返回给我们
            var $p = $('<p>我是段落</p>')
            console.log($p);
            $box1.append($p)
            // 3. 接收一个DOM元素
            // 会被包装成一个jQuery对象返回给我们
            var span = document.getElementsByTagName('span')[0]
            console.log(span);
            var $span = $(span)
            console.log($span);
        })
    </script>
</head>
<body>
    <div class="box1"></div>
    <div id="box2"></div>
    <span>我是span</span>
</body>
```

## jQ 对象的本质是什么

1. 什么是jQuery对象

    jq对象是一个伪数组

2. 什么是伪数组

    有0到length-1的属性，并具有length的属性

:::warning jq对象和dom对象(重要)
1.DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象;

2.jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象;

3.jQuery对象其实就是DOM对象的包装集包装了DOM对象的集合（伪数组）;

4.DOM对象与jQuery对象的方法不能混用。
:::

DOM对象转换成jQuery对象：【联想记忆：花钱】

```js
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象
```
jQuery对象转换成DOM对象：
```js
var $li = $("li");
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)
```

## jQ 选择器

- 基本选择器

| 名称 | 用法 | 描述 |
|:-|:-|:-|
ID选择器 | $(“#id”) | 获取指定ID的元素
类选择器 | $(“.class”) | 获取同一类class的元素
标签选择器 | $(“div”) | 获取同一类标签的所有元素
并集选择器 | $(“div,p,li”) | 使用逗号分隔，只要符合条件之一就可。
交集选择器 | $(“div.redClass”) | 获取class为redClass的div元素
|备注：| 跟css的选择器用法一模一样|

- 层级选择器

名称 | 用法 | 描述
|:-|:-|:-|
子代选择器 | $(“ul>li”) | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素
后代选择器 | $(“ul li”) | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等

- 过滤选择器

名称 | 用法 | 描述
|:-|:-|:-|
:eq（index） | $(“li:eq(2)”).css(“color”, ”red”) | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。
:odd | $(“li:odd”).css(“color”, ”red”) | 获取到的li元素中，选择索引号为奇数的元素
:even | $(“li:even”).css(“color”, ”red”) | 获取到的li元素中，选择索引号为偶数的元素

- 筛选选择器(方法)

名称 | 用法 | 描述
|:-|:-|:-|
children(selector) | $(“ul”).children(“li”) | 相当于$(“ul>li”)，子类选择器
find(selector) | $(“ul”).find(“li”) | 相当于$(“ul li”),后代选择器
siblings(selector) | $(“#first”).siblings(“li”) | 查找兄弟节点，不包括自己本身。
parent() | $(“#first”).parent() | 查找父亲
eq(index) | $(“li”).eq(2) | 相当于$(“li:eq(2)”),index从0开始
next() | $(“li”).next() | 找下一个兄弟
prev() | $(“li”).prev() | 找上一次兄弟

## jQ 方法--静态和实例

- 什么是静态方法

直接添加到类上的就是静态方法

特点：通过类名调用

- 什么是实例方法

添加到这个类的原型上的就是实例方法

特点：通过实例调用

```html
 <script>
        // 1. 定义一个方法
        function aClass() { }
        // 2.1 给这个类添加一个静态方法
        aClass.staticMethod = function () {
            alert('staticMethod')
        }
        // 2.2 调用静态方法
        aClass.staticMethod();
        // 3.1 给这个类添加一个实例方法
        aClass.prototype.instanceMethod = function () {
            alert('instanceMethod')
        }
        // 实例方法通过类的实例调用
        // 创建一个实例（创建一个对象）
        var a = new aClass()

        // 3.2 通过实例调用实例方法
        a.instanceMethod()
    </script>
```

## jQ 静态方法

- each方法

```html
<script>
        var arr = [1, 2, 3, 5, 8, 5, 1]
        var obj = { 0: 1, 1: 8, 2: 89, 3: 9 }
        /*
        1.原生js的forEach方法
        第一个参数：遍历到的元素
        第二个参数：当前遍历元素的索引

        注意
        原生的forEach方法只能遍历数组，不能遍历伪数组
        */

        // 原生forEach方法遍历数组
        arr.forEach(function (value, index) {
            // console.log(value, index);
        })

        // 原生forEach方法遍历伪数组
        // ojb.forEach(function (value, index) {
        //     console.log(value, index); //不能调用，报错
        // })

        /*
        2. 利用jq的each静态方法遍历数组
        第一个参数：当前遍历元素的索引
        第二个参数：遍历到的元素

        */

        // 用jq的each遍历数组
        // $.each(arr, function (index, value) {
        //     console.log(index, value);
        // })

        // 用jq的each遍历伪数组
        $.each(obj, function (index, value) {
            console.log(index, value);
        })
    </script>
```

- map方法

```html
 <script>
        var arr = [1, 2, 3, 5, 8, 5, 1] //数组
        var obj = { 0: 1, 1: 8, 2: 89, 3: 9 } //伪数组
        /*
        1. 用原生js的map方法

        第一个参数：当前遍历到的元素
        第二个参数：当前遍历到的索引
        第三个参数：当前遍历到的数组
        注意：和原生的forEach一样，不能遍历伪数组
        */
        // 原生js map方法遍历数组
        arr.map(function (value, index, array) {
            // console.log(value, index, array);
        })
        // 原生js map方法遍历伪数组
        // obj.map(function (value, index) {
        //     console.log(value, index); //报错
        // })
        /*
        2. jQ 的map方法

        第一个参数：当前遍历到的数组
        第二个参数：每遍历一个元素之后，执行的回调函数
        回调函数内的参数：
        第一个参数：当前遍历到的元素
        第二个参数：当前遍历到的索引
        */

        // jQ map方法遍历数组
        // $.map(arr, function (value, index) {
        //     console.log(value, index);
        // })

        // jQ map方法遍历伪数组
        var res = $.map(obj, function (value, index) {
            console.log(index, value);
        })

        /*
        3. jq的map和each方法的区别
            1. each静态方法，默认的返回值是遍历谁就返回谁
               map静态方法，默认的返回值是一个空数组
            2. each静态方法，不支持在回调函数中对遍历的数组进行处理
               map静态方法，可以在回调函数中通过return 对遍历的数组进行处理，然后生成一个新的的数组返回
        */

        var res = $.map(obj, function (value, index) {
            console.log(index, value);
            return value + index   // 可以处理遍历时的数组元素 ["10", "81", "892", "93"]
        })

        var res2 = $.each(obj, function (index, value) {
            console.log(index, value);
            return value + index  //无变化
        })
        console.log(res);
        console.log(res2);
    </script>
```
- 其他方法





## 其他

获取元素宽度
```js
// 常规方法
var width =window.getComputedStyle(img).width;
```