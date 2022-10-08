---
title: Vue3 + Ts 实际中遇到的问题
date: 2022-10-08
sidebar: 'auto'
categories:
 - vue3 + ts
tags:
 - vue3
 - ts
publish: true
# 打赏
showSponsor: true
---
## three.js

- 安装`three.js`之后，使用时，引入`three`, `import { Scene } from 'three';` 报错。
原因是ts语法问题，需要在项目根目录的`shims-vue.d.ts`文件中加入以下代码

```ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
// declare module 'name' // 有明确是模块名就写具体名字
declare module '*' // 如果不在乎外部库的类型，可以直接设为 *
```
