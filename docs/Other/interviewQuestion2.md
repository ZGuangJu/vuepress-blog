---
title: 面试题2
date: 2020-09-20
sidebar: 'auto'
categories:
 - 小知识
tags:
 - 面试题
publish: true
sticky: 12
# 打赏
showSponsor: true
---

[2021年面试题](https://www.php.cn/js-tutorial-457006.html)

[12个vue高频原理面试题](https://www.php.cn/js-tutorial-455048.html)

[29道vue高频面试题](https://www.php.cn/js-tutorial-457074.html)

<!-- [[toc]] -->
## HTML

### 1. 语义化标签

## CSS

### 1. CSS hack 原理及常用 hack（未完）

原理：CSS hack是通过在CSS样式中加入一些特殊的符号，让不同的浏览器识别不同的符号，以达到应用不同的 CSS 样式的目的，
比如 .kwstu{width:300px;_width:200px;}

- `CSS Hack`常见的有三种形式：
  - `CSS` 属性 `Hack`
  比如 `IE6` 能识别下划线`_`和星号 `*` ，`IE7` 能识别星号 `*` ，但不能识别下划线`_`，而 `firefox` 两个都不能认识。
  - `CSS` 选择符 `Hack`
  比如 `IE6` 能识别 `*html .class{}`，`IE7`能识别 `*+html .class{}` 或者 `*:first-child+html .class{}`。
  - `IE` 条件注释 `Hack`(`Hack` 主要针对`IE` 浏览器)。
  IE条件注释是微软从 `IE5` 开始就提供的一种非标准逻辑语句。比如针对所有`IE`：`<!–[if IE]><!–您的代码–><![endif]–>`，针对 `IE6` 及以下版本：`<!–[if lt IE 7]><!–您的代码–><![endif]–>`，这类 `Hack` 不仅对 `CSS` 生效，对写在判断语句里面的所有代码都会生效。
- 例子 -- 兼容ie8

```html
 <!--[if IE 8]>
<link rel="stylesheet" href="./css/headerie8.css">
<![endif]-->
```

[hack 详解](https://www.w3cschool.cn/css/css-hack.html)

### 2. CSS 优先级

排序：

`!important` > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性(同一级别中后写的会覆盖先写的样式)

`!important` > 行内样式 > 内嵌样式表 > 外部样式表

对于相同来源的 `CSS` 来说，不同位置的样式其优先级也是不同的。一般来说，行内样式会优先于内嵌样式表，内嵌样式表会优先于外部样式表。而被附加了`!important`关键字的声明会拥有最高的优先级。

- 如果多个不同类型的选择器同时为一个对象设置样式时，该对象将如何显示最终样式，样式的权值取决于样式的选择器，权值定义如下表:
  - 标签选择器：优先级加权值为 `1`。
  - 伪元素或伪对象选择器(:first-child等)：优先级加权值为 `1`。
  - 类选择器：优先级加权值为 `10`。
  - 属性选择器：优先级加权值为 `10`。
  - ID选择器：优先级加权值为 `100`。
  - 内联样式 `1000`
  - 其他选择器：优先级加权值为 `0`，如通配选择器等。

可以看到，内联样式的权值 > ID选择器 > 类选择器 > 标签选择器，除此以外，后代选择器的权值为每项权值之和。(比如”`#nav .current a`”的权值为`100 + 10 + 1 = 111`)。

依此方法类推，最后把所有加权值数相加，即可得到当前选择器的总加权值，最后根据加权值来决定哪个样式的优先级大。

当有多个规则都能应用于同一个元素时，权重越高的样式将被优先采用

对于由多个选择器组合而成的复合型选择器，首先分别计算每个组成选择器的加权值，接着相加得出当前选择器的总分，最后根据选择器的分值大小，分值越高则优先级越高，那么就将应用它所设置的样式。

如果分值相同，则根据位置关系来进行判断，靠近对象的样式就应有高的优先级。

- `!important`使用示例:

```html
{
    样式:值!important;
    }
```

IE6及以下兼容: `.child`中的`!important`是不生效的(在同一条规则集里不生效),实例如下：

```html
   <style>
            .child {
                width: 100px;
                height: 100px;
                background-color: red !important;
                background-color: yellowgreen;
            }
    </style>

    <body>
        <div class="parent">
            <div class="child">content 显示的还是黄绿色</div>
        </div>
    </body>
```

而这样是可以的，没有在同一个规则集内：

```html
 <style>
            .child {
                width: 100px;
                height: 100px;
                background-color: red !important;
            }
            .child {
                width: 100px;
                height: 100px;
                background-color: yellowgreen;
            }
        </style>
    </head>
    <body>
        <div class="parent">
            <div class="child">content 显示红色</div>
        </div>
    </body>
```

:::warning 注意：

1. `IE6`及更早浏览器下，`!important`在同一条规则集内不生效。
2. 如果`!important`被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被作用上`!important`。
3. 关键字`!important`必须放在一行样式的末尾并且要放在该行分号前，否则就没有效果。

:::
[CSS 优先级详解](http://c.biancheng.net/view/1337.html)

### 3. CSS 关于属性继承

- 一句话总结：继承而发生样式冲突时，最近祖先获胜（最近原则）

1. 继承中哪些样式不会被继承？
多数边框类属性，比如象`Padding`（补白），`Margin`（边界），背景和边框的属性都是不能继承的。
2. 继承发生冲突的时候，什么样式获得胜利？
最近祖先
3. 表格能继承父亲的样式么？
不能

**所谓CSS的继承是指被包在内部的标签将拥有外部标签的样式性质。**

CSS的一个主要特征就是**继承，它是依赖于祖先-后代的关系的**。继承是一种机制，它允许样式不仅可以应用于某个特定的元素，还可以应用于它的后代。例如一个BODY定义了的颜色值也会应用到段落的文本中。下面举例说明：

```html
    <style>
        body {
            color: red;
        }
        </style>
    <body>
        <p>CSS的<strong>层叠和继承</strong>深入探讨</p>
    </body>
```

- `CSS`中的样式覆盖原则
  - 规则一：由于继承而发生样式冲突时，最近祖先获胜（最近原则）。
  - 规则二：继承的样式和直接指定的样式冲突时，直接指定的样式获胜（最直接原则）。
  - 规则三：直接指定的样式发生冲突时，样式权值高者获胜。
  - 规则四：样式权值相同时，后者获胜。
  - 规则五：`!important`的样式属性不被覆盖。

- 不可继承的：`display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi`

所有元素可继承：`visibility、cursor`

内联元素可继承：`letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction`

块状元素可继承：`text-indent和text-align`

列表元素可继承：`list-style、list-style-type、list-style-position、list-style-image`

表格元素可继承：`border-collapse`
[CSS 属性继承详解](https://www.cnblogs.com/Renyi-Fan/p/9225805.html)

### 4. display: none与visibility: hidden的区别

1. `visibility`具有继承性，给父元素设置`visibility:hidden`;子元素也会继承这个属性。但是如果重新给子元素设置`visibility: visible`,则子元素又会显示出来。这个和`display: none`有着质的区别

2. `visibility: hidden`不会影响计数器的计数，如图所示，`visibility: hidden`虽然让一个元素不见了，但是其计数器仍在运行。这和`display: none`完全不一样
3. `CSS3`的`transition`支持`visibility`属性，但是并不支持`display`，由于`transition`可以延迟执行，因此可以配合`visibility`使用纯`css`实现`hover`延时显示效果。提高用户体验。

### 3. 盒模型

所有`HTML`元素可以看作盒子，在`CSS`中，`"box model"`这一术语是用来设计和布局时使用。

`CSS`盒模型本质上是一个盒子，封装周围的`HTML`元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

- 盒模型分为，标准盒模型盒特殊盒模型

## Vue

## 综合

### 1. H5、C3、ES6的新特性

#### H5的新特性

1. 语义化标签
    - 有利于`SEO`，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重。
    - 语义化的`HTML`在没有`CSS`的情况下也能呈现较好的内容结构与代码结构
    - 方便其他设备的解析
    - 便于团队开发和维护
2. 表单新特性

3. 多媒体视频(`video`)和音频(`audio`)

4. web存储
    - `sessionstorage`:关闭浏览器清空数据，储存大小约`5M`。
    - `localstorage`：永久生效，存储大小`20M`，多窗口下都可以使用
    - 都只能储存字符串

#### C3的新特性

1. 选择器：属性选择器`E[attr]`，伪类选择器`E:nth-child(n)`，空伪类`E:empty` ，排除伪类`E:not(selector)`

2. 颜色：新增了`RGBA`、`HSLA`模式

3. 文本：为文本设置阴影增强文本的表现能力，通过 `text-shadow`，可分别设置偏移量、模糊度、颜色（可设透明度）。

4. 盒模型：`box-sizing: border-box;`

5. 边框：圆角`border-radius`，阴影`box-shadow`

6. 背景：
    - 通过 `background-size` 设置背景图片的尺寸。
    - 通过 `background-origin` 可以设置背景图片定位(`background-position`)的参照原点。
    - 通过`background-clip`，可以设置对背景区域进行裁切，即改变背景区域的大小。

7. 渐变：线性渐变 `linear-gradient`，径向渐变`radial-gradient`

8. 字体图标

9. 伸缩盒子：调整主轴对齐justify-content，调整侧轴对齐align-items，伸缩分配flex，正序方式排序order

10. 2D转换：
    - translate 设置元素的位置（x/y坐标）
    - scale 设置元素的缩放比例（x/y两个方向）
    - rotate 设置元素旋转（正值为顺时针，负值为逆时针）
    - transform-origin 设置转换元素的原点

11. 3D转换：
    - 透视（perspective）值为1000px~1200px
    - 将2D元素转换为3D立体（给父元素设置）transform-style: perserve-3d;
    - 设置元素背面是否可见 backface-visibility: hidden;

12. 动画：
    - 定义关键帧 @keyframes
    - 通过百分编写帧
    - 在各帧中分别定义各属性
    - 通过animation将动画应用于相应元素

#### ES6新特性

- 变量声明：let作用:声明变量，块级作用域，必须先声明后使用，在同一个块内不允许重复命名，没有变量提升。const作用:声明常量，声明的同时必须赋值，不能被重新赋值
- 解构赋值
- 模板字符串，支持换行
- 函数扩展，箭头函数

### DTD

- 什么是DTD

`DTD`为英文`Document Type Definition`，中文意思为“文档类定义”。`DTD`肩负着两重任务: 一方面它帮助你编写合法的代码 ，另一方面它让浏览器正确地显示器代码。也许你会问它们居然有这样的能力？

- 为什么使用 `DTD`？

通过 `DTD`，您的每一个 `XML` 文件均可携带一个有关其自身格式的描述。

通过 `DTD`，独立的团体可一致地使用某个标准的 `DTD` 来交换数据。

而您的应用程序也可使用某个标准的 `DTD` 来验证从外部接收到的数据。

您还可以使用 `DTD` 来验证您自身的数据。
