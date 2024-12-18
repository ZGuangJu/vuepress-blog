---
title: 第12章 流向的改变
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
## 第12章 流向的改变

## 改变水平流向的direction

### direction简介

- `direction:ltr;` 默认值
- `direction:rtl;`

`direction`属性可以改变替换元素或者`inline-block/inline-table`元素的水平呈现顺序。

- `direction`属性可以让单行文字溢出用`...`显示。
- `direction`属性可以改变表格中列的呈现顺序。
- `direction:rtl;`可以让`text-justify`两端对齐元素，最后一行落单的元素右对齐显示。

### `direction`的黄金搭档`unicode-bidi`

`unicode-bidi`兼容性比较好的属性：

- `unicode-bidi:normal;` 默认值
- `unicode-bidi:embed;`
- `unicode-bidi:bidi-override;`

1. `unicode-bidi:embed;`只能作用在内联元素上。`embed`属性值的字符排序是独立内嵌，不受外部影响。
2. `embed`属性值的作用原理是在元素的开始和结束为止插入特殊字符实现，在元素开始位置添加了一个`U+202A`字符（`direction:ltr`）或`U+202B`字符（`direction:rtl`），并在该元素结束位置添加一个`U+202C`字符。
3. `bidi-override`：重写双向排序规则。

## `writing-mode`

### `writing-mode`原来的作用

`writing-mode`用来实现文字竖向呈现。

**1. `writing-mode`的语法**

CSS3语法：

**关键字**

- `writing-mode: horizontal-lab` 默认值
- `writing-mode: vertical-lr`
- `writing-mode: vertical-rl`

**全局值**

- `writing-mode: inherit`
- `writing-mode: initial`
- `writing-mode: unset`

IE关键字：

- `lr-tb`：内容从左往右、从上往下水平流动，并且下一行水平元素在上一行元素的下面，所有符号都是直立定位。
- `rl-tb`：内容从右往左、从上往下水平流动，并且下一行水平元素在上一行元素的下面，所有符号都是直立定位。
- `tb-rl`：内容从上往下、从右往左垂直流动，下一行垂直定位于前一个垂直行的左边，全角符号直立定位，非全角符号顺时针方向`90°`。
- `bt-rl`：内容从下往上、从右往左垂直流动，下一行垂直定位于前一个垂直行的左边，全角符号直立定位，非全角符号顺时针方向`90°`。
- `bt-lr`：内容从上往下、从左往右垂直流动，下一行垂直行在前一个的左边`。
- `tb-lr`：内容从下往上、从左往右垂直流动。
- `lr-bt`：内容从下往上、从左往右水平流动，下一行水平行在前一个的上面`。
- `rl-bt`：内容从下往上、从右往左水平流动

**补充说明**：相同的`writing-mode`属性值不会叠加。

**2. 需要关注的`writing-mode`属性值**

- `writing-mode: lr-tb | tb-rl | tb-lr (IE8+)`
- `writing-mode: horizontal-tb | vertical-rl | vertical-lr`

### `writing-mode`改变了哪些规则

`writing-mode`将页面默认的水平流改为垂直流。

**1. 水平方向也能`margin`合并**

**2. 普通块元素可以使用`margin:auto`实现垂直居中**

1. 图片元素
2. 普通块状元素

**3. 可以使用`text-align:center`实现图片垂直居中**

**4. 可以使用`text-indent`实现文字下沉效果**

```html
<p data-height="265" data-theme-id="0" data-slug-hash="oMaqXb" data-default-tab="css,result" data-user="whjin" data-pen-title="`text-indent`实现文字下沉效果" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/oMaqXb/">`text-indent`实现文字下沉效果</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

**5. 可以实现全兼容的`icon fonts`图标的旋转效果**

**6. 充分利用高度的高度自适应布局**

### `writing-mode`和`direction`的关系

> `writing-mode`、`direction`和`unicode-bidi`是CSS中三大可以改变文本布局流向的属性，其中`direction`和`unicode-bidi`经常一起使用，也是仅有的两个不受CSS3的`all`属性影响的CSS属性，基本上就是和内联元素一起使用。
