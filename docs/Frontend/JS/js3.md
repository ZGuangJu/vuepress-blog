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

### 封装 事件绑定和取消事件绑定

```js
//事件绑定
function on(dom, eventType, fn) {
    if(dom.addEventListener) {
        dom.addEventListener(eventType, fn);
    } else {
        if(dom.attachEvent) {
            dom.attachEvent('on' + eventType, fn);
        }
}
//取消事件绑定
function un(dom, eventType, fn) {
     if(dom.removeEventListener) {
         dom.removeEventListener(eventType, fn, false);
     } else {
         if(dom.detachEvent) {
             dom.detachEvent("on" + eventType, fn)
         }
     }

 }
```

兼容ie的事件绑定

```js
 var div1 = document.getElementById("div1")
        var div2 = document.getElementById("div2")
        function AddEvent(obj, val) {
            function fun(e) {
                console.log(val, "参数")
                if (obj.addEventListener) {
                    event.stopPropagation()
                    // event.preventDefault()
                } else if (obj.attachEvent) {
                    event.cancelBubble = true
                    // event.returnValue = false
                }
            }
            if (obj.addEventListener) {
                obj.addEventListener('click', fun)
            } else if (obj.attachEvent) {
                obj.attachEvent("onclick", fun)
            }
        }
        AddEvent(div1, "div1")
        AddEvent(div2, "div2")
```

### 页面加载过程

```js
    // 执行时一定是 loading
    console.log(document.readyState)
    // 当页面的readyState 状态发生改变时，readystatechange事件自动触发
    document.onreadystatechange = function () {
        console.log(document.readyState, "---63行")
    }
    // dom tree 加载完成时，DOMContentLoaded事件自动触发
    document.addEventListener("DOMContentLoaded", function () { console.log("doc tree加载完成", "---66行") })
    // 页面彻底加载完成 locd事件，window.onload 固定写法
    window.onload = function () {
        console.log("load 整个页面加载完成")
    }
    // 外部资源 load事件，图片加载完毕后触发
    document.querySelector("img").onload = function () {
        console.log("外部资源加载完成")
    }
```

### 模拟 DOMContentLoaded 事件的 readystatechange

```js
// 模拟 DOMContentLoaded/ jquery ready
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
}
```

### 模拟 load 事件的 readystatechange

```js
// 模拟 load 事件
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
}
```

### 在 DOMContentLoaded 之前使用 readystatechange 作为事件处理程序以插入或修改DOM

```js
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});
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

### 数组随机取值

```js
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var index = Math.floor(Math.random() * arr.length)
    console.log(arr[index]);
```

### 数组随机排列

- 洗牌算法(改变原数组)

```js
Array.prototype.shuffle = function () {
    var arr = this
    for (var i = arr.length - 1; i >= 0; i--) {
        var randomIdx = Math.floor(Math.random() * (i + 1))
        var itemAtIdx = arr[randomIdx]
        arr[randomIdx] = arr[i]
        arr[i] = itemAtIdx
    }
    return arr
}
var tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(tempArr.shuffle())//[ 5, 9, 6, 8, 4, 7, 3, 1, 2 ]
```

- 其他(改变原数组)

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        function randomSort(a, b) {

            return Math.random() > 0.5 ? 1 : -1
        }
        console.log(arr.sort(randomSort));
        console.log(arr);
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

## 函数 算法

- 递归求和

```js
    function sum(n) {
        if (n == 1) {
            return 1
        }
        return sum(n - 1) + n;
    }
    console.log(sum(100));
```

```js
    function sum(n) {
        if (n == 1) return n
        return n + sum(n - 1)
    }
    console.log(sum(100));
```

- 函数防抖

```js
    var div = document.querySelector("#div1")
        div.addEventListener('click', function () {
            debounce(demo)()
        })
        function demo() {
            console.log(window, "---45行")
        }
        function debounce(fn, interval) {
            let timer = null; // 定时器
            // console.log(1, "---44行")
            return function () {
                // 清除上一次的定时器
                clearTimeout(timer);
                // 拿到当前的函数作用域
                let _this = this;
                // 拿到当前函数的参数数组
                // let fl = Array.prototype.slice.call(arguments, 0)
                let args = Array.from(arguments)
                // 开启倒计时定时器
                timer = setTimeout(function () {
                    // 通过apply传递当前函数this，以及参数
                    fn.apply(_this, args);
                    // 默认300ms执行
                }, interval || 300)
            }
        }
```

## 其他

- 避免闭包引起的内存泄漏：避免变量的循环赋值和引用

```js
//这段代码会导致内存泄露
    window.onload = function(){
        var el = document.getElementById("id");
        el.onclick = function(){
            alert(el.id);
        }
    }

//解决方法为
    window.onload = function(){
        var el = document.getElementById("id");
        var id = el.id; //解除循环引用
        el.onclick = function(){
            alert(id);
        }
        el = null; // 将闭包引用的外部函数中活动对象清除
    }
```

### 三级联动

- js - 1

:::details

```js
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>三级联动</title>
</head>

<body>
    <select id="sheng">
        <option value=""></option>
        <!--先创建三个下拉栏，分别对应 省 市 县-->
    </select>

    <select id="shi">
        <option value=""></option>
    </select>

    <select id="xian">
        <option value=""></option>
    </select>
    <script>
        var osheng = document.getElementById("sheng");
        var oshi = document.getElementById("shi");
        var oxian = document.getElementById("xian");

        var arr_sheng = ["陕西省", "云南省", "四川省", "山西省"];//创建一个一维数组，存入省的值
        // 创建一个二维数组，最外层每一个元素对应省
        var arr_shi = [
            ["西安市", "咸阳市", "宝鸡市", "渭南市"],//数组中的第一个元素内又定义一个数组存的市的值
            ["昆明市", "大理市", "丽江市", "西双版纳市"],
            ["乐山市", "成都市", "大同市", "高新市"],
            ["太原市", "屏显市", "乐宝市", "李伟市"]
        ];
        // 创建一个三维数组，最外层每一个元素（对应省）
        // 数组中定义四个数组（对应市）
        var arr_xian = [
            [
                ["西安县1", "西安县2"], ["咸阳市1", "咸阳市2"], ["宝鸡市1", "宝鸡市2"], ["渭南市1", "渭南市2"]
            ],
            // 数组中定义两个元素（对应县）
            [
                ["昆明市1", "昆明市2"], ["大理市1", "大理市2"], ["丽江市1", "丽江市2"], ["西双版纳市1", "西双版纳市2"]
            ],
            [
                ["乐山市1", "乐山市2"], ["成都市1", "成都市2"], ["大同市1", "大同市2"], ["高新市1", "高新市2"]
            ],
            [
                ["太原市1", "太原市2"], ["屏显市1", "屏显市2"], ["乐宝市1", "乐宝市2"], ["李伟市1", "李伟市2"]
            ]
        ];

        var quanju_arr;//创建一个全局对象，用于存储一个中间数组

        function input_arr(arr, event) {//封装一个函数，用于向下拉栏中添加元素
            for (var i = 0; i < arr.length; i++) {//下拉栏内的元素来源于数组中的元素，遍历数组
                var option = new Option(arr[i], i);//创建Option对象（这个O要大写），存入值
                event.appendChild(option);//把option添加到event对象的末尾
            }
        }

        input_arr(arr_sheng, osheng);//调用,给省下拉栏添元素

        osheng.onchange = function () {//给下拉栏绑定事件（当下拉栏元素改变时执行）
            oshi.options.length = 1;//当省下拉栏改变时，清空市的下拉栏内元素
            oxian.options.length = 1;//当省下拉栏改变时，清空县的下拉栏内元素
            var index = this.value;//每一个option标签都有一个value值索引，获取索引，用于数组中元素的选择
            var arr_shi_next = arr_shi[index];//获取当前选择省的市元素并赋给一个数组
            quanju_arr = arr_xian[index];//获取当前选择省中市的县元素并赋给定义的中间数组
            input_arr(arr_shi_next, oshi);//调用,给市下拉栏添元素
        }

        oshi.onchange = function () {
            oxian.options.length = 1;
            var index = this.value;
            var arr_xian_next = quanju_arr[index];
            input_arr(arr_xian_next, oxian);//调用,给县下拉栏添元素
        }
    </script>
</body>

</html>
```

:::

- js - 2

:::details

```js
<!DOCTYPE html>
<html>

<head>        
    <meta charset="utf-8">
            <title></title>    
</head>

<body>
            省：
            <select style="width: 100px;" id="pre" onchange="chg(this);">
                    <option value="-1">请选择</option>
                </select>
            市：
            <select style="width: 100px;" id="city" onchange="chg2(this)" ;></select>
            区：
            <select style="width: 100px;" id="area"></select>
        </body>  
<script>

    //声明省
    var pres = ["北京", "上海", "山东"]; //直接声明Array
    //声明市
    var cities = [
        ["东城", "昌平", "海淀"],

        ["浦东", "高区"],

        ["济南", "青岛"]
    ];
    var areas = [
        [
            ["东城1", "东城2", "东城3"],
            ["昌平1", "昌平2", "昌平3"],
            ["海淀1", "海淀2", "海淀3"]

        ],
        [
            ["浦东1", "浦东2", "浦东3"],
            ["高区1", "高区2", "高区3"]
        ],
        [
            ["济南1", "济南2"],
            ["青岛1", "青岛2"]
        ]

    ]
    //设置一个省的公共下标
    var pIndex = -1;
    var preEle = document.getElementById("pre");
    var cityEle = document.getElementById("city");
    var areaEle = document.getElementById("area");
    //先设置省的值
    for (var i = 0; i < pres.length; i++) {
        //声明option.<option value="pres[i]">Pres[i]</option>
        var op = new Option(pres[i], i);
        //添加
        preEle.options.add(op);
    }
    function chg(obj) {
        if (obj.value == -1) {
            cityEle.options.length = 0;
            areaEle.options.length = 0;
        }
        //获取值
        var val = obj.value;
        pIndex = obj.value;
        //获取ctiry
        var cs = cities[val];
        //获取默认区
        var as = areas[val][0];
        //先清空市
        cityEle.options.length = 0;
        areaEle.options.length = 0;
        for (var i = 0; i < cs.length; i++) {
            var op = new Option(cs[i], i);
            cityEle.options.add(op);
        }
        for (var i = 0; i < as.length; i++) {
            var op = new Option(as[i], i);
            areaEle.options.add(op);
        }
    }
    function chg2(obj) {
        var val = obj.selectedIndex;
        var as = areas[pIndex][val];
        areaEle.options.length = 0;
        for (var i = 0; i < as.length; i++) {
            var op = new Option(as[i], i);
            areaEle.options.add(op);
        }
    }

</script>

</html>
```

:::

### 跨域 1 (`window.name iframe` )

通过window.name 和iframe

```js
// 页面 a 中存储数据
  window.name = "var a = 12"
```

```js
// 页面 b 中通过 iframe 读取数据
    window.onload = function () {
        var iframe = document.createElement('iframe');
        iframe.src = "test3.html"//项目地址不能是本地地址，要 http：xxx
        iframe.style.display = 'none'
        document.body.appendChild(iframe);
        iframe.onload = function () {
            var vname = iframe.contentWindow.name
            eval(vname)
            console.log(a);
        }
    }
```

### 跨域 2 (`jsonp`)

```js
// 本机代码
    <script>
            window.callback = function (data) {
                console.log(data, "data"); // 使用参数
            }
    </script>
    <script type="text/javascript" src="http://127.0.0.1:5500/test/js.js"></script>
```

```js
// 远程服务器调用，并传参
callback("我的数据")
```

### 检测当前浏览器所在的环境

```js
    var os = function (){
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
    }();

    if (os.isAndroid || os.isPhone) {
    alert("手机" );
    } else if (os.isTablet) {
        alert("平板" );
    } else {
        alert("电脑" );
// 或
    //  switch (true) {
    //         case os.isAndroid:
    //         case os.isPhone:
    //             alert("手机");
    //             break;
    //         case os.isTablet:
    //             alert("平板");
    //             break;
    //         default: // os.isPc
    //             alert("电脑");
    //             break;
    //     }
```

## 兼容

### 事件兼容

```js
var eventTool = {
    // target: window.event.target || window.event.srcElements,
    // 兼容阻止冒泡
    STOPPG: function () {
        let event = window.event
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    },
    // 兼容阻止默认事件
    PREVENT: function () {
        let event = window.event
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            event.returnValue = false
        }
    }
}
// eventTool.STOPPG() 阻止冒泡
// eventTool.PREVENT() 阻止默认
```
