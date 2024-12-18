---
title: 电商 app 平台
date: 2019-05-23
sidebar: 'auto'
categories:
 - 项目
tags:
 - vue
 - 项目
publish: true
# 打赏
showSponsor: true
---

## 登陆

### 使用了vant的Field组件

- 用户名  ：前端校验规则---不小于两位
- 密码  ：前端校验规则---不小于六位
- 登录按钮  ：
    1. 当前端校验不通过时，使用vant的轻提示toast组件提示，
    2. 当通过了前端校验，需要使用md5.js库对密码进行加密；
    3. 使用axios请求登录接口，并将账户密码发送给后端，
    4. 后端返回数据，通过后端数据包里的code码在全局api.js文件里在处理，如果code码为0，直接提示用户，账户或密码错误
    5. 如果为1,将返回的数据存入vuex，并使用vue-router导航到首页，
    6. 返回的数据：
        - uid（用户id:每一个接口都需要带上）
        - username(用户名)
        - token值（我们将其放入cookie里 后端会根据token值判断用户是否合法)；cookie会随着http请求发送到服务器
        token里面包括：本次登录时间，当前密码的后三位，设备的ip地址 ，一些混淆的值
        - loginState：（登录状态） 0 失败 1成功
        - shopid ：购物车id值，用来在购物车页面获取数据的
        - shoplen ： 购物车数据的条数
        - dzid：（订单id）用来在订单页面中获取订单数据的
        - dzlen：订单条数
        - head ：头像地址  例如 http：//asdads.png

## 首页

1. 当首页被打开时，在mounted钩子函数中，发起自动请求返回的数据分别传给焦点图组件，产品分类组件，热门产品组件；
2. 首页组成部分

### 焦点图---baner（轮播图）

- 使用vant里的swipe组件，接收一个data数据，使用v-for遍历data数据包，渲染swipe-item；
- 在swipeItem组件上利用to属性，使用data数据的id值拼接成导航地址
- 轮播是一个高复用的组件所以放在了components目录里，首页会用到，产品详情页也用到了

#### 产品分类

- 使用vant-grid开发的，该组件接收父组件传入的data数据，进行遍历，使用该组件上的to属性，拼接动态导航地址
- 当我们带点击分类的时候，会跳转到产品列表的动态路由里，产品列表组件会获取我们传过去的id值
    1. 产品列表页：获取id值，在mounted函数中请求分类的数据，渲染产品列表，并且每个列表项也是to拼接成动态路由导航
    2. 点击产品列表项，会跳到产品详情页，详情页就会拿到这个产品的id值，在mounted请求产品详情数据，最终渲染

#### 热门产品

- 使用vant-grid开发的，接收data数据，使用to属性拼接id值，生成动态路由导航；
- 点击时进入产品详情也，详情页会获取id值，在mounted请求产品详情数据，最终渲染

#### 底部一级导航

- 首页

- 购物车

- 订单

- 用户

## 购物车

使用vant-card + checkbox

### 数据逻辑

1. 进入购物车页面后从vuex的用户数据中获取购物车id值，在 mounted 函数中用接口请求购物车数据
2. 购物车导航上的数量标识是用的vuex 里购物车数据的条数
3. 开发流程
   - 全选按钮将购物车的所有产品全部购买 --- 金额是产品的数量乘以产品的单价;
   - 产品的单选，只购买该产品的金额 --- 数量乘以单价;
   - 全选按钮上，使用click事件来控制购物车产品列表里的复选框;
   - 使用watch监听产品列表数据的 checked ，从而计算出总价钱;
4. 当用户进入购物车钱需路由守卫拦截判断用户是否登录，没有登录去登录，跳到登录页面;
5. 结算：判断总价不为零；发起结算接口，并且传入uid、购物车shopid，产品id 、总价total 、数里count;
6. 结算接口返回成功之后，会返回一个订单编号和总价，我们通过路由跳到支付页面，通过订单编号获取要结算的产品，用户点击支付按钮唤起密码框.

<font color=red>*</font> 开发该页面时遇到的问题：

1. 全选按钮和列表数据都通过 watch 监听，会出现一个bug；这个bug就是当我们全选后，只要取消了一个产品里的复选框，那么所有的产品的复选框都被取消了;
2. 全选按钮不要放在watch监听了，用 click 的方式来触发全选按钮的逻辑;

<font color=red>*</font> 不是我自己独立开发的，大概10天左右

## 订单

### 使用vant-Tab开发

- 包含的内容有
- 搜索
- 全部
- 待付款
- 代发货
- 待收货
- 待评价

#### 订单的数据

1. 从vuex中的用户数据里获取订单变化
2. 在mounted 发起订单数据请求，获取订单列表
3. 分类的展示在tab选项卡里

## 用户

### 组成部分

- 头像 数据来自于登录后接口返回的数据
- 修改用户信息 --> 头像 --> 修改密码 --> 收货地址
- 修改密码：旧密码，手机号验证码
- 切换账户
- 退出登录
