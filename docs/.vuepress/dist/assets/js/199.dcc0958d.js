(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{770:function(t,a,s){"use strict";s.r(a);var r=s(10),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("Trojan是什么")]),s("p",[s("code",[t._v("Trojan")]),t._v("模仿了互联网上最常见的"),s("code",[t._v("HTTPS")]),t._v("协议，以诱骗GFW封锁认为它就是"),s("code",[t._v("HTTPS")]),t._v("，从而不被识别。"),s("code",[t._v("Trojan")]),t._v("处理来自外界的"),s("code",[t._v("HTTPS")]),t._v("请求，如果是合法的，那么为该请求提供服务，否则将该流量转交给"),s("code",[t._v("web")]),t._v("服务器"),s("code",[t._v("Nginx")]),t._v("，由"),s("code",[t._v("Nginx")]),t._v("为其提供服务。基于这个工作过程可以知道，"),s("code",[t._v("Trojan")]),t._v("的一切表现均与"),s("code",[t._v("Nginx")]),t._v("一致，不会引入额外特征，从而达到无法识别的效果。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Trojan")]),t._v("与"),s("code",[t._v("v2ray")]),t._v(" "),s("code",[t._v("ws")]),t._v("协议的区别：\n"),s("code",[t._v("v2ray")]),t._v("是"),s("code",[t._v("nginx")]),t._v("侦听"),s("code",[t._v("443")]),t._v("，数据→"),s("code",[t._v("nginx")]),t._v(">"),s("code",[t._v("v2ray")]),t._v("；"),s("code",[t._v("Trojan")]),t._v("是自己侦听"),s("code",[t._v("443")]),t._v("，都是伪装成网站。")])])]),s("h2",{attrs:{id:"系统要求及脚本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统要求及脚本介绍"}},[t._v("#")]),t._v(" 系统要求及脚本介绍")]),t._v(" "),s("p",[t._v("1、系统支持"),s("code",[t._v("centos7+/debian9+/ubuntu16+")]),t._v("，")]),t._v(" "),s("p",[t._v("2、域名需要解析到"),s("code",[t._v("VPS")]),t._v("并生效，")]),t._v(" "),s("p",[t._v("3、脚本自动续签"),s("code",[t._v("https")]),t._v("证书，")]),t._v(" "),s("p",[t._v("4、自动配置伪装网站，位于"),s("code",[t._v("/usr/share/nginx/html/")]),t._v("目录下，可自行替换其中内容，")]),t._v(" "),s("p",[t._v("5、请不要在任何生产环境使用一键脚本，此条适用于本站所有脚本，专门用来科学上网的"),s("code",[t._v("VPS")]),t._v("可以随意使用，")]),t._v(" "),s("p",[t._v("6、"),s("code",[t._v("trojan")]),t._v("不能用"),s("code",[t._v("CDN")]),t._v("，不要开启"),s("code",[t._v("CDN")]),t._v("，")]),t._v(" "),s("p",[t._v("7、如果你在用谷歌云、阿里云等产品的时候，需要在控制台开放"),s("code",[t._v("80")]),t._v("、"),s("code",[t._v("443")]),t._v("端口。")]),t._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("1台"),s("code",[t._v("VPS")]),t._v("，我用的"),s("code",[t._v("Vultr")]),t._v("，其他如搬瓦工、谷歌云等")])]),t._v(" "),s("li",[s("p",[t._v("1个域名（推荐 GoDaddy）")])]),t._v(" "),s("li",[s("p",[t._v("解析域名到你的 "),s("code",[t._v("VPS")]),t._v("的 "),s("code",[t._v("IP")]),t._v("上")])]),t._v(" "),s("li",[s("p",[t._v("服务端一键安装 "),s("code",[t._v("Trojan")]),t._v(" & "),s("code",[t._v("BBR")]),t._v("。（加速用 "),s("code",[t._v("BBRPlus")]),t._v("）")])]),t._v(" "),s("li",[s("p",[t._v("下载"),s("code",[t._v("Windows")]),t._v("客户端"),s("code",[t._v("V2rayN")]),t._v("等，并设置浏览器"),s("code",[t._v("SwitchyOmega")])])])]),t._v(" "),s("h2",{attrs:{id:"创建vps服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建vps服务器"}},[t._v("#")]),t._v(" 创建VPS服务器")]),t._v(" "),s("ul",[s("li",[t._v("在"),s("code",[t._v("VPS")]),t._v("的系统要求：系统>="),s("code",[t._v("centos 7")]),t._v("，如果用"),s("code",[t._v("Centos 8")]),t._v("可以不用安装BBR加速，直接使用即可(所以最好用"),s("code",[t._v("Centos 8")]),t._v(")。")])]),t._v(" "),s("ol",[s("li",[t._v("选择云服务器(这里用的是Vultr的服务器)")])]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1Kw4I.png",alt:"Trojan01"}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("指定服务器地址和系统类型、带宽等")])]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KdUA.png",alt:"Trojan02"}}),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KYuD.png",alt:"Trojan03"}}),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("输入名称")])]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KGjO.png",alt:"Trojan04"}}),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("稍等一会，等服务器分配完成，然后可以ping一下IP地址，看速度是不是可以，如果总是请求超时，建议重新申请一个再试，直到速度满意为止，可以用cmd ping，也可以用"),s("a",{attrs:{href:"http://ping.chinaz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("站长之家"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1K8gK.png",alt:"Trojan05"}}),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KD8P.png",alt:"Trojan06"}}),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1Ksv8.png",alt:"Trojan07"}}),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KcDg.png",alt:"Trojan08"}}),t._v(" "),s("h2",{attrs:{id:"申请域名并解析到vps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请域名并解析到vps"}},[t._v("#")]),t._v(" 申请域名并解析到VPS")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("注册域名 "),s("code",[t._v("GoDaddy")])])]),t._v(" "),s("li",[s("p",[t._v("将域名解析到云服务器（VPS）上 用"),s("code",[t._v("Cloudflare")]),t._v("解析")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("注册"),s("code",[t._v("Cloudflare")])])]),t._v(" "),s("li",[s("p",[t._v("登录"),s("code",[t._v("Cloudflare")]),t._v(" 在页面中点击"),s("code",[t._v("Add site")])])])])]),t._v(" "),s("li",[s("p",[t._v("添加站点以后，点击"),s("code",[t._v("DNS")]),t._v(",并按步骤添加一条记录，最好添加二级域名，这样可以在一个服务器添加多个上网工具···")])])]),t._v(" "),s("p",[t._v("点击DNS按钮，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KgbQ.png",alt:"Trojan09"}}),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("添加完成以后，稍等一会，要判断是否解析完成， "),s("code",[t._v("ping")]),t._v("一下域名，看是否通了，如果你添加了二级域名，不要忘了要写完整。")])]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KREj.png",alt:"Trojan10"}}),t._v(" "),s("h2",{attrs:{id:"安装脚本-trojan-和-bbr加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装脚本-trojan-和-bbr加速"}},[t._v("#")]),t._v(" 安装脚本 trojan 和 bbr加速")]),t._v(" "),s("ol",[s("li",[t._v("通过"),s("code",[t._v("MobaXterm")]),t._v("（或者"),s("code",[t._v("XShell")]),t._v("等其他远程连接工具）连接到"),s("code",[t._v("VPS")]),t._v("，填写 "),s("code",[t._v("IP")]),t._v("地址，主机名默认 "),s("code",[t._v("root")]),t._v("，端口默认22，")])]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KWUs.png",alt:"Trojan11"}}),t._v(" "),s("p",[t._v("确定以后会提示你输入密码("),s("code",[t._v("linux")]),t._v("系统输入密码，是不显示内容的)，密码正确会进入这个页面：")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1Kf5n.png",alt:"Trojan12"}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("输入安装"),s("code",[t._v("Trojan")]),t._v("命令")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("curl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("O")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubusercontent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("atrandys"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("trojan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("trojan_centos7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" chmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x trojan_centos7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("trojan_centos7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n")])])]),s("p",[t._v("选择1 安装"),s("code",[t._v("trojan")]),t._v("，(一般安装一次就能成功)")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1K4Cq.png",alt:"Trojan13"}}),t._v(" "),s("p",[t._v("输入域名 tj.xxx.xxx.xxx.xxx.cloud，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KI2V.png",alt:"Trojan14"}}),t._v(" "),s("p",[t._v("如果提示证书安装不成功，根据提示再输入一次"),s("code",[t._v("Trojan")]),t._v("的安装命令，选择4，修复证书，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KHrF.png",alt:"Trojan15"}}),t._v(" "),s("p",[t._v("会提示证书安装成功，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KLVJ.png",alt:"Trojan16"}}),t._v(" "),s("p",[t._v("最后输入安装"),s("code",[t._v("Trojan")]),t._v("命令，正常安装"),s("code",[t._v("trojan")]),t._v("，最终成功以后，会提示一个下载地址，用这个地址下载"),s("code",[t._v("Trojan-cli")]),t._v("程序，一会要用，这个地址最好保存下来，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KOa9.png",alt:"Trojan17"}}),t._v(" "),s("p",[t._v("用最后给出的网址下载"),s("code",[t._v("Trojan")]),t._v("程序，解压以后，用记事本或其他程序打开"),s("code",[t._v("config.json")]),t._v("文件，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1MVPI.png",alt:"Trojan24"}}),t._v(" "),s("p",[t._v("在这个文件夹下，双击"),s("code",[t._v("start.bat")]),t._v("，开启"),s("code",[t._v("Trojan")]),t._v("服务。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("输入安装"),s("code",[t._v("BBR")]),t._v("命令回车(如果是"),s("code",[t._v("Centos8")]),t._v("可以不用安装，直接选择启动即可使用，"),s("code",[t._v("centos8")]),t._v("已经内置加速了)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("check"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("certificate https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubusercontent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cx9208"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Linux"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("NetSpeed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tcp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" chmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x tcp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tcp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n")])])]),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1KvP1.png",alt:"Trojan18"}}),t._v(" "),s("p",[t._v("安装完成，要重启"),s("code",[t._v("vps")]),t._v("，但是不建议用"),s("code",[t._v("MobaXterm")]),t._v("直接重启，可以在"),s("code",[t._v("Vultr")]),t._v("官网手动重启，因为客户端有时不能成功重启服务器，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1Kz26.png",alt:"Trojan19"}}),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1Kx8x.png",alt:"Trojan20"}}),t._v(" "),s("p",[t._v("重启完成以后，再用"),s("code",[t._v("MobaXterm")]),t._v("连接服务器。")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1MSxK.png",alt:"Trojan21"}}),t._v(" "),s("p",[t._v("我们还需要启动"),s("code",[t._v("BBR")]),t._v("加速工具，输入以下命令：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("check"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("certificate https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubusercontent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cx9208"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Linux"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("NetSpeed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tcp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" chmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x tcp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tcp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n")])])]),s("p",[t._v("这次输入4~8选项, 目的是启动"),s("code",[t._v("BBR")]),t._v("加速，看你安装的哪个版本的"),s("code",[t._v("BBR")]),t._v("，就启动哪个，提示启动成功即可，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1MeRP.png",alt:"Trojan23"}}),t._v(" "),s("h2",{attrs:{id:"下载客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载客户端"}},[t._v("#")]),t._v(" 下载客户端")]),t._v(" "),s("h3",{attrs:{id:"有两种使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有两种使用方式"}},[t._v("#")]),t._v(" 有两种使用方式")]),t._v(" "),s("ol",[s("li",[t._v("下载谷歌插件："),s("code",[t._v("SwitchyOmega")])])]),t._v(" "),s("p",[t._v("安装好插件以后，在"),s("code",[t._v("SwitchyOmega")]),t._v("选项中配置，先配置"),s("code",[t._v("proxy")]),t._v("，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1MuM8.png",alt:"Trojan25"}}),t._v(" "),s("p",[t._v("这里的地址和端口和"),s("code",[t._v("config.json")]),t._v("中的保持一致，")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1MMqg.png",alt:"Trojan26"}}),t._v(" "),s("p",[t._v("然后配置"),s("code",[t._v("auto switch")]),t._v("，将原有的规则删除，填写如下：")]),t._v(" "),s("p",[t._v("规则任选一个：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("规则"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("：https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubusercontent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gfwlist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gfwlist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gfwlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n规则"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("：https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubusercontent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("atrandys"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("proV"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fgfwlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n")])])]),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1Mmxf.png",alt:"Trojan27"}}),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1MGin.png",alt:"Trojan28"}}),t._v(" "),s("p",[t._v("可以根据插件的代理方式选择连接国内还是国外。")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1M1aj.png",alt:"Trojan29"}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("用 "),s("code",[t._v("V2ray")]),t._v("客户端")])]),t._v(" "),s("p",[t._v("打开客户端，选择添加"),s("code",[t._v("Socks")]),t._v("服务器 设置名称、地址和端口(默认都是"),s("code",[t._v("127.0.0.1")]),t._v(" 和"),s("code",[t._v("1080")]),t._v(")。")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/J1MYR0.png",alt:"Trojan&V2rayN"}}),t._v(" "),s("p",[t._v("如果不再使用"),s("code",[t._v("Trojan")]),t._v("服务，可以双击"),s("code",[t._v("stop.bat")]),t._v("(在t"),s("code",[t._v("rojan-cli")]),t._v("文件夹中)，关闭"),s("code",[t._v("Trojan")]),t._v("服务。")]),t._v(" "),s("img",{attrs:{src:"https://s1.ax1x.com/2020/04/22/JYkHkn.png",alt:"Trojan40"}}),t._v(" "),s("p",[t._v("第一种方式只能代理浏览器科学上网(也可以使用浏览器自带的代理方式)，第二种可以全局代理(也可以用电脑自带的代理方式"),s("code",[t._v("ssr")]),t._v("就是用这种)")]),t._v(" "),s("p",[t._v("好了，这就是"),s("code",[t._v("trojan")]),t._v("的全部教程，本文中的云服务器网站和域名网站都可以用你常用的，不用照搬！")])])}),[],!1,null,null,null);a.default=v.exports}}]);