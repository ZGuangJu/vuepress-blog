---
title: 小程序 PS
date: 2019-05-02
sidebar: 'auto'
tags:
 - 微信小程序
publish: true
---

## 绑定事件的两种方法

- `bind:tap="事件名"`  会有冒泡事件
- `catch:tap="事件名"` 默认阻止冒泡

## 自定义属性 `data-xxx`

```html
 <view data-postid_list="{{item.postId}}" bindtap="onGoTuDetail">

```

![console.log](https://s1.ax1x.com/2020/10/29/BG83dK.png)

`console.log`打印 `evevt`在结果里

![结果](https://s1.ax1x.com/2020/10/29/BG81Z6.png)

## 全局数据 `globalData`

```js
// App.js
App({
  onLaunch (options) {
    console.log('App onLaunch')
    // Do something initial when launch.
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 1, //设置全局数据
// globalData: {a:1}
})
```

```js
// pages/post/post.js
// 在页面中获取全局数据
    const text =getApp()
    console.log(text.globalData)
    let a =text.globalData
```

## 本地数据增删改查 `Storage`

- 设置数据
  - `wx.setStorage(Object object)`
    - `key`:本地缓存中指定的 `key`;
    - `data`:需要存储的内容。只支持原生类型、`Date`、及能够通过`JSON.stringify`序列化的对象.
  - 同步 `wx.setStorageSync(string key, any data)`
    - `string key`:本地缓存中指定的 `key`;
    - `any data`:需要存储的内容。只支持原生类型、`Date`、及能够通过`JSON.stringify`序列化的对象.

```js
    wx.setStorage({
        key:"key",
        data:"value"
    })
    // 同步版本
    wx.setStorageSync('key', 1)
```

- 修改数据：给相同的`key`再设置一个值

```js
    wx.setStorage({
        key:"key",
        data:1
    })
    wx.setStorage({
        key:"key",
        data:2
    })
    // 同步版本
    wx.setStorageSync('key', 1)
    wx.setStorageSync('key', 2)
```

- 获取数据
  - `wx.getStorage(key,callback)`
    - `key`:本地缓存中指定的 `key`
    - `callback`:接口调用成功的回调函数
  - 同步 `any wx.getStorageSync(string key)`
    - `string key`:本地缓存中指定的 `key`
    - `any data` `:key`对应的内容

```js
    wx.getStorage({
    key: 'key',
    success (res) {
        console.log(res.data)
    }
})
   //同步版本
    wx.getStorageSync('key')
```

- 清除一条数据
  - `wx.removeStorage({key:'key'})`
    - `key`:本地缓存中指定的 `key`
  - 同步 `wx.removeStorageSync( key)`
    - `key`:本地缓存中指定的 `key`

```js
wx.removeStorage({key: 'key'})
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res)
  }
})
// 同步
wx.removeStorageSync('key')
```

- 清除所有数据
  - `wx.clearStorage()`
  - 同步 `wx.clearStorageSync()`

```js
    wx.clearStorage()
    // 同步版本
    wx.clearStorageSync()
```

## 外部样式类

1. 在组件的`js`文件中定义

```js
//components/index.js
Component({
  //1.定义外部样式类
  externalClasses: ['my-class','you-class'],
  // 组件的属性列表
  properties: {
    title:String
  },
})
```

2. 在组件`wxml`文件中给最外层的标签里定义`class = 'my-class you-class'`

```html
<!--components/index.wxml-->
<view class="container my-class you-class" >
    <!-- 组件内容 -->
    <view class="title">
        {{title}}
    </view>
</view>
```

3. 在引用组件的页面里定义`you-class="plana"`、`my-class="planb"`

```html
<!-- pages/index.wxml -->
    <Index you-class="plana" title="123"/>
    <Index my-class="planb" title="abc"/>
<!-- Index为组件名 -->
```

```css
/* pages/index.wxml */
.planb{
  border: solid blue 1rpx;
}
.plana{
  border: solid red 1rpx;
}
```

## 组件自定义属性

1. 在引用组件的页面里定义`title="123"`，`title`属性名，`"123"`属性值

```html
<!-- pages/index.wxml -->
    <Index  title="123"/>
    <Index  title="abc"/>
<!-- Index为组件名 -->
```

2. 在组件的`js`文件中定义`properties`，和属性类型

```js
//components/index.js
Component({
 // 组件的属性列表
  properties: {
    title:String
  },
})
```

3. 在组件`wxml`文件中使用`{{title}}`

```html
<!--components/index.wxml-->
<view class="container my-class you-class" >
    <!-- 组件内容 -->
    <view class="title">
        {{title}}
    </view>
</view>
```

## WXML 标签

::: details
`view`（视图容器）
`rich-text`（富文本）
`swiper`（滑块视图容器）
`icon`（图标）
`text`（文字）
`progress`（进度条）
`button`（按钮）
`form`（表单）
`input`（输入框）
`checkbox`（多项选择器）
`radio`（单项选择器）
`picker`（列表选择器）
`slider`（滚动选择器）
`switch`（开关选择器）
`textarea`（多行输入框）
`label`（标签）
`navigator`（应用链接）
`audio`（音频）
`image`（图片）
`video`（视频）
`camera`（系统相机）
`map`（地图）
`scroll-view`（可滚动视图容器）
`picker-view`（内嵌列表选择器）
`canvas`（画布）
`movable-area`（可移动区域）
`movable-view`（可移动的视图容器）
`cover-view`（覆盖视图）
`cover-image`（覆盖图片）
`functional-page-navigator`（跳转到插件功能页）
`live-player`（实时音视频播放）
`live-pusher`（实时音视频录制）
:::

- 小程序里有自己的一套标签，下面和`html`标签对比：

|                        `html`                         |                             微信小程序                             |
| :---------------------------------------------------: | :----------------------------------------------------------------: |
|                     `<div></div>`                     |                          `<view></view>`                           |
| `<h1></h1>`...`<h6></h6>`、`<p></p>`、`<span></span>` |                          `<text></text>`                           |
|                `<input type="text"/>`                 |                            `<input />`                             |
|              `<input type="checkbox"/>`               |                           `<checkbox />`                           |
|                `<input type="radio"/>`                |                            `<radio />`                             |
|                 `<input type="file">`                 |               `<view bindtap="changeImage"></view>`                |
| `<select><option></option><option></option></select>` | `<picker range="{{area}}"><view>\{{area[index]}\}</view></picker>` |
|                  `<a href="#"></a>`                   |             `<navigator url="#" redirect></navigator>`             |
|                    `<img src="">`                     |                 `<image mode="aspectFill" src="">`                 |
|                `<i class="icon"></i>`                 |                          `<icon></icon>`                           |

\* 双大括号`{{` `}}`不能识别，表中`\`只为禁止解析

- `wxss`选择器

|              html               |                            微信小程序                             |
| :-----------------------------: | :---------------------------------------------------------------: |
|        `div`(标签选择器)        | `view`、`text`、`icon`、`input`、`image`、`navigator`(标签选择器) |
|        `class`(类选择器)        |                              `class`                              |
|        `id`（效率最高）         |                          `id`(效率最高)                           |
| `element`,`element`(层级选择器) |                  `element`,`element`(层级选择器)                  |
|      `:after`(伪类选择器)       |                        `:after` `:before`                         |
|        `:frist-child`等         |          `:frist-child`等(不建议,工具过滤易导致页面错乱)          |
|        `.class` `.class`        |         `.class` `.class`(不建议,工具过滤易导致页面错乱)          |
|           群组选择器            |                            群组选择器                             |
|           后代选择器            |                            后代选择器                             |

小程序支持的选择器在官方公布的文档中包括`.class`、`#id`、`element`、`element,element`、`::after`(注意是双冒号)、`::before`这6种选择器。

经过测试，小程序对于`:first-child`、`:last-child`、`.class-a .class-b{}`，甚至更多层级的嵌套都是支持的。 不过官方并不推荐级联的这种写法，因为考虑到后面切`Native`的扩展可能，会没办法支持级联选择。

所以保险起见，不建议`.class-a .class-b{}`这种级联的写法，以免后期工具过滤导致页面错乱。

```html
<!-- 微信小程序中placeholder的样式和html5是不一样的。需要修改placehoder的样式，通过placeholder-class=”class”来定义。 -->
<em id="__mceDel">
    <input type="text" placeholder="邮箱" placeholder-style="color:#c0c0c0" />
    <input password type="number" placeholder="密码" placeholder-class="placeholder"  />
</em>
<!--小程序里通过placeholder-style和placeholder-class修改样式，不过并不能修改点击时候input的边框颜色-->
```

```css
<!--HTML5通过focus修改placeholder默认和点击时候的样式-->
input::-webkit-input-placeholder {
   /* placeholder颜色  */
   color: #aab2bd;
   /* placeholder字体大小  */
   font-size: 12px;
   /* placeholder位置  */
   text-align: right;
}
input:focus::-webkit-input-placeholder { color: transparent; }
```

`<view></view>`

- 属性
  - `hover-class`
  - `hover-stop-propagation`

相当于`HTML`的`div`标签，小程序里的`view`可以用`hover-class`(相当于`html`伪类`:hover`)

|           属性           |   类型    | 默认值  | 必填  |                               说明                               |
| :----------------------: | :-------: | :-----: | :---: | :--------------------------------------------------------------: |
|      `hover-class`       | `string`  | `none`  |  否   | 指定按下去的样式类。  当 `hover-class="none"` 时，没有点击态效果 |
| `hover-stop-propagation` | `boolean` | `false` |  否   |         指定是否阻止本节点的祖先节点出现点击态(阻止冒泡)         |

`div`和`view`都是盒模型，默认`display:block`。
盒模型在布局过程中，一般推荐`display:flex`的写法，配合`justify-content:center`;`align-items:center`;的定义实现盒模型在横向和纵向的居中。

`<text></text>`

- 属性
  - `user-select`
  - `space`

相当于`<span>`

|     属性      |   类型    | 默认值  | 必填  |                         说明                          |
| :-----------: | :-------: | :-----: | :---: | :---------------------------------------------------: |
| `user-select` | `boolean` | `false` |  否   | 文本是否可选，该属性会使文本节点显示为 `inline-block` |
|    `space`    | `string`  |         |  否   |                     显示连续空格                      | `ensp` 中文字符空格一半大小 |

除了`text`文本节点以外的其他节点都无法长按选中。。
截止到`0.10.102800`的开发者工具`text`支持嵌套`text`，不过有`class`的`text`会被面板过滤，样式不影响。

```html
<text class="text-tips">
    <text class="text-light">* </text>友情提示!
</text>
<!--支持text嵌套text-->
<text>
    <view></view>
</text>
<!--不支持text嵌套其他标签-->
```

`<icon></icon>`

`icon`可以直接用微信组件默认的图标，默认是`iconfont`格式的，从`WeUI`那边沿袭过来的一种做法。
自定义的`icon`推荐`svg` `sprite`格式或者`iconfont`。
目前来看，市面上还没有很好的自动合并单个`svg`为`svg` `sprite`的工具，需要手动拼图。

1. `input`
`input` 的类型，有效值：`text`, `number`, `idcard`, `digit`, `time`, `date` 。
`input`不需要设置`line-height`或`padding`来纵向居中，默认`placeholder`的文字是居中的。
小程序把`checkbox`和`radio`都单独做成了组件，默认的`input`只支持输入文本。
上传文件在小程序里需要调用`chooseImage`事件完成;

```html
<input type="file" class="upload-input" accept="image/*">
<!--HTML5的上传文件-->
<view class=" upload-block" bindtap="chooseImage"></view>
<view class="upload-block" wx:for="{{imageList}}" wx:for-item="image">
  <image src="{{image}}" class="pic" data-src="{{image}}" bindtap="previewImage"></image>
</view>
<!--小程序的上传图片，可以调用app原生的拍照和上传图片接口-->
```

小程序`CSS`里的 `:focus` 不生效，需要修改`placehoder`的样式，通过`placeholder-class=”class”`来定义。

```css
.login .input-group input::-webkit-input-placeholder {
    color: #c0c0c0;
}
.login .input-group input:focus::-webkit-input-placeholder {
    color: transparent;
}
```

```html
<!-- HTML5通过focus修改placeholder默认和点击时候的样式 -->
<input type="text"  placeholder="邮箱" placeholder-style="color:#c0c0c0" />
<input password type="number" placeholder="密码" placeholder-class="placeholder"  />
<!--小程序里通过placeholder-style和placeholder-class修改样式，不过并不能修改点击时候input的边框颜色-->
```

5. `picker`
`picker`默认支持普通、日期和时间三种选择器。
`picker`通过`bindchange`事件来调取`range`中自定义的数据数据，并展示到页面中，调用的是系统原生的`select`。
这里小程序废弃了`select`组件，考虑到的是这个组件的交互不适合移动场景，最终用`picker`代替了。

```html
<select class="select-block">
    <option value="0">选择</option>
    <option value="1">北京</option>
    <option value="2">上海</option>
</select>
<!--HTML5的下拉框-->
<picker bindchange="bindPickerChange" value="{{index}}" range="{{area}}">
   <view class="picker">
      {{area[index]}}
    </view>
</picker>
Page({
  data: {
    area: ['中国', '美国', '巴西', '日本'],
  }
})
<!--js里的area数组-->
<!--picker下拉框-->
```

1. `navigator`
`navigator`支持相对路径和绝对路径的跳转，默认是打开新页面，当前页面打开需要加`redirect`;
`navigator`仅支持5级页面的跳转;
`navigator`不可跳转到小程序外的链接地址;

```js
<navigator class="navigator" redirect  url="../login/index" >登录页</navigator>
```

在小程序开发工具里，默认打开新页面，工具左上角有返回按钮。加上`redirect`，当前页打开，不出现返回按钮。
7. `image`
小程序的`image`与`HTML5`的`img`最大的区别在于：小程序的`image`是按照`background-image`来实现的。
默认`image`的高宽是`320*240`。必须通过样式定义去覆盖这个默认高宽，`auto`在这里不生效。
**(开发者说这样设置的原因是：如果设置 `auto` ，页面布局会因为图片加载的过程有一个闪的现象(例如高度从 `0` 到 `height` )，所以要求一定要设置一个宽度和高度。)**
最新的`api`支持获取图片的高宽。不过这里返回的高宽是px单位，不支持屏幕自适应;
图片包括三种缩放模式`scaleToFill`、`aspectFit`、`aspectFill`和`9`种裁剪模式，三种缩放模式的实现原理对应如下：

```css
scaleToFill{
    background-size:100% 100%;//不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
}
aspectFit{
    background-size:contain;//保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
}
aspectFill{
    background-size:cover;//保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
}
```

1. `button`
额外补充下`button`的实现方式，`button`的边框是用`:after`方式实现的，用户如果在`button`上定义边框会出现两条线，需用`:after`的方式去覆盖默认值。不过这个应该会在最近的开发者工具中修复。

```css
button::after {
content:" ";
width:200%;
height:200%;
border:1px solid rgba(0, 0, 0, 0.2);
}
```

小程序不支持`button:active`这种样式的写法，`button`的点击态通过`.button-hover{}`的样式覆盖，也可修改`hover-class`为自定义的样式名。
9. `css3`动画
最新版的开发工具已经支持`transition`和`keyframes`动画，不用`js`苦哈哈的写动画队列了。
除了官方公布的小程序的组件之外，有一些标签比如，`span`、`em`、`strong`、`b`也是支持的，只是官方并不推荐使用。

## 浏览器内核

- 在`iOS`平台上，微信的浏览器渲染内核是`wkwebview`；

- 而在`Android`平台上，微信则采用了腾讯`QQ`浏览器2016年4月份发布的`X5`内核（`blink`内核）作为渲染引擎。

- 在小程序的开发工具上，小程序的`JavaScript`是运行在`chrome`内核（`nwjs`）中。

[参考](https://zhuanlan.zhihu.com/p/23536784)

## WXSS

- 尺寸单位

`WXSS`支持的单位有`px`、`rem`和`rpx`，其中`rem`和`rpx`可以针对屏幕容器进行适配，px则为固定尺寸。 其中`1rpx=0.5px`，在`WXSS`和`WXML`中定义的`rpx`单位最终会转换为在手机端可以识别的`rem`单位。

建议：开发微信小程序时设计师可以用 `iPhone6` 作为视觉稿的标准。
所以工程师拿到`750`的设计稿，在`PS`中量取的容器大小，可以直接定义为`rpx`，不需要进行`2`倍尺寸的换算。

- 样式引入

```js
import "../../wxss/common.wxss";
```

## 多媒体

- `wx.createInnerAudioContext` (音乐)
- `wx.getBackgroundAudioManager` (背景音乐)
