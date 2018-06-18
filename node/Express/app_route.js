const express = require('express');
const app = express();

app.get('/index/test', function (req, res, next) {
    console.log('我是第一级');
    next();
}, function (req, res, next) {
    console.log('我是第二级')
    next();
}, function (req, res, next) {
    console.log('我是/test路由的结尾');
    res.send('end');
});

// 使用回调函数组处理路由
let cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

let cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

app.get('/index/d', [cb0, cb1], function (req, res, next) {
    console.log('我是/d路由的最终处理程序');
    res.send('Hello From D!');
    // res.render(__dirname + '/views/index.html'); // html不是模板。。。
})

app.listen(8081, function () {
    console.info("接口已启动")
});