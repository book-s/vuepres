
# VuePress指南

## 基础配置

```sh
# 创建目项并进入项目
mkdir vuepress-blog
cd vuepress-blog

# 初始化安装
npm init -y 

# VuePress安装为本地依赖 不建议全局安装
npm install -g vuepress

# 创建docs目录存放项目文档与配置信息
mkdir docs
cd docs

# 创建主页文档名字为 README.md 主页文件存放在docs目录下
touch README.md

# README.md插入如下内容
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
::: tip package.json
初始化后会生成一个`package.json`文件,内容如下
```sh
{
  "name": "testvuepress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vuepress": "^1.8.0"
  }
}
```
这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。
```sh
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
* 最后配置package.json
```sh
{
  "name": "testvuepress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vuepress": "^1.8.0"
  }
}
```
:::

## 核心配置
::: tip 
* 在`docs`目录下创建`.vuepress`目录
```sh
# 主要存放配置
cd docs
mkdir .vuepress

# 新建总配置文件`config.js`
# config是整个项目的核心配置文件，所有菜单、栏目相关的配置均配置在该模块中
cd .vuepress
touch config.js
```

* 在`config.js`中加入内容
```sh
module.exports = {
    title: '前后端开发',
    description: 'leva',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [{
            text: 'VuePress指南', link: '/guide/'
        }],
        sidebar: {'/guide/':[
            {
                  title:'新手指南',
                  collapsable: true,
                  children:[
                    '/guide/notes/one',
                  ]
                },
                {
                  title:'高级配置',
                  collapsable: true,
                  children:[
                    '/guide/notes/two',
                  ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
```
:::
* 启动VuePress
```sh
vuepress dev docs 或 npm run docs:dev
```

## 导航栏配置
* nav配置

nav是顶部栏目导航
 <img :src="$withBase('/nav.png')" alt="foo">

接下来我们在当前目录创建一个`nav.js`
```sh
touch nav.js
# 因为config.js中引入了nav，所以我们要提供一个来存放栏目
```
* 编辑`nav.js`
加入如下内容
```sh
module.exports = [
    {   text: 'VuePress', link: '/views/vuepress/' },

// <------- 前端开发 ------>
    {   text: '前端开发', 
    items: [
        {   text: 'HTML基础',
            items:[
                {text: 'HTML', link: '/views/front/html/'}, 
                {text: 'CSS', link: '/views/front/css/'},
                {text: 'JavaScript', link: '/views/front/javascript/'},
                {text: 'jQuery', link: '/views/front/jquery/'},
                {text: 'ES6', link: '/views/front/es6/'},
            ]
        },
        {   text: '前端框架',
            items:[
                {text: 'Vue', link: '/views/front/vue/'}, 
                {text: 'Node', link: '/views/front/node/'},

            ]
        }
        
    ]
    },
// <------- python ------->
    {   text: '后端开发', 
        items: [
            {   text: 'Python',
                items:[
                    {text: '基础', link: '/views/basics/basis/'}, 
                    {text: '中级', link: '/views/basics/intermediate/'}, 
                    {text: '高级', link: '/views/basics/senior/'},
                ]
            },
            {   text: 'Python框架',
                items:[
                    {text: 'Tornado', link: '/views/frame/tornado/'},
                    {text: 'Django', link: '/views/frame/django/'},
                    {text: 'Flask', link: '/views/frame/flask/'},
                ]
            }
            
        ]
    },

// <------- 系统 ------->
    {   text: '系统',
        items: [
            {text: 'MacOSX', link: '/views/system/osx/'},
            {text: 'Ubuntu', link: '/views/system/ubuntu/'},
            {text: 'CentOS', link: '/views/system/centos/'},
        ]
    },

// <------- 数据库 ------->
    {   text: '数据库', 
        items: [
            {   text: 'M+R+M',
                items:[
                    {text: 'MYSQL', link: '/views/database/mysql/'},
                    {text: 'MONGO', link: '/views/database/mongo/'},
                    {text: 'REDIS', link: '/views/database/redis/'},
                ]
            },
            {   text: 'O R M',
                items:[
                    {text: 'SQLAlchemy', link: '/views/database/sqlalchemy/'},
                    {text: 'PeeWee', link: '/views/database/peewee/'},
                ]
            }
            
        ]
    },

// <------- 工具箱 ------->
    {   text: '工具箱', 
        items: [
            {   text: '在线编辑',
                items:[
                    {text: '图片处理', link: 'https://tinypng.com/'},
                ]
            },
            {   text: '在线PS',
                items:[
                    {text: '图片压缩', link: 'https://www.tuyitu.com/photoshop/'},
                    {text: '图片处理', link: 'https://www.uupoop.com/'},
                    {text: '在线logo编辑', link: 'https://www.logomaker.com.cn/'},
                ]
            },
            {   text: '在线服务',
                items:[
                    {text: '阿里云', link: 'https://www.aliyun.com/'},
                    {text: '腾讯云', link: 'https://cloud.tencent.com/'},
                ]
            },
            {   text: '博客指南',
                items: [
                    {text: '掘金', link: 'https://juejin.im/'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/'}
                ]
            }
        ]
    },
]
```

* nav配置注意点
  * `nav`可以支持本地目录和链接
  * `nav`由text、link、items组成
    * text:栏目名（项目）
    * link：链接，可以指向本地目录和http地址
    * items：可以包含多个text和link，可以继续反复套用组成复杂的菜单
  * `nav`配置时需要与本地的目录对应
    * 如上述我配置了懵逼指南和面试宝典栏目
    * 前端开发：对应的事views/front/html，则我需要再docs目录下创建一个views/front/html目录
    * 后端开发：对应的是/baodian/，则我需要在docs目录下创建一个baodian目录
    * /views/basics/basis/子目录：上述配置中/views/basics/basis/下有2个子目录，则我需要在下面新建3个子目录与之对应
  * 对应目录截图
  <img :src="$withBase('/nav_vue.png')" alt="foo">


## 侧边栏配置

* `sidebar`

`sidebar`是左侧标题导航，可以指定配置也可以设置为`auto`
```sh
sidebar:'auto
```
  <img :src="$withBase('/sidebar.png')" alt="foo">

* `sidebar`配置语法

```sh
module.exports = {
//<--------- VuePress_start --------->
    '/views/vuepress/': require('../views/vuepress/sidebar'),
//<--------- VuePress_end --------->

//<--------- 前端_start --------->
    '/views/front/html/': require('../views/front/html/sidebar'),
    '/views/front/css/': require('../views/front/css/sidebar'),
    '/views/front/javascript/': require('../views/front/javascript/sidebar'),
    '/views/front/jquery/': require('../views/front/jquery/sidebar'),
    '/views/front/es6/': require('../views/front/es6/sidebar'),


    '/views/front/vue/': require('../views/front/vue/sidebar'),
    '/views/front/node/': require('../views/front/node/sidebar'),

//<--------- 前端_end --------->

//<--------- Vue_start --------->

//<--------- Python_start --------->
    '/views/basics/basis/': require('../views/basics/basis/sidebar'),
    '/views/basics/intermediate/': require('../views/basics/intermediate/sidebar'),
    '/views/basics/senior/': require('../views/basics/senior/sidebar'),

    '/views/frame/tornado/': require('../views/frame/tornado/sidebar'),
    '/views/frame/django/': require('../views/frame/django/sidebar'),
    '/views/frame/flask/': require('../views/frame/flask/sidebar'),
//<--------- Python_end --------->

//<--------- 系统_start --------->
    '/views/system/osx/': require('../views/system/osx/sidebar'),
    '/views/system/ubuntu/': require('../views/system/ubuntu/sidebar'),
    '/views/system/centos/': require('../views/system/centos/sidebar'),
//<--------- 系统_end --------->

//<--------- 数据库_start --------->
    '/views/database/mysql/': require('../views/database/mysql/sidebar'),
    '/views/database/mongo/': require('../views/database/mongo/sidebar'),
    '/views/database/redis/': require('../views/database/redis/sidebar'),

    '/views/database/sqlalchemy/': require('../views/database/sqlalchemy/sidebar'),
    '/views/database/peewee/': require('../views/database/peewee/sidebar'),
//<--------- 数据库_end --------->

}
```

* `/views/vuepress/`：该key是与上述的nav中link对应，在请求nav时会自动切换当前的侧边目录，所以需要该配置
* 后续的require表示引入一个指定目录的`sidebar.js`文件，其本身可以直接写在这里，但为了方便维护我们需要将每个模块的侧边栏js抽取出来，单独存放在内容模块的目录下

这里我贴出目录：/docs/views/vuepress/sidebar.js文件内容

```sh
module.exports = [
    {  
        title: 'VuePress搭建指南',
        collapsable: false,
        children: [ 
            '/views/vuepress/one', 
        ],
    }
]
```
* `title`:表示侧边栏大标题
* `collapsable`：是否可收缩
* `children`：具体的`.md`文件，这里无需指定后缀
预览效果如下

  <img :src="$withBase('/sidebar_nav.png')" alt="foo">

## 静态资源配置
静态资源是最重要的一部分，比如图片，比如`js`，比如`css`

vuepress程序默认的图片目录是`/docs/.vuepress/public`
```sh
cd .vuepress
mkdir public
```

* 图片
比如我们要指定首页显示图片，那么需要将首页内容中的图片路径更改成如下
```sh
# /docs/.vuepress/public目录下有一张 logo.jpg的图片
heroImage: /logo.jp
```
即`/logo.jpg`就是指`/docs/.vuepress/public/logo.jpg`

* css
css与图片路径一样，比如js中要加载我们指定的css文件，那么可以像如下这样

在public目录下新建一个css目录
```sh
cd public
mkdir css
touch style.css
```
编辑css内容，加入如下css做测试（你也可以自定义其他内容）
```sh
a{color:#333;text-decoration:none; }
```

* 修改`.vuepress`下的`config.js`
```sh
# 修改head属性如下
head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}],
    ["link", { rel: "stylesheet", href: "/css/style.css" }]
]
```
  * 重启预览效果

* js

如果我们要自定义一些js动态效果，我们可以也可以像css操作那样
  * 在public目录下新建一个`js`目录

```sh
cd public
mkdir js
touch main.js
```

在js中加入一些测试内容

```sh
function init(){
    console.log("终于可以为所欲为了");
}
//因为界面加载原因，我们延迟500ms再调用init
setTimeout("init()",500)
```

* 修改`.vuepress`下的`config.js`
```sh
# 修理head属性如下
head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],
    ["script", { charset: "utf-8", src: "/js/main.js" }],//新加入
]
```
* 重启预览效果

## 部署

### git
安装git
```sh
# 查看git版本号
git -version

# 配置git信息
git config --global user.name leva
git config --global user.email book_s@126.com

# 创建共钥匙
ssh-keygen -t rsa -C 'book)s@126.com'

# cat进入.ssh查看id_rsa.pub密钥
cat .ssh/id_rsa.pub
```
登录GitHub（默认你已经注册了GitHub账号），添加ssh key，点击Settings，如图

<img :src="$withBase('/git.png')" alt="foo">

点击New SSH key，如图

<img :src="$withBase('/git1.png')" alt="foo">

添加key，如图

<img :src="$withBase('/git2.png')" alt="foo">

关联本地git
```sh
ssh-add /Users/zhanglikai/.ssh/id_rsa (book_s@126.com)
```

链接验证
```sh
ssh -T git@github.com
```

提交本地项目到github

自动执行`deploy.sh`提交到github
```sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'first commit'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:yinian-R/vuepress-demo.git master:gh-pages
git push -f git@github.com:book-s/vuepres.git master:gh-pages

cd -
```
