import Koa from 'koa';
import config from './config';

import swig from 'koa-swig';
import co from 'co';
import polyfill from 'babel-polyfill';
import errorHandler from './middlewares/errorHandler';

import { createContainer, Lifetime } from 'awilix';
import { scopePerRequest, loadControllers } from 'awilix-koa';

// 应用log4js
import log4js from 'log4js';
// 配置
log4js.configure({
    appenders: { cheese: { type: 'file', filename: __dirname + '/logs/eason.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

const app = new Koa();

// 创建IOC容器 --- 必须要创造IOC容器
const container = createContainer();
// 每一次请求都要new一次类
app.use(scopePerRequest(container)); // 拉外部的service(前端叫models),按照切面的形式注入到constructor,给下面的方法具体去使用
// 装载service实例，准备灌到controller/indexController.js的构造函数内
container.loadModules([__dirname + "/service/*.js"], {
    formatName: "camelCase",
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
});

// 在初始化路由之前, 配置errorHandler
// 本质是保证errorHandler定义在所有中间件的最前面, 这样可以确保errorHandler是兜底的操作
errorHandler.error(app, logger);

// 自动注册所有路由
app.use(loadControllers('controllers/*.js', { cwd: __dirname }))

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