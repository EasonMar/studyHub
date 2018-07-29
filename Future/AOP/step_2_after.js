// 统计当前所有的函数，谁耗时最长
function test() {
    alert(2);
}

// 给Function原型链里挂载一个after函数
Function.prototype.after = function(callback) {
    this.apply(this, arguments);  // 先执行本身的函数
    callback();  // 再执行回调
}

test.after(function(){
	alert(3);
})
