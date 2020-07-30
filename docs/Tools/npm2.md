# Npm 发布插件的流程

:::tip 介绍:
我们可以将自己常用的vue功能片段，封装成一个插件，托管到 npm 官网，在以后需要使用时直接安装，方便使用。
:::

## 创建和使用插件

> 1. 建立一个插件的文件夹；
> 2. 在文件夹下创建两个文件， index.js & name.vue【可选】；
> 3. 在index.js 中写install方法将插件挂载到vue实例上，并向外暴漏；
> 4. 在main.js中引入 index.js 使用Vue.use()安装；
> 5. 在具体位置引用。

### 目录结构（这只是最基本的结构，如果插件复杂目录文件会更多）

```
  myplugin
    │
    ├─ index.js      // 入口文件
    ├─ package.json  // 插件配置文件
    ├─ README.md     // 自述文件，用来介绍本插件
    └─ DemoApp.vue   // 插件具体的功能代码
```

### 1. 创建一个文件夹：myplugin（即发布插件时的名称）
:::warning  注意:


1.你即使命名有大写字母，实际下载安装时，包的名字还需用小写！

2.包的名称最好不要太大众的，重名是不能发布成功的！

3.pachage.json的name参数不能使用大写！
:::

### 2. myplugin 下建立一个 index.js 文件，写入如下内容

```js
//在index.js 中写install方法将插件挂载到vue实例上，并向外暴漏
import TestVideo from './VideoApp'
let VideoApp = {
    install: function (Vue, option) {
        Vue.component('TestVideo', TestVideo)
    }
}

export default VideoApp
```
:::warning 注意:
VideoApp 和 TestVideo 不要搞混了！TestVideo是你要**使用**插件时的名字
:::

### 3. 创建VideoApp.vue文件

本文件中式插件的具体功能代码（本例用仅用video标签演示）。
```vue
// VideoApp.vue
<template>
  <div>
    <h3>月星人的活动</h3>
    <video controls width="500">
      <source src="./video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

    <script>
export default {
  name: "VideoApp",

};
    </script>
<style>
</style>
```
### 4. 创建 README.md 文件

在 myplugin 文件夹下建立一个 REDAME.md 的 markdown 文件，本插件的说明文档，我们在 npm 网站上搜到本插件，点开详情页时，用来显示插件说明的文件，[markdown 教程](https://zguangju.gitee.io/Tools/markdown.html)。

### 5. 创建 package.json 文件

在 myplugin 文件夹里打开 cmd 窗口输入
```
npm init    // 一直回车
or
npm init -y
```

<img src="https://s1.ax1x.com/2020/06/27/NykgB9.png" alt="npm init">

然后我们得到一个 package.json 文件；这里简单说明一下, package.json文件的内容：
> package.json
> ```json
> {
>     "name": "mypulgin", //插件、依赖包的名字 要小写
>     "version": "1.0.0", //包的版本号。如"1.0.0"
>     //name和version是package.json中最重要的两个字段，也是发布到NPM平台上的> 唯一标识，如果没有正确设置这两个字段，包就不能发布和被下载
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
>     "dist-tags": {
>         "latest": "1.0.0"
>     },
>     "maintainers": [{
>         "name": "Your Name",
>         "email": "you@mail.com"
>     }],
>     //maintainers:包的贡献者，是一个数组。
>     "time": {
>         "modified": "2020-06-26T10:03:30+00:00",
>         "created": "2020-06-26T10:03:30+00:00",
>         "1.0.0": "2020-06-26T10:03:30+00:00"
>     },
>     //创建、更新时间，版本信息
>     "homepage": "https://my-new-project-website.com/",
>     //homepage:包的主页地址
>     "repository": {
>         "url": "https://example.com/your-username/my-new-project",
>         "type": "git"
>     },
>     //repository:包的仓库地址
>     "contributors": [{
>             "name": "Your Friend",
>             "email": "their-email@mail.com",
>             "url": "http://their-website.com"
>         },
>         {
>             "name": "Another Friend",
>             "email": "another-email@mail.com",
>             "url": "https://another-website.org"
>         }
>     ],
>     //contributors:包的贡献者，是一个数组
>     "bugs": {
>         "url": "https://github.com/you/my-new-project/issues"
>     },
>     //bugs:包的bug跟踪主页地址
>     "license": "MIT",
>     //license:包的开源协议名称
>     "readmeFilename": "README.md",
>     //自述文件的名字
>     "files": ["index.js", "lib/*.js", "bin/*.js"],
>     //files(较少用):包所包含的所有文件，可以取值为文件夹。通常我们还是用.> npmignore来去除不想包含到包里的文件。
>     "bin": {
>         "my-new-project-cli": "bin/my-new-project-cli.js"
>     },
>     //bin(较少用):如果你的包里包含可执行文件，通过设置这个字段可以将它们包含> 到系统的PATH中，这样直接就可以运行，很方便。
>     "dist": {
>         "shasum": "908bc9a06fa4421e96ceda243c1ee1789b0dc763",
>         "tarball": "https://registry.npmjs.org/my-new-project/-/> my-new-project-1.0.0.tgz"
>     },
>     "directories": {}
>     //directories(较少用):CommonJS包所要求的目录结构信息，展示项目的目录结构> 信息。字段可以是：lib, bin, man, doc, example。值都是字符串
>  }
> ```
> 其他参数
>
> - man(较少用):
> 为系统的man命令提供帮助文档。帮助文件的文件名必须以数字结尾，如果是压缩的，需> 要以.gz结尾
>
> - config:
> 添加一些设置，可以供scripts读取用，同时这里的值也会被添加到系统的环境变量中
>
> - dependencies:（生产环境）
> 指定依赖的其它包，这些依赖是指包发布后正常执行时所需要的，也就是线上需要的包。  使用下面的命令来安装：
> ```
> npm install --save packageName
> ```
> 如果是开发中依赖的包，可以在devDependencies设置。
>
> - devDependencies:（开发环境）
>
> 这些依赖只有在开发时候才需要。使用下面的命令来安装：
> ```
> npm install --save-dev packageName
> ```
> - peerDependencies:
>
> 包相关的依赖，如果你的包是插件，而用户在使用你的包时候，通常也会需要这些依赖> （插件），那么可以将依赖列到这里。
>
> 如karma, 它的package.json中有设置，依赖下面这些插件：
>
> > 示例
> > ```json
> > "peerDependencies": {
> >   "karma-jasmine": "~0.1.0",
> >   "karma-requirejs": "~0.2.0",
> >   "karma-coffee-preprocessor": "~0.1.0",
> >   "karma-html2js-preprocessor": "~0.1.0",
> >   "karma-chrome-launcher": "~0.1.0",
> >   "karma-firefox-launcher": "~0.1.0",
> >   "karma-phantomjs-launcher": "~0.1.0",
> >   "karma-script-launcher": "~0.1.0"
> > }
> > ```
> - bundledDependencies:
>
> 绑定的依赖包，发布的时候这些绑定包也会被一同发布。
>
> - optionalDependencies（较少用）:
>
> 即使这些依赖没有，也可以正常安装使用。
>
> - engines（较少用）:
> 指定包运行的环境。
>
> > 示例
> > ```json
> > "engines": {
> >   "node": ">=0.10.3 < 0.12",
> >   "npm": "~1.0.20"
> > }
> > ```
>
> - os（较少用）:
>
> 指定你的包可以在哪些系统平台下运行。
>
> > 示例
> > ```
> > "os": [ "darwin", "linux", "!win32" ]
> > ```
>
> - cpu（较少用）:
>
> 可以指定包运行的cpu架构。
>
> - private:
>
> 设为true这个包将不会发布到NPM平台下。
>
> - publishConfig（较少用）:
>
> 这个字段用于设置发布时候的一些设定。尤其方便你希望发布前设定指定的tag或> registry。

:::warning 提示:
在进行下一步前，要在项目里引入、测试一下你的插件，看是否能用哦
:::

### 测试插件

在你创建插件的项目里引入插件，测试使用效果。
> 1. 在Vue项目里的main.js文件中引入和注册插件；
>   ```js
>    // main.js
>       //引入
>       import TestPulginName from './myplugin'
>       //注册
>       Vue.use(TestPulginName)
>   ```
> 2. 在要使用插件的具体位置使用插件；
>   ```html
>        <div>
>           <TestVideo />
>           <!-- TestVideo:是在插件mypulgin文件夹下index.js中声明的名字 -->
>        </div>
>   ```
>
> 3. 查看页面效果。

## 发布到 npm 官网

只有发布到npm官网，所有人才能通过 npm 下载安装使用你的插件。

### 1. 注册 npm 账号

打开[npm官网](https://www.npmjs.com/),点击 `Sign Up` 注册账号。
>npm 账号的"双重认证"，它默认是开启的，有时候我们强制上传会需要双认证码。
>
>在 npm 网站，用户 Account 设置里：
>
>"Two Factor Authentication"意为"双重认证"，是可以关闭的，需要先验证。手机下载“Authentication”的软件，打开后选择添加账号，选择扫码，扫了 npm 网站上双重认证的二维码就好了，登录成功后，可以把这个双重验证关闭。

### 2. 登录npm账号

在 myplugin 文件夹里打开 cmd :

:::danger  警告:

1. 在发布包之前，如果你是第一次使用 npm 账号，需要验证你注册时的邮箱！！！

2. 你使用的npm源如果不是官网的源，需要先改回官方源！！！
:::

你可以使用nrm来设置源

```
nrm use npm
```

如果没有[安装 nrm]()，也可以使用以下命令切换为官方源:([更多npm使用方法](http://zguangju.gitee.io/Tools/npm.html))

```
npm config set registry https://registry.npmjs.org
```


通过 cmd 登录 npm 账户：
```
npm adduser     //这是添加npm用户的命令
```
如果你已经添加过用户了，只需要进行登录就好,输入
```
npm login
```
无论时 `adduser` 还是 `login` 都会提示输入username、 password、email，依次正确输入。

:::warning 注意:
和登录linux系统一样，输入密码时不会显示输入的内容
:::

<img src="https://s1.ax1x.com/2020/06/27/NyG1Vx.png" alt="login">

如果有提示`Logged in as [your-username] on http://registry.npmjs.org/.`，说明已经正确登录，可以进行提交发布操作了。

### 3. 发布插件

登录成功后 输入命令（[npm发布、撤销及其他常用命令](http://zguangju.gitee.io/Tools/npm.html#_6-npm-插件部署到npm官网)）
```
 npm publish
```
如果不报错，并且命令行显示出了你的包名称，说明我们提交成功了，代码就上传到 npm 网站上了。此时可以到 npm 账户里的 project 查看，也可以在 npm 搜索框里搜到。

## 从npm下载安装插件
在项目目录下的cmd中执行以下命令（[更多npm使用方法](http://zguangju.gitee.io/Tools/npm.html)）：

```
npm i [package-name]
or
yarn add [package-name]
```
> yarn 也是从 npm 下载包的，所以 npm 和 yarn 是通用滴。



## 附：几种报错情况

如果你按照我说的步骤进行的应该已经成功了，如果没有听话，从下面找原因，下面没有的，自己搜索啦。

1. 需要邮箱验证

<img src="https://s1.ax1x.com/2020/06/27/NykcnJ.png" alt="需要邮箱验证">

解决方法打开邮箱，找到npm发给你的邮箱，验证邮箱

2. 需要修改官方源

<img src="https://s1.ax1x.com/2020/06/27/NykWA1.png" alt="需要修改官方源">

解决方法：修改npm源

3. 包名称被占用
<img src="https://s1.ax1x.com/2020/06/27/Nyk27R.png" alt="包名称被占用">

解决方法：修改package.json中的name参数，包名字，以及插件文件夹的名字，

4. 其他错误 ---> [这里](https://cn.bing.com/)