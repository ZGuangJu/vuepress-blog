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

### 设置 `margin padding` 为 0

```css
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
```

### 字体

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
