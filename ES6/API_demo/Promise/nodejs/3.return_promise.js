// =================================================================
// resolve函数的参数除了正常的值以外,还可能是另一个Promise实例,表示异步操作的结果有可能是一个值,
// 也有可能是另一个异步操作,比如像下面这样.

// var p1 = new Promise(function(resolve, reject) {// ... });
// var p2 = new Promise(function(resolve, reject) {
//     // ...
//     resolve(p1);
// })

// 上面代码中,p1和p2都是Promise的实例,但是p2的resolve方法将p1作为参数,即一个异步操作的结果是返回另一个异步操作.
// 注意,【这时p1的状态就会传递给p2,也就是说,p1的状态决定了p2的状态.】

// 如果p1的状态是Pending,那么p2的回调函数就会等待p1的状态改变;
// 如果p1的状态已经是Resolved或者Rejected,那么p2的回调函数将会立刻执行.

var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
});

p2.then(result => console.log(result)).catch(error => console.log(error)); // Error: fail

// 上面代码中,p1是一个Promise,3 秒之后变为rejected.
// p2的状态在1秒之后改变,resolve方法返回的是p1.

// 由于p2返回的是另一个 Promise,导致p2自己的状态无效了,由p1的状态决定p2的状态.
// 所以,后面的then语句都变成针对后者(p1).

// 又过了2秒,p1变为rejected,导致触发catch方法指定的回调函数.
// 注意,调用resolve或reject并不会终结 Promise 的"参数函数"的执行.【mark】？

var p3 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('fail-1')), 3000)
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(p3), 4000)
    // 如果p2时间比p1长,那么p1抛出的错误,没有对应的错误处理的回调函数(then or catch)进行接收,
    // 导致报出内部错误. --> 见p3、p4
    // Uncaught (in promise) Error: fail
    // 教程有讲：如果不设置回调函数,Promise内部抛出的错误,不会反应到外部.
});

p4.then(result => console.log(result)).catch(error => console.log(error)); // Error: fail