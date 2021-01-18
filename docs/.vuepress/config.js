module.exports = {
    title: '前后端开发',
    description: 'LEVA',
    base: '/vuepres/',
    head: [
        ['link', {rel: 'icon', href: '/bitbug_favicon.ico'}]
    ],

// <------- markdown_start ------->
    markdown: {
        lineNumbers: true
    },
// <------- markdown_start ------->


// <------- themeConfig_start ------->
    themeConfig: {
// <------- nav_start ------->
        nav: require('./nav.js'),
// <------- nav_end ------->

// <------- sidebar_start ------->
        sidebar: require('./sidebar.js')
// <------- sidebar_end ------->
    }
// <------- themeConfig_end ------->
}