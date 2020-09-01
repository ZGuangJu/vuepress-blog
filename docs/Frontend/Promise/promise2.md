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

## 英文释义：

  `resolved` adj:下定决心的,解决

  `fulfilled` adj:履行；满足

  `rejected` adj: 被拒的；不合格的 | v. 拒绝，驳回

  `reason` adj:原因,理由