// https://mp.weixin.qq.com/s/m3a6vjp8-c9a2EYj0cDMmg

// demo02
// 第一轮-宏任务
console.log('golb1');

setTimeout(
    // 第二轮-宏任务
    function() {
    console.log('timeout1');
    process.nextTick(
        // 第二轮-微任务
        function() {
        console.log('timeout1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(
        // 第二轮-微任务
        function() {
        console.log('timeout1_then')
    })
})

setImmediate(
    // 第四轮-宏任务
    function() {
    console.log('immediate1');
    process.nextTick(
        // 第四轮-微任务
        function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(
        // 第四轮-微任务
        function() {
        console.log('immediate1_then')
    })
})


process.nextTick(
    // 第一轮-微任务
    function() {
    console.log('glob1_nextTick');
})
new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(
    // 第一轮-微任务
    function() {
    console.log('glob1_then')
})

setTimeout(function() {
    // 第三轮-宏任务
    console.log('timeout2');
    process.nextTick(
        // 第三轮-微任务
        function() {
        console.log('timeout2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(
        // 第三轮-微任务
        function() {
        console.log('timeout2_then')
    })
})

process.nextTick(
    // 第一轮-微任务
    function() {
    console.log('glob2_nextTick');
})
new Promise(function(resolve) {
    console.log('glob2_promise');
    resolve();
}).then(
    // 第一轮-微任务
    function() {
    console.log('glob2_then')
})

setImmediate(
    // 第五轮-宏任务
    function() {
    console.log('immediate2');
    process.nextTick(
        // 第五轮-微任务
        function() {
        console.log('immediate2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(
        // 第五轮-微任务
        function() {
        console.log('immediate2_then')
    })
})


// 在node11.x之前，微任务队列要等【当前优先级的】所有宏任务先执行完才执行；在node11.x之后，微任务队列在当前这一个宏任务先执行完就马上执行。

// 【重要提示】
// 一个线程中，事件循环是唯一的，但是任务队列可以拥有多个
// 任务队列又分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被分别称为task与jobs
// macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
// micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)
// setTimeout/Promise等我们称之为任务源，来自不同任务源的任务会进入到不同的任务队列
// 宏任务中 setTimeout 比 setImmediate 优先级更高, 即setImmediate的任务队列会在setTimeout队列的后面执行
// 微任务中 process.nextTick 有更高优先级, 即使后进入队列也会先执行

// 第一轮-宏任务
// golb1
// glob1_promise 
// glob2_promise 
// 第一轮-微任务
// glob1_nextTick
// glob2_nextTick
// glob1_then
// glob2_then

// 第二轮-宏任务
// timeout1
// timeout1_promise
// 第二轮-微任务
// timeout1_nextTick
// timeout1_then

// 第三轮-宏任务
// timeout2
// timeout2_promise
// 第三轮-微任务
// timeout2_nextTick
// timeout2_then

// 第四轮-宏任务
// immediate1
// immediate1_promise
// 第四轮-微任务
// immediate1_nextTick
// immediate1_then

// 第五轮-宏任务
// immediate2
// immediate2_promise
// 第五轮-微任务
// immediate2_nextTick
// immediate2_then