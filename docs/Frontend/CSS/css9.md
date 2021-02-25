---
title: CSS 居中和垂直水平居中
date: 2018-09-23
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS3
publish: true
---
## 水平居中

1. 水平居中，父元素的宽是默认100%的

```html
    <style>
        .parent {
            background: red;
            text-align: center;
        }
    </style>
···
    <body>
        <div class="parent">
            <span class="child">content</span>
        </div>
    </body>
```

2. 和1不同的是，父元素是行元素，但是宽是适应内容的，两侧被margin挤压。

```html

    <style>
        .parent {
            background: red;
            width: fit-content;
            margin: auto;
        }
    </style>
···
    <body>
        <div class="parent">
            <span class="child">content</span>
        </div>
    </body>
```

## 垂直居中

1. 行内元素：单行文本垂直居中,多行文本不生效

```html
    <style>
        .parent {
            height: 200px;
            line-height: 200px;
            background: red;
        }
    </style>
···
    <body>
        <div class="parent">
            <span class="child">content</span>
        </div>
    </body>
```
