/**
 * 忽略具体的业务逻辑,
 * 主要学习：
 * 1. koa是怎样提供http服务的: context对象 - ctx.status=200 - ctx.body=xxx
 * 2. koa中间件是怎样支持洋葱模型的: async function
 * 3. koa的极简设计使得开发者在使用上有什么特点: 所有东西都可以看作中间件
 */

const koa = require('koa');
const mount = require('koa-mount'); // Mount other Koa applications as middleware.
const fs = require('fs'); // file system 模块
const game = require('./game.js');

// 全局变量还是要的
let playerWon = 0;
let playerLastAction = null;
let sameActionCount = 0;

const app = new koa();

// mount单次只支持传入一个中间件
// 如果要引用多个中间件，可以在另一个koa实例中多次use多个中间件，然后再mount这个新建的koa实例作为中间件，以此间接地引用了多个中间件
const gameKoa = new koa();

// koa单次也只允许引入一个中间件
gameKoa.use(async function(ctx, next) {
	// 判断玩家赢了多少局
	if (playerWon >= 3) {
		ctx.status = 500;
		ctx.body = '不和你玩了';
		return;
	}

	await next();

	// 将相同业务逻辑的代码放到一个中间件里面, next之后的代码会在执行完后面的中间件之后返回来
	if (ctx.playerWon) {
		playerWon++;
	}
});
gameKoa.use(async function(ctx, next) {
	// 发现作弊之后电脑不跟玩家玩了
	if (sameActionCount == 4) {
		ctx.status = 500;
		ctx.body = '不和你玩了';
		return;
	}

	// 判断玩家连续出相同的拳
	if (sameActionCount >= 2) {
		ctx.status = 400;
		ctx.body = '你作弊, 不玩了';
		sameActionCount = 4;
		return;
	}

	await next();

	const playerAction = ctx.playerAction; // 获取传过来的playerAction
	if (playerAction == playerLastAction) {
		sameActionCount++;
	} else {
		sameActionCount = 0;
		playerLastAction = playerAction;
	}
});
gameKoa.use(async function(ctx) {
	const playerAction = ctx.query.action;
	const gameResult = game(playerAction);

	// 异步操作要通过await关键字来等待, 并用promise包裹起来 ！！！！
	await new Promise((resolve, reject) => {
		setTimeout(function() {
			// 返回猜拳结果
			switch (gameResult) {
				case 0:
					ctx.body = '平局';
					break;
				case 1:
					ctx.body = '你赢了';
					ctx.playerWon = true;
					break;
				case -1:
					ctx.body = '你输了';
					break;
				default:
					ctx.body = '咦，刚刚发生了什么';
			}
			resolve();
		}, 500);
	});

	ctx.playerAction = playerAction; // playerAction为局部变量, 需要传递
});

/**
gameKoa.use(function(ctx) {
	const playerAction = ctx.query.action;
	const gameResult = game(playerAction);

	// 不用await和Promise包裹 --- 则程序不认为这里是异步操作！
	setTimeout(function() {
		// 返回猜拳结果
		switch (gameResult) {
			case 0:
				ctx.body = '平局';
				break;
			case 1:
				ctx.body = '你赢了';
				ctx.playerWon = true;
				break;
			case -1:
				ctx.body = '你输了';
				break;
			default:
				ctx.body = '咦，刚刚发生了什么';
		}
	}, 500);

	ctx.playerAction = playerAction; // playerAction为局部变量, 需要传递
});
*/

app.use(mount('/game', gameKoa)); // 这个必须放在 mount('/') 之前, 否则会先匹配 mount('/')...

// 路由 - Mount other Koa applications as middleware.
app.use(
	// 增加了context对象
	mount('/favicon.ico', function(ctx) {
		// request、response的处理更加简单粗暴
		ctx.status = 200;
	}),
);

app.use(
	mount('/', function(ctx) {
		// request、response的处理更加简单粗暴
		ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8'); // 要制定返回的是utf-8, 否则会返回buffer而执行下载
	}),
);

app.listen(3000);
