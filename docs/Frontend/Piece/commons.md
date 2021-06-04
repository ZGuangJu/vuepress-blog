---
title: 常用代码
date: 2021-03-31
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - css
 - html
publish: true
# 打赏
showSponsor: true
---
## HTML

### `<head>`内部的标签

1. `<title>` 标签定义文档的标题

`title` 元素在所有 `HTML/XHTML` 文档中都是必需的。

`title` 元素能够：A定义浏览器工具栏中的标题;B提供页面被添加到收藏夹时显示的标题;C显示在搜索引擎结果中的页面标题.

2. `<base>` 标签为页面上的所有链接规定默认地址或默认目标

```html
<base href="https://www.baidu.com/" />
<base target="_blank" />

```

\* 注意：<base> 标签会影响相对路径，会在其前面添加上默认地址

3. `<link>` 标签定义文档与外部资源之间的关系(常用于连接样式表)

```html
<!-- css引入 -->
<link rel="stylesheet" type="text/css" href="mystyle.css" />
```

4. `<style>` 标签用于为 HTML 文档定义样式信息

```html
<style type="text/css">
body {background-color:yellow}
p {color:blue}
</style>

```

5. `<meta>` 标签提供关于 `HTML` 文档的元数据。
    - 元数据不会显示在页面上，但是对于机器是可读的。
    - 典型的情况是，`meta` 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。
    - `<meta>` 标签始终位于 `head` 元素中。

```html
<!-- 下面的 meta 元素定义页面的描述（告诉搜索引擎你的站点的主要内容） -->
<meta name="description" content="Web tutorials on HTML, CSS, XML" />
<!-- 下面的 meta 元素定义页面的关键词： -->
<meta name="keywords" content="HTML, CSS, XML" />
<!-- name 和 content 属性的作用是描述页面的内容。 -->
<meta charset="utf-8">
<!-- charset 属性规定 HTML 文档的字符编码  且可以通过任意元素的lang属性重写-->
```

\* 一些搜索引擎会利用 meta 元素的 name 和 content 属性来索引您的页面。

- html页面禁止缩放

```html
<!-- html5页面中默认都允许用户缩放页面，或者在屏幕双击放大或缩小。即默认设置为：  -->
<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=yes" /> 
<!-- 若要禁止缩放可以更改成如下设置： -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
```

6. `<script>` 标签用于定义客户端脚本

### 边框中包含文字

```html
    <fieldset>
        <legend>在边框上的字</legend>
        可以输入内容：<input type="text" />
    </fieldset>
```

### `<a>` 标签 伪类

一组专门的预定义的类称为伪类，主要用来处理超链接的状态。超链接文字的状态可以通过伪类选择符＋样式规则来控制。伪类选择符包括：

- 总: `a`:表示所有状态下的连接(其他状态默认) 如 `a{color:red}`
- ① `a:link`： 未访问链接 ,如 `a:link {color:blue}`
- ② `a:visited`： 已访问链接 ,如 `a:visited{color:blue}`
- ③ `a:active`： 激活时（链接获得焦点时）链接的颜色 ,如 `a:active{color:blue}`
- ④ `a:hover`： 鼠标移到链接上时 ,如 `a:hover {color:blue}`
- 一般`a:hover`和`a:visited`链接的状态（颜色、下划线等）应该是相同的。
- 前三者分别对应`body`元素的`link`、`vlink`、`alink`这三个属性。
- 四个“状态”的先后过程是：`a:link` ->`a:hover` ->`a:active`->`a:visited`
另外，`a:active`不能设置有无下划线（总是有的）。

```html
<style type = “text/css”>
a {
    font-size:16px}
a:link {
    color: blue;
     text-decoration:none;
     } /*未访问：蓝色、无下划线*/
a:active:{
    color: red;
    } /*激活：红色*/
a:visited {
    color:purple;
    text-decoration:none;
    } /*已访问：紫色、无下划线*/
a:hover {
    color: red;
    text-decoration:underline;
    } /*鼠标移近：红色、下划线*/
</style>
```

### 去掉`<a>`的下划线

```js
text-decoration : none ;//无装饰
                : underline;//下划线
                : blink;//闪烁
                : overline;//上划线
                : line-through;//中划线 、贯穿线
```

## CSS

### 设置全局通用样式

- 全局样式比其他自定义样式权重低，所以要先引入全局通用样式，再引入其他样式：

```css
/* reset.css */
    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    p,
    blockquote,
    pre,
    hr,
    figure,
    table,
    caption,
    th,
    td,
    img,
    form,
    fieldset,
    legend,
    input,
    button,
    textarea,
    menu {
        padding: 0;
        margin: 0;
    }
    body {
        text-align:center;
        font-family: "宋体";
        /* font-size:12px; */
    }
    ul,ol,li {
        list-style:none;
    }
    a {
    text-decoration:none;
    }
    input,button,img {
        border:none;
        vertical-align:middle;
    }
```

### 通用字体设置

```css
    body,
    textarea,
    input,
    button,
    select,
    keygen,
    legend {
        color: rgb(0, 0, 0);
        font: 12px / 1.14 黑体;
        outline: 0px;
    }
```

### 全站灰度(黑白)

将网站整体的色调换成灰色、黑色色调，在纪念一些日子的时候会有用到，

可以根据实际的需要选择合适的CSS代码样式添加到自己的网页模板的代码中实现网页灰色、黑白样式。

- 样式一

```css
<style type="text/css">
html {
　　filter:grayscale(100%);//给网站加灰度的滤镜
　　-webkit-filter:grayscale(100%);//属于使用webkit内核的浏览器，兼容chrome和safari浏览器
　　-moz-filter:grayscale(100%);
　　-ms-filter:grayscale(100%);
　　-o-filter:grayscale(100%);
　　filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
　　-webkit-filter:grayscale(1)
}
</style>
```

- 样式二

```css
//和第一种类似，实现全站效果，可以将代码添加到head中
<style>
body, html {
-webkit-filter: grayscale(100%);
-moz-filter: grayscale(100%);
-ms-filter: grayscale(100%);
-o-filter: grayscale(100%);
filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
_filter:none;
}
</style>
```

- 样式三

```css
//同样的可以添加到样式style中
html {
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
-webkit-filter: grayscale(100%);
}
```

- 样式三

```html
//这是直接添加到行内样式中
<html style="filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
-webkit-filter: grayscale(100%);">
```

## JavaScript

### 原生js给DOM元素添加一个类名

- 方法一：

使用`DOM.setAttribute("class","类名")`

- 方法二：

`DOM.classList.add("类名")`

```js
    var Demo = document.getElementById("demo");
    Demo.setAttribute("class", "demo");
    Demo.setAttribute("class", "demo2"); //会覆盖替换 最终只有 "class=demo2"
   //
    Demo.classList.add("demo");
    Demo.classList.add("demo2"); //最终会有 "class= demo demo2 "
    console.log(Demo);
```

- 区别
方法一 给`DOM`元素添加类名会覆盖原有的类名

方法二 可以给`DOM`元素添加一个类名后 还可以在继续给`DOM`元素添加新的类名 并且不会覆盖已有的类名

### 原生js 类名的操作

- 原生方法
  `DOM.setAttribute("class","demo")`
- 操作类名（`HTML5`新增`classList`）
  - `classList.add( newClassName )`；添加新的类名，如已经存在，取消添加
  - `classList.contains( oldClassName )`;确定元素中是否包含指定的类名，返回值为`true` 、`false`；
  - `classList.remove( oldClassName )`；移除已经存在的类名;
  - `classList.toggle( className )`；如果`classList`中存在给定的值，删除它，否则，添加它(自动开关灯)；
  - `classList.replace( oldClassName，newClassName )`；类名替换

\* 支持`classList`属性的浏览器有`Firefox3.6+` 和 `chrome`;
