const koa = require('koa');
const app = new koa();
app.use(async (ctx, next) => {
  console.log('进入第1个中间件')
  // 不 await 也可以 == ？？？？？
  next();
  console.log('退出第1个中间件')
})
app.use(async (ctx, next) => {
  console.log('进入第2个中间件')
  next();
  console.log('退出第2个中间件')
})

app.use((ctx, next) => {
  console.log('进入第3个中间件')
  next();
  console.log('退出第3个中间件')
})

app.use(ctx => {
  ctx.body = 'hello koa'
})

app.listen(8080, () => {
  console.log('服务启动，监听8080端口')
})
