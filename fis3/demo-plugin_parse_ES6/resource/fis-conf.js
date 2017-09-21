//启用打包
fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('*.es6', {
    parser: fis.plugin('translate-es6', {
        presets: ['es2015']
    }),
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