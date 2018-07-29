// 统计当前所有的函数，谁耗时最长
function test() {
    alert(2);
}


// // 直接用会发现默认的函数会被执行2遍
// Function.prototype.before = function(callback) {
//     callback(); // 让回调函数先执行！
//     this.apply(this, arguments); // 然后再执行当前funciton实例
// }
// Function.prototype.after = function(callback) {
//     this.apply(this, arguments);  // 先执行本身的函数
//     callback();  // 再执行回调
// }
// test.before(function(){
// 	alert(1);
// });
// test.after(function(){
// 	alert(3);
// })

// 应该做到：
// before函数，能把callback和test一起送到after中去
// after函数，能把callback和test送到before中去

Function.prototype.before = function(callback) {
	var __self = this;
	return function(){
    	callback.apply(this, arguments); // 先执行callback    	
    	__self.apply(__self, arguments); // 再执行当前funciton实例
	}
}
Function.prototype.after = function(callback) {
	var __self = this;
	return function(){
    	__self.apply(__self, arguments); // 先执行当前funciton实例
    	callback.apply(this, arguments); // 再执行callback 
	}
}

// test.before(function(){
// 	console.log(this);
// 	// 这里this的指向要看执行的时候所处的上下文
// 	// 真正执行的时候是在after中的__self.apply(__self, arguments)这里
// 	// 所以this指向了before返回的函数！
// 	// 貌似突然明白了this的运行时作用域，对比箭头函数，也明白了词法作用域
// 	alert(1);
// }).after(function(){
// 	console.log(this); // 这里的this指向window
// 	alert(3);
// })();


test.after(function(){
	console.log(this); // 这里this指向after返回的函数
	alert(3);
}).before(function(){
	console.log(this); // 这里的this指向window 
	alert(1);
})();