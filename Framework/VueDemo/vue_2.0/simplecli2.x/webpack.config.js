var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				],
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader?indentedSyntax'
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						'scss': [
							'vue-style-loader',
							'css-loader',
							'sass-loader'
						],
						'sass': [
							'vue-style-loader',
							'css-loader',
							'sass-loader?indentedSyntax'
						]
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	// 这些选项能设置模块如何被解析
	resolve: {
		// 创建 import 或 require 的别名，来确保模块引入变得更简单。
		alias: {
			'vue$': 'vue/dist/vue.esm.js' // 在给定对象的键后的末尾添加 $，以表示精准匹配
		},
		// 自动解析确定的扩展。默认值为: [".js", ".json"]
		extensions: ['*', '.js', '.vue', '.json'] 
		// 对于标明了扩展名导入的模块，例如，import SomeFile from "./somefile.ext"(ext代指扩展名)，要想正确的解析，一个包含“*”的字符串必须包含在数组中
	},
	devServer: {
		historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
		noInfo: true, // 启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
		overlay: true // 当出现编译器错误或警告时，在浏览器中全屏显示。
	},
	// 这些选项可以控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制
	performance: { 
		// 打开/关闭提示。当找到提示时，告诉 webpack 抛出一个错误或警告。此属性默认设置为 "warning"
		hints: false // 不展示警告或错误提示
	},
	devtool: '#eval-source-map' // 此选项控制是否生成，以及如何生成 source map。
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true, // 在使用 uglifyjs-webpack-plugin 时，你必须提供 sourceMap：true 选项来启用 source map 支持。
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
