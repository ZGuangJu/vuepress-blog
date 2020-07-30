# Trojan

::: tip Trojan是什么
Trojan模仿了互联网上最常见的HTTPS协议，以诱骗GFW封锁认为它就是HTTPS，从而不被识别。Trojan处理来自外界的HTTPS请求，如果是合法的，那么为该请求提供服务，否则将该流量转交给web服务器Nginx，由Nginx为其提供服务。基于这个工作过程可以知道，Trojan的一切表现均与Nginx一致，不会引入额外特征，从而达到无法识别的效果。
- Trojan与v2ray ws协议的区别：
v2ray是nginx侦听443，数据→nginx>v2ray；Trojan是自己侦听443，都是伪装成网站。
:::

## 系统要求及脚本介绍

1、系统支持centos7+/debian9+/ubuntu16+，

2、域名需要解析到VPS并生效，

3、脚本自动续签https证书，

4、自动配置伪装网站，位于/usr/share/nginx/html/目录下，可自行替换其中内容，

5、请不要在任何生产环境使用一键脚本，此条适用于本站所有脚本，专门用来科学上网的VPS可以随意使用，

6、trojan不能用CDN，不要开启CDN，

7、如果你在用谷歌云、阿里云等产品的时候，需要在控制台开放80、443端口。

## 准备工作

1. 1台VPS，我用的Vultr，其他如搬瓦工、谷歌云等

2. 1个域名（推荐 GoDaddy）

3. 解析域名到你的 VPS IP上

4. 服务端一键安装 Trojan & BBR。（加速用 BBRPlus）

5. 下载Windows客户端V2rayN等，并设置浏览器SwitchyOmega


## 创建VPS服务器

- 在VPS的系统要求：系统>=centos 7，如果用Centos 8可以不用安装BBR加速，直接使用即可(所以你最好用Centos 8)。

1. 选择云服务器(这里用的是Vultr的服务器)

<img src="https://s1.ax1x.com/2020/04/20/J1Kw4I.png" alt="Trojan01">

2. 指定服务器地址和系统类型、带宽等

<img src="https://s1.ax1x.com/2020/04/20/J1KdUA.png" alt="Trojan02">
<img src="https://s1.ax1x.com/2020/04/20/J1KYuD.png" alt="Trojan03">

3. 输入名称

<img src="https://s1.ax1x.com/2020/04/20/J1KGjO.png" alt="Trojan04">

4. 稍等一会，等服务器分配完成，然后可以ping一下IP地址，看速度是不是可以，如果总是请求超时，建议重新申请一个再试，直到速度满意为止，可以用cmd ping，也可以用[站长之家](http://ping.chinaz.com/)。

<img src="https://s1.ax1x.com/2020/04/20/J1K8gK.png" alt="Trojan05">
<img src="https://s1.ax1x.com/2020/04/20/J1KD8P.png" alt="Trojan06">
<img src="https://s1.ax1x.com/2020/04/20/J1Ksv8.png" alt="Trojan07">
<img src="https://s1.ax1x.com/2020/04/20/J1KcDg.png" alt="Trojan08">

## 申请域名并解析到VPS

1. 注册域名 GoDaddy

2. 将域名解析到云服务器（VPS）上 用Cloudflare解析

   - 注册Cloudflare

   - 登录Cloudflare 在页面中点击Add site

3. 添加站点以后，点击DNS,并按步骤添加一条记录，最好添加二级域名，这样可以在一个服务器添加多个上网工具···

点击DNS按钮，

<img src="https://s1.ax1x.com/2020/04/20/J1KgbQ.png" alt="Trojan09">

4. 添加完成以后，稍等一会，要判断是否解析完成， ping一下域名，看是否通了，如果你添加了二级域名，不要忘了要写完整。


<img src="https://s1.ax1x.com/2020/04/20/J1KREj.png" alt="Trojan10">

## 安装脚本 trojan 和 bbr加速

1. 通过MobaXterm（或者XShell等其他远程连接工具）连接到VPS，填写 IP地址，主机名默认 root，端口默认22，

<img src="https://s1.ax1x.com/2020/04/20/J1KWUs.png" alt="Trojan11">

确定以后会提示你输入密码(linux系统输入密码，是不显示内容的)，密码正确会进入这个页面：

<img src="https://s1.ax1x.com/2020/04/20/J1Kf5n.png" alt="Trojan12">

2. 输入安装Trojan命令

```js
curl -O https://raw.githubusercontent.com/atrandys/trojan/master/trojan_centos7.sh && chmod +x trojan_centos7.sh && ./trojan_centos7.sh
```

选择1 安装trojan，(一般安装一次就能成功)

<img src="https://s1.ax1x.com/2020/04/20/J1K4Cq.png" alt="Trojan13">

输入域名 tj.xxx.xxx.xxx.xxx.cloud，

<img src="https://s1.ax1x.com/2020/04/20/J1KI2V.png" alt="Trojan14">

如果提示证书安装不成功，根据提示再输入一次Trojan的安装命令，选择4，修复证书，

<img src="https://s1.ax1x.com/2020/04/20/J1KHrF.png" alt="Trojan15">

会提示证书安装成功，

<img src="https://s1.ax1x.com/2020/04/20/J1KLVJ.png" alt="Trojan16">

最后输入安装Trojan命令，正常安装trojan，最终成功以后，会提示一个下载地址，用这个地址下载Trojan-cli程序，一会要用，这个地址最好保存下来，

<img src="https://s1.ax1x.com/2020/04/20/J1KOa9.png" alt="Trojan17">

用最后给出的网址下载Trojan程序，解压以后，用记事本或其他程序打开config.json文件，

<img src="https://s1.ax1x.com/2020/04/20/J1MVPI.png" alt="Trojan24">

在这个文件夹下，双击start.bat，开启Trojan服务。

3. 输入安装BBR命令回车(如果是Centos8可以不用安装，直接选择启动即可使用，centos8已经内置加速了)

```js
wget --no-check-certificate https://raw.githubusercontent.com/cx9208/Linux-NetSpeed/master/tcp.sh && chmod +x tcp.sh && ./tcp.sh
```

<img src="https://s1.ax1x.com/2020/04/20/J1KvP1.png" alt="Trojan18">

安装完成，要重启vps，但是不建议用MobaXterm直接重启，可以在Vultr官网手动重启，因为客户端有时不能成功重启服务器，

<img src="https://s1.ax1x.com/2020/04/20/J1Kz26.png" alt="Trojan19">
<img src="https://s1.ax1x.com/2020/04/20/J1Kx8x.png" alt="Trojan20">

重启完成以后，再用MobaXterm连接服务器。

<img src="https://s1.ax1x.com/2020/04/20/J1MSxK.png" alt="Trojan21">

我们还需要启动BBR加速工具，输入以下命令：

```js
wget --no-check-certificate https://raw.githubusercontent.com/cx9208/Linux-NetSpeed/master/tcp.sh && chmod +x tcp.sh && ./tcp.sh
```

这次输入4~8选项, 目的是启动BBR加速，看你安装的哪个版本的BBR，就启动哪个，提示启动成功即可，

<img src="https://s1.ax1x.com/2020/04/20/J1MeRP.png" alt="Trojan23">

## 下载客户端

#### 有两种使用方式：

1. 下载谷歌插件：SwitchyOmega

安装好插件以后，在SwitchyOmega选项中配置，先配置proxy，

<img src="https://s1.ax1x.com/2020/04/20/J1MuM8.png" alt="Trojan25">

这里的地址和端口和config.json中的保持一致，

<img src="https://s1.ax1x.com/2020/04/20/J1MMqg.png" alt="Trojan26">

然后配置auto switch，将原有的规则删除，填写如下：

规则任选一个：

```
规则1：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
规则2：https://raw.githubusercontent.com/atrandys/proV/master/fgfwlist.txt
```

<img src="https://s1.ax1x.com/2020/04/20/J1Mmxf.png" alt="Trojan27">
<img src="https://s1.ax1x.com/2020/04/20/J1MGin.png" alt="Trojan28">

可以根据插件的代理方式选择连接国内还是国外。

<img src="https://s1.ax1x.com/2020/04/20/J1M1aj.png" alt="Trojan29">

2. 用 V2ray客户端

打开客户端，选择添加Socks服务器 设置名称、地址和端口(默认都是127.0.0.1 和1080)。

<img src="https://s1.ax1x.com/2020/04/20/J1MYR0.png" alt="Trojan&V2rayN">


如果不再使用Trojan服务，可以双击stop.bat(在trojan-cli文件夹中)，关闭Trojan服务。

<img src="https://s1.ax1x.com/2020/04/22/JYkHkn.png" alt="Trojan40">

第一种方式只能代理浏览器科学上网(也可以使用浏览器自带的代理方式)，第二种可以全局代理(也可以用电脑自带的代理方式ssr就是用这种)

好了，这就是trojan的全部教程，本文中的云服务器网站和域名网站都可以用你常用的，不用照搬！
