---
title: Promise 初级
date: 2019-1-13
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

- 语法
```js
new Promise( function(resolve, reject) {...} /* executor */  );
```
- executor 构造函数Promise()的参数，又叫执行器函数。

`executor`是带有 `resolve` 和 `reject` 两个参数的函数 。`Promise`构造函数执行时立即调用`executor` 函数， `resolve` 和 `reject` 两个函数作为参数传递给`executor`（`executor` 函数在Promise构造函数返回所建`promise`实例对象前被调用）。`resolve` 和 `reject` 函数被调用时，分别将`promise`的状态改为`fulfilled（完成）`或`rejected（失败）`。`executor` 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，要么调用`resolve`函数来将`promise`状态改成`fulfilled`，要么调用`reject` 函数将`promise`的状态改为`rejected`。如果在`executor`函数中抛出一个错误，那么该`promise` 状态为`rejected`。`executor`函数的返回值被忽略。

- 状态

    - `pending`: 初始状态，既不是成功，也不是失败状态。

    - `fulfilled`: 意味着操作成功完成。

    - `rejected`: 意味着操作失败。

- 状态改变

  1. 初始状态是 `pending`，

  2. 从`pending` 转为=> `fulfilled(resolved)`；

  3. 从`pending`  转为=> `rejected`

:::tip 说明:
  只有这两种，且一个`promise`对象只能改变一次，

  无论变为成功还是失败，都会有一个结果数据

  成功的结果数据一般称为`value`,失败的结果数据一般称为`reason`

  Promise一旦新建就立刻执行, 此时的状态是Pending(进行中)
:::

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
- `then()`
    then方法包含两个参数：`onfulfilled` 和 `onrejected`，它们都是 `Function` 类型。当`Promise`状态为`fulfilled`时，调用 `then` 的 `onfulfilled`方法，当`Promise`状态为`rejected`时，调用 `then` 的 `onrejected` 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争
## promise 流程图

<img src="https://s1.ax1x.com/2020/09/01/djcyAs.png" alt="promise流程图">
官方图
<img src="https://s1.ax1x.com/2020/09/02/dzxvB8.png" alt="官方图">

因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用

## 为啥用promise呢？

1. 指定回调函数的方式更加灵活(和旧方法纯回调相比)：

    - 旧的：必须在启动异步任务前指定；

    - `promise`：启动异步任务 => 返回`promise`对象 => 给`promise`对象绑定回调函数（甚至可以在异步任务结束后指定）

2. 支持链式调用，可以解决回调地狱的问题

    - 什么是回调地狱？

    回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件。

    - 回调地狱的缺点？

    不便于阅读 / 不便于异常处理。

    - 解决方案？

    `promise`链式调用。

    - 终极解决方案？

    `async` / `await`。

```js
        // 成功的回调函数
        function successCallback(result) {
            console.log('创建成功' + result);
        }
        // 失败的回调函数
        function failureCallback(error) {
            console.log('创建失败' + error)
        }
        // 1.1 使用纯回调函数（伪代码）
        createAudioAsync(audioSettings, successCallback, failureCallback)
        // 1.2 使用promise
        const promise = createAudioAsync(audioSettings);
        setTimeout(() => {
            promise.then(successCallback, failureCallback)
        }, 3000);
```
回调地狱
```js
 // 2.1
        doSomething(function (result) {
            // 第二个请求需要上个请求的结果
            doSomething(result, function (newResult) {
                // 第三个请求需要上个请求的结果 以此类推，层层嵌套，地狱···
                doThirdThing(newResult, function (finalResult) {
                    console.log('got the final result:' + finalResult);
                }, failureCallback)
            }, failureCallback)
        }, failureCallback)
```
```js
        // 2.2 使用promise的链式调用解决回调地狱
        doSomething().then(function (result) {
            return doSomething(result)
        })
            .then(function (newResult) {
                return doThirdThing(newResult)
            })
            .then(function (newResult) {
                return doThirdThing(newResult)
            })
            .then(function (finalResult) {
                console.log('got the final result:' + finalResult);
            })
            .catch(failureCallback)
        // 2.3 async / await 回调地狱的终极解决方案
        async function request() {
            try {
                const result = await doSomething();
                const newResult = await doSomethingElse(result);
                const finalResult = await doThirdThing(newResult)
                console.log('got the final result:' + finalResult);

            } catch (err) {
                failureCallback(err)
            }
        }
```

## 英文释义：

  `resolved` adj:下定决心的,解决

  `fulfilled` adj:履行；满足

  `rejected` adj: 被拒的；不合格的 | v. 拒绝，驳回

  `reason` adj:原因,理由