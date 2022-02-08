(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{659:function(t,e,a){"use strict";a.r(e);var s=a(10),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("ul",[a("li",[t._v("axios 是基于 promise 对 Ajax 的封装")]),t._v(" "),a("li",[t._v("axios 必须在项目里进行一个封装")])]),t._v(" "),a("ol",[a("li",[t._v("为了好管理")]),t._v(" "),a("li",[t._v("为了自测")])])]),a("ul",[a("li",[a("p",[t._v("封装的几个点：")]),t._v(" "),a("ol",[a("li",[t._v("拦截")]),t._v(" "),a("li",[t._v("加验证信息token")]),t._v(" "),a("li",[t._v("容错，格式化数据")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP介绍"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("XHR & fetch")]),t._v(" "),a("h2",{attrs:{id:"一、-http-请求交互的基本过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-http-请求交互的基本过程"}},[t._v("#")]),t._v(" 一、 HTTP 请求交互的基本过程")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("端")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("动作")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("端")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请求行 =>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请求头 =>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请求体 =>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("<= 响应行")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("<= 响应头")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("<= 响应体")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")])])])]),t._v(" "),a("h2",{attrs:{id:"二、-http-请求报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-http-请求报文"}},[t._v("#")]),t._v(" 二、 HTTP 请求报文")]),t._v(" "),a("ol",[a("li",[t._v("请求行")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("method")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请求方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GET POST ···")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("url")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/login /?id=123 ···")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("多个请求头")])]),t._v(" "),a("p",[a("code",[t._v("Host")]),t._v(" 主机")]),t._v(" "),a("p",[a("code",[t._v("Cookie")])]),t._v(" "),a("p",[a("code",[t._v("Content-Type:application/x-www.form.urlencoded & application/json")]),t._v("对应请求体的格式")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("请求体")])]),t._v(" "),a("p",[a("code",[t._v("urlencoded")]),t._v(" 格式 ："),a("code",[t._v("username=tom&pwd=123")])]),t._v(" "),a("p",[a("code",[t._v("json")]),t._v(" 格式："),a("code",[t._v('{"username":"pwd":123}')])]),t._v(" "),a("p",[t._v("图片数据")]),t._v(" "),a("p",[t._v("文件···")]),t._v(" "),a("h2",{attrs:{id:"三、-http-响应报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-http-响应报文"}},[t._v("#")]),t._v(" 三、 HTTP 响应报文")]),t._v(" "),a("ol",[a("li",[t._v("响应状态行")])]),t._v(" "),a("p",[a("code",[t._v("status")]),t._v(","),a("code",[t._v("status text")])]),t._v(" "),a("p",[t._v("200 \\ 201···")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("多个响应头")])]),t._v(" "),a("p",[a("code",[t._v("Content-Type")]),t._v("："),a("code",[t._v("text/html；``charset=utf-8")]),t._v(" 响应体的格式\n"),a("code",[t._v("set-Cookie")]),t._v("："),a("code",[t._v("BD_CK_SAM=1;path=/")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("响应体")])]),t._v(" "),a("p",[a("code",[t._v("html")]),t._v(" 文本/"),a("code",[t._v("json")]),t._v(" 文本/"),a("code",[t._v("js")]),t._v("/"),a("code",[t._v("css")]),t._v("/图片···")]),t._v(" "),a("h2",{attrs:{id:"四、-post请求体参数格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、-post请求体参数格式"}},[t._v("#")]),t._v(" 四、 POST请求体参数格式")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("code",[t._v("Content-Type:application/x-www.form.urlencoded;charset=utf-8")]),t._v("\n用于键值对参数，参数的建值用"),a("code",[t._v("=")]),t._v("连接 参数之间用"),a("code",[t._v("&")]),t._v("连接")])]),t._v(" "),a("p",[t._v("例如：name=%gfgdgrggre45%%$&=12")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("code",[t._v("Content-Type:application/json")])])]),t._v(" "),a("p",[t._v('例如：{"name":"%gfgdgrggre45%%$&","age":12}')]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("code",[t._v("Content-Type:multipart/from-data")])])]),t._v(" "),a("h2",{attrs:{id:"五、-响应状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、-响应状态码"}},[t._v("#")]),t._v(" 五、 响应状态码")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("statustext")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("OK")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("请求成功，一般用于GET与POST请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("201")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("已创建。成功请求并创建了新的资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("401")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Unauthorized")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("未授权/请求，要求用户的身份认证")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("404")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Not Found")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务器无法根据客户端的请求找到资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("500")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Internal Server Error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务器内部错误，无法完成请求")])])])]),t._v(" "),a("h2",{attrs:{id:"六、-不同类型的请求和作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、-不同类型的请求和作用"}},[t._v("#")]),t._v(" 六、 不同类型的请求和作用")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("GET:  从服务器读取数据")])]),t._v(" "),a("li",[a("p",[t._v("POST:  向服务器添加新数据")])]),t._v(" "),a("li",[a("p",[t._v("PUT:  更新服务器数据")])]),t._v(" "),a("li",[a("p",[t._v("DELETE:  删除服务器数据")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://zguangju.gitee.io/Frontend/Axios/axios3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("具体说明"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"七、-api的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、-api的分类"}},[t._v("#")]),t._v(" 七、 API的分类")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("REST API")]),t._v("("),a("code",[t._v("restful")]),t._v(")")]),t._v(" "),a("p",[t._v("a  发送请求进行 "),a("code",[t._v("CRUD")]),t._v(" ，哪个操作有请求方式来决定")]),t._v(" "),a("p",[t._v("b  同一个请求路径可以进行多个操作")]),t._v(" "),a("p",[t._v("c  请求方式会用到 "),a("code",[t._v("GET")]),t._v("/"),a("code",[t._v("POST")]),t._v("/"),a("code",[t._v("PUT")]),t._v("/"),a("code",[t._v("DELETE")])])]),t._v(" "),a("li",[a("p",[t._v("非"),a("code",[t._v("REST API")]),t._v("（"),a("code",[t._v("restless")]),t._v("）")]),t._v(" "),a("p",[t._v("a  请求方式不决定请求的 "),a("code",[t._v("CRUD")]),t._v(" 操作")]),t._v(" "),a("p",[t._v("b  一个请求路径只对应一个操作")]),t._v(" "),a("p",[t._v("c  一般只有 "),a("code",[t._v("GET")]),t._v("/"),a("code",[t._v("POST")])])])]),t._v(" "),a("ul",[a("li",[t._v("json-server 搭建 REST API")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Install JSON Server")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g json"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("server\n")])])]),a("p",[t._v("Create a db.json file with some data")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"posts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json-server"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typicode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"comments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"body"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"postId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"profile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typicode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Start JSON Server")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("json"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("watch db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);