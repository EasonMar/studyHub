// 现在koa已经迁移到async函数了！！
// const koa = require('koa');
// // const app = koa(); // 过时的写法，现在会报错
// const app = new koa();

// app.use(function* () {
//     this.body = 'Hello Worl';
// });

// app.listen(3000);


const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    // 自动识别返回的Content-Type
    
    // 返回字符串
    // ctx.body = 'Hello World';

    // 返回JSON
    ctx.body = {
        word: 'Hello World' 
    }
});

app.listen(3000);