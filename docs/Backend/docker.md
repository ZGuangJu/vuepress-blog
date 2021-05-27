---
title: Docker
date: 2021-5-08
sidebar: 'auto'
categories:
 - 后端技术
 - Docker
tags:
 - Docker
publish: true
# 打赏
showSponsor: true
---

## 安装

### windows

- 下载
  - 官网下载[Docker-Desktop](https://www.docker.com/products/docker-desktop) 或[下载连接](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)

- 安装软件前

  - `inter`
    - 在 `bios` 开启虚拟化 -- `inter - V T`
    - 开启 `Hyper-V`
  - `AMD`
    - 在`bios`开启`AMD-V`

- 安装软件

:::warning
安装完毕后，第一次打开，可能会有错误提示，让你升级WSL2,打开链接，下载升级包安装即可，然后再次打开docker 就可以了。
:::

## 使用

### 挂载 vue 或react 、node项目

1. 在项目中先打包

```js
npm run build
// 或
yarn build
```

2. 在项目根目录中创建`Dockerfile`文件,内容如下：

react

```js
FROM node as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "8001", "-s", "."]
```

vue

```js
# 设置基础镜像
FROM nginx
# 定义作者
MAINTAINER jiangyu
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/
```

3. 构建镜像，在根目录打开`cmd`(`.`是必须的,`testapp`是测试名)

```js
docker build -t testapp .
// -f Dockerfile 文件的位置 如： -f /path/to/a/Dockerfile
// --tag, -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；-t myimg:0.1 . myimg是镜像名，0.1是tag；可以在一次构建中为一个镜像设置多个标签
//  . 表示当前目录， 即dockerfile所在的目录
```

4. 查看`docker images`

```js
docker images
```

如果有创建的`testapp`表示镜像创建成功。

5. 运行当前 `image` (测试是否能成功)

```js
docker run -p 3000:80 -d --name gentle-vue gentle-vue   // vue
docker run -it -p 8001:8001 testapp    // react
// -p ：配置端口映射，格式是外部访问端口：容器内端口
// -d ：后台运行
// --name : 给容器取名
// 最后有 2 个 gentle-vue,前面一个是给容器取的名字，后面一个是使用的镜像的名字
```

软件`docker`中也会有对应的`images`镜像了

- 修改 `tag` 并 `push` 到远程库(不是必须的)

```js
docker tag hello-app `remote-name`/hello-app
docker push `remote-name`/hello-app:`tag`
```
