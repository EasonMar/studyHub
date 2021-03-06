## 第四课

主要内容：丰富前端部分 `webpack` 配置

1. 处理 `components` 、 `views/common` 里的 **模板**。把他们都直接copy到对应发布路径上： `copy-webpack-plugin`
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
                // 压缩copy过去的模板html
                return minify(content.toString('utf-8'),{ 
                    // 其他参数配置
                    // Collapse white space that contributes to text nodes in a document tree
                    collapseWhitespace: true 
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
5. 前后端联调
    - 为啥 css 文件的响应头描述该文件是 html：`Content-Type: text/html; charset=utf-8`, 报错 `Resource interpreted as Stylesheet but transferred with MIME type text/html`
        ```js
        // 经天宇大神指点，问题应该就出在 '服务端没有配置静态资源目录' 上了！
        // 这里选择koa-static 、先安装koa-static
        npm install koa-static

        // 在config/index中配置静态资源路径
        "staticDir": path.join(__dirname, '../assets')

        // 在app.js内添加配置
        import koaStatic from 'koa-static';
        app.use(koaStatic(config.staticDir));

        // 重新构建项目，成功！
        ```

6. webpack优化
    - 代码分离
    - 魔术注释

7. tslint(略讲)