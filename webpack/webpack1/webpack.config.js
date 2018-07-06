const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	//页面入口文件配置
    // entry: __dirname + '/src/js/app.js',
    entry:'javascript/app.js', // 配置文件也可以用别名？
    //入口文件输出配置
    output: {
        path: __dirname +'/dist/',
        filename: '[name]-[hash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
        	title: 'htmlWebpackPlugin',
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.css'], // 对应扩展名的资源都可以不用写后缀了
        alias: {
            javascript: __dirname +'/src/js',
            style: __dirname+'/src/css'
        }
    },
    module: {
        //加载器配置
        loaders: [
            { test: /[.]css$/, loader: 'style-loader!css-loader' }  // '!'表示级联调用
        ]
    },
}