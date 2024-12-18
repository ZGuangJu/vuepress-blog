﻿---
title: 第9章 元素的修饰与美化
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
## 第9章 元素的修饰与美化

## `color`

### 颜色关键字

### 不支持的`transparent`关键字

`color:transparent`从IE9才开始支持。

### 不支持的`currentColor`变量

`currentColor`变量可以使用`color`计算值。

### 不支持的`rgba`颜色和`hsla`颜色

`color`属性支持十六进制颜色、`rgb`颜色。`rgb`除了支持数值颜色，还支持百分比`rgb`颜色，数值格式只能是整数，不能是小数。

`color`属性不支持`hsl`颜色、`rgba`颜色和`hsla`颜色。

**`hsl`颜色：**

- `h`表示色调`hue`，取值`0~360`；
- `s`表示饱和度，取值`0~100%`，饱和度越高颜色越亮；
- `l`表示亮度，取值`0~100%`，`100%`是白色，`50%`是正常亮度，`0%`是黑色。

### 支持却鸡肋的系统颜色

## `background`

- `background-image:none`
- `background-position:0% 0%`
- `background-repeat:repeat`
- `background-attachment:scroll`
- `background-color:transparent`

IE9+浏览器：

- `background-size:auto auto`
- `background-origin:padding-box`
- `background-clip:border-box`

### 隐藏元素的`background-image`到底加不加载

IE8浏览器支持`base64`图片，包括在`background-image`属性中使用，可以节约网络请求。`base64`图片的渲染性能不高，大尺寸图片慎用。

### 与众不同的`background-position`百分比计算方式

如果缺省关键字，则会认为是`center`，`background-position:top center`=`background-position:top`。

`background-position:right 40px bottom 20px`表示距离右边缘`40px`，距离下边缘`20px`。

`position`百分比值计算公式：

`positionX`=（容器宽度 - 图片宽度）*`precentX`
`positionY`=（容器高度 - 图片高度）*`precentY`

- （容器宽度 - 图片宽度）×（`-50%`）的结果是一个**正值**。
- （容器高度 - 图片高度）×（`-50%`）的结果是一个**正值**。

最终表现图片定位在容器内。

### `background-repeat`与渲染性能

### 外强中干的`background-attachment:fixed`

`background-attachment:fixed`只能局限在窗体背景图使用上。

### `background-color`背景色永远是最低的

### 利用多背景的属性**hack**小技巧

    .bg {
        background: url("icon.png");
        background: url("icon.svg"), none;
    }

### 渐变背景和`rgba`背景色的兼容处理

**背景渐变，使用IE私有的渐变滤镜实现兼容**

    filter: progid:DXImageTransform.Microsoft.
    gradient(startcolorstr=red, endcolorstr=blue, gradientType=1);

- `gradientType=1`代表横向渐变
- `gradientType=0`代表纵向渐变
- `startcolorstr`代表渐变起始颜色

除了使用颜色关键色，还可以使用十六进制颜色值。

> 将`0~1`的CSS3标准透明度值转换成十六进制。

    Math.round(256 * opacity).toString(16);

> 实现一个`100%`红色到`50%`透明度蓝色垂直渐变。

```css
.gradient {
    filter: progid:DXImageTransform.Microsoft.
    gradient(startcolorstr=#FFFF0000, endcolorstr=#7F0000FF, gradientType=0);
    background: linear-gradient(to bottom, red, rgba(0, 0, 255, .5));
}
```

```css
.bgcolor {
    background: rgba(0, 0, 0, .5);
    filter: progid:DXImageTransform.Microsoft.
    gradient(startcolorstr=#7F000000, endcolorstr=#7F000000);
}

:root .bgcolor {
    filter: none;
}
```
