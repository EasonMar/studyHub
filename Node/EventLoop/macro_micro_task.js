// https://juejin.cn/post/7073099307510923295
/**
 * 1. 微任务队列中process.nextTick都有更高优先级，即使它后进入微任务队列，也会先打印微任务nextTick再微任务promise1;
 * 2. 宏任务setTimeout比setImmediate优先级更高，宏任务2(setImmediate)是三个宏任务中最后打印的；
 * 3. 在node11.x之前，微任务队列要等当前优先级的所有宏任务先执行完，在两个setTimeout之后才打印微任务promise2；在node11.x之后，微任务队列只用等当前这一个宏任务先执行完。
 */
console.log('Script开始')
setTimeout(() => {
    console.log('宏任务1-(setTimeout)')
    Promise.resolve().then(() => {
        console.log('微任务-promise2')
    })
}, 0)
setImmediate(() => {
    console.log('宏任务2-(setImmediate)')
})
setTimeout(() => {
    console.log('宏任务3-(setTimeout)')
}, 0)
console.log('Script结束')
Promise.resolve().then(() => {
    console.log('微任务-promise1')
})
process.nextTick(() => {
    console.log('微任务-nextTick')
})

/**
 * --- result in Node V12.22.6 ---
 * Script开始
 * Script结束
 * 微任务-nextTick
 * 微任务-promise1
 * 宏任务1-(setTimeout)
 * 微任务-promise2
 * 宏任务3-(setTimeout)
 * 宏任务2-(setImmediate)
 * 
 * --- result in Node V10.14.1 ---
 * Script开始
 * Script结束
 * 微任务-nextTick
 * 微任务-promise1
 * 宏任务1-(setTimeout)
 * 宏任务3-(setTimeout)
 * 微任务-promise2
 * 宏任务2-(setImmediate)
 */

/**
 * 事件循环中的任务被分为宏任务和微任务，是为了给高优先级任务一个插队的机会：微任务比宏任务有更高优先级。
 * node端的事件循环比浏览器更复杂，它的宏任务分为六个优先级，微任务分为两个优先级。
 * node端的执行规律是一个宏任务队列搭配一个微任务队列，而浏览器是一个单独的宏任务搭配一个微任务队列。
 * 但是在node11之后，node和浏览器的规律趋同。
 */ 