---
title: Webpack 常用的包/模块
date: 2019-06-07
sidebar: 'auto'
tags:
 - Webpack
publish: true
# 打赏
showSponsor: true
---

## webpack 常用的包/模块

`webpack`中的`loader` 一般都在 `module` 部分中配置

示例:

```js
module.export = {
    // 入口
    entry: "./src/index.js",
    // 出口
    ontput: path.resolve(__dirname, "dist"),
    // 输出的文件名
    filename: "bundle.js",
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

## 必要的

- `webpack`

- `webpack-cli`

这俩个时`webpack`必须要的包

## 常用的

1. `webpack-dev-server`

   - 它是 `wxpress` 封装,启动并实时编译项目
   - 使用它来启动 `webpack` 服务，它会执行编译，编译的文件 `main.js` 不会产生物理文件(默认在项目根目录中)，会将编译存到内存条中
   - 一般使用它需要使用 `html-webpack-plugin` 配合开发

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

2. `typescript` \ `ts-loader`

打包 `typescript` (`.ts`)文件时使用

```js
module.export = {
    ···
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

3. `file-loader`

处理文件模块的 `webpack loader`。

4. `url-loader`
`file-loader` 的增强版，除了上述功能，还可以将文件转换为 `base64 URI`

5. `style-loader` 和 `css-loader`

`css-loader`：加入 `a.css` 中引入了 `b.css` 和 `c.css`，`css-loader` 会将其合并成一个`css`文件
`style-loader`：将合并后的 `css` 文件挂载到 `head` 标签内

6. `sass-loader`

如果使用 `scss`、`less`、`stylus` 等 `css` 预处理器。例如，我们要使用 `sass` 预处理器，首先要安装 `sass-loader`和 `node-sass`。

7. `postcss-loader`

通过 `postcss-loader` 来给新属性添加厂商前缀。
