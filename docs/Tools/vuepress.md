---
title: 创建 Vuepress 项目
date: 2019-6-15
sidebar: 'auto'
categories:
 - 工具
tags:
 - Vuepress
publish: true
---

:::tip Vuepress 的优点
- 界面简洁优雅（个人感觉比 HEXO 好看）
- 容易上手（半小时能搭好整个项目）
- 更好的兼容、扩展 Markdown 语法
- 响应式布局，PC端、手机端
- Google Analytics 集成
- 支持 PWA
:::

## 创建项目

1. 全局安装 `vuepress` 。
```js
npm install -g vuepress
```

2. 建立一个文件夹。
```js
mkdir blog
```

3. 生成 `package.json` 文件。
```js
npm init -y
```

4. 创建文件夹和文件 参考下面的目录。
```js
vuepressBlogDemo
       ├─── docs
       │   ├── README.md
       │   └── .vuepress
       │       ├── public
       │       └── config.js
       └── package.json
```
5. 配置 `package.json` 的 `scripts` 脚本命令。

```json
"dev": "vuepress dev docs",
"build": "vuepress build docs"
```

6. 配置默认主题 `docs/README.md`。

```yaml
---
# 默认主题
home: true
# 主页图片地址
heroImage: /javascript.gif
# 主页按钮
actionText: 起步 →
# 主页按钮链接地址
actionLink: /Frontend/HTML/HTML
# 首页里的概述
features:
# 主页小标题及内容
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

```

7. 建立静态资源目录 `public`。

   `.vuepress/public` 用来存放图片视频等公共文件。

8. 创建配置文件 `config.js`。

   在 `docs/.vuepress/config.js` 文件中配置网站标题、描述、主题等信息

```js
module.exports = {
  title: 'Hello VuePress',
  description: '我的个人网站'
};
```

9. 配置导航 在 `.vuepress/config.js` ,可以下拉的导航使用的 `items`。

```js
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: 'web', link: '/web/' },
    {
      text: 'js',
      items: [{ text: 'js基础', link: /js/ }, { text: 'js高级', link: /jsg/ }]
    }
  ];
}
```

10. 让导航可以使用

   `docs/web/README.md`

11. 一级的侧边栏配置, 对应的路径就是 `docs` 下面的文件夹

```js
sidebar: ['/', '/web/', '/js/', '/vue/'];
```

12. 侧边栏的分组
```js
  {
     title: 'vue学习',
     collapsable: true,
     children: ['/vuex/', '/props/']
  }
```

13. `config.js` 文件的大致内容，当然可以参考官网丰富内容
```js
module.exports = {
  title: 'Chen\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://weibo.com'}
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
```
完成了基础搭建后，就可以在`docs`目录下新建 `.md` 文件写文章了,至此，可以在本地运行了。

## 发布

部署到github上托管，具体步骤，参考[这里](https://zguangju.gitee.io/Tools/vuepress%E9%83%A8%E7%BD%B2.html)哦。

1. 项目根目录，建立文件 `deploy.sh`

2. git 仓库起名:

    `username.github.io`

3. 发布时候的命令
```js
npm run deploy  //可以在 package.json 的 scripts 中自行设置关键字
```

###  我的vuepress的config文件
```js
module.exports = {
    // 主页图片下第一行字
    title: "张广聚'S 技术分享",
    // 端口配置
    port: 80,
    // 主页图片下第二行字
    description: '欢迎',
    // 这是部署到github相关的配置
    base: '/',
    // 增加一个自定义的 favicon(网页标签的图标)
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/ju.jpg'
            }
        ],
    ],
    markdown: {
    lineNumbers: false // 代码块显示行号
  },
    // 主题设置（默认）
    themeConfig: {

        //侧边栏自动显示当前激活页面中标题的链接?
        sidebarDepth: 2,

        // 允许你获取每个文件的最后一次 git 提交的 UNIX 时间戳（ms
        lastUpdated: 'Last Updated',

        //显示所有页面的标题链接
        // displayAllHeaders: true // 默认值：false

        //设置导航栏禁用（navbar固定写法） navbar：false

        // navbar: false,

        // nav导航栏设置
        nav: [
            // 每个{}中是导航选项，link可以跳转其他路由，或者链接
            {
                text: '首页',
                link: '/'
            },
            // 同上，可以设置成下拉的子选项
            {
                text: '前端技术',
                items: [
                    { text: 'HTML & H5', link: '/Frontend/HTML/HTML' },
                    { text: 'CSS & C3', link: '/Frontend/CSS/CSS' },
                    { text: 'JavaScript', link: '/Frontend/JavaScript/JavaScript' },
                    { text: 'ES6新增', link: '/Frontend/ES6/ES6' },
                    { text: 'JQuery', link: '/Frontend/JQuery/JQuery' },
                    { text: 'Ajax', link: '/Frontend/Ajax/Ajax' },
                    { text: 'Node', link: '/Frontend/Node/Node' },
                    { text: '接口', link: '/Frontend/Prot/prot' },
                    { text: '小程序', link: '/Frontend/Wechat/wechat' },
                    { text: 'Webpack使用', link: '/Frontend/webpack/webpack初识' }

                ]
                // link: '/Frontend/'
            },
            {
                text: 'VUE框架',
                items: [
                    { text: 'VUE基本了解', link: '/Vue/Vue/vue1-1' },
                    { text: 'Vue语法和指令', link: '/Vue/Vue2/vue2-1' },
                    { text: 'VUE属性', link: '/Vue/Vue3/vue3-1' },
                    { text: '项目流程', link: '/Vue/project/shopingapp' },
                ],
                // link: '/Framework/'
            },
            {

                text: '后端技术',
                items: [
                    { text: 'JAVA的了解', link: '/Backend/JAVA' },


                ],
                // link: '/Backend/'
            },
            {
                text: '工具',
                items: [
                    { text: 'git', link: '/Tools/git' },
                    { text: 'git大全', link: '/Tools/git2' },
                    { text: 'git常用', link: '/Tools/git3' },
                    { text: 'git管理', link: '/Tools/git4' },
                    { text: 'npm', link: '/Tools/npm' },
                    { text: 'cmd命令', link: '/Tools/cmd' },
                    { text: 'nrm', link: '/Tools/nrm' },
                    { text: 'regex正则', link: '/Tools/regex' },
                    { text: 'markdown', link: '/Tools/markdown' },
                    { text: 'vuepress', link: '/Tools/vuepress' },

                ],
                // link: '/Tools/'
            },
            {
                text: '其他',
                link: '/Other/'
            },
            {
                text: 'MyGithub',
                link: 'https://github.com/ZGuangJu'

            },
        ],
        // 侧边导航设置
        // sidebar: auto,// 自动生成侧栏 /运行项目报错？？？
        sidebar: {
            // 侧边导航栏内容
            '/Frontend/': [

                {
                    title: 'HTML',
                    collapsable: true, //是否折叠侧边栏
                    children: ['HTML/HTML', 'HTML/HTML2', 'HTML/HTML3']
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: ['CSS/CSS', 'CSS/CSS2', 'CSS/CSS3']
                },
                {
                    title: 'JavaScript',
                    collapsable: true, //是否折叠侧边栏
                    children: ['JavaScript/JavaScript', 'JavaScript/JS2', 'JavaScript/JS3']
                },
                {
                    title: 'ES6',
                    collapsable: true, //是否折叠侧边栏
                    children: ['ES6/ES6', 'ES6/ES02', 'ES6/ES03', 'ES6/ES04']
                },
                {
                    title: 'JQuery',
                    collapsable: true, //是否折叠侧边栏
                    children: ['JQuery/JQuery', 'JQuery/JQuery2', 'JQuery/JQuery3']
                },
                {
                    title: 'Ajax',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Ajax/Ajax', 'Ajax/Ajax2', 'Ajax/Ajax3']
                },
                {
                    title: 'Node',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Node/Node', 'Node/Node2', 'Node/Node3']
                },
                {
                    title: '接口',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Prot/prot']
                },
                {
                    title: '小程序',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Wechat/wechat', 'Wechat/wechat2', 'Wechat/wechat3', 'Wechat/wechat4', 'Wechat/wechat5', 'Wechat/wechat6', 'Wechat/wechat7', 'Wechat/wechat8', 'Wechat/wechat9', 'Wechat/wechat10']
                },
                {
                    title: 'Webpack使用',
                    collapsable: true, //是否折叠侧边栏
                    children: ['webpack/webpack初识', 'webpack/webpackconfigjs']
                }
            ],
            '/Vue/': [
                {
                    title: 'Vue基本了解',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Vue/vue1-1', 'Vue/vue1-2']
                }, {
                    title: 'Vue语法和指令',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Vue2/vue2-1', 'Vue2/vue2-2']
                }, {
                    title: 'Vue属性',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Vue3/vue3-1']
                }, {
                    title: '项目流程',
                    collapsable: true, //是否折叠侧边栏
                    children: ['project/shopingapp', 'project/admin']
                },
            ],
            '/Backend/': ['JAVA'],
            '/Tools/': ['git', 'git2', 'git3', 'git4', 'npm', 'cmd', 'nrm', 'regex', 'markdown', 'vuepress'],
            '/Other/': [
                '', //README.md文件的内容v
                {
                    title: 'vue1',
                    collapsable: true, //是否折叠侧边栏
                    children: ['vue1/vue1', 'vue1/vue2']
                },
                {
                    title: 'vue2',
                    collapsable: true, //是否折叠侧边栏
                    children: ['vue2/vue3', 'vue2/vue3']
                },
                {
                    title: 'vue3',
                    collapsable: true, //是否折叠侧边栏
                    children: ['vue3/vue5', 'vue3/vue6']
                }
            ],
        },
        // search: false, //禁用内置搜索框
        searchMaxSuggestions: 10,//调整搜索框显示的搜索提示数量
        // 假定 GitHub。也可以是一个完整的 GitLab URL。

        // repo: 'https://github.com/ZGuangJu',
        // 自定义项目仓库链接文字

        // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
        // repoLabel: '贡献代码！',

        // 以下为可选的 "Edit this page" 链接选项
        // 如果你的文档和项目位于不同仓库：
        docsRepo: 'vuejs/vuepress',
        // 如果你的文档不在仓库的根目录下：
        docsDir: 'docs',
        // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
        docsBranch: 'master',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助我们改进页面！'

    }
}
```
