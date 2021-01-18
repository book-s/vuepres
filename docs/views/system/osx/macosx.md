# Python安装环境
## 安装pip
::: tip 安装pip
Mac版[Python3.8.2下载](https://www.python.org/ftp/python/3.8.2/python-3.8.2-macosx10.9.pkg)安装点击下一步下一步完成即可。

请通过如下命令下载`get-pip.py`文件
```sh
# 执行以下命令下载pip
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

# 执行以下命令安装pip
sudo python get-pip.py

# 升级PIP
pip install -U pip3
```
* **安装virtualenv and virtualenvwrapper**
* **`which python3`查询程序安装位置**
* **查询`find / -name virtualenvwrapper.sh`位置**
```sh
pip3 install virtualenv
pip3 install virtualenvwrapper

# 创建虚拟环境文件目录
mkdir ~/.virtualenvs

# 编辑.bash_profile文件配置虚拟环境信息
export WORKON_HOME='~/.virtualenvs'
export VIRTUALENVWRAPPER_PYTHON='/Library/Frameworks/Python.framework/Versions/3.8/bin/python3'
source /Library/Frameworks/Python.framework/Versions/3.8/bin/virtualenvwrapper.sh

# 重新加载配置
source ~/.bash_profile

# 创建项目
进入.virtualenvs目录创建项目
python3 -m venv tor

# workon+项目名称 激活项目
workon tor

# 退出虚拟环境
deactivate
```
:::





