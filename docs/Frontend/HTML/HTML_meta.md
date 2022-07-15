---
title: HTML mate
date: 2020-02-16
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - HTML
 - HTML5
# 打赏
showSponsor: true
publish: true
---
以前没怎么太注意过meta标签的作用，只是简单了解一些常用属性，现在结合个人了解的进行记录与总结:

## 元数据

>首先需要了解一下**元数据(metadata)元素**的概念，用来构建HTML文档的基本结构，以及就如何处理文档向浏览器提供信息和指示，它们本身不是文档内容，但提供了关于后面文档内容的信息。——出自《html5权威指南》

如title、base、meta都是元数据元素。本文主要介绍<meta>。

## <meta>元素

[<meta>](http://www.w3school.com.cn/tags/tag_meta.asp)  元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。--W3school

<meta>元素可以定义文档的各种元数据，提供各种文档信息，通俗点说就是可以理解为提供了关于网站的各种信息。html文档中可以包含多个<meta>元素，每个<meta>元素只能用于一种用途，如果想定义多个文档信息，则需要在head标签中添加多个meta元素。

| 元素          | meta                                                                                                                                  |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| 父元素        | head                                                                                                                                  |
| 属性          | http-equiv、name、content、charset                                                                                                    |
| HTML5中的变化 | 1. charset为HTML5中新增的，用来声明字符编码;2. http-equiv属性在HTML4中有很多值，在HTML5中只有refresh、default-style、content-type可用 |

### <meta>具体用途

<meta>元素出去charset属性外，都是http-equiv属性或name属性结合content来使用

#### 1. 指定名/值对定义元数据

name属性与content属性结合使用, name用来表示元数据的类型，表示当前<meta>标签的具体作用；content属性用来提供值。

```html
<meta name="参数" content="具体描述信息">
```

例如:

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>demo</title>
        <meta name="keywords" content="电商,物流">
        <meta name="author" content="张三">
        <meta name="description" content="网站描述...">
    </head>
    <body>
        <div>welcome</div>
    </body>
</html>
```

| 元数据名称(name的值) | 说明                                                                   |
| :------------------- | :--------------------------------------------------------------------- |
| application name     | 当前页所属Web应用系统的名称                                            |
| keywords             | 描述网站内容的关键词,以逗号隔开，用于SEO搜索                           |
| description          | 当前页的说明                                                           |
| author               | 当前页的作者名                                                         |
| copyright            | 版权信息                                                               |
| renderer             | renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面 |

**renderer**

```html
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式

<meta name="renderer" content="webkit|ie-comp|ie-stand">
```

#### 2. 声明字符编码

charset属性为HTML5新增的属性，用于声明字符编码,以下两种写法效果一样

```html
<meta charset="utf-8"> //HTML5
```

```html
<meta http-equiv="content-Type" content="text/html;charset=utf-8"> //旧的HTML
```

#### 3. 模拟http标头字段

**http-equiv**属性与**content**属性结合使用, **http-equiv**属性为指定所要模拟的标头字段的名称，**content**属性用来提供值。

```html
<meta http-equiv="参数" content="具体的描述">
```

**content-Type** 声明网页字符编码:

```html
<meta http-equiv="content-Type" content="text/html charset=UTF-8">
```

**refresh** 指定一个时间间隔(以秒为单位),在此时间过去之后从服务器重新载入当前页面,也可以另外指定一个页面.

```html
<meta http-equiv="refresh" content="2;URL=http://www.baidu.com">//2秒后在当前页跳转到百度
```

**X-UA-Compatible** 浏览器采取何种版本渲染当前页面

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> //指定IE和Chrome使用最新版本渲染当前页面

```

**expires** 用于设定网页的到期时间，过期后网页必须到服务器上重新传输

```html
<meta http-equiv="expires" content="Sunday 22 July 2016 16:30 GMT">
```

**catch-control** 用于指定所有缓存机制在整个请求/响应链中必须服从的指令

```html
<meta http-equiv="cache-control" content="no-cache">//
```

content有以下值(百度百科):

| content的值                          | 说明                                                                                                                                                                                                   |
| :----------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public                               | 所有内容都将被缓存(客户端和代理服务器都可缓存)                                                                                                                                                         |
| private                              | 内容只缓存到私有缓存中(仅客户端可以缓存，代理服务器不可缓存)                                                                                                                                           |
| no-cache                             | 必须先与服务器确认返回的响应是否被更改，然后才能使用该响应来满足后续对同一个网址的请求。因此，如果存在合适的验证令牌 (ETag)，no-cache 会发起往返通信来验证缓存的响应，如果资源未被更改，可以避免下载。 |
| no-store                             | 所有内容都不会被缓存到缓存或 Internet 临时文件中                                                                                                                                                       |
| must-revalidation/proxy-revalidation | 如果缓存的内容失效，请求必须发送到服务器/代理以进行重新验证                                                                                                                                            |
| max-age=xxx (xxx is numeric)         | 缓存的内容将在 xxx 秒后失效, 这个选项只在HTTP 1.1可用, 并如果和Last-Modified一起使用时, 优先级较高                                                                                                     |

由于能力有限，结合demo总结以上<meta>元素的常用属性及其功能，可能有些纰漏，还望大家多多包含和指正，文章参考了《HTML权威指南》、[W3school](http://www.w3school.com.cn/tags/tag_meta.asp) 及相关博客[HTML meta标签总结与属性的使用介绍](http://www.imooc.com/article/4475)、[常用meta整理](https://segmentfault.com/a/1190000002407912)，在我能力外没有总结的可参考以上博客。后续有时间还会继续学习和更新此文章，希望能对大家有所帮助
