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
	// try catch
	execute(resolve, reject);
}

APromise.prototype.then = function (onFulfilled, onRejected) {
	onFulfilled =
		typeof onFulfilled === 'function'
			? onFulfilled
			: (data) => {
					return data;
			  };
	onRejected =
		typeof onRejected === 'function'
			? onRejected
			: (error) => {
					throw error;
			  };

	if (this.status === 'fulfilled') {
		return new APromise((resolve, reject) => {
			// 原生 Promise 中 promise.then() 括号内部的代码是异步执行的。
			// 因此不论何种情况，我们都需要让其异步执行：
			// 这块 queueMicrotask 有点多余了吧... resolve、reject本身就加了 queueMicrotask
			// queueMicrotask(() => {
			try {
				let result = onFulfilled(this.value);
				resolve(result);
			} catch (e) {
				reject(e);
			}
			// })
		});
	}

	if (this.status === 'rejected') {
		return new APromise((resolve, reject) => {
			// Todo - 这块 queueMicrotask 有点多余了吧... resolve、reject本身就加了 queueMicrotask
			// queueMicrotask(() => {
			try {
				let result = onRejected(this.reason);

				// Note：这里依旧是 resolve 而不是 reject
				// 因为各 promise 的状态是不应该互相影响的，上一个 promise 只要不抛错，下一个 promise 就应该执行 onResolved 回调
				resolve(result);
			} catch (e) {
				reject(e);
			}
			// })
		});
	}

	if (this.status === 'pending') {
		return new APromise((resolve, reject) => {
			this.onFulfilledArray.push(() => {
				try {
					let result = onFulfilled(this.value);
					resolve(result);
				} catch (e) {
					reject(e);
				}
			});
			this.onRejectedArray.push(() => {
				try {
					let result = onRejected(this.reason);
					resolve(result);
				} catch (e) {
					reject(e);
				}
			});
		});
	}
};

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
