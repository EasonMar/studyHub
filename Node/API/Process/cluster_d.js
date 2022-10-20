// A single instance of Node.js runs in a single thread. 
// To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.
// The cluster module allows easy creation of child processes that all share server ports.

// cluster 开启子进程
const http = require('http');
const numCPUs = require('os').cpus().length; // CPU核心数
const cluster = require('cluster');
if (cluster.isMaster) {
    // 主进程
    console.log(`Master ${process.pid} is running`);
    // Fork workers --- fork 子进程\work进程\工作进程
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log(`worker ${worker.process.pid} died`);
    })
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}


/**
 *      cluster模块调用fork方法来创建子进程，该方法与child_process中的fork是同一个方法
 *
 *      cluster模块采用的是经典的主从模型，Cluster会创建一个master，然后根据你指定的数量复制出多个子进程，
 *  可以使用cluster.isMaster属性判断当前进程是master还是worker(工作进程)。由master进程来管理所有的子进程，
 *  主进程不负责具体的任务处理，主要工作是负责调度和管理
 *
 *      cluster模块使用内置的负载均衡来更好地处理线程之间的压力，该负载均衡使用了Round-robin算法（也被称之为循环算法）。
 *  当使用Round-robin调度策略时，master accepts()所有传入的连接请求，然后将相应的TCP请求处理发送给选中的工作进程（该方式仍然通过IPC来进行通信）
 *
 *      开启多进程时候端口疑问讲解：如果多个Node进程监听同一个端口时会出现 Error:listen EADDRIUNS的错误，
 *  而cluster模块为什么可以让多个子进程监听同一个端口呢?原因是master进程内部启动了一个TCP服务器，而真正监听端口的只有这个服务器，
 *  当来自前端的请求触发服务器的connection事件后，master会将对应的socket具柄发送给子进程
 *
 *      无论是 child_process 模块还是 cluster 模块，为了解决 Node.js 实例单线程运行，无法利用多核 CPU 的问题而出现的。
 *  核心就是父进程（即 master 进程）负责监听端口，接收到新的请求后将其分发给下面的 worker 进程
 *
 *  cluster的一个弊端
 *      luster内部隐时的构建TCP服务器的方式来说对使用者确实简单和透明了很多，但是这种方式无法像使用child_process那样灵活，
 *  因为一直主进程只能管理【一组相同的工作进程】，而自行通过child_process来创建工作进程，一个主进程可以控制【多组不同的工作进程】
 * 
 */ 