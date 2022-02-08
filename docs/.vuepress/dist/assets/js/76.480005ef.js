(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{647:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"学习主要内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习主要内容"}},[t._v("#")]),t._v(" 学习主要内容")]),t._v(" "),s("ol",[s("li",[t._v("组件化")]),t._v(" "),s("li",[t._v("模块")]),t._v(" "),s("li",[t._v("各种渲染方式，显示隐藏，循环渲染")]),t._v(" "),s("li",[t._v("路由 路由传参")]),t._v(" "),s("li",[t._v("生命周期")]),t._v(" "),s("li",[t._v("数据存储 微信中（全局数据，本地存储）")]),t._v(" "),s("li",[t._v("如何在小程序里使用第三方包插件")]),t._v(" "),s("li",[t._v("组件，页面，全局入口")]),t._v(" "),s("li",[t._v("组件通信")])]),t._v(" "),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├── app.js\n├── app.json\n├── app.wxss\n├── pages\n│   │── index\n│   │   ├── index.wxml\n│   │   ├── index.js\n│   │   ├── index.json\n│   │   └── index.wxss\n│   └── logs\n│       ├── logs.wxml\n│       ├── logs.js\n│       ├── logs.json\n│       └── logs.wxss\n└── utils\n")])])]),s("p",[t._v("小程序包含一个描述整体程序的 "),s("code",[t._v("app")]),t._v(" 和多个描述各自页面的 "),s("code",[t._v("page")]),t._v("。\n一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("文件")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("app.js")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("小程序逻辑")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("app.json")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("小程序公共配置")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("app.wxss")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("小程序公共样式")])])])]),t._v(" "),s("h3",{attrs:{id:"小程序的三大组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序的三大组成部分"}},[t._v("#")]),t._v(" 小程序的三大组成部分")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("App")]),t._v(" 方法用来注册全局入口")]),t._v(" "),s("li",[s("code",[t._v("Pages")]),t._v(" 方法用来注册页面")]),t._v(" "),s("li",[s("code",[t._v("component")]),t._v(" 方法用来注册组件--公共模板")])]),t._v(" "),s("h2",{attrs:{id:"入口-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入口-app"}},[t._v("#")]),t._v(" 入口 app")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("App")]),t._v("方法构造入口全局的组件")]),t._v(" "),s("li",[t._v("在整个小程序里只能有一个"),s("code",[t._v("App")]),t._v("实例")]),t._v(" "),s("li",[t._v("配置全局数据")]),t._v(" "),s("li",[t._v("路由拦截")])]),t._v(" "),s("p",[t._v("每个小程序都需要在 "),s("code",[t._v("app.js")]),t._v(" 中调用 "),s("code",[t._v("App")]),t._v(" 方法注册小程序实例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLaunch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something initial when launch.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShow")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something when show.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onHide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something when hide.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("globalData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I am global data'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("整个小程序只有一个 "),s("code",[t._v("App")]),t._v(" 实例，是全部页面共享的。开发者可以通过 "),s("code",[t._v("getApp")]),t._v(" 方法获取到全局唯一的 "),s("code",[t._v("App")]),t._v(" 实例，获取"),s("code",[t._v("App")]),t._v("上的数据或调用开发者注册在 "),s("code",[t._v("App")]),t._v(" 上的函数。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xxx.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I am global data")]),t._v("\n")])])]),s("h2",{attrs:{id:"页面-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面-pages"}},[t._v("#")]),t._v(" 页面 pages")]),t._v(" "),s("p",[t._v("一个小程序页面由四个文件组成，分别是：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("文件类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("必需")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("js")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("页面逻辑")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("wxml")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("页面结构")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("json")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("页面配置")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("wxss")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("页面样式表")])])])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("page")]),t._v("方法构造页面组件")]),t._v(" "),s("li",[t._v("使用组件需要在"),s("code",[t._v("json")]),t._v("文件中的：")])]),t._v(" "),s("p",[t._v("对于小程序中的每个页面，都需要在页面对应的 "),s("code",[t._v("js")]),t._v(" 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is page data."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面创建时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onShow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面出现在前台时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onReady")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面首次渲染完毕时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onHide")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面从前台变为后台时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onUnload")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面销毁时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPullDownRefresh")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发下拉刷新时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onReachBottom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面触底时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onShareAppMessage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面被用户分享时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPageScroll")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面滚动时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onResize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面尺寸变化时执行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTabItemTap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tab 点击时执行")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pagePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件响应函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("viewTap")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Set some data for updating view.'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is setData callback")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自由数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("customData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hi")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MINA'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[t._v("#")]),t._v(" 全局配置")]),t._v(" "),s("p",[t._v("未指定 "),s("code",[t._v("entryPagePath")]),t._v(" 时，数组的第一项代表小程序的初始页面（首页）。")]),t._v(" "),s("h2",{attrs:{id:"组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"usingComponents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"组件名"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../components/swiper/swiper"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("获取组件传过来的参数，需要点"),s("code",[t._v("detail")]),t._v("才能拿到具体的值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("component")]),t._v("方法构造组件")])]),t._v(" "),s("h3",{attrs:{id:"内置的指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置的指令"}},[t._v("#")]),t._v(" 内置的指令")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("wx:for")]),t._v("\n遍历渲染")])]),t._v(" "),s("ul",[s("li",[t._v("默认在当前作用域里产生"),s("code",[t._v("index")]),t._v("和"),s("code",[t._v("item")])])]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(' wx:for-index = ""  //给index别名\n wx:for-item = ""   //给item别名\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[t._v("wx:if")]),t._v("\n渲染与销毁（类似"),s("code",[t._v("vue")]),t._v("的"),s("code",[t._v("v-if")]),t._v("）")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("wx:elif")])]),t._v(" "),s("li",[s("code",[t._v("wx:else")])])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("code",[t._v("wx:hidden")]),t._v("\n显示与隐藏（类似"),s("code",[t._v("v-show")]),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"事件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件系统"}},[t._v("#")]),t._v(" 事件系统")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("绑定事件"),s("code",[t._v("bind")])])]),t._v(" "),s("li",[s("p",[t._v("绑定自定义事件"),s("code",[t._v("bind:eventName")])])]),t._v(" "),s("li",[s("p",[t._v("触发自定义事件"),s("code",[t._v("triggerEvent('eventName',params）")])])]),t._v(" "),s("li",[s("p",[t._v("禁止冒泡："),s("code",[t._v("catch:eventName")])])]),t._v(" "),s("li",[s("p",[t._v("互斥绑定："),s("code",[t._v("mut-bind:eventName")])])])]),t._v(" "),s("h2",{attrs:{id:"模板和引入方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板和引入方式"}},[t._v("#")]),t._v(" 模板和引入方式")]),t._v(" "),s("h3",{attrs:{id:"template-inculode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-inculode"}},[t._v("#")]),t._v(" template & inculode")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("template")]),t._v(" 加"),s("code",[t._v("name")]),t._v(" 取名")]),t._v(" "),s("li",[s("code",[t._v("template")]),t._v(" 必须加"),s("code",[t._v("is")]),t._v(" 我们要使用哪个模板，"),s("code",[t._v("data")]),t._v("属性用来传参")]),t._v(" "),s("li",[s("code",[t._v("import")]),t._v(" 标签，用来加载外部 "),s("code",[t._v("wxml")]),t._v(" 文件的 "),s("code",[t._v("template")])]),t._v(" "),s("li",[s("code",[t._v("include")]),t._v("标签 加载外部的"),s("code",[t._v("wxml")]),t._v("文件，除了"),s("code",[t._v("template")]),t._v("标签里面的内容，其他内容会全部引入进来")])])])}),[],!1,null,null,null);a.default=e.exports}}]);