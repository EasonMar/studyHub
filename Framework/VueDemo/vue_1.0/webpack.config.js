// 自己写webpack才知道自己掌握得多不好！
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './js/request_async-data.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: './6-3_request_async-data.html'
        })
    ]
}