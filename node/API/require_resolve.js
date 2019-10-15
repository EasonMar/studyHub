/**
 * 使用require.resolve函数来查询"当前目录下" path_join.js 模块文件的"带有完整绝对路径的"模块文件名
 * - 注意, 只能查询当前目录下
 */
var rq = require.resolve('./path_join.js')
console.warn(rq);
// /Users/eason/Documents/study-area/studyHub/Node/API/path_join.js


/**
 * Resolve the path of a module like require.resolve() but from a given path
 * 而此模块可以给定目录, 不限于当前目录下的文件
 */
const resolveFrom = require('./resolve-from').silent
var rf = resolveFrom('fs','./basic')
console.warn(rf)

/**
 * 搞懂 require.resolve 和 resolve-from 的差异
 * 就能搞懂 require 和 import-from 的差异
 */