module.exports = {
    // 主页图片下第一行字、标题栏名称、左上角名称
    title: "Guangju'S 技术分享",
    // 端口配置 80是默认端口(手动部署服务器时用)
    // port: 80,
    // 主题
    theme: 'reco', //启动主题已安装的有  默认 / reco
    // 主页图片下第二行字
    description: '欢迎',
    head: [
        // 改变title的图标，图标放在public文件夹中，herf后直接 '/图片.格式' ，不要./
        [
            'link',
            {
                rel: 'icon',
                href: '/linktolink.png',//图片放在.vuepress/public文件夹下，直接'/图片名 '
            }
        ],
    ],
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
                text: '前端基础',
                items: [
                    { text: 'HTML & H5', link: '/Frontend/HTML/HTML' },
                    { text: 'CSS & C3', link: '/Frontend/CSS/CSS' },
                    { text: 'JavaScript', link: '/Frontend/JavaScript/JavaScript' },
                    { text: 'ES6新增', link: '/Frontend/ES6/ES6' },
                    { text: 'JQuery', link: '/Frontend/JQuery/JQuery' },
                    { text: 'Ajax', link: '/Frontend/Ajax/Ajax' },
                    { text: 'Axios', link: '/Frontend/Axios/axios' },
                    { text: '接口', link: '/Frontend/Prot/prot' },
                    { text: '小程序', link: '/Frontend/Wechat/wechat' },
                ]
                // link: '/Frontend/'
            },

            {
                text: '前端框架',
                items: [
                    { text: 'Vue', link: '/Framework/Vue/Vue/vue0-1' },
                    { text: 'React', link: '/Framework/React/React基础/react&vue' },
                ]
            },
            {
                text: 'Node.js',
                items: [
                    { text: 'nodejs 是什么', link: '/Node/node' },
                    { text: '关于 Node 的理解', link: '/Node/node2' },
                ],
            },
            {
                text: 'Webpack',
                items: [
                    { text: 'Webpack4.0', link: '/Webpack/webpack初识' },
                    { text: 'Webpack 配置文件说明', link: '/Webpack/webpackconfigjs' },
                ],
            },
            {
                text: '后端技术',
                items: [
                    { text: 'JAVA 的了解', link: '/Backend/JAVA' },
                ],

            },
            {
                text: '工具',
                items: [
                    { text: 'Git 介绍和常用', link: '/Tools/git' },
                    { text: 'Git 命令大全', link: '/Tools/git2' },
                    { text: 'yarn 介绍和常用', link: '/Tools/yarn' },
                    { text: 'npm 介绍和常用', link: '/Tools/npm' },
                    { text: 'npm 发布插件', link: '/Tools/npm2' },
                    { text: 'nrm', link: '/Tools/nrm' },
                    { text: 'cmd 命令', link: '/Tools/cmd' },
                    { text: 'regex 正则', link: '/Tools/regex' },
                    { text: 'MarkDown', link: '/Tools/markdown' },
                    { text: 'Trojan', link: '/Tools/Trojan' },
                    { text: 'Typecho 安装建站', link: '/Tools/typecho' },
                    { text: 'Linux 宝塔使用', link: '/Tools/宝塔' },
                    { text: 'vuepress', link: '/Tools/vuepress' },
                    { text: 'vuepress 部署发布', link: '/Tools/vuepress部署' },
                    { text: 'vim 介绍', link: '/Tools/vim' },
                ],
                // link: '/Tools/'
            },
            {
                text: '小知识',
                items: [
                    { text: '学习内容', link: '/Other/' },
                    { text: 'token 是什么', link: '/Other/token' },
                    { text: '网站黑白', link: '/Other/网站黑白' },
                    { text: 'URI & URL', link: '/Other/URI&URL' },
                    { text: 'Apache 是什么', link: '/Other/Apache' },
                    { text: 'Nginx 是什么', link: '/Other/Nginx' },
                ]
                // link: '/Other/'
            },
            {
                text: '关于',
                link: '/About/about'
            },
            // {
            //     text: 'Github',
            //     // link: 'http://www.beian.gov.cn/'
            //     link: 'https://github.com/ZGuangJu'
            // },
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
                    title: 'Axios',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Axios/axios', 'Axios/axios2']
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
                }
            ],
            '/Framework/Vue/': [
                {
                    title: 'Vue 介绍和使用',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Vue/vue0-1', 'Vue/vue0-2']
                },
                {
                    title: 'Vue语法和指令',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Vue1/vue1-1', 'Vue1/vue1-2']
                },
                {
                    title: 'Vue组件和通信',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Vue2/vue2-1', 'Vue2/vue2-2']
                },
                {
                    title: 'Vue路由',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Vue3/vue3-1', 'Vue3/vue3-2', 'Vue3/vue3-3', 'Vue3/vue3-4']
                },
                {
                    title: 'Vue总结复习',
                    collapsable: true, //是否折叠侧边栏
                    children: ['VueReview/vuers-1', 'VueReview/vuers-2', 'VueReview/vuers-3']
                },

                {
                    title: '项目流程',
                    collapsable: true, //是否折叠侧边栏
                    children: ['project/shopingapp', 'project/admin', 'project/project']
                },
            ],
            '/Framework/React/': [
                {
                    title: 'React基础',
                    collapsable: true, //是否折叠侧边栏
                    children: ['React基础/react&vue', 'React基础/react01', 'React基础/react02', 'React基础/react03', 'React基础/react04', 'React基础/react05']
                },
                {
                    title: 'React初级',
                    collapsable: true, //是否折叠侧边栏
                    children: ['React初级/react01']
                },

            ],
            '/Node/': ['node', 'node2', 'node3'],
            '/Webpack/': ['webpack初识', 'webpackconfigjs'],

            '/Backend/': ['JAVA'],
            '/Tools/': ['git', 'git2', 'yarn', 'npm', 'npm2', 'cmd', 'nrm', 'regex', 'markdown', 'Trojan', 'typecho', '宝塔', 'vuepress', 'vuepress部署', 'vim'],

            '/Other/': [
                '', '网站黑白', 'token', 'URI&URL', 'Apache', 'Nginx'

            ],
        },
        // search: false, //禁用内置搜索框
        searchMaxSuggestions: 20,//调整搜索框显示的搜索提示数量
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