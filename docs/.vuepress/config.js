module.exports = {
  // 主页图片下第一行字、标题栏名称、左上角名称
  title: "ZGuangJu'S NoteBook",
  // 主页图片下第二行字
  description: '欢迎，大爷儿来玩~',
  // 端口配置 80是默认端口(手动部署服务器时用)
  // port: 80,
  // base: '/',
  theme: 'reco', //启动主题 已安装\默认reco
  // 标题栏图标
  head: [
    // 改变title的图标，图标放在public文件夹中，herf后直接 '/图片.格式' ，不要./
    [
      'link',
      {
        rel: 'icon',
        href: '/img/ju.png',//图片如果放在.vuepress/public文件夹下，直接'/图片名 '
      },
    ],
    // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  // 主题使用的插件的设置

  plugins: {
    // 打赏
    // 'vuepress-plugin-sponsor': {
    //   theme: 'Drinks', // Drinks  \ simple
    //   alipay: '/img/alipay.png',
    //   wechat: '/img/wechat.png',
    //   qq: '',
    //   paypal: '',
    //   duration: 2000
    // },
    // 彩带
    "ribbon": {
      size: 70,     // width of the ribbon, default: 90
      opacity: 0.4, // opacity of the ribbon, default: 0.3
      zIndex: -1    // z-index property of the background, default: -1
    },
    // 看板娘
    "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
      theme: ['shizuku', 'wanko', 'haruto', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'koharu', 'izumi', 'shizuku', 'miku', 'z16'],
      clean: false,
      messages: {
        welcome: '我是guangju欢迎你的关注 ',
        home: '心里的花，想要带你回家.',
        theme: '好吧，希望你能喜欢其他小伙伴！',
        close: '那再见了哦~'
      }
    },
  },
  // 主题设置
  themeConfig: {
    // 主题样式
    type: 'blog',
    // 右侧头像
    authorAvatar: '/img/headimg.jpeg',
    // 代码显示样式
    codeTheme: 'solarizedlight', // 'funky' \ 'okaidia' \ 'solarizedlight' \ 'tomorrow'
    // vssue 评论设置
    // vssueConfig: {
    //     platform: 'gitee',
    //     owner: 'ZGuangJu', //创建一个仓库 https://gitee.com/${owner}/${repo}
    //     repo: 'vssue',
    //     clientId: '125232a6deee8e0c9fb852ad090527b5a26cc6dad043352262cab979ee7703b0',
    //     clientSecret: '36e120238f2917d5c52dd824fcbb70244ca92f2fd2cb9effd95ee8213988108e',
    //     autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    // },
    // valine 评论设置
    // valineConfig: {
    //   appId: 'HphnXJO6NChHtY50Di9q039D-MdYXbMMI',// your appId
    //   appKey: 'eGw2p5VfR348442nSkdL3ta6', // your appKey
    // },
    // 密钥
    // keyPage: {
    //     keys: ['a906449d5769fa7361d7ecc6aa3f6d28'], // 123abc
    //     color: '#42b983', // 登录页动画球的颜色
    //     lineColor: '#42b983' // 登录页动画线的颜色
    // },
    // 分类和标签导航
    blogConfig: {
      // category: {
      //     location: 2,     // 在导航栏菜单中在第几个位置，默认2
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
    lastUpdated: '最后提交',
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
      //   // 同上，但是还可以设置成有下拉功能的子选项
      {
        text: '前端基础',
        icon: "reco-category",
        items: [
          { text: 'HTML & H5', link: '/Frontend/HTML/HTML' },
          { text: 'CSS & C3', link: '/Frontend/CSS/css1', },
          { text: 'CSS 教程', link: '/Frontend/CSS2/css1' },
          { text: 'JavaScript', link: '/Frontend/JS/js2' },
          { text: 'ES6', link: '/Frontend/ES6/ES01' },
          { text: 'Promise', link: '/Frontend/Promise/promise' },
          { text: 'JQuery', link: '/Frontend/JQuery/JQuery' },
          { text: 'Ajax', link: '/Frontend/Ajax/Ajax' },
          { text: 'Axios', link: '/Frontend/Axios/axios' },
          { text: 'Class', link: '/Frontend/Class/class01' },
          { text: '跨域', link: '/Frontend/cross_Domain/cross_domain01' },
          { text: 'TypeScript', link: '/Frontend/TS/ts1' },
          { text: 'Webpack 4', link: '/Frontend/Webpack/webpack1' },
          { text: 'HTTP', link: '/Frontend/http' },
          { text: '正则', link: '/Frontend/regex' },
          { text: '算法', link: '/Frontend/algorithm' },
          { text: 'storage', link: '/Frontend/storage' },
          { text: 'less', link: '/Frontend/less' },
          { text: '常用代码', link: '/Frontend/Piece/js2' }
        ]
      },
      {
        text: '前端框架',
        icon: "reco-document",
        items: [
          { text: 'Vue', link: '/Framework/Vue/vue2/vue01' },
          { text: 'Vue3', link: '/Framework/Vue/vue3/vue3-1' },
          { text: 'React', link: '/Framework/React/react01' },
          { text: 'Wechat', link: '/Framework/Wechat/wechat' },
          { text: '项目', link: '/Project/project' }
        ]
      },
      //后端，暂未启用
      {
        text: '后端',
        items: [
          // { text: 'JAVA 的了解', link: '/Backend/JAVA' },
          { text: 'Linux', link: '/Linux/debian' },
          { text: 'MongoDB', link: '/Backend/Mongodb/mongodb1' },
          { text: 'MySQL', link: '/Backend/Mysql/mysql01' },
          { text: 'Node.js', link: '/Backend/Node/node2' },
          { text: 'Express', link: '/Backend/express' },
          { text: 'Docker', link: '/Backend/docker' },
          { text: 'Api', link: '/Backend/api' }
        ],
      },
      {
        text: '工具',
        items: [
          { text: 'git', link: '/Tools/git' },
          { text: 'yarn', link: '/Tools/yarn' },
          { text: 'npm', link: '/Tools/npm' },
          { text: 'npm模块', link: '/Tools/npm_modules' },
          { text: 'Node', link: '/Tools/node' },
          { text: 'cmd', link: '/Tools/cmd' },
          { text: 'nrm', link: '/Tools/nrm' },
          { text: 'nvm', link: '/Tools/nvm' },
          { text: 'pm2', link: '/Tools/pm2' },
          { text: 'serve', link: '/Tools/serve' },
          { text: 'MarkDown', link: '/Tools/markdown' },
          { text: 'Svg', link: '/Tools/svg' },
          { text: 'Terminal', link: '/Tools/terminal' },
          { text: 'Trojan', link: '/Tools/Trojan' },
          { text: 'vite', link: '/Tools/vite' },
          { text: 'Eslint', link: '/Tools/eslint' },
          { text: 'vuepress', link: '/Tools/vuepress' },
          { text: '升级依赖包', link: '/Tools/upgrade' },
          { text: 'Typecho 安装建站', link: '/Tools/typecho' },
          { text: 'VScode等配置文件', link: '/Tools/vscode' },
          { text: 'Win子系统', link: '/Tools/wsl' },
        ],
      },
      {
        text: '小知识',
        items: [
          { text: '学习目标', link: '/Other/target' },
          { text: '报错总结', link: '/Other/errorSummarize' },
          { text: '知识点', link: '/Other/knowledgePoint' },
          { text: '面试题', link: '/Other/interviewQuestion1' },
          { text: '面试题2', link: '/Other/interviewQuestion2' },
          { text: '算法', link: '/Other/algorithm' },
          { text: '字典', link: '/Other/dict' },
          { text: 'token 是什么', link: '/Other/token' },
          { text: '验证码 是什么', link: '/Other/verificationCode' },
          { text: 'Chrome 使用', link: '/Other/Chrome' },
          { text: '浏览器和内核', link: '/Other/browserKernel' },
          { text: 'URI & URL', link: '/Other/URIandURL' },
          { text: 'Apache 是什么', link: '/Other/Apache' },
          { text: 'Nginx 是什么', link: '/Other/nginx' },
          { text: '电脑故障', link: '/Other/computerBreakdown' },
          { text: '中国历史朝代年表', link: '/Other/chronology' },
          //  // { text: '996', link: '/Other/996' },
        ]
      },
      {
        text: 'Timeline',
        link: '/timeline/',
        icon: 'reco-date'
      },
      // {
      //   text: '留言',
      //   link: '/messages/',
      //   icon: 'reco-suggestion'
      // },
      {
        text: '关于',
        link: '/About/'
      },
      //   // {
      //   //     text: 'Github',
      //   //     link: 'https://github.com/ZGuangJu'
      //   // },
    ],
    // 侧边导航设置
    // sidebar: auto,// 自动生成侧栏 /运行项目报错？？？
    sidebar: {
      //   // 侧边导航栏内容
      //   // 前端基础
      '/Frontend/': [
        {
          title: 'HTML',
          collapsable: true, //是否折叠侧边栏
          children: ['HTML/HTML', 'HTML/HTML_meta', 'HTML/HTML_emmet', 'HTML/HTML_render']
        },
        {
          title: 'CSS',
          collapsable: true,//是否折叠侧边栏
          children: ['CSS/css1', 'CSS/css2', 'CSS/css3', 'CSS/css4', 'CSS/css5', 'CSS/css6', 'CSS/css7', 'CSS/css8', 'CSS/css9', 'CSS/css10', 'CSS/css11', 'CSS/css12', 'CSS/css13']
        },
        {
          title: 'CSS教程',
          collapsable: true,//是否折叠侧边栏
          children: ['CSS2/css0', 'CSS2/css1', 'CSS2/css3', 'CSS2/css4', 'CSS2/css5', 'CSS2/css6', 'CSS2/css7', 'CSS2/css8', 'CSS2/css9', 'CSS2/css10', 'CSS2/css11', 'CSS2/css12']
        },
        {
          title: 'JavaScript',
          collapsable: true,
          children: ['JS/js1', 'JS/js2', 'JS/js3', 'JS/js4', 'JS/js5', 'JS/js6', 'JS/js7', 'JS/js8', 'JS/js9', 'JS/js10', 'JS/Array']
        },
        {
          title: 'ES6',
          collapsable: true,
          children: ['ES6/ES01', 'ES6/ES02', 'ES6/ES03', 'ES6/ES04', 'ES6/ES05']
        },
        {
          title: 'Promise',
          collapsable: true,
          children: ['Promise/promise', 'Promise/promise2', 'Promise/promise3', 'Promise/promise4', 'Promise/async']
        },
        {
          title: 'JQuery',
          collapsable: true,
          children: ['JQuery/JQuery', 'JQuery/JQuery2', 'JQuery/JQuery3', 'JQuery/JQuery4']
        },
        {
          title: 'Ajax',
          collapsable: true,
          children: ['Ajax/Ajax']
        },
        {
          title: 'Axios',
          collapsable: true,
          children: ['Axios/axios', 'Axios/axios2', 'Axios/axios3', 'Axios/axios4', 'Axios/axios5', 'Axios/axios6']
        },
        {
          title: 'Class',
          collapsable: true,
          children: ['Class/class01']
        },
        {
          title: '跨越',
          collapsable: true,
          children: ['cross_Domain/cross_domain01']
        },
        {
          title: 'TypeScript',
          collapsable: true,
          children: ['TS/ts1', 'TS/ts2', 'TS/ts3', 'TS/ts4']
        },
        {
          title: 'Webpack 4',
          collapsable: true,
          children: ['Webpack/webpack1', 'Webpack/webpack2', 'Webpack/webpack3', 'Webpack/webpack4', 'Webpack/webpackconfigjs']
        },
        {
          title: '常用代码片段',
          collapsable: true,
          children: ['/Frontend/Piece/css', '/Frontend/Piece/html', '/Frontend/Piece/js0', '/Frontend/Piece/js1', '/Frontend/Piece/js2', '/Frontend/Piece/compatibility', '/Frontend/Piece/example', '/Frontend/Piece/namespace', '/Frontend/Piece/namespace2', '/Frontend/Piece/html_string']
        },
      ],
      '/Framework/Vue/vue2/': [
        {
          title: 'Vue2',
          collapsable: true,
          children: ['vue01', 'vue02', 'vue03', 'vue04', 'vue05', 'vue06', 'vue07', 'vue08', 'vue09', 'vue10', 'vue11', 'vue12', 'vue13', 'vue14', 'vue15', 'vue16', 'vue17', 'vue18', 'vuers-1', 'vuers-2', 'vuers-3', 'vuers-4', 'fragment']
        },

      ],
      '/Framework/Vue/vue3/': [
        {
          title: 'Vue3',
          collapsable: true,
          children: ['vue3-1', 'vue3-2', 'vue3-3',]
        }
      ],
      '/Framework/React/': [
        {
          title: 'React',
          collapsable: true, //是否折叠侧边栏
          children: ['react01', 'react02', 'react03', 'react04', 'react05', 'react06', 'react07', 'react08', 'react09', 'react10', 'react11', 'react12', 'react13', 'react14', 'react15', 'reactandvue', 'react', 'router_doc']
        },
      ],
      '/Framework/Wechat/': [
        {
          title: '微信小程序',
          collapsable: true, //是否折叠侧边栏
          children: ['wechat', 'wechat2', 'wechat3', 'wechat4', 'wechat5', 'wechat6', 'wechat7', 'wechat8', 'wechat9', 'wechat10', 'wechat11', 'wechat12']
        }
      ],
      // 后端
      '/Backend/Node/': ['node1', 'node2', 'package', 'exports'],
      '/Backend/Mongodb/': ['mongodb1', 'mongodb2', 'mongodb3', 'mongodb4', 'mongodb5', 'mongodb6'],
      '/Backend/Mysql/': ['mysql01', 'mysql02', 'mysql03', 'mysql04'],
      '/Backend/': ['express', 'docker', 'api'],
      // 项目
      '/Project/': ['shopingapp', 'admin', 'project', 'todolist'],
      // linux系统
      '/Linux/': ['debian', 'centos', 'screen', 'baota', 'vim'],
      // 工具
      '/Tools/': ['git', 'yarn', 'npm', 'npm_modules', 'node', 'cmd', 'nrm', 'nvm', 'pm2', 'serve', 'markdown', 'svg', 'terminal', 'Trojan', 'vite', 'eslint', 'vuepress', 'upgrade', 'typecho', 'vscode', 'wsl'],
      // 小知识
      '/Other/': [
        'target', 'errorSummarize', 'knowledgePoint', 'interviewQuestion1', 'interviewQuestion2', 'algorithm', 'token', 'URIandURL', 'Apache', 'nginx', 'Chrome', 'browserKernel', 'verificationCode', 'dict', 'computerBreakdown', 'chronology'
      ],//,'996'
    },
    // 友链
    friendLink: [
      {
        title: '我的博客',
        desc: '我的博客地址.',
        email: "guangju@126.com",//可用头像地址替换
        link: 'https://www.zguangju.com'
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
      },
      {
        title: '王杰笔记',
        desc: '王杰笔记',
        email: "",//可用头像地址替换
        link: 'http://wj199624.gitee.io/wangjie/'
      },
      {
        title: '木萨江笔记',
        desc: '木萨江笔记',
        email: "",//可用头像地址替换
        link: 'http://function-217.gitee.io/'
      },
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
    record: '京ICP备2020044651号-2', //www.zguangju.com
    recordLink: 'http://beian.miit.gov.cn/',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2017',
    // author
    author: 'ZGuangJu',
    //导航栏左侧可以显示logo
    // logo: '/head.png',
    // 替换首页的 faceImage 来设置头像
    // authorAvatar: '/avatar.png'
  }
}