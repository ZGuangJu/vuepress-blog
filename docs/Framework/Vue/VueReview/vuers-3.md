---
title: Vue vuex（总结）
date: 2019-12-8
sidebar: 'auto'
tags:
 - vue
publish: true
---

1. vuex是什么
全局状态管理器

2. 五大组成部分
- state 状态数据
- getters 计算属性
- actions  异步处理方法
- mutations  同步修改state方法
- modules  多模块拆分vuex

3. vuex工作流程
state数据绑定到组件上，组件触发dispatch 调用actions里的方法， actions调用commit 触发mutations里的方法，muntations里修改state数据，state数据一改变，会自动更新组件里的元素
补充：getters，一旦state被修改，getters会被触发，它的功能和vue组件里的component一样，用来过渡或加工state数据

4. mutations和actions的区别
- mutations 处理同步 actions处理异步，修改数据只能在mutations里
- 就在actions中修改可以吗，可以，但不符合官方的规定，并且开启严格模式，会报错

5. vue 开启严格模式
- 开启严格模式，仅需在创建 store 的时候传入 strict: true
```js
    const store = new Vuex.Store({
    strict: true
})
```
6. 辅助函数
- mapState
- mapGetters
- mapActions
- mapMutations

7. 如何解决vuex 值刷新丢失的问题
- vuex数据存储在内存中，当页面刷新时就丢失了，
登录成功后，数据存入vuex里，但是用户刷新页面，登录状态就丢失了

- 使用本地存储，来解决安装插件vuex-persist