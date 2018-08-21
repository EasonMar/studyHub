const MyFirstWebpackPlugin = require('./config/myFirstWebpackPlugin');
const HelloCompilationPlugin = require('./config/helloCompilationPlugin');
const HelloAsyncPlugin = require('./config/helloAsyncPlugin');
const FileListPlugin = require('./config/fileListPlugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new MyFirstWebpackPlugin({setting:true}),
		new HelloCompilationPlugin(),
		new HelloAsyncPlugin(),
		new FileListPlugin()
	]
}