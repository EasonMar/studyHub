// https://juejin.cn/post/6975850137960595487#heading-7

/**
 * 什么是流呢？
 * - 我们的第一反应应该是流水，源源不断的流动；
 * - 程序中的流也是类似的含义，我们可以想象当我们从一个文件中读取数据时，文件的二进制（字节）数据会源源不断的被读取到我们程序中；
 * - 而这个一连串的字节，就是我们程序中的流；
 * 
 * 所以，我们可以这样理解流：
 * - 是连续字节的一种表现形式和抽象概念
 * - 流应该是可读的，也是可写的
 * 
 * Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
 * 所有的 Stream 对象都是 EventEmitter 的实例
 */


// // 从流中读取数据 ===============================
// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('./fs/src/hello.txt');

// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function (chunk) {
//     console.log('on data')
//     data += chunk;
// });

// readerStream.on('end', function () {
//     console.log('on end')
//     console.log(data);
// });

// readerStream.on('error', function (err) {
//     console.log('on error')
//     console.log(err.stack);
// });

// console.log("程序执行完毕");

// // 写入流 ===============================
// var data = '这段内容是通过"流"的方式写入的'
// var writerStream = fs.createWriteStream('./fs/src/hello.txt');

// // 使用 utf8 编码写入数据
// writerStream.write(data, 'UTF8');

/**
 * 写入流在打开后是不会自动关闭的；
 * 我们必须手动关闭，来告诉Node已经写入结束了；
 * 并且会发出一个 finish 事件的
 * 另外一个非常常用的方法是 end：
 * end方法相当于做了两步操作： write传入的数据和调用close方法；
 */

// // 标记文件末尾
// writerStream.end();


// // 处理流事件 --> finish、error
// writerStream.on('finish', function () {
//     console.log("写入完成。");
// });

// writerStream.on('error', function (err) {
//     console.log(err.stack);
// });

// console.log("程序执行完毕");



// // 管道流 ===============================
// // 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
// // 创建一个可读流
// var fs = require("fs");
// var readerStream = fs.createReadStream('./fs/src/youtube.txt');

// // 创建一个可写流
// var writerStream = fs.createWriteStream('./fs/src/hello.txt');

// // 管道读写操作
// // 读取 youtube.txt 文件内容，并将内容写入到 hello.txt 文件中
// readerStream.pipe(writerStream);

// console.log("程序执行完毕");



// 链式流 --- 就是管道流的链式操作 ===============================
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
// 接下来我们就是用管道和链式来压缩和解压文件。
var fs = require("fs");
var zlib = require('zlib');

// 压缩 hello.txt 文件为 hello.txt.gz
fs.createReadStream('./fs/src/hello.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./fs/src/hello.txt.gz'));

console.log("文件压缩完成。");