---
title: serve
date: 2020-02-08
sidebar: 'auto'
categories:
 - 工具
tags:
 - serve
publish: true
# 打赏
showSponsor: true
---
## 安装

本地运行打包后的项目

- `serve` 安装

```js
npm install -g serve
// or
yarn add -g serve
```

- 检测是否安装成功

```js
serve -v
```

## 使用

1. 单独使用

在打包好的项目里（就是包含`dist`或其他打包生成的文件夹的目录里）

运行以下命令即可启动项目：

```js
serve -s dist   // dist 就是打包后的文件夹
// or
serve  dist
```

2. 在`package.json`文件中的`scripts`加入以下脚本：

```json
"runing": "serve ./dist"
```

- 然后项目里运行：

```js
yarn  runing
// or
npm run runing
```

即可在本地运行打包后的项目，`http://localhost:5000`
