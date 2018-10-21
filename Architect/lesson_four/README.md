## 第四课

主要内容：丰富前端部分 `webpack` 配置

1. 处理 `components` 、 `views/common` 里的内容。把他们都直接copy到对应发布路径上： `copy-webpack-plugin`
- 这里只是纯粹拷文件，不要用 `html-webpack-plugin` ，因为使用 `html-webpack-plugin` 会触发我们自定义的 `htmlAfterWebpackPlugin`
2. 开发时页面刷新：`webpack-livereload-plugin`
3. 处理css文件
- 注意用 `cssnext` 语法写css，要注意注释规范！！如果乱写注释很可能编译不过去！！
4. 生产环境配置文件 - `webpack.production.js`
- 重写output、重写各输出文件的fileName，需要带上MD5版本戳
- 不要 `LiveReload plugin` 了
- `CopyWebpackPlugin` 去掉 `copyUnmodified: true`
- 在 `CopyWebpackPlugin` 中压缩代码
```js
const minify = require('html-minifier').minify;
new CopyWebpackPlugin([{
    from: path.join(__dirname,'../src/webapp/components'),
    to: '../components',
    transform(content){
        return minify(content.toString('utf-8'),{ // 压缩copy过去的模板html(只处理Html,layout因为是swig模板,所以不能动)
            // 其他参数配置
            collapseWhitespace: true // Collapse white space that contributes to text nodes in a document tree
        }); 
    }
}],{
    ignore: ['*.js','*.css','*.ts','*.png']
}),
```
- 压缩css代码, 在 `postcss.config.js` 中配置, 参考[官方配置文档](https://github.com/michael-ciniawsky/postcss-load-config)
```js
// 注意, 需要在package.json中配置node环境
// "client:prod": "cross-env NODE_ENV=production webpack --mode production",
module.exports = (ctx) => ({
    plugins: {
        'postcss-cssnext': {},
        cssnano: ctx.env === 'production' ? {} : false
    }
})
```