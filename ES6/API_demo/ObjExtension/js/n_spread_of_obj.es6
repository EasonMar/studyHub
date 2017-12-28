// 对象的扩展运算符.

// 扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
let z = { a: 3, b: 4 };
let n = { ...z };
console.log(n); // { a: 3, b: 4 }
// 这等同于使用Object.assign方法。

/*
 * 扩展运算符可以用于合并两个对象。
 * let ab = { ...a, ...b };
 * 等同于
 * let ab = Object.assign({}, a, b);
 */

/**
 * 如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。
 *
 * let aWithOverrides = { ...a, x: 1, y: 2 };
 * 等同于
 * let aWithOverrides = { ...a, ...{ x: 1, y: 2 } };
 * 等同于
 * let x = 1, y = 2, aWithOverrides = { ...a, x, y };
 * 等同于
 * let aWithOverrides = Object.assign({}, a, { x: 1, y: 2 });
 * 上面代码中，a对象的x属性和y属性，拷贝到新对象后会被覆盖掉。
 */

// 这用来修改现有对象部分的属性就很方便了。
/*let newVersion = {
  ...previousVersion,
  name: 'New Name' // Override the name property
};*/


const initialCalendarState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
}

let spread_state = {
	...initialCalendarState,
	sunday:{
		...initialCalendarState.sunday,  // 更新对象属性竟然可以这样玩！！
		// --->>> 这部分应该这样看...(initialCalendarState.sunday),
		// initialCalendarState.sunday本身就是一个object,相当于...object;
		// 不要理解成(...initialCalendarState).sunday.
		breakfast: 'bread'
	}
}

console.log(spread_state);
console.log({...initialCalendarState});