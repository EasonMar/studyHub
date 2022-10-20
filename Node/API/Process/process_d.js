// Node.js 中的进程 Process 是一个全局对象，无需 require 直接使用，给我们提供了当前进程中的相关信息
/**
 * 部分常用API
 * - process.env：环境变量，例如通过  process.env.NODE_ENV 获取不同环境项目配置信息
 * - process.nextTick(callback[, ...args])：这个在谈及 Event Loop 时经常为会提到
 * - process.pid：获取当前进程id
 * - process.ppid：当前进程对应的父进程
 * - process.cwd()：获取当前进程工作目录，
 * - process.platform：获取当前进程运行的操作系统平台
 * - process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
 * - 进程事件：process.on(‘uncaughtException’, cb) 捕获异常信息、process.on(‘exit’, cb）进程推出监听
 * - 三个标准流：process.stdout 标准输出、process.stdin 标准输入、process.stderr 标准错误输出
 * - process.title 指定进程名称，有的时候需要给进程指定一个名称
 * 
 * 常用事件
 * - process.on('message', handler) - 
 * If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation), 
 * the 'message' event is emitted whenever a message sent by a parent process using childprocess.send() is received by the child process.
 * 
 * IPC（Inter-Process Communication，进程间通信）
 */ 