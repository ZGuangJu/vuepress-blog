﻿---
title: 第10章 元素的显示与隐藏
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
## 第10章 元素的显示与隐藏

使用CSS让元素不可见的方法，**剪裁**、**定位到屏幕外**、**明度变化**等。

- 元素不可见，同时不占据空间，辅助设备无法访问，同时不渲染，可以使用`script`标签隐藏。

```html
<script type="text/html">
    <img src="1.jpg">
    <textarea style="display: none;">
        <img src="2.jpg">
    </textarea>
</script>
```

`script`标签隐藏内容获取使用`script.innerHTML`，`textarea`使用`textarea.value`。

- 元素不可见，同时不占据空间，辅助设备无法访问，但资源有加载，DOM可访问，则可以直接使用`display:none`隐藏。

- 元素不可见，同时不占据空间，辅助设备无法访问，但显示隐藏时可以有`transition`淡入淡出效果。

```css
.hidden {
    position: absolute;
    visibility: hidden;
}
```

- 元素不可见，不能点击，辅助设备无法访问，但占据空间保留，可以使用`visibility:hidden`隐藏。

- 元素不可见，不能点击，不占据空间，但键盘可访问，可以使用`clip`剪裁隐藏。

```css
.clip {
    position: absolute;
    clip: rect(0 0 0 0);
}

.out {
    position: relative;
    left: -999em;
}
```

- 元素不可见，不能点击，但占据空间，且键盘可访问，可以使用`relative`隐藏。如果和层叠上下文之间存在设置了背景色的父元素，也可以使用更友好的`z-index`负值隐藏。

```css
.lower {
    position: relative;
    z-index: -1;
}
```

- 元素不可见，但可以点击，而且不占据空间，可以使用透明度。

```css
.opacity {
    position: absolute;
    opacity: 0;
    filter: Alpha(opacity=0);
}
```

- 元素不可见，但位置保留，可以点击，则直接让透明度为`0`。

```css
.opacity {
opacity: 0;
filter: Alpha(opacity=0);
}
```

## `display`与元素的显示/隐藏

## `visibility`与元素的显示/隐藏

### 不仅仅是保留空间

**1. `visibility`的继承性**

父元素设置`visibility:hidden`，子元素也会不可见，继承了父元素属性值，但是，如果子元素设置了`visibility:visible`，则子元素又会显示出来。

**2. `visibility`与CSS计数器**

`visibility:hidden`不会影响计数器的计数，但`display:none`就会。

**3. `visibility`与`transition`**

`transition`可以延时执行，和`visibility`配合可以使用CSS实现`hover`延时显示效果。

1. 普通元素的`title`属性不会被朗读，除非辅以按钮等空间元素，设置了`role="button"`才可以朗读。
2. `visibility:hidden`元素不会被朗读。

### 了解`visibility:collapse`
