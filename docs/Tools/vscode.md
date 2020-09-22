---
title: VScode 中的设置文档
date: 2020-8-12
sidebar: 'auto'
categories:
 - 工具
tags:
 - VScode
publish: true
---

## 自定义代码片段

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

## 设置文档

```js
{
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻windows设置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 窗口放大倍数
    "window.zoomLevel": 0.4,
    //标题栏上展示文件相对工作区根目录的“相对路径”。若文件不是当前工作区的，则会显示它的完整路径
    // "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺windows设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻全局编辑器editor设置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 自动格式化
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    // "editor.minimap.showSlider": "always", // 一直显示滚动条
    "editor.renderLineHighlight": "all", // 当前行对应的行号栏也高亮显示
    "editor.cursorWidth": 3, // 光标宽
    "editor.wordWrap": "on", // ？？
    "editor.fontWeight": 500, // 字体宽度从1到1000的值，以及字符串值“ normal”和“ bold”。
    "editor.fontFamily": "Consolas", // 字体
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
        //颜色主题Panda Syntax设置（未启用）
        "[Panda Syntax]": {
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
            "editor.selectionHighlightBackground": "#e3dede",
            // 选中高亮的颜色
            "editor.selectionBackground": "#004e66", //"#434e61c9",
            // terminal 终端中的光标
            "terminalCursor.foreground": "#CCFF00",
            // //侧边栏中一块区域的标题
            // "sideBarSectionHeader.background": "#32363d",
            // //区域获取焦点时
            // "focusBorder": "#5b99fc36"
            // "editor.selectionHighlightBorder": "#90e97259",
            // //快捷提示窗口
            // "editorSuggestWidget.highlightForeground": "#7bfc5ba2",
            // "editorSuggestWidget.selectedBackground": "#333f5c",
            // //panel 窗口
            // "panelTitle.activeBorder": "#5b99fc5b",
            // "panelTitle.activeForeground": "#cfcfcf",
            // //标尺
            // "editorRuler.foreground": "#3f3f3f",
        },
        // 颜色主题One Dark Pro设置（现用）
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
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于eslint插件配置🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    "eslint.enable": false, //忽略全部文件检查，即禁止eslint
    // eslint配置文件
    "eslint.options": {
        "extensions": [
            ".js",
            ".vue",
            ".html", //???
        ]
    },
    //配置 ESLint 检查的文件类型  / 添加vue支持
    // "eslint.validate": [
    //     "javascript",
    //     "javascriptreact",
    //     "html",
    //     "html5",
    //     "vue",
    //     "vue-html",
    //     {
    //         "language": "vue",
    //         "autoFix": true
    //     },
    //     {
    //         "language": "html",
    //         "autoFix": true
    //     },
    // ],
    //保存时eslint自动修复错误/是否根据eslint进行格式化
    // "eslint.autoFixOnSave": true,//弃用
    "eslint.codeActionsOnSave.mode": "problems", // all | problems
    // 是否开启eslint检测
    // "eslint.enable": true,
    // exlint 运行的时候： 保存时
    //  "eslint.run": "onSave",
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺全局编辑器eslint设置结束🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺Markdownlint设置开始🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    "markdownlint.config": {
        "MD003": false,
        "MD004": false,
        // "MD013": false,
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
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻关于emmet插件配置开始🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
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
    // 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻其他🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    // 关于react的prettier校验 ？？？？？
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
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
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features",
    },
    // 关于markdown的 prettier校验
    // "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // },
    "cssrem.rootFontSize": 75,
    //让函数名和后面的括号之间加个空格 （无效或冲突）
    // "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    //
    // "minapp-vscode.disableAutoConfig": true,
    //?
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
}
```
