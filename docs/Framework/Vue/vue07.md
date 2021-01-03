---
title: Vue 路由生命周期
date: 2019-02-20
sidebar: 'auto'
tags:
 - vue
 - 路由
publish: true
# 打赏
showSponsor: true
---

`Vue-router` 路由生命周期也叫导航守卫

分3块：全局守卫、路由独立守卫、组件内守卫

### 全局守卫 main.js

全局守卫：是指路由实例上直接操作的钩子函数，特点是所有路由配置的组件都会触发，直白点就是触发路由就会触发这些钩子函数

1. `beforeEach（to，from， next）`
2. `beforeResolve（to，from， next）`
3. `afterEach（to，from）`

```js
router.beforeEach((to, from, next) => {
  // 全局前置守卫
  // if(to.fullPath === '/shoppingCart'){
  //   //如果没有登录?对不起先去登录一下
  //   next('/login')
  // }
  console.log('1 beforeEach', to, from)
  next()
})
// 时间触发比 全局前置守卫慢些
router.beforeResolve((to, from, next) => {
  // 全局解析守卫
  console.log('3 beforeResolve', to, from)
  next()
})

router.afterEach((to, from) => {
  // 全局后置守卫、钩子
  console.log('4 afterEach', to, from)

})
```

### 路由独立守卫 router.js

路由独立守卫： 是指在单个路由配置的时候也可以设置的钩子函数

- `beforeEnter（to，from， next）`

```js
  {
    path: '/a',
    name: 'pageA',
    components:{
      default:pageA,
      ppp:Test
    },
    beforeEnter:(to,from,next)=>{
      console.log('2 beforeEnter',to,from)
      next()
    },
  },
```

### 组件内守卫  xxx.vue

组件守卫：是指在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数。

1. `beforeRouteEnter（to，from， next）`
2. `beforeRouteUpdadte（to，from， next）`
3. `beforeRouteLeave（to，from， next）`

```js
export default {
  beforeRouteEnter(to,from,next){
    //这里 拿不到this
    // 路由跳转，使用此组件时触发
    console.log('beforeRouteEnter',to,from)
    next()
  },
  beforeRouteUpdate(to,from,next){
    //可以获取 this
    // /a/123 /a/456  当 组件被复用时，触发此方法
    console.log('beforeRouteUpdate',to,from)
    next()
  },
  beforeRouteLeave(to,from,next){
    //可以获取this
    //路由跳转，不适用此组件时触发
    console.log('beforeRouteLeave',to,from)
    next()
  }
}
```

## 路由守卫回调参数介绍

- `to`：即将要进入的目标路由对象；

- `from`：即将要离开的路由对象；

- `next`：涉及到next参数的钩子函数，必须调用next()方法来resolve这个钩子，否则路由会中断在这，不会继续往下执行

`next()`：进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed(确认的)。
next( false )中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到from路由对应的地址。
next( ' / ')或者next({ paht：' / '  })：跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。可传递的参数可以是router-link标签中的to属性参数或router.push中的选项
next( error )：如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调。
路由守卫详解
【1】全局前置守卫（beforeEach）: 在路由跳转前触发，这个钩子作用主要是用于登录验证，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚。
