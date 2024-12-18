﻿---
title: 第8章 文本处理能力
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
## 第8章 文本处理能力

## `line-height`的另一个朋友`font-size`

`vertical-align`百分比值属性是相对于`line-height`计算，`line-height`的数值属性和百分比值都是相对于`font-size`计算。

## `font-size`和`vertical-align`的隐秘故事 ##

```html
<p data-height="265" data-theme-id="0" data-slug-hash="jpzveQ" data-default-tab="css,result" data-user="whjin" data-pen-title="图标垂直居中" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/jpzveQ/">图标垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

**原理：内联元素默认基线对齐，图片的基线是图片的下边缘，文字内容的基线是字符`x`下边缘。图片下边缘和文字字形边缘往上位置对齐。通过`vertical-align:25%`声明让图片的下边缘和中文汉字的中心线对齐。**

## 理解`font-size`与`ex`、`em`和`rem`的关系 ##

总结：`1em`的计算值等同当前元素所在的`font-size`计算值。

## 理解`font-size`的关键字属性值 ##

1. 相对尺寸关键字。`larger`、`smaller`
2. 绝对尺寸关键字。`xx-large`、`x-large`、`large`、`medium`、`small`、`x-small`、`xx-small`

- 容器设置`font-size:medium`，此时这个局部展示区域的字号跟随浏览器的设置，默认计算值是`16px`。
- 容器内的文字字号全部使用相对单位，如百分比值或`em`，然后基于`16px`进行转换。

## `font-size:0`与文本的隐藏 ##

隐藏`logo`对应元素内的文字，除了`text-indent`缩进隐藏外，还可以使用以下方法：

    .logo {
        font-size: 0;
    }

## 字体属性家族`font-family`

`font-family`支持两类属性值，一类是**字体名**，一类是**字体族**。

**字体族**：

- `serif`：衬线字体
- `sans-serif`：无衬线字体
- `monospace`：等宽字体
- `cursive`：手写字体
- `fantasy`：奇幻字体
- `system-ui1`：系统UI字体

## 了解衬线字体和无衬线字体

字体分衬线字体和无衬线字体。

- 中文衬线字体**宋体**，英文衬线字体**Times New Roman**、**Georgian**等；
- 无衬线字体，中文**雅黑**字体，英文**Arial**、**Verdana**、**Tahoma**、**Helivetica**、**Calibra**等。

## 等宽字体的实践价值 ##

**1. 等宽字体与代码呈现**

**2. 等宽字体与图形呈现**

**3. `ch`单位与等宽字体布局**

`1ch`表示一个`0`字符的宽度。

## 中文字体和英文名称 ##

**Windows常见内置中文字体和对应英文名称。**

| 字体中文名 | 字体英文名         |
| :--------- | :----------------- |
| 宋体       | SimSun             |
| 黑体       | SimHei             |
| 微软雅黑   | Microsoft Yahei    |
| 微软正黑体 | Microsoft JhengHei |
| 楷体       | KaiTi              |
| 新宋体     | NSimSun            |
| 仿宋       | FangSong           |

## 一些补充说明 ##

微软正黑体是一款全面支持ClearType技术的TrueType**无衬线字体**，用于繁体中文系统。

# 字体家族其他成员

## `font-weight` ##

## `font-style` ##

- `font-style:normal`
- `font-style:italic`，使用当前字体的斜体
- `font-style:oblique`，单纯让文字倾斜

## `font-variant` ##

# `font`属性

## 缩写的`font`属性 ##

完整语法：`[font-style||font-variant||font-weight]?font-size[/line-height]?font-family`，（`font-size`和`font-family`是必需项）。

`font`缩写会破坏部分属性的继承性，必须要带上`font-family`。利用`@font face`规则将字体列表重定义为一个字体。

## 使用关键字值得`font`属性 ##

`font`属性支持关键字属性值，语法：`font:caption|icon|menu|message-box|small-caption|status-bar`

- `caption`：活动窗口标题栏使用的字体
- `icon`：包含图标内容所使用的字体，如所有文件夹名称、文件名称、磁盘名称，浏览器窗口标题所使用的字体
- `menu`：菜单使用的字体，如文件夹字体
- `message-box`：消息盒里面使用的字体
- `small-caption`：调色板标题所使用的字体
- `status-bar`：窗体状态栏使用的字体

使用关键字作为属性值必须是独立的，不能添加`font-family`或`font-size`等。

## `font`关键字属性值的应用价值 ##

    //推荐使用
    html {font: menu;}
    body {font-size: 16px;}

    html {font: small-caption;}
    body {font-size: 16px;}

    html {font: status-bar;}
    body {font-size: 16px;}

# `@font face`规则 #

## `@font face`的本质是变量 ##

`@font face`的本质上就是一个定义字体或字体集的变量，包括字体重命名、默认字体样式设置等。

`@font face`规则支持的CSS属性有`font-family`、`src`、`font-style`、`font-weight`、`unicode-range`、`font-variant`、`font-stretch`和`font-feature-settings`。

    @font-face {
        font-family: 'example';
        src: url("example.ttf");
        font-style: normal;
        font-weight: normal;
        unicode-range: U+0025-00FF;
        font-variant: small-caps;//忽略
        font-stretch: expanded;//忽略
        font-feature-settings: "ligal" on;//忽略
    }

**1. `font-family`**

    @font-face {
        font-family: '$';
        src: url("example.ttf");
    }

**2. `src`**

如果是使用系统字体，则使用`local()`功能符；如果使用外链字体，则使用`url()`功能符。

    @font-face {
        font-family: ICON;
        src: url("icon.eot") format('eot');
        src: url("icon.eot?#iefix") format("embedded-opentype"),
        url("icon.woff2") format("woff2"),
        url("icon.woff") format("woff"),
        url("icon.ttf") format("truetype"),
        url("icon.svg#icon") format("svg");
        font-style: normal;
        font-weight: normal;
    }

- `eot`格式是IE私有的。（**舍弃**）
- `woff`是专门为Web开发而设计的字体格式。（**次优先使用**）
- `woff2`是比`woff`尺寸更小的字体，是Web开发首选字体。（**优先使用**）
- `ttf`格式作为系统安装字体比较多。（**舍弃**）

**推荐使用方法**：

    @font-face {
        font-family: ICON;
        src: url("icon.eot") format('eot');
        src: local('☺'),
        url("icon.woff2") format("woff2"),
        url("icon.woff") format("woff"),
        url("icon.ttf") format("truetype");
    }

**3. `font-style`**

**4. `font-weight`**

**5. `unicode-range`**

`unicode-range`的作用是可以让特定的字符或特定范围的字符使用指定的字体。

## `@font face`与字体图标技术 ##

    .icon {
        font-family: ICON;
    }

    .icon-microphone:before {
        content: '\1f3a4';
    }

# 文本的控制 #

## `text-indent`与内联元素缩进 ##

`text-indent`负值隐藏文本内容。

<p data-height="265" data-theme-id="0" data-slug-hash="pZVrba" data-default-tab="html,result" data-user="whjin" data-pen-title="text-indent与纯文本对齐布局" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/pZVrba/">text-indent与纯文本对齐布局</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

1. `text-indent`仅对第一行内联盒子内容有效；
2. 非替换元素以外的`display`计算值为`inline`的内联元素设置`text-indent`值无效，如果计算值是`inline-block/inline-table`则会生效。因此，如果父级块状元素设置了`text-indent`属性值，子`inline-block/inline-table`需要设置`text-indent:0`重置。
3. `input`标签按钮`text-indent`值无效。
4. `button`标签按钮`text-indent`值有效，但存在兼容性问题。
5. `input`和`textarea`输入框的`text-indent`在低版本IE下有兼容性问题。

## `letter-spacing`与字符间距 ##

`letter-spacing`特性：

1. 继承性；
2. 默认值是`normal`不是`0`。
3. 支持负值，且值足够大时会让字符形成重叠，甚至反向排列。
4. 第一行都会保留至少一个字符。
5. 支持小数值。
6. 暂时不支持百分比值。

## `word-spacing`与单词间距 ##

`word-spacing`和`letter-spacing`共同特性：

1. 具有继承性；
2. 默认值都是`normal`。
3. 都支持负值，都可以让字符重叠，不适合使用`word-spacing`来清除空白间隙。
4. 都支持小数值。
5. 间隔算法都会受到`text-align:jusitify`两端对齐的影响。

两者差异：

`letter-spacing`作用域所有字符，`word-spacing`仅作用于空格字符（增加空格的间隙宽度）。

## 了解`word-break`和`word-wrap`的区别 ##

`word-break`属性语法：

- `word-break:normal`：
- `word-break:break-all`：允许任意非CJK（Chinese/Japanese/Korean）文本间的单词断行
- `word-break:keep-all`：不允许CJK文本中的单词换行，只能在半角空格或连字符处换行。实际上和`normal`一致。移动端不适合使用这个属性值。

`word-wrap`语法：

- `word-wrap:normal`：正常的换行规则
- `word-wrap:break-word`：一行单词中没有换行点时换行，CSS3中名称`overflow-wrap`

`word-break:break-all`的作用是所有的都换行，而`word-wrap:break-word`则是如果这一行文字有了可换行的点（如空格或CJK等），就在这些换行点换行。

<p data-height="300" data-theme-id="0" data-slug-hash="ejrPJq" data-default-tab="css,result" data-user="whjin" data-pen-title="word-break:break-all和word-wrap:break-word的区别" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/ejrPJq/">word-break:break-all和word-wrap:break-word的区别</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## `white-space`与换行和空格的控制 ##

**1. `white-space`的处理模型**

`white-space`属性声明了如何处理元素内的空白字符，包括**空格键**`Space`、**回车键**`Enter`、**制表符**`Tab`产生的空白。`white-space`可以决定图文内容是否在一行显示（回车键是否生效），是否显示大段连续空白（空格是否生效）等。

其属性值包括：

- `normal`：合并空白字符和换行符。
- `pre`：空白字符不合并，并且内容只在有换行符的地方换行。
- `nowrap`：和`normal`一样会合并空白字符，但不允许文本环绕。
- `pre-wrap`：和`pre`一样，但允许文本环绕。
- `pre-line`：合并空白字符，但只在有换行符的地方换行允许文本环绕。

`white-space`的功能有3个维度，分别是：**是否合并空白字符**、**是否合并换行符**、**文本是否自动换行**。

<h4 style="text-align:center;">**`white-space`不同属性值功能示意**</h4>

| 属性       | 换行 | 空格和制表 | 文本环绕 |
| ---------- |
| `normal`   | 合并 | 合并       | 环绕     |
| `nowrap`   | 合并 | 合并       | 不环绕   |
| `pre`      | 保留 | 保留       | 不环绕   |
| `pre-wrap` | 保留 | 保留       | 环绕     |
| `pre-line` | 保留 | 合并       | 环绕     |

**2. `white-space`与最大可用宽度**

当`white-space`设置为`nowrap`时，元素的宽度表现为**最大可用宽度**，换行符和一些空格全部合并，文本一行显示。

1. **包含块尺寸大小处理**。绝对定位和`inline-block`元素都具有包裹性，当文本内容宽度超过包含块宽度时，就会发生文本环绕现象。
2. **单行文字溢出`...`效果**。`text-overflow:ellipsis;`文字内容超出打点效果离不开`white-space:nowrap;`声明。
3. **水平列表切换效果**。如果列表的数目是不固定的，使用`white-space:nowrap;`使列表一行显示。

## `text-align`与元素对齐 ##

`text-align:justify`想要实现两端对齐布局效果，需要满足两点：一是**有分隔点**，如空格；二是**要超过一行**，此时不是最后一行内容会两端对齐。

`text-align-last`属性，可以规定最后一行内联内容的排列方式。

    .justify {
        text-align-last: justify;
    }

这个方法存在兼容性问题。

## 如何解决`text-decoration`下划线和文本重叠的问题 ##

对于纯内联元素，垂直方向的`padding`属性和`border`属性对原来的布局定位等没有任何影响。

> 使用`border-bottom`模拟`text-decoration`下划线解决文本重叠的问题

## `text-transform`字符大小写 ##

`text-transform`是为英文字符设计，**全大写`text-transform:uppercase`**，**全小写`text-transform:lowercase`**

**1. 场景一：身份证输入**

**2. 场景二：验证码输入**

# 了解`:first-letter/:first-line`伪元素 #

## 深入`:first-letter`伪元素及其实例 ##

**1. `::first-letter`伪元素生效的前提**

- 元素的`display`计算值必须是`block`、`inline-block`、`list-item`、`table-cell/table-caption`，其他值没有用。
- 可以直接作为伪元素的字符是数字、英文字母、中文、`$`、一些运算符，以及一些“空格”。
- 字符前面不能有图片或`inline-block/inline-table`之类的元素存在。

**2. `::first-letter`伪元素可以生效的CSS属性**

字符被选做`::first-letter`伪元素，只有一部分有效：

- 所有字体相关属性：`font`、`font-style`、`font-variant`、`font-weight`、`font-size`、`line-height`和`font-family`。
- 所有背景相关属性：`background-color`、`background-image`、`background-position`、`background-repeat`、`background-size`和`background-attachment`。
- 所有`margin`相关属性：`margin`、`margin-top/right/bottom/left`。
- 所有`padding`相关属性：`padding`、`padding-top/right/bottom/left`。
- 所有`border`相关属性：`border`、`border-style`、`border-color`、`border-width`。
- `color`属性。
- `text-decoration`、`text-transform`、`letter-spacing`、`word-spacing`、`line-height`、`float`和`vertical-align`（只有当`float:none`时）等属性。

**3. `::first-letter`伪元素特点**

1. 支持部分`display`属性值标签嵌套。`::first-letter`伪元素获取可以跨标签，不仅能选择匿名内联盒子，还能透过层层标签进行选择。
    - `display`值是`inline`、`block`、`table`、`table-row`、`table-caption`、`table-cell`、`list-item`有效。
    - `inline-block/inline-table`无效。
    - `display:flex`直接选择下一行的字符内容。
2. 颜色等权重总是多了一层。`::first-letter`伪元素作为子元素存在，对于`color`继承属性，子元素的CSS设置一定比父元素的级别要高，即使使用了`!important`，**子元素会先继承，然后再应用自身设置**。

   ```css
    p:first-letter {
        color: #cd0000; /*第一个字符的颜色是red*/
    }

    p > span {
        color: blue !important;
    }
    <p><span>第一个</span>字符会不会变成红色？</p>
    ```

**4. `::first-letter`伪元素实际应用**

   ```css
    <p class="price">￥399</p>
    .price:first-letter {
        margin-right: 5px;
        font-size: xx-large;
        vertical-align: -2px;
    }
    ```

## `:first-line`伪元素 ##

- 只能作用在块级元素上`block/inline-block/list-item/table-cell/table-caption`
- 仅支持部分CSS属性
    - 所有字体相关属性
    - `color`属性
    - 所有背景相关属性
    - `text-decoration`、`text-transfor`、`letter-spacing`、`word-spacing`、`line-height`和`vertical-align`
    - 支持标签嵌套。不支持`table`属性
