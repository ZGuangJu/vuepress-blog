(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{789:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[a._v("介绍")]),t("p",[t("code",[a._v("yarn")]),a._v(" 是 "),t("code",[a._v("facebook")]),a._v(" 发明的新一代 "),t("code",[a._v("js")]),a._v(" 包管理器,和"),t("code",[a._v("npm")]),a._v("一样的依赖包管理器,支持离线使用."),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/migrating-from-npm",target:"_blank",rel:"noopener noreferrer"}},[a._v("这是 npm 与 yarn 的 命令对照"),t("OutboundLink")],1)])]),t("p",[t("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("英文官网"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[a._v("中文官网"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("hr"),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/install/#windows-stable",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),t("OutboundLink")],1),a._v("安装包 安装")])]),a._v(" "),t("p",[a._v("下载后运行软件，安装(用安装包安装有个弊端，当你用命令行升级yarn时，版本会固定到你安装软件时的那个版本)")]),a._v(" "),t("ul",[t("li",[a._v("通过 "),t("a",{attrs:{href:"http://www.91guangju.com/index.php/archives/35/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chocolatey"),t("OutboundLink")],1),a._v(" 安装")])]),a._v(" "),t("p",[a._v("(安装 "),t("code",[a._v("Chocolatey")]),a._v(" 之后，你就可以在控制台执行如下命令安装 "),t("code",[a._v("Yarn")]),a._v(" 了)")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("choco install yarn\n")])])]),t("ul",[t("li",[a._v("通过 "),t("code",[a._v("Scoop")]),a._v(" 安装（类似"),t("code",[a._v("Chocolatey")]),a._v("）")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("scoop install yarn\n")])])]),t("ul",[t("li",[a._v("使用 "),t("code",[a._v("npm")]),a._v(" 安装(常用)")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g yarn\n")])])]),t("h3",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),t("ul",[t("li",[a._v("在命令行里运行")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("v   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("   yarn "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("version\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[a._v("运行"),t("code",[a._v("yarn")]),a._v("报错"),t("code",[a._v("此系统上禁止运行脚本")]),a._v("，可使用以下方法，试一下：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("搜索"),t("code",[a._v("powershell")]),a._v("，右键以管理员身份运行")])]),a._v(" "),t("li",[t("p",[a._v("若要在本地计算机上运行您编写的未签名脚本和来自其他用户的签名脚本，请使用以下命令将计算机上的 执行策略更改为 "),t("code",[a._v("RemoteSigned")]),a._v("\n执行："),t("code",[a._v("set-ExecutionPolicy RemoteSigned")])])]),a._v(" "),t("li",[t("p",[a._v("查看执行策略："),t("code",[a._v("get-ExecutionPolicy")])])])])]),t("ul",[t("li",[a._v("卸载"),t("code",[a._v("yarn")])])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm uninstall "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g yarn\n")])])]),t("ul",[t("li",[a._v("清楚yarn的缓存")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn cache clean\n")])])]),t("ul",[t("li",[a._v("升级最新版本")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g yarn@latest\n")])])]),t("ul",[t("li",[a._v("升级至最新的发布版本 - 大众")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" version latest\n")])])]),t("h3",{attrs:{id:"yarn-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-create"}},[a._v("#")]),a._v(" yarn create")]),a._v(" "),t("p",[t("code",[a._v("yarn create")]),a._v(" 是这个包管理工具提供的新功能，其内部就是自动去安装一个 "),t("code",[a._v("create-<xxx>")]),a._v(" 的模块（临时），然后自动执行这个模块中的 "),t("code",[a._v("bin")]),a._v("。\n例如:\n"),t("code",[a._v("yarn create react-app my-react-app")]),a._v(" 就相当于先 "),t("code",[a._v("yarn global add create-react-app")]),a._v("，然后自动执行 "),t("code",[a._v("create-react-app my-react-app")])]),a._v(" "),t("h3",{attrs:{id:"管理源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理源"}},[a._v("#")]),a._v(" 管理源")]),a._v(" "),t("ul",[t("li",[a._v("查看当前镜像")])]),a._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn config get registry\n")])])]),t("ul",[t("li",[a._v("设置为淘宝镜像")])]),a._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn config set registry http://registry.npm.taobao.org/\n")])])]),t("ul",[t("li",[a._v("设置默认为镜像")])]),a._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn config set registry https://registry.yarnpkg.com\n")])])]),t("ul",[t("li",[a._v("其他镜像地址")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.npmjs.org")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\nnpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.npm.taobao.org")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\nyarn "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.yarnpkg.com")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\nyarn "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.npm.taobao.org")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\ncnpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("r.cnpmjs.org")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\ntaobao "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.npm.taobao.org")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\nnj "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.nodejitsu.com")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\nrednpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.mirror.cqupt.edu.cn")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n\nnpmMirror "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("skimdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("npmjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n\ndeunpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" http"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("registry.enpmjs.org")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\n")])])]),t("h3",{attrs:{id:"yarn-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-2"}},[a._v("#")]),a._v(" yarn 2")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.yarnpkg.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn 2 文档"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[t("p",[a._v("从"),t("code",[a._v("yarn 1.x")]),a._v(" 迁移到"),t("code",[a._v("yarn 2")]),a._v("(启用 "),t("code",[a._v("yarn 2")]),a._v(")\n"),t("a",{attrs:{href:"https://www.yarnpkg.com.cn/advanced/migration#step-by-step",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方迁移指南"),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[a._v("项目中安装 "),t("code",[a._v("yarn 2")]),a._v("(官方建议 全局安装的"),t("code",[a._v("1.x")]),a._v(" 项目中安装"),t("code",[a._v("2.x")]),a._v(")")])])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 官方 已修改，不用这种方式了")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// npm install -g yarn@berry")]),a._v("\n")])])]),t("ol",[t("li",[a._v("安装"),t("code",[a._v("yarn")]),a._v(" ,已装忽略")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g yarn\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("进入项目")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("cd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("abc"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("d\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("运行命令")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" version berry\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"title"}),t("p",[t("code",[a._v("yarn 2")]),a._v(" 不是"),t("code",[a._v("yarn 1.x")]),a._v("的升级版，它们是两个不同的东西，"),t("a",{attrs:{href:"https://blog.csdn.net/u010730126/article/details/107857940",target:"_blank",rel:"noopener noreferrer"}},[a._v("了解"),t("code",[a._v("yarn2")]),t("OutboundLink")],1)])]),t("ul",[t("li",[a._v("工程中升级为"),t("code",[a._v("Yarn 2")])])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("version # "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A")]),a._v("\n\n# 上面"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A")]),a._v("行得到的版本如果是"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.22")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("\nyarn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" version berry # "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("B1")]),a._v("\n\n# 上面"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A")]),a._v("行得到的版本如果低于"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.22")]),a._v("\nyarn policies set"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("version berry # "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("B2")]),a._v("\n")])])]),t("ul",[t("li",[a._v("升级yarn 2")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" version latest\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// or")]),a._v("\nyarn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" version from sources\n")])])]),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/u010730126/article/details/107857940",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn 2 的安装和使用"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("显示版本号，证明安装成功。")]),a._v(" "),t("h2",{attrs:{id:"yarn-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-常用命令"}},[a._v("#")]),a._v(" Yarn 常用命令")]),a._v(" "),t("p",[t("code",[a._v("yarn")]),a._v("的一些常见命令。")]),a._v(" "),t("ul",[t("li",[a._v("初始化包(等价于"),t("code",[a._v("npm init")]),a._v(")")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn init\n")])])]),t("ul",[t("li",[a._v("为当前正在开发的包新增一个依赖包；")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("你可以用以下参数添加其它类型的依赖:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn add "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("dev       "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//添加到 devDependencies")]),a._v("\nyarn add "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("peer      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//添加到 peerDependencies")]),a._v("\nyarn add "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("optional  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//添加到 optionalDependencies")]),a._v("\n")])])]),t("p",[a._v("通过指定依赖版本和标签，你可以安装一个特定版本的包:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nyarn add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("注：[version] 或 [tag] 会被添加到 "),t("code",[a._v("package.json")]),a._v("，并在安装依赖时被解析。")]),a._v(" "),t("ul",[t("li",[a._v("从当前包里移除包。")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn remove "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("packagename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("ul",[t("li",[a._v("安装"),t("code",[a._v("package.json")]),a._v(" 文件里定义的所有依赖包；")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn\n")])])]),t("ul",[t("li",[a._v("发布一个包到包管理器；")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn publish "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("ul",[t("li",[a._v("项目中升级依赖包")])]),a._v(" "),t("ol",[t("li",[t("code",[a._v("yarn upgrade-interactive --latest")]),a._v("命令（亲测无效，不能更新"),t("code",[a._v("package.json")]),a._v("中的版本，可以更改"),t("code",[a._v("yarn.lock")]),a._v("中包的版本号）")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn upgrade"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("interactive "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("latest\n")])])]),t("p",[a._v("输出结果")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("info Color legend "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"<red>"')]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Major Update backward"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("incompatible updates\n "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"<yellow>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Minor Update backward"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("compatible features\n "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"<green>"')]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Patch Update backward"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("compatible bug fixes\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" Choose which packages to update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n devDependencies\n   name                 range   from      to     url\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" vuepress             latest  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.5")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".2")]),a._v("  ❯  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.5")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".3")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("https")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("vuejs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("vuepress#readme\n\n dependencies\n   name                 range   from      to     "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("url")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" vuepress"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("theme"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("reco  latest  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".7")]),a._v("  ❯  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.5")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".5")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("https")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("vuepress"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("theme"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("reco"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("recoluan"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com\n")])])]),t("p",[a._v("需要手动选择升级的依赖包，按空格键选择，"),t("code",[a._v("a")]),a._v(" 键切换所有，"),t("code",[a._v("i")]),a._v(" 键反选选择")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("指定版本号，这种方法会在 "),t("code",[a._v("package.json")]),a._v(" 文件中限定包的版本")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn upgrade "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("使用 "),t("code",[a._v("npm-check-updates")]),a._v(" 升级（亲测无效，不能更新"),t("code",[a._v("package.json")]),a._v("中的版本，可以更改"),t("code",[a._v("yarn.lock")]),a._v("中包的版本号）")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 先下载")]),a._v("\nyarn global add npm"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("check"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("updates\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 更新包（yarn.lock和package.json同步更新）")]),a._v("\nncu "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("upgrade "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("upgradeAll "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" yarn upgrade\n")])])]),t("h3",{attrs:{id:"默认命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认命令"}},[a._v("#")]),a._v(" 默认命令")]),a._v(" "),t("p",[a._v("执行不带任何命令的"),t("code",[a._v("yarn")]),a._v("，等同于执行"),t("code",[a._v("yarn install")]),a._v("，并透传所有参数。")]),a._v(" "),t("h3",{attrs:{id:"其他命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[a._v("#")]),a._v(" 其他命令")]),a._v(" "),t("ul",[t("li",[a._v("查看yarn历史版本")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm view yarn versions\n")])])]),t("ul",[t("li",[a._v("升级指定版本的"),t("code",[a._v("yarn")]),a._v(" （例：升级到1.22.4版本）")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("yarn upgrade v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22.4")]),a._v("\n")])])]),t("h3",{attrs:{id:"用户自定义脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户自定义脚本"}},[a._v("#")]),a._v(" 用户自定义脚本")]),a._v(" "),t("p",[a._v("执行"),t("code",[a._v("yarn <script> [<args>]")]),a._v("将会执行用户自定义脚本。参阅"),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/cli/run",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn run"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"},[a._v("附")]),t("ul",[t("li",[t("code",[a._v("package.json")]),a._v("：包含包的所有依赖信息；")]),a._v(" "),t("li",[t("code",[a._v("yarn.lock")]),a._v("：记录每一个依赖项的确切版本信息；")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);