// 统计当前所有的函数，谁耗时最长
function test() {
    alert(2);
}

// 给Function原型链里挂载一个before函数
Function.prototype.before = function(callback) {
    callback(); // 让回调函数先执行！
    this.apply(this, arguments); // 然后再执行当前funciton实例
    return 'return from before'; // 这里return东西，才能在下面的调用中获取到
}

test.before(function(){
	alert(1);
	// 如果这里return一个东西，外面拿不到，因为实际s上是callback返回东西，而最外层是before在调用
	return 'return from callback';
})