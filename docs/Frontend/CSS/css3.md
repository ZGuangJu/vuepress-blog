---
title: CSS3 核心模块
date: 2018-09-23
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS3
publish: true
---
## CSS3核心模块

**过渡动画**

- `transition`：过渡动画
  - `transition-property`：过渡属性 `all[attr]`
  - `transition-duration`：过渡时间
  - `transition-delay`：延迟时间
  - `transition-timing-function`：运行类型
    - `ease`：（逐渐变慢）默认值
    - `linear`：匀速
    - `ease-in`：加速
    - `ease-out`：减速
    - `cubic-bezier`：贝塞尔曲线

过渡动画效果思考步骤：

1. 找到过渡属性
2. 找到过渡属性起始值和结束值
3. 在合适的位置上增加`transition`属性

**2D变换**

- `transform`：变形属性
  - `rotate()`：旋转函数
    - `deg`：度数
    - `transform-origin`：旋转的基点
  - `skew()`：倾斜函数
    - `skewX()`
    - `skewY()`
  - `scale()`：缩放函数 默认值是1
    - `scaleX()`
    - `scaleY()`
  - `translate()`：位移函数
    - `translateX()`
    - `translateY()`

**animation-声明关键帧**

- 关键帧——`@keyframes`
  - 类似于`flash`
    - 定义动画在每个阶段的样式，即帧动画
  - 关键帧的时间单位
    - 数字：`0%`、`25%`、`100%`等（设置某个时间段内任意时间点的样式）
    - 字符：`from(0%)`、`to(100%)`：
  - 格式
    - `@keyframes`：动画名称
    - `{动画状态}`

**animation-调用动画**

- 必要属性
  - `animation-name`：动画名称（关键帧名称）
  - `animation-duration`：动画执行时间
- 可选属性：
  - `animation-timing-function`
    - `linear`：匀速
    - `ease`：缓冲
    - `ease-in`：由慢到快
    - `ease-out`：由快到慢
    - `ease-in-out`：由慢到快再到慢
    - `ease-bezier(num,num,num,num)`：特定的贝塞尔曲线类型，4个数值需在[0,1]区间内
  - `animation-delay`：动画延迟
  - `animation-iteration-count`：重复次数
  - `animation-direction`：动画运行的方向 `normal|reverse|alternate|alternate-reverse`
  - `animation-play-state`：动画状态 `running|paused`
  - `animation-fill-mode`：动画结束后的状态 `none|forwards|backwards|both`

**3D变换**

- `transform-style: flat|preserve-3d`：3D空间展示
- `perspective`：景深效果
- `transform: persective(800px)`：直接作用在子元素上
- `transform`：新增函数
  - `translate3d(tx, ty, tz)`：`translateX()` `translateY()` `translateZ()`
  - `rotate3d(rx, ry, rz, a)`：`rotateX()` `rotateY()` `rotateZ()`
  - `scale3d(sx, sy, sz)`：`sacleX()` `sacleY()` `sacleZ()`

**圆角 border-radius**

- `border-radius`：1-4个数字/1-4个数字
  - 水平半径/垂直半径
  - 四个数字方向分别是**左上 右上 右下 左下**
  - 没有`/`则水平半径和垂直半径一样
    - `border-radius: 10px/5px;`
    - border-radius: 60px 40px 30px 30px/30px 20px 10px 5px
    - 例子：圆 椭圆 半圆 扇形

**线性渐变 linear-gradient**

- `linear-gradient`：（[<起点>||<角度>,]?<点>,<点>...）
- 只能用在背景上
- 颜色是沿着一条直线轴变化
- 参数
  - 起点：开始渐变方向
  - 角度：开始渐变角度
  - 点：渐变点的颜色和位置
- 重复线性渐变

**径向渐变 radial-gradient**

- `radial-gradient`
- 从“一点”向多个方向颜色渐变
- `shape`形状：`ellipse`、`circle`或设置水平半径，垂直半径
- `size`：渐变的大小，即渐变停止位置：
  - `closet-side`：最左边
  - `farthest-side`：最远边
  - `closet-corner`：最近角
  - `farthest-corner`：最远角（默认值）
- `position`：关键词|数值|百分比
- 重复的径向渐变

**背景**

- `background-origin`
  - `padding-box`：从`padding`区域显示
  - `border-box`：从`border`区域显示
  - `content-box`：从`content`区域显示
- `background-clip`
  - `padding-box`：从`padding`区域向外裁剪
  - `border- box`：从`border`区域向外裁剪
  - `content-box`：从`content`区域向外裁剪
  - `text`：文本裁剪
- `background-size`
  - `100% 100%`：百分比
  - `10px 10px`：数值
  - `contain`：按原始比例收缩，背景图显示完整，但不一定铺满整个容器
  - `cover`：按原比例收缩，背景图可能显示不完整，但铺满整个容器
- `background-attachment`
  - 背景图片是滚动/固定 `fixed`(固定的) 默认是滚动的

**盒子阴影**

- `box-shadow`：h v blur spread color inset;
  - `h`：水平方向偏移
  - `v`：垂直方向偏移
  - `blur`：模糊半径
  - `spread`：扩展半径
  - `color`：颜色
  - `inset`：内阴影，默认是外阴影

**文本阴影**

- `text-shadow：x y blur color`
  - `x`轴偏移 `y`轴偏移 模糊度 颜色
  - 多层阴影制作文字立体效果，设置多种颜色，中间以逗号隔开

- 文字添加边框
  - `text-stroke：2px blue`
    - 通过设定`1px`的透明边框，可以让文字变得平滑
    - 颜色设成透明能够创建镂空字体

**滤镜**

- `-webkit-filter:normal;`：正常
- `-webkit-filter:grayscale(1);`：灰度，取值范围0-1
- `-webkit-filter:brightness(0);`：亮度，取值范围0-1
- `-webkit-filter:invert(1);`：反色，取值范围0-1，0为原图，1为彻底反色
- `-webkit-filter:sepia(0.5);`：叠加褐色，取值范围0-1
- `-webkit-filter:hue-rotate(30deg);`：色相（按照色相环旋转，顺时针方向）（红-橙-黄-黄绿-绿-蓝绿-蓝-蓝紫-紫-紫红-红）此处为叠加黄色滤镜
- `-webkit-filter:saturate(4);`：饱和度，取值范围0-*，0为无饱和度，1为原图，值越高，饱和度越大
- `-webkit-filter:contrast(2);`：对比度，取值范围0-*，0为无对比度（灰色），1为原图，值越高对比度越大
- `-webkit-filter:opacity(0.8);`：透明度，取值范围0-1，0为全透明，1为原图

**遮罩**

- `mask-image`：
- `mask-position`：
- `mask-repeat`：
