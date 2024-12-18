﻿---
title: 第6章 流的破坏与保护
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
## 第6章 流的破坏与保护

## 魔鬼属性`float` ##

### `float`的本质与特性 ###

**`float`浮动属性让父元素高度坍塌的原因就是为了实现文字环绕效果**。

`float`自身特性：

- 包裹性；
- 块状化并格式化上下文；
- 破坏文档流；
- 没有任何`margin`合并。

包裹性，由**包裹**和**自适应性**两部分组成。

1. **包裹**。浮动元素父元素宽度`200px`，子元素是一个宽度`128px`宽度的图片，则此时浮动元素宽度表现为**包裹**，就是里面图片的宽度`128px`。

![](https://i.imgur.com/QCNBDxs.jpg)

2. **自适应性**。

**块状化**，元素一旦`float`的属性值不为`none`，则其`display`计算值为`block`或`table`。**`text-align`对浮动元素无效。**

| 设定值               | 计算值  |
| -------------------- | ------- |
| `inline`             | `block` |
| `inline-block`       | `block` |
| `inline-table`       | `table` |
| `table-row`          | `block` |
| `table-row-group`    | `block` |
| `table-column`       | `block` |
| `table-columngroup`  | `block` |
| `table-cell`         | `block` |
| `table-caption`      | `block` |
| `table-header-group` | `block` |
| `table-footer-group` | `block` |

## `float`的作用机制 ##

**文字环绕效果**是由两个特性（**父级高度坍塌**和**行框盒子区域限制**）共同作用的结果，定高只能解决**父级元素高度坍塌**带来的影响，但是对**行框盒子区域限制**没有任何效果，结果导致的问题是浮动元素垂直区域一旦超出高度范围，或下面元素`margin-top`负值上偏移，就很容易使后面的元素发生“环绕效果”。

## `float`更深入的作用机制 ##

**浮动元素和内联元素在一行显示。**

- **浮动锚点**是`float`元素所在的**流**中的一个点，这个点本身并不浮动。其作用是产生**行框盒子**，因为**浮动锚点**表现如同一个空的内联元素，有内联元自然就有**行框盒子**。
- **浮动参考**指的是浮动元素对齐参考的实体。

`float`元素的**浮动参考**是**行框盒子**，也就是`float`元素在当前**行框盒子**内定位。

## `float`与流体布局 ##

<p data-height="265" data-theme-id="0" data-slug-hash="YjrGyL" data-default-tab="css,result" data-user="whjin" data-pen-title="中间内容居中的左中右布局" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/YjrGyL/">中间内容居中的左中右布局</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# `float`的天然克星`clear` #

## 什么是`clear`属性 ##

`clear`专门用来处理`float`属性带来的高度坍塌等问题。

    clear: none | left | right | both

- `none`：默认值，左右浮动
- `left`：左侧抗浮动
- `right`：右侧抗浮动
- `both`：两侧抗浮动

实际应用中只使用`clear:both;`即可。

## 成事不足败事有余的`clear` ##

`clear`属性只有块级元素才有效，而`:after`等伪元素默认都是内联水平，这就是伪元素清除浮动影响时需要设置`display`属性值的原因。

`clear:both`的作用本质是让自身不与`float`元素在一行显示，并不是真正意义上的清除浮动。

1. 如果`clear:both;`元素前面的元素就是`float`元素，则`margin-top`负值即使设成`-9999px`，也没有效果。
2. `clear:both;`后面的元素依旧可能发生文字环绕的现象。

# CSS世界的结界——**BFC** #

## **BFC**的定义 ##

**BFC**称为**块级格式化上下文**。**BFC**元素不可能发生`margin`重叠，`margin`重叠会影响外面的元素；**BFC**元素也可以用来清除浮动的影响，如果不清楚，子元素浮动则会父元素高度坍塌，必然会影响后面元素布局和定位。

何时会触发**BFC**，常见情况如下：

- `html`根元素；
- `overflow`的值为`auto`、`scroll`或`hidden`；
- `display`的值为`table-cell`、`table-caption`和`inline-block`中的任何一个；
- `float`的值不为`none`；
- `position`的值不为`relative`和`static`。

只要元素符合上面任意一个条件，就无须使用`clear:both;`属性去清除浮动的影响。

## **BFC**与流体布局 ##

**BFC**的表现原则：具有**BFC**特性的元素的子元素不会受到外部元素的影响，也不会影响外部元素。普通流体元素在设置了`overflow:hidden;`后，会自动填满容器中除了浮动元素以外的剩余空间，形成自适应布局效果。

    img {
        float: left;
        margin-right: 10px;
    }

    .content {
        overflow: hidden;
    }

基于**BFC**特性的自适应布局有如下优点：

1. 自适应内容由于封闭更加健壮，容错性更强。内部设置`clear:both;`不会与`float`元素相互干扰而导致错位。
2. 自适应内容自动填充浮动以外区域，无需关心浮动元素宽度，可以整站大规模应用。

```
.left {
    float: left;
}

.right {
    float: right;
}

.bfc {
    overflow: hidden;
}
```

1. `float:left;`。浮动元素本身**BFC**化，然而浮动元素具有破坏性和包裹性，失去了元素本身的流体自适应性，因此无法用来实现自动填满容器的自适应布局。
2. `position:absolute;`。脱离文档流，不容易操作。
3. **`overflow:hidden;`块状元素的流体特性保存得很好，加上**BFC**的独立区域特性，而且从IE7开始就支持，兼容性很好。唯一的问题是容器盒子外的元素可能会被隐藏掉。**
4. `display:inline-block;`
5. `display:table-cell`
6. `display:table-row`
7. `display:table-caption`

总结上面的自适应布局设置，最佳实践如下：

1. `overflow: auto/hidden;`，适用于IE7及以上版本浏览器；
2. `display: inline-block;`，适应于IE6和IE7;
3. `display: table-cell;`，适用于IE8及以上版本浏览器。

IE7及以上版本浏览器适配的自适应解决方案：

1. 借助`overflow`属性，如下:

```
.lbf-content {
    overflow: hidden;
}
```

2. 融合`display: table-cell;`和`display: inline-block;`，如下：

```
.lbf-content {
    display: table-cell;
    width: 9999px;
}
```

`display: table-cell;`元素内连续英文字符无法换行的问题：

    .word-break {
        display: table;
        width: 100%;
        table-layout: fixed;
        word-break: break-all;
    }

# 最佳结界`overflow` #

> 要彻底清除浮动的影响，最适合的属性是`overflow`。`overflow:hidden;`声明不会影响元素原先的流体特性或宽度表现。

## `overflow`裁剪界线`border box` ##

当子元素内容超出容器宽度高度限制的时候，剪裁的边界是`border box`的内边缘，而非`padding box`的内边缘。

在实际项目开发时，要尽量避免滚动条容器设置`padding-bottom`值。

## 了解`overflow-x`和`overflow-y` ##

IE8以上浏览器，`overflow`增加了两个属性，`overflow-x`和`overflow-y`，分别表示单独控制水平或垂直方向上的剪裁规则。

支持的属性值和`overflow`属性一模一样：

- `visible`：默认值
- `hidden`：剪裁
- `scroll`：滚动条
- `auto`

**不会出现一个方向溢出剪裁或滚动，另一个方向内容溢出显示的效果。**

## `overflow`与滚动条 ##

浏览器的滚动条：

1. 默认滚动条来自`html`，而不是`body`标签。去除页面默认滚动条：

```
html {
    overflow: hidden;
}
```

在PC端，滚动条高度可以使用`document.documentElement.scrollTop`获取，但是在移动端，需要使用`document.body.scrollTop`获取。
2. 滚动条会占用容器的可用高度或宽度。

**让页面滚动条不发生晃动的技巧**

    html {
        overflow-y: scroll;
    }

    :root {
        overflow-y: auto;
        overflow-x: hidden;
    }

    :root body {
        position: absolute;
    }

    body {
        width: 100%;
        overflow: hidden;
    }

滚动条自定义效果：

- 整体部分：`::-webkit-scrollbar`
- 两端按钮：`::-webkit-scrollbar-button`
- 外层轨道：`::-webkit-scrollbar-track`
- 内层轨道：`::-webkit-scrollbar-track-piece`
- 滚动滑块：`::-webkit-scrollbar-thumb`
- 边角：`::-webkit-scrollbar-corner`

```
::-webkit-scrollbar { /*血槽宽度*/
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-thumb { /*拖动条*/
    background-color: rgba(0, 0, 0, .3);
    border-radius: 6px;
}

::-webkit-scrollbar-track { /*背景槽*/
    background-color: #ddd;
    border-radius: 6px;
}
```

## 依赖`overflow`的样式表现 ##

单行文字溢出`...`效果，需要使用到`overflow:hidden;`、`text-overflow:hidden;`，效果实现必需的3个声明如下：

    .ell {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

最多显示2行内容，再多就打点的核心CSS代码：

    .ell-rows-2 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

## `overflow`与锚点定位 ##

基于URL地址的锚链`location.hash`实现锚点跳转的方法有两种：

1. `a`标签以及`name`属性
2. 使用标签的`id`属性

```
<a href="#1">发展历程</a>
<a name="1"></a>
```

**1. 锚点定位行为的触发条件**

1. URL地址中的锚链与锚点元素对应并有交互行为；
2. 可`focus`的锚点元素处于`focus`状态。

**`focus`锚点定位**指的是类似链接或按钮、输入框等可以被`focus`的元素在被`focus`时发生的页面重定位现象。

**URL地址锚点定位**是让元素定位在浏览器窗体的上边缘，而``focus`锚点定位`是让元素在浏览器窗体范围内显示即可。

**2. 锚点定位作用的本质**

锚点定位行为的发生，本质上是通过改变容器滚动高度或宽度来实现。改变了`scrollTop`或`scrollLeft`的值。

<p data-height="300" data-theme-id="0" data-slug-hash="bjYKPW" data-default-tab="css,result" data-user="whjin" data-pen-title="窗体无跳动选项卡" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/bjYKPW/">窗体无跳动选项卡</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

处理列表部分区域正在浏览器外面依然会跳动的问题：

    $('label.click').removeAttribute('for').on('click', function () {
        $('.box').scrollTop(xxx);//滚动数值
    });

基于父容器自身的`scrollTop`值改变来实现自定义滚动条效果。

1. 实现简单，无须做边界判断。`container.scrollTop=99999;`，列表滚动就是`scrollTop`值，实时获取。
2. 可与原生的`scroll`事件天然继承，无缝对接。
3. 无须改变子元素的结构。

# `float`的兄弟`position:absolute` #

绝对定位`absolute`具有块状化，块状格式化上下文、包裹性和自适应性。自适应性的最大宽度由“包含块”决定。

## `absolute`的包含块 ##

普通元素的百分比宽度是相对于父元素的`content box`宽度计算，而绝对定位元素的宽度是相对于第一个`position`不为`static`的祖先元素计算的。

1. 根元素`html`被称为“初始包含块”，其尺寸等同于浏览器可视窗口的大小。
2. 对于其他元素，如果该元素的`position`是`relative`或`static`，则“包含块”由其最近的块容器祖先盒子的`content box`边界组成。
3. 如果元素`position:fixed;`，则“包含块”是“初始包含块”。
4. 如果元素`position:absolute;`，则“包含块”由最近的`position`不为`static`的祖先元素建立，具体方式如下：
    **如果该祖先元素是纯`inline`元素，则规则略复杂：**
    - 给内联元素的前后各生成一个宽度为`0`的内联盒子，则这两个内联盒子的`padding box`外面的包围盒子就是内联元素的“包含块”。
    - 如果该内联元素被跨行分割，则**包含块**是未定义的。
    **否则，“包含块”由该祖先的`padding box`边界组成。**

和常规元素相比，绝对定位元素的**包含块**有3个明显的差异：

1. 内联元素也可以作为**包含块**所在的元素；
2. **包含块**所在的元素不是父级块元素，而是最近的`position`不为`static`的祖先元素或根元素；
3. 边界是`padding box`而不是`content box`。

**内联元素的“包含块”是由“生成的”前后内联盒子决定，与里面的内联盒子细节没有任何关系。**

> `height:100%;`是第一个具有定位属性值得祖先元素的高度，而`height:inherit;`则是单纯的父元素的高度继承。

## 具有相对特性的无依赖`absolute`绝对定位 ##

**1. 各类图标定位**

<p data-height="265" data-theme-id="0" data-slug-hash="jpYJJp" data-default-tab="css,result" data-user="whjin" data-pen-title="无依赖绝对定位”与导航图标定位" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/jpYJJp/">无依赖绝对定位”与导航图标定位</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<p data-height="265" data-theme-id="0" data-slug-hash="vapMWW" data-default-tab="css,result" data-user="whjin" data-pen-title="文字和图片水平对齐" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/vapMWW/">文字和图片水平对齐</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**2. 超越常规布局的排版**

<p data-height="365" data-theme-id="0" data-slug-hash="bjayad" data-default-tab="css,result" data-user="whjin" data-pen-title="“无依赖绝对定位”与超越常规布局的排版" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/bjayad/">“无依赖绝对定位”与超越常规布局的排版</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**3. 下拉列表的定位**

<p data-height="300" data-theme-id="0" data-slug-hash="NBXVVR" data-default-tab="css,result" data-user="whjin" data-pen-title="“无依赖绝对定位”与下拉列表定位" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/NBXVVR/">“无依赖绝对定位”与下拉列表定位</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**4. 占位符效果模拟**

**5. 进一步深入“无依赖绝对定位”**

## `absolute`与`text-align` ##

`absolute`元素的`display`计算值是块状的，`text-align`不会起作用。

<p data-height="265" data-theme-id="0" data-slug-hash="XBZmdB" data-default-tab="css,result" data-user="whjin" data-pen-title="absolute与text-align互相作用" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/XBZmdB/">absolute与text-align互相作用</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<p data-height="265" data-theme-id="0" data-slug-hash="NByxwE" data-default-tab="css,result" data-user="whjin" data-pen-title="主结构右外侧固定定位" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/NByxwE/">主结构右外侧固定定位</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# `absolute`与`overflow` #

如果`overflow`不是定位元素，同时绝对定位元素和`overflow`容器之间也没有定位元素，则`overflow`无法对`absolute`元素进行裁剪。**`overflow`元素父级是定位元素也不会裁剪。**

1. `overflow`属性所在的元素同时也是定位元素，里面的绝对定位元素会被裁剪；
2. `overflow`元素和绝对定位元素之间有定位元素，也会被裁剪。
3. `overflow`属性值不是`hidden`，而是`auto`或`scroll`，即使绝对定位元素高度比`overflow`元素高度大，也不会出现滚动条。

# `absolute`与`clip` #

`clip`属性要起作用，元素必须是绝对定位`absolute`或固定定位`fixed`。

`clip`属性语法：`clip: rect(top right bottom left)`

## 重新认识的`clip`属性 ##

**1. `fixed`固定定位的剪裁**

    .fixed-clip {
        position: fixed;
        clip: rect(30px 200px 200px 20px);
    }

**2. 最佳可访问性隐藏**

最佳可访问性隐藏指的是视觉上看不见，但是辅助设备能够进行识别和访问。

    .logo h1 {
        position: absolute;
        clip: rect(0 0 0 0);
    }
    <a href="/" class="logo">
        <h1>我是标题</h1>
    </a>

## 深入了解`clip`的渲染 ##

clip隐藏仅仅是决定了哪部分是可见的，非可见部分无法响应点击事件，虽然视觉上隐藏，但是元素的尺寸依旧是原来的尺寸。

# `absolute`的流体特性 #

## 当`absolute`遇到`left/top/right/bottom`属性 ##

当`absolute`遇到`left/top/right/bottom`属性时，`absolute`元素才真正变成绝对定位元素。

## `absolute`的流体特性 ##

当一个绝对定位元素，其对立定位方向属性同时具有定位数值时，就会发生流体特性。

**普通元素流体特性只有水平方向（默认），但是绝对定位元素可以让垂直方向和水平方向同时保持流动性。**

## `absolute`的`margin:auto`居中 ##

    .box {
        width: 200px;
        height: 200px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

# `position:relative`才是大哥 #

## `relative`对`absolute`的限制 ##

## `relative`与定位 ##

`relative`与定位特性：一是相对自身，二是无侵入（当`relative`进行定位偏移时，不会影响周围元素的布局）。

`relative`定位：相对定位元素的`left/top/right/bottom`百分比值是相对于 包含块计算，而非自身。

`top/bottom`垂直方向的百分比值计算和`height`百分比值一样，都是相对于高度计算。

当相对定位元素同时应用对立方向定位值，`top/bottom`和`left/right`同时使用时，其表现和绝对定位差异很大，只有一个方向的定位属性起作用。

## `relative`的最小化影响原则 ##

1. 尽量不适用`relative`，定位某元素，可以使用**无依赖的绝对定位**；
2. 如果需要使用`relative`，则该`relative`需要最小化。

```
<div>
    <div style="position:relative;">
        <img src="1.jpg" alt="" style="position: absolute;top: 0;right: 0;">
    </div>
    <p>内容1</p>
    <p>内容2</p>
</div>
```

# 强悍的`position:fixed`固定定位 #

## `position:fixed`不一样的“包含块” ##

`position:fixed`固定定位元素的**包含块**是根元素。唯一可以限制固定定位元素的是`<html>`根元素。`relative`对`fixed`定位没有任何限制作用。

<p data-height="265" data-theme-id="0" data-slug-hash="EpQepP" data-default-tab="css,result" data-user="whjin" data-pen-title="无依赖固定定位" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/EpQepP/">无依赖固定定位</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## `position:fixed`的`absolute`模拟 ##

    <div class="page">固定定位元素</div>
    <div class="fixed"></div>
    html, body {
        height: 100%;
        overflow: hidden;
    }
    .page {
        height: 100%;
        overflow: auto;
    }
    .fixed {
        position: absolute;
    }

## `position:fixed`与背景锁定 ##
