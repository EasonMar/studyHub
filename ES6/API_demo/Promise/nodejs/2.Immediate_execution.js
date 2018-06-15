// Promise 新建后就会立即执行 (因为是构造函数嘛).
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});
promise.then(function() {
    console.log('Resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// Resolved

// 上面代码中,Promise 新建后立即执行,所以首先输出的是Promise.
// 然后,【then方法】指定的回调函数,【将在当前脚本所有"同步任务"执行完才会执行】【mark】,所以Resolved最后输出.