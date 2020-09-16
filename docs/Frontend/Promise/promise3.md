---
title: Promise 高级
date: 2019-1-13
sidebar: 'auto'
tags:
 - Promise
publish: true
---

## Promise 的关键问题

### 1.  如果改变`promise`的状态 ❓

- `resolve(value)`:如果当前状态为`pending` 则改变为`resolved`。
- `reject(reason)`:如果当前状态为`pending` 则改变为`rejected`。
- 抛出异常：如果当前是`pending` 则改变为`rejected`。

```js
        const p = new Promise((resolve, reject) => {
            // resolve(1); //成功 promise 改变为resolved状态
            // reject(2); //失败 promise 改变为rejected状态
            throw new Error('错误'); //抛出异常 同样为失败 rejected状态 reason为抛出的 error
        })
        console.log(p); // 打印实例对象，看状态

        // 抛出其他值
        const p = new Promise((resolve, reject) => {
            throw 3
        })
        // 输出结果
        p.then(
            value => { },
            reason => { console.log('reason1'+reason); }
        )
```

### 2.  一个`promise`对象指定多个成功或失败回调函数，都会调用吗 ❓

当promise改变为对应状态是都会调用.

```js
        // 成功和失败同理
        const p = new Promise((resolve, reject) => {
            throw 3
        })
        p.then(
            value => { },
            reason => { console.log('reason1' + reason); }
        )
        p.then(
            value => { },
            reason => { console.log('reason2' + reason); }
        )
```

### 3.  改变`promise`状态和执行回调函数，谁先谁后 ❓

都有可能，正常情况下是先指定回调函数在改变状态，但也可以先改变状态再指定回调函数。

- 如何先改状态再指定回调

  - 在执行器中直接掉用`resolve()`和`reject()`方法

  - 延迟更长时间再调用`then()`.

```js
        // 常规：先指定回调，再改变状态
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1) // 2.后改变的状态（同时指定数据），异步执行回调函数
            }, 1000);
        }).then( //1.先指定的函数，保存当前指定的回调函数
            value => { },
            reason => { console.log('reason', reason); })
        // 先改状态，再指定回调
        // 方法一
        new Promise((resolve, reject) => {
            resolve(1) // 1.先改变的状态（同时指定数据），异步执行回调函数
        }).then( //2.后指定的函数，保存当前指定的回调函数
            value => { console.log('value2', value); },
            reason => { console.log('reason2', reason); })
        // 方法二
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1) // 1.先改变的状态（同时指定数据），异步执行回调函数
            }, 1000);
        })
        setTimeout(() => {
            p.then( //2.后指定的函数，保存当前指定的回调函数
                value => { console.log('value3', value); },
                reason => { console.log('reason3', reason); })
        }, 1100);//设置的定时器比上面的异步回调时间长即可
```

- `.then`和它里的的回调函数是两回事`.then()`会同步执行，但它内部的`value=>{}`,`reason=>{}`是异步执行的

```js
        .then(
            value => { console.log('value', value); },
            reason => { console.log('reason', reason); })
```

### 4.  `promise.then()`返回的新`promise`对象的结果状态由什么决定 ❓

```js
    new Promise((resolve, reject) => {
        // resolve(1)
            reject(2)
        }).then(
            value => {
                console.log('onResolved1--' + value); },
            reason => {
                console.log('onRejcected1--' + reason); }
        ).then(
            value => {
                console.log('onResolved2--' + value); },
            reason => {
                console.log('onRejcected2--' + reason); }
        )
        // 第一次.then()执行后会返回一个新的promise对象，这个新对象的结果和第一次.then()的结果是成功还是失败相关。
```

（1）简单表述：由`then()`指定的回调函数-执行的结果-决定。

（2）详细表述：

- 如果返回的是另一个新promise，此promise的结果就会变成新promise的结果。

```js
new Promise((resolve, reject) => {
        resolve(1) //1. 成功的数据
        }).then(
            value => {
                console.log('onResolved1--' + value);
        // 2.没有return 值，默认返回的是 undefined ，
                },
            reason => {}
        ).then(//3.下一个.then 是接收的上一个promise对象的结果-的返回值，所以输出的是 undefined
            value => {
                console.log('onResolved2--' + value); },
            reason => {
                console.log('onRejcected2--' + reason); }
        )
```

- 如果返回的是非promise的任意值，新promise变为resolved，value为返回的值。

```js
        new Promise((resolve, reject) => {
            // resolve(1)
            reject(1)
        }).then(
            value => {
                console.log('onResolved1--' + value);
                // return 2 // 直接 return 一个值
                // return Promise.resolve(2)//成功状态值为2的Promise对象
                // return Promise.reject(2)//失败状态值为3的Promise对象
                throw 5
            },
            reason => {
                console.log('onRejcected1--' + reason);
                // return Promise.resolve(2)//成功状态值为2的Promise对象
                // return Promise.reject(3)//失败状态值为3的Promise对象
                throw 5

            }
        ).then(
            value => {
                console.log('onResolved2--' + value);
            },
            reason => {
                console.log('onRejcected2--' + reason);
            }
        )
```

- 如果抛出异常，新promise变为rejected，reason为抛出的异常。

```js
new Promise((resolve, reject) => {
            resolve(1)
            // reject(2)
        }).then(
            value => {
                console.log('onResolved1--' + value);
                // throw 5
                throw new Error('err')
            },
            reason => {
                console.log('onRejcected1--' + reason);
            }
        ).then(
            value => {
                console.log('onResolved2--' + value);
            },
            reason => {
                console.log('onRejcected2--' + reason);// 5 | err
            }
        )
```

### 5.Promise如果串联多个操作任务 ❓

1. promise的.then()返回一个新promise对象，可以看成then()的链式调用
2. 通过.then()的链式调用，串联多个同步或异步任务。

```js
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('执行任务1（异步）');
                resolve(1)
            }, 1000);
        }).then(
            value => {
                console.log('任务一的结果', value);
                console.log('执行任务2（同步）');
                return 2
            },
        ).then(
            value => {
                console.log('任务二的结果', value);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('执行任务3（异步）');
                        resolve(3)
                    }, 1000)
                })
            }
        ).then(
            value => {
                console.log('任务三的结果', value);
            })
```

### 6. Preomise 的异常传透 ❓

1. 当使用promise的.then()链式调用时，可以在最后指定失败的回调；
2. 前面任何操作了异常，都会传到最后失败的回调中处理。

```js
// 例子：失败的状态，但时.then中没有定义 reason=>{}
// 会直接传透到最后的.catch()中。
new Promise((resolve, reject) => {
            // resolve(1)
            reject(2)
        }).then(
            value => {
                console.log('onResolved', value);
            },
        ).then(
            value => {
                console.log('onResolved', value);
            },

        ).then(
            value => {
                console.log('onResolved', value);
            },

        ).catch(
            reason => {
                console.log('onRejected', reason);
            }
        )
```

```js
// 实际内部的操作 reason => { throw reason } or reason => Promise.reject(reason)
new Promise((resolve, reject) => {
            // resolve(1)
            reject(2)
        }).then(
            value => {
                console.log('onResolved', value);
            },
            // reason => { throw reason }
            // reason => Promise.reject(reason)
        ).then(
            value => {
                console.log('onResolved', value);
            },
            // reason => { throw reason }
            // reason => Promise.reject(reason)

        ).then(
            value => {
                console.log('onResolved', value);
            },
            // reason => { throw reason }
            // reason => Promise.reject(reason)

        ).catch(
            reason => {
                console.log('onRejected', reason);
            }
        )
```

### 7. 中断 promise 链

1. 当使用promise的.then()链式调用时，在中间中断，不在调用后面的回调函数。
2. 办法：在回调函数中返回一个pending状态的promise对象。

```js
new Promise((resolve, reject) => {
            // resolve(1)
            reject(2)
        }).then(
            value => {
                console.log('onResolved', value);
            },
            reason => { throw reason }
        ).then(
            value => {
                console.log('onResolved', value);
            },
            reason => { throw reason }
        ).then(
            value => {
                console.log('onResolved', value);
            },
            reason => Promise.reject(reason)
        ).catch(
            reason => {
                console.log('onRejected', reason);
                // throw reason
                // return Promise.reject(reason);
                // 没有throw reason 或者 return Promise.reject(reason) 下一个.then()的值是 resolve ：undefined ，因为返回值是 undefined
                //
                // 中断执行链式调用
                //返回一个新的状态为pending的promise对象即可
                return new Promise(() => { })
            }
        ).then(
            value => {
                console.log('onResolved2', value);
            },
            reason => {
                console.log('onRejected2', reason);
            }
        )
```
