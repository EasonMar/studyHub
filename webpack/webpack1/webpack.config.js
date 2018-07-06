var webpack = require('webpack');

module.exports = {
	//页面入口文件配置
    entry: __dirname + '/src/js/app.js',
    //入口文件输出配置
    output: {
        path: __dirname +'/dist/',
        filename: '[name]-[hash].js'
    }
}