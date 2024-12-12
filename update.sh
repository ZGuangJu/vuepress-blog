#.sh
#!/bin/bash
# 获取当前日期，格式为 YYYYMMDD
current_date=$(date +%Y%m%d)
# 确保脚本抛出遇到的错误
set -e
#!/bin/bash
#echo "Hello World !"
#
## 调整到项目目录中
#
cd D:/Project/vuepress-blog
#echo "Hello World !"
#
## 开始提交源码
#
git add .
#git commit -m '修改'
git commit -m "修改 updated${current_date}_xk"

git push -f git@gitee.com:zguangju/vuepress-blog.git master
## 提交源码到gitee结束
#
git push -f git@github.com:ZGuangJu/vuepress-blog.git master
## 提交源码到github结束
#
## 源码提交结束
sleep 10000