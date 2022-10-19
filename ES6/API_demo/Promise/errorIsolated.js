// 这样声明可以 隔离 基于第一个业务成功之后的其他异步业务 的报错
// 三个异步业务, A -->  B\C
// 其中业务 B、C 能否执行 取决于业务A能否成功 --- 
// 三个catch 可以判断 哪个业务报错
// 当业务A报错, 全体报错
// 当业务A成功, 业务B、C 独立报错

// 业务A
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        const succ = true;
        const exe = succ ? res : rej;
        const msg = succ ? "A Done" : "Error";
        exe(msg);
    }, 2000); A
});
promise.catch(console.error.bind(console, "A Error"));

promise
    .then((res) => {
        // 业务B
        const succ = false;
        return succ ? Promise.resolve(res + ' and B Done') : Promise.reject('Error');
    })
    .then(console.log)
    .catch(console.error.bind(console, "B Error"));

promise
    .then((res) => {
        // 业务C
        const succ = true;
        return succ ? Promise.resolve(res + ' and C Done') : Promise.reject('Error');
    })
    .then(console.log)
    .catch(console.error.bind(console, "C Error"));
