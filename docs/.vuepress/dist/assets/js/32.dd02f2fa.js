(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{602:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"react-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-介绍"}},[t._v("#")]),t._v(" React 介绍")]),t._v(" "),a("p",[t._v("【面试的时候，可能会问到】")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("react")]),t._v(" 是干什么的？")])]),t._v(" "),a("p",[t._v("构建用户界面的"),a("code",[t._v("javascript")]),t._v("库。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("react")]),t._v(" 能干什么？")])]),t._v(" "),a("p",[t._v("开发网站，单页面应用，手机 "),a("code",[t._v("app")])]),t._v(" "),a("p",[a("code",[t._v("vue")]),t._v(" 和 "),a("code",[t._v("react")]),t._v(" 几乎在使用上和原理上非常的相似，"),a("code",[t._v("vue")]),t._v(" 最初就是借鉴的\n"),a("code",[t._v("react")]),t._v(" 思想开发的")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("react")]),t._v(" 好处：")])]),t._v(" "),a("p",[a("code",[t._v("api")]),t._v(" 非常少，使用起来很简单，灵活。")]),t._v(" "),a("p",[a("code",[t._v("react")]),t._v(" 函数式编程思想（声明式编程）")]),t._v(" "),a("h2",{attrs:{id:"react-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-原理"}},[t._v("#")]),t._v(" react 原理")]),t._v(" "),a("p",[a("code",[t._v("vue")]),t._v(" 单向数据流 "),a("code",[t._v("!=")]),t._v(" 数据单向绑定")]),t._v(" "),a("p",[t._v("他和 "),a("code",[t._v("vue")]),t._v(" 不同的地方：数据单向绑定的")]),t._v(" "),a("ul",[a("li",[t._v("【数据流例子说明：】")])]),t._v(" "),a("p",[t._v("父组件 变量 传递给 子组件 子组件可以修改传递过来的变量吗？不可以，为什么，因为数据流是单向的，也就是说从父级传递过来的数据，子组件只能用，不能改。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("react")]),t._v("【数据单向绑定】")])]),t._v(" "),a("p",[t._v("也就是说，他不能自动的监听到数据的变化，不能自动实现 "),a("code",[t._v("vue")]),t._v(" 中数据双向绑定\n我们在 "),a("code",[t._v("react")]),t._v(" 中要实现双向绑定，需要手动的设置 "),a("code",[t._v("setState")]),t._v(".")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("数据单向绑定")])]),t._v(" "),a("li",[a("p",[t._v("数据流--单向数据流")])]),t._v(" "),a("li",[a("p",[t._v("基于函数和类运作的【函数组件和类组件】")])])]),t._v(" "),a("h2",{attrs:{id:"官网的阅读【自学】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网的阅读【自学】"}},[t._v("#")]),t._v(" 官网的阅读【自学】")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文官网"),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文官网"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("文档 --\x3e 核心概念【初级的基础知识】--\x3e高级指引【中级】 --\x3eHOOK【高级用法】")])])]),t._v(" "),a("h2",{attrs:{id:"函数组件-基本布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数组件-基本布局"}},[t._v("#")]),t._v(" 函数组件&基本布局")]),t._v(" "),a("p",[t._v("函数组件：就是一个函数返回一段 "),a("code",[t._v("dom")]),t._v(" 片段")]),t._v(" "),a("h3",{attrs:{id:"模块化开发【面试题】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发【面试题】"}},[t._v("#")]),t._v(" 模块化开发【面试题】")]),t._v(" "),a("ul",[a("li",[t._v("好处：解耦，便于维护和开发")]),t._v(" "),a("li",[t._v("复用：哪儿用就给它引入到哪儿")])]),t._v(" "),a("h3",{attrs:{id:"react-里-样式是没有作用域控制的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-里-样式是没有作用域控制的"}},[t._v("#")]),t._v(" react 里，样式是没有作用域控制的")]),t._v(" "),a("p",[t._v("也就是说，你在任何地方写的样式都会影响到全局样式")]),t._v(" "),a("ul",[a("li",[t._v("所以样式类名需要额外的注意")]),t._v(" "),a("li",[a("code",[t._v("jsincss")]),t._v(" 【这是一种解决方案】 "),a("code",[t._v("module.css")]),t._v(" 【官方配置好的一种解决方案】 "),a("code",[t._v("scss")]),t._v("【"),a("code",[t._v("css")]),t._v("预处理器,利用嵌套的语法避免冲突】")])]),t._v(" "),a("h2",{attrs:{id:"创建-react-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-react-项目"}},[t._v("#")]),t._v(" 创建 react 项目")]),t._v(" "),a("ol",[a("li",[t._v("创建项目前")])]),t._v(" "),a("p",[t._v("如果你电脑上安装过 "),a("code",[t._v("create-react-app")]),t._v(" 脚手架 需要卸载(新版本换了创建命令)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm unistall "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("创建项目命令")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npx create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app myappname\n")])])]),a("p",[t._v("【myappname】:项目名称，不可以叫 "),a("code",[t._v("react")]),t._v("等（关键字） 也不许有驼峰命名")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("npx")])])]),t._v(" "),a("p",[a("code",[t._v("npx")]),t._v(" 是运行本地 "),a("code",[t._v("node_modules")]),t._v(" 包里依赖的，如果没找到，就临时下载，使用完之后把下载的依赖删掉，用 "),a("code",[t._v("npx")]),t._v(" 好处是保证了依赖版本的新鲜度【每次都是最新版本】，"),a("code",[t._v("npm")]),t._v(" 先运行本地项目，如果没找到去本机全局里找")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("另一种创建(eject)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npx create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app myappname\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("all\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sss'")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("yarn eject\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("yarn\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//或")]),t._v("\nnpm i "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装依赖（感觉此项多余）")]),t._v("\n")])])]),a("p",[t._v("安装"),a("code",[t._v("scss")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("yarn add node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chokidar\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("yarn add npm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("all\n")])])]),a("p",[t._v("修改"),a("code",[t._v("package.json")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build-css"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node-sass-chokidar src/ -o src/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"watch-css"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"start-js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node scripts/start.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm-run-all -p watch-css start-js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build-js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node scripts/build.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm-run-all build-css build-js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node scripts/test.js --env=jsdom"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    Project\n       ├─── node_modules\n       ├─── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n       │      ├── favicom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ico\n       │      ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n       │      └── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n       ├─── src\n       │      ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n       │      ├── components\n       │      └── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n       ├─── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitignore\n       ├─── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n       └─── "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("node_modules")]),t._v(":项目依赖包。它是我们项目启动时所需要运行的依赖")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("public")]),t._v(" ：静态资源。是我们 "),a("code",[t._v("html")]),t._v(" 模板所在的公共文件夹，如果你在 "),a("code",[t._v("public")]),t._v(" 里面放了一个静态资源【"),a("code",[t._v("css")]),t._v(" 文件，"),a("code",[t._v("js")]),t._v(" 文件,图片，字体】，那么当打包的时候，这些文件不会被编译;")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("favicom.ico")]),t._v(":网站标题的图标;")]),t._v(" "),a("li",[a("code",[t._v("index.html")]),t._v(":渲染的根页面（"),a("code",[t._v("root")]),t._v("）;")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v(".gitignore")]),t._v(":"),a("code",[t._v("git")]),t._v("时忽略的文件。是一份告诉 "),a("code",[t._v("git")]),t._v(" 提交的筛选名单,里面的"),a("code",[t._v("/node_modules")]),t._v(" 就是告诉 "),a("code",[t._v("git")]),t._v(" 存代码的时候把"),a("code",[t._v("node_modules")]),t._v(" 目录过滤掉，并不提交到"),a("code",[t._v("github")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("package.json")]),t._v(" ：是 "),a("code",[t._v("node_modules")]),t._v(" 包依赖的清单目录，也就是说我 "),a("code",[t._v("npm")]),t._v(" 安装的所有的依赖名字都会写入到 "),a("code",[t._v("package.json")]),t._v(" 里去；还有它包含我们启动项目的脚本（"),a("code",[t._v("scitpts")]),t._v("里面的内容），打包项目等命令所在文件。"),a("code",[t._v("package.json")]),t._v("的作用：依赖的清单，命令的运行")]),t._v(" "),a("ul",[a("li",[t._v("在"),a("code",[t._v("scripts")]),t._v("里，有个"),a("code",[t._v("eject")]),t._v(" 命令，是为了讲打包配置暴露到项目里的（会在项目根目录里创建一个"),a("code",[t._v("config")]),t._v("文件夹），但是运行"),a("code",[t._v("eject")]),t._v("命令是不可逆的，慎用，我们可以用"),a("code",[t._v("customize-cra")]),t._v("第三方工具库")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("README.md")]),t._v(" 项目说明文档，不要删除，为什么？因为在 GitHub "),a("code",[t._v("里开启静态服务也没，如果没有这个文件，你开启是不会成功的，而且，GitHub")]),t._v(" 他也不会提示你缺这个文件，所以比较坑，一定不要删除")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("src")]),t._v(" 是我们开发的源码所在文件夹 【最重要的："),a("code",[t._v("/src")]),t._v("】")]),t._v(" "),a("ol",[a("li",[a("code",[t._v(".svg")]),t._v(" 矢量图：不会失真，但是色彩值对比 "),a("code",[t._v("jpg")]),t._v(" 少，色彩不是很丰富")]),t._v(" "),a("li",[a("code",[t._v(".svg")]),t._v(" 我们前端完全可以手写出来。当然没人那么做，都是用软件生成，比如 ps")]),t._v(" "),a("li",[a("code",[t._v("serviceWorker.js")]),t._v(" 做离线缓存的，【离线==断网】在断网的情况下，我们的页面还是可以正常打开和访问的，不会出现 404,只是 "),a("code",[t._v("ajax")]),t._v(" 功能失效。")]),t._v(" "),a("li",[a("code",[t._v("src")]),t._v(" 下默认的哪些可以删：除了 "),a("code",[t._v("index.js")]),t._v("（入口文件是src/index.js） 其他的都可以删。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("为什么删？")]),t._v(" "),a("p",[t._v("因为我们要重构自己的项目结构在公司里开发项目，是有一个项目结构开发规范。")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("目录")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/src/")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("项目主目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/view")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("存放我们页面级的组件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/components")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("viwe 组件里公用的一些弹窗之类的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/api")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("把整个项目里所有的 ajax 请求写在这")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/tools")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("转化时间，分割数组，功能性纯 js 文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/assets")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("静态资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/index.js")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("入口文件 "),a("strong",[t._v("位置不可变,必须的")])])])])]),t._v(" "),a("h2",{attrs:{id:"运行项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行项目"}},[t._v("#")]),t._v(" 运行项目")]),t._v(" "),a("ol",[a("li",[t._v("启动本地项目开发环境")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm run start  或 yarn start\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("打包 "),a("code",[t._v("src")]),t._v(" 源码，变成原始的 "),a("code",[t._v("js")]),t._v(" 和 "),a("code",[t._v("html")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm run build\n")])])]),a("p",[t._v("还是需要使用服务端启动,如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g serve\n和\nserve "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s build\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("释放我们项目"),a("strong",[t._v("官方")]),t._v("配置文件，且该命令只能运行这一次，操作不可逆。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm run eject\n")])])]),a("p",[a("code",[t._v("npm run eject")]),t._v(" 一般是用不到的，官网提供了自定义配置接口，如果想改变项目里的官方配置，需要释放配置，再运行这个命令")]),t._v(" "),a("ul",[a("li",[t._v("【坑】  "),a("code",[t._v("npm run eject")]),t._v(" 我们创建项目的时候，官方会给初始化一个 "),a("code",[t._v("git")]),t._v(" 仓库，这时候使用的时候要先把代码提交到 "),a("code",[t._v("git")]),t._v(" 里或者，把 "),a("code",[t._v("git")]),t._v(" 仓库删掉,"),a("code",[t._v("react")]),t._v(" 才会区分出来这个组件是原生标签还是自定义的")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[t._v("注意")]),a("p",[t._v("当我们拿到一个项目，一般来说都不会给你项目里带着 "),a("code",[t._v("node_modules")]),t._v(" 包的，那就需要我们自己安装所有依赖。")])]),a("ul",[a("li",[t._v("想要运行项目需要先执行以下命令：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install 或者 yarn\n")])])]),a("p",[t._v("当使用 "),a("code",[t._v("npm")]),t._v(" 命令的时候，"),a("code",[t._v("npm")]),t._v(" 就会读取 "),a("code",[t._v("package.json")]),t._v("，然后会把你依赖清单里的名字全部下载下来。")]),t._v(" "),a("h2",{attrs:{id:"组件传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件传值"}},[t._v("#")]),t._v(" 组件传值")]),t._v(" "),a("ol",[a("li",[t._v("父传子：props")]),t._v(" "),a("li",[t._v("子传父：调用父组件的函数")]),t._v(" "),a("li",[t._v("跨级：context redux")])]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("p",[a("code",[t._v("react")]),t._v("引入的库")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// render")]),t._v("\nreact"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dom\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  路由")]),t._v("\nreact"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dom\nreact"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("route\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// redux")]),t._v("\nreact"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Redux\nredux\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);