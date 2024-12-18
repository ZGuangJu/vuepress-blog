---
title: Node.js 是什么？
date: 2018-12-21
sidebar: 'auto'
categories:
 - 后端技术
tags:
 - Node.js
publish: true
# 打赏
showSponsor: true
---
## nodejs 到底是什么

- 它是【谷歌内核环境】v8 引擎。就是在我们电脑里安装了一个全局的谷歌浏览器。
- 它可以解析 js
用处：让前端的代码实现在服务器端

<!-- more -->

一种javascript的运行环境，能够使得javascript脱离浏览器运行。

- 如果你去年注意过技术方面的新闻，我敢说你至少看到node.js不下一两次。那么问题来了“node.js是什么？”。有些人没准会告诉你“这是一种通过JavaScript语言开发web服务端的东西”。如果这种晦涩解释还没把你搞晕，你没准会接着问：“为什么我们要用node.js？”，别人一般会告诉你：node.js有非阻塞，事件驱动I/O等特性，从而让高并发（high concurrency）在的轮询（Polling）和comet构建的应用中成为可能。

- 当你看完这些解释觉得跟看天书一样的时候，你估计也懒得继续问了。不过没事。我这篇文章就是在避开高端术语的同时，帮助你你理解node.js的。

- 浏览器给网站发请求的过程一直没怎么变过。当浏览器给网站发了请求。服务器收到了请求，然后开始搜寻被请求的资源。如果有需要，服务器还会查询一下数据库，最后把响应结果传回浏览器。不过，在传统的web服务器中（比如Apache），每一个请求都会让服务器创建一个新的进程来处理这个请求。

- 后来有了Ajax。有了Ajax，我们就不用每次都请求一个完整的新页面了，取而代之的是，每次只请求需要的部分页面信息就可以了。这显然是一个进步。但是比如你要建一个FriendFeed这样的社交网站（类似人人网那样的刷朋友新鲜事的网站），你的好友会随时的推送新的状态，然后你的新鲜事会实时自动刷新。要达成这个需求，我们需要让用户一直与服务器保持一个有效连接。目前最简单的实现方法，就是让用户和服务器之间保持长轮询（long polling）。

- HTTP请求不是持续的连接，你请求一次，服务器响应一次，然后就完了。长轮训是一种利用HTTP模拟持续连接的技巧。具体来说，只要页面载入了，不管你需不需要服务器给你响应信息，你都会给服务器发一个Ajax请求。这个请求不同于一般的Ajax请求，服务器不会直接给你返回信息，而是它要等着，直到服务器觉得该给你发信息了，它才会响应。比如，你的好友发了一条新鲜事，服务器就会把这个新鲜事当做响应发给你的浏览器，然后你的浏览器就刷新页面了。浏览器收到响应刷新完之后，再发送一条新的请求给服务器，这个请求依然不会立即被响应。于是就开始重复以上步骤。利用这个方法，可以让浏览器始终保持等待响应的状态。虽然以上过程依然只有非持续的Http参与，但是我们模拟出了一个看似持续的连接状态

- 我们再看传统的服务器（比如Apache）。每次一个新用户连到你的网站上，你的服务器就得开一个连接。每个连接都需要占一个进程，这些进程大部分时间都是闲着的（比如等着你好友发新鲜事，等好友发完才给用户响应信息。或者等着数据库返回查询结果什么的）。虽然这些进程闲着，但是照样占用内存。这意味着，如果用户连接数的增长到一定规模，你服务器没准就要耗光内存直接瘫了。

- 这种情况怎么解决？解决方法就是刚才上边说的：非阻塞和事件驱动。这些概念在我们谈的这个情景里面其实没那么难理解。你把非阻塞的服务器想象成一个loop循环，这个loop会一直跑下去。一个新请求来了，这个loop就接了这个请求，把这个请求传给其他的进程（比如传给一个搞数据库查询的进程），然后响应一个回调（callback）。完事了这loop就接着跑，接其他的请求。这样下来。服务器就不会像之前那样傻等着数据库返回结果了。

- 如果数据库把结果返回来了，loop就把结果传回用户的浏览器，接着继续跑。在这种方式下，你的服务器的进程就不会闲着等着。从而在理论上说，同一时刻的数据库查询数量，以及用户的请求数量就没有限制了。服务器只在用户那边有事件发生的时候才响应，这就是事件驱动。

- FriendFeed是用基于Python的非阻塞框架Tornado (知乎也用了这个框架) 来实现上面说的新鲜事功能的。不过，Node.js就比前者更妙了。Node.js的应用是通过javascript开发的，然后直接在Google的变态V8引擎上跑。用了Node.js，你就不用担心用户端的请求会在服务器里跑了一段能够造成阻塞的代码了。因为javascript本身就是事件驱动的脚本语言。你回想一下，在给前端写javascript的时候，更多时候你都是在搞事件处理和回调函数。javascript本身就是给事件处理量身定制的语言。

- Node.js还是处于初期阶段。如果你想开发一个基于Node.js的应用，你应该会需要写一些很底层代码。但是下一代浏览器很快就要采用WebSocket技术了，从而长轮询也会消失。在Web开发里，Node.js这种类型的技术只会变得越来越重要。

 链接：<https://www.sitepoint.com/node-js-is-the-new-black/>

### 添加电脑的环境变量

1. 找到需要添加环境变量的软件的路径地址
2. 我的电脑 => 属性 => 高级系统设置 => 环境变量 => 用户变量/系统变量 => path => 添加

### nodejs 和 npm 包管理器关系

- node.js是让js代码能运行在后端的一个环境
- 只要安装了 nodejs ， npm 包这个软件就会自动的被安装上，因为 npm 就是跟着 nodejs 安装包里的。
- npx 是npm v5.4 版本后更新的

- 无论是 npm npx 下载依赖都是从 npmjs.com 网站下载的，如果你下载的包在 npmjs.com 网站没有，那么就下载失败(yarn 同理)

## Node 旨在解决什么问题

### Node 公开宣称的目标是

 “旨在提供一种简单的构建可伸缩网络程序的方法”。当前的服务器程序有什么问题？我们来做个数学题。在 Java™ 和 PHP 这类语言中，每个连接都会生成一个新线程，每个新线程可能需要 2 MB 的配套内存。在一个拥有 8 GB RAM 的系统上，理论上最大的并发连接数量是 4,000 个用户。随着您的客户群的增长，如果希望您的 Web 应用程序支持更多用户，那么，您必须添加更多服务器。当然，这会增加服务器成本、流量成本和人工成本等成本。除这些成本上升外，还有一个潜在技术问题，即用户可能针对每个请求使用不同的服务器，因此，任何共享资源都必须在所有服务器之间共享。鉴于上述所有原因，整个 Web 应用程序架构（包括流量、处理器速度和内存速度）中的瓶颈是：服务器能够处理的并发连接的最大数量。

### Node 解决这个问题的方法是

更改连接到服务器的方式。每个连接发射一个在 Node 引擎的进程中运行的事件，而不是为每个连接生成一个新的 OS 线程（并为其分配一些配套内存）。Node 声称它绝不会死锁，因为它根本不允许使用锁，它不会直接阻塞 I/O 调用。Node 还宣称，运行它的服务器能支持数万个并发连接。

- 现在您有了一个能处理数万个并发连接的程序，那么您能通过 Node 实际构建什么呢？如果您有一个 Web 应用程序需要处理这么多连接，那将是一件很 “恐怖” 的事！那是一种 “如果您有这个问题，那么它根本不是问题” 的问题。在回答上面的问题之前，我们先看看 Node 的工作原理以及它的设计运行方式。

## Node 肯定不是什么

- Node 是一个服务器程序。但是，基础 Node 产品肯定不 像 Apache 或 Tomcat。本质上，那些服务器 “安装就绪型” 服 务器产品，支持立即部署应用程序。通过这些产品，您可以在一分钟内启动并运行一个服务器。Node 肯定不是这种产品。Apache 能通过添加一个 PHP 模块来允许开发人员创建动态 Web 页，添加一个 SSL 模块来实现安全连接，与此类似，Node 也有模块概念，允许向 Node 内核添加模块。实际上，可供选择的用于 Node 的模块有数百个之多，社区在创建、发布和更新模块方面非常活跃，一天甚至可以处理数十个模块。本文后面将讨论 Node 的整个模块部分

## Node 如何工作

- Node 本身运行 V8 JavaScript。等等，服务器上的 JavaScript？没错，您没有看错。对于只在客户机上使用 JavaScript 的程序员而言，服务器端 JavaScript 可能是一个新概念，但这个概念本身并非遥不可及，因此为何不能在服务器上使用客户机上使用的编程语言？

- 什么是 V8？V8 JavaScript 引擎是 Google 用于其 Chrome 浏览器的底层 JavaScript 引擎。很少有人考虑 JavaScript 在客户机上实际做了些什么？实际上，JavaScript 引擎负责解释并执行代码。Google 使用 V8 创建了一个用 C++ 编写的超快解释器，该解释器拥有另一个独特特征；您可以下载该引擎并将其嵌入任何 应用程序。V8 JavaScript 引擎并不仅限于在一个浏览器中运行。因此，Node 实际上会使用 Google 编写的 V8 JavaScript 引擎，并将其重建为可在服务器上使用。太完美了！既然已经有一个不错的解决方案可用，为何还要创建一种新语言呢？

### 事件驱动编程

- 许多程序员接受的教育使他们认为，面向对象编程是完美的编程设计，这使得他们对其他编程方法不屑一顾。Node 使用了一个所谓的事件驱动编程模型。

- 清单 1. 客户端上使用 jQuery 的事件驱动编程

```js
// jQuery code on the client-side showing how Event-Driven programming works

// When a button is pressed, an Event occurs - deal with it
// directly right here in an anonymous function, where all the
// necessary variables are present and can be referenced directly
$("#myButton").click(function(){
     if ($("#myTextField").val() != $(this).val())
         alert("Field must match button text");
});
```

- 实际上，服务器端和客户端没有任何区别。没错，这没有按钮点击操作，也没有向文本字段键入的操作，但在一个更高的层面上，事件正在 发生。一个连接被建立，这是一个事件！数据通过连接进行接收，这也是一个事件！数据通过连接停止，这还是一个事件！

- 为什么这种设置类型对 Node 很理想？JavaScript 是一种很棒的事件驱动编程语言，因为它允许使用匿名函数和闭包，更重要的是，任何写过代码的人都熟悉它的语法。事件发生时调用的回调函数可以在捕获事件处进行编写。这样可以使代码容易编写和维护，没有复杂的面向对象框架，没有接口，没有过度设计的可能性。只需监听事件，编写一个回调函数，其他事情都可以交给系统处理！

## 示例 Node 应用程序

- 最后，我们来看一些代码！让我们将讨论过的所有内容汇总起来，从而创建我们的第一个 Node 应用程序。我们已经知道，Node 对于处理高流量应用程序很理想，所以我们将创建一个非常简单的 Web 应用程序，一个为实现最快速度而构建的应用程序。下面是 “老板” 交代的关于我们的样例应用程序的具体要求：创建一个随机数字生成器 RESTful API。这个应用程序应该接受一个输入：一个名为 “number” 的参数。然后，应用程序返回一个介于 0 和该参数之间的随机数字，并将生成的数字返回给调用者。由于 “老板” 希望该应用程序成为一个广泛流行的应用程序，因此它应该能处理 50,000 个并发用户。我们来看看以下代码：

### 清单 2. Node 随机数字生成器

```js
// these modules need to be imported in order to use them.
// Node has several modules.  They are like any #include
// or import statement in other languages
var http = require("http");
var url = require("url");

// The most important line in any Node file.  This function
// does the actual process of creating the server.  Technically,
// Node tells the underlying operating system that whenever a
// connection is made, this particular callback function should be
// executed.  Since we're creating a web service with REST API,
// we want an HTTP server, which requires the http variable
// we created in the lines above.
// Finally, you can see that the callback method receives a 'request'
// and 'response' object automatically.  This should be familiar
// to any PHP or Java programmer.
http.createServer(function(request, response) {

     // The response needs to handle all the headers, and the return codes
     // These types of things are handled automatically in server programs
     // like Apache and Tomcat, but Node requires everything to be done yourself
     response.writeHead(200, {"Content-Type": "text/plain"});

     // Here is some unique-looking code.  This is how Node retrives
     // parameters passed in from client requests.  The url module
     // handles all these functions.  The parse function
     // deconstructs the URL, and places the query key-values in the
     // query object.  We can find the value for the "number" key
     // by referencing it directly - the beauty of JavaScript.
     var params = url.parse(request.url, true).query;
     var input = params.number;

     // These are the generic JavaScript methods that will create
     // our random number that gets passed back to the caller
     var numInput = new Number(input);
     var numOutput = new Number(Math.random() * numInput).toFixed(0);

     // Write the random number to response
     response.write(numOutput);

     // Node requires us to explicitly end this connection.  This is because
     // Node allows you to keep a connection open and pass data back and forth,
     // though that advanced topic isn't discussed in this article.
     response.end();

   // When we create the server, we have to explicitly connect the HTTP server to
   // a port.  Standard HTTP port is 80, so we'll connect it to that one.
}).listen(80);

// Output a String to the console once the server starts up, letting us know everything
// starts up correctly
console.log("Random Number Generator Running...");
```

### 启动应用程序

- 将上面的代码放入一个名为 “random.js” 的文件中。现在，要启动这个应用程序并运行它（以便创建 HTTP 服务器并监听端口 80 上的连接），只需在您的命令提示中输入以下命令：% node random.js。下面是服务器已经启动并运行时看起来的样子：

```js
root@ubuntu:/home/moila/ws/mike# node random.js
Random Number Generator Running...
```

### 访问应用程序

- 应用程序已经启动并运行。Node 正在监听所有连接，我们来测试一下。由于我们创建了一个简单的 RESTful API，所以可以使用 Web 浏览器来访问这个应用程序。键入以下地址（确保您已完成了上面的步骤）：<http://localhost/?number=27>。

- 您的浏览器窗口将更改到一个介于 0 到 27 之间的随机数字。单击浏览器上的 “重新载入” 按钮，您会得到另一个随机数字。就是这样，这就是您的第一个 Node 应用程序！

## Node 对什么有好处

- 到此为止，您可能能够回答 “Node 是什么” 这个问题了，但您可能还有一个问题：“Node 有什么用途？” 这是一个需要提出的重要问题，因为肯定有些东西能受益于 Node。

### 它对什么有好处

正如您此前所看到的，Node 非常适合以下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。Node 表现出众的典型示例包括：

1. RESTful API

提供 RESTful API 的 Web 服务接收几个参数，解析它们，组合一个响应，并返回一个响应（通常是较少的文本）给用户。这是适合 Node 的理想情况，因为您可以构建它来处理数万条连接。它仍然不需要大量逻辑；它本质上只是从某个数据库中查找一些值并将它们组成一个响应。由于响应是少量文本，入站请求也是少量的文本，因此流量不高，一台机器甚至也可以处理最繁忙的公司的 API 需求。

2. Twitter 队列

想像一下像 Twitter 这样的公司，它必须接收 tweets 并将其写入数据库。实际上，每秒几乎有数千条 tweet 达到，数据库不可能及时处理高峰时段所需的写入数量。Node 成为这个问题的解决方案的重要一环。如您所见，Node 能处理数万条入站 tweet。它能快速而又轻松地将它们写入一个内存排队机制（例如 memcached），另一个单独进程可以从那里将它们写入数据库。Node 在这里的角色是迅速收集 tweet，并将这个信息传递给另一个负责写入的进程。想象一下另一种设计（常规 PHP 服务器会自己尝试处理对数据库本身的写入）：每个 tweet 都会在写入数据库时导致一个短暂的延迟，因为数据库调用正在阻塞通道。由于数据库延迟，一台这样设计的机器每秒可能只能处理 2000 条入站 tweet。每秒处理 100 万条 tweet 则需要 500 个服务器。相反，Node 能处理每个连接而不会阻塞通道，从而能够捕获尽可能多的 tweets。一个能处理 50,000 条 tweet 的 Node 机器仅需 20 台服务器即可。

3. 电子游戏统计数据

如果您在线玩过《使命召唤》这款游戏，当您查看游戏统计数据时，就会立即意识到一个问题：要生成那种级别的统计数据，必须跟踪海量信息。这样，如果有数百万玩家同时在线玩游戏，而且他们处于游戏中的不同位置，那么很快就会生成海量信息。Node 是这种场景的一种很好的解决方案，因为它能采集游戏生成的数据，对数据进行最少的合并，然后对数据进行排队，以便将它们写入数据库。使用整个服务器来跟踪玩家在游戏中发射了多少子弹看起来很愚蠢，如果您使用 Apache 这样的服务器，可能会 有一些有用的限制；但相反，如果您专门使用一个服务器来跟踪一个游戏的所有统计数据，就像使用运行 Node 的服务器所做的那样，那看起来似乎是一种明智之举。

## Node 模块

- 尽管不是本文最初计划讨论的主题，但应广大读者要求，本文已经扩展为包含一个 Node Modules 和 Node Package Manager 简介。正如已经习惯使用 Apache 的开发人员那样，您也可以通过安装模块来扩展 Node 的功能。但是，可用于 Node 的模块极大地 增强了这个产品，那些模块非常有用，将使用 Node 的开发人员通常会安装几个模块。因此，模块也就变得越来越重要，甚至成为整个产品的一个关键部分。

- 在 “参考资料” 部分，我提供了一个指向模块页面的链接，该页面列示了所有可用模块。为了展示模块能够提供的可能性，我在数十个可用模块中包含了以下几个模块：一个用于编写动态创建的页面（比如 PHP），一个用于简化 MySQL 使用，一个用于帮助使用 WebSockets，还有一个用来协助文本和参数解析的模块。我不会详细介绍这些模块，这是因为这篇概述文章旨在帮助您了解 Node 并确定是否需要深入学习（再次重申），如果需要，那么您肯定有机会用到这些可用模块。

= 另外，Node 的一个特性是 Node Package Module，这是一个内置功能，用于安装和管理 Node 模块。它自动处理依赖项，因此您可以确定：您想要安装的任何模块都将正确安装并包含必要的依赖项。它还支持将您自己的模块发布到 Node 社区，假如您选择加入社区并编写自己的模块的话。您可以将 NPM 视为一种允许轻松扩展 Node 功能的方法，不必担心这会破坏您的 Node 安装。同样，如果您选择深入学习 Node，那么 NPM 将是您的 Node 解决方案的一个重要组成部分。

### 链接：<https://www.ibm.com/developerworks/cn/opensource/os-nodejs/>
