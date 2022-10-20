var fs = require('fs');
var path = require('path')

// The process.cwd() method returns the current working directory of the Node.js process.
console.warn(process.cwd());
// The directory name of the current module
console.warn(__dirname);
// 这两者好像没区别

// This is the same as the path.dirname() of the __filename.
console.warn(path.dirname(__filename))
console.warn(__filename)

// // fs.realpathSync：以同步的方式查看文件或者目录的绝对路径
// var appDirectory = fs.realpathSync(process.cwd());
// console.warn(appDirectory);