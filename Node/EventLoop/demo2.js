// 第一轮 - 宏任务

const fs = require('fs')

fs.readFile('demo1.js', 
// 第四轮 - 宏任务
() => {
    console.log('readFile')

    // Todo - 为啥这里面 immediate 比 timout 更先输出 ？？
    setTimeout(() => {
        console.log('timeout')
    }, 0)
    setImmediate(() => {
        console.log('immediate')
    })
})

setTimeout(
    // 第二轮 - 宏任务
    () => {
    console.log('timeoutGlobal')
}, 0)
setImmediate(
    // 第三轮 - 宏任务
    () => {
    console.log('immediateGlobal')
})

// 前两者顺序不一定？
// timeoutGlobal
// immediateGlobal

// readFile
// 为啥 immediate 在前？
// immediate
// timeout

// setTimeout和setImmediate到底谁先执行 - https://www.cnblogs.com/dennisj/p/12550996.html