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