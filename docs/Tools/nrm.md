# Nrm

:::tip 介绍
使用 nrm 管理 npm 的镜像源，不用每次输入大段的代码来设置源了！
:::

## 安装和使用

1. 安装

```
npm install nrm -g
```

2. 查看 npm 仓库列表

```
nrm ls
```

结果如下

```js
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

3. npm 仓库测速(需要等待 2-3 分钟)

```
nrm test
```

结果如下

> ```
>   npm ---- 1505ms
>   cnpm --- 474ms
> * taobao - 745ms
>   nj ----- Fetch Error
>   npmMirror  22734ms
>   edunpm - Fetch Error
> ```

4. 选择 npm 仓库

```
 nrm use taobao  // 示例:比如源换成下载最快的是taobao镜像
```

注：最好不要用cnpm的源，会有不可预知的报错！
