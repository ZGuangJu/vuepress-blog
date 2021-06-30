---
title: VScode 中的设置文档
date: 2020-08-12
sidebar: 'auto'
categories:
 - 工具
tags:
 - VScode
publish: true
# 打赏
showSponsor: true
---
## 设置字体

```js
Consolas,'Source Code Pro', monospace,'Sarasa Term SC'
```

## 自定义代码片段

### 语法简介

```js
"Print to 代码块名称": {
    "prefix": "对应触发代码片段的字符",
    "body": [
      "代码块内容，必须使用双引号引起来",
      "此处为光标首次所在: $1",
      "此处为光标二次所在: $2",
      "此处为当前时间: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE} ${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}"
    ],
    "description": "代码块描述，会在快捷键右侧注释处展示"

```

其他语法：

1. 占位符之光标  `$number`

`$`后面紧跟数字可指定代买片段触发并落入编辑器之后的光标位置，光标位置按照从小到大排序,可以使用 `tab` 键切换到下一个。

如上，代码片段添加到文件中后，光标首`1`先落在`$1`处，按`Tab`键，光标落在`$2`位置

2. 占位符之可选值  `${ number | a }`

括号中的 `number`  对应的是按 `tab` 之后的光标落点顺序， `abc` 为可选的项，

如果只有一个默认值，可以写成：`${ 1: default }`

支持嵌套模式，例如：`${ 1: another  ${ 2: company } }`

3. 占位符之变量 `$variable` , `${ variable : default }`

使用`$variable`，可以插入变量的值，`${ variable : default }`可以在未赋值的情况下提供默认值

可使用变量如下：

a. 文本或文件相关类:

| 变量名             | 含义                           |
| :----------------- | :----------------------------- |
| `TM_SELECTED_TEXT` | 当前选定的文本或空字符串       |
| `TM_CURRENT_LINE`  | 当前行的内容                   |
| `TM_CURRENT_WORD`  | 光标所处单词或空字符串         |
| `TM_LINE_INDEX`    | 行号（从零开始）               |
| `TM_LINE_NUMBER`   | 行号（从一开始）               |
| `TM_FILENAME`      | 当前文档的文件名（含后缀名）   |
| `TM_FILENAME_BASE` | 当前文档的文件名（不含后缀名） |
| `TM_DIRECTORY`     | 当前文档所在目录               |
| `TM_FILEPATH`      | 当前文档的完整文件路径         |
| `CLIPBOARD`        | 当前剪贴板中内容               |
| `WORKSPACE_NAME`   | 打开的工作区或文件夹的名称     |
| `WORKSPACE_FOLDER` | 打开的工作区或文件夹的路径     |

b. 日期和时间类
| 变量名                     | 含义                                |
| :------------------------- | :---------------------------------- |
| `CURRENT_YEAR`             | 当前年份                            |
| `CURRENT_YEAR_SHORT`       | 当前年份的后两位                    |
| `CURRENT_MONTH`            | 格式化为两位数字的当前月份，如 `02` |
| `CURRENT_MONTH_NAME`       | 当前月份的全称，如 `July`           |
| `CURRENT_MONTH_NAME_SHORT` | 当前月份的简称，如 `Jul`            |
| `CURRENT_DATE`             | 当天月份第几天                      |
| `CURRENT_DAY_NAME`         | 当天周几，如 `Monday`               |
| `CURRENT_DAY_NAME_SHORT`   | 当天周几的简称，如 `Mon`            |
| `CURRENT_HOUR`             | 当前小时（`24` 小时制）             |
| `CURRENT_MINUTE`           | 当前分钟                            |
| `CURRENT_SECOND`           | 当前秒数                            |

4. 转义字符，作普通字符使用时，`$` ,  `}` , `"`  ,`\`  等 可使用 `\`（反斜杠）转义。

:::details

```js
{
    // Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
    // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
    // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
    // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
    // Placeholders with the same ids are connected.
    // Example(例子):
    //  模板名称
    // "Print to console": {
    //  需生效文件
    //  "scope": "javascript,typescript",
    //  触发字符
    //  "prefix": "log",
    //  主体内容
    //  "body": [
    //   "console.log('$1');",
    //   "$2"
    //  ],
    //  描述
    //  "description": "Log output to console"
    // }

    // 全局用
    "DOCTYPE": {
        "prefix": "html",
        "description": "HTML常用标签模板",
        "body": [
            "<!DOCTYPE html>",
            "<html lang=\"en\">",
            "<head>",
            "<meta charset=\"UTF-8\">",
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
            "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
            "<!-- <meta http-equiv=\"refresh\" content=\"5\"> -->",
            "<title>$1Document</title>",
            "\t<script src=\"$2../vue.js\"></script>",
            "</head>",
            "<body>",
            "<div id=\"app\">",
            "$3",
            "</div>",
            "<script>",
            "$4",
            "</script>",
            "</body>",
            "</html>$5"
        ]
    },

    "console.log 选中项": {
        "prefix": "cl",
        "description": "console.log输出控制台",
        "body": ["console.log($TM_SELECTED_TEXT,\"$TM_LINE_NUMBER行\")"]
    },
    "console.log 选中项+时间": {
        "prefix": "cl",
        "description": "console.log输出控制台",
        "body": [
            "console.log($TM_SELECTED_TEXT,\"$TM_LINE_NUMBER行,$CURRENT_HOUR点$CURRENT_MINUTE:$CURRENT_SECOND\")"
        ]
    },

    "console.log 剪贴板": {
        "prefix": "clc",
        "description": "console.log输出控制台",
        "body": ["console.log($CLIPBOARD,\"$TM_LINE_NUMBER行\")"]
    },
    "console.log 剪贴板+时间": {
        "prefix": "clc",
        "description": "console.log输出控制台",
        "body": [
            "console.log($CLIPBOARD,\"$TM_LINE_NUMBER行,$CURRENT_HOUR点$CURRENT_MINUTE:$CURRENT_SECOND\")"
        ]
    },

    "function": {
        "prefix": "fun",
        "description": "function模板01",
        "body": ["function ${1:Dosome}() {", "${2:console.log()}", "}"]
    },

    "箭头函数": {
        "prefix": "=>",
        "description": "箭头函数1",
        "body": ["($1)=>{", "$2", "}"]
    },

    "箭头函数2": {
        "prefix": "req=",
        "description": "箭头函数2",
        "body": ["(req,res $1)=>{", "$2", "}"]
    },

    "for循环": {
        "prefix": "for",
        "description": "for循环",
        "body": ["for (let i = 0; i < ${1:array}.length; i++) {", "$2", "}"]
    },

    "forin循环": {
        "prefix": "forin",
        "description": "forin循环",
        "body": ["for (let key in ${1:obj}) {", "$2", "}"]
    },

    "forof循环": {
        "prefix": "forof",
        "description": "forof循环",
        "body": ["for (let iterator of ${1:arr}) {", "$2", "}"]
    },

    // vue 用
    "components": {
        "scope": "vue",
        "prefix": "components",
        "description": "vue创建子组件",
        "body": [
            "components: {",
            "\"${1|parent-component,child-component|}\": {",
            "template: `",
            "<div>",
            "<div></div>$2",
            "</div>`,",
            "props: {",
            "\"$4msg\": {",
            "type: ${5|Number,String,[Number String]|}",
            "}",
            "}",
            "}",
            "}"
        ]
    },

    "component全局": {
        "scope": "vue",
        "prefix": "Vcomponent",
        "description": "vue创建子组件",
        "body": [
            "Vue.component(\"$1component-name\", {",
            "template: `<div>$2</div>`,",
            "data() {",
            "return {",
            "$3",
            "}",
            "},",
            " methods: {",
            "$4",
            "},",
            "props: {",
            "$5",
            "},",
            "components: {",
            "\"$6component-name-two\": {",
            "template: `<div>$7</div>`,",
            "data() {",
            "return {",
            "$8",
            "}",
            "},",
            "props: {",
            "$9",
            "},",
            "methods: {",
            "$10",
            "},",
            "}",
            "}",
            "})"
        ]
    },

    "Vue实例模板": {
        "scope": "vue",
        "prefix": "vm",
        "description": "Vue实例模板",
        "body": [
            "var vm = new Vue({",
            "el: \"#$1app\",",
            "data: {",
            "$2",
            "},",
            "props: {",
            "$3",
            "},",
            " methods: {",
            "$4",
            "},",
            "computed: {",
            "$5",
            "},",
            "watch: {",
            "$6",
            "},",
            "components: {",
            "$7",
            "}",
            "})",
            ""
        ]
    },

    "Vue template框架": {
        "scope": "vue",
        "prefix": "temp",
        "description": "template框架 VUE组件",
        "body": [
            "<template>",
            "<div class=\"$TM_FILENAME_BASE\">$1</div>",
            "</template>",
            "<script>",
            "// import {} from '/'",
            "export default {",
            " name: \"$TM_FILENAME_BASE\",",
            "data() {",
            "return {$2};",
            "},",
            "components: {},",
            "watch: {},",
            "mounted() {},",
            "methods: {},",
            "};",
            "</script>",
            "<style scoped>",
            "$3",
            "</style>"
        ]
    },

    "props": {
        "scope": "vue",
        "prefix": "props",
        "description": "props VUE组件",
        "body": ["props: {", "$1", "},"]
    },

    "jquery": {
        "prefix": "$(",
        "description": "props VUE组件",
        "body": ["$(function () {", "$1", "}"]
    },

    "irr": {
        "scope": "react",
        "prefix": "irr",
        "description": "React片段",
        "body": ["import React from 'react'"]
    },

    "ird": {
        "scope": "react",
        "prefix": "ird",
        "description": "React片段",
        "body": ["import ReactDOM from 'react-dom'"]
    }
}

```

:::
[参考](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## VScode 设置 settings.json 文档

:::details

```js
{
    "editor.suggest.showStatusBar": true,
    "editor.suggest.insertMode": "replace", // insert 插入 replace 替换
    "editor.formatOnPaste": true, //自动格式化
    // "editor.minimap.showSlider": "always", // 一直显示滚动条
    "editor.renderLineHighlight": "all", // 当前行对应的行号栏也高亮显示
    "editor.cursorWidth": 3, // 光标宽
    "editor.wordWrap": "on", // 控制折行的方式
    "editor.fontWeight": 500, // 字体宽度从1到1000的值，以及字符串值“ normal”和“ bold”。
    // 已安装字体 Source Code Pro \ DejaVu Sans Code \Sarasa Term SC \Hasklig \JetBrains Mono \ Fira Code \ Victor Mono \ Monoid \ Cascadia Code \ Iosevka
    // "editor.fontFamily": "Consolas,'Source Code Pro', monospace,'Sarasa Term SC'", // 原字体
    "editor.fontFamily": "DejaVu Sans Code, monospace,'Sarasa Term SC'", // 字体 Cascadia Code \ Fira Code \ Victor Mono \  DejaVu Sans Code
    "editor.fontLigatures": true, // 启用连体字
    "editor.fontSize": 20, // 字体大小
    "editor.detectIndentation": false, // vscode默认启用了根据文件类型自动设置tabsize的选项
    "editor.tabSize": 4,
    // 平滑滚动
    "editor.smoothScrolling": true,
    // 禁止滚动到文件最后一行后还能继续滚动
    "editor.scrollBeyondLastLine": false,
    // 禁止连接文字可点击，取消下划线
    // "editor.links": false,
    // "editor.renderWhitespace": "trailing",//??
    // 编辑器保存时要执行的动作
    "editor.codeActionsOnSave": {
        // "source.fixAll": true, //打开 ESLint 的所有支持的自动修复：
        "source.fixAll.eslint": true, //保存自动修复 eslint 格式错误
        "source.fixAll.markdownlint": true, //保存自动修复 markdownlint  格式错误
        // "source.fixAll.stylelint": true, //保存自动修复 stylelint 格式错误
        "source.fixAll.prettier": true //保存自动修复 stylelint 格式错误
    },
    /*﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋编辑器颜色主题及配置﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋*/
    // 自定义颜色
    "editor.tokenColorCustomizations": {
        //主题名
        "[Panda Syntax]": {
            "comments": {
                // 设置字体样式 bold 加粗italic 斜体underline 下划线
                "fontStyle": "bold",
                // 设置字体颜色
                "foreground": "#6EB6CF"
            }, // 注释
            "keywords": "#FFEB3B", // 关键字 26A69A#FFCA28
            "variables": "#FF6F00", // 变量名
            "strings": "#00b890", // 字符串2874A6/03A9F4/#03A9F4
            "functions": "#14db02", // 函数名
            "numbers": "#ff01ea", // 数字#ff01ea
            "textMateRules": [
                // {
                //     "scope": "log,
                //     "settings": {
                //         "foreground": "#FF0000"
                //     },
                // }
            ]
        },
        //主题名
        "[One Dark Pro]": {
            "comments": {
                // 设置字体样式  bold 加粗  italic 斜体 underline 下划线
                "fontStyle": "bold",
                // 设置字体颜色
                "foreground": "#6EB6CF"
            }, // 注释
            "keywords": "#FFEB3B", // 关键字 26A69A#FFCA28
            "variables": "#FF6F00", // 变量名
            "strings": "#00b890", // 字符串2874A6/03A9F4/#03A9F4
            "functions": "#14db02", // 函数名
            "numbers": "#ff01ea", // 数字#ff01ea
            "textMateRules": [
                // {
                //     "scope": "log,
                //     "settings": {
                //         "foreground": "#FF0000"
                //     },
                // }
            ]
        }
    },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺全局编辑器editor设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于eslint插件配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于window插件配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 自定义对话框样式  button.secondaryBackground
    "window.dialogStyle": "custom",

    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺全局编辑器window设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    //保存时eslint自动修复错误/是否根据eslint进行格式化
    "eslint.codeActionsOnSave.mode": "problems", // all | problems
    // eslint配置文件
    "eslint.options": {
        "extensions": [
            ".js",
            ".vue",
            "ts",
            ".html" //???
        ]
        // 外部的 eslint 配置文件位置 （未启用）
        // "configFile": "C:/.eslintrc.json"
    },
    //配置 ESLint 检查的文件类型  / 添加vue支持
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "html5",
        "css",
        "css3",
        "vue",
        "ts",
        "vue-html",
        "jsx",
        "json"
    ],
    // 是否开启eslint检测
    // "eslint.enable": false,
    // exlint 运行的时候： 保存时
    //   "eslint.run": "onSave",
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺全局编辑器eslint设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻stylelint和prettier设置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "prettier.jsxSingleQuote": true, // 在JSX中使用单引号而不是双引号
    "prettier.semi": true, //是否在每行末尾添加分号
    "prettier.tabWidth": 4, // 缩进字节数
    // "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    // (未启用)
    // 让prettier使用eslint的代码格式进行校验
    // "prettier.eslintIntegration": true,
    //js使用单引号(暂时禁用了)
    // "prettier.singleQuote": true,
    "css.validate": true,
    "less.validate": false,
    "scss.validate": false,
    "[scss]": {
        "editor.formatOnSave": true
    },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺stylelint和prettier设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    "liveSassCompile.settings.formats": [
        {
            "format": "compressed", //expanded
            "extensionName": ".min.css",
            "savePath": "/dist/css"
        }
    ],
    // 不输出地图文件
    "liveSassCompile.settings.generateMap": false,
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻Markdownlint设置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "markdownlint.config": {
        "MD003": false,
        "MD004": false,
        // "MD013": false,
        "MD024": false,
        "MD025": false,
        "MD029": false,
        "MD033": false,
        "MD035": false,
        "MD036": false,
        "MD046": false
    },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺Markdownlint设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻工作区workbench设置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "workbench.activityBar.visible": true, // 隐藏最左侧的活动栏 true显示 | false隐藏
    // 打开文件时，关闭预览模式，直接打开文件
    "workbench.editor.enablePreviewFromQuickOpen": false,
    // "workbench.editor.showIcons": false,// 隐藏 tab 栏文件名左侧的文件类型图标
    "workbench.sideBar.location": "left", //导航栏位置
    "workbench.colorTheme": "One Dark Pro", //颜色主题
    "workbench.iconTheme": "material-icon-theme", // VSCode图标主题 | One Monokai
    "workbench.colorCustomizations": {
        // 颜色主题One Dark Pro设置（现用）  | Panda Syntax设置
        "[One Dark Pro]": {
            // ▼▼▼ 编辑区域背景﹋﹋﹋﹋﹋
            "editor.background": "#2E2E2E",
            // ▼▼▼ 侧边栏﹋﹋﹋﹋﹋
            "sideBar.background": "#272a2f",
            "sideBar.foreground": "#B3B6B7",
            "sideBar.border": "#212F3C",
            // ▼▼▼ 侧边栏列表﹋﹋﹋﹋﹋
            // 目录中被选中项的背景色
            "list.inactiveSelectionBackground": "#4a4f59",
            // 目录中被选中项的字体色
            "list.inactiveSelectionForeground": "#03A9F4",
            // 目录每项鼠标移入的背景色
            "list.hoverBackground": "#616161",
            // 目录每项鼠标移入的字体色
            "list.hoverForeground": "#EEEEEE",
            // peek 窗口
            // "peekView.border": "#5b99fc9c",
            // ▼▼▼ 顶部 标签tab 栏﹋﹋﹋﹋﹋
            // 标签tab 选中时的栏边框背景色
            "tab.activeBackground": "#FDFEFE",
            // 标签tab 选中时的栏边框字体色
            "tab.activeForeground": "#000000",
            // 标签tab 选中时的栏分界线两侧
            "tab.border": "#37474F", //2e2e2e
            // 标签tab 选中时的栏分界线--底
            "tab.activeBorder": "#37474F",
            // Tab标签鼠标移入的背景色
            "tab.hoverBackground": "#B3B6B7",
            // Tab标签鼠标移入的 栏分界线--底
            "tab.hoverBorder": "#8e8e8e",
            //标签tab 未选中时的字体颜色
            "tab.inactiveForeground": "#dddfe6",
            // ▼▼▼ 其他﹋﹋﹋﹋﹋
            // 最左侧工具栏
            "activityBar.background": "#2e2e2e",
            // 状态栏
            "statusBar.background": "#2a2a2a",
            // 光标
            "editorCursor.foreground": "#CCFF00",
            // 当前编辑行
            "editor.lineHighlightBackground": "#32363d",
            // 行号栏的当前行
            "editorLineNumber.activeForeground": "#ffec3e",
            // 行号
            // "editorLineNumber.foreground": "#274c5e",
            // 单击一个词时，其它相同单词
            "editor.selectionHighlightBackground": "#999999", //#e3dede
            // 选中高亮的颜色
            "editor.selectionBackground": "#004e66", //"#434e61c9",

            // //侧边栏资源管理器区域的标题栏颜色
            "sideBarSectionHeader.background": "#32363d"
            //区域获取焦点时
            // "focusBorder": "#5b99fc36"
            // "editor.selectionHighlightBorder": "#90e97259",
            // //快捷提示窗口
            // "editorSuggestWidget.highlightForeground": "#7bfc5ba2",
            // "editorSuggestWidget.selectedBackground": "#333f5c",
            // //panel 窗口
            // "panelTitle.activeBorder": "#5b99fc5b",
            // "panelTitle.activeForeground": "#cfcfcf",
            // //标尺
            // "editorRuler.foreground": "#d44949",
        }
    },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺工作区workbench设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻code-runner插件配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 默认运行的语言
    "code-runner.defaultLanguage": "javascript",
    // 输出的内容
    "code-runner.customCommand": "echo Hello",
    // 是否清除上次的输出记录
    "code-runner.clearPreviousOutput": true,
    // 运行时是否显示 [Running] & [Done]
    "code-runner.showExecutionMessage": true,
    // 运行语言的路径或环境变量
    "code-runner.executorMap": {
        "javascript": "node"
    },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺code-runner设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺

    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于files配置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 保存文件时，去除行尾空格
    "files.trimTrailingWhitespace": true,
    // 自动保存的条件
    "files.autoSave": "onFocusChange",
    //根据文件后缀名定义vue文件类型 /根据文件后缀名定义vue等文件类型
    "files.associations": {
        "*.vue": "vue",
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript",
        "*.html": "html",
        "*.jsx": "javascript"
    },
    // 在 vscode 显示中排除 node_modules 等文件夹
    // "files.exclude": {
    //     "**/.git": true,
    //     "**/.svn": true,
    //     "**/.hg": true,
    //     "**/CVS": true,
    //     "**/.DS_Store": true,
    //     "**/node_modules": true,
    //     //"**/package-lock.json": true
    // },
    // "search.exclude": {
    //     "**/node_modules": true,
    //     "**/bower_components": true,
    //     "**/dist": true
    // },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于files配置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于terminal配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    //在重新加载窗口时保留终端进程
    "terminal.integrated.enablePersistentSessions": true,
    // terminal 终端中的光标
    "terminalCursor.foreground": "#CCFF00",
    // terminal 光标样式
    "terminal.integrated.cursorBlinking": true,
    // "terminal.integrated.cursorStyle": "line",
    // VSCode 中的终端使用什么shell
    // "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe", //cmd
    // "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", //powershell 5.x
    "terminal.integrated.shell.windows": "C:\\Program Files\\PowerShell\\7\\pwsh.exe", //powershell 7.1.0
    "terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "overrideName": true
            // "icon": "terminal-powershell",
            // "env": {
            //     "TEST_VAR": "value"
            // }
        }
    },
    // "terminal.integrated.defaultProfile.windows": "PowerShell",
    //终端选项卡可以作为预览功能
    "terminal.integrated.tabs.enabled": true,
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于terminal结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于emmet配置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "wxml": "html"
    },

    // (未启用)
    // // 配置emmet是否启用tab展开缩写
    "emmet.triggerExpansionOnTab": true,

    // 在vue文件里设置html关联配置 -- emmet对文件类型的支持
    "emmet.syntaxProfiles": {
        "javascript": "jsx",
        "vue": "html",
        "vue-html": "html"
    },
    // "emmet.includeLanguages": {
    //     "wxml": "html"
    // },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于emmet插件配置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于vetur插件开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // (vue工作区用)
    //****vue文件template格式化支持，并使用js-beautify-html插件******
    //让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "prettier", //prettier  \  vscode-typescript
    //让vue中的html按prettier格式进行格式化 ??
    "vetur.format.defaultFormatter.html": "prettier",
    //js-beautify-html格式化配置，属性强制换行
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            // vue组件中html代码格式化样式
            "wrap_attributes": "force-aligned"
        }
    },
    //注：Vetur自带了格式化，规范就是使用prettier如果你有装prettier插件，并且在设置或setting.json里配置了prettier的话是无效的
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于vetur插件结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于Easy Sass插件开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于 TODO 插件开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "todohighlight.isEnable": true,
    "todohighlight.isCaseSensitive": true,
    "todohighlight.keywords": [
        "DEBUG:",
        "REVIEW:",
        {
            "text": "NOTE:",
            "color": "blue",
            "backgroundColor": "blue",
            "overviewRulerColor": "grey"
        },
        {
            "text": "HACK:",
            "color": "#000",
            "isWholeLine": false
        },
        {
            "text": "TODO:",
            "color": "red",
            "border": "2px solid red",
            "borderRadius": "2px", //NOTE: using borderRadius along with `border` or you will see nothing change
            "backgroundColor": "rgba(0,0,0,.2)"
            //other styling properties goes here ...
        }
    ],
    // 自定义
    "todohighlight.keywordsPattern": "TODO:|FIXME:|NOTE:",
    // 原版设置
    //  "todohighlight.keywordsPattern": "TODO:|FIXME:|\\(([^)]+)\\)", //highlight `TODO:`,`FIXME:` or content between parentheses
    "todohighlight.defaultStyle": {
        "color": "red",
        "backgroundColor": "#ffab00",
        "overviewRulerColor": "#42A5F5",
        // "cursor": "pointer",
        "border": "2px solid #eee",
        "borderRadius": "20px",
        "isWholeLine": true
        //other styling properties goes here ...
    },
    "todohighlight.include": [
        "**/*.vue",
        "**/*.js",
        "**/*.jsx",
        "**/*.ts",
        "**/*.tsx",
        "**/*.html",
        "**/*.php",
        "**/*.css",
        "**/*.scss"
    ],
    "todohighlight.exclude": [
        "**/node_modules/**",
        "**/bower_components/**",
        "**/dist/**",
        "**/build/**",
        "**/.vscode/**",
        "**/.github/**",
        "**/_output/**",
        "**/*.min.*",
        "**/*.map",
        "**/*.json",
        "**/.next/**"
    ],
    "todohighlight.maxFilesForSearch": 5120,
    "todohighlight.toggleURI": false,
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于 TODO 插件结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // (未启用)
    // "easysass.formats": [
    //     {
    //         "format": "compressed", // 压缩
    //         "extension": ".css"
    //     }
    // ],
    // "easysass.targetDir": "./", // 自定义css输出文件路径
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于Easy Sass插件结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于file-size插件开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "file-size.position": "right", //right/left 位置
    "file-size.priority": 10,
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于file-size插件结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻对各类型文档的配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 关于react的prettier校验 ？？
    "[javascriptreact]": {
        // "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[javascript]": {
        // 字体连字设置
        "editor.fontLigatures": "'ss02', 'ss19'",
        // 自动保存
        // "editor.formatOnSave": true,
        // 如果报错，用第二个
        "editor.defaultFormatter": "vscode.typescript-language-features"
        // "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
        //需要HookyQR.beautify插件
        // "editor.defaultFormatter": "HookyQR.beautify",
        // "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[css]": {
        // 自动保存
        // "editor.formatOnSave": true,
    },
    // 关于markdown的 prettier校验
    // "[markdown]": {
    // "editor.defaultFormatter": "esbenp.prettier-vscode",
    // },
    // 配置选项控制空格是否插入空括号 默认值为 true
    // "javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺对各类型文档的配置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻其他🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "cssrem.rootFontSize": 75,
    //让函数名和后面的括号之间加个空格 （无效或冲突）
    // "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // "minapp-vscode.disableAutoConfig": true, //?
    // 隐藏左侧边栏上的 OpenEditors 打开的编辑器
    "explorer.openEditors.visible": 1,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "git.autofetch": true,
    "tabnine.experimentalAutoImports": true,
    "settingsSync.ignoredExtensions": [],
    // "vsicons.dontShowNewVersionMessage": true,
    // "todo-tree.tree.showScanModeButton": false,
    // "php.validate.executablePath": "1", //0|1
    //  "guides.enabled": false,
    //  "git.confirmSync": false,
    // gitee备份命令 输入giteeID(无效果)
    // "gitee.gist": "4qwlobruja60fcnhdv25t11",
    // gitee备份 输入torken值
    // "gitee.access_token": "9d4aabc67430fd2f150f6de8ccc292c7"
    // 以下为未分类配置项
    "editor.cursorSmoothCaretAnimation": true,
    "editor.cursorSurroundingLines": 3,
    "diffEditor.ignoreTrimWhitespace": false,
    // 迷你地图
    "editor.minimap.size": "fill",
    // 代码建议提示
    "editor.suggest.localityBonus": true,
    // 弃用 -建议最大显示数
    // "editor.suggest.maxVisibleSuggestions": 10,
    "editor.suggest.shareSuggestSelections": true, //建议
    "editor.suggestFontSize": 18,
    "editor.suggestLineHeight": 22,
    "files.autoSaveDelay": 500,
    "editor.cursorBlinking": "solid",
    "workbench.editor.enablePreview": false,
    "iceworks.materialSources": [],
    "workbench.statusBar.visible": true,
    // auto-rename-tag 插件设置
    "auto-rename-tag.activationOnLanguage": [
        "html",
        "xml",
        "php",
        "javascript",
        "jsx",
        "vue"
    ],
    // 保存自动格式化
    "editor.formatOnSave": true,
    "minapp-vscode.disableAutoConfig": true,
    "[markdown]": {
        "editor.defaultFormatter": "yzhang.markdown-all-in-one"
    },
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "hediet.vscode-drawio.local-storage": "eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltdLFwiZm9ybWF0V2lkdGhcIjpcIjI0MFwiLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODI3LFwiaGVpZ2h0XCI6MTE2OX0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MCxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9In0=",
    "editor.accessibilitySupport": "off",
    "editor.linkedEditing": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "terminal.external.windowsExec": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    }
}
```

:::

## 我的插件备份2020-11-12

:::details
![Vscode 插件](https://s1.ax1x.com/2020/11/11/BjVXtO.png)
:::
