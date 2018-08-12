const errorHandler = {
    error(app, logger) {
        app.use(async (ctx, next) => {
            await next(); // 为什么next放在最前面？
            // 想起来了 ---> koa2的awaite next()执行过程是比较特别的，执行完其他中间件后，最后会回来执行next后面的代码！
            // 所以这里的意思是，先执行后面的中间件，执行完后再回来走下面的部分.
            if (404 != ctx.status) return;
            // 腾讯公益404
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>';
        })
    }
}

export default errorHandler;