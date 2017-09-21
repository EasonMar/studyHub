setTimeout(function() {
    console.log('three');
}, 0);
Promise.resolve().then(function() {
    console.log('two');
});
console.log('one');
// one
// two
// three

// 【最强解析】
// 上面代码中, setTimeout(fn, 0) 在下一轮"事件循环" 开始时执行, 
// Promise.resolve() 在本轮"事件循环" 结束时执行, 
// console.log('one') 则是立即执行, 因此最先输出.
// 另外：【then方法】指定的回调函数,【将在当前脚本所有"同步任务"执行完才会执行】 --- 其实就是本轮结束时.