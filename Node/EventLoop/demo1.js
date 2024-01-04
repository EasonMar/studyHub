// 第一轮 - 宏任务

setTimeout(
    // 第二轮 - 宏任务
    () => {
    console.log('timer1')

    Promise.resolve().then(
        // 第二轮 - 微任务
        function() {
        console.log('promise1')
    })
}, 0)

setTimeout(
    // 第三轮 - 宏任务
    () => {
    console.log('timer2')

    Promise.resolve().then(
        // 第三轮 - 微任务
        function() {
        console.log('promise2')
    })
}, 0)