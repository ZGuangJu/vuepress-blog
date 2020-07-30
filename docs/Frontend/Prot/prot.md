 # 接口

 ### Axios 请求方法  请求方式是后端定义的

|方式   |  作用     |              特点  |其他 |
|--     |--        |--                 |---   |
|get    |  获取数据 |                    |两个参数|
|post   |  提交数据 |（用于新建）         |三个参数|
|put    |  更新数据  |（所有数据推送到后端）|三个参数|
|patch  | 更新数据  |（只推送修改的数据）  |三个参数|
|delete |  删除数据  |                    |两个参数|

##

 - 每个请求中console.log()，是为了调用一下，不调用会报错



## GET

###   get(别名)

#### 请求路径是 http://localhost:8081/data.json?id=12

```js

    axios.get('/data.json', {
      // 传参
      params: {
        id: 12
      }
    }).then((res) => {
      console.log(res);
    })

```
 ### get（其他方式)

```js
axios({
      //请求方式
      method: 'get',
      //路径
      url: '/data.json',
      //参数
      params: {
        id: 12
      }
    }).then((res) => {
      console.log(res);
    })
```

## POST

### post（别名）

#### 1、 form-data 表单提交（图片上传，文件上传）

```js
    // 创建一个变量
    let data = {
      id: 12
    }
    let formData = new FormData()
    for (let key in data) {
      formData.append(key, data[key])
    }
    // axios发送请求
    axios.post('/post', formData).then(res => {
      console.log(res);
    })
```
#### 2、 applicition/josn

```js
    axios.post('/post', data).then(res => {
      console.log(res);
    }),
```
### delete（其他方式)

```js
axios({
        method: 'post',
        url: "/post",
        data: data
      }).then(res => {
        console.log(res);
      })
```

## PUT

```JS

    // put
    axios.put('/put', data).then(res => {
      console.log(res);
    })

```

## PATCH

```JS
    // patch
    axios.patch('/patch', data).then(res => {
      console.log(res);
    })
```

##   DELETE

### post（别名）

#### 1、参数在请求体上用data

```JS
    axios.delete('/delete', {
      // 参数在请求体上用data
      data: {
        id: 12
      }
    }).then(res => {
      console.log(res);
    })
```
#### 2、参数在url上用params

```js
 axios.delete('/delete', {
      // 参数在url上用params
      params: {
        id: 12
      }
    }).then(res => {
      console.log(res);
    })
```
###  delete（其他方式)
```js
axios({
      method: "delete",
      url: "/delete",
      // 参数在请求体上用data
      data: {
        id: 12
      }
    }).then(res => {
      console.log(res);
    })
```

```js
axios({
      method: "delete",
      url: "/delete",
    //   参数在url上用params
        params:{
            id:12
        },
    }).then(res => {
      console.log(res);
    })
```