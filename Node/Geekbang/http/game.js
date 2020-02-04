module.exports = function(playerAction) {
	if (['rock', 'scissor', 'paper'].indexOf(playerAction) == -1) {
		throw new Error('invalid playerAction');
	}
	// 计算电脑出的拳
	var computerAction;
	var random = Math.random() * 3;
	if (random < 1) {
		computerAction = 'rock';
	} else if (random > 2) {
		computerAction = 'scissor';
	} else {
		computerAction = 'paper';
	}

	// 判断输赢
	if (computerAction == playerAction) {
		return 0; // 平局
	} else if (
		(computerAction == 'rock' && playerAction == 'scissor') ||
		(computerAction == 'scissor' && playerAction == 'paper') ||
		(computerAction == 'paper' && playerAction == 'rock')
	) {
		return -1; // 输
	} else {
		return 1; // 赢
	}
};
