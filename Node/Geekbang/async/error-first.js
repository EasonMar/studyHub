/**
 * try catch只能抓到一个调用堆栈内、即一个事件循环内的错误
 * 以下方式是行不通的
 */
try {
	interview(function(res) {
		console.log(res + ' smile');
	});
} catch (e) {
	console.log('cry');
}

function interview(callback) {
	setTimeout(() => {
		if (Math.random() > 0.2) {
			callback('success');
		} else {
			throw new Error('fail');
		}
	}, 500);
}

// 正确的方式 --- 为了方便识别是否有error, 默认将错误信息放到第一个参数！
interviewYeah(function(err, res) {
	if (err) {
		console.log('cry');
		return;
	}
	console.log('smile');
});

function interviewYeah(callback) {
	setTimeout(() => {
		if (Math.random() > 0.2) {
			callback(null, 'success');
		} else {
			callback(new Error('fail'));
		}
	}, 500);
}
