(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{696:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"html文档-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html文档-概念"}},[t._v("#")]),t._v(" HTML文档 概念")]),t._v(" "),s("blockquote",[s("p",[t._v("HTML指的是超文本标记语言 (Hyper Text Markup Language)，HTML文档就是我们常说的网页，一个标准的HTML文档由"),s("strong",[t._v("文档元素")]),t._v("和"),s("strong",[t._v("元数据元素")]),t._v("组成，二者用来创建HTML文档以及其内容。")])]),t._v(" "),s("p",[t._v("顺便说一下什么是元数据元素: 用来构建HTML文档的基本结构，以及就如何处理文档向浏览器提供信息和指示，它们本身不是文档内容，但提供了关于后面文档内容的信息。包含在head内，如title、base、meta等都是元数据元素。本文不做重点介绍。")]),t._v(" "),s("h2",{attrs:{id:"文档元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档元素"}},[t._v("#")]),t._v(" 文档元素")]),t._v(" "),s("p",[t._v("文档元素一共有四个"),s("strong",[t._v("DOCTYPE")]),t._v("、"),s("strong",[t._v("html")]),t._v("、"),s("strong",[t._v("head")]),t._v("、"),s("strong",[t._v("body")])]),t._v(" "),s("h3",{attrs:{id:"doctype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doctype"}},[t._v("#")]),t._v(" DOCTYPE")]),t._v(" "),s("p",[t._v("每一个HTML文档都必须由DOCTYPE元素开头，告诉浏览器要处理的是HTML文档，在HTML5中DOCTYPE 声明变得非常简单而且唯一，不用写版本号浏览器也能识别这是HTML5文档，因为和之前的HTML版本有所差异\n<!DOCTYPE html> //HTML5声明")]),t._v(" "),s("p",[t._v("在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。HTML5 不基于 SGML，所以不需要引用 DTD。--"),s("a",{attrs:{href:"http://www.w3school.com.cn/tags/tag_doctype.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3school"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("HTML4中声明如下:")])]),t._v(" "),s("p",[t._v('HTML 4.01 Strict(不允许使用框架集):\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">')]),t._v(" "),s("p",[t._v('HTML 4.01 Frameset(允许使用框架集):\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">')]),t._v(" "),s("h3",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" html")]),t._v(" "),s("p",[t._v("html表示根元素，表示HTML文档的开始，必须需要的元素，html具有如下属性:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("值")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("manifest")]),t._v(" "),s("td",[t._v("url")]),t._v(" "),s("td",[t._v("定义一个url，描述文档的缓存信息")])]),t._v(" "),s("tr",[s("td",[t._v("xmlns")]),t._v(" "),s("td",[t._v('"http://www.w3.org/1999/xhtml"')]),t._v(" "),s("td",[t._v("定义 XML namespace 属性(其实这个我也没用过不懂啊)，感兴趣的大神自己研究下吧")])])])]),t._v(" "),s("h3",{attrs:{id:"head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" head")]),t._v(" "),s("blockquote",[s("p",[t._v("包含文档的元数据，向浏览器提供文档内容和标记的信息，还包括脚本和对外资源的引用，如引入外联.css文件、js文件等。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("包含元素")]),t._v(" "),s("th",[t._v("是否必须")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("必须有一个title元素，定义网站的标题")])]),t._v(" "),s("tr",[s("td",[t._v("base")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("设置一个基准URL，让HTML文档中的相对链接在此基础上解析")])]),t._v(" "),s("tr",[s("td",[t._v("meta")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("定义各种文档元数据，可见我的上一篇文章"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000010342600",target:"_blank",rel:"noopener noreferrer"}},[s("meta"),t._v("常用属性总结"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("style")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("1. 指定样式类型; 2. 指定样式作用范围; 3. 指定样式使用的媒体类型")])]),t._v(" "),s("tr",[s("td",[t._v("link")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("1. 载入外部样式表; 2. 为页面定义网站标志; 3. 预先获取关联资源")])]),t._v(" "),s("tr",[s("td",[t._v("script")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("1. 定义文档内嵌脚本; 2. 载入外部脚本")])]),t._v(" "),s("tr",[s("td",[t._v("noscript")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("可以向禁用或不知JavaScript的浏览器展示一些内容")])])])]),t._v(" "),s("ul",[s("li",[s("strong",[s("base"),t._v("介绍:")]),t._v('\n如果在浏览器地址为"https://segmentfault.com/demo/index.html"中载入一个文档，代码如下:')])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://segmentfault.com/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("page2.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v('正常点击a链接，浏览器将从"https://segmentfault.com/page2.html"中加载文档\n'),s("strong",[t._v("如果不包含"),s("base"),t._v("元素")]),t._v('，浏览器将从"https://segmentfault.com/demo/index.html"中加载文档地址')]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("style")])])]),t._v(" "),s("p",[t._v("style元素拥有局部属性:type、scoped、media，其对应作用如下:")]),t._v(" "),s("p",[s("strong",[t._v("1.指定内嵌样式，type属性是高速浏览器文档所定义的类型、这个值只有一种text/css")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("2.指定样式范围，scoped属性的作用为style元素内定义的样式只作用于该元素的父级及其所有兄弟元素")])]),t._v(" "),s("p",[s("strong",[t._v("3.media属性表明文档在指定的设备下显示其定义的样式")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("media属性所有的设备值如下表(--HTML5权威指南)，很多在工作中几乎都用不上，列出来了解一下及以备查阅:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("设备(media的值)")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("all")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于所有设备(默认值)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("aural")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于语音合成器")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("braille")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于盲文设备")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("handheld")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于手持设备")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("projection")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("讲样式用于投影机")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("print")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于打印预览和打印页面时")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("screen")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于计算机显示屏幕")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("tty")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于电传打印机之类的等宽设备")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("tv")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将样式用于电视机")])])])]),t._v(" "),s("p",[t._v("media不只能规定设备，还能定义更具体的使用条件，举例如下:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("screen AND (max-width:500px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("//只在浏览器宽度小于500px的情况下生效\n    .box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("screen AND (mix-width:500px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("//只在浏览器宽度大于500px的情况下生效\n    .box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("除了用AND来定义具体条件，还可以使用NOT和OR(','表示)，另外还有其他供media使用的特性就不列举了，大家可以自己去百度了，再补充一个吧，device-width，这些特性都可以结合max-/mix-来使用")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("link")])])]),t._v(" "),s("p",[t._v("拥有的局部属性如下表:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("href")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定引入资源的URL")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("hreflang")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("说明关联资源使用的语言")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("media")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("说明关联内容用于哪种设备")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("rel")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("说明文档与关联资源的关系类型，属性值决定了浏览器如何解析link元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("sizes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTML5中新增，指定网站图标大小")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定所关联资源的"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIME"),s("OutboundLink")],1),t._v("类型，如text/css")])])])]),t._v(" "),s("p",[t._v("rel属性常用值"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types",target:"_blank",rel:"noopener noreferrer"}},[t._v("rel值列表"),s("OutboundLink")],1),t._v("及其表示的link元素功能")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("stylesheet")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("载入外部样式表")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定图标资源")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("prefetch")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("预先获取一个资源")])])])]),t._v(" "),s("p",[s("strong",[t._v("1.引入外联样式表")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("2.添加网站图标")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("shortcut icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image/x-icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("favicon.ico"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" //href属性值为图片路径\n")])])]),s("p",[s("strong",[t._v("3.预先获取关联的资源")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("rel属性值设置为prefetch，可以预先加载demo.html，如果页面存在链接如下，为需要demo.html页面的操作做好准备")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("script")])])]),t._v(" "),s("blockquote",[s("p",[t._v("script元素可以定义页面内嵌脚本、引入外部文件脚本并通过script本身局部属性值设定加载脚本的各种方式")])]),t._v(" "),s("p",[t._v("script的常用局部属性及其说明如下表:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表示引用或定义的脚本类型，如果是javascript脚本，此属性可以省略，省略type属性时浏览器默认为使用JavaScript脚本")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("src")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定加载外部脚本资源的URL")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("defer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设定脚本执行的方式为延迟执行，告诉浏览器等页面载入和解析完毕才能执行此脚本，只能与src属性一起使用")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("async")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设定脚本执行的方式为异步执行，只能与src属性一起使用")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("charset")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("说明外部脚本资源的字符编码，只能与src属性一起使用")])])])]),t._v(" "),s("p",[s("strong",[t._v("1.定义文档内嵌脚本")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面加载完成'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("一般情况下script元素应该放在文档最后，等页面全部加载完成后才去执行，保证脚本文件内可以获取到当前页面的全部内容。")]),t._v(" "),s("p",[t._v("如果script元素在head内，如果是当前内嵌脚本，则可以添加window.onload来告诉浏览器当所有页面全部加载完成才去执行。")]),t._v(" "),s("p",[s("strong",[t._v("2.载入外部脚本")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.使用defer属性延迟加载外部脚本")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果在head中使用script元素，defer属性将会在HTML文档所有元素都解析完毕之后才加载和执行。")]),t._v(" "),s("p",[s("em",[t._v("注意")]),t._v(":defer属性只能处理外部脚本，对内嵌脚本无效。")]),t._v(" "),s("p",[s("strong",[t._v("4.使用async属性异步执行脚本")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("浏览器在解析script元素时的默认行为是加载和执行脚本的时候暂停处理页面，各script元素按顺序同步执行。")]),t._v(" "),s("p",[t._v("使用async属性可以使外部脚本在加载HTML时异步执行，如何使用需结合具体产品功能需求，不过带来的影响是，页面中的脚本不能再按次序同步执行，所以如果当前脚本中与其他脚本有关联，则不适合使用async属性")]),t._v(" "),s("h3",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" body")]),t._v(" "),s("p",[t._v("HTML文档的元数据和文档信息都包含在head内，文档内容包含在body内，body紧跟在head后面，具体不在赘述！")]),t._v(" "),s("p",[t._v("本文很多概念和属性表格结合《HTML5权威指南》、W3school、MDN，由于博主能力有限，很多概念直接拿过来引用，并附上相关链接，以保证其正确性，对HTML文档的相关知识作一个简单的总结，希望能帮助到需要的人，同时也方便自己后续查阅。")])])}),[],!1,null,null,null);a.default=e.exports}}]);