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
                width: 80%;
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
