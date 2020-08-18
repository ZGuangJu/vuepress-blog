---
title: Vue & vue 以及语法
date: 2019-2-5
sidebar: 'auto'
tags:
 - vue
publish: true
---

- Vue是构造函数
- vue是实例
 创建vue实例对象,用来启动应用函数接收一个对象作为参数，这个对象可以称作选项对象(可以创建多个无数个vue实例，但不这么用)
- 创建vue实例来启动应用

#### 选项对象：
- el(element):"CSS选择器"；//大多数用ID
- data:应用的数据，任意数据类型,以键值对的形式。//是一个对象
- methods:写方法
- computed :
···

#### 小胡子语法（mustache）

##### 语法：{{内容}}，插值表达式
双大括号 {{}}：小胡子语法/mustache语法/模板语法/插值表达式
将VUE的实例绑定到DOM上，有以下好处：

- 能解析变量，
- 计算
- 能使用js对象的方法


