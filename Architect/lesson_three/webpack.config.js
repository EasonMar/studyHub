const merge = require('webpack-merge');  // 需要了解webpack-merge的API

const HappyWebpackPlugin = require('./config/happyWebpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlAfterWebpackPlugin = require('./config/htmlAfterWebpackPlugin');

const { join } = require('path');

// 获取命令行参数 - 解析打包环境变量
const argv = require('yargs-parser')(process.argv.slice(2)); // 需要了解yargs-parser的API
const mode = argv.mode || 'development';
const _modeflag = (mode == "production" ? true : false);

// 各环境下的定制化打包配置(不同环境常常有不懂的打包过程)
const _mergeConfig = require(`./config/webpack.${mode}.js`);

const glob = require('glob');

let _entry = {}; // 入口文件配置，entry对象中的key好像并没有什么特别的作用 --- 用于webpack的[name]中
let _plugins = []; // 插件

// 解析入口文件路径 - 得到入口文件路径数组
const files = glob.sync('./src/webapp/views/**/*.entry.ts');  // 需要了解glob的API：return: {Array<String>} filenames found matching the pattern
for (let item of files) {
    
    // 匹配views下面的入口文件的文件名(This-Part).entry.ts
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)\.entry\.ts$/g.test(item)) {
        const entrykey = RegExp.$1;
        _entry[entrykey] = item;
        const [dist, template] = entrykey.split('-');

        // 创建多个HtmlWebpackPlugin实例来处理多页面的构建
        // 需要了解 HtmlWebpackPlugin的API(chunks、minify)
        _plugins.push(new HtmlWebpackPlugin({
            
            // '../views/'：此配置是基于webpackConfig.output.path = join(__dirname, './dist/assets')而言的
            filename: `../views/${dist}/pages/${template}.html`,
            
            // 此相对路径基于webpack.config.js
            template: `./src/webapp/views/${dist}/pages/${template}.html`,
            
            inject: false, // 避免资源被webpack再插入一遍
            chunks: [entrykey], // Allows you to add only some chunks
            minify: { // 压缩
                collapseWhitespace: _modeflag,
                removeAttributeQuotes: _modeflag
            }
        }))
    }
}

// 最终webpack配置
let webpackConfig = {
    entry: _entry,
    // 这些选项决定了如何处理项目中的不同类型的模块
    module: {
        // 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)
        rules: [{
            test: /\.ts?$/,

            // 下面的配置并不是路径，而是happypack的使用配置，见happypack官网doc
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
        ...HappyWebpackPlugin,
        new HtmlAfterWebpackPlugin()
    ],
    // 这些选项能设置模块如何被解析
    resolve: {
        // 自动解析确定的扩展。能够使用户在引入模块时不带扩展
        extensions: [".ts", ".css"]
    }
}

// webpack-merge default API
// var output = merge(object1, object2, object3, ...);
module.exports = merge(webpackConfig, _mergeConfig);  
