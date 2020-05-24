export function onceFunction<T>(fn: T): T {
	let once = true;
	// 不能将类型“(...a: unknown[]) => unknown”分配给类型“T”
	const onceFunction: T = function (...a: unknown[]): unknown {
		if (once) {
			once = false;
			if (fn instanceof Function) {
				return fn(...a);
			}
		}
	};
	return onceFunction;
}
/**
 * 作者回复: 需要注意两点：
 * 1）函数的参数和返回值要区分别约束
 * 2）onceFunction 返回的函数可能会返回 void
 */
