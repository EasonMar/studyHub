const merge = require('webpack-merge');  // 需要了解其API

// 获取命令行参数
const argv = require('yargs-parser')(process.argv.slice(2)); // 需要了解其API
const mode = argv.mode || 'development';

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
    }
}

// 最终webpack配置
let webpackConfig = {
    entry: _entry,
    plugins: [
        ..._plugins,
    ],
    resolve: {
        extensions: [".ts", ".css"]
    }
}

module.exports = merge(webpackConfig, _mergeConfig);