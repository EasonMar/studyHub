const merge = require('webpack-merge');  // 需要了解其API

const HappWebpackPlugin = require('./config/happyWebpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlAfterWebpackPlugin = require('./config/htmlAfterWebpackPlugin');

const { join } = require('path');

// 获取命令行参数
const argv = require('yargs-parser')(process.argv.slice(2)); // 需要了解其API
const mode = argv.mode || 'development';
const _modeflag = (mode == "production" ? true : false);

const _mergeConfig = require(`./config/webpack.${mode}.js`);

const glob = require('glob'); // 需要了解其API

let _entry = {}; // 空的入口文件
let _plugins = []; // 插件

// 解析入口文件路径
const files = glob.sync('./src/webapp/views/**/*.entry.ts');  // glob-API待了解
for (let item of files) {
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)\.entry\.ts$/g.test(item)) {
        const entrykey = RegExp.$1;
        _entry[entrykey] = item;
        const [dist, template] = entrykey.split('-');
        _plugins.push(new HtmlWebpackPlugin({
            filename: `../views/${dist}/pages/${template}.html`,
            template: `./src/webapp/views/${dist}/pages/${template}.html`,
            inject: false, // 避免资源再插入一遍
            chunks: [entrykey], // Allows you to add only some chunks
            // 压缩
            minify: {
                collapseWhitespace: _modeflag,
                removeAttributeQuotes: _modeflag
            }
        }))
    }
}

// 最终webpack配置
let webpackConfig = {
    entry: _entry,
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'happypack/loader?id=happyTS' // 文件大了才能体现出来
        }]
    },
    output: {
        path: join(__dirname, './dist/assets'),
        publicPath: '/',
        filename: 'scripts/[name].bundle.js'
    },
    plugins: [
        ..._plugins,
        ...HappWebpackPlugin,
        new HtmlAfterWebpackPlugin()
    ],
    resolve: {
        extensions: [".ts", ".css"]
    }
}

module.exports = merge(webpackConfig, _mergeConfig);