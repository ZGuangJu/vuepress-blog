---
title: Vue3 的使用(暂定)
date: 2021-06-24
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - vue3
publish: true
# 打赏
showSponsor: true
---
## Vue 3.0 优势

- `Performance`:性能比`Vue2.x`快`1.2~2`倍
- `Tree shaking support`:按需编译，体积比`Vue2`小
- `Composition Api` :组合`Api`(类似`React Hooks`)
- `Better TypeScript Support`: 更好的`Ts`支持
- `Custom Renderer Api`: 暴露了自定义渲染`Api`
- `Fragment, Teleport(Protal), suspense` :更先进的组件

### Vue3.0是如何变快的？

- `diff`方法优化：
  - `Vue2.x`中的虚拟`DOM`是进行全量的对比
  - `Vue3.0`新增了补丁标记(`PatchFlag`)
在与上一次虚拟节点进行对比时，只对比带有`patchflag`的节点，并且可以通过flag的信息得知当前节点要对比的具体内容

[Vue2源码解析页](https://template-explorer.vuejs.org/)
[Vue3源码解析页](https://vue-next-template-explorer.netlify.app)

## 创建 `Vue3.0`

### `vite`方式(暂定)

本方法是用`vite`构建工具创建项目。

1. 第一种

```s
yarn create @vitejs/app [projectname] --template vue
```

`<script setup>`  `Hello Vue 3 + Vite`

启动

```js
  vite v2.4.3 dev server running at:

  > Local: http://localhost:3100/
  > Network: use `--host` to expose

```

2. 第二种(官方)

```s
npm init vite-app [projectname]
# or
yarn create vite-app [projectname]
```

不自带 `setup`  `Hello Vue 3.0 + Vite`

启动

```js
  Dev server running at:
  > Network:  http://172.22.176.1:3100/
  > Network:  http://192.168.43.41:3100/
  > Local:    http://localhost:3100/
```

:::warning

- 两种方法创建的项目，没有端口冲突，但是会优先显示第二种创建方式的项目
:::

### 用`vue-cli`方式

注意`vue/cli` 要`v4.5`以上,可使用`npm i -g @vue/cli`升级到新版

```s
vue create projectname
```

本方法的步骤和创建`vue2.x`是一样的，只是有了一个`vue2.0 / vue3.0`版本的选项

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

vue2.0挂载

```js

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
```

vue3.0挂载

```js
let app = createApp(App)
app.mount('#app') //挂载到根节点
app.use(router)
```

`setup`

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
