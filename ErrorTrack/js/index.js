// 可以绑定多次
window.addEventListener('error', function(e) {
	console.log(1);
	console.log(e);
});


window.addEventListener('error', function(e){
	console.log(2);
	console.log(e);
})