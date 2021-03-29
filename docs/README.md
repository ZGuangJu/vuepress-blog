---
# 默认主题
home: true
# 主页图片地址 直接放在项目的public目录下
# heroImage: /home-bg.jpg
# 图片自定义和格式
# bgImage: '/bg.png'
# bgImageStyle: {
#   height: '350px'
# }
# 主页按钮
actionText: About Me
# 主页按钮链接地址
actionLink: /About/
features:
# 主页小标题及内容

# footer:  Copyright © 2020 | guangju's blog | 91guangju.com
# 打赏
# showSponsor: true
---

# 文章链接

- [我的博客地址](http://www.91guangju.com/)

## 如果感觉对您有帮助，请作者喝杯咖啡吧，请注明您的名字或者昵称，方便作者感谢o(￣︶￣)o

|           微信            |           支付宝            |
| :-----------------------: | :-------------------------: |
| ![微信](/img/wechat2.png) | ![支付宝](/img/alipay2.png) |
|         感谢支持          |              💰              |
|           匿名            |            ￥5.0             |
|           王*豪           |            ￥0.1             |

## [Easy Mock](http://123.56.171.43:7300/)模拟数据接口

## [网易音乐接口](http://123.56.171.43:7301)
<!-- 首页首屏下拉按钮 并在vuepress-theme-reco homeblog 添加<div class="anchor-down"></div> -->

## 常用

`js` 或 `webpack` 中的配置：

- `development` : 开发模式

- `production` : 生产模式

`package.json` 依赖安装的区别：

- `devDependencies` : 开发阶段

- `dependencies` : 生产阶段

<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 1s .5s infinite;/*按钮动画*/
  position: absolute;
  left: 50%;
  bottom: 25%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  border-right: 4px solid #5c5b5b;
  border-top: 4px solid #5c5b5b;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  border-right: 4px solid #5c5b5b;
  border-top: 4px solid #5c5b5b;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown");
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }
}
</script>
