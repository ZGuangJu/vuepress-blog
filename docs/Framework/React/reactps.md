---
title: React PS
date: 2020-10-26
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - react
publish: true
---
DAY 1
DAY 2

## Route三种渲染方式

chirlren
render
component

## 权重

## 路由配置方式

### 嵌套路由

一级路由里呈现二级的路由页面，二级的路由地址是基于一级的路由地址
`/home`是一级，`/home/01` 是嵌套的二级

### 动态路由

一个匹配组件可以匹配到多个地址，和嵌套路由相似，但是嵌套路由的地址是写死的，动态路由地址是被动态参数接收的
`/:id` 可以匹配 `/home` `/news`
并且动态路由也是路由传参的一种方式

### match 的 path

路由组件中被注入的对象，match里有path属性和url属性
path属性是路由匹配用的，url属性指当前地址栏的路径
如果需要再动态路由组件中，拼接导航用url 拼接Route 用 path

rem 插件npm i postcss-pxtorem
vh
vw
// react-router-config
// react-router-pro
// redux
// mobx简单
