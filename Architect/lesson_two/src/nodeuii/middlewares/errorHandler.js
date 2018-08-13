const errorHandler = {
    error(app, logger) {
        app.use(async(ctx, next) => {
            try{
                // node服务没有错,则直接跑后面的中间件.
                await next();
            }catch(error){
                // console.log(error);
                logger.error(error);
                /**
                 * 服务器接口
                 * 单独把log4js 接入到 集群服务器
                 * 邮件、短信、电话通知
                 */
                
                // ctx.status = error.status || 500; // 如果网站返回500, 百度的排名会降名次！所以即使内部异常,一般也可以返回200
                ctx.status = error.status || 200;
                ctx.body = "请求出错(⊙^⊙)…"
            }
        })
        app.use(async(ctx, next) => {
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