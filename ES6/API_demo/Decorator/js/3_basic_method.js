/**
 * 2. 方法的修饰 
 *
 * 修饰器不仅可以修饰类,还可以修饰类的属性. 
 */
class Person {
    @readonly
    name() { return `${this.first} ${this.last}` }
}


/**
 * 上面代码中,修饰器readonly用来修饰“类”的name方法.  
 * 
 * 修饰器函数readonly一共可以接受三个参数. 
 */
function readonly(target, name, descriptor) {
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    // console.log(target);
    // console.log(name);
    // console.log(descriptor);
    descriptor.writable = false;
    return descriptor;
}

/**
 * readonly(Person.prototype, 'name', descriptor); 
 * -- 类似于 --
 * Object.defineProperty(Person.prototype, 'name', descriptor);
 *  
 * 修饰器
 * 第一个参数是类的原型对象,上例是Person.prototype,修饰器的本意是要“修饰”类的实例,
 * 但是这个时候实例还没生成,所以只能去修饰原型（这不同于类的修饰,那种情况时target参数指的是类本身）
 * 第二个参数是所要修饰的属性名,
 * 第三个参数是该属性的描述对象.  
 * 另外,上面代码说明,修饰器（readonly）会修改属性的描述对象（descriptor）,然后被修改的描述对象再用来定义属性. 
 */

// 下面是另一个例子,修改属性描述对象的enumerable属性,使得该属性不可遍历. 
class PersonNone {
    @nonenumerable
    get kidCount() { return this.children.length; }
    // 与 ES5 一样,在“类”的内部可以使用get和set关键字,对某个属性设置存值函数和取值函数,拦截该属性的存取行为. 
}

function nonenumerable(target, name, descriptor) {
    // console.log(target);
    // console.log(name);
    // console.log(descriptor);
    descriptor.enumerable = false;
    return descriptor;
}

// 下面的@log修饰器,可以起到输出日志的作用
class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments);
    };

    return descriptor;
}

const math = new Math();

// passed parameters should get logged now
console.log(math.add(2, 4));
// 上面代码中,@log修饰器的作用就是在执行原始的操作之前,执行一次console.log,从而达到输出日志的目的. 

// // 修饰器有注释的作用. 
// @testable
// class PersonAll {
//     @readonly
//     @nonenumerable
//     name() { return `${this.first} ${this.last}` }
// }