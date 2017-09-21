/**
 * let, const, 
 * class, extends, super, 
 * arrow functions, 
 * template string, 
 * destructuring, 
 * default, 
 * rest arguments
 */


/**
 * class, extends, super
 */
class Animal {
    constructor() {
        this.type = 'animal'
    }
    says(say) {
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
    constructor() {
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hello') //cat says hello

/**
 * super关键字,它指代父类的实例(即父类的this对象). 
 * 子类必须在constructor方法中调用super方法,否则新建实例时会报错.
 * 这是因为子类没有自己的this对象,而是继承父类的this对象,然后对其进行加工.
 * 如果不调用super方法,子类就得不到this对象.
 */



/**
 * template string
 * 用反引号 ` 来标识起始,用${}来引用变量,而且所有的空格和缩进都会被保留在输出之中
 */
// 旧
$("#result").append(
    "There are <b>" + basket.count + "</b> " +
    "items in your basket, " +
    "<em>" + basket.onSale +
    "</em> are on sale!"
);
// 模板字符串
$("#result").append(`
   There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
   are on sale!
`);