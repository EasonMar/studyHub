/**
 * 1. 概述
 * 
 * Proxy 用于修改某些操作的默认行为, 等同于在语言层面做出修改, 所以属于一种“元编程”（meta programming）, 即对编程语言进行编程. 
 *
 * Proxy 可以理解成, 在目标对象之前架设一层“拦截”, 外界对该对象的访问, 都必须先通过这层拦截, 因此提供了一种机制, 可以对外界的访问进行过滤和改写. 
 * Proxy 这个词的原意是代理, 用在这里表示由它来“代理”某些操作, 可以译为“代理器”. 
 */
var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

/**
 * 上面代码对一个空对象架设了一层拦截, 重定义了属性的读取（get）和设置（set）行为. 
 * 这里暂时先不解释具体的语法, 只看运行结果. 
 * 对设置了拦截行为的对象obj, 去读写它的属性, 就会得到下面的结果. 
 */

obj.count = 1; //  setting count!
++obj.count; //  getting count! //  setting count! //  2

/**
 * 上面代码说明, Proxy 实际上重载（overload）了点运算符, 即用自己的定义覆盖了语言的原始定义. 
 */


/**
 * ES6 原生提供 Proxy 构造函数, 用来生成 Proxy 实例. 
 *
 * var proxy = new Proxy(target, handler);
 *
 * Proxy 对象的所有用法, 都是上面这种形式, 不同的只是handler参数的写法. 
 * 其中, new Proxy()表示生成一个Proxy实例, target参数表示所要拦截的目标对象, handler参数也是一个对象, 用来定制拦截行为. 
 */

/**
 * 下面是另一个拦截读取属性行为的例子. 
 */
var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }
});

proxy.time; // 35
proxy.name; // 35
proxy.title; // 35
/**
 * 上面代码中, 作为构造函数, Proxy接受两个参数. 
 * 第一个参数是所要代理的目标对象（上例是一个空对象）, 即如果没有Proxy的介入, 原来要访问的就是这个对象；
 * 第二个参数是一个配置对象, 对于每一个被代理的操作, 需要提供一个对应的处理函数, 该函数将拦截对应的操作. 
 * 比如, 上面代码中, 配置对象有一个get方法, 用来拦截对目标对象属性的访问请求. 
 * get方法的两个参数分别是目标对象和所要访问的属性. 可以看到, 由于拦截函数总是返回35, 所以访问任何属性都得到35. 
 */



// 同一个拦截器函数, 可以设置拦截多个操作. 
var handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    apply: function(target, thisBinding, args) {
        return args[0];
    },

    construct: function(target, args) {
        return { value: args[1] };
    }
};

var fproxy = new Proxy(function(x, y) {
    return x + y;
}, handler);

fproxy(1, 2); 		// 1
new fproxy(1, 2); 	// {value: 2}
fproxy.prototype === Object.prototype; // true
fproxy.foo === "Hello, foo"; 		   // true