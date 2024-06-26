const Koa = require('koa');
const app = new Koa();

/**
 * Koa中间件 --- 洋葱模型
 * Koa 的中间件通过一种更加传统（您也许会很熟悉）的方式进行级联，摒弃了以往 node 频繁的回调函数造成的复杂代码逻辑。 
 * 然而，使用异步函数，我们可以实现"真正" 的中间件。
 * 与之不同，当执行到 yield next 语句时，Koa 暂停了该中间件，继续执行下一个符合请求的中间件('downstrem')，然后控制权再逐级返回给上层中间件('upstream')。
 */

// // x-response-time

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
//     console.log(`ctx.set('X-Response-Time')`)
// });

// // logger

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// // response

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });




/**
 * Response Middleware
 * Middleware that decide to respond to a request and wish to bypass downstream middleware may simply omit next(). 
 * Typically this will be in routing middleware, but this can be performed by any. 
 * For example the following will respond with "two", however all three are executed, giving the downstream "three" middleware a chance to manipulate the response.
 */
// app.use(async function (ctx, next) {
//     console.log('>> one');
//     await next();
//     console.log('<< one');
// });

// app.use(async function (ctx, next) {
//     console.log('>> two');
//     ctx.body = 'two';
//     await next();
//     console.log('<< two');
// });

// app.use(async function (ctx, next) {
//     console.log('>> three');
//     await next();
//     console.log('<< three');
// });


/**
 * The following configuration omits next() in the second middleware, and will still respond with "two", 
 * however the third (and any other downstream middleware) will be ignored:
 */
app.use(async function (ctx, next) {
    console.log('>> one');
    next();
    console.log('<< one');
});

app.use(async function (ctx, next) {
    console.log('>> two');
    ctx.body = 'two';
    console.log('<< two');
});

app.use(async function (ctx, next) {
    console.log('>> three');
    next();
    console.log('<< three');
});

app.listen(3000);