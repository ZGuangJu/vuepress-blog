---
title: MongoDB 安装(Centos 7)
date: 2020-11-08
sidebar: 'auto'
categories:
 - 后端技术
tags:
 - MongoDB
publish: true
---
## MongoDB 使用(Centos 7)

### 启动 MongoDB

1. 启动 `MongoDB` 服务

```js
sudo service mongod start  //开启 MongoDB
//或者
systemctl start mongod.service  // 开启 MongoDB
sudo chkconfig mongod on  // 加入开机启动
sudo service mongod restart // 重启 MongoDB
```

2. 关闭 `MongoDB`

```js
sudo service mongod stop
```

3. 查看端口是否开启

`MongoDB` 默认端口是 `27017`，使用命令查看是否开启端口

```js
netstat -natp | grep 27017
```

4. 检查数据库进程是否存在

```js
ps -aux | grep mongod
```

5. 验证服务是否开启

```js
mongo
db.version()
```

6. 卸载MongoDB

```js
sudo yum erase $(rpm -qa | grep mongodb-org)    // 卸载 MongoDB
sudo rm -r /var/log/mongodb  // 删除日志文件
sudo rm -r /var/lib/mongo    // 删除数据文件
```

### 配置远程连接 MongoDB

1. 修改配置文件 `mongodb.conf`

```js
vi /etc/mongod.conf
```

修改绑定 `ip`， 默认 `bindIp:127.0.0.1` 只允许本地连接，所以修改为 `bindIp:0.0.0.0`, 退出保存。

```js
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
```

2. 重启 `MongoDB` 服务

```js
sudo service mongod restart
```

3. 开放对外端口

在防火墙中放行指定的端口：

```js
systemctl status firewalld
// 查看防火墙状态
firewall-cmd --zone=public --add-port=27017/tcp --permanent
// mongodb默认端口号
firewall-cmd --reload
// 重新加载防火墙
firewall-cmd --zone=public --query-port=27017/tcp
// 查看端口号是否开放成功，输出yes开放成功，no则失败
```

4. 测试远程连接

```js
mongo 192.168.1.132:27017
db.version()
```

### 添加用户名和密码

1. 为 `admin` 数据库创建用户，设置用户名、密码和权限

```js
show dbs # 显示所有的数据库
use admin # 切换到 admin 数据库
db.createUser({user:'root',pwd:'999888',roles:['root']})
db.auth('root','999888')
# 其他常用命令
# db.changeUserPassword("test", "test")     # 修改密码
# db.updateUser("test",{roles:[ {role:"read",db:"testDB"} ]}) # 更新用户权限
# db.dropUser('test') # 删除用户
# db.createUser({user:'cjx',pwd:'999888',roles:['userAdminAnyDatabase']}) # 赋予用户所有数据库的userAdmin权限
```

2. 为其他数据库创建用户，设置用户名、密码和权限

```js
use test
db.createUser({ user:"cjx", pwd:"999888", roles:["readWrite", "dbAdmin"] })
db.auth('cjx','999888')
```

3. 修改 `mongodb.conf` 文件，启用身份验证

```js
vi /etc/mongod.conf
```

添加如下内容：

```js
security:
  authorization: enabled   # disable or enabled
```

4. 重启 `MongoDB` 服务

```js
sudo service mongod restart
```

5. 测试远程连接

```js
mongo 192.168.1.132:27017/database -u username -p password
```

\* 注意这里的`ip`地址不用`http://`,直接加`ip`.

用户权限角色说明:

| 规则                 | 说明                                                                               |
| :------------------- | :--------------------------------------------------------------------------------- |
| root                 | 只在admin数据库中可用。超级账号，超级权限                                          |
| Read                 | 允许用户读取指定数据库                                                             |
| readWrite            | 允许用户读写指定数据库                                                             |
| dbAdmin              | 允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile |
| userAdmin            | 允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户             |
| clusterAdmin         | 只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限                  |
| readAnyDatabase      | 只在admin数据库中可用，赋予用户所有数据库的读权限                                  |
| readWriteAnyDatabase | 只在admin数据库中可用，赋予用户所有数据库的读写权限                                |
| userAdminAnyDatabase | 只在admin数据库中可用，赋予用户所有数据库的userAdmin权限                           |
| dbAdminAnyDatabase   | 只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限                             |
