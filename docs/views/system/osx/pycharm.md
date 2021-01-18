# Pycharm基本配置

## Pycharm新建项目
<img :src="$withBase('/imgs/pycharm/pycharm.png')" alt="foo">
<img :src="$withBase('/imgs/pycharm/pycharm1.png')" alt="foo">

## PyCharm删除日志
```sh
cd ~/Library/PreferenceS
rm -rf PyCharm2019.3

cd ~/Library/Logs
rm -rf PyCharm2019.3

cd ~/Library/Application\ Support/
rm -rf PyCharm2019.3

cd ~/Library/Caches
rm -rf PyCharm2019.3
```
## PyCharm 2020.3.2激活
[激活程序下载](https://github.com/book-s/python/blob/master/docs/Jetbrains2020.3%E5%8F%8A%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E6%BF%80%E6%B4%BB%E8%A1%A5%E4%B8%81_520xiazai.zip)

## PyCharm2019.3.3激活
::: tip 激活
2019.12.02 jetbrains公司发布了Python的最强编辑器PyCharm2019.3版本。本次大版本主要对MongoDB、Python3.8功能做了一些增加。

## 注意

1. PyCharm一定要是在官网下载：https://www.jetbrains.com/pycharm/download/
2. 本教程适用于PyCharm所有版本
3. 本教程适用于jetbrains全系列产品（Pycharm）
4. 不需要修改hosts文件，如果修改请移除jetbrains相关的项目
5. 配置文件修改已经不在bin目录下直接修改，而是通过pycharm修改
:::

### 教程
::: tip 激活
1. [补丁下载](https://pan.baidu.com/s/1RJ7oyNqyLC_a88yl8CK_gw)密码:epua
2. 添加破解补丁到PyCharm指定目录
打开应用目录进入/Applications/PyCharm.app/Contents/bin/目录，把破解补丁jetbrains-agent.jar放入bin目录内
3. 修改配置文件
进入到项目界面后，点击Pycharm最上面的菜单栏中的 “Help” -> “Edit Custom VM Options

<img :src="$withBase('/imgs/pycharm/pycharm2.webp')" alt="foo">

4. 编辑破解补丁目录
在打开的vmoptions编辑窗口末行添加：`-javaagent:/Applications/PyCharm.app/Contents/bin/jetbrains-agent.jar`请仔细检查补丁路径是否正确，如果错误则会出现pycharm打不开的情况。

<img :src="$withBase('/imgs/pycharm/pycharm3.webp')" alt="foo">
:::
## PyCharm配置数据库
::: danger Pymysql安装
 必须在项目内安装`pymysql`python插件才可以显示数据库
:::