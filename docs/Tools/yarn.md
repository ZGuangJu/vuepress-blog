# Yarn 安装和常用命令

:::tip 介绍
和npm一样的依赖包管理器;
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

- 升级指定版本 （例：升级到1.22.4版本）

```js
yarn upgrade v1.22.4
```

### 用户自定义脚本

执行`yarn <script> [<args>]`将会执行用户自定义脚本。参阅[yarn run](https://classic.yarnpkg.com/zh-Hans/docs/cli/run)。

:::warning 附
- package.json：包含包的所有依赖信息；
- yarn.lock：记录每一个依赖项的确切版本信息；
:::

