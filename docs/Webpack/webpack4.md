---
title: Webpack 常用的插件
date: 2019-06-07
sidebar: 'auto'
tags:
 - Webpack
publish: true
# 打赏
showSponsor: true
---

## webpack 常用的 plugins

1. `html-webpack-plugin`

是一个插件，写在`webpack`配置中的`plugins`数组中
它是将`html`模板进行编译，并把`webpack`编译好的脚本注入到html页面里

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
                title: "自定义title",
                template: "./src/index2.html"
                ···
            }
        )
    ]
}
```
