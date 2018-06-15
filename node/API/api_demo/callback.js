const fs = require('fs'); // fs = file stream

// // 阻塞式代码
// let data = fs.readFileSync('./file/data.txt');
// // console.log(data) // data是以十六进制的数据来进行保存的
// console.log(data.toString()) // 加.toString之后,就会把data内容数据转化为字符串


// 非阻塞代码 - 后面的回调函数(匿名函数)告诉readFile在读取完毕时要做什么
// 所以非阻塞式代码必须要通过回电函数来实现,才知道异步程序处理完之后要干啥
fs.readFile('./file/data.txt',function(err, data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
});


console.log('代码已经执行完毕.')