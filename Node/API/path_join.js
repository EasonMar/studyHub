const path = require('path');

/**
 * path.join：用于连接路径。
 * 该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
 *
 * path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
 * 其拼接是从左往右的
 *
 * 零长度的 path 片段会被忽略。 如果连接的路径字符串是零长度的字符串，则返回 '.'，表示当前工作目录。
 */

console.log(path.join(__dirname, '../socket'));
console.log(path.join(__dirname, '..', 'socket'));
// /Users/eason/Documents/study-area/studyHub/Node/socket

console.log(path.join(__dirname, 'socket'));
// /Users/eason/Documents/study-area/studyHub/Node/API/socket

console.log(path.join('a','b','c','d'));
// a/b/c/d
