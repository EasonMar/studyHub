import IndexController from './indexController';
const insIndexController = new IndexController();

// 路由的集散中心 --- 架构思路：把路由配置统一写到这个文件上
export default (app, router) => {
    // // 这种写法是koa-simple-router的写法！
    // app.use(router(_ => {
    //     _.get('', insIndexController.indexAction()); // 这些东西都是从PHP那套里面学过来的
    // }))

    // 我用的是koa-router
    // 因为indexAction执行后才返回对应的异步函数，要让indexAction执行！
    app.use(router.get('', insIndexController.indexAction()));

    app.use(router.get('/ajax', insIndexController.interface()));

}