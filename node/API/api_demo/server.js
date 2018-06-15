/**
 * 用原生API创建一个服务
 */

const http = require('http');

http.createServer((req, res) => {
    // 定义HTTP头
    res.writeHead(200, { 'Content-Type': 'text/plan' });

    // 发送响应数据
    res.end('Hello world!\n');

}).listen(8000); // 监听8000端口

// 服务运行后输出一行信息
console.log('server is running')