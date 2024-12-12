# 概述

## 介绍

我的个人笔记总结，博客系统用`vuepress` 主题是`reco`，部分自定义设置

## 部署发布

现发布在`github`个人页--`zguangju.github.io`；
由于国内访问`github`速度过慢，又部署在 `gitee` 上--`zguangju.gitee.io`

- 最新地址-[www.zguangju.com](www.zguangju.com)

- 本地启动项目

```sh
  yarn blog

```

- 提交代码到仓库

```sh
  git add .
  commit -m 'msg'
  git push
```

- 发布更新到`github`和`gitee`(在deploy.sh中改为你自己的仓库地址)

```sh
  yarn deploy
```

发布项目使用的自动化脚本，最开始是只发布到`github`上，用项目根目录的`deploy.sh`的脚本。

可自定义部署的脚本！
