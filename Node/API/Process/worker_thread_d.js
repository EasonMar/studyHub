const {
    isMainThread,
    parentPort,
    workerData,
    threadId,
    // MessageChannel,
    // MessagePort,
    Worker
} = require('worker_threads');

function mainThread() {
    for (let i = 0; i < 5; i++) {
        // The Worker class represents an independent JavaScript execution thread
        /**
         * new Worker(filename[, options])
         * - filename <string> | <URL> The path to the Worker’s main script or module. Must be either an absolute path or a relative path, or a WHATWG URL object using file: protocol
         * - options 
         *   - workerData <any> Any JavaScript value that will be cloned and made available as require('worker_threads').workerData
         */
        const worker = new Worker(__filename, { workerData: i });

        // The 'exit' event is emitted once the worker has stopped. 
        // If the worker exited by calling process.exit(), the exitCode parameter will be the passed exit code. 
        // If the worker was terminated, the exitCode parameter will be 1.
        // This is the final event emitted by any Worker instance.
        worker.on('exit', code => { console.log(`main: worker stopped with exit code ${code}`); });

        // The 'message' event is emitted for any incoming message, containing the cloned input of port.postMessage().
        // Listeners on this event will receive a clone of the value parameter as passed to postMessage() and no further arguments.
        worker.on('message', ({ workerData, threadId }) => {
            console.log(`main: receive ${workerData} from work ${threadId}`);

            // Send a message to the worker that will be received via require('worker_threads').parentPort.on('message')
            worker.postMessage(workerData + 1);
            // ==== parentPort & MessagePort =====
            // If this thread was spawned as a Worker, this will be a MessagePort allowing communication with the parent thread. 
            // Messages sent using parentPort.postMessage() will be available in the parent thread using worker.on('message'), 
            // and messages sent from the parent thread using worker.postMessage() will be available in this thread using parentPort.on('message').
        });
    }
}

function workerThread() {
    console.log(`work thread_id :${threadId}`)
    console.log(`worker: get workerDate of ${workerData}`);

    // Messages sent from the parent thread using worker.postMessage() will be available in this thread using parentPort.on('message').
    parentPort.on('message', msg => {
        console.log(`worker: receive ${msg} from parent`);
    });
    // Messages sent using parentPort.postMessage() will be available in the parent thread using worker.on('message')
    parentPort.postMessage({ workerData, threadId });
}

if (isMainThread) {
    mainThread();
} else {
    workerThread();
}

/**
 * 核心模块简介
 * - isMainThread: 是否是主线程，源码中是通过 threadId === 0 进行判断的
 * - MessagePort: 用于线程之间的通信，继承自 EventEmitter
 * - MessageChannel: 用于创建异步、双向通信的通道实例
 * - threadId: 线程 ID
 * - Worker: 用于在主线程中创建子线程。第一个参数为 filename，表示子线程执行的入口
 * - parentPort: 在 worker 线程里是表示父进程的 MessagePort 类型的对象，在主线程里为 null
 * - workerData: 用于在主进程中向子进程传递数据（data 副本）
 */ 