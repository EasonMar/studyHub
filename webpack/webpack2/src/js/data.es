const m = new Map();
m.set('data', 'Index init');

// 开始使用ES6的Module规则了
export const test = function(){
	console.log('test treeShaking');
}

export const data = m.get('data');