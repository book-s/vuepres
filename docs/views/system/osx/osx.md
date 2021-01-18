# Mac常用命令
::: tip Mac命令行登录MySQL
* root身份登录本机启动Mysql`mysql server`
* 进入mysql命令行`mysql -u root -p`
* 登录远程mysql`mysql -u {username} -p{password} -h {remote server ip} -P {port} {DB name}`
* Mac Mysql的root用户密码的解决方法

关闭mysql服务:苹果->系统偏好设置->最下边点mysql在弹出页面中关闭mysql服务（点击stopmysql server）

进入终端输入
```sh
# 进入如下目录
cd /usr/local/mysql/bin/

# 切换管理员权限 
sudo su

# 执行以下命令来禁止mysql验证功能 
`./mysqld_safe –skip-grant-tables &`

# mysql会自动重启（偏好设置中mysql的状态会变成running）

# 执行如下命令
./mysql
FLUSH PRIVILEGES;
set password for ‘root’@’localhost’ = ‘新密码’;
```
:::