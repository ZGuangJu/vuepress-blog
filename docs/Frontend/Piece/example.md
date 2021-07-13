---
title: 实例/片段
date: 2020-05-15
sidebar: 'auto'
categories:
 - 小知识
tags:
 - 报错总结
publish: true
# 打赏
showSponsor: true
---
## echarts 简单使用和自适应窗口大小

:::details

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            .box {
                width: 100vw;
                height: 100vh;
            }
            #container {
                width: 100%;
                height: 100%;
            }
        </style>
    </head>

    <body>
        <div class="box"><div id="container"></div></div>
    </body>
    <script src="./echarts.js"></script>
    <script>
        //初始化echarts实例
        var myEcharts = echarts.init(document.querySelector("#container"));
        console.log(myEcharts);
        //配置图表（柱形图）的相关数据
        var option = {
            //描述x轴,x轴描述衣物种类
            xAxis: {
                data: ["羊毛衫", "牛仔裤", "阔腿裤", "连衣裙", "羽绒服"],
                boundaryGap: false, //起点为哪 false为原点
                // type: 'category',
            },
            //描述y轴，表示销量
            yAxis: {},
            //title标题，描述柱形图
            title: {
                //标题内容
                text: "10月份销售量统计柱形图",
            },
            // series系列列表
            series: [
                {
                    //图表的类型 bar柱形 pie柄图 line折线图
                    type: "line",
                    //data定义数据
                    data: [20, 32, 10, 25, 45],
                    name: "销量",
                    //点的的颜色
                    itemStyle: {
                        color: "orange",
                    },
                    //附属信息
                    label: {
                        show: true,
                        formatter: [20, 32, 10, 25, 45],
                    },
                    //高亮的样式
                    emphasis: {
                        itemStyle: {
                            color: "red",
                        },
                        label: {
                            show: true,
                            formatter: "高亮的附属信息",
                        },
                    },
                    areaStyle: {}, //折点图变面级图
                    smooth: true, //将直线变为曲线，不加默认直线
                },
            ],
            // legend图例的说明，解释
            legend: {
                data: ["销量"],
            },
            grid: {
                //配置图表的定位
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true, //自适应对齐
            },
            tooltip: {
                type: true, //默认提示展示 不写也没事
                trigger: "axis",
                axisPointer: {
                    //坐标轴指示器配置项
                    type: "cross", //十字准星指示器   'line' 直线指示器
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },
            },
        };
        //使用刚指定的配置项和数据显示图表
        myEcharts.setOption(option);
    </script>
    <script>
        /* echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表 */
        //绘制步骤
        /*
         1.准备一个具备宽高的容器用来盛放图表
         2.初始化一个echarts实例 ->echarts.init(),这个方法需要传dom元素作为参数,dom元素是这个容器
         3.
         */
        // echarts 自适应窗口
        window.onresize = myEcharts.resize;
    </script>
</html>
```

当页面只有一个图表的时候直接用 `window.onresize = myChart.resize` 就可以了

- resize 用来改变图表尺寸，在容器大小发生改变时需要手动调用。

```js
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option={···};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;
```

但是如果一个页面有多个图表的时候就需要用到 addEventListener 了，不然页面上只有一个图表会根据浏览器的变化而自适应。

```js
var myChart = echarts.init(document.getElementById('main'));
var myChartA = echarts.init(document.getElementById('mainA'));
var myChartB = echarts.init(document.getElementById('mainB'));
// 指定图表的配置项和数据
var option={···};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChartA.setOption(option);
myChartB.setOption(option);

window.addEventListener("resize",function (){
    myChart.resize();
    myChartA.resize();
    myChartB.resize();
});
```

或者

```js
window.onresize = function(){
    myChart.resize();
    myChartA.resize();
    myChartB.resize();
```

:::

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

### 封装2 处理js默认事件的代码

```js
//跨浏览器的事件处理程序
//调用时候直接用domEvent.addEvent( , , );直接调用
//使用时候，先用addEvent添加事件，然后在handleFun里面直接写其他函数方法，如getEvent；
//addEventListener和attachEvent---都是dom2级事件处理程序
var domEvent = {
  //element:dom对象，event:待处理的事件，handleFun:处理函数
  //事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等
  addEvent:function(element,event,handleFun){
    //addEventListener----应用于mozilla
    if(element.addEventListener){
      element.addEventListener(event,handleFun,false);
    }//attachEvent----应用于IE
    else if(element.attachEvent){
      element.attachEvent("on"+event,handleFun);
    }//其他的选择dom0级事件处理程序
    else{
      //element.onclick===element["on"+event];
      element["on"+event] = handleFun;
    }
  },
  //事件名称，含“on”，比如“onclick”、“onmouseover”、“onkeydown”等
  removeEvent:function(element,event,handleFun){
    //removeEventListener----应用于mozilla
    if (element.removeEventListener) {
      element.removeEventListener(event,handleFun,false);
    }//detachEvent----应用于IE
    else if (element.detachEvent) {
      element.detachEvent("on"+event,handleFun);
    }//其他的选择dom0级事件处理程序
    else {
      element["on"+event] = null;
    }
  },
  //阻止事件冒泡
  stopPropagation:function(event){
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble = true;//IE阻止事件冒泡，true代表阻止
    }
  },
  //阻止事件默认行为
  preventDefault:function(event){
    if(event.preventDefault){
      event.preventDefault();
    }else{
      event.returnValue = false;//IE阻止事件冒泡，false代表阻止
    }
  },
  //获得事件元素
  //event.target--非IE
  //event.srcElement--IE
  getElement:function(event){
    return event.target || event.srcElement;
  },
  //获得事件
  getEvent:function(event){
    return event? event : window.event;
  },
  //获得事件类型
  getType:function(event){
    return event.type;
  }
};
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

### 自执行函数循环添加事件(鼠标移入移出)

```js
 var documentFragment = document.createDocumentFragment()
        var ul = document.createElement("ul")
        ul.style.cssText = "list-style ：none; padding:0;"
        documentFragment.appendChild(ul)
        var titleArr = ["首页", "视频", "音乐", "我的"]
        for (let i = 0; i < titleArr.length; i++) {
            var li = document.createElement("li")
            li.style.cssText = "display:inline-block;width:100px;height:35px;text-align :center;line-height:35px;background: blue;"
            li.innerHTML = titleArr[i]
            li.onmouseenter = (function (temp) {
                return function () {
                    temp.style.backgroundColor = "red"
                }
            })(li)
            li.onmouseleave = (function (temp) {
                return function () {
                    temp.style.backgroundColor = "blue"
                }
            })(li)
            ul.appendChild(li)
        }
        document.body.appendChild(documentFragment)
```

## 工厂模式应用(选择礼物并发送)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <meta http-equiv="refresh" content="5"> -->
    <title>Document</title>
    <style>
        html,
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        p,
        blockquote,
        pre,
        hr,
        figure,
        table,
        caption,
        th,
        td,
        img,
        form,
        fieldset,
        legend,
        input,
        button,
        textarea,
        menu {
            padding: 0;
            margin: 0;
        }

        .container {
            width: 800px;
            height: 300px;
            border: 1px solid blueviolet;
        }

        .c_giftList {
            width: 100%;
            height: 260px;
        }

        .c_giftMenu {
            width: 100%;
            height: 40px;
            border: 1px solid skyblue;
            line-height: 40px;
            position: relative;
        }

        .c_giftMenu .sendGift {
            width: 100px;
            height: 30px;
            font-style: 22px;
            text-align: center;
            line-height: 30px;
            letter-spacing: 5px;
            position: absolute;
            top: 5px;
            right: 5px;
        }

        .dome1 {
            width: 350px;
            height: 120px;
            border: 3px solid orange;
            display: inline-block;
            margin: 2px;
            text-align: center;
            line-height: 120px
        }

        .c_giftList #selectGift {
            border: 3px solid red;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="c_giftList">
            <!-- 通过后台获取 -->
        </div>
        <div class="c_giftMenu">
            <button class="sendGift">赠送</button>
        </div>
    </div>
    <script>
        var giftListDiv = document.querySelector(".c_giftList");
        var sendGiftBtn = document.querySelector(".sendGift");
        var selectedItem = "";//用户选中的礼物，用来保存类名
        var giftListArr = ["鲜花", "手机", "飞机", "火箭"]
        var giftClass_listArr = ["Flower", "Phone", "Plane", "Huojian"]
        //    选中
        for (let i = 0; i < giftListArr.length; i++) {
            var giftItemDiv = document.createElement("div");
            giftItemDiv.className = giftClass_listArr[i]
            giftItemDiv.innerHTML = giftListArr[i];
            giftItemDiv.classList.add("dome1")
            // 给每个礼物item都添加点击事件，点击时表示选中，再次点击表示取消
            giftItemDiv.onclick = function () {
                var giftListAll = document.querySelectorAll(".c_giftList div")

                for (let j = 0; j < giftListAll.length; j++) {
                    // 如果列表中 不是当前选中的礼物
                    if (giftListAll[j] != this) {
                        // 就清除id
                        giftListAll[j].id = null;
                    }
                }
                // 如果未选中，就选中
                if (this.id == "selectGift") {
                    this.id = null
                    selectedItem = null
                } else {
                    // 如果选中了，取消选中
                    this.id = "selectGift"
                    console.log(this.className.split(" ")[0])
                    selectedItem = this.className.split(" ")[0]
                    // console.log(selectedItem)
                }
            }
            giftListDiv.appendChild(giftItemDiv)

        }
        // 赠送按钮
        sendGiftBtn.onclick = function () {
            // var gift
            // if (selectedItem == "Flower") {
            //     gift = new Flower()
            // } else if (selectedItem == "Phone") {
            //     gift = new Phone()

            // } else if (selectedItem == "Plane") {
            //     gift = new Plane()
            // } else if (selectedItem == "Huojian") {
            //     gift = new Huojian()
            // } else {
            //     alert("选择正确礼物")
            // }

            //🔺🔺🔺 以上方式是普通方式，和下面的方式功能一致，但是，下面的工厂模式可以降低耦合度，可以将公共方法封装 🔺🔺🔺

            // 根据selectdItem 创建相应类型的对象，并执行其send方法
            var gift = giftFactory.createGift(selectedItem)
            gift.send()
        }


        // 创建礼物
        function Gift() { }
        Gift.prototype.send = function () {
            console.log("在页面送出礼物" + this.getGiftName())
        }
        function Flower() {
            var gname = "鲜花"
            this.getGiftName = function () {
                return gname;
            }
        }
        function Phone() {
            var gname = "手机"
            this.getGiftName = function () {
                return gname;
            }
        }
        function Plane() {
            var gname = "飞机"
            this.getGiftName = function () {
                return gname;
            }
        }
        function Huojian() {
            var gname = "火箭"
            this.getGiftName = function () {
                return gname;
            }
        }
        //    建立父子关系
        Flower.prototype = new Gift()
        Phone.prototype = new Gift()
        Plane.prototype = new Gift()
        Huojian.prototype = new Gift()
        // 建立礼物工厂模式
        var giftFactory = {
            createGift: function (selectedItem) {
                var gift;
                switch (selectedItem) {
                    case "Flower":
                        gift = new Flower()
                        break
                    case "Phone":
                        gift = new Phone()
                        break
                    case "Plane":
                        gift = new Plane()
                        break
                    case "Huojian":
                        gift = new Huojian()
                        break
                    default:
                        alert("选择正确的礼物")
                        break
                }
                return gift
            }
        }

    </script>
</body>

</html>
```

## js截取日期的年月日

```js
 function getYearMonth(date) {
                // 将日期以空格隔开，即['2020-06-13', '17:10:09']
                date = (date + "").split(/[ ]+/);
                let result = [];
                let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
                // 用截取出来的年月日进行正则表达式匹配
                reg.exec(date[0]);
                result.push(RegExp.$1); //获取匹配到的第一个子匹配，即‘2020’
                result.push(RegExp.$2);
                result.push(RegExp.$3);
                result.push(RegExp.$4);
                return result;
            }
            console.log(getYearMonth("2020-06-13 17:10:09"));
```

或

```js
 var dateStr = "2017-10-22";// 只能截取这种格式的字符
            var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
            console.log(dateStr.match(reg));
            console.log(RegExp.$1);
            console.log(RegExp.$2);
            console.log(RegExp.$3);
```

## 时间的格式化

```js
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
}
```

调用：

```js
var time1 = new Date().Format("yyyy-MM-dd");

var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss");
```

## 获取当前时 \ 将时间戳转换为时间格式

```js
// 获取当前时间，可以存入数据库（除以1000 是为了存储时空间小，精确到秒即可）
    var timer = parseInt(new Date().getTime() / 1000);
    console.log(timer);
// 将数据库中的时间戳，转换为日期时间格式
    // 方法一
    function getTime(nS) {
        var date = new Date(parseInt(nS) * 1000);
        var year = date.getFullYear();
        var mon =
            date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1;
        // 将月份个位加 0
        var day = date.getDate();
        var hours = date.getHours();
        var minu = date.getMinutes();
        var sec =
            date.getSeconds().toString().length < 2
                ? "0" + date.getSeconds()
                : date.getSeconds();
        // 秒数 个位加 0

        return (
            year +
            "/" +
            mon +
            "/" +
            day +
            " " +
            hours +
            ":" +
            minu +
            ":" +
            sec
        );
    }
    console.log(getTime(timer));
    // 方法二
    function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + "-";
        var M =
            (date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
        var D = date.getDate() + " ";
        var h = date.getHours() + ":";
        var m = date.getMinutes() + ":";
        var s =
            date.getSeconds().toString().length < 2
                ? "0" + date.getSeconds()
                : date.getSeconds();
        console.log(s);
        return Y + M + D + h + m + s;
    }
    console.log(timestampToTime(timer));
```

## 用原生js给DOM元素添加一个类名

方法一：给DOM元素添加类名会覆盖原有的类名

`DOM.setAttribute("class","类名")`

方法二：可以给DOM元素添加一个类名后 还可以在继续给DOM元素添加新的类名 并且不会覆盖已有的类名

```js
//1.为 <div> 元素添加一个类:
document.getElementById("div").classList.add("类名");
//2.为 <div> 元素添加多个类:
document.getElementById("div").classList.add("类名1","类名2","类名3",...);
//3.为 <div> 元素移除一个类:
document.getElementById("div").classList.remove("类名");
//4.为 <div> 元素移除多个类:
document.getElementById("div").classList.remove("类名1","类名2","类名3",...);
```

## 透明遮罩(兼容IE8+)

请用原生js实现一个函数,给页面制定的任意一个元素添加一个透明遮罩(透明度可变,默认0.2),使这个区域点击无效,要求兼容IE8+及各主流浏览器,遮罩层效果如下图所示

:::details

```js
<style>
#target {
    width: 200px;
    height: 300px;
    margin: 40px;
    background-color: tomato;
}
</style>

<div id="target"></div>

<script>
function addMask(elem, opacity) {
    opacity = opacity || 0.2;

    var rect = elem.getBoundingClientRect();
    var style = getComputedStyle(elem, null);

    var mask = document.createElement('div');
    mask.style.position = 'absolute';
    var marginLeft = parseFloat(style.marginLeft);
    mask.style.left = (elem.offsetLeft - marginLeft) + 'px';
    var marginTop = parseFloat(style.marginTop);
    mask.style.top = (elem.offsetTop - marginTop) + 'px';
    mask.style.zIndex = 9999;
    mask.style.opacity = '' + opacity;
    mask.style.backgroundColor = '#000';

    mask.style.width = (parseFloat(style.marginLeft) +
        parseFloat(style.marginRight) + rect.width) + 'px';
    mask.style.height = (parseFloat(style.marginTop) +
        parseFloat(style.marginBottom) + rect.height) + 'px';

    elem.parentNode.appendChild(mask);
}

var target = document.getElementById('target');
addMask(target);

target.addEventListener('click', function () {
    console.log('click');
}, false);
</script>
```

:::

## 今天是星期x

请用代码写出(今天是星期x)其中x表示当天是星期几,如果当天是星期一,输出应该是"今天是星期一"

```js
var days = ['日','一','二','三','四','五','六'];
var date = new Date();

console.log('今天是星期' + days[date.getDay()]);
```

## 下面这段代码想要循环延时输出结果0 1 2 3 4,请问输出结果是否正确,如果不正确,请说明为什么,并修改循环内的代码使其输出正确结果

```js
for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i + ' ');
  }, 100);
}
```

不能输出正确结果，因为循环中`setTimeout`接受的参数函数通过闭包访问变量i。`javascript`运行环境为单线程，`setTimeout`注册的函数需要等待线程空闲才能执行，此时`for`循环已经结束，`i`值为`5`.五个定时输出都是`5`
修改方法：将`setTimeout`放在函数立即调用表达式中，将i值作为参数传递给包裹函数，创建新闭包

```js
for (var i = 0; i < 5; ++i) {
  (function (i) {
    setTimeout(function () {
      console.log(i + ' ');
    }, 100);
  }(i));
}
```

## 为每个postXXX方法增加拦截验证功能

现有一个Page类,其原型对象上有许多以post开头的方法(如postMsg);另有一拦截函数chekc,只返回ture或false.请设计一个函数,该函数应批量改造原Page的postXXX方法,在保留其原有功能的同时,为每个postXXX方法增加拦截验证功能,当chekc返回true时继续执行原postXXX方法,返回false时不再执行原postXXX方法

```js
function Page() {}

Page.prototype = {
  constructor: Page,

  postA: function (a) {
    console.log('a:' + a);
  },
  postB: function (b) {
    console.log('b:' + b);
  },
  postC: function (c) {
    console.log('c:' + c);
  },
  check: function () {
    return Math.random() > 0.5;
  }
}

function checkfy(obj) {
  for (var key in obj) {
    if (key.indexOf('post') === 0 && typeof obj[key] === 'function') {
      (function (key) {
        var fn = obj[key];
        obj[key] = function () {
          if (obj.check()) {
            fn.apply(obj, arguments);
          }
        };
      }(key));
    }
  }
} // end checkfy()

checkfy(Page.prototype);

var obj = new Page();

obj.postA('checkfy');
obj.postB('checkfy');
obj.postC('checkfy');
```

## 编写javascript深度克隆函数deepClone

:::details

```js
    function deepClone(obj) {
        var _toString = Object.prototype.toString;

        // null, undefined, non-object, function
        if (!obj || typeof obj !== 'object') {
            return obj;
        }

        // DOM Node
        if (obj.nodeType && 'cloneNode' in obj) {
            return obj.cloneNode(true);
        }

        // Date
        if (_toString.call(obj) === '[object Date]') {
            return new Date(obj.getTime());
        }

        // RegExp
        if (_toString.call(obj) === '[object RegExp]') {
            var flags = [];
            if (obj.global) { flags.push('g'); }
            if (obj.multiline) { flags.push('m'); }
            if (obj.ignoreCase) { flags.push('i'); }

            return new RegExp(obj.source, flags.join(''));
        }

        var result = Array.isArray(obj) ? [] :
            obj.constructor ? new obj.constructor() : {};

        for (var key in obj ) {
            result[key] = deepClone(obj[key]);
        }

        return result;
    }

    function A() {
        this.a = a;
    }

    var a = {
        name: 'qiu',
        birth: new Date(),
        pattern: /qiu/gim,
        container: document.body,
        hobbys: ['book', new Date(), /aaa/gim, 111]
    };

    var c = new A();
    var b = deepClone(c);
    console.log(c.a === b.a);
    console.log(c, b);
```

:::

## 补充代码,鼠标单击Button1后将Button1移动到Button2的后面

:::details

```html
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>TEst</title>
    </head>
    <body>

    <div>
       <input type="button" id ="button1" value="1" />
       <input type="button" id ="button2" value="2" />
    </div>

    <script type="text/javascript">
        var btn1 = document.getElementById('button1');
        var btn2 = document.getElementById('button2');

        addListener(btn1, 'click', function (event) {
            btn1.parentNode.insertBefore(btn2, btn1);
        });

        function addListener(elem, type, handler) {
            if (elem.addEventListener) {
                elem.addEventListener(type, handler, false);
                return handler;
            } else if (elem.attachEvent) {
                function wrapper() {
                    var event = window.event;
                    event.target = event.srcElement;
                    handler.call(elem, event);
                }
                elem.attachEvent('on' + type, wrapper);
                return wrapper;
            }
        }

    </script>
    </body>
    </html>
```

:::

## 实时动态显示"××年还剩××天××时××分××秒"

网页中实现一个计算当年还剩多少时间的倒数计时程序,要求网页上实时动态显示"××年还剩××天××时××分××秒"

:::details

```html
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>TEst</title>
    </head>
    <body>

        <span id="target"></span>


    <script type="text/javascript">
        // 为了简化。每月默认30天
        function getTimeString() {
            var start = new Date();
            var end = new Date(start.getFullYear() + 1, 0, 1);
            var elapse = Math.floor((end - start) / 1000);

            var seconds = elapse % 60 ;
            var minutes = Math.floor(elapse / 60) % 60;
            var hours = Math.floor(elapse / (60 * 60)) % 24;
            var days = Math.floor(elapse / (60 * 60 * 24)) % 30;
            var months = Math.floor(elapse / (60 * 60 * 24 * 30)) % 12;
            var years = Math.floor(elapse / (60 * 60 * 24 * 30 * 12));

            return start.getFullYear() + '年还剩' + years + '年' + months + '月' + days + '日'
                + hours + '小时' + minutes + '分' + seconds + '秒';
        }

        function domText(elem, text) {
            if (text == undefined) {

                if (elem.textContent) {
                    return elem.textContent;
                } else if (elem.innerText) {
                    return elem.innerText;
                }
            } else {
                if (elem.textContent) {
                    elem.textContent = text;
                } else if (elem.innerText) {
                    elem.innerText = text;
                } else {
                    elem.innerHTML = text;
                }
            }
        }

        var target = document.getElementById('target');

        setInterval(function () {
            domText(target, getTimeString());
        }, 1000)
    </script>

    </body>
    </html>
```

:::

## 扁平化数组

:::details
完成一个函数,接受数组作为参数,数组元素为整数或者数组,数组元素包含整数或数组,函数返回扁平化后的数组

如：[1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]

```js
    var data =  [1, [2, [ [3, 4], 5], 6]];

    function flat(data, result) {
        var i, d, len;
        for (i = 0, len = data.length; i < len; ++i) {
            d = data[i];
            if (typeof d === 'number') {
                result.push(d);
            } else {
                flat(d, result);
            }
        }
    }

    var result = [];
    flat(data, result);

    console.log(result);
```

:::

## 请评价以下事件监听器代码并给出改进意见

:::details

```js
if (window.addEventListener) {
  var addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
  };
}
else if (document.all) {
  addListener = function (el, type, listener) {
    el.attachEvent('on' + type, function () {
      listener.apply(el);
    });
  };
}
```

作用：浏览器功能检测实现跨浏览器DOM事件绑定

优点：

1. 测试代码只运行一次，根据浏览器确定绑定方法
2. 通过``listener.apply(el)``解决IE下监听器this与标准不一致的地方
3. 在浏览器不支持的情况下提供简单的功能，在标准浏览器中提供捕获功能

缺点：

1. document.all作为IE检测不可靠，应该使用if(el.attachEvent)
2. addListener在不同浏览器下API不一样
3. ``listener.apply``使this与标准一致但监听器无法移除
4. 未解决IE下listener参数event。 target问题

改进:

```js
var addListener;

if (window.addEventListener) {
  addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
    return listener;
  };
}
else if (window.attachEvent) {
  addListener = function (el, type, listener) {
    // 标准化this，event，target
    var wrapper = function () {
      var event = window.event;
      event.target = event.srcElement;
      listener.call(el, event);
    };

    el.attachEvent('on' + type, wrapper);
    return wrapper;
    // 返回wrapper。调用者可以保存，以后remove
  };
}
```

:::

## 编写一个函数接受url中query string为参数

编写一个函数接受url中query string为参数,返回解析后的Object,query string使用application/x-www-form-urlencoded编码

:::details

```js
/**
 * 解析query string转换为对象，一个key有多个值时生成数组
 *
 * @param {String} query 需要解析的query字符串，开头可以是?，
 * 按照application/x-www-form-urlencoded编码
 * @return {Object} 参数解析后的对象
 */
function parseQuery(query) {
    var result = {};

    // 如果不是字符串返回空对象
    if (typeof query !== 'string') {
        return result;
    }

    // 去掉字符串开头可能带的?
    if (query.charAt(0) === '?') {
        query = query.substring(1);
    }

    var pairs = query.split('&');
    var pair;
    var key, value;
    var i, len;

    for (i = 0, len = pairs.length; i < len; ++i) {
        pair = pairs[i].split('=');
        // application/x-www-form-urlencoded编码会将' '转换为+
        key = decodeURIComponent(pair[0]).replace(/\+/g, ' ');
        value = decodeURIComponent(pair[1]).replace(/\+/g, ' ');

        // 如果是新key，直接添加
        if (!(key in result)) {
            result[key] = value;
        }
        // 如果key已经出现一次以上，直接向数组添加value
        else if (isArray(result[key])) {
            result[key].push(value);
        }
        // key第二次出现，将结果改为数组
        else {
            var arr = [result[key]];
            arr.push(value);
            result[key] = arr;
        } // end if-else
    } // end for

    return result;
}

function isArray(arg) {
    if (arg && typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}
/**
console.log(parseQuery('sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8'));
 */
```

:::

## 解析一个完整的url,返回Object包含域与window.location相同

:::details

```js
/**
 * 解析一个url并生成window.location对象中包含的域
 * location:
 * {
 *      href: '包含完整的url',
 *      origin: '包含协议到pathname之前的内容',
 *      protocol: 'url使用的协议，包含末尾的:',
 *      username: '用户名', // 暂时不支持
 *      password: '密码',  // 暂时不支持
 *      host: '完整主机名，包含:和端口',
 *      hostname: '主机名，不包含端口'
 *      port: '端口号',
 *      pathname: '服务器上访问资源的路径/开头',
 *      search: 'query string，?开头',
 *      hash: '#开头的fragment identifier'
 * }
 *
 * @param {string} url 需要解析的url
 * @return {Object} 包含url信息的对象
 */
function parseUrl(url) {
    var result = {};
    var keys = ['href', 'origin', 'protocol', 'host',
                'hostname', 'port', 'pathname', 'search', 'hash'];
    var i, len;
    var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;

    var match = regexp.exec(url);

    if (match) {
        for (i = keys.length - 1; i >= 0; --i) {
            result[keys[i]] = match[i] ? match[i] : '';
        }
    }

    return result;
}
```

:::

## 完成函数getViewportSize返回指定窗口的视口尺寸

:::details

```js
/**
* 查询指定窗口的视口尺寸，如果不指定窗口，查询当前窗口尺寸
**/
function getViewportSize(w) {
    w = w || window;

    // IE9及标准浏览器中可使用此标准方法
    if ('innerHeight' in w) {
        return {
            width: w.innerWidth,
            height: w.innerHeight
        };
    }

    var d = w.document;
    // IE 8及以下浏览器在标准模式下
    if (document.compatMode === 'CSS1Compat') {
        return {
            width: d.documentElement.clientWidth,
            height: d.documentElement.clientHeight
        };
    }

    // IE8及以下浏览器在怪癖模式下
    return {
        width: d.body.clientWidth,
        height: d.body.clientHeight
    };
}
```

:::

## 完成函数getScrollOffset返回窗口滚动条偏移量

:::details

```js
    /**
     * 获取指定window中滚动条的偏移量，如未指定则获取当前window
     * 滚动条偏移量
     *
     * @param {window} w 需要获取滚动条偏移量的窗口
     * @return {Object} obj.x为水平滚动条偏移量,obj.y为竖直滚动条偏移量
     */
    function getScrollOffset(w) {
        w =  w || window;
        // 如果是标准浏览器
        if (w.pageXOffset != null) {
            return {
                x: w.pageXOffset,
                y: w.pageYOffset
            };
        }

        // 老版本IE，根据兼容性不同访问不同元素
        var d = w.document;
        if (d.compatMode === 'CSS1Compat') {
            return {
                x: d.documentElement.scrollLeft,
                y: d.documentElement.scrollTop
            }
        }

        return {
            x: d.body.scrollLeft,
            y: d.body.scrollTop
        };
    }

```

:::

## 现有一个字符串richText,是一段富文本

现有一个字符串richText,是一段富文本,需要显示在页面上.有个要求,需要给其中只包含一个img元素的p标签增加一个叫pic的class.请编写代码实现.可以使用jQuery或KISSY

:::details

```js
    function richText(text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        var p = div.getElementsByTagName('p');
        var i, len;

        for (i = 0, len = p.length; i < len; ++i) {
            if (p[i].getElementsByTagName('img').length === 1) {
                p[i].classList.add('pic');
            }
        }

        return div.innerHTML;
    }
```

:::

## 请实现一个Event类,继承自此类的对象都会拥有两个方法on,off,once和trigger

:::details

```js
    function Event() {
        if (!(this instanceof Event)) {
            return new Event();
        }
        this._callbacks = {};
    }
    Event.prototype.on = function (type, handler) {
        this_callbacks = this._callbacks || {};
        this._callbacks[type] = this.callbacks[type] || [];
        this._callbacks[type].push(handler);

        return this;
    };

    Event.prototype.off = function (type, handler) {
        var list = this._callbacks[type];

        if (list) {
            for (var i = list.length; i >= 0; --i) {
                if (list[i] === handler) {
                    list.splice(i, 1);
                }
            }
        }

        return this;
    };

    Event.prototype.trigger = function (type, data) {
        var list = this._callbacks[type];

        if (list) {
            for (var i = 0, len = list.length; i < len; ++i) {
                list[i].call(this, data);
            }
        }
    };

    Event.prototype.once = function (type, handler) {
        var self = this;

        function wrapper() {
            handler.apply(self, arguments);
            self.off(type, wrapper);
        }
        this.on(type, wrapper);
        return this;
    };
```

:::

## 编写一个函数将列表子元素顺序反转

:::details

```js
<ul id="target">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>

<script>
    var target = document.getElementById('target');
    var i;
    var frag = document.createDocumentFragment();

    for (i = target.children.length - 1; i &gt;= 0; --i) {
        frag.appendChild(target.children[i]);
    }
    target.appendChild(frag);
</script>
```

:::

## 编写一个函数实现form的序列化(即将一个表单中的键值序列化为可提交的字符串)

:::details

```html
    <form id="target">
        <select name="age">
            <option value="aaa">aaa</option>
            <option value="bbb" selected>bbb</option>
        </select>
        <select name="friends" multiple>
            <option value="qiu" selected>qiu</option>
            <option value="de">de</option>
            <option value="qing" selected>qing</option>
        </select>
        <input name="name" value="qiudeqing">
        <input type="password" name="password" value="11111">
        <input type="hidden" name="salery" value="3333">
        <textarea name="description">description</textarea>
        <input type="checkbox" name="hobby" checked value="football">Football
        <input type="checkbox" name="hobby" value="basketball">Basketball
        <input type="radio" name="sex" checked value="Female">Female
        <input type="radio" name="sex" value="Male">Male
    </form>


    <script>

    /**
     * 将一个表单元素序列化为可提交的字符串
     *
     * @param {FormElement} form 需要序列化的表单元素
     * @return {string} 表单序列化后的字符串
     */
    function serializeForm(form) {
      if (!form || form.nodeName.toUpperCase() !== 'FORM') {
        return;
      }

      var result = [];

      var i, len;
      var field, fieldName, fieldType;

      for (i = 0, len = form.length; i < len; ++i) {
        field = form.elements[i];
        fieldName = field.name;
        fieldType = field.type;

        if (field.disabled || !fieldName) {
          continue;
        } // enf if

        switch (fieldType) {
          case 'text':
          case 'password':
          case 'hidden':
          case 'textarea':
            result.push(encodeURIComponent(fieldName) + '=' +
                encodeURIComponent(field.value));
            break;

          case 'radio':
          case 'checkbox':
            if (field.checked) {
              result.push(encodeURIComponent(fieldName) + '=' +
                encodeURIComponent(field.value));
            }
            break;

          case 'select-one':
          case 'select-multiple':
            for (var j = 0, jLen = field.options.length; j < jLen; ++j) {
              if (field.options[j].selected) {
                result.push(encodeURIComponent(fieldName) + '=' +
                  encodeURIComponent(field.options[j].value || field.options[j].text));
              }
            } // end for
            break;

          case 'file':
          case 'submit':
            break; // 是否处理？

          default:
            break;
        } // end switch
      } // end for

        return result.join('&');
    }

    var form = document.getElementById('target');
    console.log(serializeForm(form));
    </script>
```

:::

## 使用原生javascript给下面列表中的li节点绑定点击事件,点击时创建一个Object对象,兼容IE和标准浏览器

:::details

```js
<ul id="nav">
    <li><a href="http://11111">111</a></li>
    <li><a href="http://2222">222</a></li>
    <li><a href="http://333">333</a></li>
    <li><a href="http://444">444</a></li>
</ul>

Object:
{
    "index": 1,
    "name": "111",
    "link": "http://1111"
}
```

script:

```js
var EventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 返回注册成功的监听器，IE中需要使用返回值来移除监听器
    on: function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
            return handler;
        } else if (elem.attachEvent) {
            function wrapper(event) {
                return handler.call(elem, event);
            };
            elem.attachEvent('on' + type, wrapper);
            return wrapper;
        }
    },
    off: function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, handler);
        }
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else if ('returnValue' in event) {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else if ('cancelBubble' in event) {
            event.cancelBubble = true;
        }
    }
};
var DOMUtil = {
    text: function (elem) {
        if ('textContent' in elem) {
            return elem.textContent;
        } else if ('innerText' in elem) {
            return elem.innerText;
        }
    },
    prop: function (elem, propName) {
        return elem.getAttribute(propName);
    }
};

var nav = document.getElementById('nav');

EventUtil.on(nav, 'click', function (event) {
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    var children = this.children;
    var i, len;
    var anchor;
    var obj = {};

    for (i = 0, len = children.length; i < len; ++i) {
        if (children[i] === target) {
            obj.index = i + 1;
            anchor = target.getElementsByTagName('a')[0];
            obj.name = DOMUtil.text(anchor);
            obj.link = DOMUtil.prop(anchor, 'href');
        }
    }

    alert('index: ' + obj.index + ' name: ' + obj.name +
        ' link: ' + obj.link);
});
```

:::

## 数组去重

有一个大数组,var a = ['1', '2', '3', ...];a的长度是100,内容填充随机整数的字符串.请先构造此数组a,然后设计一个算法将其内容去重

:::details

```js
    /**
    * 数组去重
    **/
    function normalize(arr) {
        if (arr && Array.isArray(arr)) {
            var i, len, map = {};
            for (i = arr.length; i >= 0; --i) {
                if (arr[i] in map) {
                    arr.splice(i, 1);
                } else {
                    map[arr[i]] = true;
                }
            }
        }
        return arr;
    }

    /**
    * 用100个随机整数对应的字符串填充数组。
    **/
    function fillArray(arr, start, end) {
        start = start == undefined ? 1 : start;
        end = end == undefined ?  100 : end;

        if (end <= start) {
            end = start + 100;
        }

        var width = end - start;
        var i;
        for (i = 100; i >= 1; --i) {
            arr.push('' + (Math.floor(Math.random() * width) + start));
        }
        return arr;
    }

    var input = [];
    fillArray(input, 1, 100);
    input.sort(function (a, b) {
        return a - b;
    });
    console.log(input);

    normalize(input);
    console.log(input);
```

:::
