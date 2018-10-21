import { GET, route } from 'awilix-koa';
export default
@route("/")
@route("/index.html")
class IndexController {
    constructor({ indexService }) {
        this.indexService = indexService;
    }
    @GET()
    async indexAction(ctx) {
        const result = await this.indexService.getData();
        ctx.body = await ctx.render('index/pages/index.html', {
            data: result
        });
    }
}