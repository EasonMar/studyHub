const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const minify = require('html-minifier').minify;
const path = require('path');
module.exports = {
    output: {
        filename: 'scripts/[name].[hash:5].bundle.js'
    },
    plugins:[
        // 处理views/common下的模板
        new CopyWebpackPlugin([{
            from: path.join(__dirname,'../src/webapp/views/common/layout.html'),
            to: '../views/common/layout.html',
            transform(content){
                return minify(content.toString('utf-8'),{ // 压缩copy过去的模板
                    // 其他参数配置
                    collapseWhitespace: true // Collapse white space that contributes to text nodes in a document tree
                }); 
            }
        }]),
        // 处理components下的模板
        new CopyWebpackPlugin([{
            from: path.join(__dirname,'../src/webapp/components'),
            to: '../components',
            transform(content){
                return minify(content.toString('utf-8'),{ // 压缩copy过去的模板
                    // 其他参数配置
                    collapseWhitespace: true // Collapse white space that contributes to text nodes in a document tree
                }); 
            }
        }],{
            ignore: ['*.js','*.css','*.ts','*.png']
        }),
        // 提取css
        new ExtractTextPlugin({
            filename: 'styles/[name].[hash:5].css',
            allChunks: true // 这个不加的话, 会有问题...原因未明
        })
    ]
}