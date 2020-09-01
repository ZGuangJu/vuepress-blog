module.exports = {
    // 主页图片下第一行字、标题栏名称、左上角名称
    title: "Guangju'S 笔记分享",
    // 端口配置 80是默认端口(手动部署服务器时用)
    // port: 80,
    // 主题
    theme: 'reco', //启动主题已安装的有  默认 / reco
    // 主页图片下第二行字
    description: '欢迎',
    // 标题栏图标
    head: [
        // 改变title的图标，图标放在public文件夹中，herf后直接 '/图片.格式' ，不要./
        [
            'link',
            {
                rel: 'icon',
                href: '/linktolink.png',//图片放在.vuepress/public文件夹下，直接'/图片名 '
            },
        ],
        // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
        ['meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }]
    ],
    // 主题使用的插件的设置
    plugins: [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["blackCat"],
                clean: false,
                messages: {
                    welcome: '我是guangju欢迎你的关注 ',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见哦'
                }
            }
        ],
        [
            "@vuepress-yard/vuepress-plugin-window",
            {
                title: "公告",
                windowStyle: { left: '41%', top: '100px', width: '260px', },
                contentInfo: {
                    title: '🎉扫码加公众号或加QQ群1126566195',
                    imgUrl: 'https://pic.downk.cc/item/5eab8845c2a9a83be5f67837.png',
                    needImg: true,
                    content: '公众号 比邻之地',
                    contentStyle: {}
                },
                bottomInfo: {
                    btnText: 'Blog',
                    linkTo: 'http://www.91guangju.com'
                },
                closeOnce: true
            }
        ],
        [
            'flowchart'
        ]
    ],
    // markdown设置
    markdown: {
        // 显示代码块行号
        lineNumbers: true
    },
    // 主题设置
    themeConfig: {
        // 主题样式
        type: 'blog',
        // 右侧头像
        authorAvatar: '/headimg.jpeg',
        // valine 评论设置
        valineConfig: {
            appId: 'HphnXJO6NChHtY50Di9q039D-MdYXbMMI',// your appId
            appKey: 'eGw2p5VfR348442nSkdL3ta6', // your appKey
        },
        // 分类和标签导航
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },

        },
        //侧边栏自动显示当前激活页面中标题的链接?
        // sidebarDepth: 2,

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
                link: '/',
                icon: 'reco-home'
            },
            // timeline时间轴
            {
                text: 'Timeline',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: '留言版',
                link: '/messages/',
                icon: 'reco-suggestion'
            },
            // 同上，可以设置成下拉的子选项
            // {
            //     text: '前端基础',
            //     items: [
            //         { text: 'HTML & H5', link: '/Frontend/HTML/HTML' },
            //         { text: 'CSS & C3', link: '/Frontend/CSS/CSS' },
            //         { text: 'JavaScript', link: '/Frontend/JavaScript/JavaScript' },
            //         { text: 'ES6新增', link: '/Frontend/ES6/ES6' },
            //         { text: 'JQuery', link: '/Frontend/JQuery/JQuery' },
            //         { text: 'Ajax', link: '/Frontend/Ajax/Ajax' },
            //         { text: 'Axios', link: '/Frontend/Axios/axios' },
            //         { text: '小程序', link: '/Frontend/Wechat/wechat' },
            //     ]
            //     // link: '/Frontend/'
            // },

            // {
            //     text: '前端框架',
            //     items: [
            //         { text: 'Vue', link: '/Framework/Vue/Vue/vue0-1' },
            //         { text: 'React', link: '/Framework/React/React基础/react&vue' },
            //     ]
            // },
            // {
            //     text: 'Node.js',
            //     items: [
            //         { text: 'nodejs 是什么', link: '/Node/node' },
            //         { text: '关于 Node 的理解', link: '/Node/node2' },
            //     ],
            // },
            // {
            //     text: 'Webpack',
            //     items: [
            //         { text: 'Webpack4.0', link: '/Webpack/webpack初识' },
            //         { text: 'Webpack 配置文件说明', link: '/Webpack/webpackconfigjs' },
            //     ],
            // },
            // {
            //     text: '后端技术',
            //     items: [
            //         { text: 'JAVA 的了解', link: '/Backend/JAVA' },
            //     ],

            // },
            // {
            //     text: '工具',
            //     items: [
            //         { text: 'Git 介绍和常用', link: '/Tools/git' },
            //         { text: 'Git 命令大全', link: '/Tools/git2' },
            //         { text: 'yarn 介绍和常用', link: '/Tools/yarn' },
            //         { text: 'npm 介绍和常用', link: '/Tools/npm' },
            //         { text: 'npm 发布插件', link: '/Tools/npm2' },
            //         { text: 'nrm', link: '/Tools/nrm' },
            //         { text: 'cmd 命令', link: '/Tools/cmd' },
            //         { text: 'regex 正则', link: '/Tools/regex' },
            //         { text: 'MarkDown', link: '/Tools/markdown' },
            //         { text: 'Trojan', link: '/Tools/Trojan' },
            //         { text: 'Typecho 安装建站', link: '/Tools/typecho' },
            //         { text: 'Linux 宝塔使用', link: '/Tools/宝塔' },
            //         { text: 'vuepress', link: '/Tools/vuepress' },
            //         { text: 'vuepress 部署发布', link: '/Tools/vuepress部署' },
            //         { text: 'vim 介绍', link: '/Tools/vim' },
            //         { text: 'VScode配置文件', link: '/Tools/vscode' },
            //     ],
            //     // link: '/Tools/'
            // },
            // {
            //     text: '小知识',
            //     items: [
            //         { text: '学习内容', link: '/Other/' },
            //         { text: 'token 是什么', link: '/Other/token' },
            //         { text: '网站黑白', link: '/Other/网站黑白' },
            //         { text: 'URI & URL', link: '/Other/URI&URL' },
            //         { text: 'Apache 是什么', link: '/Other/Apache' },
            //         { text: 'Nginx 是什么', link: '/Other/Nginx' },
            //     ]
            //     // link: '/Other/'
            // },
            {
                text: '关于',
                link: '/About/'
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
                    children: ['HTML/HTML']
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: ['CSS/CSS']
                },
                {
                    title: 'JavaScript',
                    collapsable: true, //是否折叠侧边栏
                    children: ['JavaScript/JavaScript']
                },
                {
                    title: 'ES6',
                    collapsable: true, //是否折叠侧边栏
                    children: ['ES6/ES01', 'ES6/ES02', 'ES6/ES03', 'ES6/ES04']
                },
                {
                    title: 'Promise',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Promise/promise', 'Promise/promise2']
                },
                {
                    title: 'JQuery',
                    collapsable: true, //是否折叠侧边栏
                    children: ['JQuery/JQuery', 'JQuery/JQuery2', 'JQuery/JQuery3', 'JQuery/JQuery4']
                },
                {
                    title: 'Ajax',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Ajax/Ajax']
                },
                {
                    title: 'Axios',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Axios/axios', 'Axios/axios2', 'Axios/axios3', 'Axios/axios4', 'Axios/axios5']
                },
            ],
            '/Framework/Vue/': [
                {
                    title: 'Vue',
                    collapsable: true, //是否折叠侧边栏
                    children: ['vue0', 'vue1', 'vue2', 'vue3', 'vue4', 'vue5', 'vue6', 'vue7', 'vuers-1', 'vuers-2', 'vuers-3']
                }
            ],
            '/Framework/React/': [
                {
                    title: 'React',
                    collapsable: true, //是否折叠侧边栏
                    children: ['react01', 'react02', 'react03', 'react04', 'react05', 'react&vue']
                },
            ],
            '/Framework/Wechat/': [
                {
                    title: '小程序',
                    collapsable: true, //是否折叠侧边栏
                    children: ['wechat', 'wechat2', 'wechat3', 'wechat4', 'wechat5', 'wechat6', 'wechat7', 'wechat8', 'wechat9', 'wechat10']
                }
            ],
            '/Project/': ['shopingapp', 'admin', 'project'],
            '/Node/': ['node', 'node2', 'package'],
            '/Webpack/': ['webpack1', 'webpack2', 'webpackconfigjs'],

            '/Backend/': ['php'],
            '/Tools/': ['git', 'git2', 'yarn', 'npm', 'npm2', 'upgrade', 'cmd', 'nrm', 'regex', 'markdown', 'Trojan', 'typecho', '宝塔', 'vuepress', 'vuepress部署', 'vim', 'vscode'],

            '/Other/': [
                '', '问题', '知识点', '验证码', '网站黑白', 'token', 'URI&URL', 'Apache', 'Nginx'

            ],
        },
        // 友链
        friendLink: [
            {
                title: '我的博客',
                desc: '我的另一个博客地址.',
                email: "guangju@126.com",//可用头像地址替换
                link: 'http://www.91guangju.com'
            }
            // ...
        ],
        // search: false, //禁用内置搜索框
        searchMaxSuggestions: 20,//调整搜索框显示的搜索提示数量
        // 假定 GitHub。也可以是一个完整的 GitLab URL。

        repo: 'https://github.com/ZGuangJu/ZGuangJu.github.io',
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
        editLinks: false,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助我们改进页面！',
        // 备案信息
        record: '冀ICP备19032877号',
        recordLink: 'http://beian.miit.gov.cn/',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2018',
        // author
        author: '上官大吉',
        //导航栏左侧可以显示logo
        // logo: '/head.png',
        // 替换首页的 faceImage 来设置头像
        // authorAvatar: '/avatar.png'
    }
}