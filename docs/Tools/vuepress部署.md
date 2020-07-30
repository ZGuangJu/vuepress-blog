# VuePress博客--部署发布

## vuepress部署到github托管

### 登陆 Github
打开 github 网站，登陆自己的 github 账号

接着新建两个仓库：

### 新建仓库一：
- USERNAME.github.io （不用克隆到本地，同时这个是你输入地址栏的访问博客地址）

  USERNAME 必须是你 Github 的账号名称

<img src="https://s2.ax1x.com/2020/02/28/3DDwfx.png" alt="typecho01">
这个仓库建好后，不用克隆到本地，内容更新修改都在下面的仓库（本地的）中进行。

### 新建仓库二：

-随便起名字，比如：Blog （这个要克隆到本地）

   - 没有创建vuepress项目的，使用git，将 [vuepress-tools](https://github.com/ZGuangJu/vuepress-tools) 中的内容拷贝到 Blog 文件夹中(里面是vuepress模板)或参考[这里](https://zguangju.github.io/Tools/vuepress.html)自己创建vuepress项目

   - 如果自己创建的vuepress，要在项目根目录下创建.gitignore文件和deploy.sh文件

.gitignore文件内容
```
# git提交时筛选文件用
node_modules
docs/.vuepress/theme
docs/.vuepress/dist

```
deploy.sh文件内容
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master
# USENAME是你的用户名，比如我的是ZGuangJu 只改以上两处即可，如果你的部署地址不是xxxxx.github.io,可以参考下方

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```
以上配置内容是参考vuepress官网，仅供参考

- 在package.json文件中添加下面的代码
```
"scripts": {
  "deploy": "bash deploy.sh"
}
```
- 在本地项目目录打开cmd 运行
```
npm run deploy
```

注：npm run deploy这一步，报错'bash' 不是内部或外部命令，导致一直不成功把bash改为start试试或者把bash添加以下环境变量

出现以下内容代表运行OK
<img src="https://s2.ax1x.com/2020/02/28/3DD51f.png" alt="typecho02">
<img src="https://s2.ax1x.com/2020/02/28/3DDr6O.png" alt="typecho03">

- 在浏览器输入 `https://你的用户名.github.io/` 即可看到自己的主页

## 部署到自己的域名上（要有自己的域名啊）

- 找到购买域名的网站，进入管理后台，点击 `解析` 按钮，添加下面两条内容：

<img src="https://s2.ax1x.com/2020/02/28/3DDWtI.png" alt="typecho04">

- 在 万网 购买域名的同学请注意，第二条记录中的 请用 @ 代替，万网不支持

<img src="https://s2.ax1x.com/2020/02/28/3DDc0H.png" alt="typecho05">

- IP 可以通过 ping 自己的域名得到：

- 添加 CNAME 文件

在仓库 USERNAME.github.io 中找到 Settings > Custom domain 把 www.91guangju.com (你的域名) 添加进去即可。

<img src="https://s2.ax1x.com/2020/02/28/3DDakR.png" alt="typecho06">

- 在地址栏输入自己的域名 看一下吧

