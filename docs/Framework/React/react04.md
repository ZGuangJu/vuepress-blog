---
title: react 函数组件和基础布局
date: 2019-4-9
sidebar: 'auto'
tags:
 - react
publish: true
---

### 函数组件--属性

- 属性：props
- 它是我们组件标签上写的键值对的集合【对象】
- 它的作用是：父组件向子组件传递数据用的

### 组合模式 -- 组件组合模式

1. 高复用模式，说白了，就是一个子组件被多次的调用，传入不同的参数显示不同的内容
2. 插槽，就是在自定义组件中插入其他的组件

### scss 书写 css 样式【文件后缀是 .scss 】

- 在 react 项目里安装命令：
  npm i -D sass-loader node-sass
- 简单解释：react 脚手架基于 sass-loader node-sass 解析 scss 代码，转换成 css 代码
- 好处：可以像写 js 一样去写 css，因为它有嵌套之类的，可以快速的书写直观的样式代码
- 官网：<https://www.sass.hk>
- 【注意】：如果你用 yarn 安装会安装不成功，需要你设置一下
  yarn config set sass-binary-site <http://npm.taobao.org/mirrors/node-sass>

### 完成一个网页的基础布局： <http://www.yuceyingjia.com/>
