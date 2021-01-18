# Shift 一键切换原生输入法

## 安装 Karabiner-Elements

::: tip Karabiner-Elements 介绍
几年前刚用 Mac 的时候，因为之前用 Windows 的习惯，所以用的是搜狗输入法。后来随着 macOS 自带输入法的成熟，我开始使用 macOS 原生输入法。但是搜狗输入法的按 Shift 键切换中英文特别好用，反倒是原生输入法的中英切换时常发生故障，于是我干脆直接关闭了原生输入法的中英切换功能，将 CapsLock 键换成了 Hyper 键。

但是换了之后要按两个键才能切换输入法，这个问题一直困扰着我，直到我遇见了 Karabiner-Elements。Karabiner-Elements 是一个能将键盘键位自由映射到其他按键的应用，今天先介绍点它的简单用法。

首先到[这里](https://karabiner-elements.pqrs.org/)下载最新的 Karabiner-Elements。安装完成后的界面如下图

 <img :src="$withBase('/imgs/karabiner-elements/KE.png')" alt="foo">

先到第二栏 Function Keys 中将 f12 设置为 f12

<img :src="$withBase('/imgs/karabiner-elements/KE1.png')" alt="foo">

然后到第三栏 Complex Modifications，选择 Add rule -> Import more rules from the Internet(open a web browser), 在网站上找到我们需要的 rules: Tapping modifier-keys produces a f-key，最后将 Press left_shift alone produces F12 Enable，这样 Karabiner-Elements 中的设置就完成了。

<img :src="$withBase('/imgs/karabiner-elements/KE2.png')" alt="foo">

接着就去到设置里，将切换输入法的快捷键设置成 F12，这样就可以按左 Shift 键一键切换输入法了。

<img :src="$withBase('/imgs/karabiner-elements/KE3.png')" alt="foo">
:::