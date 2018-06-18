const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    res.end('Hello World');
    // res.en('Hello World'); // 模拟错误
});

// 为了便于组织（更高级的框架），您可能会像定义常规中间件一样，定义多个错误处理中间件。
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
// 一般用不到这么多，1个就可以了


// +++++++++++++++++ 自定义中间件 +++++++++++++++++

// logErrors 将请求和错误信息写入标准错误输出、日志或类似服务：
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

// clientErrorHandler 的定义如下（注意这里将错误直接传给了 next）：
function clientErrorHandler(err, req, res, next) {
    // 如果是ajax，则进行处理
    if (req.xhr) {
        // 把状态设置为500
        res.status(500).send({ error: 'Something blew up!' });
        // 如果不是ajax请求，把处理交给下一个中间件
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(500); // 把状态设置为500
    // res.end(err.stack);
    res.end('ohch! system is crach!');
}

app.listen(8081, function () {
    console.info("接口已启动")
});