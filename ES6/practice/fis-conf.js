//启用打包
fis.match('::package', {
    postpackager: fis.plugin('loader')
});

// 启用es6编译
fis.match('*.es6', {
    parser: fis.plugin('babel-5.x'),
    rExt: '.js' // .es6 最终修改其后缀为 .js
});

//设置发布路径
fis.match('*', {
    release: '/$0'
});
fis.match('/*.html', {
    release: false
});

//这里是一些不需要发布的文件列表，以下为默认值，需要时可以解封然后添加需要屏蔽的文件夹/文件。注：module文件夹不能禁掉
fis.set('project.ignore', [
    'fis-conf.js',
    'gulpfile.js',
    '.git/**',
    '*.bat',
    '*.sh',
    'node_modules/**'
]);