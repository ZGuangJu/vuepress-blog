---
title: VitePress
date: 2019-06-15
sidebar: 'auto'
categories:
 - 工具
tags:
 - VitePress
publish: true
# 打赏
showSponsor: true
---

## `VitePress` 是 `VuePress` 的下一代框架

在它的文档中被称为 `Vuepress 的小兄弟`,它比它的对手有一些优势

- 基于 Vite 而不是 Webpack 所以更快的启动时间，热重载等
- 使用 Vue3 来减少 JS 的有效负载

## 创建

1. 首先，我们要做的第一件事就是创建目录。

```js
mkdir blog-vitepress
cd blog-vitepress
```

2. 初始化 `package.json` 我们的包管理器，并添加 `viteppress`

```js
npm init
npm i --save-dev vitepress
```

3. 将 `VitePress` 脚本添加到 `package.json` 文件中。

```js
"scripts": {
  "dev": "vitepress dev docs --open",
  "build": "vitepress build docs",
  "serve": "vitepress serve docs"
},
```

4. 创建 `docs` 文件夹，并创建第一个`md`文件(这个是网站首页的内容)

```js
mkdir docs
echo '# Hello World' > docs/index.md
```

5. 启动项目

```js
npm run dev
```

好了最基本的项目搭建好了

6. 添加一些导航到我们的网站侧边栏和导航栏。创建一个配置文件，在`/docs/`中创建一个`config.js`文件

```js
// vitepress/config.js
module.exports = {
  title: " ZGuangJu's blog ", // 网站标题
  themeConfig: {
  nav: [
  { text: '首页', link: '/' },
  { text: '关于', link: '/about/' },
  ],
  sidebar: [
  { text: '我的', link: '/mine/' }
  ]
}
}
```

项目结构

```js
vitepress
    │
    ├─── docs
    │     │
    │     ├── .vuepress
    │     │     └── config.js
    │     ├── public
    │     ├── about
    │     │     └── index.js
    │     ├── mine
    │     │     └── index.js
    │     └── index.md
    └── package.json
```

项目基本创建好了，可以根据自己的需要，自定义其他结构
