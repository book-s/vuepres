# MYSQL安装

## Ubuntu环境
打开终端
```sh
# 输入如下命令更新依赖包
sudo apt-get update

# 执行如下命令安装mysql数据库
sudo apt-get install mysql-server
# 提示用户是否安装mysql，是输入:y，否输入，等待安装完成。
```
## 启动Mysql
:::tip root权限启动
启动Mysql的时候必须有root权限启动，否则无法启动Mysql
```sh
sudo mysql -uroot -p + 回车直接登录mysql
```
:::

## 远程登录
:::tip 配置远程登陆
```sh
sudo vim/etc/mysql/mysql.conf.d/mysqld.cnf
修改前bind-address
bind-address =127.0.0.1
修改后bind-address
bind-address =0.0.0.0
```
:::

## 运行状态
:::tip 查看端口
3306端口默为mysql，若显示监听，表示安装成功。
```sh
netstat -tan | grep 3306
netstat -tulpen 
```
:::

:::warning 重启Mysql
 修改配置文件必须重启Mysql才生效
```sh
sudo service mysql restart
```
:::
