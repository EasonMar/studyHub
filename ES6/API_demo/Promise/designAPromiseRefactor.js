// Promise/A+ 2.1：https://promisesaplus.com/

function APromise(execute) {
	this.status = 'pending';
	this.value = null;
	this.reason = null;

	this.onFulfilledArray = [];
	this.onRejectedArray = [];

	const resolve = (value) => {
		queueMicrotask(() => {
			if (this.status === 'pending') {
				this.value = value;
				this.status = 'fulfilled';
				this.onFulfilledArray.forEach((func) => func(value));
			}
		});
	};

	const reject = (reason) => {
		queueMicrotask(() => {
			if (this.status === 'pending') {
				this.reason = reason;
				this.status = 'rejected';
				this.onRejectedArray.forEach((func) => func(reason));
			}
		});
	};

	try {
		execute(resolve, reject);
	} catch (e) {
		reject(e);
	}
}

APromise.prototype.then = function (onFulfilled, onRejected) {
	onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (data) => data;

	// Note: onRejected 相当于 catch，catch之后当然可以继续接 then
	// 所以可以理解为啥 status === 'rejected' 之后依然是调用 resolve，把接力棒给到下一个 promise
	onRejected =
		typeof onRejected === 'function'
			? onRejected
			: (error) => {
					throw error;
			  };

	// 要实现 then 的链式调用, then方法必须返回一个 promise 对象
	return new APromise((resolve, reject) => {
		try {
			if (this.status === 'fulfilled') {
				resolve(onFulfilled(this.value));
			}
			if (this.status === 'rejected') {
				// Note：这里依旧是 resolve 而不是 reject
				// 因为各 promise 的状态是不应该互相影响的，上一个 promise 只要不抛错，下一个 promise 就应该执行 onResolved 回调
				resolve(onRejected(this.reason));
			}
			if (this.status === 'pending') {
				this.onFulfilledArray.push(catcher(reject, () => resolve(onFulfilled(this.value))));
				this.onRejectedArray.push(catcher(reject, () => resolve(onRejected(this.reason))));
				// this.onFulfilledArray.push(() => resolve(onFulfilled(this.value)));
				// this.onRejectedArray.push(() => resolve(onRejected(this.reason)));
			}
		} catch (e) {
			reject(e);
		}
	});
};

// 封装 处理函数
// 其实execute那里已经try --- catch 了，这里应该不需要了吧
// 不能省略，因为execute是同步函数，而 resolve\reject 是送到了 微任务队列里的 异步函数
function catcher(reject, cb) {
	return () => {
		try {
			cb();
		} catch (e) {
			reject(e);
		}
	};
}

new APromise((resolve) => resolve()).then(() => console.log(1));
console.log(2);

// new APromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello luyi');
//         console.log("settimeout")
//     }, 1000)
// }).then(res => {
//     console.log(res);   // hello luyi
//     return res + "luyi"
// }).then(res => {
//     console.log(res)    // hello luyi luyi
//  })
