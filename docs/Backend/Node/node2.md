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

- `express` : node框架
- `cors` : node用来跨域的模块
- `body-parser` : __

1. 第一种

```js
// express  cors
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

2. 第二种

```js
var express = require('express')
var BodyParser = require('body-parser')
var cors = require('cors')

var App = express()
// 允许跨域的地址数组
// App.use(cors({ origin: ["https://xxxx", "https://xxxxxx"] }))
App.listen(3000, () => { console.log("已启动-localhost:3000"); })
App.get('/', (req, res) => {
    res.json({ code: 1, msg: ok })
})

```
