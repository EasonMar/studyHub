/**
 * 忽略具体的业务逻辑,
 * 主要学习：express是怎样提供http服务的
 */

const express = require('express');
const fs = require('fs'); // file system 模块
const game = require('./game.js');

// 注意：
// playerWon和sameActionCount相关的逻辑东一块、西一块，分散在各个功能块中.
// 后续利用express和koa的中间件会优化这一块, 做到功能的高内聚、低耦合！
let playerWon = 0;
let playerLastAction = null;
let sameActionCount = 0;

const app = express();

// 路由
app.get('/favicon.ico', function(req, res) {
	res.status(200);
});

app.get('/', function(req, res) {
	// res.send(fs.readFileSync(__dirname + '/index.html'));
	// res.send(fs.readFileSync(__dirname + '/index.html'), 'utf-8'); // 要制定返回的是utf-8, 否则会返回buffer而执行下载
	// utf-8 参数写错地方了, 要在 fs.readFileSync 里配置 --- API 不熟悉导致
	res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8')); // 要制定返回的是utf-8, 否则会返回buffer而执行下载
});

app.get('/game', function(req, res) {
	// 判断玩家赢了多少局
	if (playerWon >= 3) {
		res.status(500).send('不和你玩了!');
		return;
	}

	// 判断玩家连续出相同的拳
	if (sameActionCount >= 2) {
		res.status(400).send('你作弊, 不玩了');
		playerWon = 4; // 发现作弊之后, 电脑方就不和玩家玩了, 需要制造条件让其卡在第一个判断里
		return;
	}

	const playerAction = req.query.action;
	const gameResult = game(playerAction);
	// 返回猜拳结果
	switch (gameResult) {
		case 0:
			res.send('平局');
			break;
		case 1:
			res.send('你赢了');
			res.playerWon = true;
			break;
		case -1:
			res.send('你输了');
			break;
		default:
			res.send('咦，刚刚发生了什么');
	}

	// 统计玩家出连续相同的拳
	if (playerAction == playerLastAction) {
		sameActionCount++;
	} else {
		sameActionCount = 0;
		playerLastAction = playerAction;
	}
});

app.listen(3000);
