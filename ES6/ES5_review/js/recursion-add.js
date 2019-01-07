// add(3,4)输出7，add(3)(4)输出7，add(3,4)(5)输出12, add(3,4)(5)(6)输出18，以此类推
// 
// 考点
//  1. 函数要能链式调用
// 	2. 要判断传入的参数的情况 --- 直接用ES6的rest参数, 方便快捷
// 	3. 要把上一层的参数累加值传到下一层调用中 --- 用作用域锁死某个累加值
// 	4. 最后一层调用才返回结果 - 如何判断哪个是最后一层调用 ... 应该还有更优解. 我是用了异步事件来拖延最后的输出！
function add(...inputs) {
	// 赋初值
	this.result === undefined && (this.result = 0);
	
    // 累加
    this.result += inputs.reduce((c, n) => c + n, 0);

    // 如果有多一次调用,清除定时器
    clearTimeout(this.timmer);

    // 定时器 用此机制来判定是否为最后一层调用，要不要输出结果
    this.timmer = setTimeout(() => {

    	// 输出值
    	console.log(this.result);

    	// 输出之后,要来个清零, 等待下次计算
    	this.result = 0;
    }, 1);

    // 链式调用 (因为这里add就是全局的, 可以不用bind(this)来绑定上下文, 但是某些情况下可能需要)
    return add.bind(this);
}
// 怎样可以做到result是内部私有变量，然后每次调用都重新计算result值 --- 闭包



/**
 * 网上找的参考 - 实测不符合我当前这题
 */
function add(...rest) {
    var sum = 0; // 闭包也是考点！

    sum = rest.reduce((accumulator, currentValue) => accumulator + currentValue, sum);

    function outer(...inrest) {
        if (inrest.length == 0) {
            return sum;
        } else {
            sum = inrest.reduce((accumulator, currentValue) => accumulator + currentValue, sum);
            return outer;
        }
    }
    return outer
}
console.log(add()(1)(2, 3)()); //6