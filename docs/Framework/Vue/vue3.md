---
title: Vue 组件通信
date: 2019-2-13
sidebar: 'auto'
tags:
 - vue
 - 组件通信
publish: true
---

## 1.  props & $emit 传值(常用方法)

  <font size="5">A、 props 父传子</font>

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

注意： 在父组件的属性名 data_Father 和子组件中用来接收的变量要保持一致！data_one在父组件一致即可，与子组件无关。

<font size="5">B、$emit 子传父</font>

```html
<!-- 子组件 -->
<template>
  <div class="son">
    <h3>我是子组件组件--通信练习</h3>
    <button @click="SonClick">修改父组件数据</button>
    <!-- 子组件用 v-on 绑定一个用来修改父组件数据的函数 -->
  </div>
</template>
<script>
export default {
  name: "son",
  methods: {
    SonClick() {
      // 调用父组件提供的函数，从而实现父子通信
      // $emit 又两个参数 ，a 父组件提供的函数名(字符串的形式)，b 新是数据
      // handSon是父组件函数名
      this.$emit('handleSon', '子组件修改了数据')
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
父组件中的函数 handleFather 是子组件上的自定义属性的值；handleSon是让子组件通过$emit 修改数据的函数名，和父组件里子组件上是自定义属性名一致。
:::

## 2.
$bus 中央事件池

