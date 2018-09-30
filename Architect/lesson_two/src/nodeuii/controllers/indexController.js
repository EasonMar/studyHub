import { GET, route } from 'awilix-koa';
export default
@route("/") // 修饰器，修饰类
@route("/index.html") // 修饰器，修饰类
class IndexController {
    constructor({ indexService }) {
        this.indexService = indexService;
    }
    @GET() // 修饰器，修饰类方法, get + '/' or  get + '/index.html'时,会执行以下路由
    async indexAction(ctx) {
        const result = await this.indexService.getData();
        ctx.body = await ctx.render('index.html', {
            data: result
        });
    }
}