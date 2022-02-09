#.sh

# 确保脚本抛出遇到的错误
set -e

# 调整到项目目录中

cd D:/Project/vuepress-blog

# 开始提交源码

git add .
git commit -m '提交源码'
git push origin master
# 提交源码到github结束

git push -f git@gitee.com:zguangju/vuepress-blog.git dev
# 提交源码到gitee结束
# 源码提交结束
