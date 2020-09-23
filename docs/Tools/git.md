---
title: Git 介绍
date: 2019-5-19
sidebar: 'auto'
categories:
 - 工具
tags:
 - Git
publish: true
sticky: 2
---

<font size="6" color="#3eaf7c">Git 提交常用命令</font>

----

### 1、查看git账户邮箱

```js
git config --global  --list
git config --global  --list
```

或

```js
git config user.name
git config user.email
```

### 2、查看git配置信息

```js
git config --list
```

### 3、更改账户邮箱全局/非全局

```js
git config --global user.name "myname"
git config  user.name "myname"  ?
git config --global user.email  "test@gmail.com"
git config  user.email  "test@gmail.com"  ?
```

### 4、创建本地仓库/进入项目文件夹

通过命令git init将项目初始化成git本地仓库

```js
git init
```

### 5、添加当前目录的所有文件到暂存区

（又叫跟踪未跟踪的文件）

```js
git add .
```

### 6、撤销添加当前目录的某文件到暂存区

```js
git reset [file]
```

### 7、提交暂存区到仓库区

“”是本次提交备注的内容

```js
git commit -m "提交说明"  //（""内空白会失败）
```

### 8、查看仓库当前的状态

```js
git status
```

### 9、比较当前文件的修改（commit之后）

```js
 git diff <file>
 git diff    //所有文件
```

### 10、提交代码到远程仓库（主分支）最终的提交

```js
git push origin master
```

### 11、查看历史提交记录

```js
git log
```

加上参数查看就比较清晰了

```js
git log --pretty=oneline
```

### 12、退回版本

在Git中，用HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，以此类推，如果需要回退几十个版本，写几十个^容易数不过来，所以可以写，例如回退30个版本为：HEAD~30

```js
git reset --hard HEAD^
```

如果你回退完版本又后悔了，想回来，一般情况下是回不来的，但是如果你可以找到你之前的commit id的话，也是可以的，使用如下即可：

```js
git reset --hard + commit id
```

commit id不需要写全，Git会自动查找

补充说明：Git中，commit id是一个使用SHA1计算出来的一个非常大的数字，用十六进制表示，你提交时看到的一大串类似3628164...882e1e0的就是commit id（版本号）

### 13、查看操作的历史命令记录

```js
git reflog
```

结果会将你之前的操作的commit id和具体的操作类型及相关的信息打印出来，这个命令还有一个作用就是，当你过了几天，你想回退之前的某次提交，但是你不知道commit id了，通过这个你可查找出commit id,就可以轻松回退

### 14、生成git密钥  sshkey

为了和github建立连接。

```js
ssh-keygen -t rsa -C ‘1234@qq.com’
```

- 1. 生成新的sshkey

```js
ssh-keygen -t rsa -b 4096 -C "1234@qq.com"
```

- 2. 如果不使用密码连输按3次回车

```js
// 保存位置
> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
// 输入密码
> Enter passphrase (empty for no passphrase): [Type a passphrase]
// 重复密码
> Enter same passphrase again: [Type passphrase again]
```

### 15、对 GitHub 尝试 ssh

```js
ssh -T git@github.com
```

### 16、本地项目直接提交到远程仓库

- 1、在github上新建一个仓库，复制仓库地址，然后使用命令将本地仓库与远程仓库建立连接

```js
git remote add origin  xxx       //xxx是git仓库的地址
```

- 2、将暂存区的文件推送至远程仓库
使用强制推送'-f'是因为一般新建仓库的时候会生成read me文件，导致需要先git fetch才能推送，但这个read me文件其实是不需要的，因为在生成本地项目的时候一般也会生成一个read me文件，所以选择直接强制推送过去。

```js
git push origin master -f
```

### 17、 升级git版本

版本 > 2.16.1 则使用：

```js
 git update-git-for-windows
```

版本 2.14.2-2.16.1 则使用：

```js
 git update
```

版本 <2.14.2 请重新下载安装覆盖

<font size="6" color="#3eaf7c">使用git管理学习进度</font>

----

### 概念

- 每天学的内容都在master主分支上
- 每次master里的内容提交到本地之后，如果需要做小总结，那就创建一个新分支来保存学习的进度

master命令

```js
git add
git commit -m "更新的内容"
git branch 分支名字【每次学习完了之后的一个总结性标题，保存当前的代码内容】
```

### 查看所有分支

```js
git branch -a
```

### 切换分支

```js
git checkout [分支的名字]
```

### 当查看完以后，要切换到主分支
