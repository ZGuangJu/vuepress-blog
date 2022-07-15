---
title: CSS 样式穿透
date: 2022-07-14
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS3
publish: true
---
## 1 什么是样式穿透？

我们说所的穿透，官方叫做深度选择器。就是在我们想穿透的选择器前边添加 `>>>` 或者 `/deep/` 或者 `::v-deep`。比如说父组件中修改子组件的样式

## 2 什么情况下会使用样式穿透

在`vue`开发过程中，当我们引入第三方组件库时(如使用`element-ui`)，需要在局部组件中修改第三方组件库样式，而又不想去除`scoped`属性造成组件之间的样式覆盖。这时我们可以通过一些方法穿透`scoped`。

## 3 怎样进行样式穿透

- 1. 使用 `css` 时可以用 `>>>` 进行样式穿透

```css
外层类  >>> 想要修改类名 {
  修改样式...
}
```

```css
 /* 例 */
.wrapper  >>> .el-tag--warning {
  color: #e6a23c;
}
```

- 2. 使用 `scss`, `less` 时，可以用 `/deep/` 进行样式穿透

```css
外层类  /deep/ 想要修改类名 {
  修改样式...
}
```

```css
  /* 例： */
.wrapper  /deep/ .el-tag--warning {
  color: #e6a23c;
}
/deep/ .el-tag--warning {
  color: #e6a23c;
}
```

- 3. 使用`stylus`时也可以使用 `>>>` 进行样式穿透

```css
外层类  >>> 想要修改类名 {
  修改样式...
}
```

```css
  /* 例：  */
.wrapper  >>> .el-tag--warning{
  color: #e6a23c;
}
```

- 4. 通用样式穿透可以使用`::v-deep`

```css
::deep 想要修改类名 {
  修改样式...
}
```

```css
/* 例： */
::v-deep .el-tag--warning{
  color: #e6a23c;
}
```

:::warning 注意!

- 在写之前保证嵌套层级正确
- vue中最好直接用`::v-deep`, 在`vue3`中`/deep/`方式可能会失效！
:::
