// 路由控制中心！各种具体的页面渲染、内容返回的操作统一放到这里！

class IndexController {
    constructor() {

    }

    indexAction() {
        return async (ctx, next) => {
            ctx.body = await ctx.render('index.html');
        }
    }

    interface() {
        return async (ctx, next) => {
            ctx.body = { code: 200 }
        }
    }
}

export default IndexController;