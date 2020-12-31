---
title: JS 常用数据操作方法
date: 2019-12-21
sidebar: 'auto'
categories:
- 前端基础
tags:
- JavaScript
publish: true
# 打赏
showSponsor: true
---
## 数字

## 字符串

- 反转字符串

```js

```

## 数组

### 扁平化数组

1. `forEach()`

```js
function flatten(arr) {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i))
      result.push(...flatten(i));
    else
      result.push(i);
  })
  return result;
}

// Usage
const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

flatten(problem); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

2. `arr.flat(2)`, `2`是深度，就是套了几层

```js
 var arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]].flat(2);
 console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 数组去重合并

```js
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}
var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));
```

### 合并两个数组

```js
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables);
// ['parsnip', 'potato', 'celery', 'beetroot']
```

### 数组去重

:::details

1. `js` 方式

```js
var arr=['12','32','89','12','12','78','12','32'];
    // 最简单数组去重法
    function unique1(array){
        var n = []; //一个新的临时数组
        for(var i = 0; i < array.length; i++){ //遍历当前数组
            if (n.indexOf(array[i]) == -1)
                n.push(array[i]);
        }
        return n;
    }
    arr=unique1(arr);
```

2. 扩展运算符，`Set`类型

```js
    // 数组去重1
    var a = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
    let b = Array.from(new Set(a));
    console.log([...b]);

    // 数组去重2
    var a = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
    let b = new Set(a);
    console.log(b);
```

:::

### 数组的排序

:::details

1. `sort` 方法

```js
/*
    按 sort 及  id 排序
   @param {Object} a
   @param {Object} b
*/
 function   sortFun(a, b) {
       return a.sort - b.sort == 0 ? a.id - b.id : a.sort - b.sort
  };
 arr.sort(sortFun)   //从小到大排序
```

2. 数组对象排序

```js
var arr = [{name: "zlw", age: 24}, {name: "wlz", age: 25}];
var compare = function (obj1, obj2) {
    var val1 = obj1.name;
    var val2 = obj2.name;
    if (val1 < val2) {
        return -1;
    } else if (val1 > val2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(arr.sort(compare));
```

:::

### 递归求和

:::details

1. `js`

```js
 function add(num1,num2){
 var num = num1+num2;
  if(num2+1>100){
     return num;
          }else{
             return add(num,num2+1)
         }
     }
     var sum =add(1,2)
```

2. 数组求和 方法 `reducer()`

？
:::

### 计算数组各项的重复次数

:::details

```js
var arr=['胡将','胡将','hujiang','胡将','胡江','hujiang'];
var obj={};
arr.sort();    //先排序
for(var i=0;i<arr.length;){
 var con=0;
 for(var j=i;j<arr.length;j++){
  if(arr[i]===arr[j]){
   con++
  }
 }
 obj[arr[i]]=con;
 i=i+con;    //跳过重复的值
}

console.log(obj);  //{ hujiang: 2, '胡将': 3, '胡江': 1 }
```

:::

- `shift()` 下例中每个循环将要从一个数组中移除下一项元素，直至它成为空数组。

```js
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

## 对象

- 像数组一样使用对象

```js
var obj = {
    length: 0,

    addElem: function addElem (elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```
