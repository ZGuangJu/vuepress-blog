﻿---
title: 第3章 流、元素和基本概念
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
## 第3章 流、元素和基本概念

## 块级元素 ##

`li`元素默认的`display`值是`list-item`，和`table`都是块级元素，在一个水平流上只能单独显示一个元素，多个则换行显示。可以配合`clear`属性来清除浮动带来的影响。

```css
    .clear:after {
        content: '';
        display: table; /*也可以是block，或是list-item*/
        clear: both;
    }
```

实际开发中，不推荐使用`list-item`，一是会出现项目符号，而是IE不支持伪元素`:after`。

### 为什么`list-item`元素会出现项目符号 ###

list-item元素出现项目符号是因为生成了一个附加盒子（**标记盒子**），专门用来放圆点、数字这些项目符号。IE下伪元素不支持`list-item`或许就是无法创建**标记盒子**导致的。

### `display: inline-table;`的盒子是怎样组成的 ###

外面内联，里面`table`，元素和文字在一行显示。

### `width/height`作用在哪个盒子上 ###

`width/height`作用在**里面的盒子**，也就是**容器盒子**。

## `width/height`作用的具体细节 ##

块级元素的流体特性主要体现在水平方向上。

### 深藏不漏的`width:auto` ###

`width`的默认值是`auto`，它至少包含4中不同的宽度表现：

1. **充分利用可用空间**。元素默认宽度是100%父级容器。
2. **收缩与包裹**。典型代表是浮动、绝对定位和`inline-block`元素或`table`元素。
3. **收缩到最小**。这个最容易出现在`table-layout`为`auto`表格中。
4. **超出容器限制**。除非有明确的`width`设置，否则表格`min-content`的尺寸都不会主动超出父容器的宽度。特殊情况：内容很长的英文和数字，或者内联元素设置为`white-space:nowrap;`。这种情况称为`max-content`。

**1. 外部尺寸与流体特性**

1. 正常流宽度。**无宽度，无图片，无浮动。**充分利用浏览器自身的行为特性来完成页面布局。表现为“外部尺寸”的块级元素一旦设置了宽度就会丢失流动性。
2. 格式化宽度。仅出现在“绝对定位模型”中，在默认情况下，绝对定位元素的宽度表现为“包裹性”，宽度由内部尺寸决定。对于**非替代元素**，当`left/top`或`top/bottom`对立方位的属性值同时存在的时候，元素的宽度表现为**格式化宽度**，其宽度大小相对于最近的具有定位特性的祖先元素计算。格式化宽度具有完全的流体性，也就是`margin/padding/border/content`区域会自动分配水平（垂直）空间。

**2. 内部尺寸与流体特性**

内部尺寸有3种表现特性：

1. 包裹性。对于一个元素，如果其`display:inline-block;`，那么里面的内容宽度不会超过容器。
    - 按钮是CSS中最具有代表性的`inline-block`元素，也是包裹性最好的实例。具体表现为：**按钮文字越多则宽度越宽（内部尺寸特性），如果文字太多则会在容器的宽度处自动换行（自适应特性）。**
    - `input`标签按钮，默认`white-space:pre;`不会换行；需要将`pre`值重置为默认的`normal`。

**包裹性在实际开发中的作用**

> 需求：页面某个模块的文字内容是动态的，可长可短。文字少的时候居中显示，文字超过一行的时候居左显示。该如何实现？

    .box {
        text-align: center;
    }

    .content {
        display: inline-block;
        text-align: left;
    }

除了`inline-block`元素，绝对定位和浮动元素都具有包裹性，均有类似的智能宽度行为。

2. 首选最小宽度。元素最适合的最小宽度。具体表现规则：
    - 东亚文字最小宽度为每个汉字的宽度。
    - 西方文字最小宽度由特定的连续的英文字符单元决定。英文字符一般会终止于空格、短横线、问好以及其他非英文字符。
    - 要让英文字符的每个字符都用最小宽度单元，可以使用`word-break:break-all;`
    - 图片的替代元素的最小宽度是该元素内容本身的宽度。

3. 最大宽度。最大连续内联盒子的宽度。

### `width`值作用的细节 ###

1. 流动性丢失
    - 块级元素设定`width`具体数值，则元素的流动性就会被阻断。
2. 与实际表现不一致
    - `padding`、`border`属性发生改变会影响`content`内容的尺寸，出现页面布局错位。

### CSS流体布局下的宽度分离原则 ###

**宽度分离原则**，就是CSS中的`width`属性不与影响宽度的`padding/border`属性共存。

    .box {
        width: 100px;
        border: 1px solid #ccc;
    }

`width`独占一层标签，而`padding/border/margin`利用流动性在内部自适应呈现。

    .father {
        width: 100px;
    }

    .son {
        margin: 0 20px;
        border: 1px solid #ccc;
    }

### 改变`width/height`作用细节的`box-sizing` ###

**`box-sizing`的作用**

默认情况下，`width`是作用在`content box`上，`box-sizing`的作用就是可以把`width`作用的盒子变成其他几个。

`box-sizing: border-box;`就是让100像素的宽度直接作用在`border box`上，从默认的`content box`变成`border box`。此时，`content box`从宽度值中释放，形成了局部的流动性，和`padding`一起自动分配`width`值。

box-sizing不支持`margin-box`，只有当元素没有水平`margin`时，`box-sizing`才能真正计算，**宽度分离**等策略可以彻底解决所有的宽度计算问题。

> 在CSS世界中，唯一离不开`box-sizing:border-box;`的就是原生普通文本框`input`和`textarea`的100%自适应父容器宽度。
> 替换元素的特性之一是尺寸由内部元素决定，且无论其`display`属性值是`inline`还是`block`。对于非替换元素，如果`display`值是`block`，就会具有流动性，宽度由外部尺寸决定，但是替换元素的宽度不受`display`水平影响，因此，通过修改`textarea`的`display`水平是无法让尺寸100%自适应父容器。

### 相对简单的`height:auto` ###

### 关于`height:100%` ###

对于`width`属性，父元素`width`设为`auto`，其百分比也支持；但是对于`height`属性，如果父元素`height`设为`auto`，只要子元素在文档流中，其百分比完全被忽略。

> 对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。

**1. 父级没有具体高度值，`height:100%;`会无效**

> 浏览器渲染的基本原理：首先，先下载文档内容，加载头部的样式资源，然后按照从上而下、自外而内的顺序渲染DOM内容。

如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为`auto`。

**2. 让元素支持`height:100%`效果**

1. 设定显式的高度值。

    html, body {
        height: 100%;
    }

2. 使用绝对定位。

    div {
        height: 100%;
        position: absolute;
    }

> 绝对定位的宽高百分比计算是相对于`padding box`，也就是会把`padding`大小值计算在内。非绝对定位元素则是相对于`content box`计算。

**图片左右半区点击分别上一张图下一张图效果**

在图片外面包一层具有“包裹性”同时具有定位特性的标签。

    .box {
        display: inline-block;
        position: relative;
    }

在图片上覆盖两个绝对定位，同时设`height:100%;`，则无论图片多高，左右半区都能自动和图片高度一模一样，无需任何使用JS的计算。

## `min-width/max-width`和`min-height/max-height` ##

### 为流体而生的`min-width/max-width` ###

`min-width/max-width`出现的场景一定是自适应布局或流体布局中。

    .container {
        min-width: 1200px;
        max-width: 1400px;
    }

为了避免图片在移动端展示过大影响体验，经常会有下面的`max-width`限制：

    img {
        max-width: 100%;
        height: auto !important;
    }

`height:auto;`是必须的，否则如果原始图片有设定`height`，`max-width`生效时图片就会被水平压缩。强制`height`为`auto`可以确保宽度不超出的同时使图片保持原来的比例。

### 与众不同的初始值 ###

`max-width/max-height`的初始值是`none`，`min-width/min-height`的初始值是`auto`。

1. `min-height/width`的值为`auto`合法。
2. 数值变化无动画。`min-height`的初始值是`auto`。

### 超越`!important`，超越最大 ###

**1. 超越`!important`**

超越`!important`指的是`max-width`会覆盖`width`。

    <img src="1.jpg" style="width: 480px !important;" alt="">
    img {
        max-width: 256px;
    }

最终图片显示宽度`256px`。

**2. 超越最大**

**超越最大**指的是`min-width`覆盖`max-width`，此规则发生在`min-width`和`max-width`冲突的时候。

    .container {
        min-width: 1400px;
        max-width: 1200px;
    }

最小宽度设置比最大宽度还大，这个时候，`min-width`显示，`max-width`被忽略。`.container`元素表现为至少`1400px`宽度。

### 任意高度元素的展开收起动画技术 ###

**元素展开收起时有明显的高度滑动效果**

    .element {
        max-height: 0;
        overflow: hidden;
        transition: max-height .25s;
    }

    .element.active {
        max-height: 666px;
    }

`max-height`使用足够安全的最小值，避免出现延迟。

## 内联元素 ##

在CSS世界中，内联元素是最为重要的。这些CSS属性往往具有继承特性。

### 哪些元素是内联元素 ###

**1. 从定义看**

内联元素特指“外在盒子”，和`display:inline;`的元素不是一个概念。

**2. 从表现看**

内联元素的典型特性是可以和文字在一行显示。

### 内联盒模型 ###

1. 内容区域。
    - **内容区域**指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制，本质上是一个`字符盒子`。
    - 但是像图片这类替换元素，内容区域可以看成元素本身。可以把文本选中的背景色区域作为内容区域。
    -
2. 内联盒子。
    - **内联盒子**不会让内容成块显示，而是排成一行，**内联盒子**指的就是“外在盒子”，用来决定元素是内联还是块级。
    - **外在盒子**又可以划分为“内联盒子”和“匿名内联盒子”两类：
        - 外部内联标签`span`、`a`、`em`等，则属于“内联盒子”；如果这是文字`<p>这是一行普通文字，这里有个<em>em</em>标签。（这里是匿名内联盒子）</p>`，则属于“匿名内联盒子”。
        - 并非单独文字都是“匿名内联盒子”，关键要看前后的标签是内联还是块级。
3. 行框盒子。
    - 每一行就是一个“行框盒子”，每个“行框盒子”又是由一个个“内联盒子”组成。
4. 包含盒子。
    - `p`标签就是一个**包含盒子**，此盒子由一行一行的“行框盒子”组成。

### 幽灵空白节点 ###

**幽灵空白节点**具体指的是：在HTML5文档声明中，内联元素的所有解析和渲染表现就如同每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，但又确实存在，表现如同文本节点一样。

**幽灵空白节点**是一个存在于每个“行框盒子”前面，同时具有该元素的字体和行高属性的`0`宽度的内联盒。
