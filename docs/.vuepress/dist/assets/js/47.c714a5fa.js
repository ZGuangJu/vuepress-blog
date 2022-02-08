(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{618:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("DAY 1")]),t._v(" "),s("h2",{attrs:{id:"路由组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由组成部分"}},[t._v("#")]),t._v(" 路由组成部分")]),t._v(" "),s("ol",[s("li",[t._v("路由容器 BrowserRouter [H5api]和HashRouter  【#】\n"),s("ul",[s("li",[t._v("basename 设置公共的根路径")])])]),t._v(" "),s("li",[t._v("导航组件 Link Navlink\n"),s("ul",[s("li",[t._v("to 字符串为地址，对象可配置路由传参，其中pathname属性是地址")])])]),t._v(" "),s("li",[t._v("路由配置组件\n"),s("ul",[s("li",[t._v("path 字符串是匹配的路径,对象可配置路由传参")]),t._v(" "),s("li",[t._v("component 加载组件的")])])])]),t._v(" "),s("h2",{attrs:{id:"路由传参方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由传参方法"}},[t._v("#")]),t._v(" 路由传参方法")]),t._v(" "),s("ol",[s("li",[t._v("search 相当于vue的 query 地址栏以?key=value")]),t._v(" "),s("li",[t._v("hash 锚点方式")]),t._v(" "),s("li",[t._v("state 通过js传参 数据类型为对象")]),t._v(" "),s("li",[t._v("params 通过动态路由传递数据 属于match对象中的，前三个属于location")])]),t._v(" "),s("p",[t._v("DAY 2")]),t._v(" "),s("h2",{attrs:{id:"route三种渲染方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route三种渲染方式"}},[t._v("#")]),t._v(" Route三种渲染方式")]),t._v(" "),s("p",[t._v("chirlren\nrender\ncomponent")]),t._v(" "),s("h2",{attrs:{id:"权重"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权重"}},[t._v("#")]),t._v(" 权重")]),t._v(" "),s("h2",{attrs:{id:"路由配置方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由配置方式"}},[t._v("#")]),t._v(" 路由配置方式")]),t._v(" "),s("h3",{attrs:{id:"嵌套路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由"}},[t._v("#")]),t._v(" 嵌套路由")]),t._v(" "),s("p",[t._v("一级路由里呈现二级的路由页面，二级的路由地址是基于一级的路由地址\n"),s("code",[t._v("/home")]),t._v("是一级，"),s("code",[t._v("/home/01")]),t._v(" 是嵌套的二级")]),t._v(" "),s("h3",{attrs:{id:"动态路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[t._v("#")]),t._v(" 动态路由")]),t._v(" "),s("p",[t._v("一个匹配组件可以匹配到多个地址，和嵌套路由相似，但是嵌套路由的地址是写死的，动态路由地址是被动态参数接收的\n"),s("code",[t._v("/:id")]),t._v(" 可以匹配 "),s("code",[t._v("/home")]),t._v(" "),s("code",[t._v("/news")]),t._v("\n并且动态路由也是路由传参的一种方式")]),t._v(" "),s("h3",{attrs:{id:"match-的-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#match-的-path"}},[t._v("#")]),t._v(" match 的 path")]),t._v(" "),s("p",[t._v("路由组件中被注入的对象，match里有path属性和url属性\npath属性是路由匹配用的，url属性指当前地址栏的路径\n如果需要再动态路由组件中，拼接导航用url 拼接Route 用 path")]),t._v(" "),s("p",[t._v("rem 插件npm i postcss-pxtorem\nvh\nvw\nreact-router-config\nreact-router-pro\nredux\nmobx简单")]),t._v(" "),s("p",[t._v("DAY3")]),t._v(" "),s("h2",{attrs:{id:"路由容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由容器"}},[t._v("#")]),t._v(" 路由容器")]),t._v(" "),s("p",[t._v("BrowserRouter 和 HashRouter\n属性 porps ：basename 设置一个基础的根路径")]),t._v(" "),s("h2",{attrs:{id:"导航组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航组件"}},[t._v("#")]),t._v(" 导航组件")]),t._v(" "),s("p",[t._v("NavLink 是一个扩展的导航组件，有额外的激活样式，\nNavLink和link都默认渲染成a标签的\nNavLink有exact精确匹配\nprops ：activeClassName ,activeStyle isActive\n默认激活样式类名，"),s("code",[t._v(".active")])]),t._v(" "),s("h2",{attrs:{id:"匹配组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配组件"}},[t._v("#")]),t._v(" 匹配组件")]),t._v(" "),s("p",[t._v("Route ,用来匹配路由地址并渲染对应得页面")]),t._v(" "),s("p",[t._v("props:pach【可选，通配符】 component【必须的】【类和函数，匹配后渲染】> render【函数】> chirdren【函数 无论匹配与否都渲染】")]),t._v(" "),s("p",[t._v("DAY4")]),t._v(" "),s("h2",{attrs:{id:"window-fetch-ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-fetch-ajax"}},[t._v("#")]),t._v(" window.fetch() == ajax")]),t._v(" "),s("p",[t._v("DAY 5")]),t._v(" "),s("h2",{attrs:{id:"路由传参方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由传参方式"}},[t._v("#")]),t._v(" 路由传参方式")]),t._v(" "),s("h2",{attrs:{id:"hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),s("p",[t._v("让无状态组件拥有全部的react特性，【state，生命周期】\n以前只有lei组件有state和生命周期等一系列react特性\nhook 可以让函数组件做更多的事情")]),t._v(" "),s("h3",{attrs:{id:"usestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),s("ul",[s("li",[t._v("语法const [数据，修改数据的方法 ] = useState(value【布尔|str|obj|arr】)\n注意：当使用修改数据的方法时，会用新的值【替换】成原数据，慎用，要做新旧值合并")])]),t._v(" "),s("h3",{attrs:{id:"useeffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),s("p",[t._v("生命周期:把挂载成功，更新完成，卸载函数全部融合了，\n语法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂载 更新 卸载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂载成功")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听某个数据变化是更新执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对监听的特定值做响应")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新 卸载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个组件里可以用n个Efffect函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只用当销毁当前组件的时候这个return函数才会执行")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("DAY 6")]),t._v(" "),s("h2",{attrs:{id:"路由重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由重定向"}},[t._v("#")]),t._v(" 路由重定向")]),t._v(" "),s("p",[s("code",[t._v("<Redirect>")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("from")]),t._v(" 当前地址")]),t._v(" "),s("li",[s("code",[t._v("to")]),t._v(" 要去的地方\n"),s("ul",[s("li",[s("code",[t._v("to={}")]),t._v(" 对象配置 "),s("code",[t._v("{pathname:'/dir',state:{},hash:\"}")])])])])]),t._v(" "),s("h2",{attrs:{id:"withroute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withroute"}},[t._v("#")]),t._v(" withRoute")]),t._v(" "),s("p",[t._v("高级函数，将非路由组件包装，使该组件拥有路由对象")]),t._v(" "),s("h2",{attrs:{id:"switch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[t._v("#")]),t._v(" Switch")]),t._v(" "),s("p",[t._v("什么时候使用Switch 当使用Redirect 重定向的时候使用")]),t._v(" "),s("p",[t._v("功能：自上而下，逐一匹配，只要匹配上一条立即渲染且中止匹配")]),t._v(" "),s("h2",{attrs:{id:"路由定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由定义"}},[t._v("#")]),t._v(" 路由定义")]),t._v(" "),s("p",[t._v("根据不同的地址呈现对应的页面或内容，叫路由")]),t._v(" "),s("p",[t._v("react路由的匹配模式是贪婪模式。\n当地址栏发生改变BrowserRouter里的所有导航和route都会被匹配。\nDAY 7")]),t._v(" "),s("p",[t._v("Redux 和 react-Redux\nredux 是一个独立的，单向数据流的全局状态管理器 ---状态机 （mobx）")]),t._v(" "),s("h2",{attrs:{id:"组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组成部分"}},[t._v("#")]),t._v(" 组成部分")]),t._v(" "),s("ol",[s("li",[t._v("creactStore 创建仓库")]),t._v(" "),s("li",[t._v("getState 获取状态")]),t._v(" "),s("li",[t._v("dispatch 派发动作")]),t._v(" "),s("li",[t._v("subscribe 订阅状态")]),t._v(" "),s("li",[t._v("reducer 不是API，是用于创建仓库的核心，里面是state")]),t._v(" "),s("li",[t._v("action 也不是API ，纯函数")])]),t._v(" "),s("h3",{attrs:{id:"安装中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装中间件"}},[t._v("#")]),t._v(" 安装中间件")]),t._v(" "),s("ul",[s("li",[t._v("applyMiddleware")])]),t._v(" "),s("h3",{attrs:{id:"第三方插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方插件"}},[t._v("#")]),t._v(" 第三方插件")]),t._v(" "),s("ul",[s("li",[t._v("在派发中执行异步代码 redux-thunk")])]),t._v(" "),s("h3",{attrs:{id:"核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("reducer")]),t._v("：是一个纯函数，只对"),s("code",[t._v("state")]),t._v("业务操作，不做和"),s("code",[t._v("state")]),t._v("无关的事，都要是同步代码，不能有异步。")]),t._v(" "),s("li",[s("code",[t._v("reducer")]),t._v("中的"),s("code",[t._v("state")]),t._v("：一个只读的对象数据，不可以直接修改，因为被"),s("code",[t._v("redux")]),t._v("监听保护，每次都是在"),s("code",[t._v("reducer")]),t._v("里返回一个新的对象数据，由"),s("code",[t._v("redux")]),t._v("进行新旧数据处理。")]),t._v(" "),s("li",[t._v("数据流：自上而下，单项数据流。")])]),t._v(" "),s("h2",{attrs:{id:"react-redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-redux"}},[t._v("#")]),t._v(" react-redux")]),t._v(" "),s("p",[s("code",[t._v("react-redux")]),t._v("就是用来配合"),s("code",[t._v("redux")]),t._v("进行优雅，方便，快速的开发。")]),t._v(" "),s("h3",{attrs:{id:"provider-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provider-组件"}},[t._v("#")]),t._v(" Provider 组件")]),t._v(" "),s("p",[t._v("在项目的根节点，使用"),s("code",[t._v("Provider")]),t._v("包裹，还组件接受一个必须的属性"),s("code",[t._v("store")]),t._v(" ，使用"),s("code",[t._v("store")]),t._v("属性接受自定义的"),s("code",[t._v("redux")]),t._v("仓库对象")]),t._v(" "),s("p",[s("code",[t._v("Provider")]),t._v("里封装了"),s("code",[t._v("subscribe")]),t._v("订阅函数，极大的方便了我们使用"),s("code",[t._v("redux")])]),t._v(" "),s("h3",{attrs:{id:"connect-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-函数"}},[t._v("#")]),t._v(" connect 函数")]),t._v(" "),s("p",[t._v("高阶函数\n语法："),s("code",[t._v("connect(mapStateToProps,mapDispatchToProps)")]),t._v("\n作用：将"),s("code",[t._v("store")]),t._v("里的状态和派发动作映射到组件的属性"),s("code",[t._v("props")]),t._v("上。")])])}),[],!1,null,null,null);a.default=r.exports}}]);