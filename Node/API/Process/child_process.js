/**
 * Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能
 * Node 提供了 child_process 模块来创建子进程，方法有：
 * --- exec - child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回
 *     --- child_process.exec(command[, options], callback)
 *     --- 适用于小量数据，maxBuffer 默认值为 200 * 1024 超出这个默认值将会导致程序崩溃
 * 
 * --- execFile - child_process.execFile()：类似 child_process.exec()，区别是不能通过 shell 来执行，不支持像 I/O 重定向和文件查找这样的行为
 *     --- child_process.execFile(file[, args][, options][, callback])
 * 
 * --- spawn - child_process.spawn 使用指定的命令行参数创建新进程
 *     --- child_process.spawn(command[, args][, options])
 *     --- 适用于返回大量数据，例如图像处理，二进制数据处理
 * 
 * --- fork - child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。
 *     与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信(IPC)
 *     --- child_process.fork(modulePath[, args][, options])
 *     --- 衍生新的进程，进程之间是相互独立的，每个进程都有自己的 V8 实例、内存，系统资源是有限的，不建议衍生太多的子进程出来，通长根据系统'CPU核心数'设置
 * 
 * IPC（Inter-Process Communication，进程间通信）
 * 
 * demo：master.js 与 support.js
 * 
 * 应用场景：https://juejin.cn/post/6844903908385488903
 */



/**
 * 子进程实例方法
 * subprocess.send(message[, sendHandle[, options]][, callback]) 
 * When an IPC channel has been established between the parent and child ( i.e. when using child_process.fork()), the subprocess.send() method can be used to send messages to the child process. 
 * When the child process is a Node.js instance, these messages can be received via the 'message' event.
 * 
 * subprocess.kill(signal <number> | <string>) => boolean
 * The subprocess.kill() method sends a signal to the child process. If no argument is given, the process will be sent the 'SIGTERM' signal. 
 * See signal(7) for a list of available signals. This function returns true if kill(2) succeeds, and false otherwise.
 * 
 * 
 * 
 * 子进程实例事件
 * subprocess.on('message', handler)
 * 当一个子进程模块内使用 process.send() 发送消息时会触发主进程中子进程实例注册的 'message' 事件
 * 
 * subprocess.on('exit', (code, signal) => {})
 * The 'exit' event is emitted after the child process ends. If the process exited, code is the final exit code of the process, otherwise null. 
 * If the process terminated due to receipt of a signal, signal is the string name of the signal, otherwise null. One of the two will always be non-null.
 * 
 * subprocess.on('close', (code, signal) => {})
 * The 'close' event is emitted when the stdio streams of a child process have been closed. 
 * This is distinct from the 'exit' event, since multiple processes might share the same stdio streams.
 */ 