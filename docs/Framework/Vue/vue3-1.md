---
title: Vue3 的使用(暂定)
date: 2020-9-24
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - vue3
publish: true
---

## 创建

1. `Vue3.0`的安装`vite`方式(暂定 )

```s
npm init vite-app [projectname]
或者
yarn create vite-app [projectname]
```

2. 用`vue create`方式
注意`vue/cli` 要`v4.5`以上,使用`npm i -g @vue/cli`升级到新版

```s
vue create
```

本方法的步骤和创建`vue2.x`是一样的，只是有了一个`vue`版本的选项

## 安装路由

```s
npm i vue-router@next
```

|                    Vue2.x                     |                                Vue3.0                                |
| :-------------------------------------------: | :------------------------------------------------------------------: |
|                    new Vue                    |                              createApp                               |
| mode:history （哈希模式一般都是开发模式    ） | 路由模式history :createWebHistory（和history的区别是：地址栏无变化） |
|                只能一个根元素                 |                         组件里支持多个根元素                         |
|                                               |                         路由跳转 useRouter()                         |
vue3.0挂载

```js
let app = createApp(App)
app.mount('#app') //挂载到根节点
app.use(router)
```

setup

```js
  setup() {

    // 没有this
    // 默认只执行一次，相当于 beforeCreate+ created
  },
```

无论是值还是函数都需要通过`return` 暴露给外部使用

```js
export default {
  name: 'App',
  setup() {
    // 没有this
    // 默认只执行一次，相当于 beforeCreate+ created
    const state = reactive({
      a: 1
    })
    const add = () => {
      state.a++
    }
    return {
      // toRefs 有双向绑定的功能，并且能对toRefs返回的对象进行解构赋值
      ...toRefs(state),
      add
    }
  },
  components: {
    HelloWorld
  }
}
```
