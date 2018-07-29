// 统计当前所有的函数，谁耗时最长
function test() {
    alert(2);
    return 'test message'
}

Function.prototype.before = function(callback) {
	var __self = this;
	return function(){
		// 添加更多判断操作
    	if(callback.apply(this, arguments) == false){
    		return false
    	} 

    	// 把"当前"函数的执行结果送出去
    	return __self.apply(__self, arguments)
	}
}
Function.prototype.after = function(callback) {
	var __self = this;
	return function(){
		var result = __self.apply(__self, arguments); // 先执行当前funciton实例
		if(result == false){
			return false
		}

    	callback.apply(this, arguments); // 再执行callback 

    	// 把result送出去
    	return result;
	}
}

test.after(function(){
	alert(3);
}).before(function(){
	alert(1);
	// return false;
})();

/**
 * 这里传送 test message的过程
 */