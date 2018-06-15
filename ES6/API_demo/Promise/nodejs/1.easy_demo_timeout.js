function timeout(ms) {
    return new Promise((resolve, reject) => {
        // 这里setTimeout就是异步操作.
        setTimeout(resolve, ms, 'done');
        // 这个done怎么理解啊...是怎么传给resolve的? --- 知识盲点
    });
}
timeout(1000).then((value) => {
    console.log(value);
});


// =================================================================
// test：setTimeout - 传参！！
setTimeout(function(v) { console.log(v) }, 2000, 'transmitParam');
/*
    setTimeout传参的写法：
    setTimeout(fun[,delay,param1,param2,...])
*/