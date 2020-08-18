---
title: Vue
date: 2018-12-6
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - vue
publish: true
---

:::tip Vue 是什么
Vue 是前端开发框架;构建应用式的框架
能实现单页面应用渐进式的开发框架。
:::

<font size="5" color="#3eaf7c">vue 优点</font>

----
1.  遵循 `MVVM` 模式;
2.  体积小，运行效率高;
3.  关注数据的变化，不操作 `DOM` ;
4.  组件化开发，利于开发和维护;
5.  能实现单页面应用，`SPA` 应用 `(single page application)`.


<font size="5" color="#3eaf7c">Vue 使用方式</font>

----

1. 本地引用

    - 用 CDN 方式，引入项目；

    - 下载到本地，通过 `<script>` 标签引入项目。

从官网下载 `vue.js` 文件，使用 `<script>` 标签引入，一般用在，学习，做 demo 的需要快速呈现效果的时候，实际工作开发中，没人这么做。

本地引用，在学习官网教程的时候，比如 ：在初始 vue 实例的时候，data 有时候是一个对象，有时候是一个函数。这就是两种使用方式

```js
// 本地引用方式
new Vue({
  data: {}
});
// 脚手架方式
export default {
  data() {
    return {};
  }
};
```
:::warning 注意
自己练习或者 demo 的时候，要看清楚是哪一个使用方式，如果报错，就换一下写法。
:::

2. 通过 `vue-cli` 脚手架安装

[vue-cli官方网站](https://cli.vuejs.org/zh/)

:::tip 说明
什么是脚手架，它是基于 nodejs 运行，使用 webpack 打包工具开发的一个集成化开发环境。 简单来说，脚手架是官方出的一个帮助程序员快速开发的工具。
:::
它的功能有:

- 热更新，即我们修改代码，页面自动刷新出新效果；

- 编译 es6 转成浏览器可执行的 es5 代码；

- 给 css 加兼容前缀；

- 代码校验，强制养成我们写规范代码的习惯等等

```js
//示例
  npm create [projectname] //用 vue-cli 创建项目
```

使用 `vue-cli` 脚手架，首先要 安装 `npm` 和 `vue-cli`

<font size="5">准备工作</font>

----
- 安装 npm

`npm (node package menerger)` 是项目依赖包的管理器 [npm官网](https://www.npmjs.com/)。

安装 `node.js` 环境，`node` 里自带 `npm` 包管理器

从 `node.js` [英文官网](https://nodejs.org/en/download/) &[中文官网](http://nodejs.cn/download/) 下载LTS(长期支持版)版，也就是稳定版，根据你的电脑系统选择安装包。

安装完成后，可以检查安装是否成功，在 `cmd` 命令提示符中输入

检查node是否成功

```js
node -v
```

检查npm是否成功

```js
npm -v
```

<font size="5">安装vue-cli</font>

----

安装最新版本(一般使用本命令安装)

```js
npm install @vue/cli -g

```

安装2.x

```js
npm install -g vue-cli
```

安装指定版本，如 4.0

```js
npm install -g npm@4
```
:::warning 注意
- 如果之前安装了 `2.x`，需要先卸载 `2.x` 再安装 `3.x` !!

新版的 Vue CLI 的包名称由 `vue-cli` 改成了 `@vue/cli`。 如果你已经全局安装了旧版本的 `vue-cli (1.x 或 2.x)`，你需要先通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载，重新安装脚手架。
:::

cnpm淘宝镜像

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装报错后 清除缓存的方法 (运行清除后再次安装)

```js
npm cache clean--force
```

新建项目方式(xxx为项目名称)

```js
vue create xxx
```

运行项目

```js
npm run serve
```

打包项目

```js
npm run build
```

更多npm使用教程，参考本站工具菜单下的 [npm 常用命令](http://zguangju.gitee.io/Tools/npm.html)

:::warning 注意
项目名称不要写中文 ，不要大写字母，不要下划线，不要特殊字符
:::