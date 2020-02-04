/**
 * 忽略具体的业务逻辑,
 * 主要学习：express的中间件是怎么用的
 * 1. 可将逻辑拆分成多个中间件, 通过next级联下去
 * 2. 同步代码下可通过next支持洋葱模型
 */

const express = require('express');
const fs = require('fs'); // file system 模块
const game = require('./game.js');

// 全局变量还是要的……
let playerWon = 0;
let playerLastAction = null;
let sameActionCount = 0;

const app = express();

// 路由
app.get('/favicon.ico', function(req, res) {
	res.status(200);
});

app.get('/', function(req, res) {
	res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8')); // 要制定返回的是utf-8, 否则会返回buffer而执行下载
});

// 在比较复杂的逻辑中，使用中间件整合业务代码，做到高内聚、低耦合
app.get(
	'/game',
	function(req, res, next) {
		// 判断玩家赢了多少局
		if (playerWon >= 3) {
			res.status(500).send('不和你玩了!');
			return;
		}

		next();

		// 将相同业务逻辑的代码放到一个中间件里面, next之后的代码会在执行完后面的中间件之后返回来
		if (res.playerWon) {
			playerWon++;
		}
	},
	function(req, res, next) {
		// 判断玩家连续出相同的拳
		if (sameActionCount >= 2) {
			res.status(400).send('你作弊, 不玩了');
			playerWon = 4; // 发现作弊之后, 电脑方就不和玩家玩了, 需要制造条件让其卡在第一个判断里
			return;
		}

		next();

		// 将相同业务逻辑的代码放到一个中间件里面, next之后的代码会在执行完后面的中间件之后返回来
		// 统计玩家出连续相同的拳
		const playerAction = res.playerAction; // 获取传过来的playerAction
		if (playerAction == playerLastAction) {
			sameActionCount++;
		} else {
			sameActionCount = 0;
			playerLastAction = playerAction;
		}
	},
	function(req, res) {
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
		res.playerAction = playerAction; // playerAction为局部变量, 需要传递
	},
);

app.listen(3000);
