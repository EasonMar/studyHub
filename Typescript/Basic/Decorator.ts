/**
 * ====================================================================================================================================
 * Decorator 初探
 */
// Decorator for class
function addAge(arg: number) {
    // target的type是 Function... Tip: 类的写法只是一个语法糖, 其本质是一个 Function
    return function (target: Function) {
        // 在 prototype 上 修改... Tip: 想添加实例属性，可以通过目标类的 prototype 对象操作。
        target.prototype.age = arg;
    };
}


// Decorator for property  --- Tip: diff between TypedPropertyDescriptor & PropertyDescriptor ？TypedPropertyDescriptor 就是可以规定 value、get-set返回值类型 的 PropertyDescriptor
function readonly(target: object, name: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
    return descriptor
}

@addAge(18)
class Hello {
    name: string;
    age!: number;
    constructor() {
        console.log('Hello! New born');
        this.name = 'yugo';
    }

    @readonly
    myFun() {
        console.log('myFyn')
    }
}

console.log(Hello.prototype.age); // 18
const hello = new Hello();
console.log(hello.age); // 18

// hello.myFun = function () { console.log('XXXXXXX') } 
// TypeError: Cannot assign to read only property 'myFun'



/**
 * ========================================================================================================================================
 * 类装饰器
 * 这部分代码的含义是：被classDecorator装饰的类里面如果不存在newProperty或desc属性，会增加相应的属性和对应的value，如果存在该属性就会重写该属性的value。
 */
// <T extends { new(...args: any[]): {} }> --- Tip: 看不懂
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    // 匿名类...?
    return class extends constructor {
        newProperty = "new property";
        desc = "override";
    }
}

@classDecorator
class AnimalDeco {
    property = "property";
    desc: string;
    constructor(m: string) {
        this.desc = m;
    }
}


console.log(new AnimalDeco("world"))


/**
 * ========================================================================================================================================
 * 方法装饰器 
 */
function logMethod(
    target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor): PropertyDescriptor {

    // target === EmployeeDeco.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(EmployeeDeco.prototype, "greet")

    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {
        // 调用该方法并让它返回结果
        const result = method.apply(this, args);

        // 在控制台中显示函数调用细节 - 将参数列表、结果转换为字符串
        const params = args.map(a => JSON.stringify(a)).join();
        const r = JSON.stringify(result);
        console.log(`Call: ${propertyName}(${params}) => ${r}`);

        // 返回调用的结果
        return result;
    }
    return propertyDesciptor;
};

class EmployeeDeco {

    constructor(
        private firstName: string,
        private lastName: string
    ) { }

    @logMethod
    greet(message: string): string {
        return `${this.firstName} ${this.lastName} : ${message}`;
    }

}

const emp = new EmployeeDeco('中', '孝义');
console.log(emp.greet('这些必须有啊')); // return: '三月风情 陌上花开 : 三月风情陌上花'


/**
 * ========================================================================================================================================
 * 访问器装饰器
 */


