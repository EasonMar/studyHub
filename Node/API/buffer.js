// 在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区
// 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存
/**
 * === demo - https://juejin.cn/post/6975850137960595487 ===
 * Buffer和二进制
 * Buffer中存储的是二进制数据，那么到底是如何存储呢？
 * - 我们可以将Buffer看成是一个存储二进制的数组
 * - 这个数组中的每一项，可以保存8位二进制： 00000000, 即一个字节（byte） 
 * - - Buffer打印出来的表示形式是2位16进制组成的数组, 8位二进制刚好对应2位16进制
 * 
 * 为什么是8位呢？
 * - 在计算机中，很少的情况我们会直接操作一位二进制，因为一位二进制存储的数据是非常有限的
 * - 所以通常会将8位合在一起作为一个单元，这个单元称之为一个字节（byte）
 * - 也就是说 1byte = 8bit，1kb=1024byte，1M=1024kb
 */

/**
 * Buffer 与字符编码
 * Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据 
 * 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换
 */


// const buf1 = Buffer.from('this is a tést');
// const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

// console.log(buf1.toString());
// // Prints: this is a tést
// console.log(buf2.toString());
// // Prints: this is a tést
// console.log(buf1.toString('latin1'));
// // Prints: this is a tÃ©st



/***
 * 创建 Buffer 类
 * Buffer 提供了以下 API 来创建 Buffer 类：
 * Buffer.alloc(size[, fill[, encoding]])： 返回一个指定{size}位长度的 Buffer 实例，如果没有设置 fill，则默认填满 0
 *  - size = bit位数 = 数组长度
 *  - encoding 默认utf-8
 * Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
 * Buffer.allocUnsafeSlow(size)
 * Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
 * Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
 * Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
 * Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
 */
// // 创建一个长度为 10、且用 15 填充的 Buffer。
// const buf1 = Buffer.alloc(10, 15);
// console.log(buf1) // <Buffer 0f 0f 0f 0f 0f 0f 0f 0f 0f 0f>  -->  0x0f = 00001111
// console.log(buf1.toString());

// // 可以对其进每一位行操作
// buf1[0] = 'w'.charCodeAt();
// buf1[1] = 100;
// buf1[2] = 0x66;
// console.log(buf1);
// console.log(buf1.toString());


/**
 * Buffer和文件读取
 */
const fs = require('fs');

// // 文本文件的读取：
// fs.readFile('./fs/src/hello.txt', (err, data) => {
//     // data 也是一个 buffer
//     console.log(data); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
//     console.log(data.toString()); // Hello World
// })


// 图片的读取
fs.readFile('./fs/src/head_anxingtianxia.jpg', (err, data) => console.log(data));


/**
 * 写入缓冲区
 * buf.write(string[, offset[, length]][, encoding]) => buf.length
 * - string - 写入缓冲区的字符串
 * - offset - 缓冲区开始写入的索引值，默认为 0 
 * - length - 写入的字节数，默认为 buffer.length
 * - encoding - 使用的编码。默认为 'utf8' 
 * - 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串
 */
var buf = Buffer.alloc(256);
var len = buf.write("www.runoob.com");

console.log("写入字节数 : " + len); // 刚好对应字符串的length, 因为一个字符存一个byte


/**
 * 从缓冲区读取数据
 * buf.toString([encoding[, start[, end]]])
 * - encoding - 使用的编码。默认为 'utf8' 
 * - start - 指定开始读取的索引位置，默认为 0
 * - end - 结束位置，默认为缓冲区的末尾
 * - 返回: 解码缓冲区数据并使用指定的编码返回字符串
 */
buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5));   //使用 'ascii' 编码, 并输出: abcde
console.log(buf.toString('utf8', 0, 5));    // 使用 'utf8' 编码, 并输出: abcde
console.log(buf.toString(undefined, 0, 5)); // 使用默认的 'utf8' 编码, 并输出: abcde