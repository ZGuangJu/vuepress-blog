---
title: 电脑故障修复方法
date: 2019-05-12
sidebar: 'auto'
categories:
 - 小知识
tags:
 - 验证码
publish: true
# 打赏
showSponsor: true
---

## ie 可以联网，其他浏览器不能 \ 软件可以联网，浏览器不能

### 解决方法

重置“WinSock目录”

1. 当升级到Win10后第三方浏览器无法访问网络时，我们首先需要“重置WinSock目录”。右击桌面左下角的“Windows”按钮，从其右键菜单中选择“命令提示符（管理员）”项。
2. 待打开“命令提示符”窗口后，输入命令“netsh winsock reset”并按回车键，此命令执行结束
3. 根据命令执行结束提示，需要重启一下计算机才能使网络WinSock设置生效。在此需要注意一点，就是当电脑中安装有安全类防护软件时，需要设置“允许程序的所有操作”项以便正常执行此命令。

## Error: getaddrinfo ENOENT raw.githubusercontent.com

修改hosts文件
找到这个文件夹： `C:\Windows\System32\drivers\etc` 下的`hosts`
打开，在最后一行编辑

```js
199.232.68.133  raw.githubusercontent.com
```

## 127.0.0.1 和 loaclhost

修改hosts文件地址 `C:/WINDOWS/system32/drivers/etc/hosts`
