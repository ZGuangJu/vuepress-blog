﻿---
title: 第4章 盒尺寸四大家族
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
## 深入理解`content`

## `content`与替换元素 ##

### 1. 什么是替换元素 ###

通过修改某个属性值呈现的内容就可以被替换的元素称为**替换元素**。因此，`img`、`object`、`video`、`iframe`或者表单元素`textarea`和`input`都是典型的替换元素。

替换元素除了内容可替换这一特性外，还有一些特性：

1. **内容的外观不受页面上的CSS的影响**。样式表现在CSS作用域之外。更改替换元素自身的外观需要浏览器自身暴露的一些样式接口。
2. **有自己的尺寸**。替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是`300px*150px`。
3. **在很多CSS属性上有自己的一套表现规则。**比较具有代表性的就是`vertical-align`属性。对于非替换元素，`vertical-align`的默认值是`baseline`，被定义为字符`x`的下边缘；对于替换元素的内容没有字符`x`，替换元素的基线就被定义为元素的下边缘。

### 2. 替换元素的默认`display`值 ###

所有的替换元素都是内联元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。

> 各个替换元素的默认`display`属性值（P46）

**`input`和`button`按钮的区别在什么地方？**区别在于两种按钮默认的`white-space`值不一样，前者是`pre`，后者是`normal`，所表现出来的差异是：**当按钮文字足够多时，`input`按钮不会自动换行，`button`按钮则会。**

> 替换元素的`display`是`inline`、`block`和`inline-block`中的任意一个，其尺寸计算规则都是一样的。

### 3. 替换元素的尺寸计算规则 ###

替换元素的尺寸从内到外分为3类：固有尺寸、HTML尺寸和CSS尺寸。

1. 固有尺寸指的是替换内容原本的尺寸。
2. HTML尺寸`img`、`input`只能通过HTML原生属性改变。
3. CSS尺寸指的是可以通过CSS的`width`和`height`或者`max-width/min-width`和`max-height/min-width`设置的尺寸，对应盒尺寸的`content box`。

> 可以影响替换元素的3层结构（由里到外）：固有尺寸->HTML尺寸->CSS尺寸

这3层结构的计算规则：

- 如果没有CSS尺寸和HTML尺寸，使用固有尺寸作为最终的宽高。

    <img src="1.jpg" alt="">

页面显示宽高就是图片自身的尺寸`256px*192px`。

- 如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高。

    <img src="1.jpg" width="128" height="128" alt="">

通过HTML属性`width`和`height`限定了图片的HTML尺寸，因此最终图片所呈现的宽高就是`128px*128px`。

- 如果有CSS尺寸，则最终尺寸由CSS属性决定。

    img {
        width: 200px;
        height: 150px;
    }
    <img src="1.jpg" width="128" height="128" alt="">

此时，固有尺寸、CSS尺寸和HTML尺寸同时存在，起作用的是CSS属性限定的尺寸，因此，最终图片所呈现的宽高就是`200px*150px`。

- 如果固有尺寸含有固有的宽高比例，同时仅设置了宽度或高度，则元素依然按照固有的宽高比例显示。

    img {
        width: 200px;
    }
    <img src="1.jpg" alt="">

设置的宽度，因为图片自身有着固定的宽高比例，所以最终图片呈现的宽高就是`200px*150px`（`150=200+192/256`）

- 如果条件不符合，在所有现代浏览器下的尺寸表现都是`300px*150px`。
- 内联替换元素和块级替换元素使用上面同一套尺寸计算规则。

> 实际开发中，为了提高加载性能和节约带宽费用，首屏图片采用滚屏的方式异步加载，并且使用一张透明的图片占位。一般直接使用`<img>`。

    img {
        visibility: hidden;
    }

    img[src] {
        visibility: visible;
    }

当`img`标签中有`src`属性时，即使为空，浏览器依然会发起请求，而且请求的是当前页面数据。当图片的`src`缺省时，图片不会有任何请求，是最高效的实现方式。

Firefox下`img`的表现是一个内联元素，而非替换元素，因此很多设置都它下面无效。要修复这个问题非常简单，就是直接设置`img {display:inline-block;}`

> 在CSS中，图片的固有尺寸是无法改变的，显示的仅仅是设定的`content box`尺寸，图片中的`content`替换内容默认的适配方式是填充`fill`。
> 尺寸变化的本质并不是改变固有尺寸，而是采用了填充作为适配HTML尺寸和CSS尺寸的方式。
> 在CSS3中，`img`以及其它替换元素的适配方式可以通过`object-fit`属性进行修改。

### 4. 替换元素和非替换元素的距离 ###

**观点1：替换元素和非替换元素之间只隔了一个`src`属性**

如果把`img`的`src`属性去掉，`img`就是一个和`span`类似的普通的内联标签，也就变成了一个非替换元素。

    img {
        display: block;
        outline: 1px solid;
    }
    <img>

在Firefox下，最终的宽度是100%自适应父容器的可用宽度。**`span`标签设置`width`和`height`是无效的。如果设置`<img alt="图片">`不为空的`alt`值，Chrome下也会有同样的表现。**

> 在IE中有个默认的占位替换内容，当`src`属性缺失时，会使用这个默认的占位内容，这也是IE浏览器下默认`img`尺寸是`28*30`，而不是Chrome下的`0*0`的原因。

另一个证明**替换元素和非替换元素的区别在于`src`属性**的实例就是**基于伪元素的图片内容生成技术。**

可以对`img`元素使用`::before`和`::after`伪元素进行内容生成以及样式构建，为了解决兼容性问题，需要注意一些技术点：

1. 不能有`src`属性（关键所在）
2. 不能使用`content`属性生成图片（针对Chrome）
3. 需要有`alt`属性并且有值（针对Chrome）
4. Firefox下`::before`伪元素的`content`值会被无视，`::after`无此问题，应该与Firefox自己占用了`::before`伪元素的`content`有关。

> **基于伪元素的图片内容生成技术**，在图片还没有加载时把`alt`信息呈现出来。
> 实例Demo：[src缺省时img元素的alt信息展示](http://demo.cssworld.cn/4/1-2.php)

<p data-height="365" data-theme-id="0" data-slug-hash="ejzPKV" data-default-tab="css" data-user="whjin" data-embed-version="2" data-pen-title="替换元素src" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/ejzPKV/">替换元素src</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**观点2：替换元素和非替换元素之间只隔了一个CSS`content`属性**

`content`属性决定了是替换元素还是非替换元素。

以下两个实例是等效的：

    //组一
    img {
        content: url("https://www.baidu.com/img/bd_logo1.png");
    }
    <img>

    <img src="https://www.baidu.com/img/bd_logo1.png">

    //组二
    <img src="https://www.baidu.com/img/bd_logo1.png">

    img:hover {
        content: url("logo.jpg");
    }

使用`content`属性，可以让普通标签元素变成替换元素。

### 5. `content`与替换元素关系 ###

`content`生成的内容和普通内容有很多不同的特性表现：

1. 使用`content`生成的文本无法选中、无法复制，无法被屏幕阅读设备读取，也无法被搜索引擎抓取。
2. 不能左右`:empty`伪类。`:empty`是一个CSS选择器，当元素里面无内容时进行匹配。
3. `content`动态生成值无法获取。`content`可以实现计算器效果，可以自动累加数值。

## `content`内容生成技术 ##

### 1. `content`辅助元素生成 ###

    .element:before {
        content: '';
    }

辅助元素最常见的应用就是**清除浮动**带来的影响：

    .clear:after {
        content: '';
        display: table; /*也可以是block*/
        clear: both;
    }

另一个很具有代表性的应用就是**辅助实现“两端对齐”以及“垂直居中/上边缘/下边缘对齐”效果**

`:before`伪元素用于辅助实现底对齐，`:after`伪元素用于辅助实现两端对齐。

### 2. `content`字符内容生成 ###

直接写入字符内容，常见应用是配合`@font-face`规则实现图标字体效果。

插入Unicode字符，典型应用是插入换行符来实现某些布局或效果。

    :after {
        content: '\A';
        white-space: pre;
    }

`\A`是换行符中的LF字符，其Unicode编码是`000A`，在CSS的`content`属性中则直接写成`\A`;换行符中的CR字符，其Unicode编码是`000D`，在CSS的`content`属性中则直接写成`\D`。分别指回车`CR`和换行`LF`。

<p data-height="265" data-theme-id="0" data-slug-hash="jpMYoO" data-default-tab="css,result" data-user="whjin" data-embed-version="2" data-pen-title="content字符内容生成" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/jpMYoO/">content字符内容生成</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### 3. `content`图片生成 ###

`base64`图片由于内联在CSS文件中，直接出现没有尺寸为`0`的状态，同时无须额外设置`display:block/inline-block;`，CSS代码更省。

### 4. `content`开启闭合符号生成P63 ###

### 5. `content attr`属性值内容生成 ###

    .icon:before {
        content: attr(data-title);
    }

### 6. 深入理解`content`计数器 ###

1. 属性`counter-reset`，计数器重置，还可以设置为`none`和`inherit`。取消重置以及继承重置。
2. 属性`counter-increment`，计数器递增，计数器数值变化遵循HTML渲染顺序，遇到一个`increment`计数器就变化，`counter`输出的时候就是此时的计数值。

    `counter-increment`的其他特性：
    - `counter-reset`可以一次命名两个计数器名称，`counter-increment`相对应的设定。
    - 变化的值可以灵活设定。
    - 值可以是`none`或`inherit`

3. 方法`counter()/counters()`。
    - `counter(name)`
    - `counter(name,style)`，`style`参数支持关键字值是`list-style-type`所支持的值。它的作用是：除了递增递减数字，还可以是英文字母或罗马字符等。
    - `counter`还支持级联。一个`counter`属性值可有多个`coutner()`方法。

`coutners()`方法就是**嵌套计数**，基本用法是`counters(name,string);`，其中，`string`参数为字符串（需要引号，是必需参数），表示子序号的连接字符串。

实现嵌套，**必须让每个列表容器拥有一个唯一的计数源**，通过子辈对父辈的`counter-reset`重置、配合`counters()`方法才能实现计数嵌套效果。

> 一个容器的`counter-reset`是唯一的，一旦子元素出现`counter-reset`。就会改变整个容器的嵌套关系。

`counters()`支持`style`自定义递增形式：

    counters(name, string, style);

### 7. `content`内容生成的混合特性 ###

`content`内容生成的混合特性指的是各种`content`内容生成语法可以混合在一起使用。

# 温和的`padding`属性 #

## `padding`与元素的尺寸 ##

CSS中默认的`box-sizing`是`content-box`，使用`padding`会增加元素的尺寸。

内联元素的`padding`在垂直方向会影响布局，影响视觉表现。内联元素没有可视宽度/高度（`clientWidth/clientHeight`永远为`0`），垂直方向的行为表现完全受`line-height`和`vertical-align`的影响。

**利用内联元素的`padding`实现高度可控的分割线。**

网页通过地址栏的`hash`值和页面HTML的`id`值一样发生锚点定位。

> **内联元素设置`padding`不会影响布局，但是块级元素就会。**

    <h3><span id="hash">标题</span></h3>
    h3 {
        line-height: 30px;
        font-size: 14px;
    }

    h3 > span {
        padding-top: 58px;
    }

**对于非替换元素的内联元素，不仅`padding`不会加入行盒高度的计算，`margin/border`也都是如此，都是不计算高度，但实际上在内联盒周围发生了渲染。**

## `padding`的百分比值 ##

`padding`属性值不支持负值，支持百分比值，`padding`百分比值无论是水平方向还是垂直方向均是相对于宽度计算。

**实现一个固定比例（宽高比）的头图效果。**

    .box {
        padding: 10% 50%;
        position: relative;
    }

    .box > img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

内联元素和块状元素应用百分比值的表现：

- 同样相对于宽度计算；
- 默认的高度和宽度细节有差异；
- `padding`会断行。

**内联元素的垂直`padding`会让“幽灵空白节点”出现。**

内联元素默认的高度完全受`font-size`大小控制。通过以下方法使得“幽灵空白节点”高度变为`0`。

    span{
        padding: 50%;
        font-size: 0;
        background-color: gray;
    }

## 标签元素内置的`padding` ##

1. `ol/ul`列表内置`padding-left`，单位是`px`，如果列表中的`font-size`值很小，则`li`元素的项目符号就会在`ol/ul`元素的左边缘距离很开。
2. 表单元素大都内置`padding`。
    - 所有浏览器`input/textarea`输入框内置`padding`
    - 所有浏览器`button`按钮内置`padding`
    - 部分浏览器`select`下拉内置`padding`
    - 所有浏览器`radio/checkbox`单复选框无内置`padding`
    - `button`按钮元素的`padding`最难控制

**使用`label`元素解决`button`按钮在不同浏览器下`padding`表现不一致的问题**

    button {
        position: absolute;
        clip: rect(0 0 0 0);
    }

    label {
        display: inline-block;
        line-height: 20px;
        padding: 10px;
    }

## `padding`与图形绘制 ##

**“三道杠”小图标**

    <div class="icon-menu"></div>
    .icon-menu {
        display: inline-block;
        width: 100px;
        height: 8px;
        padding: 20px 0;
        border-top: 8px solid;
        border-bottom: 8px solid;
        background-color: currentColor;
        background-clip: content-box;
    }

**“双层圆点”图**

    <div class="icon-dot"></div>
    .icon-dot {
        display: inline-block;
        width: 100px;
        height: 100px;
        padding: 10px;
        border: 10px solid;
        border-radius: 50%;
        background-color: currentColor;
        background-clip: content-box;
    }

# 激进的`margin`属性 #

## `margin`与元素尺寸以及相关布局 ##

**1. 元素尺寸**

- **元素尺寸**：对应jQuery中的`$().width/$().height()`方法，包括`padding/border`，也就是元素的`border box`的尺寸。在原生的**DOM API**中写成`offsetWidth/offsetHeight`，也称为**元素偏移尺寸**。
- **元素内部尺寸**：对应jQuery中的`$().innerWidth()/$().innerHeight()`方法，表示元素的内部尺寸，包括`padding`但不包括`border`，也就是元素的`padding box`的尺寸。在原生的**DOM API**中写成`clientWidth/clientHeight`，也称为**元素可视尺寸**。
- **元素外部尺寸**：对应jQuery中的`$().outerWidth(true)/$().outerHeight(true)`方法，表示元素的外部尺寸，包括`padding/border/margin`，也就是元素的`margin box`的尺寸。没有对应的原生的**DOM API**。

**2. `margin`与元素的内部尺寸**

> **一侧定宽的两栏自适应布局效果**

1. 如果图片左侧定位：

```
<div class="box">
    <img src="1.jpg" alt="">
    <p>文字内容...</p>
</div>
.box {
    overflow: hidden;
}

.box > img {
    float: left;
}

.box > p {
    margin-left: 140px;
}
```

文字内容根据`.box`盒子的宽度变化而自动排列，形成自适应布局效果。

2. 如果图片右侧定位：改变浮动和`margin`方向。借助`margin`负值定位实现。
3. 如果图片右侧定位，同时顺序一致：

```
<div class="box">
    <div class="full">
        <p>文字内容...</p>
    </div>
    <img src="1.jpg" alt="">
</div>
.box {
    overflow: hidden;
}

.full {
    width: 100%;
    float: left;
}

.box > img {
    float: left;
    margin-left: -128px;
}

.full > p {
    margin-right: 140px;
}
```

3. 如果图片右侧定位，同时顺序一致。

> 需求：列表块两端对齐，一行显示3个，中间有2个`20px`的间隙。

    ul {
        list-style-type: none;
        margin-right: -20px;
    }

    ul > li {
        float: left;
        width: 100px;
        margin-right: 20px;
        background-color: #a0b3d6;
    }

**3. `margin`与元素的外部尺寸**

> 借助`margin`的外部尺寸特性来实现底部留白。只能使用子元素的`margin-bottom`来实现滚动容器的底部留白。

    <div style="height: 200px;">
        <img src="1.jpg" alt="" style="margin: 50px 0;">
    </div>

> 利用`margin`外部尺寸实现等高布局。此布局多出现在分栏有背景色或中间有分割线的布局中。`height:100%`需要在父级设定具体高度值时才有效。

    <div class="column-box">
        <div class="column-left"></div>
        <div class="column-right"></div>
    </div>
    .column-box {
        overflow: hidden;
    }

    .column-left, .column-right {
        margin-bottom: -9999px;
        padding-bottom: 9999px;
    }

> **等高布局实现原理**

垂直方向`margin`无法改变元素的内部尺寸，但却能改变外部尺寸。默认情况下，垂直方向块级元素上下距离是`0`，一旦设置`margin-bottom:-9999px;`后面所有元素和上面元素的空间距离变成`-9999px`，就是后面元素都往上移动`9999px`。`padding-bottom:9999px;`增加元素高度，正负一抵消，对布局层并无影响，但视觉层多了`9999px`高度的可使用的背景色。配合`overflow:hidden;`把多余的色块背景隐藏，实现视觉上的等高布局效果。

## `margin`的百分比值 ##

元素设置`margin`在垂直方向上无法改变元素自身的内部尺寸，往往需要父元素作为载体，此外，由于`margin`合并的存在，垂直方向往往需要双倍尺寸才能和`padding`表现一致。

### `margin`合并 ###

块级元素的上边距`margin-top`与下边距`margin-bottom`有时会合并为单个外边距。

1. **块级元素**，但不包括浮动和绝对定位元素。
2. **只发生在垂直方向**，默认文档流是水平的，因此发生`margin`合并就是垂直方向。

**`margin`合并的3种场景**

1. 相邻兄弟元素`margin`合并。
2. 父级和第一个/最后一个子元素。

**阻止`margin`合并**

对于`margin-top`合并，可以进行如下操作（满足一个条件即可）：

- 父元素设置为块状格式化上下文元素
- 父元素设置`border-top`值；
- 父元素设置`padding-top`值；
- 父元素和第一个子元素之间添加内联元素进行分隔。

对于`margin-bottom`合并，可以进行如下操作（满足一个条件即可）：

- 父元素设置为块状格式化上下文元素
- 父元素设置`border-bottom`值；
- 父元素设置`padding-bottom`值；
- 父元素和第一个子元素之间添加内联元素进行分隔。
- 父元素设置`height`、`min-height`、`max-height`

`margin`合并导致头图掉下来可以添加`.container{overlfow:hidden;}`进行修复。

其原理是通过设置`overflow`属性让父级元素块状格式化上下文。

3. 空块级元素的`margin`合并。`border`阻断`margin`合并。

> 不希望空`div`元素有`margin`合并，可以进行如下操作：

- 设置垂直方向的`border`
- 设置垂直方向的`padding`
- 里面添加内联元素（直接Space空格键无效）
- 设置`height`或`min-height`

**3. `margin`合并的计算规则**

> `margin`合并的计算规则总结为**正正取大值**，**正负值相加**，**负负最负值**

**4. `margin`合并的意义**

合并机制可以保证元素上下间距一致。

父子`margin`合并的意义在于：在页面上任何地方嵌套或直接放入任何空`div`，都不会影响原来的块布局。

遇到列表或模块，全部保留上下`margin`设置：

    .list {
        margin-top: 15px;
        margin-bottom: 15px;
    }

## `margin:auto` ##

1. 元素没有设置`width/height`，也会自动填满容器。
2. 元素没有设置`width/height`，也会自动填满包含块容器。

`margin:auto`的填充规则：

1. 如果一侧定值，一侧`auto`，则`auto`为剩余空间大小。
2. 如果两侧均是`auto`，则平分剩余空间。

`auto`用于计算对应方向所获得的剩余空间大小。

<p data-height="265" data-theme-id="0" data-slug-hash="VBbENM" data-default-tab="css,result" data-user="whjin" data-pen-title="margin:auto-1" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/VBbENM/">margin:auto-1</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**实现右对齐效果，`margin`属性的`auto`计算就是为块级元素左中右对齐而设计的，和内联元素使用`text-align`控制左中右对齐相对应。**

<p data-height="265" data-theme-id="0" data-slug-hash="bjWyLK" data-default-tab="css,result" data-user="whjin" data-pen-title="margin-auto左中右居中" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/bjWyLK/">margin-auto左中右居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**居中对齐左右同时`auto`计算即可**

<p data-height="265" data-theme-id="0" data-slug-hash="yqbWRW" data-default-tab="css,result" data-user="whjin" data-pen-title="margin-auto-3" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/yqbWRW/">margin-auto-3</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**绝对定位垂直水平居中**

<p data-height="265" data-theme-id="0" data-slug-hash="BPZBvP" data-default-tab="css,result" data-user="whjin" data-pen-title="margin-auto垂直水平居中" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/BPZBvP/">margin-auto垂直水平居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## `margin`无效情形解析 ##

1. `display`计算值`inline`的非替换元素的垂直`margin`无效。
2. 表格中`tr`和`td`元素或设置`display`计算值是`table-cell`或`table-row`的元素的`margin`都是无效。
3. `margin`合并的时候，更改`margin`值可能没有效果。
4. 绝对定位元素非定位方位的`margin`值无效。绝对定位元素的渲染是独立的，所以设置了`top`、`left`方位，再设置`margin-right`无效。
5. 定高容器的子元素的`margin-bottom`或定宽容器的子元素的`margin-right`的定位失效。**使用`margin`属性改变自身的位置，必须是和当前元素定位方向一样的`margin`属性，否则`margin`只能影响后面的元素或父元素。**
6. 鞭长莫及导致的`margin`无效。
7. 内联特性导致的`margin`无效。

# 功勋卓著的`border`属性 #

## 为什么`border-width`不支持百分比值 ##

`border-width`支持关键字，`thin`、`medium`

## 了解各种`border-style`类型 ##

1. `border-style:none`，默认值
2. `border-style:solid`，实线边框
3. `border-style:dashed`，虚线边框
4. `border-style:dotted`，点线边框
5. `border-style:double`，双线边框
6. 其他`border-style`类型，`inset`内凹，`outset`外凸，`groove`沟槽，`ridge`山脊

## `border-color`和`color` ##

`border-color`默认颜色就是`color`色值。

<p data-height="265" data-theme-id="0" data-slug-hash="rrwGLP" data-default-tab="css,result" data-user="whjin" data-pen-title="加号按钮" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/rrwGLP/">加号按钮</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## `border`与透明边框技巧 ##

**1. 右下方`background`定位技巧**

方法一：**使用透明边框**

    .box {
        border: 50px solid transparent;
        background-position: 100% 50%;
    }

**2. 增加点击区域大小**

**3. 三角等图形绘制**

    .box {
        width: 0;
        border: 10px solid;
        border-color: #f30 transparent transparent;
    }
    <div class="box"></div>

## `border`与图形构建 ##

## `border`等高布局技术 ##

<p data-height="265" data-theme-id="0" data-slug-hash="PBKwVZ" data-default-tab="css,result" data-user="whjin" data-pen-title="border等高布局" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/PBKwVZ/">border等高布局</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**父容器不能使用`overflow:hidden;`清除浮动影响，因为溢出隐藏是基于`padding box`的，如果设置了则左浮动的导航列表元素就会被隐藏掉。**
