/**
 * Reflect是ES6为操作对象而提供的新API,而这个API设计的目的只要有：
 * 
 * 1. 将Object对象的一些属于语言内部的方法放到Reflect对象上，从Reflect上能拿到语言内部的方法。
 *    如：Object.defineProperty
 * 
 * 2. 修改某些object方法返回的结果。
 *    如：Object.defineProperty(obj, name, desc)在无法定义属性的时候会报错，而Reflect.defineProperty(obj, name, desc)则会返回false
 * 
 * 3. 让Object的操作都变成函数行为。
 *    如object的命令式：name in obj和delete obj[name] 则与 Reflect.has(obj, name)、Reflect.deleteProperty(obj, name)相等
 * 
 * 4. Reflect对象的方法与Proxy对象的方法一一对应，只要proxy对象上有的方法reflect也能找到。
 */

// 老写法
console.log(  Function.prototype.apply.call(Math.floor, undefined, [1.75])  );
console.log(  Math.floor.apply(undefined,[1.75])  );
// 以上两者相同

// 新写法
console.log(  Reflect.apply(Math.floor, undefined, [1.75])  ); // 1

/**
 * Reflect一共有13个静态方法，其API如下：
 * Reflect.apply(target, thisArg, args) // target:目标对象, thisArg:上下文this, args:参数
 * Reflect.construct(target, args)
 * Reflect.get(target, name, receiver) // target:目标对象, name:属性名, receiver:如下所述
 * Reflect.set(target, name, value, receiver)
 * Reflect.defineProperty(target, name, desc)
 * Reflect.deleteProperty(target, name)
 * Reflect.has(target, name)
 * Reflect.ownKeys(target)
 * Reflect.isExtensible(target)
 * Reflect.preventExtensions(target)
 * Reflect.getOwnPropertyDescriptor(target, name)
 * Reflect.getPrototypeOf(target)
 * Reflect.setPrototypeOf(target, prototype)
*/

// 设置和获取对象属性, 这两个方法还允许接受一个receiver，用于重定义setter和getter方法的上下文。(重新指定this)
// 演示一下receiver的使用方法
var o = { name: 'O' }

Object.defineProperty(o, 'sayHi', {
    get() { return 'hi, I am ' + this.name }
})

console.log(   o.sayHi   ); // "hi, I am O"

var receiver = { name: 'receiver' }
// 下面是关键， 看好咯~
console.log(   Reflect.get(o, 'sayHi', receiver)   ); // "hi, I am receiver"