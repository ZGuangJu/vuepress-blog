---
title: 项目介绍
date: 2019-10-05
sidebar: 'auto'
categories:
 - 项目
tags:
 - vue
 - 项目
publish: true
# 打赏
showSponsor: true
---

1. 我做的是个什么项目，叫什么名，主要是面向消费者销售电子，生活用品，母婴...
2. 本项目是公司自产自销的app
3. 我负责该项目的4个模块的开发，分别是登录，首页，购物车，订单，用户等
4. 使用vue+Nuxt.js 开发的整个项目架构，先从首页开始介绍，首页有什么---怎么来的数据---怎么渲染的---类型的点击之后路由参数
5. 依次介绍自己开发的几大模块流程

* 面试官针对性的问项目中的具体细节，开发逻辑注意，购物车的数据哪里来的---进入购物车页面，从vuex中获取用户的购物车订单编号，请求接口，接口返回数据，

6. 开发时遇到的问题

- 全选单选，当时全选单选都是用watch，导致发生了一个错误，
解决： 把全选用事件去处理，不用watch监听，解决了这个问题
- 清除轮询请求