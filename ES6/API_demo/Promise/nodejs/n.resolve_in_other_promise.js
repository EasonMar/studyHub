let getMobile = () => {
	console.log('getMobile started~!')
	return new Promise((resolve,reject)=>{
		getSign().then(()=>{
			console.log('getSign Resolved');
			getTokenInfo(()=>{
				console.log('getTokenInfo Done');
				getPhone().then(()=>{
					console.log('getPhone Resolved');
					resolve();
				})
			})
		})
	})
}

let getSign = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log('111--->getSign'),
			resolve()
		}, 1000);
	})
}

let getTokenInfo = (cb) => {
	setTimeout(()=>{
		console.log('222--->getTokenInfo');
		cb && cb();
	}, 1000);
}

let getPhone = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log('333--->getPhone')
			resolve();
		},1000)
	})
}

getMobile().then(()=>{
	console.log('go go~！getMobile Done')
});