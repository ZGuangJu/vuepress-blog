---
title: MySQL 远程连接
date: 2020-11-08
sidebar: 'auto'
categories:
 - 后端技术
tags:
 - MySQL
publish: true
# 打赏
showSponsor: true
---
## 开启服务端权限

1. 查看`user,password,host`信息

```js
select user,password,host from user;
```

```js

mysql> select user,password,host from user;
+---------+-------------------------------------------+-----------+
| user    | password                                  | host      |
+---------+-------------------------------------------+-----------+
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | localhost |
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | alcloud   |
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | 127.0.0.1 |
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | ::1       |
|         |                                           | localhost |
|         |                                           | alcloud   |
| typecho | *C911A7DEF6A2A3EC98E210F1DC05205522359D69 | localhost |
| typecho | *C911A7DEF6A2A3EC98E210F1DC05205522359D69 | 127.0.0.1 |
+---------+-------------------------------------------+-----------+
8 rows in set (0.00 sec)

```

\* 通过以上输出可以看出数据库默认只允许用户root在本地服务器（localhost）上登录，不允许其他主机远程连接。

2. 输入以下命令 将允许用户root使用密码(zguangju)在任何主机上连接该数据库，并赋予该用户所有权限。

```js
grant all privileges on *.* to root@"%" identified by "zguangju";
```

输出结果：

```js
Query OK, 0 rows affected (0.00 sec)
```

3. 配置好权限之后,刷新使之生效

```js
flush privileges;
```

输出结果：

```js
mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec)
```

4. 查看`root` 的 `host` 配置是否有`%`,如果有了就可以远程连接数据库了

```js
mysql> select user,password,host from user;
+---------+-------------------------------------------+-----------+
| user    | password                                  | host      |
+---------+-------------------------------------------+-----------+
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | localhost |
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | alcloud   |
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | 127.0.0.1 |
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | ::1       |
|         |                                           | localhost |
|         |                                           | alcloud   |
| typecho | *C911A7DEF6A2A3EC98E210F1DC05205522359D69 | localhost |
| typecho | *C911A7DEF6A2A3EC98E210F1DC05205522359D69 | 127.0.0.1 |
| root    | *3620754A963ECB3D7296097F9DA00C1FA5476B03 | %         |
+---------+-------------------------------------------+-----------+
9 rows in set (0.00 sec)
```

:::warning
如果是远程的云服务器，不要忘了开启端口！！！
:::

[参考](https://cloud.tencent.com/developer/article/1406541)
