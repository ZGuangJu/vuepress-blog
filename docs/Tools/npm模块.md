---
title: npm模块
date: 2019-06-02
sidebar: 'auto'
categories:
 - 工具
tags:
 - npm模块
publish: true
sticky: 3
# 打赏
showSponsor: true
---
## npm模块总结

### 1 husky

用途：可以很方便的在`package.json`配置`git hook` 脚本

- 常用配置(`package.json`):`vue-element-admin` 用的 `husky`

```js
 "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```

```js
 "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
```

### 2 runjs
