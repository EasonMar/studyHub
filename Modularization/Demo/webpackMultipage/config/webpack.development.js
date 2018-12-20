const CopyWebpackPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    plugins:[
        // 处理components下的模板
        new CopyWebpackPlugin([{
            from: path.join(__dirname,'../src/components'),
            to: './WEB-INF/views/components'
        }],{
            copyUnmodified: true,
            ignore: ['*.js','*.css','*.es','*.png']
        }),
        // 页面刷新
        new LiveReloadPlugin({}),
        
        // 提取css --- 为什么又要设置 ExtractTextPlugin 
        // 参考官网demo：这个功能在loader和plugins里面都需要进行配置：具体原理要深入研究才明白
        new ExtractTextPlugin({
            filename: (getPath)=>{
                // getPath 可以得到路径, 拦截提取, 放到别的地方去
                return getPath("static/styles/[name].css") // getPath有意思的东西，研究研究
            },
            allChunks: true // 这个不加的话, 会有问题(见底部)...原因未明
        })
    ]
}

/** 
 * ERROR in ./node_modules/style-loader/lib/addStyles.js
 * Module not found: Error: Can't resolve './urls' in 'D:\Work\XRK\code\demo\Study\Architect\lesson_four\node_modules\style-loader\lib'
 *  @ ./node_modules/style-loader/lib/addStyles.js 67:14-31
 *  @ ./src/webapp/components/esheader/esheader.css
 */