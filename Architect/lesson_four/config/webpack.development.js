const CopyWebpackPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
module.exports = {
    plugins:[
        // 处理views/common下的模板
        new CopyWebpackPlugin([{
            from: path.join(__dirname,'../src/webapp/views/common/layout.html'),
            to: '../views/common/layout.html'
        }]),
        // 处理components下的模板
        new CopyWebpackPlugin([{
            from: path.join(__dirname,'../src/webapp/components'),
            to: '../components'
        }],{
            copyUnmodified: true,
            ignore: ['*.js','*.css','*.ts','*.png']
        }),
        // 页面刷新
        new LiveReloadPlugin({}),
        // 提取css
        new ExtractTextPlugin({
            filename: (getPath)=>{
                // getPath 可以得到路径, 拦截提取, 放到别的地方去
                return getPath("styles/[name].css") // getPath有意思的东西，研究研究
            },
            allChunks: true // 这个不加的话, 会有问题...原因未明
        })
    ]
}