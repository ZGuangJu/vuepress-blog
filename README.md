# 概述

## 介绍

我的个人笔记总结，博客系统用vuepress 主题是reco，部分 自定义设置

## 部署发布

现发布在github个人页--zguangju.github.io；
由于国内访问github速度过慢，又部署在 gitee 上--zguangju.gitee.io

- 本地启动项目

```js
yarn blog
```

- 提交代码到仓库

```js
git add .
git commit -m 'msg'
git push
```

- 发布更新到github和gitee(在deploy.sh中改为你自己的仓库地址)

```js
yarn deploy
```

发布项目使用的自动化脚本，最开始是只发布到github上，用项目根目录的deploy.sh的脚本。

后期加上了gitee ，使用deploy.bat和build.bat。

在流程上是打包了两次，github一次，gitee一次，然后分别发布到两个网站。

打包一次发布两次尝试过，但是会导致github上的项目样式丢失，没有深入研究，用了笨方法，多打包了一次。
