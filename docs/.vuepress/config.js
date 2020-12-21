module.exports = {
    // 主页图片下第一行字、标题栏名称、左上角名称
    title: "GuangJu'S NoteBook",
    // 主页图片下第二行字
    description: '欢迎，大爷儿来玩~',
    // 端口配置 80是默认端口(手动部署服务器时用)
    // port: 80,
    theme: 'reco', //启动主题 已安装的有  默认 / reco
    // 标题栏图标
    head: [
        // 改变title的图标，图标放在public文件夹中，herf后直接 '/图片.格式' ，不要./
        [
            'link',
            {
                rel: 'icon',
                href: '/img/linktolink.png',//图片放在.vuepress/public文件夹下，直接'/图片名 '
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
            // 看板娘
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['shizuku', 'wanko', 'haruto', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'koharu', 'izumi', 'shizuku', 'miku', 'z16'],
                clean: false,
                messages: {
                    welcome: '我是guangju欢迎你的关注 ',
                    home: '心里的花，想要带你回家.',
                    theme: '好吧，希望你能喜欢其他小伙伴！',
                    close: '那再见了哦~'
                }
            }
        ],
        [
            // 彩带
            "ribbon",
            {
                size: 60,     // width of the ribbon, default: 90
                opacity: 0.4, // opacity of the ribbon, default: 0.3
                zIndex: -1    // z-index property of the background, default: -1
            }
        ],
        [
            // 打赏
            'vuepress-plugin-sponsor',
            {
                theme: 'simple', // Drinks  \ simple
                alipay: 'https://pic.downk.cc/item/5e8c52cf504f4bcb0412ad6f.png',
                wechat: 'https://pic.downk.cc/item/5e9fa35fc2a9a83be5281f0e.png',
                // qq: '',
                // paypal: '',
                duration: 2000
            }
        ],
        // 未启用
        // [
        //     // 公告窗
        //     "@vuepress-yard/vuepress-plugin-window",
        //     {
        //         title: "公告",
        //         windowStyle: { left: '41%', top: '100px', width: '260px', },
        //         contentInfo: {
        //             title: '🎉扫码加公众号或加QQ群1126566195',
        //             imgUrl: 'https://pic.downk.cc/item/5eab8845c2a9a83be5f67837.png',
        //             needImg: true,
        //             content: '公众号 比邻之地',
        //             contentStyle: {}
        //         },
        //         bottomInfo: {
        //             btnText: 'Blog',
        //             linkTo: 'http://www.91guangju.com'
        //         },
        //         closeOnce: true
        //     }
        // ]
    ],
    // 主题设置
    themeConfig: {
        // 主题样式
        type: 'blog',
        // 右侧头像
        authorAvatar: '/img/headimg.jpeg',
        // 代码显示样式
        codeTheme: 'solarizedlight', // 'funky' \ 'okaidia' \ 'solarizedlight' \ 'tomorrow'
        // valine 评论设置
        valineConfig: {
            appId: 'HphnXJO6NChHtY50Di9q039D-MdYXbMMI',// your appId
            appKey: 'eGw2p5VfR348442nSkdL3ta6', // your appKey
        },
        // 分类和标签导航
        blogConfig: {
            // category: {
            //     location: 2,     // 在导航栏菜单中所占的位置，默认2
            //     text: '分类' // 默认文案 “分类”
            // },
            tag: {
                location: 2,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
        },
        //侧边栏自动显示当前激活页面中标题的链接?
        // sidebarDepth: 2,

        // 允许你获取每个文件的最后一次 git 提交的 UNIX 时间戳（ms）
        lastUpdated: 'Last Updated',

        //显示所有页面的标题链接
        displayAllHeaders: true,// 默认值：false

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
            // 同上，但是还可以设置成有下拉功能的子选项
            {
                text: '前端基础',
                icon: "reco-category",
                items: [
                    { text: 'HTML & H5', link: '/Frontend/HTML/HTML' },
                    { text: 'CSS & C3', link: '/Frontend/CSS/css1', },
                    { text: 'CSS 教程', link: '/Frontend/CSS2/css1' },
                    { text: 'JavaScript', link: '/Frontend/JS/js1' },
                    { text: 'ES6', link: '/Frontend/ES6/ES01' },
                    { text: 'Promise', link: '/Frontend/Promise/promise' },
                    { text: 'JQuery', link: '/Frontend/JQuery/JQuery' },
                    { text: 'Ajax', link: '/Frontend/Ajax/Ajax' },
                    { text: 'Axios', link: '/Frontend/Axios/axios' },
                    { text: 'Webpack4.0', link: '/Webpack/webpack1' },
                    { text: 'node.js', link: '/Node/node1' },
                ]
            },
            {
                text: '前端框架',
                icon: "reco-document",
                items: [
                    { text: 'Vue', link: '/Framework/Vue/vue01' },
                    { text: 'React', link: '/Framework/React/React01' },
                    { text: 'Wechat', link: '/Framework/Wechat/Wechat' }
                ]
            },
            //后端，暂未启用
            {
                text: '后端技术',
                items: [
                    // { text: 'JAVA 的了解', link: '/Backend/JAVA' },
                    { text: 'Linux', link: '/Linux/centos' },
                    { text: 'MongoDB', link: '/Backend/mongodb1' },
                    { text: 'Api', link: '/Backend/api' },
                ],
            },
            {
                text: '工具',
                items: [
                    { text: 'git', link: '/Tools/git' },
                    { text: 'yarn', link: '/Tools/yarn' },
                    { text: 'npm', link: '/Tools/npm' },
                    { text: 'cmd', link: '/Tools/cmd' },
                    { text: 'nrm', link: '/Tools/nrm' },
                    { text: 'serve', link: '/Tools/serve' },
                    { text: 'MarkDown', link: '/Tools/markdown' },
                    { text: 'Terminal', link: '/Tools/terminal' },
                    { text: 'Trojan', link: '/Tools/Trojan' },
                    { text: 'vite', link: '/Tools/vite' },
                    { text: 'vuepress', link: '/Tools/vuepress' },
                    { text: '升级依赖包', link: '/Tools/upgrade' },
                    { text: 'regex 正则', link: '/Tools/regex' },
                    { text: 'Typecho 安装建站', link: '/Tools/typecho' },
                    { text: 'Eslint 的使用和禁用', link: '/Tools/Eslint' },
                    { text: 'VScode等配置文件', link: '/Tools/vscode' },
                    { text: 'Win子系统', link: '/Tools/wsl' },
                ],
            },
            {
                text: '小知识',
                items: [
                    { text: '项目总结', link: '/Project/shopingapp' },
                    { text: '学习内容', link: '/Other/' },
                    { text: '知识点', link: '/Other/知识点' },
                    { text: '面试题', link: '/Other/面试题' },
                    { text: 'export区别', link: '/Other/export' },
                    { text: '变量常用名', link: '/Other/name' },
                    { text: '问题', link: '/Other/问题' },
                    { text: 'token 是什么', link: '/Other/token' },
                    { text: '网站黑白', link: '/Other/网站黑白' },
                    { text: 'Chrome 使用', link: '/Other/Chrome' },
                    { text: '浏览器和内核', link: '/Other/浏览器内核' },
                    { text: 'URI & URL', link: '/Other/URI&URL' },
                    { text: 'Apache 是什么', link: '/Other/Apache' },
                    { text: 'Nginx 是什么', link: '/Other/Nginx' },
                    { text: '报 error 的本质和处理', link: '/Other/error' },
                    { text: '验证码 是什么', link: '/Other/验证码' },
                ]
            },
            {
                text: 'Timeline',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: '留言',
                link: '/messages/',
                icon: 'reco-suggestion'
            },
            {
                text: '关于',
                link: '/About/'
            },
            // {
            //     text: 'Github',
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
                    collapsable: true,//是否折叠侧边栏
                    children: ['CSS/css1', 'CSS/css2', 'CSS/css3', 'CSS/css4', 'CSS/css5', 'CSS/css6', 'CSS/css7', 'CSS/css8', 'CSS/css9', 'CSS/css10', 'CSS/css11', 'CSS/css12']
                },
                {
                    title: 'CSS教程',
                    collapsable: true,//是否折叠侧边栏
                    children: ['CSS2/css0', 'CSS2/css1', 'CSS2/css3', 'CSS2/css4', 'CSS2/css5', 'CSS2/css6', 'CSS2/css7', 'CSS2/css8', 'CSS2/css9', 'CSS2/css10', 'CSS2/css11', 'CSS2/css12']
                },
                {
                    title: 'JavaScript',
                    collapsable: true, //是否折叠侧边栏
                    children: ['JS/js1', 'JS/js2', 'JS/js3', 'JS/js4', 'JS/js5', 'JS/js6', 'JS/js7', 'JS/js8', 'JS/Array']
                },
                {
                    title: 'ES6',
                    collapsable: true, //是否折叠侧边栏
                    children: ['ES6/ES01', 'ES6/ES02', 'ES6/ES03', 'ES6/ES04', 'ES6/ES05']
                },
                {
                    title: 'Promise',
                    collapsable: true, //是否折叠侧边栏
                    children: ['Promise/promise', 'Promise/promise2', 'Promise/promise3']
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
                    children: ['vue3-1', 'vue01', 'vue02', 'vue03', 'vue04', 'vue05', 'vue06', 'vue07', 'vue08', 'vue09', 'vue10', 'vue11', 'vuers-1', 'vuers-2', 'vuers-3']
                }
            ],
            '/Framework/React/': [
                {
                    title: 'React',
                    collapsable: true, //是否折叠侧边栏
                    children: ['react01', 'react02', 'react03', 'react04', 'react05', 'react06', 'react07', 'react08', 'react09', 'react10', 'react11', 'react12', 'react13', 'react14', 'react&vue', 'react', 'router_doc']
                },
            ],
            '/Framework/Wechat/': [
                {
                    title: '微信小程序',
                    collapsable: true, //是否折叠侧边栏
                    children: ['wechat', 'wechat2', 'wechat3', 'wechat4', 'wechat5', 'wechat6', 'wechat7', 'wechat8', 'wechat9', 'wechat10', 'wechat11', 'wechat12']
                }
            ],
            // 项目
            '/Project/': ['shopingapp', 'admin', 'project', 'todolist'],
            '/Node/': ['node1', 'node2', 'package'],
            '/Webpack/': ['webpack1', 'webpack2', 'webpackconfigjs'],
            // 后端
            '/Backend/': ['mongodb1', 'mongodb2', 'mongodb3', 'mongodb4', 'mongodb5', 'api'],
            '/Linux/': ['centos', 'screen', '宝塔', 'vim'],
            // 工具
            '/Tools/': ['git', 'yarn', 'npm', 'cmd', 'nrm', 'serve', 'markdown', 'terminal', 'Trojan', 'vite', 'vuepress', 'upgrade', 'regex', 'typecho', 'Eslint', 'vscode', 'wsl'],
            //小知识
            '/Other/': [
                '', '问题', 'error', '知识点', '面试题', 'export', 'name', '网站黑白', 'token', 'URI&URL', 'Apache', 'Nginx', 'Chrome', '验证码'
            ],
        },
        // 友链
        friendLink: [
            {
                title: '我的博客',
                desc: '我的博客地址.',
                email: "guangju@126.com",//可用头像地址替换
                link: 'http://www.91guangju.com'
            },
            {
                title: '陈旭笔记',
                desc: '陈旭笔记',
                email: "",//可用头像地址替换
                link: 'http://webchenxu.gitee.io'
            },
            {
                title: '宋宇笔记',
                desc: '宋宇笔记',
                email: "",//可用头像地址替换
                link: 'http://websong.wang/'
            }
            // ...
        ],
        // markdown设置
        markdown: {
            // 显示代码块行号
            lineNumbers: true
        },
        // search: false, //禁用内置搜索框
        searchMaxSuggestions: 20,//调整搜索框显示的搜索提示数量
        // 假定 GitHub。也可以是一个完整的 GitLab URL。

        // repo: 'https://github.com/ZGuangJu/ZGuangJu.github.io',
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
        record: '京ICP备2020044651号-1', //zguangju.gitee.io
        // record: '京ICP备2020044651号-2', //zguangju.com
        recordLink: 'http://beian.miit.gov.cn/',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2017',
        // author
        author: 'GuangJu',
        //导航栏左侧可以显示logo
        // logo: '/head.png',
        // 替换首页的 faceImage 来设置头像
        // authorAvatar: '/avatar.png'
    }
}