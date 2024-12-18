﻿---
title: 第11章 用户界面样式
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
## 第11章 用户界面样式

## 和`border`形似的`outline`属性

`outline`表示元素的轮廓，语法和`border`属性类似，分**宽度**、**类型**、**颜色**，支持的关键字和属性值和`border`属性一模一样。

    .outline {
        outline: 1px solid #ccc;
    }

### 绝不可以在全局设置`outline:0 none`

```html
<p data-height="265" data-theme-id="0" data-slug-hash="YjvKBe" data-default-tab="css,result" data-user="whjin" data-pen-title="label模拟原生focus outline效果" class="codepen">See the Pen <a href="https://codepen.io/whjin/pen/YjvKBe/">label模拟原生focus outline效果</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

### 真正不占据空间的`outline`及其应用

**1. 案例一：头像剪裁的矩形镂空效果**

**2. 案例二：自动填满屏幕剩余空间的应用技巧**

## 光标属性`cursor`

### 琳琅满目的`cursor`属性值

**1. 常规**

- `cursor:auto`：`cursor`默认值。
- `cursor:default`：系统默认光标形状。
  - 模拟按钮的禁用效果，需要把`cursor:pointer`还原成`cursor:default`
- `cursor:none`：光标隐藏

**2. 链接和状态**

- `cursor:pointer`：
- `cursor:help`：帮助，光标头上带个问好
- `cursor:progress`：进行中
- `cursor:wait`：不推荐使用
- `cursor:context-menu`：上下文菜单

**3. 选择**

- `cursor:text`：文字可被选中
- `cursor:vertical-text`：文字可以垂直居中
- `cursor:crosshair`：十字光标
- `cursor:cell`：单元格选框

**4. 拖曳**

- `cursor:move`：元素可移动
- `cursor:copy`：元素可复制
- `cursor:alias`：元素可以创建别名或快捷方式
- `cursor:no-drop`：当前元素放开到当前位置是不允许的
- `cursor:not-allowed`：当前行为禁止

**5. 滚动**

- `cursor:all-scroll`：上下左右都可以滚动

**6. 拉伸**

- `cursor:col-resize`：移动垂直线条
- `cursor:row-resize`：移动水平线条

**1. 单向拉伸**

- `cursor:n-resize`：朝上的单箭头
- `cursor:e-resize`：朝右的单箭头
- `cursor:s-resize`：朝下的单箭头
- `cursor:w-resize`：朝左的单箭头
- `cursor:ne-resize`：朝右上角的单箭头
- `cursor:nw-resize`：朝左上角的单箭头
- `cursor:se-resize`：朝右下角的单箭头
- `cursor:sw-resize`：朝左下角的单箭头

**2.双向拉伸**

- `cursor:ew-resize`：
- `cursor:ns-resize`：
- `cursor:nesw-resize`：
- `cursor:nwse-resize`：

**7. 缩放**

- `cursor:zoom-in`：放大镜
- `cursor:zoom-out`：缩小镜

**8. 抓取**

- `cursor:grab`：五指张开
- `cursor:grabing`：五指收起

### 自定义光标

解决兼容性问题。
