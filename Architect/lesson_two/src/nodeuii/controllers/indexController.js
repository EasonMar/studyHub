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
        const result = this.indexService.getData();
        ctx.body = await ctx.render('index.html', {
            data: result
        });
    }
}