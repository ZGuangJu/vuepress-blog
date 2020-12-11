---
title: Centos8 使用
date: 2019-05-16
sidebar: 'auto'
categories:
 - 工具
tags:
 - Centos8
publish: true
---
centos

## 安装Wget

要检查系统上是否安装了`Wget`软件包，请打开控制台，键入`wget`，然后按`Enter`。如果已安装`wget`，则系统将打印 `wget: missing URL` ，否则，将打印 `wget command not found`

- 在`CentOS`和`Fedora`上安装`Wget`

```js
sudo yum install wget
```

- 在`Ubuntu`和`Debian`上安装`Wget`

```js
sudo apt install wget
```

- `wget`实用程序表达式采用以下形式：

```js
wget [options] [url]
```

## 查看端口占用和解除占用

### netstat查看

- 查看`8081`端口是否被占用

```s
netstat -anp | grep 8081
```

- 查看占用`8081`端口的进程

```s
fuser -v -n tcp 8081
```

- 杀死占用`8081`端口的进程

```s
kill -s 9 1154(自己的进程号).
```

`9`参数表示告诉操作系统直接杀死进程, 无论进程的状态是否可杀死;

### `lsof`

- `lsof`查看端口的占用情况

```s
lsof -i
```

注意: 若提示无此命令, 则需要安装, 命令`yum install -y lsof`

- 查看某一端口的占用情况

```s
lsof -i:8081
```

- 杀死某个端口的所有进程

```s
killall sshd[就是端口的COMMAND]
```

## Visual Studio Code

在 `CentOS 8` 系统安装`Visual Studio Code` 最简单和最推荐的方式就是启用 `VS Code` 源，并且通过命令行安装 `VS Code` 软件包。

1. 导入`Microsoft GPG key`：

```js
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```

2. 打开你的文本编辑器，并且创建源仓库文件，或输入以下命令：

```js
sudo nano /etc/yum.repos.d/vscode.repo
```

源仓库文件里就是以下内容，如果没有将下面的内容粘贴进去，并且启用 `VS Code` 源：

```js
[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
```

保存文件，并且关闭你的文本编辑器

```js
sudo dnf install code
```

`Visual Studio Code` 已经安装在你的 `CentOS` 桌面版本上，你可以开始使用它了
3. 升级 `Visual Studio Code`
当一个新版本发布时，你可以通过你的桌面软件升级工具或者通过在终端运行下面的命令，来升级 `Visual Studio Code`：

```js
sudo dnf update
```

## Chrome

第一种

1. 下载安装包
打开您的终端， `wget` 下载的最新`Chrome` 64位.`rpm`程序包

```js
wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

2. 安装软件
以`root`用户或具有`sudo`权限的用户身份运行以下命令

```js
sudo dnf localinstall google-chrome-stable_current_x86_64.rpm
```

第二种

```js
sudo yum install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

现在`CentOS`系统上已安装`Chrome`浏览器，您可以通过在命令行中输入`google-chrome` &或单击`Chrome`图标（`Activities -> Chrome Browser`）来启动它：

- 更新`Chrome`浏览器
在安装程序包期间，正式的`Google`存储库将添加到您的系统中。使用以下 `cat` 命令来验证文件是否存在：

```s
cat /etc/yum.repos.d/google-chrome.repo
```

```s
[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/x86_64
enabled=1
gpgcheck=1
gpgkey=https://dl.google.com/linux/linux_signing_key.pub
```

发布新版本时，您可以使用`dnf`或通过桌面标准软件更新工具进行更新。
