// 获取各依赖包
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlAfterWebpackPlugin = require('./config/htmlAfterWebpackPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 如果此插件安装的不是最新试验版本，会有问题
// 问题链接 https://github.com/webpack/webpack/issues/6568
// 安装实验版本：npm install -D extract-text-webpack-plugin@next 
const glob = require('glob');

const { join } = require('path');

// ====================================================
// 获取命令行参数 - 解析打包环境变量
const argv = require('yargs-parser')(process.argv.slice(2));
// 需要了解yargs-parser的API
// node example.js --foo=33 --bar hello
// require('yargs-parser')(process.argv.slice(2)) ===>  { _: [], foo: 33, bar: 'hello' }
// process是node中的一个模块，通过访问process.argv我们能轻松愉快的接收通过命令执行node程序时候所传入的参数
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变

const mode = argv.mode || 'development';
const _modeflag = (mode == "production" ? true : false);

// 各环境下的定制化打包配置(不同环境常常有不懂的打包过程)
const _mergeConfig = require(`./config/webpack.${mode}.js`);


// ====================================================
let _entry = {}; // 入口文件配置，entry对象中的key好像并没有什么特别的作用 --- 用于webpack的[name]中
let _plugins = []; // 插件


// ====================================================
// 解析入口文件路径 - 得到多页面入口文件路径数组
const files = glob.sync('./src/views/**/*.entry.js');
// 需要了解glob的API：return: {Array<String>} filenames found matching the pattern

for (let item of files) {
  // 匹配views下面的入口文件的文件名(This-Part).entry.js
  if (/.+\/([a-zA-Z]+)\.entry\.js$/g.test(item)) {
    const entrykey = RegExp.$1;
    _entry[entrykey] = item;

    // 创建多个 HtmlWebpackPlugin 实例来处理多页面的构建
    // 需要了解 HtmlWebpackPlugin 的 API(chunks、minify)
    _plugins.push(new HtmlWebpackPlugin({

      // '../views/'：此配置是基于webpackConfig.output.path = join(__dirname, './dist/assets')而言的
      filename: `./WEB-INF/views/${entrykey}/index.vm`,

      // 此相对路径基于webpack.config.js
      template: `./src/views/${entrykey}/index.vm`,

      inject: false, // 避免资源再次被webpack插入一次

      // 非常重要的一步, 指定了哪些东西可以放在一起：To include only certain chunks you can limit the chunks being used
      chunks: ["runtime", entrykey], // 如果抽离了runtime, 一定要把它放在最前面, 然后中间是components, 

      minify: { // 压缩
        collapseWhitespace: _modeflag,
        removeAttributeQuotes: _modeflag
      }
    }))
  }
}

// 最终webpack配置
let webpackConfig = {

  // 入口
  entry: _entry,

  // loader，处理非js文件
  module: {
    rules: [{
      // 处理CSS
      test: /\.css?$/,
      exclude: /node_modules/,
      include: /src/,
      use: ExtractTextPlugin.extract({
        fallback: "vue-style-loader",
        use: "css-loader"
      })
    }, {
      // 处理Less
      test: /\.less?$/,
      exclude: /node_modules/,
      include: /src/,
      use: ExtractTextPlugin.extract({
        fallback: "vue-style-loader",
        use: [
          "css-loader",
          "less-loader"
        ]
      })
      // 以上处理都不能把.vue里面对应的样式抽出来~~~
      // 以上的配置仅仅是处理 .vue 文件之外的样式提取
    }, {
      // 处理es6+ --- [Cannot find module 'babel-core'](https://github.com/babel/babel-loader)
      // 需要安装的：npm install -D babel-loader@7 babel-core babel-preset-env babel-preset-stage-0
      test: /\.js?$/,
      exclude: /node_modules/,
      include: /src/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0'] // env转换es6 stage-0转es7
        }
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // 在 vue-loaer 里的 option.loader中配置 ExtractTextPlugin 才能提取 .vue 文件中的css
        // 从fullcli2.x的 utils.js、vue-loader.conf.js 中学习到的
        loaders: {
          'less': ExtractTextPlugin.extract({
            fallback: "vue-style-loader",
            use: [
              "css-loader",
              "less-loader"
            ]
          })
        }
      }
    }]
  },

  // 出口
  output: {
    path: join(__dirname, './dist/'),
    publicPath: '/',
    filename: './static/scripts/[name].bundle.js'
  },

  // 优化：将运行时chunk提取出来
  optimization: {
    runtimeChunk: 'single'
  },

  // 插件
  plugins: [
    ..._plugins,
    new HtmlAfterWebpackPlugin()
  ],

  // 解析：设置模块如何被解析
  resolve: {
    // 自动解析确定的扩展。能够使用户在引入模块时不带扩展
    extensions: [".js", ".css", ".vue"],
    // 别名
    alias: {
      '@': join(__dirname, './src/')
    }
  }
}

// webpack-merge default API
// var output = merge(object1, object2, object3, ...);
module.exports = merge(webpackConfig, _mergeConfig);  
