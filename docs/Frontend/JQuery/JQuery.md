# jQuery

:::tip 介绍

:::

## jQuery 对象与 DOM 对象的区别（重点）

1. `DOM`对象：使用`Javascript`中的方法获取页面中的元素返回的对象就是dom对象。

2. `jQuery`对象：`jquery`对象就是使用`jquery`的方法获取页面中的元素返回的对象就是`jQuery`对象。

3. `jQuery`对象其实就是`DOM`对象的包装集（包装了DOM对象的集合（伪数组））

4. `DOM`对象与`jQuery`对象的方法不能混用。

## jq使用方法

1. 在`script`标签中以 `CDN` 引入项目或页面

2. 在`script`标签中引入本地`jquery`文件
:::warning 注
引入和写jq代码要在两个script标签里

script引入标签在上面，写代码的script标签在下面
:::
## jq入口函数

- 入口函数的目的：是为了拿到页面中的所有元素

1. jq写法
```js

//jq固定写法
$(document).ready(function(){
    //代码内容
})

// 简写
$(function(){
    //代码内容
})
```
2. 对比原生 `js` 的写法

```js

window.onload = function(ev){
    //代码内容
}
```

- 区别：


## 其他

获取元素宽度
```js
// 常规方法
var width =window.getComputedStyle(img).width;


```