/**
 * 完全不懂这文件在干啥...
 * 老师说happypack能帮助webpack在多线程进行编译, 在编译任务多的时候显现出优势
 */

const HappyWebpack = require('happypack');
const os = require('os');  // 这是node内置的, os 模块提供了一些操作系统相关的实用方法

// 线程池
const happyThreadPool = HappyWebpack.ThreadPool({
    size: os.cpus().length
})

// 为什么要导出一个数组呢？
module.exports = [
    new HappyWebpack({
        id: 'happyTS',
        threadPool: happyThreadPool, // 共享线程池
        verbose: true,
        loaders: [{
        	path: "ts-loader",
        	query: {
        		happyPackMode: true
        	}
        }]
    })
]