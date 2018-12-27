+function a(){
	[1,2,3,4].forEach(function(a,b){
		if(a==2){
			try {
			    throw ("The IP address is not normal! >> ");
			} catch (e) {
			    console.warn(e);
			    return false; // 跳过当次处理 相当于 continue
			}
		}
		console.log(a);
	})
}();