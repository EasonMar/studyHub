const Express = require('./demoExpress')

const app = new Express();

// /a路由处理
app.use('/a', (req, res, next) => {
  res.end(`${req.rawHeaders}`);
  next();
});

// /b的路由处理
app.use('/b', (req, res, next) => {
  throw Error('/b error');
});

// 错误处理中间件
app.use((error, req, res, next) => {
  res.writeHead(error.status || 500);
  res.end('server error');
});

app.listen(3000, () => {
  console.log('express is running at port 3000');
});
