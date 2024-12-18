---
title: 第7章 层叠规则
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
## 第7章 层叠规则

## `z-index`

`z-index`属性只有和定位元素在一起时才会起作用，可以是正数或负数。

## 层叠上下文和层叠水平

## 理解元素的层叠顺序（从上至下）

1. （**装饰**）正`z-index`，位置在最下面，特指层叠上下文元素的边框和背景色
2. `z-index:auto`或看成`z-index:0`，层叠水平一样
3. （**内容**）`inline`水平盒子，指的是包括`inline/inline-block/inline-table`元素的层叠顺序，都是同等级别
4. （**布局**）`float`浮动盒子
5. （**布局**）`block`块状水平盒子
6. 负`z-index`
7. 层叠上下文`background/border`

## 牢记层叠准则

层叠领域的黄金准则。当元素发生层叠时，其覆盖关系遵循下面两条准则：

1. **谁大谁上**：层叠水平值大的在上面；
2. **后来居上**：当元素的层叠水平一致、层叠顺序相同时，处于后面的元素会覆盖前面的元素。

## 深入了解层叠上下文

## 特性 ##

层叠上下文元素有如下特性：

- 层叠水平要比普通元素高
- 可以阻断元素的混合模式
- 可以嵌套，内部层叠上下文及其子元素均受制于外部的“层叠上下文”
- 每个层叠上下文和兄弟元素独立，当进行层叠变化或渲染时，只需要考虑后代元素
- 当发生层叠时，整个元素被认为是在父层叠上下文的层叠顺序中

## 创建 ##

**1. 根层叠上下文**

根层叠上下文指的是页面根元素`html`。

**2. 定位元素和传统层叠上下文**

对于`position`值为`relative/absolute`以及Firefox/IE浏览器下含有`position:fixed`声明的定位元素，当其`z-index`值不是`auto`时，会创建层叠上下文。

> 当`z-index:auto`时，遵循黄金准则的第一条**谁大谁上**；当`z-index`为具体数值时，按照父级的大小进行层叠排列；当`z-index`为具体数值，且父级层叠水平/顺序一致，遵循**后来居上**。

**3. CSS3层叠上下文**

1. 元素为`flex`布局元素（父元素`display:flex|inline-flex`），同时`z-index`值不是`auto`。
2. 元素的`opacity`值不是`1`。
3. 元素的`transform`值不是`none`。
4. 元素的`filter`值不是`none`。

## 层叠上下文与层叠顺序 ##

1. 如果层叠上下文不依赖`z-index`数值，则其层叠顺序是`z-index:auto`，可以看成`z-index:0`级别；
2. 如果层叠上下文元素依赖`z-index`数值，则其层叠顺序由`z-index`值决定。

元素成为定位元素，其`z-index`就会自动生效，此时其`z-index`默认是`auto`，也就是`0`级别，根据层叠顺序表，就会覆盖`inline/block/float`元素。不支持`z-index`的层叠上下文元素天然是`z-index:auto`级别，层叠上下文元素和定位元素是一个层叠顺序，当发生层叠时遵循**后来居上**准则。

## `z-index`负值深入理解

`z-index`负值具体作用：

1. **可访问性隐藏**。`z-index`负值可以隐藏元素，只需要层叠上下文内的某一个父元素加背景色即可。**优势如下**：
    - 它与`clip`隐藏相比，元素无须绝对定位，设置`position:relative`也可以隐藏；
    - 它对原来的布局以及元素的行为没有任何影响，而`clip`隐藏会导致控件`focus`的焦点发生细微的变化。
2. **IE8下的多背景模拟**。

    ```css
    .box {
    background-image: url("1.jpg");
    position: relative;
    z-index: 0;
    }

    .box:before,
    .box:after {
    content: '';
    position: absolute;
    z-index: -1;
    }

    .box:before {
    background-image: url("2.jpg");
    }

    .box:after {
    background-image: url("3.jpg");
    }
    ```

3. **定位在元素的后面**。

## `z-index`准则

> 对于非浮层元素，避免设置`z-index`值，`z-index`值不需要超过`2`。

```css
.box {
background-image: url("1.jpg");
position: relative;
z-index: 0;
}

.box:before,
.box:after {
content: '';
position: absolute;
z-index: -1;
}

.box:before {
background-image: url("2.jpg");
}

.box:after {
background-image: url("3.jpg");
}
```
