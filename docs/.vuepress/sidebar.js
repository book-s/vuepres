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