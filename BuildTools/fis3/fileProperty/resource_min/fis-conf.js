var pageName = "m2017anchor"; // 当前项目的名称,用来命名当前项目专用的JS和CSS
var static_path = "static"; // 静态资源的相对路径,默认为static
var html_path = "html"; // HTML文件的相对路径,默认为html
var cdn_url = 'https://assets.xrkcdn.com/frontend-m/bxr_events/' + pageName; // CDN的地址
var cdn_type = 'less,png,js,jpg,css,svg,gif' // 需要放在CDN里面的文件的类型,用逗号相隔

//启用打包
fis.match('::package', {
    postpackager: fis.plugin('loader')  // 打包后处理-加载loader插件
});


//启用less编译
fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css',
    optimizer: fis.plugin('clean-css')
});

//启用less编译 --- 感觉重复了(由media的覆盖规则可知 --- 可以用fis3 inspect cdn来对比.)
// fis.media('cdn').match('*.less', {
//     parser: fis.plugin('less'),
//     rExt: '.css',
//     optimizer: fis.plugin('clean-css')
// });

// 压缩css文件 
// fis.media('cdn').match('*.css', {
//     useSprite: true,   --- 这里多余.后面有专门配置使用雪碧图的语句.
//     optimizer: fis.plugin('clean-css')  --- 如果项目中没有单独的css文件,这里就鸡肋了.
// });


//加载雪碧图插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
// 生成雪碧图
fis.match('*.{less,css}', {
    release: '/' + static_path + '/$0',
    useSprite: true
});



//开始合并、打包各个模块
fis.match('/module/**.{less,css}', {
    packTo: '/css/' + pageName + '.css'
});
fis.match('/module/**.js', {
    packTo: '/js/' + pageName + '.js'
});



//转换为png8格式,文件大小会减少很多,但是会有一定程度的颜色、alpha丢失,不用时就注释掉.
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor', { type: "pngquant" })
});



//设置发布路径
fis.match('*', {
    release: '/' + static_path + '/$0'
});
fis.match('/*.html', {
    release: '/' + html_path + '/$0'
});



//运行 fis3 release cdn即可打上戳并且发布CDN地址
fis.media('cdn').match('*.{' + cdn_type + '}', {
    domain: cdn_url,
    useHash: true, //设置为true则开启md5戳,不想打就设置为false,默认所有放在cdn中的文件都打上MD5戳；
    release: '/' + static_path + '/cdn/$0'
});


// 压缩js文件
fis.media('cdn').match('*.js', {
    optimizer: fis.plugin('uglify-js')
});



//找个地方放一下insert的html...
fis.match('htmlInsert/*.html', {
    release: '/' + static_path + '/module/$0'
});

//找个地方放一下insert的html...
fis.media('cdn').match('htmlInsert/*.html', {
    release: '/' + static_path + '/cdn/module/$0'
});



//这里是一些不需要发布的文件列表,以下为默认值,需要时可以解封然后添加需要屏蔽的文件夹/文件.注：module文件夹不能禁掉
fis.set('project.ignore', [
    'fis-conf.js',
    'gulpfile.js',
    '.git/**',
    '*.bat',
    '*.sh',
    'node_modules/**'
]);