# 常用命令

## 执行
::: warning 重要命令
* root密码设置
```sh
sudo passwd root
new password:输入新密码
Retype new password:再次输入新密码
Passwd:password updated successfully 密码更新成功
```
* ubuntu主机名修改
```sh
hostname 查看主机名称
sudo vi /etc/hostname
```
* ssh连接远程服务器
```sh
ssh user@ip+回车输入密码登录
```
* tree根据文件层级列出目录
```sh
tree -L 2
```

* 端口查看命令
```sh
sudo netstat -ntlp
sudo kill -9 PID进程号
```
:::

## 创建新用户与组和目录
::: tip  用户

* 创建用户组与目录
```sh
# 注意要在后面加-m，否则不会在home路径下创建该用户的文件夹
sudo useradd username -m

# 执行如下命令查看passwd文件中是否有刚才添加的用户名，如果有，则表示添加成功
cat /etc/passwd
```

* 新用户设置密码
```sh
# 执行如下命令弹出提示窗口中设置密码即可
sudo passwd username
```


* 查看新的用户
```sh
cat /etc/passwd | grep username
```

* 新用户增加sudo权限

在使用Linux系统过程中，通常情况下，我们都会使用普通用户进行日常操作，而root用户只有在权限分配及系统设置时才会使用，而root用户的密码也不可能公开。普通用户执行到系统程序时，需要临时提升权限，sudo就是我们常用的命令，仅需要输入当前用户密码，便可以完成权限的临时提升。在使用sudo命令的过程中，我们经常会遇到当前用户不在sudoers文件中的提示信息，解决方法如下

## 修改/etc/sudoers权限
```sh
# 执行如下命令 增加写权限
sudo chmod u+w /etc/sudoers
```

## 编辑/etc/sudoers
```sh
sudo vim /etc/sudoers
username ALL=(ALL:ALL) ALL
```
在root用户下面增加，username为新的用户，根据需要自sing修改

## 恢复原来/etc/sudoers权限
```sh
sudo chmod u-w /etc/sudoers
```

## 新用户远程登录无法显示路径
```sh
sudo vim /etc/passwd
username:x:1002:1002::/home/gitbook:/bin/sh
改为
gitbook:x:1002:1002::/home/gitbook:/bin/bash
```

## 组
* 组查看方法
```sh
groups
```
查看groups当前用户所在组

* 查看用户所在组
```sh
groups username
```
* 查看ID在所属组
```sh
id username
```

* 直接查看组文件 more /etc/group
```sh
more /etc/group
```

## 删除用户

```sh
# 加上-r可以删除/home/路径下的用户文件夹，否则不能
sudo userdel -r username
```
## 删除组
```sh
groupdel users
```
:::

## 静态IP设置
::: warning 修改IP
编辑`sudo vim /etc/netplan/50-cloud-init.yaml`文件

```sh
# 内容如下
network:
    ethernets:
        ens32:
            addresses:
            - 192.168.120.8/24
            dhcp4: false
            gateway4: 192.168.120.1
           nameservers:
                addresses:
                - 8.8.8.8
                search: []
    version: 2
```

<img :src="$withBase('/imgs/ubuntu/ubuntuip.png')" alt="foo">

重新加载配置
```sh
sudo netplan apply
```
**说明**
- ens33:网络接口名称
- dhcp4:接收IPV4接口的dhcp属性
- dhcp6:接收IPV6接口的dhcp属性
- addresses:接口的静态地址序列
- gateway4:默认网关的IPV4地址
- Nameservers:DNS服务器地址
:::

## ubuntu 20.04(focal)更新源
::: tip 换源
* 阿里源

编辑`sudo vim /etc/apt/sources.list`

```sh
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```

* 清华源
```sh
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ groovy main universe restricted multiverse
deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ groovy main universe restricted multiverse #Added by software-properties
deb http://security.ubuntu.com/ubuntu/ groovy-security main universe restricted multiverse
deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ groovy-security main universe restricted multiverse #Added by software-properties
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ groovy-updates main universe restricted multiverse
deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ groovy-updates main universe restricted multiverse #Added by software-properties
```

* 更新源
```sh
sudo apt-get update
```

* 更新软件
```sh
sudo apt-get dist-upgrade
sudo apt-get upgrade
```
:::

## Ubuntu NPM安装
```sh
sudo atp-get install npm
```