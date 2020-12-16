---
title: Vue 组件通信
date: 2019-02-13
sidebar: 'auto'
tags:
 - vue
 - 组件通信
publish: true
# 打赏
showSponsor: true
---

## 1.  `props` & `$emit` 父子传值(常用方法)

- A、 `props` 父传子

主要传值，可以传方法，但不常用

语法：

父组件使用`v-bind`动态绑定数据 `:自定义属性名="值"`

子组件使用`props` 接收数据

```js
props：["自定义属性名"]
```

或者

```js
props：{
       "自定义属性名"：{
       type：Array，
       default：默认值，
       required：是否必填
      }
  }
```

例子：

```html
<!-- 父组件 -->
<template>
  <div class="father">
      <h2>props/$emit[传统的父子通信]</h2>
    <Son :data_Father="data_one" />  <!--第一步 父组件用 v-bind 向子组件发送数据 -->
  </div>
</template>
<script>
import Son from '../components/ZuJian/zujian/Son_one'
export default {

  name: "father",
  data() {
    return {
      data_one: "我是父组件的数据056"//父组件的数据
    }
  },
  components: {
    Son
  }
}
</script>
```

```html
<!-- 子组件 -->
<template>
  <div class="son">
  <h2>我是子组件</h2>
  组件通信练习{{ data_Father }}</div>  <!-- 使用数据 -->

</template>
<script>
export default {
  name: "son",
  props: ['data_Father']//第二步，用 props ，接收数据
};
</script>
<style>
</style>
```

:::warning 注意：
在父组件的属性名 `data_Father` 和子组件中用来接收的变量要保持一致！`data_one`在父组件一致即可，与子组件无关。
你不应该在子组件内部直接改变 `prop`，具体原因可以直接看官网介绍
:::

- B、`$emit` 子传父

可以传方法或值

语法：

子组件调用`@emit()`方法，这个方法接收两个参数

```js
$emit("自定义事件名称"（必写）,传递的值（可选）)
```

父组件使用`v-on` 简写 `@自定义事件名=""`

例子：

```html
<!-- 子组件 -->
<template>
  <div class="son">
    <h3>我是子组件组件--通信练习</h3>
    <button @click="SonClick">修改父组件数据</button>
    <!-- 子组件用 v-on 绑定一个用来修改父组件数据的函数(函数在父组件里) -->
  </div>
</template>
<script>
export default {
  name: "son",
  methods: {
    SonClick() {
      /*
      调用父组件提供的函数，从而实现父子通信
      $emit有两个参数 ，
      a 父组件提供的函数名(字符串的形式)，
      b 新是数据(传递给父组件里用于修改数据的函数的参数)
      */
     this.$emit('handleSon', '子组件修改了数据')
      // handSon是父组件函数名
    }
  }
};

</script>
<style>
</style>
```

```html
<!-- 父组件 -->
<template>
  <div class="father">
    <h3>props/$emit[传统的父子通信]</h3>
    <!-- 子组件Son用 v-on 绑定的函数修改父组件数据 一般情况下自定义函数名和值是一致的，防止混乱 本例中为了演示，不同-->
    <Son @handleSon="handleFather" />
    {{ data }}
  </div>
</template>
<script>
import Son from '../components/ZuJian/zujian/Son_one'
export default {
  name: "father",
  components: {
    Son
  },
  data() {
    return {
      data: '父组件的数据信息'
    }
  },
  methods: {
    // 声明一个让 子组件 来调用的方法
    handleFather(data_Son) {
      // 拿到了来自子组件传递过来的新的数据
      this.data = data_Son
      console.log(data_Son)
    }
  },
}
</script>
```

:::warning 注意
父组件中的函数 `handleFather` 是子组件上的自定义属性的值；`handleSon`是让子组件通过`$emit` 修改数据的函数名，和父组件里子组件上是自定义属性名一致。
:::

## 2. `$attrs` & `$listeners`

`Vue_2.4` 中新增的 `$attrs/$listeners` 可以进行跨级的组件通信。`$attrs` 包含了父级作用域中不作为 `prop` 的属性绑定（`class` 和 `style` 除外）

- `$attrs`

`attributes`:`属性`的缩写;可以批量向下传递数据 / 只传属性
`$attrs` 是组件（`vue`实例上）固有的用来描述该组件身上的所有属性集合的对象;如果继续向下传递，在中间组件中 `v-bind = "$attrs"`

- `$listeners`

批量向下传递方法 / 只传方法

`$listeners` 是组件上的属性，用来保存组件身上的方法;如果继续向下传递，使用 `v-on="$listeners"`,
`$bus` 中央事件池
