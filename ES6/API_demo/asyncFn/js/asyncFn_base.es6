document.getElementsByTagName('body')[0].innerHTML = `<p style="font-size: 90px;margin: 50% 0 0;font-weight: bold;text-align: center;" id="note">1.Base</p>
`;


/**
 * 1.含义
 * async 函数是什么？一句话,它就是 Generator 函数的语法糖.
 */
function example(){
	// 前文有一个 Generator 函数,依次读取两个文件.
	var fs = require('fs');

	var readFile = function(fileName) {
	    return new Promise(function(resolve, reject) {
	        fs.readFile(fileName, function(error, data) {
	            if (error) return reject(error);
	            resolve(data);
	        });
	    });
	};

	var gen = function*() {
	    var f1 = yield readFile('/etc/fstab');  // 第一个yield可以通过第二个next的参数来赋值.
	    var f2 = yield readFile('/etc/shells'); // 因为next传递的参数就是前一个yield的值.
	    console.log(f1.toString());  // 而且gen需要使用next来执行(或自动执行模块)
	    console.log(f2.toString());
	};

	// gen 写成async函数,就是下面这样.
	var asyncReadFile = async function() {
	    var f1 = await readFile('/etc/fstab');  // await的值就是Promise对象resolve(data)回调函数-参数的值.
	    var f2 = await readFile('/etc/shells');
	    console.log(f1.toString());
	    console.log(f2.toString());
	};
}


/***********************************************************************
 * 一比较就会发现,async函数就是将 Generator 函数的星号(*)替换成async,将yield替换成await,仅此而已.
 *
 * async函数对 Generator 函数的改进,体现在以下四点. 
 * 
 * (1)内置执行器. 
 * Generator 函数的执行必须靠执行器,所以才有了co模块,而async函数自带执行器.
 * 也就是说,async函数的执行,与普通函数一模一样,只要一行.
 * 
 *  asyncReadFile();
 *  
 * 上面的代码调用了asyncReadFile函数,然后它就会自动执行,输出最后结果.
 * 这完全不像 Generator 函数,需要调用next方法,或者用co模块,才能真正执行,得到最后结果. 
 * 
 * (2)更好的语义. 
 * async和await,比起星号和yield,语义更清楚了.async表示函数里有异步操作,await表示紧跟在后面的表达式需要等待结果. 
 * 
 * (3)更广的适用性.
 * co模块约定,yield命令后面只能是 Thunk 函数或 Promise 对象,
 * 而async函数的await命令后面,可以是Promise 对象和原始类型的值(数值、字符串和布尔值,但这时等同于同步操作). 
 * 
 * (4)返回值是 Promise.
 * async函数的返回值是 Promise 对象,这比 Generator 函数的返回值是 Iterator 对象方便多了.
 * 你可以用then方法指定下一步的操作. 
 * 
 * 进一步说,async函数完全可以看作多个异步操作,包装成的一个 Promise 对象,
 * 而await命令就是内部then命令的语法糖.
 * *********************************************************************
 */

/***********************************************************************
 * 2.基本用法
 *
 * async函数返回一个 Promise 对象,可以使用then方法添加回调函数.
 * 当函数执行的时候,一旦遇到await就会先返回,等到异步操作完成,再接着执行函数体内后面的语句.
 *
 * 下面是一个例子.
 */
function example2()	{
	async function getStockPriceByName(name) {
	    var symbol = await getStockSymbol(name);
	    var stockPrice = await getStockPrice(symbol);
	    return stockPrice;
	}

	getStockPriceByName('goog').then(function(result) {
	    console.log(result);
	});
}

/**
 * 上面代码是一个获取股票报价的函数,函数前面的async关键字,表明该函数内部有异步操作.
 * 调用该函数时,会立即返回一个Promise对象.
 *
 * 下面是另一个例子,指定多少毫秒后输出一个值.
 */
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 1000);
// 上面代码指定1秒以后,输出hello world.