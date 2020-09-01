---
title: Promise 初级
date: 2019-8-12
sidebar: 'auto'
tags:
 - Promise
publish: true

---

## Promise 是什么
- 概念
    - 抽象
`promise`是`js`中新的异步编程的解决方案（旧的是纯回调，是多层回调，会有回调地狱，`promise`就是为了解决回调地狱）
    - 具体
    1. 从语法上讲，`promise`是一个构造函数
    2. 从功能上讲，`promise`对象用来封装一个异步操作，并可以获得其结果

- 状态

  1. 初始状态是 `pending`；

  2. 从`pending` 转为=> `resolved(fulfilled)`；

  3. 从`pending`  转为=> `rejected`

:::tip 说明:
  只有这两种，且一个`promise`对象只能改变一次，

  无论变为成功还是失败，都会有一个结果数据

  成功的结果数据一般称为`value`,失败的结果数据一般称为`reason`
:::


## promise 流程图

<img src="https://s1.ax1x.com/2020/09/01/djcyAs.png" alt="promise流程图">

## promise 基础使用

```html
<script>
        // promise基础使用

        // 1.创建一个新的promise对象
        const p = new Promise((resolve, reject) => {//执行器函数,用来执行异步操作
            // 2. 执行异步操作任务
            setTimeout(() => {
                const time = Date.now()//如果当前时间是偶数代码成功，否则失败
                if (time % 2 == 0) {
                    // 3.1 如果成功了，调用resolve(value)
                    resolve('成功的数据，time=' + time);
                } else {
                    reject('失败的数据，time=' + time);
                    // 3.2 如果失败了，调用reject(reason)
                }
            }, 1000);
        })
        p.then(
            value => {//接收得到成功的value数据  OnResolved()
                console.log('成功的回调', value);
            },
            reason => {//接收得到失败的reason数据 OnRejected()
                console.log('失败的回调', reason);
            }
        )
    </script>
```
## 英文释义：

  `resolved` adj:下定决心的,解决

  `fulfilled` adj:履行；满足

  `rejected` adj: 被拒的；不合格的 | v. 拒绝，驳回

  `reason` adj:原因,理由