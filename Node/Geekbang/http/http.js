/**
 * 忽略具体的业务逻辑,
 * 主要学习、熟悉：node的内置模块是怎样提供http服务的
 */

const http = require('http');
const fs = require('fs'); // file system 模块
const url = require('url');
const qs = require('querystring');
const game = require('./game.js');

// 注意：
// playerWon和sameActionCount相关的逻辑东一块、西一块，分散在各个功能块中.
// 后续利用express和koa的中间件会优化这一块, 做到功能的高内聚、低耦合！
let playerWon = 0;
let playerLastAction = null;
let sameActionCount = 0;

http.createServer(function(req, res) {
	/**
		Url {
			protocol: null,
			slashes: null,
			auth: null,
			host: null,
			port: null,
			hostname: null,
			hash: null,
			search: '?action=rock',
			query: 'action=rock',
			pathname: '/game',
			path: '/game?action=rock',
			href: '/game?action=rock'
		}
	 */
	const parseUrl = url.parse(req.url);
	if (parseUrl.pathname == '/favicon.ico') {
		res.writeHead(200);
		res.end();
	} else if (parseUrl.pathname == '/') {
		res.writeHead(200);
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else {
		// 判断玩家赢了多少局
		if (playerWon >= 3) {
			res.writeHead(500);
			res.end('不和你玩了!');
			return;
		}

		// 判断玩家连续出相同的拳
		if (sameActionCount >= 2) {
			res.writeHead(400);
			res.end('你作弊, 不玩了');
			playerWon = 4; // 发现作弊之后, 电脑方就不和玩家玩了, 需要制造条件让其卡在第一个判断里
			return; // 还是需要return的, 否则依然会向后执行
			console.log('after res.end');
		}

		/**
		 * { action: 'scissor' }
		 */
		const query = qs.parse(parseUrl.query);
		const playerAction = query.action; // 写多一个变量可读性好很多
		const gameResult = game(playerAction);

		// 返回猜拳结果
		res.writeHead(200);
		switch (gameResult) {
			case 0:
				res.end('平局');
				break;
			case 1:
				res.end('你赢了');
				playerWon++;
				break;
			case -1:
				res.end('你输了');
				break;
			default:
				res.end('咦，刚刚发生了什么');
		}

		// 统计玩家出连续相同的拳
		if (playerAction == playerLastAction) {
			sameActionCount++;
		} else {
			sameActionCount = 0;
			playerLastAction = playerAction;
		}
	}
}).listen(3000);
