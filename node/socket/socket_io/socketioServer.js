var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//登陆 => 把在线人数缓存起来
//人物 => 角色ID，名称，坐标
//进入游戏后 => 初始化人物(坐标)
//在地图上点击可以移动人物，其它客户端也能看到该人物的坐标发生改变

var onlinePersons = {};


io.on('connection', function(socket){
	console.log('有新用户上线');

	//用来接收客户端人物登录的信息
	socket.on('clientLogin', function(_person){
		var personObj = JSON.parse(_person);
		//{10001: {id: 10001, nickname:'', x: 0, y: 0}}
		if(!onlinePersons[personObj.id]){
			onlinePersons[personObj.id] = personObj;
		}
		console.log(_person);
		io.emit('clientTips', JSON.stringify(onlinePersons));
	})

	socket.on('changePosition', function(_person){
		var personObj = JSON.parse(_person);
		onlinePersons[personObj.id] = personObj;
		io.emit('clientMove', _person);
	})

})

http.listen(88);