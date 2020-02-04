/**
 * 忽略具体的业务逻辑,
 * 主要学习：express中间件的缺陷 --- 不支持异步的洋葱模型
 */

const express = require('express');
const fs = require('fs'); // file system 模块
const game = require('./game.js');

let playerWon = 0;
let playerLastAction = null;
let sameActionCount = 0;

const app = express();

app.get('/favicon.ico', function(req, res) {
	res.status(200);
});

app.get('/', function(req, res) {
	res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
});

// express的中间件是一个普通函数, 它执行next的过程是一个阻塞的过程
// 如果中间件执行的过程中碰到异步函数, 就可能产生错误:
app.get(
	'/game',
	function(req, res, next) {
		if (playerWon >= 3) {
			res.status(500).send('不和你玩了!');
			return;
		}

		next();

		// 这里的判断逻辑, 会在当前的事件循环中执行完毕
		// 结合异步函数的执行机制, 可知这里获取不到真实的res.playerWon
		if (res.playerWon) {
			playerWon++;
		}
	},
	function(req, res, next) {
		if (sameActionCount >= 2) {
			res.status(400).send('你作弊, 不玩了');
			playerWon = 4;
			return;
		}

		next();

		const playerAction = res.playerAction;
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

		// 而异步函数中的回调函数, 会放在下一个事件循环, 新起一个调用栈执行
		setTimeout(function() {
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
		}, 500);

		res.playerAction = playerAction;
	},
);

app.listen(3000);
