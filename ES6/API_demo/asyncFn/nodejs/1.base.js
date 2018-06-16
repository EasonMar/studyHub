
// 前文有一个 Generator 函数,依次读取两个文件.
const fs = require('fs');

// 需要包裹一层promise
let readFile = function (fileName) {
	return new Promise(function (resolve, reject) {
		fs.readFile(fileName, function (error, data) {
			if (error) return reject(error);
			resolve(data);
		});
	});
};
// 怎么用Promise.resolve来创建Promise呢？


let gen = function* () {
	let f1 = yield readFile('../test/t1.txt');  // 第一个yield可以通过第二个next的参数来赋值.
	console.log(f1);
	let f2 = yield readFile('../test/t2.txt');  // 因为next传递的参数就是前一个yield的值.
	// console.log(f1.toString());  // 而且gen需要使用next来执行(或自动执行模块)
	// console.log(f2.toString());
	console.log(f2);
};

// 擦，Generator究竟怎么用的，鬼去理它。
// let excuteGen = gen();
// excuteGen.next();
// excuteGen.next();
// excuteGen.next();


// gen 写成async函数,就是下面这样.
let asyncReadFile = async function () {
	let f1 = await readFile('../test/t1.txt');  // await的值就是Promise对象resolve(data)回调函数-参数的值.
	let f2 = await readFile('../test/t2.txt');
	console.log('================================');
	console.log('================================');
	console.log(f1.toString());
	console.log('================================');
	console.log('================================');
	console.log(f2.toString());
	console.log('================================');
	console.log('================================');
};

asyncReadFile();

/**
 * 下面是另一个例子,指定多少毫秒后输出一个值.
 */
function timeout(ms) {				   // normal function
	return new Promise((resolve) => {  // return Promise
		setTimeout(resolve, ms);
	});
}

async function asyncPrint(value, ms) {
	await timeout(ms);
	console.log(value);
}
asyncPrint('hello world', 1000);
// 上面代码指定1秒以后,输出hello world.

// 由于async函数返回的是 Promise 对象，可以作为await命令的参数。所以，上面的例子也可以写成下面的形式。
async function timeout2(ms) {		  // async
	await new Promise((resolve) => {  // await Promise
		setTimeout(resolve, ms);
	});
}
async function asyncPrint2(value, ms) {
	await timeout2(ms);
	console.log(value);
}
asyncPrint2('hello world new style', 1000);