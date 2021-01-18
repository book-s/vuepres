# SublimeText3

## Sublimetext3安装
[官方下载Sublimextext3 for Mac](https://download.sublimetext.com/Sublime%20Text%20Build%203211.dmg)
::: tip 测试环境
* mac 10.12.6 版本
* Sublime Text 3(3211)版本

## 激活方法
```sh
# hosts文件修改
sudo vim /etc/hosts

# 追加一下内容
 127.0.0.1 www.sublimetext.com
 127.0.0.1 sublimetext.com
 127.0.0.1 sublimehq.com
 127.0.0.1 license.sublimehq.com
 127.0.0.1 45.55.255.55
 127.0.0.1 45.55.41.223
 0.0.0.0 license.sublimehq.com
 0.0.0.0 45.55.255.55
 0.0.0.0 45.55.41.223
```
 保存关闭即可。

## 激活注册
 打开SublimeText3 ==> Help ==> Enter License打开填写如下key
 ```sh
 ----- BEGIN LICENSE -----
 Member J2TeaM
 Single User License
 EA7E-1011316
 D7DA350E 1B8B0760 972F8B60 F3E64036
 B9B4E234 F356F38F 0AD1E3B7 0E9C5FAD
 FA0A2ABE 25F65BD8 D51458E5 3923CE80
 87428428 79079A01 AA69F319 A1AF29A4
 A684C2DC 0B1583D4 19CBD290 217618CD
 5653E0A0 BACE3948 BB2EE45E 422D2C87
 DD9AF44B 99C49590 D2DBDEE1 75860FD2
 8C8BB2AD B2ECE5A4 EFC08AF2 25A9B864
 ------ END LICENSE ------
 ```
 注册成功
:::

## Package Control安装
::: warning 没有VPN无法安装
 安装package control组件，然后直接在线安装按```control+` ```（此符号为tab按键上面的按键) 调出console)输入如下代码
 ```sh
 import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
 ```
 回车等待下载完成即可。

* Package Control离线安装 

* Package Control安装插件的方法
::: details 插件安装说明
 - 按下Commadn+Shift+P调出命令面板
 - 输入install 调出 Install Package 选项并回车，然后在列表中选中要安装的插件。
:::

## 自动保存
::: tip Sublime自动保存
 **Sublime Text ==> Preferences ==> settings**

<img :src="$withBase('/imgs/sublime_auto_save.png')" alt="foo">

 现在分两边了,左边文件是默认配置，右边文件是用户自定义配置，左边是只读的不能编辑,在左边`ctrl + f` ,然后在下面输入框里输入`save_on_focus_lost`，在右边文件中设置为true。保存文件即可。
 
```json
{
   "color_scheme": "Monokai.sublime-color-scheme",
   "font_size": 14,
   "ignored_packages":
   [
       "Vintage"
   ],
   "save_on_focus_lost": true
}
```
<img :src="$withBase('/imgs/sublime_auto_save1.png')" alt="foo">
:::

## SublimeText3源更新
::: danger 更换源
 **SublimeText ==>Preferences==>PackageSettings ==>PackageControl==>Settings-User**

 <img :src="$withBase('/imgs/sublime.png')" alt="foo">

```sh
# 跟换为如下更新源代码
{
   "bootstrapped": true,
   "channels":
   [
       "https://raw.githubusercontent.com/HBLong/channel_v3_daily/master/channel_v3.json",
        "https://raw.githubusercontent.com/wilon/sublime/master/download/channel_v3.json"
   ],
   "in_process_packages":
   [
   ],
   "installed_packages":
   [
       "1Self",
       "Package Control",
       "TrailingSpaces"
   ]
}
```
:::

## SFTP同步
::: tip SFTP
* SFTP插件可以同步文件到远程服务器
Package Control 安装 `sftp`
<img :src="$withBase('/imgs/sftp.png')" alt="foo">

* SFTP激活如下图
<img :src="$withBase('/imgs/sftp1.jpg')" alt="foo">

激活码
```sh
{
    "email": "xiaosong@xiaosong.me",
    "product_key": "d419f6-de89e9-0aae59-2acea1-07f92a"
}
```
:::

## 文件图标
::: warning 图标
Package Control 安装 `A File Icon`
<img :src="$withBase('/imgs/afileicon.png')" alt="foo">
:::


##  TrailingSpaces
::: tip 高亮代码
 - 高亮显示空格和tab键
 - 一键去除多余空格和Tab建
通过Package Control在线安装

 配置快捷键
 **Sublime Text ==> Preferences ==> Key Bindings**

 <img :src="$withBase('/imgs/sublime2.png')" alt="foo">

```sh
#  配置如下代码
[
    {
    "keys":["ctrl+alt+r"],
    "command": "delete_trailing_spaces"
    }
]
```
:::

## command+b 执行python程序
::: tip
打开 Tool ==> Build system ==> new Build System 如下图

<img :src="$withBase('/imgs/sublime_python.png')" alt="foo">

 配置如下代码既可以实现command+b运行python程序

```sh
# 保存名字为python3.sublime-build
{
   "cmd": ["/usr/local/bin/python3", "-u", "$file"],
}
```

配置好以上代码设置执行程序python3如下图设置

<img :src="$withBase('/imgs/sublime_python2.png')" alt="foo">
:::