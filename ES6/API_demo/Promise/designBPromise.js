class MyPromise {
	constructor(executor) {
		this.state = 'pending';
		this.value = null;
		this.reason = null;
		this.callbacks = [];
		const resolve = (value) => {
			if (this.state !== 'pending') return;
			this.state = 'fulfilled';
			this.value = value;
			this.callbacks.forEach((callback) => callback.fulfilled(value));
		};
		const reject = (reason) => {
			if (this.state !== 'pending') return;
			this.state = 'rejected';
			this.reason = reason;
			this.callbacks.forEach((callback) => callback.rejected(reason));
		};
		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}
	then(onFulfilled, onRejected) {
		if (typeof onFulfilled !== 'function') onFulfilled = (value) => value;
		if (typeof onRejected !== 'function')
			onRejected = (reason) => {
				throw reason;
			};
		let promise = new MyPromise((resolve, reject) => {
			if (this.state === 'fulfilled') {
				setTimeout(() => {
					try {
						this.resolvePromise(promise, onFulfilled(this.value), resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			}
			if (this.state === 'rejected') {
				setTimeout(() => {
					try {
						this.resolvePromise(promise, onRejected(this.reason), resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			}
			if (this.state === 'pending') {
				this.callbacks.push({
					fulfilled: () => {
						setTimeout(() => {
							try {
								this.resolvePromise(promise, onFulfilled(this.value), resolve, reject);
							} catch (error) {
								reject(error);
							}
						});
					},
					rejected: () => {
						setTimeout(() => {
							try {
								this.resolvePromise(promise, onRejected(this.reason), resolve, reject);
							} catch (error) {
								reject(error);
							}
						});
					},
				});
			}
		});
		return promise;
	}
	resolvePromise(promise, result, resolve, reject) {
		if (promise === result) reject(new TypeError('Chaining cycle detected for promise'));
		if ((result && typeof result === 'object') || typeof result === 'function') {
			let called;
			try {
				let then = result.then;
				if (typeof then === 'function') {
					then.call(
						result,
						(value) => {
							if (called) return;
							called = true;
							this.resolvePromise(promise, value, resolve, reject);
						},
						(reason) => {
							if (called) return;
							called = true;
							reject(reason);
						},
					);
				} else {
					if (called) return;
					called = true;
					resolve(result);
				}
			} catch (error) {
				if (called) return;
				called = true;
				reject(error);
			}
		} else {
			resolve(result);
		}
	}
}

// 以下写法有问题, resolve里 onFulfilled 一开始是null 执行报错
/**
 * class MyPromise {
 *  constructor(executor) {
 *     this.state = "pending";
 *     this.value = null;
 *     this.reason = null;
 *     this.onFulfilled = null;
 *     this.onRejected = null;
 *     const resolve = (value) => {
 *       if (this.state !== "pending") return;
 *       this.state = "fulfilled";
 *       this.value = value;
 *  	 // 这里可能报错...
 *       this.onFulfilled(value);
 *     };
 *     const reject = (reason) => {
 *       if (this.state !== "pending") return;
 *       this.state = "rejected";
 *       this.reason = reason;
 *       this.onRejected(reason);
 *     };
 *     try {
 *       executor(resolve, reject);
 *     } catch (error) {
 *       reject(error);
 *     }
 *   }
 *   then(onFulfilled, onRejected) {
 *     if (this.state === "fulfilled") {
 *       onFulfilled(this.value);
 *     }
 *     if (this.state === "rejected") {
 *       onRejected(this.reason);
 *     }
 *     if (this.state === "pending") {
 *       this.onFulfilled = onFulfilled;
 *       this.onRejected = onRejected;
 *     }
 *   }
 * }
 * var mp = new MyPromise((res, rej) => {
 *   res("success");
 * });
 *
 * mp.then((res) => {
 *   console.log(`mp.then => ${res}`);
 * });
 */
