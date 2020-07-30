## 数据存储

### 全局数据

- 小程序中存储数据的地方

globalData 全局数据

wx.setStorageSync('logs', logs)

#### globalData 属于小程序全局的共享数据对象

- 写在app.js 全局文件中
使用 ：一般在pages页面中，调用getApp()，获取小程序实例对象，用该对象.globalData来使用
- 注意，这个global书存储在内存中，开发阶段页面刷新会丢失

### 本地数据存储

#### storage  微信小程序的本地存储

- 存数据用setStorageSync ：同步存储
- 存数据用setStorage ：异步存储
- 读取数据getStorageSync同步取值
- 读取数据getStorage：异步取值

