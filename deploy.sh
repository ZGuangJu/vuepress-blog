#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 1、生成静态文件
npm run build

# 2、进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

# 3、提交
git init
git add -A
git commit -m 'deploy-updata'

# 3-1、提交到github仓库中

# 如果想用username.gitee.io或者username.github.io访问你的网站，必须让新建的仓库地址和你的用户名一致！！

# A 执行提交到github仓库的master中（USERNAME是你的仓库名）
# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:ZGuangJu/ZGuangJu.github.io.git master

# B 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -

# 3-2、提交到gitee仓库中(运行deploy.bat文件)
npm run deploygitee
# 结束

# 小记-----
# 其实，提交github和gitee，流程和提交命令是一样的，但是命令合并到一起时，github上的页面样式丢失，最后还是分开执行了，让代码打包了两次，提交了两次，我最初是想让代码打包一次，提交两次，现在这个结果不符合我偷懒的习惯。哎，现在只能线这么办了 ，^_^！