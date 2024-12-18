---
title: CSS 水平垂直居中
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

## CSS垂直居中

**1、`ling-height`**

适用场景：单行文字垂直居中，按钮、下拉框、导航栏

将单行文字的行高设定后，文字会位于行高的垂直中间位置。

```html
<div class="content">Long time no see.</div>
```

```css
.content {
    width: 400px;
    background: #ccc;
    line-height: 100px;
    margin: auto;
}
```

**2、`line-height`+`inline-block`**

适用场景：多对象的垂直居中

## 使用`line-height`做垂直居中

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="EMdevR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用line-height做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/EMdevR/">
  使用line-height做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`line-height`+`inline-block`做多行文字的垂直居中

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="oVaNra" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用CSS line-height + inline-block 做多行文字的垂直置中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/oVaNra/">
  使用CSS line-height + inline-block 做多行文字的垂直置中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`:before`+`inline-block`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="mozebx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用line-height+inline-block做多行文字的垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/mozebx/">
  使用line-height+inline-block做多行文字的垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`padding`做垂直居中

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="XGxPpV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用padding做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/XGxPpV/">
  使用padding做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`absolute`+`margin`负值做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="OqBypd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用absolute+margin负值做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/OqBypd/">
  使用absolute+margin负值做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`absolute`+`margin auto`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="NJOGeP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用absolute+margin auto做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/NJOGeP/">
  使用absolute+margin auto做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`absolute`+`translate`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="LagGPJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用absolute+translate做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/LagGPJ/">
  使用absolute+translate做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`relative`+`translateY`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="YgJOWB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用relative+translateY做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/YgJOWB/">
  使用relative+translateY做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`table`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="mozzJE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用table做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/mozzJE/">
  使用table做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`display: table-cell`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="MxPERM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用display: table-cell做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/MxPERM/">
  使用display: table-cell做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`flex`+`align-items`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="eXPZdX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用flex+align-items做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/eXPZdX/">
  使用flex+align-items做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`flex`+`:before`+`flex-grow`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="ZPqOxp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用flex+:before+flex-grow做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/ZPqOxp/">
  使用flex+:before+flex-grow做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`flex`+`margin`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="RdeGdr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用flex+margin做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/RdeGdr/">
  使用flex+margin做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`Flex`+`align-self`做垂直置中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="bZmBWL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用Flex+align-self做垂直置中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/bZmBWL/">
  使用Flex+align-self做垂直置中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`flex`+`align-content`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="oVaewm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用flex+align-content做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/oVaewm/">
  使用flex+align-content做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`grid`+`template`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="NJOvLp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用grid+template做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/NJOvLp/">
  使用grid+template做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`grid`+`align-items`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="KEGvJZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用grid+align-items做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/KEGvJZ/">
  使用grid+align-items做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`grid`+`align-content`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="gEBxVw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用grid+align-content做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/gEBxVw/">
  使用grid+align-content做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`grid`+`align-self`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="VREMYL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用grid+align-self做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/VREMYL/">
  使用grid+align-self做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`grid`+`place-items`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="PLyJmK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用grid+place-items做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/PLyJmK/">
  使用grid+place-items做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`grid`+`place-content`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="RdeLxp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用grid+place-content做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/RdeLxp/">
  使用grid+place-content做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`grid`+`margin`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="oVaGdL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用grid+margin做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/oVaGdL/">
  使用grid+margin做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`calc`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="pYxOJN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用calc做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/pYxOJN/">
  使用calc做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 使用`writing-mode`做垂直居中

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="WmagLj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用writing-mode做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/WmagLj/">
  使用writing-mode做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 左图右文版面，文字做垂直居中

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="zbmMgd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="左图右文版面，文字做垂直居中-1">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/zbmMgd/">
  左图右文版面，文字做垂直居中-1</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="vPVvNb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="左图右文版面，文字做垂直居中-2">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/vPVvNb/">
  左图右文版面，文字做垂直居中-2</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## CSS 水平垂直居中

有一个 `div#wrapper` 元素，高、宽度都未知。它其中有一个宽高都为 `100px` 的 `div#box` 元素，请你完成 `CSS`，使得 `div#box` 在 `div#wrapper` 内水平、垂直方向居中。

**常规答案**

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="whjin" data-slug-hash="aXNJbN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="水平垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/aXNJbN/">
  水平垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**方法一**

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="css,result" data-user="whjin" data-slug-hash="bzpgVr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="水平垂直居中1">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/bzpgVr/">
  水平垂直居中1</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**方法二**

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="css,result" data-user="whjin" data-slug-hash="OdNWMp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="水平垂直居中2">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/OdNWMp/">
  水平垂直居中2</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**方法三**

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="css,result" data-user="whjin" data-slug-hash="gqrgwg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="水平垂直居中3">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/gqrgwg/">
  水平垂直居中3</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### 本页源码例子

[使用的在线编辑器地址](https://codepen.io/pen/)

[其他在线编辑器 w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default)

[其他在线编辑器 notion](https://www.notion.so/)

[其他在线编辑器 animpen](https://animpen.com/pen/d15Dwev8)

[在线编辑代码 codemirror](https://codemirror.net/)

```html
 <!-- 使用`line-height`做垂直居中 -->

<p class="codepen" data-height="300" data-theme-id="0" data-default-tab="result" data-user="whjin" data-slug-hash="EMdevR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="使用line-height做垂直居中">
  <span>See the Pen <a href="https://codepen.io/whjin/pen/EMdevR/">
  使用line-height做垂直居中</a> by whjin (<a href="https://codepen.io/whjin">@whjin</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```
