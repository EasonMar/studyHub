fis.match('/src/**.js', { // 需要对目标文件设置 isMod 属性，说明这些文件是模块化代码。
    isMod: true
});

// 区分fis-hook-cmd paths和seajs本身paths的作用...
fis.hook('cmd', {
    baseUrl: '.', // 默认为 . 即项目根目录。用来配置模块查找根目录
    paths: {
        jquery: './jquery.js'
    }
});

fis.set('project.ignore', [
    'fis-conf.js',
    '.git/**',
    '*.bat'
]);
