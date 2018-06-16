// 下面是一个例子,如果【指定时间内没有获得结果,就将Promise的状态变为reject】,否则变为resolve.
const p = Promise.race([
    fetch('http://127.0.0.1:8888/'),
    new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('request timeout')), 5000)
    })
]);
p.then(response => console.log(response));
p.catch(error => console.log(error));
// 上面代码中,如果5秒之内fetch方法无法返回结果,变量p的状态就会变为rejected,从而触发catch方法指定的回调函数.