const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = {
        word: 'Hello World'
    }

    // console.log(ctx); // 这是 Context
    // console.log(ctx.request); // 这是 koa Request
    console.log(ctx.request.url);
    console.log(ctx.query);
    console.log(ctx.ip);
    // console.log(ctx.response); // 这是 koa Response
});

app.listen(3000);