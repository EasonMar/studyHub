const express = require('express');
const bodyParser = require('body-parser'); // 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
const cookieParser = require('cookie-parser');
const app = express();

// 使用内置中间件设置静态资源，放置到根目录public文件内
app.use(express.static('public'));
// 所以引入静态资源把public当做根目录：/stylesheets/index.css、/scripts/index.js

// 使用cookie-parser中间件
app.use(cookieParser());

// 渲染html文件
app.get('/html/index', function (req, res) {
    // 引入cookieParser中间件之后,可以用req.cookies读取cookie
    console.log(req.cookies);
    res.sendFile(__dirname + "/views/index.html")
});

// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// 为什么bodyParser这个中间件没有用use来引入，而是这样使用呢？

// 处理表单提交
app.post('/form', urlencodedParser, function (req, res, next) {
    req.data = 123;
    next();
},function (req, res, next) {
    console.log(`通过中间件取到的值：${req.data}`);
    res.redirect(`https://www.baidu.com/s?wd=${req.body.keyword}&rsv_spt=1&rsv_iqid=0xb7f8f25e00041722&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100`)
})

app.listen(8081, function () {
    console.info("接口已启动")
});