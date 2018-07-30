const path = require('path');

/**
 * path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径.
 * 给定的路径的序列是从右往左被处理的,后面每个 path 被依次解析,直到构造完成一个绝对路径. 
 * 例如,给定的路径片段的序列为：/foo、/bar、baz,则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz.
 */

let e = path.resolve('/foo', '/bar', 'baz');
console.warn(e); // E:\bar\baz 

// 最右边参数不同的不同表现
let p = path.resolve('/foo/bar', '/tmp/file/');
console.warn(p); // E:\tmp\file

p = path.resolve('/foo/bar', './tmp/file/');
console.warn(p); // E:\foo\bar\tmp\file

p = path.resolve('/foo/bar', '../tmp/file/');
console.warn(p);  // E:\foo\tmp\file


// 如果处理完全部给定的 path 片段后还未生成一个绝对路径,则当前工作目录会被用上.
let t = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.warn(t); // E:\Eason's-note\node_demo\wwwroot\static_files\gif\image.gif


let m = path.resolve(__dirname, './dist/');
console.warn(m);

m = path.resolve(__dirname, 'dist');
console.warn(m);

/**
 * 当前模块的文件夹名称。等同于 __filename 的 path.dirname() 的值。
 */
console.warn(__dirname);
console.warn(path.dirname(__filename))  // path.dirname() 方法返回一个 path 的目录名