import Koa from 'koa';          // koa对象
import config from './config';  // 后端配置文件
import router from 'koa-route'; // koa路由
import initController from './controllers/index'; // 路由文件
import swig from 'koa-swig';                      // 模板引擎
import co from 'co';                              // koa + swig 需要 co模块
import 'babel-polyfill';                          // polyfill
import errorHandler from './middlewares/errorHandler';  // 中间件 - 错误处理
import log4js from 'log4js'; // 应用log4js - 日志插件

// 配置log4js
log4js.configure({
    appenders: { cheese: { type: 'file', filename: __dirname + '/logs/eason.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

const app = new Koa();  // 实例化koa对象

// 在初始化路由之前, 配置errorHandler
// 本质是保证errorHandler定义在所有中间件的最前面, 这样可以确保errorHandler是兜底的操作
errorHandler.error(app, logger); // 启动错误处理 - 传入 app 和 logger 插件

initController(app, router); // 启动路由 - 传入 app 和 koa路由

// 配置模板 - co.wrap(); swig的配置需深入
app.context.render = co.wrap(swig({
    root: config.viewDir,
    autoescape: true, // 改变当前变量的自动转义行为
    cache: false, // disable, set to false 。这里设置模板缓存！
    ext: 'html',
    writeBody: false
}));

// 监听网络端口
app.listen(config.port, () => {
    console.log(`lesson_one is listenning on ${config.port}`)
});