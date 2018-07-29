import IndexController from './indexController';
const insIndexController = new IndexController();

// 路由的集散中心
export default (app, router) => {
    app.use(router(_ => {
        _.get('', insIndexController.indexAction()); // 这些东西都是从PHP那套里面学过来的
    }))
}