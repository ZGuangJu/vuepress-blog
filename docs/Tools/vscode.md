---
title: VScode 中的设置文档
date: 2020-08-12
sidebar: 'auto'
categories:
 - 工具
tags:
 - VScode
publish: true
---
## 设置字体

```js
Consolas,'Source Code Pro', monospace,'Sarasa Term SC'
```

## 自定义代码片段

:::details

```js
{
    // Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
    // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
    // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
    // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
    // Placeholders with the same ids are connected.
    // Example:
    // "Print to console": {
    //  "scope": "javascript,typescript",
    //  "prefix": "log",
    //  "body": [
    //   "console.log('$1');",
    //   "$2"
    //  ],
    //  "description": "Log output to console"
    // }
    "DOCTYPE": {
        "prefix": "h",
        "body": [
            "<!DOCTYPE html>"
   "<html lang=\"en\">"

   "<head>"
    "<meta charset=\"UTF-8\">"
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
    "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">"
    "<!-- <meta http-equiv=\"refresh\" content=\"5\"> -->"
    "<title>$1Document</title>"
    "\t<script src=\"$2../vue.js\"></script>"
   "</head>"

   "<body>"
    "<div id=\"app\">"
     "$3"
    "</div>"
    "<script>"
     "$4"
    "</script>"
   "</body>"

   "</html>$5"
        ],
        "description": "HTML常用标签模板"
    },
    "Vue模板": {
        "prefix": "vt",
        "body": [
            "<template>",
            "  <section class=\"$TM_FILENAME_BASE\">",
            "    $1",
            "  </section>",
            "</template>\n",
            "<script>",
            "export default {",
            " name: '$TM_FILENAME_BASE',",
            "  data() {",
            "    return {\n",
            "    }",
            "  },",
            "  components: {},",
            "  watch: {},",
            "  mounted() {},",
            "  methods: {}",
            "}",
            "</script>\n",
            "<style scoped lang=\"less\">\n",
            "</style>",
            "$0"
        ],
        "description": "Vue模板"
    },
    "components": {
        "prefix": "components",
        "body": [
            "components: {"
   "\"${1|parent-component,child-component|}\": {"
    "template: `"
     "<div>"
      "<div></div>$2"
     "</div>`,"
     "props: {""
      "\"$4msg\": {"
       "type: ${5|Number,String,[Number String]|}"
      "}"
     "}"
    "}"
   "}"
        ],
        "description": "vue创建子组件"
    },
    "component全局": {
        "prefix": "Vcomponent",
        "body": [
            "Vue.component(\"$1component-name\", {"
               " template: `"
                   " <div>"
                      "  $2"
                  "  </div>"
              " `,"
             "   data() {"
                    "return {"
                        "$3"
                "}"
            "},"
                "methods: {"
                   " $4"
            "},"

                "props: {"
                    "$5"
            "},"
                "components: {"
                "\"$6component-name-two\": {"
                        "template: `"
                            "<div>"
                                "$7"
                            "</div>"
                        "`,"
                        "data() {"
                            "return {"
                                "$8"
                    "}"
                "},"
                        "props: {"
                            "$9"
                "},"
                        "methods: {"
                            "$10"
                "},"
            "}"
        "}"
    "})"
        ],
        "description": "vue创建子组件"
    },
    "Vue实例模板": {
        "prefix": "vm",
        "body": [
            "var vm = new Vue({"
    "el: \"#$1app\","
    "data: {"
     "$2"

    "},"
    "props: {"
     "$3"

    "},"
    "methods: {"
     "$4"

    "},"
    "computed: {"
     "$5"

    "},"
    "watch: {"
     "$6"

    "},"
    "components: {"
     "$7"

    "}"
   "})"
        ],
        "description": "Vue实例模板"
    },
    "console.log": {
        "prefix": "cl",
        "body": [
            "console.log($1);",
        ],
        "description": "console.log输出控制台"
    },
    "function": {
        "prefix": "fun",
        "body": [
            "function ($1) {"
    " $2"
   "}"
        ],
        "description": "function模板01"
    },
    "function2": {
        "prefix": "func",
        "body": [
            "name$1(){return$2};"
        ],
        "description": "function模板02"
    },
    "template": {
        "prefix": "template",
        "body": [
            "<template>"
       "$1"
   "</template>"
   "<script>"
       "export default {"
       "$2"
      "};"
   "</script>"
   "<style>"
       "$3"
   "</style>"
        ],
        "description": "template VUE组件"
    },
    "props": {
        "prefix": "props",
        "body": [
            "props: {"
                    "$1"
                "},"
        ],
        "description": "props VUE组件"
    },
    "jquery": {
        "prefix": "$",
        "body": [
            "$(function () {"
            "$1"
            "})"
        ],
        "description": "props VUE组件"
    }
}
```

:::

## VScode 设置 settings.json 文档

:::details

```js
{
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻windows设置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 窗口放大倍数
    "window.zoomLevel": 0.4,
    "editor.formatOnPaste": true,
    // "editor.minimap.showSlider": "always", // 一直显示滚动条
    "editor.renderLineHighlight": "all", // 当前行对应的行号栏也高亮显示
    "editor.cursorWidth": 3, // 光标宽
    "editor.wordWrap": "on", // 控制折行的方式
    "editor.fontWeight": 500, // 字体宽度从1到1000的值，以及字符串值“ normal”和“ bold”。
    "editor.fontFamily": "Consolas,'Source Code Pro', monospace,'Sarasa Term SC'", // 字体
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
        "source.fixAll.eslint": true, //保存自动修复 eslint 格式错误
        "source.fixAll.markdownlint": true //保存自动修复 markdownlint  格式错误
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
            // terminal 终端中的光标
            "terminalCursor.foreground": "#CCFF00",
            // //侧边栏资源管理器区域的标题栏颜色
            "sideBarSectionHeader.background": "#32363d",
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
        },
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
        "javascript": "node",
    },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺code-runner设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于eslint插件配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    //忽略全部文件检查，即禁止eslint
    "eslint.enable": false,
    // eslint配置文件
    "eslint.options": {
        "extensions": [
            ".js",
            ".vue",
            ".html", //???
        ],
        // 外部的 eslint 配置文件位置 （未启用）
        // "configFile": "C:/.eslintrc.json"
    },
    //配置 ESLint 检查的文件类型  / 添加vue支持
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "html5",
        "vue",
        "vue-html",
        "jsx",
    ],
    //保存时eslint自动修复错误/是否根据eslint进行格式化
    // "eslint.autoFixOnSave": true,//弃用
    "eslint.codeActionsOnSave.mode": "problems", // all | problems
    // 是否开启eslint检测
    // "eslint.enable": false,
    // exlint 运行的时候： 保存时
    //  "eslint.run": "onSave",
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺全局编辑器eslint设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺Markdownlint设置开始🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
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
        "MD046": false,
    },
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻Markdownlint设置结束🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
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
    // terminal 光标样式
    "terminal.integrated.cursorBlinking": true,
    // "terminal.integrated.cursorStyle": "line",
    // VSCode 中的终端使用什么shell
    // "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe", //cmd
    // "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", //powershell 5.x
    "terminal.integrated.shell.windows": "C:\\Program Files\\PowerShell\\7-preview\\pwsh.exe", //powershell 7.1.0
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于terminal结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于prettier插件配置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // (未启用)
    // 让prettier使用eslint的代码格式进行校验
    // "prettier.eslintIntegration": true,
    // 去掉代码结尾的分号
    // "prettier.semi": false,
    //js使用单引号(暂时禁用了)
    // "prettier.singleQuote": true,
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于prettier插件配置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于emmet配置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "wxml": "html"
    },
    // (未启用)
    // // 配置emmet是否启用tab展开缩写
    // "emmet.triggerExpansionOnTab": true,
    // // 配置emmet对文件类型的支持
    // "emmet.syntaxProfiles": {
    //     "javascript": "jsx",
    //     "vue": "html",
    //     "vue-html": "html"
    // },
    // "emmet.includeLanguages": {
    //     "wxml": "html"
    // },
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于emmet插件配置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于vetur插件开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // (vue工作区用)
    //****vue文件template格式化支持，并使用js-beautify-html插件******
    //让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "vscode-typescript",
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
    // (未启用)
    // "easysass.formats": [
    //     {
    //         "format": "compressed", // 压缩
    //         "extension": ".css"
    //     }
    // ],
    // "easysass.targetDir": "./", // 自定义css输出文件路径
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺关于Easy Sass插件结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻对各类型文档的配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 关于react的prettier校验 ？？
    "[javascriptreact]": {
        // "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[javascript]": {
        // 自动保存
        "editor.formatOnSave": true,
        // 如果报错，用第二个
        "editor.defaultFormatter": "vscode.typescript-language-features",
        // "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        //需要HookyQR.beautify插件
        // "editor.defaultFormatter": "HookyQR.beautify",
        // "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features",
    },
    // 关于markdown的 prettier校验
    // "[markdown]": {
    // "editor.defaultFormatter": "esbenp.prettier-vscode",
    // },
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
    "php.validate.executablePath": "",
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
    "editor.minimap.size": "fill",
    "editor.suggest.localityBonus": true,
    "editor.suggest.maxVisibleSuggestions": 10,
    "editor.suggest.shareSuggestSelections": true,
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
    "editor.formatOnSave": true,
    "minapp-vscode.disableAutoConfig": true
}
```

:::

## 我的插件备份2020-11-12

:::details
![Vscode 插件](https://s1.ax1x.com/2020/11/11/BjVXtO.png)
:::

## Terminal 设置

- 配置文件位置

`Windows Terminal`的配置文件储存在:

```js
~\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\RoamingState\profiles.json
```

- 现用配置
:::details

```js
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
    "initialRows": 25,
    //命令行窗口的行高度
    "initialCols": 110,
    //命令行窗口的宽度
    "alwaysShowTabs": true,
    //亚克力透明度
    "requestedTheme": "system",
    //Windows Terminal 窗口的颜色主题，light 和 dark 分别对应浅色和深色主题，system 是与系统设置相同
    "profiles": [
        {
            "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
            "hidden": false,
            "fontFace": "Sarasa Term SC",
            "fontSize": 14,
            "name": "PowerShell 7.1",
            "source": "Windows.Terminal.PowershellCore",
            // "commandline": "C:/Program Files/PowerShell/v7.1/powershell7.exe", //此处终端打开PS
            "useAcrylic": true, //是否亚克力
            "acrylicOpacity": 0.5, //亚克力背景透明度（需启用useAcrylic）
            // "background": "#1E90FF", //背景颜色，PS默认为蓝色
            "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
            // "colorScheme": "Dracula", //主题 / 配色方案（Dracula需导入）
            "cursorColor": "#FFFFFF", //光标颜色
            "cursorShape": "bar", //光标形状（默认为bar，即条状）
            "historySize": 9001, //缓存大小
            // "icon": "ms-appx:///ProfileIcons/{61c54bbd-c2c6-5271-96e7-009a87ff44bf}.png", //图标
            "tabTitle": "powershell!!!", //在选项卡上显示的名称
            "padding": "20, 20, 10, 0", //内容的边框距，默认填充全部空间
            "snapOnInput": true, //输入的时候自动滚动到输入位置
            "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
            // 背景图路径
            "backgroundImage": "E:\\Pictures\\Screenshots\\430919.png",
            // 背景图透明度
            "backgroundImageOpacity": 0.5,
            // 背景图扩展模式
            "backgroundImageStretchMode": "fill"
        },
        {
            "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
            "name": "PowerShell 5.x",
            "commandline": "powershell.exe",
            //显示/隐藏
            "hidden": false,
            //字体
            "fontFace": "Sarasa Term SC",
            //字号
            "fontSize": 14,
            //亚克力透明度
            "acrylicOpacity": 0.6,
            //是否亚克力
            "useAcrylic": true,
            //主题名字
            "colorScheme": "Campbell"
        },
        {
            "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
            "name": "cmd",
            "commandline": "cmd.exe",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.8,
            "useAcrylic": true,
            "colorScheme": "Campbell"
        },
        {
            "guid": "{469d2f0c-77cd-4b69-8139-0e9bb171616f}",
            "name": "Git",
            "commandline": "C:\\Program Files\\Git\\bin\\bash.exe",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.1,
            "useAcrylic": true,
            "icon": "C:\\Program Files\\Git\\git.jpg",
            "colorScheme": "Campbell",
            "cursorColor": "#FFFFFF"
        },
        {
            "guid": "{abf2cf97-ce51-4594-8fe4-61615d14c3df}",
            "name": "Cmder",
            "commandline": "C:\\Program Files\\cmder\\Cmder.exe",
            //字体
            "fontFace": "Sarasa Term SC",
            //字号
            "fontSize": 16,
            //亚克力透明度
            "acrylicOpacity": 0.8,
            //是否亚克力
            "useAcrylic": true,
            //主题名字
            "colorScheme": "Campbell",
            //图标地址
            "icon": "C:\\Program Files\\cmder\\cmder.jpg"
        },
        {
            "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
            "name": "Azure Cloud Shell",
            "source": "Windows.Terminal.Azure",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.5,
            "useAcrylic": true,
            "colorScheme": "Campbell"
        },
        {
            "guid": "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}",
            "hidden": false,
            "name": "Ubuntu-20.04",
            "source": "Windows.Terminal.Wsl"
        }
    ],
    // Add custom color schemes to this array
    "schemes": [
        {
            "name": "Dracula MOD 1",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#001d7e",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula MOD 2",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#3962e9",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula",
            "background": "#282A36",
            "black": "#21222C",
            "blue": "#BD93F9",
            "brightBlack": "#6272A4",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FF6E6E",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#50FA7B",
            "purple": "#FF79C6",
            "red": "#FF5555",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        }
    ],
    // Add any keybinding overrides to this array.
    // To unbind a default keybinding, set the command to "unbound"
    "keybindings": []
}
```

:::

- 以往配置

:::details 1

```json
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
    "initialRows": 25,
    //命令行窗口的行高度
    "initialCols": 110,
    //命令行窗口的宽度
    "alwaysShowTabs": true,
    //亚克力透明度
    "requestedTheme": "system",
    //Windows Terminal 窗口的颜色主题，light 和 dark 分别对应浅色和深色主题，system 是与系统设置相同
    "profiles": [
        {
            "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
            "hidden": false,
            "fontFace": "Sarasa Term SC",
            "fontSize": 14,
            "name": "PowerShell 7.1",
            "source": "Windows.Terminal.PowershellCore",
            // "commandline": "C:/Program Files/PowerShell/v7.1/powershell7.exe", //此处终端打开PS
            "useAcrylic": true, //是否亚克力
            "acrylicOpacity": 0.5, //亚克力背景透明度（需启用useAcrylic）
            // "background": "#1E90FF", //背景颜色，PS默认为蓝色
            "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
            // "colorScheme": "Dracula", //主题 / 配色方案（Dracula需导入）
            "cursorColor": "#FFFFFF", //光标颜色
            "cursorShape": "bar", //光标形状（默认为bar，即条状）
            "historySize": 9001, //缓存大小
            // "icon": "ms-appx:///ProfileIcons/{61c54bbd-c2c6-5271-96e7-009a87ff44bf}.png", //图标
            // "tabTitle": "powershell!!!∑(ﾟДﾟノ)ノ", //在选项卡上显示的名称
            "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
            "snapOnInput": true, //输入的时候自动滚动到输入位置
            "startingDirectory": "%USERPROFILE%" //初始工作目录，默认为用户目录
        },
        {
            "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
            "name": "Windows PowerShell",
            "commandline": "powershell.exe",
            //显示/隐藏
            "hidden": false,
            //字体
            "fontFace": "Sarasa Term SC",
            //字号
            "fontSize": 14,
            //亚克力透明度
            "acrylicOpacity": 0.6,
            //是否亚克力
            "useAcrylic": true,
            //主题名字
            "colorScheme": "Campbell"
        },
        {
            "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
            "name": "cmd",
            "commandline": "cmd.exe",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.8,
            "useAcrylic": true,
            "colorScheme": "Campbell"
        },
        {
            "guid": "{469d2f0c-77cd-4b69-8139-0e9bb171616f}",
            "name": "bash",
            "commandline": "C:\\Program Files\\Git\\bin\\bash.exe",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.1,
            "useAcrylic": true,
            "icon": "C:\\Program Files\\Git\\git.jpg",
            "colorScheme": "Campbell",
            "cursorColor": "#FFFFFF"
        },
        {
            "guid": "{abf2cf97-ce51-4594-8fe4-61615d14c3df}",
            "name": "Cmder",
            "commandline": "C:\\Program Files\\cmder\\Cmder.exe",
            //字体
            "fontFace": "Sarasa Term SC",
            //字号
            "fontSize": 16,
            //亚克力透明度
            "acrylicOpacity": 0.8,
            //是否亚克力
            "useAcrylic": true,
            //主题名字
            "colorScheme": "Campbell",
            //图标地址
            "icon": "C:\\Program Files\\cmder\\cmder.jpg"
        },
        {
            "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
            "name": "Azure Cloud Shell",
            "source": "Windows.Terminal.Azure",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.5,
            "useAcrylic": true,
            "colorScheme": "Campbell"
        }
    ],
    // Add custom color schemes to this array
    "schemes": [
        {
            "name": "Dracula MOD 1",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#001d7e",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula MOD 2",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#3962e9",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula",
            "background": "#282A36",
            "black": "#21222C",
            "blue": "#BD93F9",
            "brightBlack": "#6272A4",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FF6E6E",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#50FA7B",
            "purple": "#FF79C6",
            "red": "#FF5555",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        }
    ],
    // Add any keybinding overrides to this array.
    // To unbind a default keybinding, set the command to "unbound"
    "keybindings": []
}
```

:::

:::details 2

```json
// This file was initially generated by Windows Terminal 1.1.2021.0
// It should still be usable in newer versions, but newer versions might have additional
// settings, help text, or changes that you will not see unless you clear this file
// and let us generate a new one for you.

// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation
{
    "$schema": "https://aka.ms/terminal-profiles-schema",

        "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",

            // You can add more global application settings here.
            // To learn more about global settings, visit https://aka.ms/terminal-global-settings

            // If enabled, selections are automatically copied to your clipboard.
            "copyOnSelect": false,

                // If enabled, formatted data is also copied to your clipboard
                "copyFormatting": false,

                    // A profile specifies a command to execute paired with information about how it should look and feel.
                    // Each one of them will appear in the 'New Tab' dropdown,
                    //   and can be invoked from the commandline with `wt.exe -p xxx`
                    // To learn more about profiles, visit https://aka.ms/terminal-profile-settings
                    // Terminal 路径  C:\Users\Administrator\AppData\Local\Microsoft\WindowsApps
                    "profiles": {
        "defaults": {
            // Put settings here that you want to apply to all profiles.
        },
        "list": [
            {
                // Make changes here to the powershell.exe profile.
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", //唯一标识符，随机生成
                "name": "powershell!!!∑(ﾟДﾟノ)ノ", //在下拉菜单里显示的名称
                "commandline": "C:/Program Files/PowerShell/v7.1/powershell7.exe", //此处终端打开PS
                "hidden": false,
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "DEJAVU SANS MONO FOR POWERLINE", //所用字体
                "fontSize": 14, //字体大小
                "historySize": 9001, //缓存大小
                "icon": "ms-appx:///ProfileIcons/{61c54bbd-c2c6-5271-96e7-009a87ff44bf}.png", //图标
                "tabTitle": "好厉害的powershell!!!∑(ﾟДﾟノ)ノ", //在选项卡上显示的名称
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true //使用亚克力效果
            },
            {
                // Make changes here to the cmd.exe profile.
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "name": "(〃´-ω･)cmd",
                "commandline": "cmd.exe",
                "hidden": false,
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "Consolas", //所用字体
                "fontSize": 14, //字体大小
                "historySize": 9001, //缓存大小
                "tabTitle": "(〃´-ω･) 安逸的cmd", //在选项卡上显示的名称
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true //使用亚克力效果
            },
            {
                "guid": "{f323ab3c-9641-4904-a3a6-dc4e4992b6ae}",
                "hidden": false,
                "name": "(✪ω✪)git",
                "commandline": "F:/Develop/Git/Git/git-bash.exe",
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": false, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "Consolas", //所用字体
                "fontSize": 16, //字体大小
                "historySize": 9001, //缓存大小
                "tabTitle": "(✪ω✪)拐一批的git", //在选项卡上显示的名称
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true, //使用亚克力效果
                "icon": "F:/Develop/Git/Git/git.jpg"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure",
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "Consolas", //所用字体
                "fontSize": 16, //字体大小
                "historySize": 9001, //缓存大小
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true //使用亚克力效果
            }
        ]
    },
    // Add custom color schemes to this array.
    // To learn more about color schemes, visit https://aka.ms/terminal-color-schemes
    "schemes": [
        {
            "name": "Dracula MOD 1",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#001d7e",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula MOD 2",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#3962e9",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula",
            "background": "#282A36",
            "black": "#21222C",
            "blue": "#BD93F9",
            "brightBlack": "#6272A4",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FF6E6E",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#50FA7B",
            "purple": "#FF79C6",
            "red": "#FF5555",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        }
    ],

        // Add custom keybindings to this array.
        // 将自定义键绑定添加到此数组
        // To unbind a key combination from your defaults.json, set the command to "unbound".
        // 要从defaults.json取消组合键，请将命令设置为“ unbound”
        // To learn more about keybindings, visit https://aka.ms/terminal-keybindings
        // 要了解有关键绑定的更多信息，请访问https://aka.ms/terminal-keybindings
        "keybindings": [
            // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
            // 复制和粘贴绑定到defaults.json中的Ctrl + Shift + C和Ctrl + Shift + V
            // These two lines additionally bind them to Ctrl+C and Ctrl+V.
            // 另外这两行将它们绑定到Ctrl + C和Ctrl + V。
            // To learn more about selection, visit https://aka.ms/terminal-selection
            { "command": { "action": "copy", "singleLine": false }, "keys": "ctrl+c" },
            { "command": "paste", "keys": "ctrl+v" },

            // Press Ctrl+Shift+F to open the search box
            { "command": "find", "keys": "ctrl+shift+f" },

            // Press Alt+Shift+D to open a new pane.按Alt + Shift + D打开一个新窗格。
            // - "split": "auto" makes this pane open in the direction that provides the most surface area.
            // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
            // To learn more about panes, visit https://aka.ms/terminal-panes
            { "command": { "action": "splitPane", "split": "auto", "splitMode": "duplicate" }, "keys": "alt+shift+d" }
        ]
}

```

:::
