const fs = require('fs');

// 1、异步读取
// fs.readFile('./src/youtube.txt', function (err, data) {
//     if (err) return console.log(err);
//     console.log('异步读取：');
//     console.log('raw data is: ', data)
//     console.log('toString', data.toString());
// });



fs.open('./src/youtube.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件：");
    const buf = new Buffer.alloc(178);
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + "  字节被读取");

        // 仅输出读取的字节
        if (bytes > 0) {
            console.log(buf.toString());
            console.log(buf)
        }
    })
})

// fs.readFile / fs.read 有什么区别 --- https://www.cnblogs.com/TangcongBlogs/p/14922017.html
// 本质上讲，fs.readFile()方法是对fs.read()方法的进一步封装，fs.readFile()方法可以方便的读取文件的全部内容。


// // 2、改变文件名
// fs.rename('./dist/test.jpg', './dist/changetest.jpg', function(err) {
//     if (err) return console.log(err);
//     console.log("改变文件名：修改成功");
//     setTimeout(function() {
//         fs.renameSync('./dist/changetest.jpg', './dist/test.jpg')
//         console.log("5秒后我又把名字成功改回去了");
//     }, 5000);
// });

// // 3、获取文件信息
// fs.stat('./src/youtube.txt', function(err, stats) {
//     if (err) return console.log(err);
//     console.log(stats);
//     console.log("读取文件信息成功");　　 //检测文件类型
//     console.log('是否为文件(isFile) ? ' + stats.isFile());
//     console.log('是否为目录(isDirectory) ? ' + stats.isDirectory());
// });

// // 4、打开、关闭文件
// let buf = new Buffer(1024);
// fs.open('./src/youtube.txt', 'r', (err, fd) => {
//     if (err) return console.error(err);
//     console.log('文件打开成功');
//     console.log('准备读取文件');

//     // 1. fd fs.open的标识
//     // 2. buf 缓存区
//     // 3. 0, buf.length 缓存区区间
//     // 4. 0, 读取文件的开始位置
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//         if (err) console.log(err);
//         console.log(bytes + ' 字节被读取');

//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//     })

//     // 必须关闭文件描述符！
//     fs.close(fd, function(err) {
//         if (err) console.error(err);
//         console.log('文件关闭成功');
//     });
// });


// // 5、删除文件
// fs.unlink('./dist/test.jpg', function(err) {
//     if (err) return console.log(err);
//     console.log('文件删除成功');
//     setTimeout(function() {
//         let src = fs.readFileSync('./src/cong1.jpg');
//         fs.writeFileSync('./dist/test.jpg', src);
//         console.log('10秒后我又把文件成功放回去了');
//     }, 10000);
// });


// 6、Node.js开发入门—Stream用法详解 - [https://blog.csdn.net/foruok/article/details/49120183]
// 工作中难免会遇到处理大文件的时候，有这种stream的处理方式，就不需要一次处理太大的文件，从而导致内存不够用，或者内存占用太多。

// // Readable流提供了一种将外部来源（比如文件、套接字等）的数据读入到应用程序的机制
// let readable = fs.createReadStream('./src/youtube.txt', {
//     flags: 'r',
//     encoding: 'utf8',
//     autoClose: true,
//     mode: 0666,
// });
// readable.on('open', function(fd) {
//     console.log('file was opened, fd = ', fd);
// });
// readable.on('readable', function() {
//     console.log('received readable');
// });
// readable.on('data', function(chunk) {
//     console.log('read %d bytes: %s', chunk.length, chunk);
// });
// readable.on('end', function() {
//     console.log('read end');
// });
// readable.on('close', function() {
//     console.log('file was closed.');
// });
// readable.on('error', function(err) {
//     console.log('error occured: %s', err.message);
// });

// // Writable流提供了一个接口，用来把数据写入到目的设备（或内存）中
// // fs.createWriteStream 似乎不会自己创建不存在的文件夹，所以在使用之前需要注意，保存文件的文件夹一定要提前创建。
// let writable = fs.createWriteStream('./dist/writable.txt',{
//   flags: 'w',
//   defaultEncoding: 'utf8',
//   mode: 0666,
// });

// writable.on('finish', function(){
//   console.log('write finished');
//   process.exit(0);
// });
// writable.on('error', function(err){
//   console.log('write error - %s', err.message);
// });
// writable.write('My name is 火云邪神', 'utf8');
// writable.end();

// // pipe - 管道方法
// const readable = fs.createReadStream('./src/youtube.txt', {
//     flags: 'r',
//     encoding: 'utf8',
//     autoClose: true,
//     mode: 0666,
// });

// const writable = fs.createWriteStream('./dist/pipefile.txt');
// // All the data from readable goes into 'pipefile.txt'
// readable.pipe(writable);

// // The readable.pipe() method returns a reference to the destination stream making it possible to set up chains of piped streams
// const zlib = require('zlib');
// const r = fs.createReadStream('./src/youtube.txt');
// const z = zlib.createGzip();
// const w = fs.createWriteStream('./dist/file.txt.gz');
// r.pipe(z).pipe(w);