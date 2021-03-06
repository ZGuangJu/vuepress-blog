---
title: 面试题
date: 2020-09-20
sidebar: 'auto'
categories:
 - 小知识
tags:
 - 面试题
publish: true
# 打赏
showSponsor: true
---

[2021年面试题](https://www.php.cn/js-tutorial-457006.html)

[12个vue高频原理面试题](https://www.php.cn/js-tutorial-455048.html)

[29道vue高频面试题](https://www.php.cn/js-tutorial-457074.html)

<!-- [[toc]] -->

- [HTML， HTTP，web综合问题](#html-httpweb综合问题)
  - [常见排序算法的时间复杂度,空间复杂度](#常见排序算法的时间复杂度空间复杂度)
  - [前端需要注意哪些SEO](#前端需要注意哪些seo)
  - [web开发中会话跟踪的方法有哪些](#web开发中会话跟踪的方法有哪些)
  - [`<img>`的`title`和`alt`有什么区别](#img的title和alt有什么区别)
  - [doctype是什么,举例常见doctype及特点](#doctype是什么举例常见doctype及特点)
  - [HTML全局属性(global attribute)有哪些](#html全局属性global-attribute有哪些)
  - [什么是web语义化,有什么好处](#什么是web语义化有什么好处)
  - [HTTP method](#http-method)
  - [从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)](#从浏览器地址栏输入url到显示页面的步骤以http为例)
  - [HTTP request报文结构是怎样的](#http-request报文结构是怎样的)
  - [HTTP response报文结构是怎样的](#http-response报文结构是怎样的)
  - [如何进行网站性能优化](#如何进行网站性能优化)
  - [什么是渐进增强](#什么是渐进增强)
  - [HTTP状态码及其含义](#http状态码及其含义)
- [CSS](#css)
  - [CSS选择器有哪些](#css选择器有哪些)
  - [css sprite是什么,有什么优缺点](#css-sprite是什么有什么优缺点)
  - [`display: none;`与`visibility: hidden;`的区别](#display-none与visibility-hidden的区别)
  - [css hack原理及常用hack](#css-hack原理及常用hack)
  - [specified value,computed value,used value计算方法](#specified-valuecomputed-valueused-value计算方法)
  - [清除浮动的方法（最常用的4种）](#清除浮动的方法最常用的4种)
  - [`link`与`@import`的区别](#link与import的区别)
  - [``display: block;``和``display: inline;``的区别](#display-block和display-inline的区别)
  - [PNG,GIF,JPG的区别及如何选](#pnggifjpg的区别及如何选)
  - [CSS有哪些继承属性](#css有哪些继承属性)
  - [IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决](#ie6浏览器有哪些常见的bug缺陷或者与标准不一致的地方如何解决)
  - [容器包含若干浮动元素时如何清理(包含)浮动](#容器包含若干浮动元素时如何清理包含浮动)
  - [什么是FOUC?如何避免](#什么是fouc如何避免)
  - [如何创建块级格式化上下文(block formatting context),BFC有什么用](#如何创建块级格式化上下文block-formatting-contextbfc有什么用)
  - [display,float,position的关系](#displayfloatposition的关系)
  - [外边距折叠(collapsing margins)](#外边距折叠collapsing-margins)
  - [如何确定一个元素的包含块(containing block)](#如何确定一个元素的包含块containing-block)
  - [stacking context,布局规则](#stacking-context布局规则)
  - [如何水平居中一个元素](#如何水平居中一个元素)
  - [如何竖直居中一个元素](#如何竖直居中一个元素)
- [JS](#js)
  - [什么是行内块级元素？行元素，块元素 举例](#什么是行内块级元素行元素块元素-举例)
  - [DOM元素e的e.getAttribute(propName)和e.propName有什么区别和联系](#dom元素e的egetattributepropname和epropname有什么区别和联系)
  - [offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别](#offsetwidthoffsetheightclientwidthclientheight与scrollwidthscrollheight的区别)
  - [XMLHttpRequest通用属性和方法](#xmlhttprequest通用属性和方法)
  - [focus/blur与focusin/focusout的区别与联系](#focusblur与focusinfocusout的区别与联系)
  - [mouseover/mouseout与mouseenter/mouseleave的区别与联系](#mouseovermouseout与mouseentermouseleave的区别与联系)
  - [sessionStorage,localStorage,cookie区别](#sessionstoragelocalstoragecookie区别)
  - [javascript跨域通信](#javascript跨域通信)
  - [javascript有哪几种数据类型](#javascript有哪几种数据类型)
  - [javascript有哪几种方法定义函数](#javascript有哪几种方法定义函数)
  - [应用程序存储和离线web应用](#应用程序存储和离线web应用)
  - [客户端存储localStorage和sessionStorage](#客户端存储localstorage和sessionstorage)
  - [cookie及其操作](#cookie及其操作)
  - [===运算符判断相等的流程是怎样的](#运算符判断相等的流程是怎样的)
  - [==运算符判断相等的流程是怎样的](#运算符判断相等的流程是怎样的-1)
  - [对象到字符串的转换步骤](#对象到字符串的转换步骤)
  - [对象到数字的转换步骤](#对象到数字的转换步骤)
  - [<,>,<=,>=的比较规则](#的比较规则)
  - [+运算符工作流程](#运算符工作流程)
  - [函数内部arguments变量有哪些特性,有哪些属性,如何将它转换为数组](#函数内部arguments变量有哪些特性有哪些属性如何将它转换为数组)
  - [DOM事件模型是如何的,编写一个EventUtil工具类实现事件管理兼容](#dom事件模型是如何的编写一个eventutil工具类实现事件管理兼容)
  - [评价一下三种方法实现继承的优缺点,并改进](#评价一下三种方法实现继承的优缺点并改进)
  - [如何判断一个对象是否为数组](#如何判断一个对象是否为数组)
  - [如何判断一个对象是否为函数](#如何判断一个对象是否为函数)
  - [以下函数的作用是?空白区域应该填写什么](#以下函数的作用是空白区域应该填写什么)
  - [BOM和DOM](#bom和dom)
  - [作用域](#作用域)
  - [闭包](#闭包)
  - [内存泄漏有哪些](#内存泄漏有哪些)
  - [深浅拷贝](#深浅拷贝)
  - [对象、原型、原型链和继承](#对象原型原型链和继承)
  - [节流（throttle）](#节流throttle)
  - [防抖（debounce）](#防抖debounce)
  - [浏览器的运行机制：layout：布局](#浏览器的运行机制layout布局)
  - [重绘（repaint或redraw）](#重绘repaint或redraw)
  - [重排（重构/回流/reflow）](#重排重构回流reflow)
  - [重绘和重排的区别](#重绘和重排的区别)
  - [变量声明 var 和 let const (es6)](#变量声明-var-和-let-const-es6)
  - [var let const 异同](#var-let-const-异同)
  - [new和this](#new和this)
  - [apply、call、bind](#applycallbind)
  - [暂时性死区](#暂时性死区)
  - [ajax步骤](#ajax步骤)
  - [ajax 的优缺点](#ajax-的优缺点)
  - [jsonp 跨域，其他方式](#jsonp-跨域其他方式)
  - [数据类型](#数据类型)
  - [数据类型方法 -- 增删查改，同类方法对比](#数据类型方法----增删查改同类方法对比)
  - [reduce计算 数组，数组里是对象时](#reduce计算-数组数组里是对象时)
  - [find() findIndex()](#find-findindex)
  - [Event Loop](#event-loop)
  - [浏览器页面渲染过程](#浏览器页面渲染过程)
  - [浏览器缓存/本地存储](#浏览器缓存本地存储)
  - [map类型和set类型 es6](#map类型和set类型-es6)
  - [promase](#promase)
  - [模板字符串优点](#模板字符串优点)
- [jq](#jq)
  - [jq + bootstrap](#jq--bootstrap)
- [vue](#vue)
  - [vue指令](#vue指令)
  - [生命周期](#生命周期)
  - [内置组件](#内置组件)
  - [组件通信](#组件通信)
  - [自定义组件，自定义属性](#自定义组件自定义属性)
  - [vuex 原理 流程，vuex 如何做本地数据持久化](#vuex-原理-流程vuex-如何做本地数据持久化)
  - [computed 和 watch 的区别](#computed-和-watch-的区别)
  - [router](#router)
    - [router和route的区别](#router和route的区别)
    - [params与query使用区别](#params与query使用区别)
    - [路由守卫](#路由守卫)
  - [keep-allive清除缓存](#keep-allive清除缓存)
- [react](#react)
  - [循环渲染](#循环渲染)
  - [条件渲染](#条件渲染)
  - [组件通信](#组件通信-1)
  - [生命周期](#生命周期-1)
  - [无状态组件 - 函数组件](#无状态组件---函数组件)
  - [类组件 --class组件](#类组件---class组件)
  - [state 和props异同](#state-和props异同)
  - [hooks](#hooks)
  - [redux](#redux)
  - [react-Redux](#react-redux)
  - [react-router](#react-router)
- [小程序](#小程序)
  - [面向对象](#面向对象)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## HTML， HTTP，web综合问题

### 常见排序算法的时间复杂度,空间复杂度

?

### 前端需要注意哪些SEO

:::details

1. 合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可
2. 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
3. 重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
4. 重要内容不要用js输出：爬虫不会执行js获取内容
5. 少用iframe：搜索引擎不会抓取iframe中的内容
6. 非装饰性图片必须加alt
7. 提高网站速度：网站速度是搜索引擎排序的一个重要指标
:::

### web开发中会话跟踪的方法有哪些

:::details

1. cookie
2. session
3. url重写
4. 隐藏input
5. ip地址
:::

### `<img>`的`title`和`alt`有什么区别

:::details

1. `title`是[global attributes](http://www.w3.org/TR/html-markup/global-attributes.html#common.attrs.core)之一，用于为元素提供附加的advisory information。通常当鼠标滑动到元素上的时候显示。
2. `alt`是`<img>`的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。
:::

### doctype是什么,举例常见doctype及特点

:::details

1. `<!doctype>`声明必须处于HTML文档的头部，在`<html>`标签之前，HTML5中不区分大小写
2. `<!doctype>`声明不是一个HTML标签，是一个用于告诉浏览器当前HTMl版本的指令
3. 现代浏览器的html布局引擎通过检查doctype决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型。
3. 在HTML4.01中`<!doctype>`声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容
4. HTML5不基于SGML，所以不用指定DTD

常见dotype：

1. **HTML4.01 strict**：不允许使用表现性、废弃元素（如font）以及frameset。声明：

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

2. **HTML4.01 Transitional**:允许使用表现性、废弃元素（如font），不允许使用frameset。声明：

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

3. **HTML4.01 Frameset**:允许表现性元素，废气元素以及frameset。声明：

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

4. **XHTML1.0 Strict**:不使用允许表现性、废弃元素以及frameset。文档必须是结构良好的XML文档。声明：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

5. **XHTML1.0 Transitional**:允许使用表现性、废弃元素，不允许frameset，文档必须是结构良好的XMl文档。声明：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

6. **XHTML 1.0 Frameset**:允许使用表现性、废弃元素以及frameset，文档必须是结构良好的XML文档。声明：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

7. **HTML 5**: `<!doctype html>`
:::

### HTML全局属性(global attribute)有哪些

:::details

参考资料：[MDN: html global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)或者[W3C HTML global-attributes](http://www.w3.org/TR/html-markup/global-attributes.html#common.attrs.core)

- `accesskey`:设置快捷键，提供快速访问元素如<a href="#" accesskey="a">aaa</a>在windows下的firefox中按``alt + shift + a``可激活元素
- `class`:为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class属性获取元素
- `contenteditable`: 指定元素内容是否可编辑
- `contextmenu`: 自定义鼠标右键弹出菜单内容
- `data-*`: 为元素增加自定义属性
- `dir`: 设置元素文本方向
- `draggable`: 设置元素是否可拖拽
- `dropzone`: 设置元素拖放类型： copy, move, link
- `hidden`: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
- `id`: 元素id，文档内唯一
- `lang`: 元素内容的的语言
- `spellcheck`: 是否启动拼写和语法检查
- `style`: 行内css样式
- `tabindex`: 设置元素可以获得焦点，通过tab可以导航
- `title`: 元素相关的建议信息
- `translate`: 元素和子孙节点内容是否需要本地化
:::

### 什么是web语义化,有什么好处

:::details

web语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。
HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构
css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，如[Microformat](http://en.wikipedia.org/wiki/Microformats)通过添加符合规则的class描述信息
为什么需要语义化：

- 去掉样式后页面呈现清晰的结构
- 盲人使用读屏器更好地阅读
- 搜索引擎更好地理解页面，有利于收录
- 便团队项目的可持续运作及维护
:::

### HTTP method

:::details

1. 一台服务器要与HTTP1.1兼容，只要为资源实现**GET**和**HEAD**方法即可
2. **GET**是最常用的方法，通常用于**请求服务器发送某个资源**。
3. **HEAD**与GET类似，但**服务器在响应中值返回首部，不返回实体的主体部分**
4. **PUT**让服务器**用请求的主体部分来创建一个由所请求的URL命名的新文档，或者，如果那个URL已经存在的话，就用干这个主体替代它**
5. **POST**起初是用来向服务器输入数据的。实际上，通常会用它来支持HTML的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到要去的地方。
6. **TRACE**会在目的服务器端发起一个环回诊断，最后一站的服务器会弹回一个TRACE响应并在响应主体中携带它收到的原始请求报文。TRACE方法主要用于诊断，用于验证请求是否如愿穿过了请求/响应链。
7. **OPTIONS**方法请求web服务器告知其支持的各种功能。可以查询服务器支持哪些方法或者对某些特殊资源支持哪些方法。
8. **DELETE**请求服务器删除请求URL指定的资源
:::

### 从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)

:::details

1. 在浏览器地址栏输入URL
2. 浏览器查看**缓存**，如果请求资源在缓存中并且新鲜，跳转到转码步骤
    1. 如果资源未缓存，发起新请求
    2. 如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
    3. 检验新鲜通常有两个HTTP头进行控制`Expires`和`Cache-Control`：
        - HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
        - HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
3. 浏览器**解析URL**获取协议，主机，端口，path
4. 浏览器**组装一个HTTP（GET）请求报文**
5. 浏览器**获取主机ip地址**，过程如下：
    1. 浏览器缓存
    2. 本机缓存
    3. hosts文件
    4. 路由器缓存
    5. ISP DNS缓存
    6. DNS递归查询（可能存在负载均衡导致每次IP不一样）
6. **打开一个socket与目标IP地址，端口建立TCP链接**，三次握手如下：
    1. 客户端发送一个TCP的**SYN=1，Seq=X**的包到服务器端口
    2. 服务器发回**SYN=1， ACK=X+1， Seq=Y**的响应包
    3. 客户端发送**ACK=Y+1， Seq=Z**
7. TCP链接建立后**发送HTTP请求**
8. 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
9. 服务器检查**HTTP请求头是否包含缓存验证信息**如果验证缓存新鲜，返回**304**等对应状态码
10. 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
11. 服务器将**响应报文通过TCP连接发送回浏览器**
12. 浏览器接收HTTP响应，然后根据情况选择**关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下**：
    1. 主动方发送**Fin=1， Ack=Z， Seq= X**报文
    2. 被动方发送**ACK=X+1， Seq=Z**报文
    3. 被动方发送**Fin=1， ACK=X， Seq=Y**报文
    4. 主动方发送**ACK=Y， Seq=X**报文
13. 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
14. 如果资源可缓存，**进行缓存**
15. 对响应进行**解码**（例如gzip压缩）
16. 根据资源类型决定如何处理（假设资源为HTML文档）
17. **解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本**，这些操作没有严格的先后顺序，以下分别解释
18. **构建DOM树**：
    1. **Tokenizing**：根据HTML规范将字符流解析为标记
    2. **Lexing**：词法分析将标记转换为对象并定义属性和规则
    3. **DOM construction**：根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片、样式表、js文件，**启动下载**
20. 构建**CSSOM树**：
    1. **Tokenizing**：字符流转换为标记流
    2. **Node**：根据标记创建节点
    3. **CSSOM**：节点创建CSSOM树
21. **[根据DOM树和CSSOM树构建渲染树](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)**:
    1. 从DOM树的根节点遍历所有**可见节点**，不可见节点包括：1）`script`,`meta`这样本身不可见的标签。2)被css隐藏的节点，如`display: none`
    2. 对每一个可见节点，找到恰当的CSSOM规则并应用
    3. 发布可视节点的内容和计算样式
22. **js解析如下**：
    1. 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时**document.readystate为loading**
    2. HTML解析器遇到**没有async和defer的script时**，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。**同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容**
    3. 当解析器遇到设置了**async**属性的script时，开始下载脚本并继续解析文档。脚本会在它**下载完成后尽快执行**，但是**解析器不会停下来等它下载**。异步脚本**禁止使用document.write()**，它们可以访问自己script和之前的文档元素
    4. 当文档完成解析，document.readState变成interactive
    5. 所有**defer**脚本会**按照在文档出现的顺序执行**，延迟脚本**能访问完整文档树**，禁止使用document.write()
    6. 浏览器**在Document对象上触发DOMContentLoaded事件**
    7. 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些**内容完成载入并且所有异步脚本完成载入和执行**，document.readState变为complete,window触发load事件
23. **显示页面**（HTML解析过程中会逐步显示页面）
:::

### HTTP request报文结构是怎样的

:::details

[rfc2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html)中进行了定义：

1. 首行是**Request-Line**包括：**请求方法**，**请求URI**，**协议版本**，**CRLF**
2. 首行之后是若干行**请求头**，包括**general-header**，**request-header**或者**entity-header**，每个一行以CRLF结束
3. 请求头和消息实体之间有一个**CRLF分隔**
4. 根据实际请求需要可能包含一个**消息实体**
一个请求报文例子如下：

```js
GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
Host: www.w3.org
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: https://www.google.com.hk/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: authorstyle=yes
If-None-Match: "2cc8-3e3073913b100"
If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

name=qiu&age=25
```

:::

### HTTP response报文结构是怎样的

:::details

[rfc2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html)中进行了定义：

1. 首行是状态行包括：**HTTP版本，状态码，状态描述**，后面跟一个CRLF
2. 首行之后是**若干行响应头**，包括：**通用头部，响应头部，实体头部**
3. 响应头部和响应实体之间用**一个CRLF空行**分隔
4. 最后是一个可能的**消息实体**
响应报文例子如下：

```js
HTTP/1.1 200 OK
Date: Tue, 08 Jul 2014 05:28:43 GMT
Server: Apache/2
Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
ETag: "40d7-3e3073913b100"
Accept-Ranges: bytes
Content-Length: 16599
Cache-Control: max-age=21600
Expires: Tue, 08 Jul 2014 11:28:43 GMT
P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
Content-Type: text/html; charset=iso-8859-1

{"name": "qiu", "age": 25}
```

:::

### 如何进行网站性能优化

:::details

[雅虎Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html)：

- content方面
    1. 减少HTTP请求：合并文件、CSS精灵、inline Image
    2. 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
    3. 避免重定向：多余的中间访问
    4. 使Ajax可缓存
    5. 非必须组件延迟加载
    6. 未来所需组件预加载
    7. 减少DOM元素数量
    8. 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
    9. 减少iframe数量
    10. 不要404

- Server方面
    1. 使用CDN
    2. 添加Expires或者Cache-Control响应头
    3. 对组件使用Gzip压缩
    4. 配置ETag
    5. Flush Buffer Early
    6. Ajax使用GET进行请求
    7. 避免空src的img标签
- Cookie方面
    1. 减小cookie大小
    2. 引入资源的域名不要包含cookie
- css方面
    1. 将样式表放到页面顶部
    2. 不使用CSS表达式
    3. 使用<link>不使用@import
    4. 不使用IE的Filter
- Javascript方面
    1. 将脚本放到页面底部
    2. 将javascript和css从外部引入
    3. 压缩javascript和css
    4. 删除不需要的脚本
    5. 减少DOM访问
    6. 合理设计事件监听器
- 图片方面
    1. 优化图片：根据实际颜色需要选择色深、压缩
    2. 优化css精灵
    3. 不要在HTML中拉伸图片
    4. 保证favicon.ico小并且可缓存
- 移动方面
    1. 保证组件小于25k
    2. Pack Components into a Multipart Document
:::

### 什么是渐进增强

:::details

渐进增强是指在web设计时强调可访问性、语义化HTML标签、外部样式表和脚本。保证所有人都能访问页面的基本内容和功能同时为高级浏览器和高带宽用户提供更好的用户体验。核心原则如下:

- 所有浏览器都必须能访问基本内容
- 所有浏览器都必须能使用基本功能
- 所有内容都包含在语义化标签中
- 通过外部CSS提供增强的布局
- 通过非侵入式、外部javascript提供增强功能
- end-user web browser preferences are respected
:::

### HTTP状态码及其含义

:::details

参考[RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

- 1XX：信息状态码
  - **100 Continue**：客户端应当继续发送请求。这个临时相应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求万仇向客户端发送一个最终响应
  - **101 Switching Protocols**：服务器已经理解力客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到Upgrade消息头中定义的那些协议。
- 2XX：成功状态码
  - **200 OK**：请求成功，请求所希望的响应头或数据体将随此响应返回
  - **201 Created**：
  - **202 Accepted**：
  - **203 Non-Authoritative Information**：
  - **204 No Content**：
  - **205 Reset Content**：
  - **206 Partial Content**：
- 3XX：重定向
  - **300 Multiple Choices**：
  - **301 Moved Permanently**：
  - **302 Found**：
  - **303 See Other**：
  - **304 Not Modified**：
  - **305 Use Proxy**：
  - **306 （unused）**：
  - **307 Temporary Redirect**：
- 4XX：客户端错误
  - **400 Bad Request**:
  - **401 Unauthorized**:
  - **402 Payment Required**:
  - **403 Forbidden**:
  - **404 Not Found**:
  - **405 Method Not Allowed**:
  - **406 Not Acceptable**:
  - **407 Proxy Authentication Required**:
  - **408 Request Timeout**:
  - **409 Conflict**:
  - **410 Gone**:
  - **411 Length Required**:
  - **412 Precondition Failed**:
  - **413 Request Entity Too Large**:
  - **414 Request-URI Too Long**:
  - **415 Unsupported Media Type**:
  - **416 Requested Range Not Satisfiable**:
  - **417 Expectation Failed**:
- 5XX: 服务器错误
  - **500 Internal Server Error**:
  - **501 Not Implemented**:
  - **502 Bad Gateway**:
  - **503 Service Unavailable**:
  - **504 Gateway Timeout**:
  - **505 HTTP Version Not Supported**:
:::

## CSS

- 布局(媒体查询)
？
`@import` 和 `<link/>`引入的区别

### CSS选择器有哪些

:::details

1. ***通用选择器**：选择所有元素，**不参与计算优先级**，兼容性IE6+
2. **#X id选择器**：选择id值为X的元素，兼容性：IE6+
3. **.X 类选择器**： 选择class包含X的元素，兼容性：IE6+
4. **X Y后代选择器**： 选择满足X选择器的后代节点中满足Y选择器的元素，兼容性：IE6+
5. **X 元素选择器**： 选择标所有签为X的元素，兼容性：IE6+
6. **:link，：visited，：focus，：hover，：active链接状态**： 选择特定状态的链接元素，顺序LoVe HAte，兼容性: IE4+
7. **X + Y直接兄弟选择器**：在**X之后第一个兄弟节点**中选择满足Y选择器的元素，兼容性： IE7+
8. **X > Y子选择器**： 选择X的子元素中满足Y选择器的元素，兼容性： IE7+
9. **X ~ Y兄弟**： 选择**X之后所有兄弟节点**中满足Y选择器的元素，兼容性： IE7+
10. **[attr]**：选择所有设置了attr属性的元素，兼容性IE7+
11. **[attr=value]**：选择属性值刚好为value的元素
12. **[attr~=value]**：选择属性值为空白符分隔，其中一个的值刚好是value的元素
13. **[attr|=value]**：选择属性值刚好为value或者value-开头的元素
14. **[attr^=value]**：选择属性值以value开头的元素
15. **[attr$=value]**：选择属性值以value结尾的元素
16. **[attr*=value]**：选择属性值中包含value的元素
17. **[:checked]**：选择单选框，复选框，下拉框中选中状态下的元素，兼容性：IE9+
18. **X:after, X::after**：after伪元素，选择元素虚拟子元素（元素的最后一个子元素），CSS3中::表示伪元素。兼容性:after为IE8+，::after为IE9+
19. **:hover**：鼠标移入状态的元素，兼容性a标签IE4+， 所有元素IE7+
20. **:not(selector)**：选择不符合selector的元素。**不参与计算优先级**，兼容性：IE9+
21. **::first-letter**：伪元素，选择块元素第一行的第一个字母，兼容性IE5.5+
22. **::first-line**：伪元素，选择块元素的第一行，兼容性IE5.5+
23. **:nth-child(an + b)**：伪类，选择前面有an + b - 1个兄弟节点的元素，其中n
&gt;= 0， 兼容性IE9+
23. **:nth-last-child(an + b)**：伪类，选择后面有an + b - 1个兄弟节点的元素
其中n &gt;= 0，兼容性IE9+
24. **X:nth-of-type(an+b)**：伪类，X为选择器，**解析得到元素标签**，选择**前面**有an + b - 1个**相同标签**兄弟节点的元素。兼容性IE9+
25. **X:nth-last-of-type(an+b)**：伪类，X为选择器，解析得到元素标签，选择**后面**有an+b-1个相同**标签**兄弟节点的元素。兼容性IE9+
26. **X:first-child**：伪类，选择满足X选择器的元素，且这个元素是其父节点的第一个子元素。兼容性IE7+
27. **X:last-child**：伪类，选择满足X选择器的元素，且这个元素是其父节点的最后一个子元素。兼容性IE9+
28. **X:only-child**：伪类，选择满足X选择器的元素，且这个元素是其父元素的唯一子元素。兼容性IE9+
29. **X:only-of-type**：伪类，选择X选择的元素，**解析得到元素标签**，如果该元素没有相同类型的兄弟节点时选中它。兼容性IE9+
30. **X:first-of-type**：伪类，选择X选择的元素，**解析得到元素标签**，如果该元素
是此此类型元素的第一个兄弟。选中它。兼容性IE9+
:::

### css sprite是什么,有什么优缺点

:::details

概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸调节需要显示的背景图案。

优点：

1. 减少HTTP请求数，极大地提高页面加载速度
2. 增加图片信息重复度，提高压缩比，减少图片大小
3. 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：

1. 图片合并麻烦
2. 维护麻烦，修改一个图片可能需要从新布局整个图片，样式
:::

### `display: none;`与`visibility: hidden;`的区别

:::details

联系：它们都能让元素不可见

区别：

1. display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
2. display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式
3. 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。
4. 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容
:::

### css hack原理及常用hack

:::details

原理：利用**不同浏览器对CSS的支持和解析结果不一样**编写针对特定浏览器样式。常见的hack有1）属性hack。2）选择器hack。3）IE条件注释

- IE条件注释：适用于[IE5, IE9]常见格式如下

```js
<!--[if IE 6]>
Special instructions for IE 6 here
<![endif]-->
```

- 选择器hack：不同浏览器对选择器的支持不一样

```js
/***** Selector Hacks ******/

/* IE6 and below */
* html #uno  { color: red }

/* IE7 */
*:first-child+html #dos { color: red }

/* IE7, FF, Saf, Opera  */
html>body #tres { color: red }

/* IE8, FF, Saf, Opera (Everything but IE 6,7) */
html>/**/body #cuatro { color: red }

/* Opera 9.27 and below, safari 2 */
html:first-child #cinco { color: red }

/* Safari 2-3 */
html[xmlns*=""] body:last-child #seis { color: red }

/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:nth-of-type(1) #siete { color: red }

/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:first-of-type #ocho {  color: red }

/* saf3+, chrome1+ */
@media screen and (-webkit-min-device-pixel-ratio:0) {
 #diez  { color: red  }
}

/* iPhone / mobile webkit */
@media screen and (max-device-width: 480px) {
 #veintiseis { color: red  }
}

/* Safari 2 - 3.1 */
html[xmlns*=""]:root #trece  { color: red  }

/* Safari 2 - 3.1, Opera 9.25 */
*|html[xmlns*=""] #catorce { color: red  }

/* Everything but IE6-8 */
:root *> #quince { color: red  }

/* IE7 */
*+html #dieciocho {  color: red }

/* Firefox only. 1+ */
#veinticuatro,  x:-moz-any-link  { color: red }

/* Firefox 3.0+ */
#veinticinco,  x:-moz-any-link, x:default  { color: red  }
```

- 属性hack：不同浏览器解析bug或方法

```js
/* IE6 */
#once { _color: blue }

/* IE6, IE7 */
#doce { *color: blue; /* or #color: blue */ }

/* Everything but IE6 */
#diecisiete { color/**/: blue }

/* IE6, IE7, IE8 */
#diecinueve { color: blue\9; }

/* IE7, IE8 */
#veinte { color/*\**/: blue\9; }

/* IE6, IE7 -- acts as an !important */
#veintesiete { color: blue !ie; } /* string after ! can be anything */
```

:::

### specified value,computed value,used value计算方法

:::details

- specified value: 计算方法如下：
    1. 如果样式表设置了一个值，使用这个值
    2. 如果没有设置值，这个属性是继承属性，从父元素继承
    3. 如果没设置，并且不是继承属性，使用css规范指定的初始值

- computed value: 以specified value根据规范定义的行为进行计算，通常将相对值计算为绝对值，例如em根据font-size进行计算。一些使用百分数并且需要布局来决定最终值的属性，如width，margin。百分数就直接作为computed value。line-height的无单位值也直接作为computed value。这些值将在计算used value时得到绝对值。**computed value的主要作用是用于继承**

- used value：属性计算后的最终值，对于大多数属性可以通过window.getComputedStyle获得，尺寸值单位为像素。以下属性依赖于布局，
  - background-position
  - bottom, left, right, top
  - height, width
  - margin-bottom, margin-left, margin-right, margin-top
  - min-height, min-width
  - padding-bottom, padding-left, padding-right, padding-top
  - text-indent
:::

### 清除浮动的方法（最常用的4种）

:::details

1. 额外标签法（在最后一个浮动标签后，新加一个标签，给其设置`clear：both`；）（不推荐）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .fahter{
        width: 400px;
        border: 1px solid deeppink;
    }
    .big{
        width: 200px;
        height: 200px;
        background: darkorange;
        float: left;
    }
    .small{
        width: 120px;
        height: 120px;
        background: darkmagenta;
        float: left;
    }
    .footer{
        width: 900px;
        height: 100px;
        background: darkslateblue;
    }
    .clear{
        clear:both;
    }
    </style>
</head>
<body>
    <div class="fahter">
        <div class="big">big</div>
        <div class="small">small</div>
        <div class="clear">额外标签法</div>
    </div>
    <div class="footer"></div>
</body>
</html>
```

如果我们清除了浮动，父元素自动检测子盒子最高的高度，然后与其同高。

优点：通俗易懂，方便

缺点：添加无意义标签，语义化差

不建议使用。

2. 父级添加overflow属性（父元素添加overflow:hidden）（不推荐）

通过触发BFC方式，实现清除浮动

```css
.fahter{
        width: 400px;
        border: 1px solid deeppink;
        overflow: hidden;
    }
```

优点：代码简洁

缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素

不推荐使用

3. 使用after伪元素清除浮动（推荐使用）

```js
    .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }

<body>
    <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
        <!--<div class="clear">额外标签法</div>-->
    </div>
    <div class="footer"></div>
</body>
```

优点：符合闭合浮动思想，结构语义化正确

缺点：ie6-7不支持伪元素：after，使用zoom:1触发hasLayout.

推荐使用

4. 使用before和after双伪元素清除浮动

```js
 .clearfix:after,.clearfix:before{
        content: "";
        display: table;
    }
    .clearfix:after{
        clear: both;
    }
    .clearfix{
        *zoom: 1;
    }

 <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
    </div>
    <div class="footer"></div>
```

优点：代码更简洁

缺点：用zoom:1触发hasLayout.

推荐使用
:::

### `link`与`@import`的区别

:::details

1. ``link``是HTML方式， ``@import``是CSS方式
2. ``link``最大限度支持并行下载，``@import``过多嵌套导致串行下载，出现[FOUC](http://www.bluerobot.com/web/css/fouc.asp/)
3. ``link``可以通过``rel="alternate stylesheet"``指定候选样式
4. 浏览器对``link``支持早于``@import``，可以使用``@import``对老浏览器隐藏样式
5. ``@import``必须在样式规则之前，可以在css文件中引用其他文件
6. 总体来说：**[link优于@import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)**
:::

### ``display: block;``和``display: inline;``的区别

:::details

``block``元素特点：

1.处于常规流中时，如果``width``没有设置，会自动填充满父容器
2.可以应用``margin/padding``
3.在没有设置高度的情况下会扩展高度以包含常规流中的子元素
4.处于常规流中时布局时在前后元素位置之间（独占一个水平空间）
5.忽略``vertical-align``

``inline``元素特点

1.水平方向上根据``direction``依次布局
2.不会在元素前后进行换行
3.受``white-space``控制
4.``margin/padding``在竖直方向上无效，水平方向上有效
5.``width/height``属性对非替换行内元素无效，宽度由元素内容决定
6.非替换行内元素的行框高由``line-height``确定，替换行内元素的行框高由``height``,``margin``,``padding``,``border``决定
6.浮动或绝对定位时会转换为``block``
7.``vertical-align``属性生效
:::

### PNG,GIF,JPG的区别及如何选

:::details

参考资料： [选择正确的图片格式](http://www.yuiblog.com/blog/2008/11/04/imageopt-2/)
**GIF**:

1. 8位像素，256色
2. 无损压缩
3. 支持简单动画
4. 支持boolean透明
5. 适合简单动画

**JPEG**：

1. 颜色限于256
2. 有损压缩
3. 可控制压缩质量
4. 不支持透明
5. 适合照片

**PNG**：

1. 有PNG8和truecolor PNG
2. PNG8类似GIF颜色上限为256，文件小，支持alpha透明度，无动画
3. 适合图标、背景、按钮
:::

### CSS有哪些继承属性

:::details

- 关于文字排版的属性如：
  + [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
  + [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
  + [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
  + [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
  + [text-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering)
  + [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
  + [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  + [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
  + [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
  + [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
:::

### IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决

:::details

- IE6不支持min-height，解决办法使用css hack：

```js
.target {
    min-height: 100px;
    height: auto !important;
    height: 100px;   // IE6下内容高度超过会自动扩展高度
}
```

- ``ol``内``li``的序号全为1，不递增。解决方法：为li设置样式``display: list-item;``

- 未定位父元素``overflow: auto;``，包含``position: relative;``子元素，子元素高于父元素时会溢出。解决办法：1）子元素去掉``position: relative;``; 2）不能为子元素去掉定位时，父元素``position: relative;``

```js
<style type="text/css">
.outer {
    width: 215px;
    height: 100px;
    border: 1px solid red;
    overflow: auto;
    position: relative;  /* 修复bug */
}
.inner {
    width: 100px;
    height: 200px;
    background-color: purple;
    position: relative;
}
</style>

<div class="outer">
    <div class="inner"></div>
</div>
```

- IE6只支持``a``标签的``:hover``伪类，解决方法：使用js为元素监听mouseenter，mouseleave事件，添加类实现效果：

```js
<style type="text/css">
.p:hover,
.hover {
    background: purple;
}
</style>

<p class="p" id="target">aaaa bbbbb<span>DDDDDDDDDDDd</span> aaaa lkjlkjdf j</p>

<script type="text/javascript">
function addClass(elem, cls) {
    if (elem.className) {
        elem.className += ' ' + cls;
    } else {
        elem.className = cls;
    }
}
function removeClass(elem, cls) {
    var className = ' ' + elem.className + ' ';
    var reg = new RegExp(' +' + cls + ' +', 'g');
    elem.className = className.replace(reg, ' ').replace(/^ +| +$/, '');
}

var target = document.getElementById('target');
if (target.attachEvent) {
    target.attachEvent('onmouseenter', function () {
        addClass(target, 'hover');
    });
    target.attachEvent('onmouseleave', function () {
        removeClass(target, 'hover');
    })
}
</script>
```

- IE5-8不支持``opacity``，解决办法：

```js
.opacity {
    opacity: 0.4
    filter: alpha(opacity=60); /* for IE5-7 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
}
```

- IE6在设置``height``小于``font-size``时高度值为``font-size``，解决办法：``font-size: 0;``
- IE6不支持PNG透明背景，解决办法: **IE6下使用gif图片**
- IE6-7不支持``display: inline-block``解决办法：设置inline并触发hasLayout

```js
    display: inline-block;
    *display: inline;
    *zoom: 1;
```

- IE6下浮动元素在浮动方向上与父元素边界接触元素的外边距会加倍。解决办法：
1）使用padding控制间距。
2）浮动元素`display: inline;`这样解决问题且无任何副作用：css标准规定浮动元素display:inline会自动调整为block
- 通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中，解决方法：为父元素设置`text-align: center;`
:::

### 容器包含若干浮动元素时如何清理(包含)浮动

:::details

1. 容器元素闭合标签前添加额外元素并设置``clear: both``
2. 父元素触发块级格式化上下文(见块级可视化上下文部分)
3. 设置容器元素伪元素进行清理[推荐的清理浮动方法](http://nicolasgallagher.com/micro-clearfix-hack/)

```js
/**
* 在标准浏览器下使用
* 1 content内容为空格用于修复opera下文档中出现
*   contenteditable属性时在清理浮动元素上下的空白
* 2 使用display使用table而不是block：可以防止容器和
*   子元素top-margin折叠,这样能使清理效果与BFC，IE6/7
*   zoom: 1;一致
**/

.clearfix:before,
.clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.clearfix:after {
    clear: both;
}

/**
* IE 6/7下使用
* 通过触发hasLayout实现包含浮动
**/
.clearfix {
    *zoom: 1;
}
```

:::

### 什么是FOUC?如何避免

Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。**解决方法**：把样式表放到文档的`head`

### 如何创建块级格式化上下文(block formatting context),BFC有什么用

:::details

创建规则：

1. 根元素
2. 浮动元素（``float``不是``none``）
3. 绝对定位元素（``position``取值为``absolute``或``fixed``）
4. ``display``取值为``inline-block``,``table-cell``, ``table-caption``,``flex``, ``inline-flex``之一的元素
5. ``overflow``不是``visible``的元素

作用：

1. 可以包含浮动元素
2. 不被浮动元素覆盖
3. 阻止父子元素的margin折叠
:::

### display,float,position的关系

:::details

1. 如果``display``为none，那么position和float都不起作用，这种情况下元素不产生框
2. 否则，如果position值为absolute或者fixed，框就是绝对定位的，float的计算值为none，display根据下面的表格进行调整。
3. 否则，如果float不是none，框是浮动的，display根据下表进行调整
4. 否则，如果元素是根元素，display根据下表进行调整
5. 其他情况下display的值为指定值
总结起来：**绝对定位、浮动、根元素都需要调整``display``**
![display转换规则](img/display-adjust.png)
:::

### 外边距折叠(collapsing margins)

:::details

毗邻的两个或多个``margin``会合并成一个margin，叫做外边距折叠。规则如下：

1. 两个或多个毗邻的普通流中的块元素垂直方向上的margin会折叠
2. 浮动元素/inline-block元素/绝对定位元素的margin不会和垂直方向上的其他元素的margin折叠
3. 创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠
4. 元素自身的margin-bottom和margin-top相邻时也会折叠
:::

### 如何确定一个元素的包含块(containing block)

:::details

1. 根元素的包含块叫做初始包含块，在连续媒体中他的尺寸与viewport相同并且anchored at the canvas origin；对于paged media，它的尺寸等于page area。初始包含块的direction属性与根元素相同。
2. ``position``为``relative``或者``static``的元素，它的包含块由最近的块级（``display``为``block``,``list-item``, ``table``）祖先元素的**内容框**组成
3. 如果元素``position``为``fixed``。对于连续媒体，它的包含块为viewport；对于paged media，包含块为page area
4. 如果元素``position``为``absolute``，它的包含块由祖先元素中最近一个``position``为``relative``,``absolute``或者``fixed``的元素产生，规则如下：
    - 如果祖先元素为行内元素，the containing block is the bounding box around the **padding boxes** of the first and the last inline boxes generated for that element.
    - 其他情况下包含块由祖先节点的**padding edge**组成

    如果找不到定位的祖先元素，包含块为**初始包含块**
:::

### stacking context,布局规则

:::details

z轴上的默认层叠顺序如下（从下到上）：

1. 根元素的边界和背景
2. 常规流中的元素按照html中顺序
3. 浮动块
4. positioned元素按照html中出现顺序

如何创建stacking context：

1. 根元素
2. z-index不为auto的定位元素
3. a flex item with a z-index value other than 'auto'
4. opacity小于1的元素
5. 在移动端webkit和chrome22+，z-index为auto，position: fixed也将创建新的stacking context
:::

### 如何水平居中一个元素

:::details

- 如果需要居中的元素为**常规流中inline元素**，为父元素设置`text-align: center;`即可实现
- 如果需要居中的元素为**常规流中block元素**，1）为元素设置宽度，2）设置左右margin为auto。3）IE6下需在父元素上设置`text-align: center;`,再给子元素恢复需要的值

```js
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
        text-align: center; /* 3 */
    }
    .content {
        width: 500px;      /* 1 */
        text-align: left;  /* 3 */
        margin: 0 auto;    /* 2 */

        background: purple;
    }
</style>
```

- 如果需要居中的元素为**浮动元素**，1）为元素设置宽度，2）`position: relative;`，3）浮动方向偏移量（left或者right）设置为50%，4）浮动方向上的margin设置为元素宽度一半乘以-1

```js
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
    }
    .content {
        width: 500px;         /* 1 */
        float: left;

        position: relative;   /* 2 */
        left: 50%;            /* 3 */
        margin-left: -250px;  /* 4 */

        background-color: purple;
    }
</style>
```

- 如果需要居中的元素为**绝对定位元素**，1）为元素设置宽度，2）偏移量设置为50%，3）偏移方向外边距设置为元素宽度一半乘以-1

```js
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
        position: relative;
    }
    .content {
        width: 800px;

        position: absolute;
        left: 50%;
        margin-left: -400px;

        background-color: purple;
    }
</style>
```

- 如果需要居中的元素为**绝对定位元素**，1）为元素设置宽度，2）设置左右偏移量都为0,3）设置左右外边距都为auto

```js
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
        position: relative;
    }
    .content {
        width: 800px;

        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;

        background-color: purple;
    }
</style>
```

:::

### 如何竖直居中一个元素

:::details

参考资料：[6 Methods For Vertical Centering With CSS](http://www.vanseodesign.com/css/vertical-centering/)。 [盘点8种CSS实现垂直居中](http://blog.csdn.net/freshlover/article/details/11579669)

- 需要居中元素为**单行文本**，为包含文本的元素设置大于`font-size`的`line-height`：

```js
<p class="text">center text</p>

<style>
.text {
    line-height: 200px;
}
</style>
```

:::

## JS

### 什么是行内块级元素？行元素，块元素 举例

答：既有行元素的属性即:不会独占一行、又有块元素的属性即：可以设置宽高

### DOM元素e的e.getAttribute(propName)和e.propName有什么区别和联系

:::details

- e.getAttribute()，是标准DOM操作文档元素属性的方法，具有通用性可在任意文档上使用，返回元素在源文件中**设置的属性**
- e.propName通常是在HTML文档中访问特定元素的**特性**，浏览器解析元素后生成对应对象（如a标签生成HTMLAnchorElement），这些对象的特性会根据特定规则结合属性设置得到，对于没有对应特性的属性，只能使用getAttribute进行访问
- e.getAttribute()返回值是源文件中设置的值，类型是字符串或者null（有的实现返回""）
- e.propName返回值可能是字符串、布尔值、对象、undefined等
- 大部分attribute与property是一一对应关系，修改其中一个会影响另一个，如id，title等属性
- 一些布尔属性`<input hidden/>`的检测设置需要hasAttribute和removeAttribute来完成，或者设置对应property
- 像`<a href="../index.html">link</a>`中href属性，转换成property的时候需要通过转换得到完整URL
- 一些attribute和property不是一一对应如：form控件中`<input value="hello"/>`对应的是defaultValue，修改或设置value property修改的是控件当前值，setAttribute修改value属性不会改变value property
:::

### offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别

:::details

- offsetWidth/offsetHeight返回值包含**content + padding + border**，效果与e.getBoundingClientRect()相同
- clientWidth/clientHeight返回值只包含**content + padding**，如果有滚动条，也**不包含滚动条**
- scrollWidth/scrollHeight返回值包含**content + padding + 溢出内容的尺寸**

[Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer 9](http://msdn.microsoft.com/en-us/library/ie/hh781509(v=vs.85).aspx)

:::

### XMLHttpRequest通用属性和方法

:::details

1. `readyState`:表示请求状态的整数，取值：

- UNSENT（0）：对象已创建
- OPENED（1）：open()成功调用，在这个状态下，可以为xhr设置请求头，或者使用`send()`发送请求
- HEADERS_RECEIVED(2)：所有重定向已经自动完成访问，并且最终响应的HTTP头已经收到
- LOADING(3)：响应体正在接收
- DONE(4)：数据传输完成或者传输产生错误

3. `onreadystatechange`：readyState改变时调用的函数
4. `status`：服务器返回的HTTP状态码（如，`200`， `404`）
5. `statusText`:服务器返回的HTTP状态信息（如，OK，No Content）
6. `responseText`:作为字符串形式的来自服务器的完整响应
6. `responseXML`: Document对象，表示服务器的响应解析成的XML文档
7. `abort()`:取消异步HTTP请求
8. `getAllResponseHeaders()`: 返回一个字符串，包含响应中服务器发送的全部HTTP报头。每个报头都是一个用冒号分隔开的名/值对，并且使用一个回车/换行来分隔报头行
9. `getResponseHeader(headerName)`:返回headName对应的报头值
10. `open(method, url, asynchronous [, user, password])`:初始化准备发送到服务器上的请求。method是HTTP方法，不区分大小写；url是请求发送的相对或绝对URL；asynchronous表示请求是否异步；user和password提供身份验证
11. `setRequestHeader(name, value)`:设置HTTP报头
12. `send(body)`:对服务器请求进行初始化。参数body包含请求的主体部分，对于POST请求为键值对字符串；对于GET请求，为null
:::

### focus/blur与focusin/focusout的区别与联系

:::details

1. focus/blur不冒泡，focusin/focusout冒泡
2. focus/blur兼容性好，focusin/focusout在除FireFox外的浏览器下都保持良好兼容性，如需使用事件托管，可考虑在FireFox下使用事件捕获elem.addEventListener('focus', handler, true)
3. 可获得焦点的元素：
    1. window
    2. 链接被点击或键盘操作
    3. 表单空间被点击或键盘操作
    4. 设置`tabindex`属性的元素被点击或键盘操作
:::

### mouseover/mouseout与mouseenter/mouseleave的区别与联系

:::details

1. mouseover/mouseout是标准事件，**所有浏览器都支持**；mouseenter/mouseleave是IE5.5引入的特有事件后来被DOM3标准采纳，现代标准浏览器也支持
2. mouseover/mouseout是**冒泡**事件；mouseenter/mouseleave**不冒泡**。需要为**多个元素监听鼠标移入/出事件时，推荐mouseover/mouseout托管，提高性能**
3. 标准事件模型中event.target表示发生移入/出的元素,**vent.relatedTarget**对应移出/如元素；在老IE中event.srcElement表示发生移入/出的元素，**event.toElement**表示移出的目标元素，**event.fromElement**表示移入时的来源元素

例子：鼠标从div#target元素移出时进行处理，判断逻辑如下：

```js
    <div id="target"><span>test</span></div>

    <script type="text/javascript">
    var target = document.getElementById('target');
    if (target.addEventListener) {
      target.addEventListener('mouseout', mouseoutHandler, false);
    } else if (target.attachEvent) {
      target.attachEvent('onmouseout', mouseoutHandler);
    }

    function mouseoutHandler(e) {
      e = e || window.event;
      var target = e.target || e.srcElement;

      // 判断移出鼠标的元素是否为目标元素
      if (target.id !== 'target') {
        return;
      }

      // 判断鼠标是移出元素还是移到子元素
      var relatedTarget = event.relatedTarget || e.toElement;
      while (relatedTarget !== target
        && relatedTarget.nodeName.toUpperCase() !== 'BODY') {
        relatedTarget = relatedTarget.parentNode;
      }

      // 如果相等，说明鼠标在元素内部移动
      if (relatedTarget === target) {
        return;
      }

      // 执行需要操作
      //alert('鼠标移出');

    }
    </script>
```

:::

### sessionStorage,localStorage,cookie区别

:::details

1. 都会在浏览器端保存，有大小限制，同源限制
2. cookie会在请求时发送到服务器，作为会话标识，服务器可修改cookie；web storage不会发送到服务器
3. cookie有path概念，子路径可以访问父路径cookie，父路径不能访问子路径cookie
4. 有效期：cookie在设置的有效期内有效，默认为浏览器关闭；sessionStorage在窗口关闭前有效，localStorage长期有效，直到用户删除
5. 共享：sessionStorage不能共享，localStorage在同源文档之间共享，cookie在同源且符合path规则的文档之间共享
6. localStorage的修改会促发其他文档窗口的update事件
7. cookie有secure属性要求HTTPS传输
8. 浏览器不能保存超过300个cookie，单个服务器不能超过20个，每个cookie不能超过4k。web storage大小支持能达到5M
:::

### javascript跨域通信

:::details

同源：两个文档同源需满足

1. 协议相同
2. 域名相同
3. 端口相同

跨域通信：js进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。跨域通信通常有以下方法

- 如果是log之类的简单**单项通信**，新建``<img>``,``<script>``,``<link>``,``<iframe>``元素，通过src，href属性设置为目标url。实现跨域请求
- 如果请求**json数据**，使用``<script>``进行jsonp请求
- 现代浏览器中**多窗口通信**使用HTML5规范的targetWindow.postMessage(data, origin);其中data是需要发送的对象，origin是目标窗口的origin。window.addEventListener('message', handler, false);handler的event.data是postMessage发送来的数据，event.origin是发送窗口的origin，event.source是发送消息的窗口引用
- 内部服务器代理请求跨域url，然后返回数据
- 跨域请求数据，现代浏览器可使用HTML5规范的CORS功能，只要目标服务器返回HTTP头部**``Access-Control-Allow-Origin: *``**即可像普通ajax一样访问跨域资源
:::

### javascript有哪几种数据类型

:::details

六种基本数据类型

- undefined
- null
- string
- boolean
- number
- [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)(ES6)

一种引用类型

- Object
:::

### javascript有哪几种方法定义函数

:::details

1. [函数声明表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
2. [function操作符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
3. [Function 构造函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
4. [ES6:arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/arrow_functions)

重要参考资料：[MDN:Functions_and_function_scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope)
:::

### 应用程序存储和离线web应用

:::details

HTML5新增应用程序缓存，允许web应用将应用程序自身保存到用户浏览器中，用户离线状态也能访问。
1.为html元素设置manifest属性:``<html manifest="myapp.appcache">``，其中后缀名只是一个约定，真正识别方式是通过``text/cache-manifest``作为MIME类型。所以需要配置服务器保证设置正确
2.manifest文件首行为``CACHE MANIFEST``，其余就是要缓存的URL列表，每个一行，相对路径都相对于manifest文件的url。注释以#开头
3.url分为三种类型：``CACHE``:为默认类型。``NETWORK``：表示资源从不缓存。 ``FALLBACK``:每行包含两个url，第二个URL是指需要加载和存储在缓存中的资源， 第一个URL是一个前缀。任何匹配该前缀的URL都不会缓存，如果从网络中载入这样的URL失败的话，就会用第二个URL指定的缓存资源来替代。以下是一个文件例子：

```js
CACHE MANIFEST

CACHE:
myapp.html
myapp.css
myapp.js

FALLBACK:
videos/ offline_help.html

NETWORK:
cgi/
```

:::

### 客户端存储localStorage和sessionStorage

:::details

- localStorage有效期为永久，sessionStorage有效期为顶层窗口关闭前
- 同源文档可以读取并修改localStorage数据，sessionStorage只允许同一个窗口下的文档访问，如通过iframe引入的同源文档。
- Storage对象通常被当做普通javascript对象使用：**通过设置属性来存取字符串值**，也可以通过**setItem(key, value)设置**，**getItem(key)读取**，**removeItem(key)删除**，**clear()删除所有数据**，**length表示已存储的数据项数目**，**key(index)返回对应索引的key**

```js
localStorage.setItem('x', 1); // storge x->1
localStorage.getItem('x'); // return value of x
// 枚举所有存储的键值对

for (var i = 0, len = localStorage.length; i < len; ++i ) {
    var name = localStorage.key(i);
    var value = localStorage.getItem(name);
}

localStorage.removeItem('x'); // remove x
localStorage.clear();  // remove all data
```

:::

### cookie及其操作

:::details

- cookie是web浏览器存储的少量数据，最早设计为服务器端使用，作为HTTP协议的扩展实现。cookie数据会自动在浏览器和服务器之间传输。
- 通过读写cookie检测是否支持
- cookie属性有**名**，**值**，**max-age**，**path**, **domain**，**secure**；
- cookie默认有效期为浏览器会话，一旦用户关闭浏览器，数据就丢失，通过设置**max-age=seconds**属性告诉浏览器cookie有效期
- cookie作用域通过**文档源**和**文档路径**来确定，通过**path**和**domain**进行配置，web页面同目录或子目录文档都可访问
- 通过cookie保存数据的方法为：为document.cookie设置一个符合目标的字符串如下
- 读取document.cookie获得'; '分隔的字符串，key=value,解析得到结果

```js
document.cookie = 'name=qiu; max-age=9999; path=/; domain=domain; secure';

document.cookie = 'name=aaa; path=/; domain=domain; secure';
// 要改变cookie的值，需要使用相同的名字、路径和域，新的值
// 来设置cookie，同样的方法可以用来改变有效期

// 设置max-age为0可以删除指定cookie

//读取cookie，访问document.cookie返回键值对组成的字符串，
//不同键值对之间用'; '分隔。通过解析获得需要的值
```

[cookieUtil.js](https://github.com/qiu-deqing/google/blob/master/module/js/cookieUtil.js)：自己写的cookie操作工具
:::

### ===运算符判断相等的流程是怎样的

:::details

1. 如果两个值不是相同类型，它们不相等
2. 如果两个值都是null或者都是undefined，它们相等
3. 如果两个值都是布尔类型true或者都是false，它们相等
4. 如果其中有一个是**NaN**，它们不相等
5. 如果都是数值型并且数值相等，他们相等， -0等于0
6. 如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不相等
7. 如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等
:::

### ==运算符判断相等的流程是怎样的

:::details

1. 如果两个值类型相同，按照===比较方法进行比较
2. 如果类型不同，使用如下规则进行比较
3. 如果其中一个值是null，另一个是undefined，它们相等
4. 如果一个值是**数字**另一个是**字符串**，将**字符串转换为数字**进行比较
5. 如果有布尔类型，将**true转换为1，false转换为0**，然后用==规则继续比较
6. 如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用==规则继续比较
7. **其他所有情况都认为不相等**
:::

### 对象到字符串的转换步骤

:::details

1. 如果对象有toString()方法，javascript调用它。如果返回一个原始值（primitive value如：string number boolean）,将这个值转换为字符串作为结果
2. 如果对象没有toString()方法或者返回值不是原始值，javascript寻找对象的valueOf()方法，如果存在就调用它，返回结果是原始值则转为字符串作为结果
3. 否则，javascript不能从toString()或者valueOf()获得一个原始值，此时throws a TypeError
:::

### 对象到数字的转换步骤

:::details

 1. 如果对象有valueOf()方法并且返回元素值，javascript将返回值转换为数字作为结果
 2. 否则，如果对象有toString()并且返回原始值，javascript将返回结果转换为数字作为结果
 3. 否则，throws a TypeError
:::

### <,>,<=,>=的比较规则

:::details

所有比较运算符都支持任意类型，但是**比较只支持数字和字符串**，所以需要执行必要的转换然后进行比较，转换规则如下:

1. 如果操作数是对象，转换为原始值：如果valueOf方法返回原始值，则使用这个值，否则使用toString方法的结果，如果转换失败则报错
2. 经过必要的对象到原始值的转换后，如果两个操作数都是字符串，按照字母顺序进行比较（他们的16位unicode值的大小）
3. 否则，如果有一个操作数不是字符串，**将两个操作数转换为数字**进行比较
:::

### +运算符工作流程

:::details

1. 如果有操作数是对象，转换为原始值
2. 此时如果有**一个操作数是字符串**，其他的操作数都转换为字符串并执行连接
3. 否则：**所有操作数都转换为数字并执行加法**
:::

### 函数内部arguments变量有哪些特性,有哪些属性,如何将它转换为数组

:::details

- arguments所有函数中都包含的一个局部变量，是一个类数组对象，对应函数调用时的实参。如果函数定义同名参数会在调用时覆盖默认对象
- arguments[index]分别对应函数调用时的实参，并且通过arguments修改实参时会同时修改实参
- arguments.length为实参的个数（Function.length表示形参长度）
- arguments.callee为当前正在执行的函数本身，使用这个属性进行递归调用时需注意this的变化
- arguments.caller为调用当前函数的函数（已被遗弃）
- 转换为数组：<code>var args = Array.prototype.slice.call(arguments, 0);</code>
:::

### DOM事件模型是如何的,编写一个EventUtil工具类实现事件管理兼容

:::details

- DOM事件包含捕获（capture）和冒泡（bubble）两个阶段：捕获阶段事件从window开始触发事件然后通过祖先节点一次传递到触发事件的DOM元素上；冒泡阶段事件从初始元素依次向祖先节点传递直到window
- 标准事件监听elem.addEventListener(type, handler, capture)/elem.removeEventListener(type, handler, capture)：handler接收保存事件信息的event对象作为参数，event.target为触发事件的对象，handler调用上下文this为绑定监听器的对象，event.preventDefault()取消事件默认行为，event.stopPropagation()/event.stopImmediatePropagation()取消事件传递
- 老版本IE事件监听elem.attachEvent('on'+type, handler)/elem.detachEvent('on'+type, handler)：handler不接收event作为参数，事件信息保存在window.event中，触发事件的对象为event.srcElement，handler执行上下文this为window使用闭包中调用handler.call(elem, event)可模仿标准模型，然后返回闭包，保证了监听器的移除。event.returnValue为false时取消事件默认行为，event.cancleBubble为true时取消时间传播
- 通常利用事件冒泡机制托管事件处理程序提高程序性能。

```js
/**
 * 跨浏览器事件处理工具。只支持冒泡。不支持捕获
 * @author  (qiu_deqing@126.com)
 */

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
            var wrapper = function () {
              var event = window.event;
              event.target = event.srcElement;
              handler.call(elem, event);
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
    },
    /**
     * keypress事件跨浏览器获取输入字符
     * 某些浏览器在一些特殊键上也触发keypress，此时返回null
     **/
     getChar: function (event) {
        if (event.which == null) {
            return String.fromCharCode(event.keyCode);  // IE
        }
        else if (event.which != 0 && event.charCode != 0) {
            return String.fromCharCode(event.which);    // the rest
        }
        else {
            return null;    // special key
        }
     }
};
```

:::

### 评价一下三种方法实现继承的优缺点,并改进

:::details

```js
function Shape() {}

function Rect() {}

// 方法1
Rect.prototype = new Shape();

// 方法2
Rect.prototype = Shape.prototype;

// 方法3
Rect.prototype = Object.create(Shape.prototype);

Rect.prototype.area = function () {
  // do something
};
```

方法1：

1. 优点：正确设置原型链实现继承
2. 优点：父类实例属性得到继承，原型链查找效率提高，也能为一些属性提供合理的默认值
3. 缺点：父类实例属性为引用类型时，不恰当地修改会导致所有子类被修改
4. 缺点：创建父类实例作为子类原型时，可能无法确定构造函数需要的合理参数，这样提供的参数继承给子类没有实际意义，当子类需要这些参数时应该在构造函数中进行初始化和设置
5. 总结：继承应该是继承方法而不是属性，为子类设置父类实例属性应该是通过在子类构造函数中调用父类构造函数进行初始化

方法2：

1. 优点：正确设置原型链实现继承
2. 缺点：父类构造函数原型与子类相同。修改子类原型添加方法会修改父类

方法3：

1. 优点：正确设置原型链且避免方法1.2中的缺点
2. 缺点：ES5方法需要注意兼容性

改进：

1. 所有三种方法应该在子类构造函数中调用父类构造函数实现实例属性初始化

```js
function Rect() {
    Shape.call(this);
}
```

2. 用新创建的对象替代子类默认原型，设置``Rect.prototype.constructor = Rect;``保证一致性
3. 第三种方法的polyfill：

```js
function create(obj) {
    if (Object.create) {
        return Object.create(obj);
    }

    function f() {};
    f.prototype = obj;
    return new f();
}
```

:::

### 如何判断一个对象是否为数组

:::details

如果浏览器支持Array.isArray()可以直接判断否则需进行必要判断

```js
/**
 * 判断一个对象是否是数组，参数不是对象或者不是数组，返回false
 *
 * @param {Object} arg 需要测试是否为数组的对象
 * @return {Boolean} 传入参数是数组返回true，否则返回false
 */
function isArray(arg) {
    if (typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}
```

:::

### 如何判断一个对象是否为函数

:::details

```js
/**
 * 判断对象是否为函数，如果当前运行环境对可调用对象（如正则表达式）
 * 的typeof返回'function'，采用通用方法，否则采用优化方法
 *
 * @param {Any} arg 需要检测是否为函数的对象
 * @return {boolean} 如果参数是函数，返回true，否则false
 */
function isFunction(arg) {
    if (arg) {
        if (typeof (/./) !== 'function') {
            return typeof arg === 'function';
        } else {
            return Object.prototype.toString.call(arg) === '[object Function]';
        }
    } // end if
    return false;
}
```

:::

### 以下函数的作用是?空白区域应该填写什么

:::details

```js
// define
(function (window) {
    function fn(str) {
        this.str = str;
    }

    fn.prototype.format = function () {
        var arg = __1__;
        return this.str.replace(__2__, function (a, b) {
            return arg[b] || '';
        });
    };

    window.fn = fn;
})(window);

// use
(function () {
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome'));
})();
```

define部分定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format实参用来替换模板内标记
横线处填：

1. ``Array.prototype.slice.call(arguments, 0)``
2. ``/\{\s*(\d+)\s*\}/g``
:::

### BOM和DOM

- BOM Browser Object Model
？
- DOM Document Object Model
？

### 作用域

:::details

- 作用域

作用域指的是您有权访问的变量集合。
>
>`JavaScript` 拥有函数作用域：每个函数创建一个新的作用域。
>
>作用域决定了这些变量的可访问性（可见性）。
>
>函数内部定义的变量从函数外部是不可访问的（不可见的）。

- 全局作用域 局部作用域
  - **全局作用域:**函数之外声明的变量，会成为全局变量。全局变量的作用域是全局的：网页的所有脚本和函数都能够访问它。
  - **局部作用域:**在 `JavaScript` 函数中声明的变量，会成为函数的局部变量。局部变量的作用域是局部的：只能在函数内部访问它们。

\* `JS`是没有块级作用域的。这意味着在块语句中定义的变量，实际是在函数中创建的，而不是语句中。函数可以模仿块级作用域。

- 作用域链

因为函数的嵌套形成作用域的层级关系。当函数执行时，从当前的执行作用域开始查找变量，没有找到的变量，会向外层嵌套的作用域中继续查找，直到找到该变量，或抵达最外层的全局作用域为止，这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

>
>- 在 `JavaScript` 中，作用域为 `function(){}`内的区域，称为函数作用域。
>- 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节

**作用域链的用途:**保证执行环境有权访问的所有变量和函数的有序访问。
**延长作用域链:**执行环境的类型只有两种，全局和局部（函数）。但是有些语句可以在作用域链的前端临时增加一个变量对象，该变量对象会在代码执行后被移除。具体来说就是执行这两个语句时，作用域链都会得到加强。

>
>1. try - catch 语句的catch块；会创建一个新的变量对象，包含的是被抛出的错误对象的声明。
>2. with 语句。with 语句会将指定的对象添加到作用域链中。
:::

### 闭包

:::details

**闭包是在某个作用域内定义的函数，它可以访问这个作用域内的所有变量**。闭包作用域链通常包括三个部分：

1. 函数本身作用域。
2. 闭包定义时的作用域。
3. 全局作用域。

闭包常见用途：

1. 创建特权方法用于访问控制
2. 事件处理程序及回调

**《你不知道的javaScript》对于闭包是这么定义的：**函数创建和函数执行不在同一个作用域下就会形成闭包。

**MDN对于闭包的定义为：**闭包是指那些能够访问自由变量的函数。

**《JS高级程序设计-第3版》对于闭包的定义:** 闭包是指有权访问另外一个函数作用域中的变量的函数

**自由变量：**是指在函数中使用的变量即不是函数参数`arguments`也不是函数内部声明的变量，那这个变量就是自由变量。

闭包得符合两个条件：

1. 函数执行完毕，函数内部创建的东西被函数外部引用了，形成不销毁的栈内存
2. 在代码中引用了自由变量
[这里](https://zhuanlan.zhihu.com/p/250432609)
闭包的原理就是作用域链，比函数F内部有一个函数G，函数 G可以访问到函数F中的变量，那么函数G就是闭包。

```js
 function F() {
      let a = 1
      window.G = function () {
        console.log(a)
      }
    }
    F()
    G() // 1
```

:::

### 内存泄漏有哪些

1. 闭包

### 深浅拷贝

:::details

- 浅拷贝

```js
Object.assign()    //es6的方法
```

`Object.assign`会合并对象生成一个新对象。如果对象的属性是普通类型改变之后新对象不会改变，如果是引用类型改变后新对象也会改变，所以`Object.assign`实际上还是浅拷贝。

```js

var obj={aa:1,b:{item:'45'}};
var newObj=Object.assign({},obj);
obj.aa=2;
obj.b.item='kk';
console.log(newObj.aa);        //1
console.log(newObj.b.item);    //kk

```

- 深拷贝

```js
JSON.parse(JSON.stringify(obj))
```

利用`JSON.stringify(obj)`将对象先转为`json`字符串，再`JSON.parse()`转回为`json`对象可以实现深拷贝，这也是比较常用的一种方法。

用js实现一个深拷贝:

```js
 function cloneDeep(source) {
      if (!isObject(source)) return source; // 非对象返回自身
      var target = Array.isArray(source) ? [] : {};
      for (var key in source) {
        if (source.hasOwnProperty(i)) {
          if (isObject(source[key])) {
            target[key] = cloneDeep(source[key]); // 注意这里
          } else {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
    function isObject(obj) {
      return typeof obj === 'object' && obj != null;
    }
```

:::

### 对象、原型、原型链和继承

- `js`定义对象的几种方式
:::details

1. 对象字面量的方式

```js
var obj={};
```

`new`一个构造函数

```js
function Pel(){}
    var p=new Pel();
    p.name="hu";
    p.age="25";
    p.address=function(){
 }
```

`new`一个内置对象

```js
var obj=new Object();
```

`Object.create(Object.prototype);`创建对象

```js
var test = Object.create({x:1});
```

:::

- `new Object()` 、 `Object.create()`、`{}`，这三种方式创建对象有什么区别?

?

- JS 如何实现一个类
:::details

1. 构造函数法

缺点：用到了 `this` 和 `prototype`，编写复杂，可读性差

```js
function P(name, age){
     this.name = name;
     this.age= age;
   }
   P.prototype.sal= function(){

   }
   var pel= new P("jj", 1);
   pel.sell()
```

2. `class` (ES6 语法糖)

```js
class Point {
       constructor(x, y) {
         this.x = x;
         this.y = y;
       }
       toString() {
         return '(' + this.x + ', ' + this.y + ')';
       }
     }
  var point = new Point(2, 3);
```

:::

- 原型链
:::details

一句话解释什么是原型链:

>遍历一个实列的属性时，先遍历实列对象上的属性，再遍历它的原型对象，一直遍历到Object

任何一个类（函数）都有原型对象，原型对象至少有两个属性（`constructor`,`proto`）。`constructor`指向函数本身，`proto`指向父类原型对象。

函数上有一个`prototype`属性，指向原型对象，通过它可以访问原型对象

函数的实列可以直接访问原型对象(因为实列上有`proto`指向构造函数的原型对象)

```js
function Dog(){}        //类
var obj=new Dog();      //实列
obj.name='沪江';
Dog.prototype.name="旺财";
Dog.prototype.eat=function(){
    console.log(this.name);
};
console.log(Dog.prototype.name);  //旺财
console.log(obj.prototype);      //undefined,prototype是类上才有的，实列上没有
obj.eat();                       //沪江（先遍历实列对象上的属性，再遍历它的原型对象）
```

:::

- 继承
:::details

`Js`如何实现继承？

构造函数绑定：使用 `call` 或 `apply` 方法，将父对象的构造函数绑定在子对象上

```js
function Cat(name,color){
 　Animal.apply(this, arguments);
 　this.name = name;
 　this.color = color;
}
```

实例继承：将子对象的 `prototype` 指向父对象的一个实例

```js
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```

拷贝继承：如果把父对象的所有属性和方法，拷贝进子对象

```js
function extend(Child, Parent) {
　　　var p = Parent.prototype;
　　　var c = Child.prototype;
　　　for (var i in p) {
　　　   c[i] = p[i];
　　　}
　　　c.uber = p;
}
```

原型继承：将子对象的 `prototype` 指向父对象的 `prototype`

```js
function extend(Child, Parent) {
    var F = function(){};
    　F.prototype = Parent.prototype;
    　Child.prototype = new F();
    　Child.prototype.constructor = Child;
    　Child.uber = Parent.prototype;
}
```

`ES6`语法糖 `extends`继承

```js
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
```

:::

### 节流（throttle）

**所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数**。节流会稀释函数的执行频率。
:::details

一般有两种方式可以实现，分别是时间戳版和定时器版。

时间戳版：

```js
function throttle(func, wait) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}
// 例子
content.onmousemove = throttle(count,1000);
```

定时器版:

```js
function throttle(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}
```

可以看到，在持续触发事件的过程中，函数不会立即执行，并且每 `1s` 执行一次，在停止触发事件后，函数还会再执行一次。

我们应该可以很容易的发现，其实时间戳版和定时器版的节流函数的区别就是，时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。

同样地，我们也可以将时间戳版和定时器版的节流函数结合起来，实现双剑合璧版的节流函数。

双剑合璧版:

```js
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait ,type) {
    if(type===1){
        let previous = 0;
    }else if(type===2){
        let timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}
```

:::

### 防抖（debounce）

**所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。**
:::details

防抖函数分为非立即执行版和立即执行版。

```js
// 非立即执行版：
function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}
// 绑定 mousemove 事件的例子
content.onmousemove = debounce(count,1000);
```

非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

立即执行版：

```js
function debounce(func,wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        let callNow = !timeout;
        timeout = setTimeout(() => {
            timeout = null;
        }, wait)

        if (callNow) func.apply(context, args)
    }
}
```

立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

双剑合璧版：

```js
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}
```

[这里](https://www.jianshu.com/p/c8b86b09daf0)

:::

### 浏览器的运行机制：layout：布局

:::details

1. 构建`DOM树`（`parse`）：渲染引擎解析`HTML`文档，首先将标签转换成`DOM`树中的`DOM node`（包括`js`生成的标签）生成内容树（`Content Tree/DOM Tree`）；

2. 构建渲染树（`construct`）：解析对应的`CSS`样式文件信息（包括`js`生成的样式和外部`css`文件），而这些文件信息以及`HTML`中可见的指令（如`<b></b>`），构建渲染树（`Rendering Tree/Frame Tree`）；

3. 布局渲染树（`reflow/layout`）：从根节点递归调用，计算每一个元素的大小、位置等，给出每个节点所应该在屏幕上出现的精确坐标；

4. 绘制渲染树（`paint/repaint`）：遍历渲染树，使用`UI`后端层来绘制每个节点。
:::

### 重绘（repaint或redraw）

:::details

- 什么是重绘
当`render tree`中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如`background-color`。则就叫称为重绘。

当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。

重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

触发重绘的条件：改变元素外观属性。如：`color`，`background-color`等。

注意：`table`及其内部元素可能需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花两倍时间，这就是我们尽量避免使用table布局页面的原因之一。
:::

### 重排（重构/回流/reflow）

:::details

- 什么是回流
当`render tree`中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(`reflow`)。每个页面至少需要一次回流，就是在页面第一次加载的时候，这时候是一定会发生回流的，因为要构建`render tree`。在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。

当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(`reflow`)。每个页面至少需要一次回流，就是在页面第一次加载的时候。

重绘和重排的关系：在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。

所以，重排必定会引发重绘，但重绘不一定会引发重排。

触发重排的条件：任何页面布局和几何属性的改变都会触发重排，比如：

1. 页面渲染初始化；(无法避免)
2. 添加或删除可见的`DOM`元素；
3. 元素位置的改变，或者使用动画；
4. 元素尺寸的改变——大小，外边距，边框；
5. 浏览器窗口尺寸的变化（`resize`事件发生时）；
6. 填充内容的改变，比如文本的改变或图片大小改变而引起的计算值宽度和高度的改变；
7. 读取某些元素属性：（`offsetLeft/Top/Height/Width`,　`clientTop/Left/Width/Height`,　`scrollTop/Left/Width/Height`,　`width/height`,　`getComputedStyle()`,　`currentStyle(IE)`　)
:::

**重绘重排的代价：耗时，导致浏览器卡慢。**
:::details 优化：

- 浏览器自己的优化：浏览器会维护`1`个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。

- 我们要注意的优化：我们要减少重绘和重排就是要减少对渲染树的操作，则我们可以合并多次的`DOM`和样式的修改。并减少对`style`样式的请求。
    1. 直接改变元素的`className`
    2. `display：none`；先设置元素为`display：none`；然后进行页面布局等操作；设置完成后将元素设置为`display：block`；这样的话就只引发两次重绘和重排；
    3. 不要经常访问浏览器的flush队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流；
    4. 使用`cloneNode`(`true or false`) 和 `replaceChild` 技术，引发一次回流和重绘；
    5. 将需要多次重排的元素，`position`属性设为`absolute`或`fixed`，元素脱离了文档流，它的变化不会影响到其他元素；
    6. 如果需要创建多个`DOM`节点，可以使用`DocumentFragment`创建完后一次性的加入`document`；
:::
　　
### 重绘和重排的区别

回流必将引起重绘，而重绘不一定会引起回流。比如：只有颜色改变的时候就只会发生重绘而不会引起回流
当页面布局和几何属性改变时就需要回流
比如：添加或者删除可见的`DOM`元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变

### 变量声明 var 和 let const (es6)

:::details

- 在 `JavaScript` 中，函数声明（`function aa(){}`）与变量声明（`var`）经常被 `JavaScript` 引擎隐式地提升到当前作用域的顶部。
- 函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明
- 声明语句中的赋值部分并不会被提升，只有变量的名称被提升
:::

### var let const 异同

- var
var 有声明提升
可以重复声明一个变量

- let是更完美的var
let声明的变量拥有块级作用域
let声明的全局变量不是全局对象的属性
用let重定义变量会抛出一个语法错误（SyntaxError）

- const
声明一个常量
不能重复声明一个变量
声明后，马上赋值，否则报错

### new和this

:::details

- `new` 操作符具体干了什么？

>当我们`new`一个数据的时候，`new`操作符到底做了什么？
>
>- 首先是创建实例对象`{}`
>- `this` 变量引用该对象，同时还继承了构造函数的原型
>- 其次属性和方法被加入到 `this` 引用的对象中
>- 并且新创建的对象由 `this` 所引用，最后隐式的返回 `this`
>
- `new`的模拟实现

```js
function objectFactory() {

    var obj = new Object(),//从Object.prototype上克隆一个对象

    Constructor = [].shift.call(arguments);//取得外部传入的构造器

    var F=function(){};
    F.prototype= Constructor.prototype;
    obj=new F();//指向正确的原型

    var ret = Constructor.apply(obj, arguments);//借用外部传入的构造器给obj设置属性

    return typeof ret === 'object' ? ret : obj;//确保构造器总是返回一个对象

};
```

- `this` 对象的理解

普通函数

>- this 总是指向函数的直接调用者
>- 如果有 new 关键字，this 指向 new 出来的实例对象
>- 在事件中，this 指向触发这个事件的对象
>- IE 下 attachEvent 中的 this 总是指向全局对象 Window
>- 箭头函数中，函数体内的this对象，就是定义时所在作用域的对象，而不是使用时所在的作用域的对象。

```js
function foo() {
  console.log(this.a)
}
var a = 1
foo()           //1
​
const obj = {
  a: 2,
  foo: foo
}
obj.foo()      //2
​
const c = new foo()   //undefined
```

>- 对于直接调用 `foo` 来说，不管 `foo` 函数被放在了什么地方，`this`一定是`window`
>- 对于 `obj.foo()` 来说，我们只需要记住，谁调用了函数，谁就是 `this`，所以在这个场景下 `foo` 函数中的 `this` 就是 `obj` 对象
>- 对于 new 的方式来说，`this` 被永远绑定在了 new出来的对象上，不会被任何方式改变 `this`

以上几种情况，在很多代码中的 `this` 应该就没什么问题了，下面再看看箭头函数中的 `this`

```js
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
a()()()
```
>
>- 首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind这类函数是无效的。
>
:::

### apply、call、bind

:::details

call、apply和bind是Function对象自带的三个方法，都是为了改变函数体内部 this 的指向。
apply 、 call 、bind 三者第一个参数都是 this 要指向的对象，也就是想指定的上下文；
apply 、 call 、bind 三者都可以利用后续参数传参；
bind 是返回对应 函数，便于稍后调用；apply 、call 则是立即调用 。

```js
function fruits() {}

fruits.prototype = {
 color: 'red',
 say: function() {
  console.log(this.color);
 }
};

var apple = new fruits();

apple.say();   // red, 此时方法里面的this 指的是fruits

banana = {color: 'yellow'};
apple.say.call(banana); //yellow,此时的this的指向已经通过call（）方法改变了，指向的是banana，this.color就是banana.color='yellow';

apple.say.apply(banana);//yellow,同理，此时的this的指向已经通过apply（）方法改变了，指向的是banana，this.color就是banana.color ='yellow';

apple.say.apply(null); //undefined, null是window下的，此时，this 就指向了window ，但是window下并没有clolr这个属性，因此this.clolr就是window.color=undefined;
```

call 传入参数列表
apply 传入数组

```js
var array1 = [12,'foo'];
var array2 = ['Doe',100];

Array.prototype.push.call(array1, 'Doe',100)
Array.prototype.push.apply(array1, array2)
```

bind() 方法会创建一个 新函数，当调用这个新函数时，新函数会以创建它时传入 bind() 方法的第一个参数 作为 this，传入 bind() 方法的 第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

```js
var bar = function(){
 console.log(this.x);
};
var foo = {
 x:3
};
bar();    // undefined
var func = bar.bind(foo);

func(); // 3
```

:::

### 暂时性死区

### ajax步骤

:::details

1. 创建异步对象

创建`XMLHttpRequest()`对象

```js
//
var xmlHttpRequest;  //定义一个变量,用于存放XMLHttpRequest对象
createXMLHttpRequest();   //调用创建对象的方法
//创建XMLHttpRequest对象的方法-- 设置浏览器兼容
function createXMLHttpRequest(){
    if(window.ActiveXObject) {//判断是否是IE浏览器
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");//创建IE的XMLHttpRequest对象
    }else if(window.XMLHttpRequest){
        //判断是否是Netscape等其他支持XMLHttpRequest组件的浏览器
        xmlHttpRequest = new XMLHttpRequest();//创建其他浏览器上的XMLHttpRequest对象
    }
// 如果浏览器既不支持ActiveX控件,也不支持XMLHttpRequest组件,那么就不会对xmlHttpRequest变量赋值.
```

2. 给异步对象绑定事件

设置响应`HTTP`请求状态变化的回调函数

`xmlHttpRequest.onreadystatechange=function(){}`

:::details 设置获取服务器返回数据的语句

- 设置获取服务器返回数据的语句
创建完`HTTP`请求之后，应该就可以将`HTTP`请求发送给`Web`服务器了。然而，发送`HTTP`请求的目的是为了接收从服务器中返回的数据。从创建`XMLHttpRequest`对象开始，到发送数据、接收数据、`XMLHttpRequest`对象一共会经历以下`5`中状态。

>
>1. 未初始化状态--`0`。在创建完`XMLHttpRequest`对象时，该对象处于未初始化状态，此时`XMLHttpRequest`对象的`readyState`属性值为`0`。
>2. 初始化状态--`1`。在创建完`XMLHttpRequest`对象后使用`open()`方法创建了`HTTP`请求时，该对象处于初始化状态。此时`XMLHttpRequest`对象的`readyState`属性值为`1`。
>3. 发送数据状态--`2`。在初始化`XMLHttpRequest`对象后，使用``send()``方法发送数据时，该对象处于发送数据状态，此时`XMLHttpRequest`对象的`readyState`属性值为`2`。
>4. 接收数据状态--`3`。`Web`服务器接收完数据并进行处理完毕之后，向客户端传送返回的结果。此时，`XMLHttpRequest`对象处于接收数据状态，`XMLHttpRequest`对象的`readyState`属性值为`3`。
>5. 完成状态--`4`。`XMLHttpRequest`对象接收数据完毕后，进入完成状态，此时`XMLHttpRequest`对象的`readyState`属性值为`4`。此时接收完毕后的数据存入在客户端计算机的内存中，可以使用`responseText`属性或`responseXml`属性来获取数据。

只有在`XMLHttpRequest`对象完成了以上`5`个步骤之后，才可以获取从服务器端返回的数据。因此，如果要获得从服务器端返回的数据，就必须要先判断`XMLHttpRequest`对象的状态。

`XMLHttpRequest`对象可以响应`onreadystatechange`事件，该事件在`XMLHttpRequest`对象状态改变时（也就是`readyState`属性值改变时）激发。因此，可以通过该事件调用一个函数，并在该函数中判断`XMLHttpRequest`对象的`readyState`属性值。如果`XMLHttpRequest`对象的`readyState`属性值等于`4`，表示异步调用过程完毕，就可以通过`XMLHttpRequest`对象的`responseText`属性或`responseXml`属性来获取数据。

```js
function getData(){
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState == 4) {
        //设置获取数据的语句
    }
}
```

但是，异步调用过程完毕，并不代表异步调用成功了，如果要判断异步调用是否成功，还要判断`XMLHttpRequest`对象的`status`属性值，只有该属性值为`200`，才表示异步调用成功，因此，要获取服务器返回数据的语句，还必须要先判断`XMLHttpRequest`对象的`status`属性值是否等于`200`，如以下代码所示：

```js
 if(xmlHttpRequst.status == 200) {
    document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
    //document.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
 }
```

注意：如果`HTML`文件不是在`Web`服务器上运行，而是在本地运行，则`xmlHttpRequest.status`的返回值为`0`。因此，如果该文件在本地运行，则应该加上`xmlHttpRequest.status == 0`的判断。

通常将以上代码放在响应`HTTP`请求状态变化的函数体内，如以下代码所示：

```js
//定义函数
function getData(){
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState==4){
        if(xmlHttpRequest.status == 200 || xmlHttpRequest.status == 0){//设置获取数据的语句
            document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
            //docunment.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
        }
    }
}
```

:::

```js

//设置当XMLHttpRequest对象状态改变时调用的函数，注意函数名后面不要添加小括号
xmlHttpRequest.onreadystatechange = getData;

//定义函数
function getData(){
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState==4){
        if(xmlHttpRequest.status == 200 || xmlHttpRequest.status == 0){//设置获取数据的语句
            document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
            //docunment.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
        }
    }
}
```

3. 初始化异步请求对象

`open()`创建`HTTP`请求

创建了`XMLHttpRequest`对象之后，必须为`XMLHttpRequest`对象创建`HTTP`请求，用于说明`XMLHttpRequest`对象要从哪里获取数据。通常可以是网站中的数据,也可以是本地中其他文件中的数据。

创建`HTTP`请求可以使用`XMLHttpRequest`对象的`open()`方法,其语法代码如下所示:

```js
XMLHttpRequest.open(method,URL,flag,name,password);
```

参数如下:

- `method`：该参数用于指定`HTTP`的请求方法，一共有`get`、`post`、`head`、`put`、`delete`五种方法，常用的方法为`get`和`post`。

- `URL：`该参数用于指定`HTTP`请求的`URL`地址，可以是绝对`URL`，也可以是相对`URL`。

- `flag：`该参数为可选，参数值为布尔型。该参数用于指定是否使用异步方式。`true`表示异步、`false`表示同步，默认为`true`。

- `name：`该参数为可选参数，用于输入用户名。如果服务器需要验证，则必须使用该参数。

- `password：`该参数为可选，用于输入密码。若服务器需要验证，则必须使用该参数。

通常可以使用以下代码来访问一个网站文件的内容。

```js
// 例如
xmlHttpRequest.open("get","http://www.aspxfans.com/BookSupport/JavaScript/ajax.htm",true);
```

或使用以下代码来访问一个本地文件内容：

```js
xmlHttpRequest.open("get","ajax.htm",true);
```

>注意
>如果`HTML`文件放在`Web`服务器上，在`Netscape`浏览器中的`JavaScript`安全机制不允许与本机之外的主机进行通信。也就是说，使用`open()`方>法只能打开与`HTML`文件在同一个服务器上的文件。而在`IE`浏览器中则无此限制（虽然可以打开其他服务器上的文件，但也会有警告提示）。

4. 发送`HTTP`请求

在经过以上几个步骤的设置之后，就可以将`HTTP`请求发送到`Web`服务器上去了。发送`HTTP`请求可以使用`XMLHttpRequest`对象的`send()`方法，其语法代码如下所示：

```js
XMLHttpRequest.send(data);
```

其中`data`是个可选参数，如果请求的数据不需要参数，即可以使用`null`来替代。`data`参数的格式与在`URL`中传递参数的格式类似，以下代码为一个`send()`方法中的`data`参数的示例：

```js
name=myName&value=myValue
```

只有在使用`send()`方法之后，`XMLHttpRequest`对象的`readyState`属性值才会开始改变，也才会激发`readystatechange`事件，并调用函数。

5. 局部更新(使用接收的数据)

在通过`Ajax`的异步调用获得服务器端数据之后，可以使用`JavaScript`或`DOM`来将网页中的数据进行局部更新。

完整实例：

```html
<html>
<head>
<title>AJAX实例</title>
<script language="javascript" type="text/javascript">
    // 第一步 初始化异步对象
    var xmlHttpRequest;  //定义一个变量用于存放XMLHttpRequest对象
    //定义一个用于创建XMLHttpRequest对象的函数
    function createXMLHttpRequest(){
        if(window.ActiveXObject){//IE浏览器的创建方式
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }else if(windew.XMLHttpRequest){//Netscape浏览器中的创建方式
            xmlHttpRequest = new XMLHttpRequest();
        }
    }
    //响应HTTP请求状态变化的回调函数
    function httpStateChange(){
        if(xmlHttpRequest.readyState == 4){//判断异步调用是否成功,若成功开始局部更新数据
            if(xmlHttpRequest.status == 200||xmlHttpRequest.status == 0) {
                var node = document.getElementById("myDIv");//查找节点
                node.firstChild.nodeValue = xmlHttpRequest .responseText;//更新数据
            } else {//如果异步调用未成功,弹出警告框,并显示出错信息
                alert("error:HTTP状态码为:"+xmlHttpRequest.status + ",HTTP状态信息为:" + xmlHttpRequest.statusText);
            }
        }
    }
    // 元素中的按钮执行调用本函数 -- 异步调用服务器段数据
    function getData(name,value){
        createXMLHttpRequest();//创建XMLHttpRequest对象
        if(xmlHttpRequest!=null){
            // 第三步 创建HTTP请求
            xmlHttpRequest.open("get","ajax.text",true);
            // 第二步 绑定事件执行回调函数
            xmlHttpRequest.onreadystatechange = httpStateChange;//HTTP请求状态变化的函数
            // 第四步 发送请求
            xmlHttpRequest.send(null);
        }
    }
</script>
</head>
<body>
    <div id="myDiv">原数据</div>
    <input type = "button" value = "更新数据" onclick = "getData()">
</body>
</html>
```

:::

- ajax 清除缓存的方法
?

### ajax 的优缺点

### jsonp 跨域，其他方式

### 数据类型

### 数据类型方法 -- 增删查改，同类方法对比

### reduce计算 数组，数组里是对象时

### find() findIndex()

### Event Loop

:::details

- 宏任务/微任务:除了广义的同步任务和异步任务，我们对任务有更精细的定义：
  - `macro-task`(宏任务)：当前调用栈中执行的任务称为宏任务。包括：`script`全部代码、`setTimeout`、`setInterval`、`setImmediate`（浏览器暂时不支持，只有`IE10`支持，具体可见[`MDN`](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate)）、`I/O`、`UI Rendering`。
  - `micro-task`(微任务)： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务为微任务。包括：`Process.nextTick`（`Node`独有）、`Promise`、`Object.observe(废弃)`、`MutationObserver`.
不同类型的任务会进入对应的`Event Queue`，宏任务中的事件放在`callback queue`中，由事件触发线程维护；微任务的事件放在微任务队列中，由`js`引擎线程维护。
- 一句话解析下什么是`event loop`

>主线程运行的时候会生成堆（`heap`）和栈（`stack`）；
>`js` 从上到下解析方法，将其中的同步任务按照执行顺序排列到执行栈中；
>当程序调用外部的 `API` 时（比如 `ajax`、`setTimeout` 等），会将此类异步任务挂起，继续执行执行栈中的任务。等异步任务返回结果后，再按照顺序排列到事件队列中；
>主线程先将执行栈中的同步任务清空，然后检查事件队列中是否有任务，如果有，就将第一个事件对应的回调推到执行栈中执行，若在执行过程中遇到异步任务，则继续将这个异步任务排列到事件队列中。
>主线程每次将执行栈清空后，就去事件队列中检查是否有任务，如果有，就每次取出一个推到执行栈中执行，这个循环往复的过程被称为“`Event Loop`事件循环”
[详解](https://zhuanlan.zhihu.com/p/137454082)
:::

### 浏览器页面渲染过程

:::details

浏览器渲染页面的一般过程：

1. 浏览器解析`html`源码，然后创建一个 `DOM`树。并行请求 `css`/`image`/`js`在`DOM`树中，每一个`HTML`标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。`DOM`树的根节点就是 `documentElement`，对应的是`html`标签。

2. 浏览器解析`CSS`代码，计算出最终的样式数据。构建`CSSOM`树。对`CSS`代码中非法的语法它会直接忽略掉。解析`CSS`的时候会按照如下顺序来定义优先级：浏览器默认设置 < 用户设置 < 外链样式 < 内联样式 < `html`中的`style`。

3. `DOM Tree` + `CSSOM` --> 渲染树（`rendering tree`）。渲染树和`DOM`树有点像，但是是有区别的。

`DOM`树完全和`html`标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如`head`、`display:none`的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。渲染树中的每一个节点都存储有对应的`css`属性。

4. 一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。

以上四个步骤并不是一次性顺序完成的。如果`DOM`或者`CSSOM`被修改，以上过程会被重复执行。实际上，`CSS`和`JavaScript`往往会多次修改`DOM`或者`CSSOM`。
:::

### 浏览器缓存/本地存储

面试中问到比较多的就是强缓存和协商缓存了,[直接看这篇](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzI5MjU0Mjk5MA%3D%3D%26mid%3D2247483826%26idx%3D2%26sn%3De38f5e5b928a6aa5c15371505b4e8d71%26chksm%3Dec7e8ed3db0907c545393ea90ee8bfd7dc944ff013957228b200d66929767251b1982340d036%26token%3D816776520%26lang%3Dzh_CN%23rd).

### map类型和set类型 es6

### promase

### 模板字符串优点

## jq

### jq + bootstrap

- `jq`可以双向数据绑定
- `jq`链式调用原理
- `jq`的`ajax`实现跨域，原理
- `js`对象和原生对象相互转换，语法
- `bootstrap` 栅格原理， 媒体查询-- `flex`

## vue

概述： vue是数据驱动视图的单页面的渐进式 MVVM 框架

### vue指令

- `v-model` ：数据双向绑定
- `v-once`：只绑定一次
- `v-if,v-else-if,v-else` : 控制元素的加载与销毁
- `v-show`：控制元素的显示和隐藏，控制display：none
- `v-html` ：解析`DOM`元素标签
- `v-text` ：解析文本，
- `v-for` ：使用`v-for`必须加`key`，
- `v-bind`：绑定属性，传入变量，简写`:`
- `v-on` ：绑定事件，简写 `@`
- `v-slot` ：插槽 ，配合`template`使用

### 生命周期

### 内置组件

### 组件通信

### 自定义组件，自定义属性

### vuex 原理 流程，vuex 如何做本地数据持久化

### computed 和 watch 的区别

:::details

区别：　　

- computed

  - 初始化显示或者相关的 data、props 等属性数据发生变化的时候调用；

  - 计算属性不在 data 中，它是基于data 或 props 中的数据通过计算得到的一个新值，这个新值根据已知值的变化而变化；

  - 在 computed 属性对象中定义计算属性的方法，和取data对象里的数据属性一样，以属性访问的形式调用；

  - 如果 computed 属性值是函数，那么默认会走 get 方法，必须要有一个返回值，函数的返回值就是属性的属性值；

  - computed 属性值默认会缓存计算结果，在重复的调用中，只要依赖数据不变，直接取缓存中的计算结果，只有依赖型数据发生改变，computed 才会重新计算；

  - 在computed中的，属性都有一个 get 和一个 set 方法，当数据变化时，调用 set 方法。

- watch

  - 主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作，可以看作是 computed 和 methods 的结合体；

  - 可以监听的数据来源：data，props，computed内的数据；

  - watch支持异步；

  - 不支持缓存，监听的数据改变，直接会触发相应的操作；

  - 监听函数有两个参数，第一个参数是最新的值，第二个参数是输入之前的值，顺序一定是新值，旧值。

[详解](https://www.cnblogs.com/dhui/p/12957862.html)
:::

### router

#### router和route的区别

- $router是什么？

`$router`是一个全局路由对象，是`VueRouter`的实例，我们可以在任何地方使用它。

- 常用方法：

作为全局路由对象，它包含了许多属性。譬如：`history`对象。

```js
this.$router.push('/user')  // 跳转路由
this.$router.replace('/user')   // 跳转路由，但是不会有记录，不入栈。
```

- $route是什么？

$route是一个局部对象，表示当前正在跳转的路由对象。

- 常用：

1. 使用`params`传递参数

```js
//  使用带params的路由跳转
this.$router.push({name:'user',params:{id:1}})
//  对应取参
this.$route.params.id
```

注：使用params进行传参时，只能使用name，不然取参取不到

2. 在path中进行配置（与params类似）

```js
this.$router.push(`/user/${userId}`)
// 这时路由需要进行特殊配置
   {
     path: '/user/:userId',
     name: 'user',
     component: components['user']
   }
//  对应取参
this.$route.params.id
```

3. 使用query

```js
//  使用query
this.$router.push({path: '/user',query:{userId:2}})

//  对应取参
this.$route.query   // get请求url后面带的查询参数
```

#### params与query使用区别

- url上

`params`方式，在`url`中不会将传递的参数进行显示，类似于`post`，相对安全。
`query`方式，在`url`中会将传递的参数进行展示，类似于`get`，不安全。

- 用法

`params`需要用`name`引入，`query`需要`path`引入。

#### 路由守卫

路由拦截，路由传参，路由模式， 路由配置--嵌套路由，动态路由

- `Vue-router` 路由生命周期也叫导航守卫

分3块：全局守卫、路由独立守卫、组件内守卫

1. 全局守卫 `main.js`

```js
router.beforeEach((to, from, next) => {
  // 全局前置守卫
  // if(to.fullPath === '/shoppingCart'){
  //   //如果没有登录?对不起先去登录一下
  //   next('/login')
  // }
  console.log('1 beforeEach', to, from)
  next()
})
// 时间触发比 全局前置守卫慢些
router.beforeResolve((to, from, next) => {
  // 全局解析守卫
  console.log('3 beforeResolve', to, from)
  next()
})

router.afterEach((to, from) => {
  // 全局后置守卫、钩子
  console.log('4 afterEach', to, from)

})

```

2. 路由独立守卫 `router.js`

```js
{
    path: '/a',
    name: 'pageA',
    components:{
      default:pageA,
      ppp:Test
    },
    beforeEnter:(to,from,next)=>{
      console.log('2 beforeEnter',to,from)
      next()
    },
  },
```

3. 组件内守卫  xxx.vue

```js
export default {
  beforeRouteEnter(to,from,next){
    //这里 拿不到this
    // 路由跳转，使用此组件时触发
    console.log('beforeRouteEnter',to,from)
    next()
  },
  beforeRouteUpdate(to,from,next){
    //可以获取 this
    // /a/123 /a/456  当 组件被复用时，触发此方法
    console.log('beforeRouteUpdate',to,from)
    next()
  },
  beforeRouteLeave(to,from,next){
    //可以获取this
    //路由跳转，不适用此组件时触发
    console.log('beforeRouteLeave',to,from)
    next()
  }
}
```

### keep-allive清除缓存

## react

概述 单向数据绑定的单页面MVVM模式框架 ，
单项数据绑定，单向数据流，自上而下传递的数据，修改只能有上游修改
setState()修改数据

### 循环渲染

原生map方法

### 条件渲染

使用表达式 `&& || !`

### 组件通信

- 父传子 props
- 子传父 调用父组件的传过来的函数方法
- 跨级通信：context 上下文对象

### 生命周期

- constructor()
- render()
- componentDidMount()
- componentDidUpate()
- componentWillUnMount()

### 无状态组件 - 函数组件

展示ui的
运行快

### 类组件 --class组件

有react全部特性，生命周期，state状态
常驻内存

### state 和props异同

state是自身的，可以直接修改，props是父级传递的，不能被修改

### hooks

使用函数式编程，所有的状态，生命周期，上下文对象等，都独立函数，用的时候，从react中结构出来
好处是，减少了打包时候代码的体积。hook只能配合函数组件使用。
useState ：修改的时候，新值替换旧值，

### redux

状态管理器 是一个独立的插件，单向数据流

- 组成部分 reducer actions store
- 流程图
- 常用Api
  - store
    - 获取getState
    - 修改派发dispatch
    - 订阅subscribe
  - redux：
    - createStore() 创建仓库
    - applyMiddleware() 安装中间件
    - composer() 包裹多个中间件
- Reducer 必须是一个纯函数
  - 接受两个参数，一个state状态，一个action对象，
    - state不可以修改，是只读的，所以返回一个新的state，state修改state
    - action 是dispatch传递过来的，通过type属性配合业务处理(必须有type)
- 什么是纯函数

### react-Redux

是官方出的一个用于配合redux的组件
其中Provider是状态容器组件，使用store属性注册redux实例对象

后代组件里使用connect 函数进行连接redux，从而获取state和派发action

### react-router

匹配模式，贪婪模式
路由配置：嵌套路由，动态路由
路由传参方式 : search state hash params
路由拦截 Prompt 长方法
路由组成 容器 BrowserRouter 导航 NavLink  配置/线路 Route (router 是路由器)
高阶函数 withRouter 把一个非路由组件包裹，让组件有路由信息
路由跳转方式 2种，导航跳转 ，js跳转 props.histroy

## 小程序

- 面向对象中构造函数、原型和对象三者之间的关系？

答：构造函数是用来实例化对象的，而原型中的所有属性都会继承给其对象

- 小程序中如何从wxml文件中向js文件中传数据？

答：三步：

  1. 给要传数据的组件绑定事件，
  2. 在该组件中设置data-xxx的属性来传数据
  3. 在js文件中利用事件的事件对象的data属性即可接收到wxml传递的数据

- 小程序事件分为哪两类，有什么特点？

答：事件分为冒泡事件(`bind:xxx=''`) 和非冒泡事件(`catch:xxx=''`)
冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

- 如何设置微信小程序的缓存？

- 简历

### 面向对象

[视频讲解](https://www.bilibili.com/video/BV1Xy4y1v7S2?p=13&spm_id_from=pageDriver)

面向对象是程序中一个非常重要的思想，它被很多同学理解成了一个比较难，比较深奥的问题，其实不然。面向对象很简单，简而言之就是程序之中所有的操作都需要通过对象来完成。

- 举例来说：
  - 操作浏览器要使用 window 对象
  - 操作网页要使用 document 对象
  - 操作控制台要使用 console 对象

一切操作都要通过对象，也就是所调的面向对象，那么对象到底是什么呢？这就要先说到程序是什么，计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。程序也是对事物的抽象，在程序中我们可以表示一个人、一条狗、一把枪、一颗子弹等等所有的事物。一个事物到了程序中就变成了一个对象。

在程序中所有的对象都被分成了两个部分数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉这些属于人的功能。数据在对象中被成为属性，而功能就被称为方法。所以简而言之，在程序中一切皆是对象。
