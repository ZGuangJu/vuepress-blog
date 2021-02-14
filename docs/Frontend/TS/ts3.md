---
title: TS webpack打包ts
date: 2020-12-31
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - TypeScript
publish: true
# 打赏
showSponsor: true
---

## webpack 打包 ts

- 初始化`package.json`

```s
npm init -y
```

- 在项目里安装`webpack`和`ts`

```s
npm i -D webpack webpack-cli typescript ts-loader
```

- 项目根目录下创建 `webpack.config.js` 文件,指定打包`ts`文件的`loader`

```js
// 引入一个 path 包
const path = require('path')
// webpack中的配置信息，都应该写在module中
module.exports = {
    mode: 'production',
    // 入口文件
    entry: "./src/index.ts",
    // 出口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    // 指定webpack 打包要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的时规则生效的文件
                test: /\.ts$/,
                use: "ts-loader",
                // 要排除的文件
                exclude: /node_modules/,
            }
        ]
    }
}
```

- 配置`ts`编译`js`的配置文件`tsconfig.json`，配置`ts`编译规则

```js
{
    "compilerOptions": {
        "target": "es2015",
        "module": "es6",
        "strict": false
    }
}

```

- `package.json`添加脚本`"build":"webpack"`

```js
  "scripts": {
    "build":"webpack"
  },
```

- 使用 `html-webpack-plugin` 自动创建`html`文件

安装`html-webpack-plugin`并在`webpack.config.js`文件配置

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    ···
    module: {
       ···
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "自定义title"
            }
        )
    ]
}
```

- 使用 `webpack-dev-server` 启动并实时编译项目

安装`webpack-dev-server`，修改 `package.json` 中的 `scripts`

```js
"scripts":{
    "start":"webpack serve --open chrome.exe"
    }
```

`mac`中是：

```js
"scripts":{
    "start":"webpack serve --open 'google chrome'"
    }
```

