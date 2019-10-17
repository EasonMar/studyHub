var fs = require('fs');

// process.cwd()：返回 Node.js 进程当前工作的目录
console.warn(process.cwd());
console.warn(__dirname); // 这两者好像没区别

// fs.realpathSync：以同步的方式查看文件或者目录的绝对路径
var appDirectory = fs.realpathSync(process.cwd());
console.warn(appDirectory);