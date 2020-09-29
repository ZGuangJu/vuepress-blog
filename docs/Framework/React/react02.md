---
title: React 创建项目
date: 2019-3-26
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - react
publish: true
---

## 创建 react 项目

1. 创建项目前

如果你电脑上安装过 `create-react-app` 脚手架 需要卸载(新版本换了创建命令)

```js
npm unistall -g create-react-app
```

2. 创建项目命令

```js
npx create-react-app myappname
```

【myappname】:项目名称，不可以叫 `react`等（关键字） 也不许有驼峰命名

- npx

`npx` 是运行本地 `node_modules` 包里依赖的，如果没找到，就临时下载，使用完之后把下载的依赖删掉，用 `npx` 好处是保证了依赖版本的新鲜度【每次都是最新版本】，`npm` 先运行本地项目，如果没找到去本机全局里找

## 项目结构

- `node_modules`:项目依赖包。它是我们项目启动时所需要运行的依赖
- `public` ：静态资源。是我们 `html` 模板所在的公共文件夹，如果你在 `public` 里面放了一个静态资源【`css` 文件，`js` 文件,图片，字体】，那么当打包的时候，这些文件不会被编译。

  - `favicom.ico`:网站标题的图标。
- `.gitignore`:git忽略文件。是一份告诉 `git` 提交的筛选名单,里面的`/node_modules` 就是告诉 `git` 存代码的时候把`node_modules` 目录过滤掉，并不提交到`github`.

- `package.json` ：是 `node_modules` 包依赖的清单目录，也就是说我 `npm` 安装的所有的依赖名字都会写入到 `package.json` 里去；还有它包含我们启动项目的脚本（`scitpts`里面的内容），打包项目等命令所在文件。`package.json`的作用：依赖的清单，命令的运行
- 在`scripts`里，有个`eject` 命令，是为了讲打包配置暴露到项目里的（会在项目根目录里创建一个`config`文件夹），但是运行`eject`命令是不可逆的，慎用，我们可以用`customize-cra`第三方工具库

- `README.md` 项目说明文档，不要删除，为什么？因为在 GitHub 里开启静态服务也没，如果没有这个文件，你开启是不会成功的，而且，GitHub 他也不会提示你缺这个文件，所以比较坑，一定不要删除

- src 是我们开发的源码所在文件夹 【最重要的：`/src`】
    1. `.svg` 矢量图：不会失真，但是色彩值对比 `jpg` 少，色彩不是很丰富
    2. `.svg` 我们前端完全可以手写出来。当然没人那么做，都是用软件生成，比如 ps
    3. `serviceWorker.js` 做离线缓存的，【离线==断网】在断网的情况下，我们的页面还是可以正常打开和访问的，不会出现 404,但是 `ajax` 功能失效。
    4. `src` 下默认的哪些可以删：除了 `index.js` 其他的都可以删
为什么删？因为我们要重构自己的项目结构
在公司里开发项目，是有一个项目结构开发规饭

| 目录        | 功能                                 |
| :---------- | :----------------------------------- |
| /src        | 项目主目录                           |
| /viwe       | 存放我们页面级的组件                 |
| /components | viwe 组件里公用的一些弹窗之类的      |
| /api        | 把整个项目里所有的 ajax 请求写在这   |
| /tools      | 转化时间，分割数组，功能性纯 js 文件 |
| /assets     | 静态资源                             |
| index.js    | [位置不可变]入口文件                 |

## 运行项目

1. 启动本地项目开发环境

```js
npm run start  或 yarn start
```

2. 打包 src 源码，变成原始的 js 和 html，

```js
npm run build
```

还是需要使用服务端启动,如下：

```js
npm install -g serve
和
serve -s build
```

3. 释放我们项目【官方】配置文件，且该命令只能运行一次，不可恢复

```js
npm run eject
```

`npm run eject` 一般是用不到的，官网提供了自定义配置接口，如果想改变项目里的官方配置，需要释放配置

- 【坑】  `npm run eject` 我们创建项目的时候，官方会给初始化一个 git 仓库，这时候使用的时候要先把代码提交到 `git` 里或者，把 `git` 仓库删掉,`react` 才会区分出来这个组件是原生标签还是自定义的

:::warning
当我们拿到一个项目，【公司项目】，一般来说都不会给你项目里带着 `node_modules` 包的，那就需要我们自己安装所有依赖。
:::

- 想要运行项目需要先执行以下命令：

```js
npm install 或者 npm i
```

当使用 `npm` 命令的时候，`npm` 就会读取 `package.json`，然后会把你依赖清单里的名字全部下载下来。
