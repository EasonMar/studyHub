require('../css/index.less');

// 开始使用ES6的Module规则了 -- 估计是因为本身集成了babel吧？
import {data} from './data.es';

// 异步引入包，会触发code splitting，生成另外一个bundle包
import('./async.es').then(function(res){
	res.default();
})
console.log(data);