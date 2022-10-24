const express = require('express');
const bodyParser = require('body-parser'); // 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
const cookieParser = require('cookie-parser');
const app = express();

/**
 * Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, 
 * where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
 */


/**
 * This example shows a middleware function with no mount path. The function is executed every time the app receives a request.
 * 使用内置中间件设置静态资源，放置到根目录public文件内
 * 所以引入静态资源把public当做根目录：/stylesheets/index.css、/scripts/index.js
 */
app.use(express.static('public'));

// 全局使用 cookie-parser 中间件
app.use(cookieParser());


/**
 * This example shows a middleware function mounted on the /user/:id path. 
 * The function is executed for any type of HTTP request on the /user/:id path
 * 匿名函数 --- 自定义中间件
 */
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

/**
 * This example shows a route and its handler function (middleware system)
 * --- 这个路由响应实质上是利用中间件系统完成的...
 * The function handles GET requests to the /html/index path. 
 * 功能：渲染html文件
 */
app.get('/html/index', function (req, res) {
    // 引入cookieParser中间件之后,可以用req.cookies读取cookie
    console.log(req.cookies);
    res.sendFile(__dirname + "/views/index.html")
});

/**
 * 总的来说：app.use是全局使用中间件; app.post('/xxx', middleware, cb)是针对具体某个路径使用中间件
 */

// 创建 application/x-www-form-urlencoded 编码解析 -----> 普通form表单默认的编码格式
// bodyParser.urlencoded()返回的就是一个遵循Express中间件格式的函数: function urlencodedParser (req, res, next) {xxx}
let urlencodedParser = bodyParser.urlencoded({ extended: false });
/**
 * An example of loading a series of middleware functions at a mount point, with a mount path. 
 * It illustrates a middleware sub-stack(子堆栈) that handles all kinds of jobs to the /form path.
 * 第一个中间件是 urlencodedParser
 * 第二个中间件是自定义的function
 * 第三格中间件...末端处理...所以也不能说是'中间'件了...
 */
app.post('/form', urlencodedParser, function (req, res, next) {
    req.data = 123;
    next();
}, function (req, res, next) {
    console.log(`通过中间件取到的值：${req.data}`);
    res.redirect(`https://www.baidu.com/s?wd=${req.body.keyword}&rsv_spt=1&rsv_iqid=0xb7f8f25e00041722&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100`)
})

app.listen(8081, function () {
    console.info("接口已启动")
});

/**
 * ====================================================================================================
 * The order of middleware loading is important: middleware functions that are loaded first are also executed first.
 * If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, 
 * because the route handler of the root path terminates the request-response cycle.
 * 
 * app.use(myLogger)
 * app.get('/', function (req, res) {
 *   res.send('Hello World!')
 * })
 * 
 * 
 * ====================================================================================================
 * Starting with Express 5, middleware functions that return a Promise will call next(value) when they reject or throw an error. 
 * next will be called with either the rejected value or the thrown Error.
 * 
 * 
 * ====================================================================================================
 * async function validateCookies (req, res, next) {
 *   await cookieValidator(req.cookies)
 *   next()
 * }
 * 
 * Note how next() is called after await cookieValidator(req.cookies). 
 * This ensures that if cookieValidator resolves, the next middleware in the stack will get called. 
 * If you pass anything to the next() function (except the string 'route' or 'router'), 
 * Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.
 * 
 */ 