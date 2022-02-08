(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{642:function(t,v,e){"use strict";e.r(v);var _=e(10),s=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ol",[e("li",[e("p",[e("code",[t._v("vuex")]),t._v("是什么\n全局状态管理器")])]),t._v(" "),e("li",[e("p",[t._v("五大组成部分")])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("state")]),t._v(" 状态数据")]),t._v(" "),e("li",[e("code",[t._v("getters")]),t._v(" 计算属性")]),t._v(" "),e("li",[e("code",[t._v("actions")]),t._v("  异步处理方法")]),t._v(" "),e("li",[e("code",[t._v("mutations")]),t._v("  同步修改"),e("code",[t._v("state")]),t._v("方法")]),t._v(" "),e("li",[e("code",[t._v("modules")]),t._v("  多模块拆分"),e("code",[t._v("vuex")])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[e("code",[t._v("vuex")]),t._v("工作流程\n"),e("code",[t._v("state")]),t._v("数据绑定到组件上，组件触发"),e("code",[t._v("dispatch")]),t._v(" 调用"),e("code",[t._v("actions")]),t._v("里的方法， "),e("code",[t._v("actions")]),t._v("调用"),e("code",[t._v("commit")]),t._v(" 触发"),e("code",[t._v("mutations")]),t._v("里的方法，"),e("code",[t._v("muntations")]),t._v("里修改state数据，state数据一改变，会自动更新组件里的元素\n补充："),e("code",[t._v("getters")]),t._v("，一旦"),e("code",[t._v("state")]),t._v("被修改，"),e("code",[t._v("getters")]),t._v("会被触发，它的功能和"),e("code",[t._v("vue")]),t._v("组件里的"),e("code",[t._v("component")]),t._v("一样，用来过渡或加工"),e("code",[t._v("state")]),t._v("数据")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("mutations")]),t._v("和"),e("code",[t._v("actions")]),t._v("的区别")])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("mutations")]),t._v(" 处理同步 "),e("code",[t._v("actions")]),t._v("处理异步，修改数据只能在"),e("code",[t._v("mutations")]),t._v("里")]),t._v(" "),e("li",[t._v("就在"),e("code",[t._v("actions")]),t._v("中修改可以吗，可以，但不符合官方的规定，并且开启严格模式，会报错")])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("vue 开启严格模式")])]),t._v(" "),e("ul",[e("li",[t._v("开启严格模式，仅需在创建 "),e("code",[t._v("store")]),t._v(" 的时候传入 "),e("code",[t._v("strict: true")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("strict")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("辅助函数")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("mapState")])]),t._v(" "),e("li",[e("code",[t._v("mapGetters")])]),t._v(" "),e("li",[e("code",[t._v("mapActions")])]),t._v(" "),e("li",[e("code",[t._v("mapMutations")])])]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("如何解决"),e("code",[t._v("vuex")]),t._v(" 值刷新丢失的问题")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("vuex")]),t._v("数据存储在内存中，当页面刷新时就丢失了，\n登录成功后，数据存入"),e("code",[t._v("vuex")]),t._v("里，但是用户刷新页面，登录状态就丢失了")])]),t._v(" "),e("li",[e("p",[t._v("使用本地存储，来解决安装插件"),e("code",[t._v("vuex-persist")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);