const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    // // child_process.exec
    // var workerProcess = child_process.exec('node support.js ' + i, function (error, stdout, stderr) {
    //     if (error) {
    //         console.log(error.stack);
    //         console.log('Error code: ' + error.code);
    //         console.log('Signal received: ' + error.signal);
    //     }
    //     console.log('stdout: ' + stdout);
    //     console.log('stderr: ' + stderr);
    // });


    // // child_process.spawn
    // // spawn() 方法返回流 (stdout & stderr)，在进程返回大量数据时使用。进程一旦开始执行时 spawn() 就开始接收响应
    // var workerProcess = child_process.spawn('node', ['support.js', i]);
    // workerProcess.stdout.on('data', function (data) {
    //     console.log('stdout: ' + data);
    // });
    // workerProcess.stderr.on('data', function (data) {
    //     console.log('stderr: ' + data);
    // });


    // fork() 返回的对象除了拥有ChildProcess实例的所有方法，还有一个内建的通信信道。
    var workerProcess = child_process.fork("support.js", [i]);

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}