---
title: JS 事件
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
## js绑定事件的方式有三种

- 直接在 `dom` 元素上进行绑定。
- 用 `on` 绑定。
- 用 `addEventListener`、`attachEvent` 绑定。

1. 直接在 `dom` 元素上进行绑定

```js
<input id="btn1" type="button" onclick="test();" />
```

2. 用 `on` 绑定

兼容性：在`IE，FF，Chrome，Safari，Mozilla，Opera`下都适用。

```js
// onclick绑定
document.body.onclick = () => {
  console.log(111)
}
// 解绑
document.body.onclick = null;
```

但是，同一个 `dom` 元素上，`on` 只能绑定一个同类型事件，后者会覆盖前者，不同类型的事件可以绑定多个。

3. 事件监听 用 `addEventListener`、`attachEvent` 绑定

同一个 `dom` 元素上，用 `addEventListener`、`attachEvent` 可以绑定多个同类型事件。

但是，`addEventListener` 事件执行顺序按照事件绑定的先后顺序执行；`attachEvent` 事件执行顺序则是随机的。

```js
// 绑定
document.body.addEventListener('click', bodyClick, false);
// 解绑
document.body.removeEventListener('click', bodyClick, false);
```

\* 注意：`removeEventListener` 第二个参数要和 `addEventListener` 指向同一个函数才能解绑成功

`addEventListener` 的第三个参数若为 `false`，函数在冒泡阶段执行；若为 `true`，函数在捕获阶段执行。默认为 `false`

```js
<div id="box">
   <div id="child"></div>
</div>
```

```js
box.addEventListener("click", function(){
  console.log("box");
}, false);
child.addEventListener("click", function(){
  console.log("child");
});
// 执行顺序为 child => box
```

```js
box.addEventListener("click", function(){
  console.log("box");
}, true);
child.addEventListener("click", function(){
  console.log("child");
});
// 执行顺序为 box => child
```

- 兼容性
`Chrome` 和 `FireFox` 只支持 `addEventListener`；`IE` 只支持 `attachEvent`（`IE11`开始不支持了）。

所以必须对`2`种方法做兼容处理。原理是先判断 `attachEvent` 是否为真，如果为真则用 `attachEvent` 绑定事件，否则用 `addEventListener` 绑定事件。

可以封装一个函数做兼容性处理：

```js
//dom绑定事件的元素，ev事件名，fn执行函数
function myAddEvent(dom, ev, fn){
  if(dom.attachEvent){
    dom.attachEvent("on"+ev, fn);
  }else {
    dom.addEventListener(ev, fn, false);
  }
}
myAddEvent(d1, "click", ()=>{
  console.log(1111)
});
```

- 另外

以上三种方式绑定的点击事件都可以用下面这条语句触发

```js
document.getElementById("btn").click();
```

## 事件委托

对“事件处理程序过多”问题的解决方案就是事件委托。事件委托利用了事件冒泡，只制定一个事件处理程序，就可以管理某一类型的所有事件。例如click事件一直会冒泡到document层。也就是我们可以只指定onclick事件处理程序，而不必给每个事件分别添加处理程序。
下面我们来看一个阿里巴巴笔试题的例子。

通过原生js实现删除功能
| 序号 | 性别 | 姓名 | 电话号码    | 省份 | 操作 |
| :--- | :--- | :--- | :---------- | :--- | :--- |
| 1    | 张三 | 男   | 13788888888 | 浙江 | 删除 |
| 2    | 李四 | 女   | 13788887777 | 四川 | 删除 |
| 3    | 王二 | 男   | 13788889999 | 广东 | 删除 |

- 样式以及DOM结构

```html
 <style>
   * {
     padding: 0;
     margin: 0;
   }
   .head, li div {
     display: inline-block;
     width: 70px;
     text-align: center;
   }
   li .id, li .sex, .id, .sex {
     width: 15px;
   }
   li .name, .name {
     width: 40px;
   }
   li .tel, .tel {
     width: 90px;
   }
   li .del, .del {
     width: 15px;
   }
   ul {
     list-style: none;
   }
   .user-delete {
     cursor: pointer;
   }
 </style>
</head>
<body>
<div id="J_container">
 <div class="record-head">
   <div class="head id">序号</div><div class="head name">姓名</div><div class="head sex">性别</div><div class="head tel">电话号码</div><div class="head province">省份</div><div class="head">操作</div>
 </div>
   <ul id="J_List">
     <li><div class="id">1</div><div class="name">张三</div><div class="sex">男</div><div class="tel">13788888888</div><div class="province">浙江</div><div class="user-delete">删除</div></li>
     <li><div class="id">2</div><div class="name">李四</div><div class="sex">女</div><div class="tel">13788887777</div><div class="province">四川</div><div class="user-delete">删除</div></li>
     <li><div class="id">3</div><div class="name">王二</div><div class="sex">男</div><div class="tel">13788889999</div><div class="province">广东</div><div class="user-delete">删除</div></li>
   </ul>
 </div>
 </body>
```

**不用事件委托**。而这种方法造成的代价是，性能的大量浪费。如果是成千上万条数据，页面将会严重卡顿，甚至崩溃。

```js
function Contact(){
    this.init();
}
Contact.prototype.init = function(){
 var userdel = document.querySelectorAll('.user-delete');
 for(var i=0;i<lis.length;i++){
  (function(j){
   userdel[j].onclick = function(){
 userdel[j].parentNode.parentNode.removeChild(userdel[j].parentNode);
   }
  })(i);
 }
}
new Contact();
```

**使用事件委托**，只绑定一次事件，大大减少了性能的损耗。也是在需要大量事件处理程序中一种非常好的解决方式。

```js
function Contact(){
    this.init();
}
Contact.prototype.init = function(){
 var lis = document.querySelector('#J_List');
 lis.addEventListener('click', function(e){
  var target = e.target || e.srcElement;
  if (!!target && target.className.toLowerCase()==='user-delete') {    target.parentNode.parentNode.removeChild(target.parentNode);
  }
 })
}
new Contact();
```
