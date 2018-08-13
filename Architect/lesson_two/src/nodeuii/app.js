import Koa from 'koa';
import config from './config';

import router from 'koa-route';
import swig from 'koa-swig';
import co from 'co';
import polyfill from 'babel-polyfill';
import errorHandler from './middlewares/errorHandler';
// 应用log4js
const log4js = require('log4js');
// 配置
log4js.configure({
    appenders: { cheese: { type: 'file', filename: __dirname + '/logs/eason.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

const app = new Koa();

// 在初始化路由之前, 配置errorHandler
// 本质是保证errorHandler定义在所有中间件的最前面, 这样可以确保errorHandler是兜底的操作
errorHandler.error(app, logger);

// co.wrap(), swig的配置需要详细了解
app.context.render = co.wrap(swig({
    root: config.viewDir,
    autoescape: true, // 改变当前变量的自动转义行为
    cache: false, // disable, set to false 。这里设置模板缓存！
    ext: 'html',
    writeBody: false
}));

app.listen(config.port, () => {
    console.log(`lesson_one is listenning on ${config.port}`)
});