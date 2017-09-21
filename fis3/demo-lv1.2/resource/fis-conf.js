fis.match('*', {
    useHash: false
});


// 基于页面的打包方式：allInOne: true
// 给 loader 插件配置 allInOne 属性,即可对散列的引用链接进行合并(页面内引用到的同类型资源),
// 而不需要进行配置 packTo 指定合并包名.
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

// 注意,这个插件只针对纯前端的页面进行比较粗暴的合并,如果使用了"后端模板",一般都需要从整站出发配置合并.

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.set('project.ignore', [
    'fis-conf.js',
    '.git/**',
    '*.bat',
    '*.sh'
]);