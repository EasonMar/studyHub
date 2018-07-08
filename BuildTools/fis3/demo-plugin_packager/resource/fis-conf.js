fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.match('*.{less,css}', {
    packTo: '/static/aio.css'
});

fis.match('*.js', {
    packTo: '/static/aio.js'
});

// FIS3 默认内置了一个打包插件 fis3-packager-map(自动开启),它根据用户的配置信息对资源进行打包.
// 通过配置文件配置打包,并且合并时记录合并信息,在运行时根据这些打包信息吐给浏览器合适的资源.
// 至于怎么根据打包信息吐资源,后面再研究. ----->>  静态资源映射表的运用
// 有了依赖表,但如何把资源加载到页面上,需要额外的FIS 构建插件或者方案支持.
// 需要前后端静态资源管理框架来处理

fis.set('project.ignore', [
    'fis-conf.js',
    '.git/**',
    '*.bat',
    '*.sh'
]);