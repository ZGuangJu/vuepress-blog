---
title: Node使用
date: 2019-02-06
sidebar: 'auto'
tags:
 - Node.js
publish: true
# 打赏
showSponsor: true
---

## 创建一个后台

```js
//  安装 express  cors
var express = require('express')
var cors = require('cors')
// const { request } = require("express");

var app = express()
// 使用跨域函数 ，允许所有的跨域请求
app.use(cors())
// post参数解析
app.use(express.urlencoded())

// 开启一个服务器
app.listen(3010, () => console.log("启动--http://localhost:3010"));

```
