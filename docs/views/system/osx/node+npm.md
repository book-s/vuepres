# Node+NPM

## Node
::: tip Node
下载最新版本[Node](https://nodejs.org/dist/v14.15.4/node-v14.15.4.pkg)
安装Node完成后自动安装好NPM

NPM配置
```sh
# 查看源地址命令
npm config get registry

# 临时使用淘宝源
npm --registry https://registry.npm.taobao.org install node-red-contrib-composer@latest

# 全局配置切换到淘宝源
npm config set registry https://registry.npm.taobao.org

# npm清空缓存
npm cache clean -f

# 自动全局更新到最新版本
sudo npm install npm@latest -g
```
cnpm全局安装
```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```