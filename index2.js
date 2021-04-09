// index.js
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