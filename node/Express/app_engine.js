const express = require('express');
const app = express();
const swig = require('swig');

// 设置模板引擎
app.set('view engine', 'html')
app.engine('html', swig.renderFile);

// 使用内置中间件设置静态资源，放置到根目录public文件内
app.use(express.static('public'));

// 渲染模板
app.get('/', function (req, res, next) {
    res.render('index_engine', {
        title: '测试首页',
        data:"swig"
    })
});

app.listen(8081, function () {
    console.info("接口已启动")
});