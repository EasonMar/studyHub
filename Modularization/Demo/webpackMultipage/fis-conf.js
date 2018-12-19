// jello --- 为啥jello是在这里设置的？ --- 自动构建jello项目结构需要用到jello
fis.require('jello')(fis);
fis.set('charset', 'utf-8');

// 先禁止所有文件的发布
fis.match('*', {
    release: false
});

// 放置server.conf
fis.match('/server.conf', {
    release: '/WEB-INF/$0'
});

// 放置本地mock数据
fis.match('/test/**.json', {
    release: '/$0'
});

// 这里是一些不需要发布的文件列表，以下为默认值，需要时可以解封然后添加需要屏蔽的文件夹/文件。注：module文件夹不能禁掉
fis.set('project.ignore', [
    '*.js',
    '*.md',
    './*.json',
    '*.bat',
    'node_modules/**',
    '.gitignore',
    'dist/**'
]);
