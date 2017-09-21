// 基础用法：一个Promise对象的简单例子.============================
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}
timeout(1000).then((value) => {
    console.log(value);
});


//【catch方法之中, 还能再抛出错误】============================
var someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错,因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function() {
    return someOtherAsyncThing();
}).catch(function(error) {
    console.log('oh no', error);
    // catch方法回调函数报错：y没有声明
    y + 2;
    // Uncaught (in promise) ReferenceError: y is not defined
}).then(function() {
    console.log('carry on');
    // oh no [ReferenceError: x is not defined]
});

// 第二种写法：第二个catch方法用来捕获前一个catch方法抛出的错误
someAsyncThing().then(function() {
    return someOtherAsyncThing();
}).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错,因为y没有声明
    y + 2;
}).catch(function(error) {
    console.log('carry on', error);
});


// Promise.resolve(),其参数分成四种情况 ============================
// 1_参数是一个Promise实例
// 如果参数是Promise实例,那么Promise.resolve将不做任何修改、原封不动地返回这个实例.

// 2_参数是一个【thenable对象】
// thenable对象指的是【具有then方法的对象】,比如下面这个对象:
// Promise.resolve方法会将这个对象转为Promise对象,然后就【立即执行thenable对象的then方法】.
// than方法里面的内容决定Promise的状态变化.
let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
    console.log(value); // 42
});

// 3_参数不是具有then方法的对象,或根本就不是对象
// 如果参数是一个原始值,或者是一个不具有then方法的对象,
// 则Promise.resolve方法返回一个新的Promise对象,【状态为Resolved】--- 已确定状态.
var p2 = Promise.resolve('Hello');
p2.then(function(s) {
    console.log(s)  // 等于对已确定状态的Promise执行then方法,马上就得到了结果.
    // API：如果改变已经发生了,你再对Promise对象添加回调函数,也会立即得到这个结果.
    // 返回Promise实例的状态从一生成就是Resolved,所以【回调函数会立即执行】
	// 【Promise.resolve方法的参数,会同时传给回调函数】.
});