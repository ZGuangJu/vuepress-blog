---
title: TS 编译
date: 2020-12-31
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - TypeScript
publish: true
# 打赏
showSponsor: true
---

## TS 文件编译

- 自动编译单个文件
  - 编译文件时，使用`-w`指令后，`TS`编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。
  - 示例：

 ```s
 tsc xxx.ts -w
 ```

- 自动编译整个项目
  - 使用`tsc`指令，则可以自动将当前项目下的所有`ts`文件编译为`js`文件。
  - 但是能直接使用`tsc`命令的前提时，要先在项目根目录下创建一个`ts`的配置文件`tsconfig.json`
  - `tsconfig.json`是一个`json`文件，添加配置文件后，只需只需`tsc`命令即可完成对整个项目的编译o配置选项：

```json
// tsconfig.json 文件内容 {}即可
{}
```

项目目录下执行命令

```s
tsc
```

执行命令(自定监听并编译)

```s
tsc -w
```

### tsconfig.json 配置选项

`tsconfig.json` 是`ts`编译器的配置文件，根据需要进行配置：

- `include`
- 定义希望被编译文件及所在的目录
- 默认值：`["**/*]`,表示所在项目的所有文件 (一个`*`表示任意文件，`**`表示任意目录)
- 示例：
  - `"include"：["./src/**/*","tests/**/*"]`
  - 上述示例中，所有`src`目录和`test`目录下的文件都会被编

- `exclude`(可选)
  - 定义需要排除在外的目录
  - 默认值：`["node_modules"，"bower_components"，"jspm_packages"]`,如果要排除默认值内人文件可以不指定本项
  - 示例：
    - `"exclude"：["./src/hello/**/*"]`
    - 上述示例中，`src`下`hello`目录下的文件都不会被编译

- `extends`
  - 定义被继承的配置文件,相当于配置文件`config.json`中引入其他的配置文件。
  - 示例：
    - `"extends"："./configs/base"`
    - 上述示例中，当前配置文件中会自动包含`config`目录下`base.json`中的所有配置信息

- `files`
  - 指定被编译文件(单一某个文件)的列表，类似`include`，只有需要编译的文件少时才会用到
  - 示例：

```ts
"files":[
"core.ts",
"sys.ts",
"types.ts",
"scanner.ts",
"parser.ts",
"utilities.ts",
"binder.ts",
"checker.ts",
"tsc.ts"
···
]
```

#### `compilerOptions`

- 编译选项是配置文件中非常重要也比较复杂的配置选项
- 在`compilerOptions`中包含多个子选项，用来完成对编译的配置

项目选项

- `target` js版本
  - 设置`ts`代码编译的目标版本
    - 可选值：
    - `ES3`（默认）、`ES5`、`ES6/ES2015`、`ES7/ES2016`、`ES2017`、`ES2018`、`ES2019`、`ES2020`、`ESNext`。
  - 示例：

```json
"compilerOptions":{
    "target": "ES6"
   }
```

如上设置，我们所编写的`ts`代码将会被编译为`ES6`版本的`js`代码

- `module` 模块化
  - 指定要使用的模块化的规范
  - 可选值
    - `none`, `commonjs`, `amd`, `system`, `umd`, `es6`, `es2015`, `es2020`, `esnext`

- `lib`
  - 指定代码运行时所包含的库（宿主环境）,如果是在浏览器中运行的，可以不使用`lib`
  - 可选值：
    - `ES5`、`ES6/ES2015`、`ES7/ES2016`、`ES2017`、`ES2018`、`ES2019`、`ES2020`、`ESNext`、`DOM`、`WebWorker`、`ScriptHost`...
  - 示例：

```json
"compilerOptions": {
    "lib": "es6"
}
```

- `outDir` 输出目录
  - 编译后的`js`文件的存放位置
  - 示例

```json
"compilerOptions": {
    "outDir": "./dist"
}
```

- `outFile` 输出文件
  - 编译后的`js`文件合并成一个文件
  - 示例

```json
 "compilerOptions": {
    //   "module": "amd", // module 选项必须是 "amd"| "system"
        "outDir": "./dist",
        "outFile": "./dist/app.js"
    }
```

- `allowJs` 值为 `false`(默认)| `true`

编译`ts`文件时是否一同编译`js`文件

- `checkJs` 值为 `false`(默认)| `true`

检查`js`代码是否符合规范

- `removeComments` 值为 `false`(默认)| `true`

是否移除注释

- `noEmit` 值为 `false`(默认)| `true`

是否生成编译后的文件

- `noEmitOnError` 值为 `false`(默认)| `true`

如果代码有错误不生成编译后的文件

- `alwaysStrict` 值为 `false`| `true`

生成的代码是否包含严格模式`"use strict";`如果启用了`module`即使没有`use strict`，默认也是严格模式。

- `noImplicitAny` 值为 `false`| `true`

`ts`文件语法检测时，不允许使用隐式`any`类型

- `noImplicitThis` 值为 `false`| `true`

`ts`不允许不明确类型的 `this`

- `strictNullChecks` 值为 `false`| `true`

严格的检查空值(`null`),如果元素时 `null` 就报错

- `strict` 值为 `false`| `true`

所有严格检测的总开关,开启和关闭所有元素的严格模式。
