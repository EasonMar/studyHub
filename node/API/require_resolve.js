var fs = require('fs');


// process.cwd()：返回 Node.js 进程当前工作的目录
console.warn(process.cwd());
console.warn(__dirname); // 这两者好像没区别

// fs.realpathSync：返回解析的路径, 获取真实路径
var appDirectory = fs.realpathSync(process.cwd());
console.warn(appDirectory);



/**
 * 使用内部的 require() 机制查询模块的位置,
 * 此操作只返回解析后的文件名(绝对路径)，不会加载该模块。
 */
var b = require.resolve('./path_join.js')
console.warn(b);
// /Users/eason/Documents/study-area/studyHub/Node/API/path_join.js