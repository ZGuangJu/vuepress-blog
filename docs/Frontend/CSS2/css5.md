﻿---
title: 第5章 内联元素与流
date: 2018-09-23
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS教程
publish: true
---
## 第5章 内联元素与流

## 字母`x` ##

### 字母`x`与CSS世界的基线 ###

字母`x`的下边缘（线）就是**基线**。

### 字母`x`与CSS中的`x-height` ###

`x-height`指的是字母`x`的高度。

`vertical-align:middle;`的`middle`指的是基线网上`1/2 x-height`高度。

### 字母`x`与CSS中的`ex` ###

`ex`是CSS中的一个相对单位，指的是小写字母`x`的高度，即`x-height`。

`ex`的作用是**不受字体和字号影响的内联元素的垂直居中对齐效果**。

内联元素默认是基线对齐，而基线就是`x`的底部，而`1ex`就是一个`x`的高度。

**文字与小三角图标**

<p data-height="265" data-theme-id="0" data-slug-hash="xJLGab" data-default-tab="css,result" data-user="whjin" data-pen-title="文字与小三角图标" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/xJLGab/">文字与小三角图标</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# 内联元素的基石`line-height` #

## 内联元素的高度之本——`line-height` ##

**`div`高度是行高`line-height`决定的，而非文字。**对于非替换元素的纯内联元素，其可视高度完全由`line-height`决定。

行距=`line-height`-`font-size`。`em`是一个相对`font-size`大小的CSS单位，因此`1em`等于当前一个`font-size`大小。

<p data-height="265" data-theme-id="0" data-slug-hash="OwjMwy" data-default-tab="css,result" data-user="whjin" data-pen-title="半行间距" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/OwjMwy/">半行间距</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`line-height`不会影响替换元素。图片为内联元素，会构成一个“行框盒子”，而在HTML5下，每一个“行框盒子”的前面都是一个宽度为`0`的“幽灵空白节点”，其内联特性表现和普通字符完全一样。

对于块级元素，`line-height`对其本身没有任何作用，改变`line-height`，块级元素的高度跟着变化实际上是**通过改变块级元素里面内联元素占据的高度实现。**

## 为什么`line-height`可以让内联元素“垂直居中” ##

**行高实现多行文本或图片等替换元素的垂直居中效果**

<p data-height="265" data-theme-id="0" data-slug-hash="pZrgMd" data-default-tab="css,result" data-user="whjin" data-pen-title="行高与多行文字垂直居中" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/pZrgMd/">行高与多行文字垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 深入`line-height`的各类属性值 ##

`line-height`的默认值是`normal`，还支持数值、百分比值以及长度值。

在实际开发中，需要对`line-height`的默认值进行重置：

1. **数值**。计算方法`line-height`=1.5*`font-size`
2. **百分比值**。`line-height`=150%*`font-size`
3. **长度值**。`line-height`=1.5*`font-size`

- 制作一个图文内容比较多的网站，使用**数值**作为单位，`line-height`值可以设置在`1.6~1.8`。
- 偏重布局结构的网站，使用**长度值**或**数值**都可以，`line-height`值可以设置在`20px`。

## 内联元素`line-height`的“大值特性” ##

**无论内联元素`line-height`如何设置，最终父级元素的高度都是由数值大的那个`line-height`决定，称之为内联元素`line-height`的“大值特性”**

每个内联盒子外层都有一个看不见的**行框盒子**，在每个**行框盒子**前面都有一个**宽度为`0`**的具有该元素的字体和行高属性的看不见的**幽灵空白节点**。

# `line-height`的好朋友`vertical-align` #

凡是`line-height`起作用的地方`vertical-align`也一定起作用。

## `vertical-align`家族基本认识 ##

`vertical-align`属性值分为以下4类：

1. **线类**。`baseline`默认值、`top`、`middle`、`bottom`
2. **文本类**。`text-top`、`text-bottom`
3. **上标下标类**。`sub`、`super`
4. **数值百分比类**。`20px`、`2em`、`20%`等，正值往上偏移，负值往下偏移。

`vertical-align`的默认值是`baseline`，即基线对齐，而基线的定义是字母`x`的下边缘。因此，内联元素默认都是沿着字母`x`的下边缘对齐。

<p data-height="265" data-theme-id="0" data-slug-hash="ajyNrO" data-default-tab="css,result" data-user="whjin" data-pen-title="vertical-align数值-文字与图标垂直居中" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/ajyNrO/">vertical-align数值-文字与图标垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`margin/padding`是相对于宽度计算，`line-height`是相对于`font-size`计算，`vertical-align`属性的百分比值是相对于`line-height`计算。

## `vertical-align`作用前提 ##

`vertical-align`作用前提条件：**只能应用于内联元素以及`display`值为`table-cell`的元素**。也就是只能作用在`display`计算值为`inline`、`inline-block`、`inline-table`、`inline-cell`的元素上。

**块级元素不支持。浮动元素和绝对定位会让元素块状化，从而导致`vertical-align`不起作用。**

## `vertical-align`和`line-height`之间的关系 ##

<p data-height="265" data-theme-id="0" data-slug-hash="yqoJzB" data-default-tab="css,result" data-user="whjin" data-pen-title="解决内联元素“幽灵空白节点”" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/yqoJzB/">解决内联元素“幽灵空白节点”</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**解决图片底部留有间隙的问题**

消除间隙的方法，从**幽灵空白节点**、`line-height`和`vertical-align`入手：

1. **图片块状化**。
2. **容器`line-height`足够小。**比如容器设置`line-height:0;`
3. **容器`font-size`足够小**。
4. **图片设置其他`vertical-align`属性值**。间隙产生的原因之一就是**基线对齐**，所以设置`vertical-align`的值为`top/bottom/middle`其中一个。

## 深入理解`vertical-align`线性类属性值 ##

### 1. `inline-block`与`baseline` ###

**一个`inline-block`元素，如果里面没有内联元素，或者`overflow:visible`，则该元素的基线就是其`margin`底边缘；否则其基线就是元素里面最后一行内联元素的基线。**

<p data-height="265" data-theme-id="0" data-slug-hash="gjxMNq" data-default-tab="css,result" data-user="whjin" data-pen-title="inline-block与baseline" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/gjxMNq/">inline-block与baseline</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

没有内联元素，基线就是容器的`margin`下边缘，即下边框下面的位置；有内联元素，基线就是字符的下边缘。

字符实际占据的高度是由`line-height`决定，当`line-height`变为`0`时，字符占据的高度也是`0`，此时高度的起始位置就变成字符内容区域的垂直中心位置。

**解决间隙问题的方法**

1. 改变占位`<i>`元素的基线；
2. 改造**幽灵空白节点**的基线位置；
3. 使用其他`vertical-align`对齐方式。

**改造幽灵空白节点的基线位置可以使用`font-size`，当字体足够小时（设为`0`），基线和中线会重合在一起。**

> **基于`20px`图标对齐的处理技巧**

1. **图标高度和当前行高都是`20px`**。
2. **图标标签里面永远有字符**。借助`:before`和`:after`伪元素生成一个空格字符。
3. **图标CSS不适用`overflow:hidden;`保证基线为里面字符的基线，但是需要让里面潜在的字符不可见**。

<p data-height="365" data-theme-id="0" data-slug-hash="KBvbXM" data-default-tab="css,result" data-user="whjin" data-pen-title="图标文字对齐" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/KBvbXM/">图标文字对齐</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### 2. `vertical-align:top/bottom` ###

- 内联元素：元素底部和当前行框盒子的顶部对齐。
- `table-cell`元素：元素底`padding`边缘和表格行的顶部对齐。

### 3. `vertical-align:middle`与近似垂直居中 ###

- 内联元素：元素的垂直中心点和行框盒子相对于外面的表格行居中对齐。
- `table-cell`元素：单元格填充盒子相对于外面的表格行居中对齐。

## 深入理解`vertical-align`文本类属性值 ##

- `vertical-align:text-top`：盒子的顶部和父级内容区域的顶部对齐。
- `vertical-align:text-bottom`：盒子的底部和父级内容区域的底部对齐。

1. 文本类属性值的垂直对齐与左右文字大小和高度都没有关系，而所有线性类属性值的定位都会受到兄弟内联元素的影响。
2. 文本类属性值的垂直对齐可以像素级精确控制。如果是图文对齐，可以通过改变父元素的`font-size`大小精确控制对齐位置；如果是文字之间对齐，可以通过改变文字的`line-height`，也就是改变元素的高度（上下边缘位置）精确控制对齐位置。

## 简单了解深入理解`vertical-align`线性类属性值上标下标类属性值 ##

`vertical-align`线性类属性值上标下标类属性值指的是`sub`和`super`两个值。

- `vertical-align:super`：提高盒子的基线到父级合适的上标基线位置。
- `vertical-align:sub`：降低盒子的基线到父级合适的下标基线位置。

## 无处不在的`vertical-align` ##

## 基于`vertical-align`属性的水平垂直居中弹框 ##

> **使用纯CSS实现大小不固定的弹框永远居中的效果，如果伪元素换成普通元素，兼容IE7。**

<p data-height="265" data-theme-id="0" data-slug-hash="BPdERX" data-default-tab="css,result" data-user="whjin" data-pen-title="水平垂直居中弹框" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/BPdERX/">水平垂直居中弹框</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**`vertical-align:middle`**定义是元素的中线和字符`x`中心点对齐。

1. `font-size`设置为`0`，`x`中心点位置是`.container`的上边缘，高度`100%`宽度`0`的伪元素和这个中心点对齐。CSS中默认是左上方排列对齐，所以这个伪元素和原本在容器上边缘的`x`中心点一起往下移动了半个容器高度，就是此时`x`中心点在 容器的垂直中心线上。
2. 弹框元素`.dialog`设置`vertical-align:middle;`。根据定义，弹框的垂直中心位置和`x`中心点位置对齐，此时`x`中心点在容器的垂直中心位置，`.dialog`元素和容器垂直中心位置对齐，从而实现垂直居中效果。

3.
