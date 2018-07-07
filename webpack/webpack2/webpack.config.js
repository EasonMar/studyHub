const path = require('path'); // webpack2 开始会常用path模块
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // // 把css从js中提取出来的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/index.es',
    output: {
        path: path.join(__dirname, 'dist'), // 指定打包之后的文件夹
        filename: 'js/[name]-[hash:5].js'
    },
    module: {
        /* 在webpack2.0版本已经将 module.loaders 改为 module.rules 为了兼容性考虑以前的声明方法任然可用，
　　　　　　同时链式loader(用!连接)只适用于module.loader，
　　　　　　同时-loader不可省略 */
        rules: [{
            test: /[.]es$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    'presets': ['es2015', 'stage-0']
                }
            }]
        }, {
            test: /[.]less$/i,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/[name]-[hash:5].css'),
        new htmlWebpackPlugin({
        	title: 'htmlWebpackPlugin',
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}