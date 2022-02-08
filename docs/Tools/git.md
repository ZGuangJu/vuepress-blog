---
title: git
date: 2019-05-19
sidebar: 'auto'
categories:
 - 工具
tags:
 - Git
publish: true
sticky: 4
# 打赏
showSponsor: true
---

<img src="https://s2.ax1x.com/2020/02/27/3d2VE9.png" alt="git">

[Git图解](https://www.bootcss.com/p/git-guide/)

<!-- more -->

- `Workspace`：工作区
- `Index / Stage`：暂存区
- `Repository`：仓库区（或本地仓库）
- `Remote`：远程仓库

想进一步了解`git`可以看看这个[git图解](https://www.bootcss.com/p/git-guide/)。

<font size="6" color="#3eaf7c">Git 提交常用命令</font>

----

## 常用设置

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

### 3、更改账户邮箱全局(计算机)/非全局(本用户)

```js
// 全局
git config --global user.name "myusername"
git config --global user.email  "test@gmail.com"
// 非全局
git config  user.name "myusername"
git config  user.email "test@gmail.com"
```

### 4、创建本地仓库/进入项目文件夹

通过命令`git init`将项目初始化成`git`本地仓库

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

`""`是本次提交备注的内容

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
 git diff    //表示所有文件
```

### 10、提交代码到远程仓库（主分支）最终的提交

```js
git push origin master
```

### 11、查看历史提交记录 / 版本号

```js
git log
```

加上参数查看就比较清晰了

```js
// 简写（版本号）
git log --oneline
// 详情
git log --pretty=oneline
```

\* 输入<kbd>w</kbd><kbd>q</kbd>退出

### 12、退回版本

在`Git`中，用`HEAD`表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，以此类推，如果需要回退几十个版本，写几十个^容易数不过来，所以可以写，例如回退`30`个版本为：`HEAD~30`

```js
git reset --hard HEAD^
```

如果你回退完版本又后悔了，想回来，一般情况下是回不来的，但是如果你可以找到你之前的`commit id`的话，也是可以的，使用如下即可：

```js
git reset --hard + commit id
```

`commit id`不需要写全，`Git`会自动查找

补充说明：`Git`中，`commit id`是一个使用`SHA1`计算出来的一个非常大的数字，用十六进制表示，你提交时看到的一大串类似`3628164...882e1e0`的就是`commit id`（版本号）

### 13、查看操作的历史命令记录

```js
git reflog
```

结果会将你之前的操作的`commit id`和具体的操作类型及相关的信息打印出来，这个命令还有一个作用就是，当你过了几天，你想回退之前的某次提交，但是你不知道`commit id`了，通过这个你可查找出`commit id`,就可以轻松回退

### 14、对 GitHub 尝试 ssh

```js
ssh -T git@github.com
```

### 15、本地项目直接提交到远程仓库

- 在`github`上新建一个仓库，复制仓库地址，然后使用命令将本地仓库与远程仓库建立连接

```js
git remote add origin  xxx       //xxx是git仓库的地址
```

- 将暂存区的文件推送至远程仓库

使用强制推送`-f`是因为一般新建仓库的时候会生成`README.md`文件，导致需要先`git --fetch`才能推送，但这个`README.md`件其实是不需要的，因为在生成本地项目的时候一般也会生成一个`README.md`文件，所以选择直接强制推送过去。

```js
git push -f origin master
```

或者

```js
git push -u origin master -f 或者 git push origin master
```

执行以上代码出错的话执行以下命令

```js
git pull --rebase origin master
```

强拉失败 执行如下命令

```js
git pull origin master --allow-unrelated-histories
```

- 本地`git`仓库与远程仓库关联（`git@xx.xx.xx.xx:repos/xxx/xxx/xxx.git` 是远程仓库地址）

将本地创建的`git`仓库连接到远程`github`仓库

```s
git remote add origin git@xx.xx.xx.xx:repos/xxx/xxx/xxx.git
```

## Git Hooks

`Git Hooks`是定制化的脚本程序，所以它实现的功能与相应的git动作相关；在实际工作中，`Git Hooks`还是相对比较万能的

### `hooks` 的位置

每一个`Git repo`下都包含有`.git/hoooks`目录：

这个目录（本地和远程都是这样），这里面就是放置`Hooks`的地方。你可以在这个目录下自由定制`Hooks`的功能，当触发一些`Git`行为时，相应地`Hooks`将被执行。

这里是一个`Git Hooks`列表：

```js
applypatch-msg
pre-applypatch
post-applypatch
pre-commit
prepare-commit-msg
commit-msg
post-commit
pre-rebase
post-checkout
post-merge
pre-receive
update
post-receive
post-update
pre-auto-gc
post-rewrite
···
```

所示的文件，是由本地执行的脚本语言写成的，尽管这些文件默认会是`Shell Script`，你完全可以给它替换成自己喜欢的`Ruby`，`Python`或者`Perl`。

### 开始使用

把文件的后缀`.sample`去掉或者以列表中的名字直接命名，就会把该脚本绑定到特定的Git行为上。

- Client Side :也就是上面提到的本地hooks。 其实本地hooks还是占大多数的，可以给它们分成三类：
  - commit hooks
  - e-mail hooks
  - 其他

- Commit Hooks :与git commit相关的hooks一共有四个，均由git commit
命令触发调用，按照一次发生的顺序分别是：
  - pre-commit
  - prepare-commit-msg
  - commit-msg
  - post-commit

详情百度

## 升级git版本

版本 > `2.16.1` 则使用：

```js
 git update-git-for-windows
```

版本 `2.14.2-2.16.1` 则使用：

```js
 git update
```

版本 < `2.14.2` 请重新下载安装覆盖

## 生成git密钥  sshkey

为了和`github`或`gitee`建立连接，要在`github`或`gitee`里添加公钥。下面的命令会在本机用户文件夹下创建一个`.ssh`文件夹，里面有`id_rsa.pub`文件（邮箱是你的`github\gitee`注册邮箱）。密钥类型可以用 `-t` 选项指定。如果没有指定则默认生成用于`SSH-2`的`RSA`密钥。这里使用的是`rsa`。

1. 生成`sshkey`

```js
ssh-keygen -t rsa -C "v1234@gmail.com"
```

2. 输入完毕后程序同时要求输入一个密语字符串(`passphrase`)，空表示没有密语。接着会让输入`2`次口令(`password`)，空表示没有口令。`3`次回车即可完成当前步骤，此时`c盘>用户>自己的用户名>.ssh`目录下已经生成好了

```js
// 保存位置
> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
// 输入密码
> Enter passphrase (empty for no passphrase): [Type a passphrase]
// 重复密码
> Enter same passphrase again: [Type passphrase again]
```

3. 登录`github`,打开`setting`->`SSH keys`，点击右上角 `New SSH key`，把生成好的公钥`id_rsa.pub`放进 `key`输入框中，再为当前的`key`起一个`title`来区分每个`key`。

## Git 命令大全

### 新建代码库

- 在当前目录新建一个`Git`代码库

```js
git init
```

- 新建一个目录，将其初始化为`Git`代码库

```js
git init [project-name]
```

- 下载一个项目和它的整个代码历史

```js
git clone [url]
```

### 配置

`Git`的设置文件为`.gitconfig`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

- 显示当前的`Git`配置

```js
git config --list
```

- 编辑`Git`配置文件

```js
git config -e [--global]
```

- 设置提交代码时的用户信息

```js
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```

### 增加/删除文件

- 添加指定文件到暂存区

```js
git add [file1] [file2] ...
```

- 添加指定目录到暂存区，包括子目录

```js
git add [dir]
```

- 添加当前目录的所有文件到暂存区

```js
git add .
```

- 添加每个变化前，都会要求确认（对于同一个文件的多处变化，可以实现分次提交）

```js
git add -p
```

- 删除工作区文件，并且将这次删除放入暂存区

```js
git rm [file1] [file2] ...
```

- 停止追踪指定文件，但该文件会保留在工作区

```js
git rm --cached [file]
```

- 改名文件，并且将这个改名放入暂存区

```js
git mv [file-original] [file-renamed]
```

### 代码提交

- 提交暂存区到仓库区

```js
git commit -m [message]
```

- 提交暂存区的指定文件到仓库区

```js
git commit [file1] [file2] ... -m [message]
```

- 提交工作区自上次`commit`之后的变化，直接到仓库区

```js
git commit -a
```

- 提交时显示所有`diff`信息

```js
git commit -v
```

- 使用一次新的`commit`，替代上一次提交（如果代码没有任何新变化，则用来改写上一次`commit`的提交信息）

```js
git commit --amend -m [message]
```

- 重做上一次`commit`，并包括指定文件的新变化

```js
git commit --amend [file1] [file2] ...
```

### 分支

- 列出所有本地分支

```js
git branch
```

- 列出所有远程分支

```js
git branch -r
```

- 列出所有本地分支和远程分支

```js
git branch -a
```

- 新建一个分支，但依然停留在当前分支

```js
git branch [branch-name]
```

- 新建一个分支，并切换到该分支

```js
git checkout -b [branch]
```

- 新建一个分支，指向指定 `commit`

``` js
git branch [branch] [commit]
```

- 新建一个分支，与指定的远程分支建立追踪关系

```js
git branch --track [branch] [remote-branch]
```

- 切换到指定分支，并更新工作区

```js
git checkout [branch-name]
```

- 切换到上一个分支

```js
git checkout -
```

- 建立追踪关系，在现有分支与指定的远程分支之间

```js
git branch --set-upstream [branch] [remote-branch]
```

- 合并指定分支到当前分支

```js
git merge [branch]
```

例子

```js
// 在 master 分支中
git merge guangju  //将 guangju 合并到 master分支中
```

- 选择一个`commit`，合并进当前分支

```js
git cherry-pick [commit]
```

- 删除分支

```js
git branch -d [branch-name]
```

- 删除远程分支

```js
git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

### 标签

- 列出所有`tag`

```js
git tag
```

- 新建一个`tag`在当前 `commit`

```js
git tag [tag]
```

- 新建一个`tag`在指定 `commit`

```js
git tag [tag] [commit]
```

- 删除本地`tag`

```js
git tag -d [tag]
```

- 删除远程`tag`

```js
git push origin :refs/tags/[tagName]
```

- 查看`tag`信息

```js
git show [tag]
```

- 提交指定`tag`

```js
git push [remote] [tag]
```

- 提交所有`tag`

```js
git push [remote] --tags
```

- 新建一个分支，指向某个`tag`

```js
git checkout -b [branch] [tag]
```

### 查看信息

- 显示有变更的文件

```js
git status
```

- 显示当前分支的版本历史

```js
git log
```

- 显示`commit`历史，以及每次`commit`发生变更的文件

```js
git log --stat
```

- 搜索提交历史，根据关键词

```js
git log -S [keyword]
```

- 显示某个`commit`之后的所有变动，每个`commit`占据一行

```js
git log [tag] HEAD --pretty=format:%s
```

- 显示某个`commit`之后的所有变动，其"提交说明"必须符合搜索条件

```js
git log [tag] HEAD --grep feature
```

- 显示某个文件的版本历史，包括文件改名

```js
git log --follow [file]
git whatchanged [file]
```

- 显示指定文件相关的每一次`diff`

```js
git log -p [file]
```

- 显示过去5次提交

```js
git log -5 --pretty --oneline
```

- 显示所有提交过的用户，按提交次数排序

```js
git shortlog -sn
```

- 显示指定文件是什么人在什么时间修改过

```js
git blame [file]
```

- 显示暂存区和工作区的差异

```js
git diff
```

- 显示暂存区和上一个`commit`的差异

```js
git diff --cached [file]
```

- 显示工作区与当前分支最新`commit`之间的差异

```js
git diff HEAD
```

- 显示两次提交之间的差异

```js
git diff [first-branch]...[second-branch]
```

- 显示今天你写了多少行代码

```js
git diff --shortstat "@{0 day ago}"
```

- 显示某次提交的元数据和内容变化

```js
git show [commit]
```

- 显示某次提交发生变化的文件

```js
git show --name-only [commit]
```

- 显示某次提交时，某个文件的内容

```js
git show [commit]:[filename]
```

- 显示当前分支的最近几次提交

```js
git reflog
```

### 远程同步

- 下载远程仓库的所有变动

```js
git fetch [remote]
```

- 显示所有远程仓库

```js
git remote -v
```

- 显示某个远程仓库的信息

```js
git remote show [remote]
```

- 增加一个新的远程仓库，并命名

```js
git remote add [shortname] [url]
```

- 取回远程仓库的变化，并与本地分支合并

```js
git pull [remote] [branch]
```

- 上传本地指定分支到远程仓库

```js
git push [remote] [branch]
```

- 强行推送当前分支到远程仓库，即使有冲突

```js
git push [remote] --force
```

- 推送所有分支到远程仓库

```js
git push [remote] --all
```

### 撤销

#### 命令

- 恢复暂存区的指定文件到工作区

```js
git checkout [file]
```

- 恢复某个commit的指定文件到暂存区和工作区

```js
git checkout [commit] [file]
```

- 恢复暂存区的所有文件到工作区

```js
git checkout .
```

- 重置暂存区的指定文件，与上一次`commit`保持一致，但工作区不变

```js
git reset --hard
```

- 重置暂存区与工作区，与上一次`commit`保持一致

```js
git reset [commit]
```

- 重置当前分支的指针为指定`commit`，同时重置暂存区，但工作区不变

```js
git reset --hard [commit]
```

- 重置当前`HEAD`为指定`commit`，但保持暂存区和工作区不变

```js
git reset --keep [commit]
```

- 新建一个`commit`，用来撤销指定`commit`（后者的所有变化都将被前者抵消，并且应用到当前分支)

```js
git revert [commit]
```

- 暂时将未提交的变化移除，稍后再移入

```js
git stash
git stash pop
```

#### 恢复的常用命令

对于恢复修改的文件，就是将文件从仓库中拉到本地工作区，即 仓库区 `---->` 暂存区 `---->` 工作区。

对于修改的文件有两种情况：

- 只是修改了文件，没有任何 `git` 操作
- 修改了文件，并提交到暂存区（即编辑之后，`git add` 但没有 `git commit -m ....`）
- 修改了文件，并提交到仓库区（即编辑之后，`git add` 和 `git commit -m ....`）

1. 情况I：
只是修改了文件，没有任何 git 操作，直接一个命令就可回退：

```js
git checkout -- aaa.txt # aaa.txt为文件名
```

2. 情况II：

修改了文件，并提交到暂存区（即编辑之后，`git add` 但没有 `git commit -m ....`）

```js
git log --oneline    # 可以省略
git reset HEAD    # 回退到当前版本
git checkout -- aaa.txt    # aaa.txt为文件名
```

3. 情况III：

修改了文件，并提交到仓库区（即编辑之后，`git add` 和 `git commit -m ....`）

```js
git log --oneline    # 可以省略
git reset HEAD^    # 回退到上一个版本
git checkout -- aaa.txt    # aaa.txt为文件名
```

:::warning 注1

1. 情况II 和 情况III 只有回退的版本不一样，

对于 情况II，并没有  `git commit`，仓库版本也就不会更新和记录，所以回退的是当前版本
![注意1](https://z3.ax1x.com/2021/05/20/gTcp1f.png)
对于情况III，一旦  `git commit`，仓库版本就会更新并记录，所以要回退的也就是上一个版本
![注意2](https://z3.ax1x.com/2021/05/20/gTc9c8.png)
:::
:::warning 注2
`git reset 版本号`    ----  将暂缓区回退到指定版本

根据 `git log --oneline` 显示的版本号（下图黄色的字），可以回退到任何一个版本，也可通过 `HEAD` 来指定版本（下图红色的字）。

以旧图举例：
![注意3](https://z3.ax1x.com/2021/05/20/gTcCjS.png)
:::

### 修改远程仓库地址

方法有三种：

1.修改命令

```js
git remote origin set-url [url]
```

2.先删后加

```js
git remote rm origin
git remote add origin [url]
```

3.直接修改`config`文件

### 其他

- 生成一个可供发布的压缩包

```js
git archive
```

- 分支后有其他字母 `MERGING`
<img src="https://s1.ax1x.com/2020/07/28/aEkpvT.png" alt="git报错">
输入命令

```js
git reset --merge HEAD
```

<font size="6" color="#3eaf7c">使用git管理学习进度</font>

----

### 概念

- 每天学的内容都在`master`主分支上
- 每次`master`里的内容提交到本地之后，如果需要做小总结，那就创建一个新分支来保存学习的进度

`master`命令

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

:::warning
当查看完文件以后，要切换到主分支
:::

（完）
