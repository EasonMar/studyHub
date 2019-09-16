const http = require('http');

let server = http.createServer();

server.on("request", function (req, res) {
    let body = Buffer.from("你好啊");
    console.log(body.toString());
    res.writeHead(200, {
        "Content-Length": body.length,
        "Content-Type": "text/plain",
        "charset":"utf-8",
        // 跨域资源共享（Cross-origin resource sharing）机制解决跨域问题
        "Access-Control-Allow-Origin":"*", 
        "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
    });
    setTimeout(() => {
        res.write(body, "utf8");
        res.end();
    }, 1000);
})

server.listen(8888);

// 开启服务
console.log('Server running at http://127.0.0.1:8888/');
