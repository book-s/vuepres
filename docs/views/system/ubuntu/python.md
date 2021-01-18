# Python3安装

## 测试Ubuntu版本
 - Ubuntu Desktop 19.04

## Ubuntu Pip3安装
```sh
sudo apt-get python3-pip
```
## Virtualenv安装
```sh
pip install Virtualenv
```
## Virtualenvwrapper安装
```sh
pip install Virtualenvwrapper
```

## 创建目录存放虚拟环境
```sh
mkdir $HOME/.virtualenvs
```

## 编辑~/.bahsrc文件
 - 查看python3目录`which python3`命令
 - 使用`sudo find / -name virtualenvwrapper.sh`查看路径
```sh
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV=~/.local/bin/virtualenv
source ~/.local/bin/virtualenvwrapper.sh
```
## 重新加载配置

```sh
source ~/.bashrc
```

## 创建虚拟环境
 mkvirtualenv -p (指定python版本号) 项目名称**
```sh
mkvirtualenv -p python3 tor
```

## 切换虚拟环境
```sh
workon tor
```

## 退出虚拟环境
```sh
deactivate
```

## 删除运行环境
```sh
rmvirtualenv tor
```

## 列出可用虚拟环境
```sh
workon 或 lsvirtualenv
```

## 列出当前环境安装包
```sh
lssitepackages
```