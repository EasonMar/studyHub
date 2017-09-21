fis.match('*', {
    useHash: false
});

fis.match('::package', {
    postpackager: fis.plugin('loader')
});

// 如果没有对less进行预处理,less是无法放进aio.css里的
fis.match('*.{css,less}', {
    packTo: '/static/aio.css'
});


fis.set('project.ignore', [
    'fis-conf.js',
    '.git/**',
    '*.bat',
    '*.sh'
]);