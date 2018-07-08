//启用打包
fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('*.es6', {
    parser: fis.plugin('babel-5.x'),
    rExt: '.js' // .es6 最终修改其后缀为 .js
})

fis.set('project.ignore', [
    'fis-conf.js',
    'gulpfile.js',
    '.git/**',
    '*.bat',
    '*.sh',
    'node_modules/**'
]);