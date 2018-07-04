// 引入ws模块
const WebSocket = require('ws');  

// 创建一个socket服务器，端口是8080
const wss = new WebSocket.Server({ port: 8080 });

// 创建一个连接
wss.on('connection', function connection(ws) {
	
	// 接收客户端发过来的消息
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    // 发送消息到客户端
    ws.send('hello world');
});