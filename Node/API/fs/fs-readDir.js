const fs = require('fs');

fs.readdir('./src/', function(err, files){
	files.map(function(name){

		// 读取src目录里面文件的信息
		fs.stat('./src/' + name, function(err, stats){
			var time = new Date(+stats.mtimeMs);
			console.log(`The last Mod time of ${name} is ${time.getFullYear()}-${1+time.getMonth()}-${time.getDay()}`);
		})
	})
})