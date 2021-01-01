---
title: 手写 Promise
date: 2019-01-13
sidebar: 'auto'
tags:
 - Promise
publish: true
# 打赏
showSponsor: true
---

## 自定义 Promise

```js
        // 定义状态
        const PENDING = "pending";
        const FULFILLED = "fulfilled";
        const REJECTED = "rejected";
        // Promise构造函数
        function MyPromise(fn) {
            let _this = this;//用_this保存this，避免后期闭包导致this的指向不对
            _this.value = undefined; //定义状态为resolved的时的状态
            _this.reason = undefined; //定义状态为rejected的时的状态
            _this.status = PENDING; //定义状态改变前的初始状态
            function resolve(value) {
                //两个==="pending"，保证了了状态的改变是不不可逆的
                if (_this.status === PENDING) {
                    _this.status = FULFILLED;
                    _this.value = value;
                }
            }
            function reject(reason) {
                //两个==="pending"，保证了了状态的改变是不不可逆的
                if (_this.status === PENDING) {
                    _this.status = REJECTED;
                    _this.reason = reason;
                }
            }
            //捕获构造异常
            try {
                fn(resolve, reject);
            } catch (error) {
                reject(error);
            }
        }
        // 定义原型中的 then 函数
        MyPromise.prototype.then = function(onFulfilled, onRejected) {
            let _this = this;
            switch (_this.status) {
                case "fulfilled":
                    onFulfilled(_this.value);
                    break;
                case "rejected":
                    onRejected(_this.reason);
                    break;
                default:
            }
        };
        // 测试
        var a = new MyPromise(function(resolve, reject) {
            resolve(1);
        });
        a.then(console.log);
        //输出1
```
