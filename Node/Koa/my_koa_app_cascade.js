// cascade - 级联

const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next(); // 先执行下一中间件，然后再回溯执行本块后面代码
    console.log('第一段');
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next(); // 先执行下一中间件，然后再回溯执行本块后面代码
    console.log('第二段');
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
    console.log('第三段')
    ctx.body = 'Hello World';
});

app.listen(3000);

// 先输出第三段、然后输出第二段、最后输出第一段