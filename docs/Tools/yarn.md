---
title: Yarn 安装和常用命令
date: 2019-6-19
sidebar: 'auto'
categories:
 - 工具
tags:
 - yarn
publish: true
---

:::tip 介绍
yarn 是 facebook 发明的新一代 js 包管理器,和npm一样的依赖包管理器,支持离线使用.[这是 npm 与 yarn 的 命令对照](https://classic.yarnpkg.com/zh-Hans/docs/migrating-from-npm)

:::

[英文官网](https://yarnpkg.com/) [中文官网](https://classic.yarnpkg.com/zh-Hans/)

## 安装

----
- [下载](https://classic.yarnpkg.com/zh-Hans/docs/install/#windows-stable)安装包

下载后运行软件，安装

- 通过 [Chocolatey](http://www.91guangju.com/index.php/archives/35/) 安装

(安装 Chocolatey 之后，你就可以在控制台执行如下命令安装 Yarn 了)

```js
choco install yarn
```

- 通过 Scoop 安装（类似Chocolatey）

```js
scoop install yarn
```
### 验证

- 在命令行里运行
```js
yarn -v   /   yarn --version
```
显示版本号，证明安装成功。

## Yarn 常用命令

yarn的一些常见命令。

- 初始化包(等价于npm init)

```js
yarn init
```

- 为当前正在开发的包新增一个依赖包；

```js
yarn add [package-name]
```

你可以用以下参数添加其它类型的依赖:

```js
yarn add --dev       //添加到 devDependencies
yarn add --peer      //添加到 peerDependencies
yarn add --optional  //添加到 optionalDependencies
```

通过指定依赖版本和标签，你可以安装一个特定版本的包:

```js
yarn add [package]@[version]
yarn add [package]@[tag]
```
注：[version] 或 [tag] 会被添加到 package.json，并在安装依赖时被解析。

- 从当前包里移除包。

```js
yarn remove [packagename]
```

- 安装package.json 文件里定义的所有依赖包；

```js
yarn install  /   yarn i
```

- 发布一个包到包管理器；

```js
yarn publish [name]
```
- 项目中升级依赖包

1.  `yarn upgrade-interactive --latest`命令（亲测无效，不能更新package.json中的版本，可以更新yarn.lock中的版本）

```js
yarn upgrade-interactive --latest
```
输出结果
```js
info Color legend :
 "<red>"    : Major Update backward-incompatible updates
 "<yellow>" : Minor Update backward-compatible features
 "<green>"  : Patch Update backward-compatible bug fixes
? Choose which packages to update.
 devDependencies
   name                 range   from      to     url
>( ) vuepress             latest  1.5.2  ❯  1.5.3  https://github.com/vuejs/vuepress#readme

 dependencies
   name                 range   from      to     url
 ( ) vuepress-theme-reco  latest  1.4.7  ❯  1.5.5  https://vuepress-theme-reco.recoluan.com
```
需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择

2. 指定版本号，这种方法会在 `package.json` 文件中限定包的版本

```js
yarn upgrade [package-name]@x.x.x
```

3. 使用 `npm-check-updates` 升级（亲测无效，不能更新package.json中的版本，可以更新yarn.lock中的版本）

```js
// 先下载
yarn global add npm-check-updates
// 更新包（yarn.lock和package.json同步更新）
ncu --upgrade --upgradeAll && yarn upgrade
```

### 默认命令

执行不带任何命令的yarn，等同于执行yarn install，并透传所有参数。

### 其他命令

- 升级最新版本

```js
npm install yarn@latest -g
```

- 查看yarn历史版本

```js
npm view yarn versions
```

- 升级指定版本的yarn （例：升级到1.22.4版本）

```js
yarn upgrade v1.22.4
```

### 用户自定义脚本

执行`yarn <script> [<args>]`将会执行用户自定义脚本。参阅[yarn run](https://classic.yarnpkg.com/zh-Hans/docs/cli/run)。

:::warning 附
- package.json：包含包的所有依赖信息；
- yarn.lock：记录每一个依赖项的确切版本信息；
:::

