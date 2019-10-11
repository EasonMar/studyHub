const path = require('path');

/**
 * path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径.
 * 给定的路径的序列是从右往左被处理的, 后面每个 path 被依次解析,直到构造完成一个绝对路径.
 * 注意：只要形成绝对路径, 就不再往下解析了
 * 例如, 给定的路径片段的序列为：/foo、/bar、baz,则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz.
 */

let e = path.resolve('/foo', '/bar', 'baz');
console.warn(e); 
// Mac - /bar/baz 
// windows - E:\bar\baz 

// 最右边参数不同的不同表现
let p = path.resolve('/foo/bar', '/tmp/file/');
console.warn(p); 
// Mac - /tmp/file
// windows - E:\tmp\file

p = path.resolve('/foo/bar', './tmp/file/');
console.warn(p); 
// Mac - /foo/bar/tmp/file
// windows - E:\foo\bar\tmp\file

p = path.resolve('/foo/bar', '../tmp/file/');
console.warn(p);  
// Mac - /foo/tmp/file
// windows - E:\foo\tmp\file


// 如果处理完全部给定的 path 片段后还未生成一个绝对路径, 则当前工作目录会被用上.
// 可以将 当前工作目录 理解为 默认的最左边的 path 片段
let t = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.warn(t); 
// Mac - /Users/eason/Documents/study-area/studyHub/Node/API/wwwroot/static_files/gif/image.gif
// windows - E:\Eason's-note\node_demo\wwwroot\static_files\gif\image.gif

let m = path.resolve(__dirname, './dist/');
console.warn(m); 
// Mac - /Users/eason/Documents/study-area/studyHub/Node/API/dist

m = path.resolve(__dirname, 'dist');
console.warn(m);
// Mac - /Users/eason/Documents/study-area/studyHub/Node/API/dist

m = path.resolve('dist');
console.warn(m);
// Mac - /Users/eason/Documents/study-area/studyHub/Node/API/dist

m = path.resolve('../dist');
console.warn(m);
// Mac - /Users/eason/Documents/study-area/studyHub/Node/dist



/**
 * 当前模块的文件夹名称。等同于 __filename 的 path.dirname() 的值。
 */
console.warn(__dirname);
console.warn(path.dirname(__filename))  // path.dirname() 方法返回一个 path 的目录名