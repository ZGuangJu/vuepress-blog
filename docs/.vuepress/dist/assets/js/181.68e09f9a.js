(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{749:function(t,v,e){"use strict";e.r(v);var a=e(10),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("URI是个纯粹的句法结构，用于指定标识Web资源的字符串的各个不同部分。URL是URI的一个特例，它包含了定位Web资源的足够信息。")]),t._v(" "),e("ol",[e("li",[t._v("URI:统一资源标识符(uniform resource identifier),是标识逻辑或物理资源的字符序列，与URL类似，也是一串字符。通过使用位置，名称或两者来标识Internet上的资源；它允许统一识别资源。")])]),t._v(" "),e("p",[t._v("有两种类型的URI，统一资源标识符（URL）和统一资源名称（URN）。")]),t._v(" "),e("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/JQK6vF.jpg",alt:"URI\\URL\\URN"}}),t._v(" "),e("p",[t._v("任何URI的通用形式都是：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("scheme："),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [user：password @] host [：port]] [/] path [？查询] [#片段]")]),t._v("\n")])])]),e("ul",[e("li",[e("p",[t._v("Scheme（方案）：该方案列出了具体语法和URI的任何相关协议。方案不区分大小写，后跟冒号。理想情况下，URI方案应该在互联网号码分配机构（IANA）注册，但也可以使用非注册方案。")])]),t._v(" "),e("li",[e("p",[t._v("权限组件：权限组件由多个部分组成：可选的身份验证部分，主机（由注册名称或IP地址组成） , 以及可选的端口号。身份验证部分包含用户名和密码，用冒号分隔，后跟at（@）符号。在@之后是主机名，然后是冒号，然后是一个端口号。请务必注意，IPv4地址必须采用点十进制表示法，并且IPv6地址必须括在括号中。")])]),t._v(" "),e("li",[e("p",[t._v("查询（可选）：查询包含一串非分层数据。虽然语法没有明确定义，但通常是由分隔符分隔的属性值对序列，例如＆符号或分号。查询通过问号与前一部分分开。")])]),t._v(" "),e("li",[e("p",[t._v("片段（可选）：片段包含片段标识符，该标识符为辅助资源提供方向。")])])]),t._v(" "),e("p",[t._v("Web上可用的每种资源如HTML文档、图像、视频片段、程序等都是一个来URI来定位的。")]),t._v(" "),e("p",[t._v("URI组成:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("\n1. 访问资源的命名机制\n\n2. 存放资源的主机名\n\n3. 资源自身的名称，由路径表示，着重强调于资源。\n")])])]),e("p",[t._v("例如:"),e("code",[t._v("/ServletDemo/mydemo3")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("URL:统一资源定位符(uniform resource locator), 是Internet上资源的地址，可以定义为引用地址的字符串，用于指示资源的位置以及用于访问它的协议。URL是在网络上定位资源的最普遍使用的方式，它提供了一种通过描述其网络位置或主要访问机制来检索物理位置的表示的方法。")])]),t._v(" "),e("p",[t._v("URL是Internet上用来描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上，特别是著名的Mosaic。")]),t._v(" "),e("p",[t._v("采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。")]),t._v(" "),e("p",[t._v("URL组成:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("\n1. 用于访问资源的协议(或称为服务方式)\n\n2. 服务器的位置(存有该资源的主机IP地址,无论是通过IP地址还是域名)\n\n3. 服务器上的端口号(可选)\n\n4. 资源在服务器目录结构中的位置(主机资源的具体地址。如目录和文件名等)\n\n5. 片段标识符(可选)\n")])])]),e("p",[t._v("例如:"),e("code",[t._v("http://localhost:8080/Demo/mydemo")])]),t._v(" "),e("p",[t._v("如上所示，其中第一部分用于协议，部分的其余部分用于由域名或程序名称组成的资源。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("URN:统一资源名称 (Uniform Resource Name)")])]),t._v(" "),e("p",[t._v("唯一标识一个实体的标识符，但是不能给出实体的位置。系统可以先在本地寻找一个实体，在它试着在Web上找到该实体之前。它也允许Web位置改变，然而这个")]),t._v(" "),e("p",[t._v("实体却还是能够被找到。")]),t._v(" "),e("p",[t._v("标识持久性Internet资源。URN可以提供一种机制，用于查找和检索定义特定命名空间的架构文件。尽管普通的URL可以提供类似的功能,但是在这方面,URN更加强")]),t._v(" "),e("p",[t._v("大并且更容易管理，因为URN可以引用多个URL。")]),t._v(" "),e("p",[t._v("与URL不同,URN与地址无关。URN和URL都属于URI。")]),t._v(" "),e("h1",{attrs:{id:"uri和url的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uri和url的区别"}},[t._v("#")]),t._v(" URI和URL的区别")]),t._v(" "),e("p",[t._v("URL是统一资源定位器，用于标识资源；URI（统一资源标识符）提供了更简单和可扩展的标识资源的方法。URL是URI的子集，下面我们就来看看一下URL和URI的主要区别是什么。")]),t._v(" "),e("p",[t._v("1、作用的区别")]),t._v(" "),e("p",[t._v("URL（统一资源定位符）主要用于链接网页，网页组件或网页上的程序，借助访问方法（http，ftp，mailto等协议）来检索位置资源。")]),t._v(" "),e("p",[t._v("URI（统一资源标识符）用于定义项目的标识，此处单词标识符表示无论使用的方法是什么（URL或URN），都要将一个资源与其他资源区分开来。")]),t._v(" "),e("p",[t._v("2、可以说URL是URI（URL是URI的子集），但URI永远不能是URL。")]),t._v(" "),e("p",[t._v("3、协议区别")]),t._v(" "),e("p",[t._v("URL指定要使用的协议类型，而URI不涉及协议规范。")]),t._v(" "),e("h1",{attrs:{id:"uri、url和urn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uri、url和urn"}},[t._v("#")]),t._v(" URI、URL和URN")]),t._v(" "),e("p",[t._v("URI，是统一资源标识符，用来唯一的标识一个资源。而URL是统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。而URN，统一资源命名，是通过名字来标识资源，比如mailto:java-net@java.sun.com。也就是说，URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。URL和URN都是一种URI；")]),t._v(" "),e("p",[t._v("URL是URI的一种（通过那个图就看的出来吧）。但也不是所有的URI都是URL哦，就好像蝴蝶都会飞，但会飞的可不都是蝴蝶啊！")])])}),[],!1,null,null,null);v.default=_.exports}}]);