# Npm 安装和使用

:::tip 介绍
NPM的全称是Node Package Manager，是随同NodeJS一起安装的包管理和分发工具，它很方便让JavaScript开发者下载、安装、上传以及管理已经安装的包，类似的还有 cnpm、[yarn](http://zguangju.gitee.io/Tools/yarn.html)、tyarn ···
:::

[英文官网](https://www.npmjs.com/)

## 1. 切换淘宝源、官方源

:::warning 强烈建议
**[安装 nrm](http://zguangju.gitee.io/Tools/nrm.html)** :npm 的源管理器
:::

切换 npm 镜像源
```js
npm config set registry [这里是镜像源 url]
```

a 官方源
```js
npm config set registry https://registry.npmjs.org
```
速度慢可以，https -> http，这样网速就会好很多

```js
npm config set registry http://registry.npmjs.org
```

b 淘宝源

```js
npm config set registry https://registry.npm.taobao.org
```

c 使用cnpm(用`cnpm -v`检测是否成功)

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
d 手动修改设置淘宝源

>1.打开.npmrc文件（node默认安装再C盘-C:\Program Files\nodejs\node_modules\npm\npmrc，没有的话可以使用git命令行建一个( touch .npmrc)，用cmd命令建会报错）
>2.增加 registry=https://registry.npm.taobao.org  即可。


检测是否修改成功，查看当前使用的 npm 镜像源
```js
npm config get registry
or
npm info express
```

显示进度条
```js
npm config set loglevel=http
```

## 2. 用npm安装依赖包

>node包的安装分为全局模式和本地模式:
>
> A、一般情况下会以本地模式运行，包会被安装到和你的应用程序代码的本地node_modules> 目录下。
>
> B、在全局模式下，Node包会被安装到Node的安装目录下的node_modules下。
>
> 获知使用`npm set global=true`来设定安装模式，`npm get global`可以查看当前使用的安装模式

以下命令是安装 package.json 中标记的所有的包，安装完毕后会产生一个node_modules目录，其目录下就是安装的各个node模块。

```js
npm install
or
npm i
```

安装指定的依赖包（一般标记在 dependencies 下）
```js
npm install [package_name]
```
:::warning 注意:
默认会安装包的最新版本，也可以通过在后面加版本号的方式安装指定版本，如 `npm install express@3.0.6`

项目对模块的依赖可以使用下面的 3 种方法来表示（假设当前版本号是 1.1.0 ）:
兼容模块新发布的补丁版本：~1.1.0、1.1.x、1.1
兼容模块新发布的小版本、补丁版本：^1.1.0、1.x、1
兼容模块新发布的大版本、小版本、补丁版本：*、x
:::

将包安装到全局环境中:
```js
npm install [package_name] -g
```
:::warning 注意:
在代码中，直接通过 require() 的方式是没有办法调用全局安装的包的。全局的安装是供命令行使用的，就好像全局安装了 vmarket 后，就可以在命令行中直接运行 vm 命令。

vm 在 linux 系统中的地位类似 windows 中的记事本，但功能要强大的多！
:::

`-S / --save` 指定的包安装（多数情况下会安装最新版本的包),信息自动更新到 package.json 的 dependencies（生产阶段的依赖）中

```js
npm install [package-name] --save
or
npm i [package-name] -S
```

`-D / --save-dev` 指定的包安装,信息自动更新到 package.json 的 devDependencies（开发阶段的依赖）下
```js
npm install [package-name] --save-dev
or
npm i [package-name] -D
```

`-O / --save-optional` 安装最新版本的包（多数情况下）,安装包的同时自动更新 package.json 的 optionalDependencies（可选阶段的依赖）下
```js
npm install [package-name] --save-optional
or
npm install [package-name] -O
```

`-E / --save-exact` 精确安装指定模块版本
```js
npm install [package-name] --save-exact
or
npm install [package-name] -E
```
> 输入命令 `npm install gulp -ES` ,注意 package.json 文件的 dependencies 字段，可以看出版本号中的<font color="red">^</font>消失了
>
> ```js
> "devDependencies": {
>     "gulp": "^3.9.1"
> }
> ```
> ```js
> //输入 npm install gulp -ES 后
> "dependencies": {
>     "gulp": "3.9.1"
> }
> ```

查看 node 模块的 package.json 文件夹
```js
npm view moduleNames
```
:::warning 注意:
如果想要查看 package.json 文件夹下某个标签的内容，可以使用`npm view moduleName labelName`.
:::

查看当前目录下已安装的 node 包（模块及依赖）
```js
npm list
or
npm ls
/
npm ls -g  //查看全局安装的模块及依赖 aliases: list, la, ll
```

模块的依赖都被写入了 `package.json` 文件以后，别人打开项目的根目录（项目开源、内部团队合作），使用 `npm install` 命令可以根据 `dependencies` 配置安装所有的依赖包(应当注意 `package-lock` 或 `yarn-lock` 的作用)

:::warning 注意:
Node 模块搜索是从代码执行的当前目录开始的，搜索结果取决于当前使用的目录中的 node_modules 下的内容。`npm list parseable=true` 可以目录的形式来展现当前安装的所有包
:::

## 3. 卸载安装的包


卸载模块
```js
npm usinstall [package-name]
```
:::warning  aliases
 remove, rm, r, un, unlink
:::
卸载模块，同时删除模块留在 package.json 中 dependencies（生产环境） 下的对应信息
```js
npm uninstall [package-name] --save
or
npm uninstall [package-name] -S
```

卸载模块，同时删除模块留在 package.json 中 devDependencies（开发环境） 下的对应信息
```js
npm uninstall [package-name] --save-dev
or
npm uninstall [package-name] -D
```
移除
```js
npm remove [package-name]
```
## 4. 项目的初始化和一键初始化

```js
npm init     //初始化
or
npm init -y  //一键初始化
```
:::warning
aliases[-f|--force|-y|--yes]
:::

执行后会创建一个 package.json 文件(项目的相关信息)
> package.json （项目）
> ```json
>{
>   name : //项目名称
>   version: (1.0.0):  //版本号
>   description: //简介，对项目进行简介
>   entry point: //入口文件的名字
>   test command: //测试命令
>   git repository: //git仓库地址
>   keywords: //关键词
>   author: //作者
>   license: (ISC): //协议
>   dependencies:  //写入依赖（生产环境）
>   devDependencies: //写入依赖（开发环境）
>}
>  ```
## 5. npm start 启动模块（项目运行）

```js
npm start [-- <args>]
```

启动项目
```js
npm run [项目名称]   // vue

npm start           // react

  ······
```

> 该命令写在 package.json 文件 scripts的 start 字段中，可以自定义命令来配置一个服务器环境和安装一系列的必要程序，如
> ```json
> "scripts": {
>     "start": "gulp -ws"
> }
> ```
>
> 此时在cmd中输入 `npm start` 命令相当于执行 gulpfile.js 文件自定义的 `watch`和 `server` 命令。
>
> 如果 package.json 文件没有设置 start，则将直接启动 `node server.js`

## 6. 停止、重启、测试模块

停止模块
```js
npm stop [-- <args>]
```

重新启动模块
```js
npm restart
or
npm restart [-- <args>]
```

npm test 测试模块

```js
npm test [-- <args>]
or
npm tst [-- <args>]
```

> 该命令写在 package.json 文件scripts 的 test 字段中，可以自定义该命令来执行一些操> 作，如
> ```json
> "scripts": {
>     "test": "gulp release"
> },
> ```
> 此时在cmd中输入 `npm test` 命令相当于执行 gulpfile.js 文件自定义的 release命令。

## 7. 查看模块的版本
```js
npm version [newversion | major patch | preminor | prepatch | from-git]

npm [-v | --version]    //to print npm version
npm view <pkg> version  //to view a package's published version
npm ls                  //to inspect current package/dependency versions
```
查看模块的注册信息
> ```JS
> npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]...]
>
> aliases: info, show, v
> ```
>
> 查看包的依赖关系
> ```js
> npm view [package-name] dependencies
> ```
>
> 查看包的源文件地址
> ```js
> npm view [package-name] repository.url
> ```
>
> 查看包所依赖的Node的版本
> ```js
> npm view [package-name] engines
> ```
>
> 查看npm使用的所有文件夹
> ```js
> npm help folders
> ```
>
> 用于更改包内容后进行重建
> ```js
> npm rebuild [package-name]
> ```
>
> 检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新
> ```js
> npm outdated
> ```


## 8. npm 插件部署到npm官网

发布一个npm包的时候，需要检验某个包名是否已存在
```js
npm search [package-name]
```

登录 npm 官网(第一次使用本机登录，添加用户)
```js
npm adduser
or
npm adduser [--registry=url] [--scope=@orgname] [--always-auth]
```

登录 npm 官网（登录过以后，可以直接值用本命令）
```js
npm login
```

插件的初始化(同样是创建 package.json 文件，与项目的 package.json 不同，这里是插件的信息)
```js
npm init     //初始化
or
npm init -y  //一键初始化
```

:::warning
aliases[-f|--force|-y|--yes]
:::

这里是插件的package.json的简单介绍
>  package.json (插件)
> ```json
>     {
>     "name": "myplugin", //包的名字 要小写
>     "version": "1.0.0", //包的版本号。如"1.0.0"
>     "description": "My New Project description.",
>     //description:包的描述信息，将会在npm search的返回结果中显示，以帮助用户> 选择合适的包
>     "main": "index.js",
>     //main:包的入口文件。
>     "scripts": {
>         "test": "echo \"Error: no test specified\" && exit 1"
>     },
>     //scripts:通过设置这个可以使NPM调用一些命令脚本，封装一些功能。
>     "keywords": [
>         "guangju-test-video"
>     ],
>     //keywords:包的关键词信息，是一个字符串数组，同上也将显示在npm search的> 结果中
>     "author": {
>         "name": "Your Name",
>         "email": "you@mail.com"
>     },
>     //author:包的作者
>     "license": "MIT",
>     //license:包的开源协议名称
>}
> ```
> [其他参数](https://zguangju.gitee.io/Tools/npm2.html#_5-%E5%88%9B%E5%BB%BA-package-json-%E6%96%87%E4%BB%B6)

发布我们的代码到 npm 官网
```js
npm publish
```
:::warning 注意
同一个插件，每一次使用该命令必须保证 package.json 的 version 版本有变化才可以。
:::

在发布的包上设置访问级别
```js
npm access public [ ackage]
npm access restricted [ package]

npm access grant [ read-only|read-write ]scope:team [package]
npm access revoke [scope:team] [package]

npm access ls-packages [ user | scope | scope:team ]
npm access ls-collaborators [ package [ user ]]
npm access edit [ package ]
```

撤销已经发布的包

> 取消发布的整个包，相当于删除发布到 npm 的代码
> ```js
> npm unpublish [package-name] -f
> ```
>
> 如果开启了 `two-factor-authentication（双重验证）`需要加上`--otp=123456`, `123456` 是手机端 npm 验证 app (Authenticator)中获取的验证码。
> ```js
> npm unpublish --otp=123456 [package-name] -f
> ```
>
> 撤销已经发布的具体版本，则可以使用：
> ```js
> npm unpublish [package-name]@[version]
> 例如:
> npm unpublish [package-name]@1.2.0   // v1.2.0是想要撤销的版本号
> ```
> 同上，如果开启了 `two-factor-authentication（双重验证）`需要加上> `--otp=123456`。
>
> ```js
> npm unpublish [package-name]@[version] --otp=123456
> ```

查看当前登录的 npm 用户
```js
npm whoami
```

查看 npm 配置
```js
npm config ls
```

## 9. 清除缓存


npm cache 管理模块的缓存
```js
npm cache add <tarball file>
npm cache add <folder>
npm cache add <tarball url>
npm cache add <name>@<version>
npm cache ls [<path>]
npm cache clean [<path>]
```

最常用命令无非清除npm本地缓存
```js
npm cache clean

```
强制清除缓存(比如安装 vue-cli 不成功时，清除缓存，再重装)
```js
npm cache clear --force
```
## 10. npm 更新和设置其他命令

安装指定版本
```js
npm install [package-name]@[version]
//例如：npm install vue@2.5.1
```

查看当前包的安装路径
```js
npm root
```

查看全局的包的安装路径
```js
npm root -g
```

查看npm安装的版
```js
npm -v
or
npm --version
```

更新 npm 到最新版本
```js
npm install npm -g
```

更新node模块
```js
npm update [package-name]
```

npm config 管理npm的配置路径

```js
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]
```

> 对于config这块用得最多应该是设置代理，解决npm安装一些模块失败的问题
> 例如我在公司内网，因为公司的防火墙原因，无法完成任何模块的安装，这个时候设置代> 理可以解决
> ```
> npm config set proxy=http://xxx
> ```
> 又如国内的网络环境问题，某官方的IP可能被和谐了，国内搭建了镜像，此时简单设置镜> 像
> ```
> npm config set registry="http://r.cnpmjs.org"
> ```
> 也可以临时配置，如安装淘宝镜像
> ```
> npm install -g cnpm --registry=https://registry.npm.taobao.org
> ```

## 11. 帮助命令

查看帮助命令

```js
npm help
or
npm -h
```

npm help 查看某条命令的详细帮助
```js
npm help <term> [<terms..>]
```
> 例如输入 `npm help install`，系统在默认的浏览器或者默认的编辑器中打开本地nodejs安装包的文件`/nodejs/node_modules/npm/html/doc/cli/npm-install.html`

npm包是包含了package.json的文件夹，package.json描述了这个文件夹的结构。访问npm的json文件夹的方法如下，此命令会以默认的方式打开一个网页，如果更改了默认打开程序则可能不会以网页的形式打开
```js
npm help json
```

[更多命令](https://www.npmjs.org/doc)

## 附：package.json 文件详解

- 参考[英文原版](https://docs.npmjs.com/files/package.json)
- 引用国内整理：[《npm的package.json中文文档》](https://github.com/ericdum/mujiang.info/issues/6/)

> npm会根据包内容设置一些默认值。
> ```json
> "scripts": {"start": "node server.js"}
> ```
> 如果包的根目录有 server.js 文件，npm 会默认将 `start` 命令设置为 `node server.js`。
> ```json
> "scripts":{"preinstall": "node-waf clean || true; node-waf configure  build"}
> ```
> 如果包的根目录有 wscript 文件，npm 会默认将 `preinstall` 命令用 `node-waf`进行编译。
> ```json
> "scripts":{"preinstall": "node-gyp rebuild"}
> ```
> 如果包的根目录有 `binding.gyp` 文件，npm 会默认将 `preinstall` 命令用`node-gyp` 进行编译。
> ```json
> "contributors": [...]
> ```
> 如果包的根目录有 AUTHORS 文件，npm 会默认逐行按 `Name <email> (url)`格式处理，邮箱和 url 是可选的。`#` 号和空格开头的行会被忽略。

- name

在 package.json 中最重要的就是 name 和 version 字段。他们都是必须的，如果没有就无法 `install` 。name 和 version 一起组成的标识在假设中是唯一的。改变包应该同时改变version。

name是这个东西的名字。注意：

> - 不要把 node 或者 js 放在名字中。因为你写了 package.json 它就被假定成为了js，不过> 你可以用 "engine" 字段指定一个引擎（见后文）。
> - 这个名字会作为在 URL 的一部分、命令行的参数或者文件夹的名字。任何`non-url-safe`的字符都是不能用的。
> - 这个名字可能会作为参数被传入 `require()`，所以它应该比较短，但也要意义清晰。
> - 在你爱上你的名字之前，你可能要去 `npm registry` 查看一下这个名字是否已经被使用了。[npm 官网](https://www.npmjs.com/)

- version

version 必须能被 [node-semver](https://github.com/isaacs/node-semver) 解析，它被包在npm的依赖中。（要自己用可以执行 `npm install semver`）

可用的“数字”或者“范围”见 [npm 官网](https://www.npmjs.com/).

- description

放简介，字符串，方便在 `npm search` 中搜索

- keywords

关键字，数组、字符串，方便在 `npm search` 中搜索

- bugs

你项目的提交问题的 url 和（或）邮件地址

```json
{
 "url" : "http://github.com/owner/project/issues",
"email" : "project@hostname.com"
}
```

- license

你应该要指定一个许可证，让人知道使用的权利和限制的。

最简单的方法是，假如你用一个像 BSD 或者 MIT 这样通用的许可证，就只需要指定一个许可证的名字，像这样：

```json
{ "license" : "BSD" }
```

如果你又更复杂的许可条件，或者想要提供给更多地细节，可以这样:

```json
"licenses" : [
  { "type" : "MyLicense"
  , "url" : "http://github.com/owner/project/path/to/license"
  }
]
```

- repository

指定你的代码存放的地方。这个对希望贡献的人有帮助。如果 git 仓库在 github 上，那么 `npm docs` 命令能找到你。

这样做：

```json
"repository" :
  { "type" : "git"
  , "url" : "http://github.com/isaacs/npm.git"
  }

"repository" :
  { "type" : "svn"
  , "url" : "http://v8.googlecode.com/svn/trunk/"
  }
```

URL 应该是公开的（即便是只读的）能直接被未经过修改的版本控制程序处理的 url。不应该是一个 html 的项目页面。因为它是给计算机看的。

- scripts

`scripts` 是一个由脚本命令组成的 hash 对象，他们在包不同的生命周期中被执行。key是生命周期事件，value 是要运行的命令。

参考上面的 `npm start`、`npm test` 命令

更多详细请看 [npm-scripts官网](https://www.npmjs.com/package/npm-scripts)

- config

"config" hash 可以用来配置用于包脚本中的跨版本参数。在实例中，如果一个包有下面的配置：

```json
{
 "name" : "foo",
 "config" : { "port" : "8080" }
}
```

然后有一个 `start` 命令引用了 `npm_package_config_port` 环境变量，用户可以通过`npm config set foo:port 8001` 来重写他。

参见 [npm 官网](https://www.npmjs.com/)。

- dependencies

依赖是给一组包名指定版本范围的一个 hash。这个版本范围是一个由一个或多个空格分隔的字符串。依赖还可以用 tarball 或者 git URL。

请不要将测试或过渡性的依赖放在 dependencieshash 中。见下文的 devDependencies

> ```js
> version 必须完全和version一致
> >version 必须比version大
> >=version 同上
> <version 同上
> <=version 同上
> ~version 大约一样
> 1.2.x 1.2.0, 1.2.1, 等，但不包括1.3.0
> http://... 见下文'依赖URL'
> * 所有
> "" 空，同*
> version1 - version2 同 >=version1 <=version2.
> range1 || range2 二选一。
> git... 见下文'依赖Git URL'
> user/repo 见下文'GitHub URLs'
> ```

比如下面都是合法的：

```json
{ "dependencies" :
  { "foo" : "1.0.0 - 2.9999.9999"
  , "bar" : ">=1.0.2 <2.1.2"
  , "baz" : ">1.0.2 <=2.3.4"
  , "boo" : "2.0.1"
  , "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"
  , "asd" : "http://asdf.com/asdf.tar.gz"
  , "til" : "~1.2"
  , "elf" : "~1.2.3"
  , "two" : "2.x"
  , "thr" : "3.3.x"
  }
}
```

- devDependencies

如果有人要使用你的模块，那么他们可能不需要你开发使用的外部测试或者文档框架。

在这种情况下，最好将这些附属的项目列在 devDependencies 中。

这些东西会在执行 `npm link` 或者 `npm install` 的时候初始化，并可以像其他 npm 配置参数一样管理。

对于非特定平台的构建步骤，比如需要编译 CoffeeScript ，可以用 prepublish 脚本去实现，并把它依赖的包放在 devDependency 中。（注：prepublish 定义了在执行 `npm publish` 的时候先行执行的脚本）

比如：

```json
{ "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepublish": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```
prepublish 脚本会在 publishing 前运行，这样用户就不用自己去 require 来编译就能使用。并且在开发模式中（比如本地运行 `npm install` ）会运行这个脚本以便更好地测试。

参考其他资料：

https://docs.npmjs.com/#cli

https://github.com/ericdum/mujiang.info/issues/6/

https://segmentfault.com/a/1190000004221514

(完)