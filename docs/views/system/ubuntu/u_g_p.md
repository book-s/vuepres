# Ubuntu+Git+PyCharm
## 服务器安装Git
```sh
sudo apt-get install git
```
## 服务器配置

服务器端Git用户设置
```sh
sudo useradd git 创建用户
passwd git 为git用户设置密码

vim /etc/passwd 阻止git用户组的ssh登录
git:x:1001:1001::/home/git:/bin/sh 未改前
git:x:1001:1001::/home/git:/usr/bin/git-shell 修改后
```

配置git用户名和邮箱，与Git交互都会使用该信息
```linux
git config --global user.name “name"       设置用户名
git config --global user.email "email@gmail.com”  设置邮箱
```

新建git一个空仓库
```sh
mkdir /home/git 创建一个存储仓库目录
cd /home/git  进入仓库目录

git init --bare object.git 建立一个空项目仓库
Initialized empty Git repository in /home/git/object.git 提示空项目仓库建立成功
sudo chown -R git:git object.git （将owner改为git）
```

## 本地安装Git
```sh
sudo apt-get install git

配置git用户名和邮箱，与Git交互都会使用该信息

git config --global user.name “name"       设置用户名
git config --global user.email "email@gmail.com”  设置邮箱

查
git config --global --list
git config --global user.name
增
git config  --global --add user.name jianan
删
git config  --global --unset user.name
改
git config --global user.name jianan
```
## 本地克隆Git库
进入到指定目录克隆服务器库
```sh
git clone git@192.168.120.227:/home/git/object.git
```

<img :src="$withBase('/imgs/ubuntu/pycharm5.png')" alt="foo">

## PyCharm 下载和推送到服务器

<img :src="$withBase('/imgs/ubuntu/pycharm4.png')" alt="foo">