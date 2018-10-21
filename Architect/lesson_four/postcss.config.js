// module.exports = {
//     // 第四课才配置了这货...
//     plugins: {
//         // 'postcss-preset-env': {} // 这个跟happypack配合有冲突,导致无法编译
//         'postcss-cssnext': {},
//         'cssnano': {} // 需要想一个办法,使得只在生产环境中引入它
//     }
// }
// 使用以下配置方式,并在 package.json 中配置 cross-env NODE_ENV=production, 可以做到只在生产环境引入cssnano
/**
 * When using a {Function} (postcss.config.js or .postcssrc.js), it's possible to pass context to postcss-load-config, 
 * which will be evaluated while loading your config. 
 * By default ctx.env (process.env.NODE_ENV) and ctx.cwd (process.cwd()) are available on the ctx {Object} 
 */
module.exports = (ctx) => ({
    plugins: {
        'postcss-cssnext': {},
        cssnano: ctx.env === 'production' ? {} : false
    }
})