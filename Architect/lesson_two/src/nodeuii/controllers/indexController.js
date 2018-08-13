class IndexController {
    constructor() {}

    indexAction() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index.html', {
                data: result
            });
        }
    }
}

export default IndexController;