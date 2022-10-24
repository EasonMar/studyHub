const express = require('express');
const bodyParser = require('body-parser'); // 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
const app = express();

// 使用内置中间件设置静态资源，放置到根目录public文件内
// 所以引入静态资源把public当做根目录：/stylesheets/index.css、/scripts/index.js
app.use(express.static('public'));

// 基础路由 :id为req.params
app.get('/:id', function (req, res) {
    console.info(req.query);
    console.info(req.params.id);
    res.send('Hello World');
});

// '/index/json' --- 返回json数据
app.get('/index/json', function (req, res) {
    res.json({
        code: 200,
        data: "success"
    })
});

// '/html/index' --- 渲染html文件
app.get('/html/index', function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
});




// app.use是全局使用中间件: app.use(bodyParser.urlencoded({ extended: false }))在这里也是可以的
/**
 * app.use(bodyParser.urlencoded({ extended: false }))
 * app.post('/form', function (req, res) {
 *   console.log(req.body.keyword);
 * })
 */
// app.post('/xxx', middleware, cb)是针对post请求的某个路径使用中间件

// 创建 application/x-www-form-urlencoded 编码解析 -----> 普通form表单默认的编码格式
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// 处理表单提交
app.post('/form', urlencodedParser, function (req, res) {
    console.log(req.body.keyword);
    res.redirect(`https://www.baidu.com/s?wd=${req.body.keyword}&rsv_spt=1&rsv_iqid=0xb7f8f25e00041722&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100`)
})

app.listen(8081, function () {
    console.info("接口已启动")
});