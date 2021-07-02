---
title: JS 常用数据操作方法
date: 2019-12-21
sidebar: 'auto'
categories:
- 前端基础
tags:
- JavaScript
publish: true
sticky: 2
# 打赏
showSponsor: true
---

收集的`js`方法和轮子

<!-- more -->

## HTML

### 将 html 标签转为字符串

```js
    function HTMLDOMtoString(HTMLDOM) {
        const div = document.createElement("div");
        div.appendChild(HTMLDOM);
        return div.innerHTML;
    }
```

### 获取 dom 标签元素的所有属性和属性值

```js
    var div = document.getElementsByTagName("div")[0]

    function HTMLDOMtoString(HTMLDOM) {
        const div = document.createElement("div");
        div.appendChild(HTMLDOM);
        let str = div.innerHTML;
        let num = str.indexOf(">");
        let arr = str.slice(1, num).split(" ").slice(1);
        return arr
    }

    console.log(HTMLDOMtoString(div));
```

## 字符串

- 反转字符串

1. `reverse()`

```js
var str = "abcdefgh"
console.log(str.split("").reverse().join(""))
```

2. `unshift()`

```js
    var str = "abcdefgh"
    function Reverse(str) {
        let arr = []
        let restr = str.split("")
        for (let i = 0; i < restr.length; i++) {
            arr.unshift(restr[i])
        }
        return arr.join("")
    }
    console.log(Reverse(str));
```

### 字符串去重

   1. `for`循环

```js
    var str = "abcabcabc"
    function DeRepet(str) {
        var newStr = ""
        for (let i = 0; i < str.length; i++) {
            if (newStr.indexOf(str[i]) == -1) {
                newStr += str[i]
            }
        }
        return newStr
    }
```

2. `Set()`

```js
    var str = "abcabcabc"
    Array.from(new Set(str)).join("")
```

```js
    var str = "abcabcabc"
    [...new Set(str)].join("")
```

### 反转字符串

```js
var str = '12345';
Array.prototype.map.call(str, function(x) {   //同时利用了call()方法
  return x;
}).reverse().join('');
```

## 数组

### 伪数组转真数组

1. `let arr =Array.from()`

```js
function fn(a, ...b) {
                let arr = Array.from(arguments);
                console.log(arr);
            }
fn(1, 2, 3, 4, 5);
```

2. `Array.prototype.slice.call(arguments, 2)`

`slice` 方法可以用来将一个类数组（`Array-like`）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。 一个函数中的  `arguments` 就是一个类数组对象的例子。

```js
function list() {
  return Array.prototype.slice.call(arguments);
}
var lists1 = list(1, 2, 3); // [1, 2, 3]
function list2() {
  return Array.prototype.slice.call(arguments,1);//第二个参数，从哪个下标开始转为真数组
}
var lists2 = list2(1, 2, 3); // [2, 3]
```

除了使用`Array.prototype.slice.call(arguments)`，你也可以简单的使用 `[].slice.call(arguments)` 来代替。另外，你可以使用 `bind` 来简化该过程。

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

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

### 数组去重

1. 扩展运算符，`Set`类型

```js
    // 数组去重 1
    var a = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
    let b = Array.from(new Set(a));
    console.log(b);

    // 数组去重 2
    var a = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
    let b = [...new Set(a)];
    console.log(b);
```

2. `js` 方式

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

### 数组去重合并

```js
    function combine(){
        let arr = [].concat.apply([], arguments);  //没有去重复的新数组
        return Array.from(new Set(arr));
    }
    var m = [1, 2, 2], n = [2,3,3];
    console.log(combine(m,n));
```

```js
    var arr1 = [1, 2, 1, 2, 1, 3, 5, 4, 6, 8]
    var arr2 = ["a", "b", "a", "b", "c", "d", "e", "f"]
    var arrAll = arr1.concat(arr2)
    console.log([...new Set(arrAll)]);
```

### 合并两个数组

- 合并到原数组（改变原数组）

1. `concat`

```js
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
var newarr = vegetables.concat(moreVegs)
console.log(newarr);
```

2. 展开操作符

```js
var vegetables = ["parsnip", "potato"];
var moreVegs = ["celery", "beetroot"];
vegetables.push(...moreVegs);
console.log(vegetables);
```

3. `apply`

```js
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
// 或者另一个写法
// vegetables.push.apply(vegetables, moreVegs);
console.log(vegetables);
// ['parsnip', 'potato', 'celery', 'beetroot']
```

### 获取数组中最大的一项

1. for

```js
    function Max(arr) {
        let maxNum = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i]
            }
        }
        return maxNum
    }
```

2. Math

```js
var arr = [1, 2, 3];
var max = Math.max.apply(null, arr);
console.log(max);//3
```

或

```js
var arr = [1, 2, 3];
var max = Math.max.apply(this, arr);
console.log(max);//3
```

或

```js
var arr = [1, 2, 3];
console.log(Math.max(...arr))
var
```

### 获取数组中最小的一项

1. for

```js
    function Min(){
        let minNum =arr[0]
        for(let i=0 ;i<arr.length; i++){
            if(arr[i]<minNum){
                minNum = arr[i]
            }
        }
        return minNum
    }
```

2. Math

```js
var arr = [1, 2, 3];
var max = Math.min.apply(null, arr);
console.log(max); //1
```

```js
 var a = [1, 2, 3, 4, 5]
console.log(Math.min(...a));
```

### 随机取数组中一项

```js
 var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

        for (let i = 0; i < 50; i++) {
            function randoms(arr) {
                function ran(max, min) {
                    return Math.floor(Math.random() * (max - min)) + min
                }
                var b = ran(arr.length, 0)
                return arr[b]
            }
            console.log(randoms(a));
        }
```

### 数组的排序

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

```js
var a =[1,5,9,8,4,6]
a.sort((a,b)=> a-b)
console.log(a)
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

### 数组求和  `reducer()`

```js
    function Reduce(arr) {
        return arr.reduce((start, item, index, arr) => {
            return start += item
        }, 0)
    }
```

### 递归求和

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

### 计算数组各项的重复次数

```js
    var arr = ['胡将', '胡将', 'hujiang', '胡将', '胡江', 'hujiang'];
    var obj = {};
    arr.sort();    //先排序
    for (var i = 0; i < arr.length;) {
        var count = 0;
        for (var j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        obj[arr[i]] = count;
        i = i + count;    //跳过重复的值
    }

    console.log(obj); //{ hujiang: 2, '胡将': 3, '胡江': 1 }
```

- `shift()` 下例中每个循环将要从一个数组中移除下一项元素，直至它成为空数组。

```js
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

### 数组中的字符串循环转数字（数字字符串）

```js
    var arr = ["1", "2", " 3"]
    function toNumber(arr) {
        return arr.map((item) => {
            return parseInt(item, 10)
        })
    }
```

### 数组中的数字转字符串

```js
[1,2,3,4,5,6].join("").split("")
```

## 对象

### 像数组一样使用对象

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

## Math

### 随机数(伪)

```js
// 0-9
    Math.floor(Math.random()*10)
```

### 两数随机(伪)

```js
    function Randoms(max,min){
    return Math.floor(Math.random()*(max-min)+min)
    }
    Randoms(10,1)
```

### 真随机

```js
// 可以用 Int8Array 2位 Uint8Array 2位 Int16Array 5位  Uint16Array 5位 Int32Array +-10位 或 Uint32Array 10位
    var arr = new Uint32Array(1)
    var a = window.crypto.getRandomValues(arr)
    console.log(a);
```
