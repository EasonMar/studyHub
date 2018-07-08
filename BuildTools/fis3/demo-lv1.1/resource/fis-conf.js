fis.match('*', {
    useHash: false
});

// 究竟是package还是packager？？
// packager是旧语法,建议用新的::package写法！！
fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

// 对less进行预编译后,才能放入aio.css
fis.match('*.{less,css}', {
    packTo: '/static/aio.css'
});

// 如果上面写成这样(去掉less),则test.less还是不会放进aio.css里,fis是认源文件的！
// fis.match('*.css', {
//     packTo: '/static/aio.css'
// });

fis.match('*.js', {
    packTo: '/static/aio.js'
});


/* 这样配置打包的结果是：
一个页面最终只会引入一个 css、js：aio.js 和 aio.css. 
但两个页面的资源都被打包到同一个包里面了.*/


fis.set('project.ignore', [
    'fis-conf.js',
    '.git/**',
    '*.bat',
    '*.sh'
]);