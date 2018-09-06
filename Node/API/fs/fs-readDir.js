const fs = require('fs');
let data = {};
fs.readdir('./src/', function(err, files){
	files.map(function(name){

		// // 读取src目录里面文件的信息
		// fs.stat('./src/' + name, function(err, stats){
		// 	var time = new Date(+stats.mtimeMs);
		// 	console.log(`The last Mod time of ${name} is ${time.getFullYear()}-${1+time.getMonth()}-${time.getDay()}`);
		// })

		let stat = fs.statSync('./src/' + name);
		var head_code = name.match(/^head_(.+)\..+$/);
		if(head_code){
			data[head_code[1]] = new Date(stat.mtimeMs).toLocaleDateString();
		}
	})
	console.log(data);
	fs.writeFileSync('./dist/data.json', JSON.stringify(data));
})