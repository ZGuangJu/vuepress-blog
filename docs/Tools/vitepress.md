---
title: VitePress
date: 2021-01-15
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

`VuePress`应该有人用过，而 `VitePress` 是 `VuePress`  的下一代框架 ，是支持`vue 3.0` 的`web`网站框架。

在它的文档中被称为 `Vuepress 的兄弟`,对比有一些优势,我觉的主要是启动速度快！

- 基于 `Vite` 而不是 `Webpack` 所以更快的启动时间，热重载等
- 使用 `Vue3` 来减少 `JS` 的有效负载

## 创建

1. 首先，我们要做的第一件事就是创建目录。

```js
mkdir blog-vitepress
cd blog-vitepress
```

2. 初始化  `package.json`  ，并安装 `viteppress`

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

4. 根目录下创建 `docs` 文件夹，并创建第一个`md`文件(这个是网站首页的配置和内容)，可以用命令行或在文件夹手动创建。

```js
mkdir docs
echo '# Hello World' > docs/index.md
```

5. 启动项目

```js
npm run dev
```

到这里，最基本的项目搭建好了

## 简单配置

添加一些导航到我们的网站侧边栏和导航栏。创建一个配置文件，在`docs`中新建一个`.vitepress`文件夹，里面创建一个`config.js`文件

```js
// vitepress/config.js
module.exports = {
    title: "GuangJu's Blog",// 网站标题
    description: '我的vitepress博客.', //网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    // lang: 'en-US', //语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/img/linktolink.png',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about/' },
        ],
        //   侧边导航
        sidebar: [
            { text: '我的', link: '/mine/' }
        ]
    }
}
```

这时的项目结构:

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

项目基本创建好了，可以根据自己的需要，自定义其他目录。

`vitepress` 刚出来没多久，功能还正在完善，也就是说还有好多不支持的东西，正式版发布后，我也会更新。
