# Redis
## Redis安装
打开终端，输入:`sudo apt-get updata`更新数据
```sh
sudo apt-get updata
输入root用户密码

设置数据库编码为utf8
alter database mydb character set utf8;

查看数据库编码
show create database 数据库名称 \G
```
等待更新完毕

## 开始安装Redis
```sh
sudo apt-get install redis-server
提示用户是否安装Redis，是输入:y，否输入。
```

## 启动Redis
```sh
redis-server
```

## 查看Redis是否在运行
```sh
ps -ef | grep redis     --> 查看进程
netstat -an | grep 6379 --> redis的端口号是6379
redis-cli               --> 查看redis
```