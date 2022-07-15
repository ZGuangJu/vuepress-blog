---
title: Vue3 生命周期
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

## Vue3  的生命周期

```html
<template>
  <div class="Home">
    <div>
      Home
      <div>{{ msg }}</div>
    </div>
  </div>
</template>
<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  porps: ["msg"],
  // 这些是组合式 API 的使用方法
  setup() {
    // setup(){} 相当于 beforeCreate 和 created 两个钩子
    console.log("setup");
    onBeforeMount(() => {
      console.log("onBeforeMount -- Composition API");
    });
    onMounted(() => {
      console.log("onMounted -- Composition API");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate -- Composition API");
    });
    onUpdated(() => {
      console.log("onUpdated -- Composition API");
    });
    // beforeDestroy() {
    //   console.log("beforeDestroy -- Composition API");
    // },
    // destroyed() {
    //   console.log("destroyed -- Composition API");
    // },
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount -- Composition API");
    });
    onUnmounted(() => {
      console.log("onUnmounted -- Composition API");
    });
  },
  // 以下时选项式 API 使用方法
  beforeCreate() {
    console.log("beforeCreate -- options API");
  },
  created() {
    console.log("created -- options API");
  },
  beforeMount() {
    console.log("beforeMount -- options API");
  },
  mounted() {
    console.log("mounted -- options API");
  },
  beforeUpdate() {
    console.log("beforeUpdate -- options API");
  },
  updated() {
    console.log("updated -- options API");
  },
  // beforeDestroy() {
  //   console.log("beforeDestroy -- options API");
  // },
  // destroyed() {
  //   console.log("destroyed -- options API");
  // },
  beforeUnmount() {
    console.log("beforeUnmount -- options API");
  },
  unmounted() {
    console.log("unmount -- options API");
  },
};
</script>
<style scoped>
</style>
```
